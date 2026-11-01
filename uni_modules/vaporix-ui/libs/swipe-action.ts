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

/** 一行的登记项。open 只记已经落定的展开，收起其他行时跳过合上的，避免长列表每次滑动都把每一行叫一遍。 */
type VxSwipeActionPeer = {
	key: string
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

export function vxRegisterSwipeAction(key: string, close: () => void, open: boolean) {
	for (let index = 0; index < peers.length; index++) {
		if (peers[index].key === key) {
			peers[index].close = close
			peers[index].open = open
			return
		}
	}
	peers.push({ key: key, close: close, open: open })
}

export function vxSetSwipeActionOpen(key: string, open: boolean) {
	for (let index = 0; index < peers.length; index++) {
		if (peers[index].key === key) {
			peers[index].open = open
			return
		}
	}
}

export function vxUnregisterSwipeAction(key: string) {
	for (let index = peers.length - 1; index >= 0; index--) {
		if (peers[index].key === key) peers.splice(index, 1)
	}
}

/** 默认只留一行。先抄出已展开的行再收起，避免收起过程里卸载把表改短、跳过后面的行。 */
export function vxCloseOtherSwipeActions(key: string) {
	const closing: Array<VxSwipeActionPeer> = []
	for (let index = 0; index < peers.length; index++) {
		const peer = peers[index]
		if (peer.key !== key && peer.open) closing.push(peer)
	}
	for (let index = 0; index < closing.length; index++) {
		closing[index].close()
	}
}
