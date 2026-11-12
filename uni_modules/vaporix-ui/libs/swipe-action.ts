/**
 * 滑动菜单的手势要按像素换算，读不到 CSS 变量，这里与 DESIGN.md 手工保持一致：
 * 动作默认宽 72，extra 插槽默认宽 80；滑过菜单宽度的一半就展开，快速轻扫按 24px / 250ms 判定。
 */
export const VX_SWIPE_ACTION_ITEM_WIDTH = 72
export const VX_SWIPE_ACTION_EXTRA_WIDTH = 80

/** 横向移动超过这个像素才接管手势，纵向滚动和普通点按不受影响。 */
export const VX_SWIPE_ACTION_DRAG_THRESHOLD = 8

/** 快速轻扫：位移至少 24px，且从按下到抬起不超过 250ms。 */
export const VX_SWIPE_ACTION_FLICK_DISTANCE = 24
export const VX_SWIPE_ACTION_FLICK_TIME = 250

/** 滑动结束后浏览器还会补发一次 click，这段时间挡住，避免触发行点击。 */
export const VX_SWIPE_ACTION_CLICK_GUARD = 300

/**
 * 一行的登记项。open 只记已经落定的展开，收起其他行时跳过合上的，避免长列表每次滑动都把每一行叫一遍。
 * group 相同的行才互斥：一个页面上两个列表各传一组，导航栈下层的页面另算。
 */
type VxSwipeActionPeer = {
	key: string
	group: string
	open: boolean
	close: () => void
}

const peers: Array<VxSwipeActionPeer> = []
let peerSeed = 0

/** 生成实例键。同一页面里用来排除自己，不参与渲染。 */
export function vxSwipeActionKey(): string {
	peerSeed += 1
	return `vx-swipe-action-${peerSeed}`
}

/**
 * 不传 group 时的默认组，按页面分。
 * 页面在栈里的位置到卸载前不会变，所以各页的普通列表各成一组；tab 页切换后还可能占同一个位置，带上 route 区分；
 * 同名页面压两次也靠位置分开。组件创建时栈顶就是它所在的页面。
 */
export function vxSwipeActionPageGroup(): string {
	const pages = getCurrentPages()
	const page = pages[pages.length - 1]
	if (page == null) return 'vx-swipe-action-page'
	return `${page.route}#${pages.length - 1}`
}

export function vxRegisterSwipeAction(key: string, group: string, close: () => void, open: boolean) {
	for (let index = 0; index < peers.length; index++) {
		if (peers[index].key === key) {
			peers[index].group = group
			peers[index].close = close
			peers[index].open = open
			return
		}
	}
	peers.push({ key: key, group: group, close: close, open: open })
}

export function vxSetSwipeActionOpen(key: string, group: string, open: boolean) {
	for (let index = 0; index < peers.length; index++) {
		const peer = peers[index]
		if (peer.key === key && peer.group === group) {
			peer.open = open
			return
		}
	}
}

export function vxUnregisterSwipeAction(key: string, group: string) {
	for (let index = peers.length - 1; index >= 0; index--) {
		const peer = peers[index]
		if (peer.key === key && peer.group === group) peers.splice(index, 1)
	}
}

/** 同一组只留一行。先抄出已展开的行再收起，避免收起过程里卸载把表改短、跳过后面的行。 */
export function vxCloseOtherSwipeActions(key: string, group: string) {
	const closing: Array<VxSwipeActionPeer> = []
	for (let index = 0; index < peers.length; index++) {
		const peer = peers[index]
		if (peer.group === group && peer.key !== key && peer.open) closing.push(peer)
	}
	for (let index = 0; index < closing.length; index++) {
		closing[index].close()
	}
}
