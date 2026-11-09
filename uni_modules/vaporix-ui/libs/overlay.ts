/**
 * 弹层公共底座：层级、进出场时长、安全区和滚动锁。
 * 只放常量和纯函数——各端生命周期不同，读写状态留给组件自己。
 * 数值与 variables.css、DESIGN.md 手工对齐：组件读不到 CSS 变量，脚本里要排像素。
 */

/**
 * 默认层级：弹层压在页面内容、吸顶条和导航栏上，低于数字键盘。
 *
 * App 端页面里的 scroll-view 是独立原生层，层序在普通页面内容之上；底座原先用 90
 * 时会被压在滚动层下面：看得见交互、看不见面板，触摸仍被遮罩接住（多实例页面
 * 表现为整页点按失活）。这里把整组弹层层级抬到 1000，保持原有相对顺序，
 * 同时仍在常见页面层（< 10）和业务自绘浮层（通常 < 100）之上。
 */
export const VX_OVERLAY_LAYER = 1000

/** 数字键盘的 sheet：压在弹层上，略低于消息提示。 */
export const VX_OVERLAY_KEYBOARD_LAYER = 1005

/** 消息提示：压在弹层和数字键盘上。 */
export const VX_OVERLAY_TIPS_LAYER = 1010

/** 图片预览：压在消息提示上，弹框自然叠在预览层上，预览里能再弹确认。 */
export const VX_OVERLAY_GALLERY_LAYER = 1015

/** 弹框：压在消息提示上，低于加载浮层。 */
export const VX_OVERLAY_MODAL_LAYER = 1020

/** 加载浮层和加载动画浮层：只低于轻提示。 */
export const VX_OVERLAY_LOADER_LAYER = 1050

/** 轻提示：全库最高的一档。 */
export const VX_OVERLAY_TOAST_LAYER = 1100

/** 默认进出场时长，单位毫秒；与 variables.css 的 --vx-duration-normal 手工保持一致。 */
export const VX_OVERLAY_DURATION = 220

/** duration 传 0 时直接切换，不挂过渡类，也不等动画。 */
export const VX_OVERLAY_DURATION_NONE = 0

/**
 * 换场留的一帧，单位毫秒。
 * 挂载和落位分两帧，过渡才有起点；退场等 duration 加上这一帧再卸载，
 * 少等于把最后一帧删掉，面板会从中间状态直接消失。
 */
export const VX_OVERLAY_FRAME = 16

/**
 * 贴边方向 → 需要让开的安全区边。
 * 只有上下贴边由面板内边距让开顶部或底部；左右面板的侧边安全区每档都要让，
 * 居中面板由组件自己留 24。
 */
export function vxOverlaySafeEdge(placement: string): 'top' | 'bottom' | '' {
	if (placement === 'top') return 'top'
	if (placement === 'bottom') return 'bottom'
	return ''
}

/**
 * 圆角档位 → 每侧半径（px 数值）。贴边那条边固定 0，剩下的由调用方决定挂在哪两角。
 * 与 variables.css 的 --vx-radius-sm / md / lg（6 / 8 / 12）手工保持一致。
 */
export function vxOverlayRadius(round: string): number {
	if (round === 'none') return 0
	if (round === 'sm') return 6
	if (round === 'md') return 8
	return 12
}

/**
 * 滚动锁的类名，Web 和小程序共用。
 * 样式写在 variables.css：组件的样式带 [data-v-*] 作用域，够不到页面根节点。
 */
export const VX_SCROLL_LOCK_CLASS = 'vx-scroll-lock'

/**
 * 同页可能叠两个弹层，锁用一个计数记着：第一个打开时写类名，最后一个收起时才移除。
 * Web 的页面根节点是 body；小程序拿不到页面根节点，App 没有等价手段，函数体在编译时整段移除，
 * 换成遮罩上的手势拦截，平台差异见组件 readme。
 */
let pageLockCount = 0

export function vxLockPageScroll() {
	// #ifdef WEB
	pageLockCount += 1
	if (pageLockCount > 1) return
	if (typeof document === 'undefined') return
	document.body.classList.add(VX_SCROLL_LOCK_CLASS)
	// #endif
}

export function vxUnlockPageScroll() {
	// #ifdef WEB
	if (pageLockCount > 0) pageLockCount -= 1
	if (pageLockCount > 0) return
	if (typeof document === 'undefined') return
	document.body.classList.remove(VX_SCROLL_LOCK_CLASS)
	// #endif
}
