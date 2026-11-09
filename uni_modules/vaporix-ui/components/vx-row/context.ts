/** provide / inject 的 key。只在 vx-row 和 vx-col 之间使用。 */
export const VX_ROW_CONTEXT = 'vx-row-context'

/**
 * 行向列暴露的间距和窗口宽度。
 *
 * 全部用函数而不是 ref：列在自己的 computed 里调用，依赖仍会被列的 computed 收集；
 * 列不直接改行内部变量。窗口宽度整行只量一次，没写断点的列不要调 windowWidth。
 */
export type VxRowContext = {
	/** 列的左右内边距，等于列间距的一半；行已经用等量负外边距抵掉外侧半格。 */
	inset: () => number
	/** 列的上外边距，等于行间距；行已经用等量负外边距抵掉第一行。 */
	lineGutter: () => number
	/** 当前窗口宽度，单位 px。读不到时是 0，断点退回 span。 */
	windowWidth: () => number
	/** 垂直对齐方式；列用它决定是否显式声明 align-self: stretch。 */
	align: () => string
	/** stretch 时量出的行高；App 端只靠 align-items 拉不平列高，用显式高度兜底。 */
	stretchHeight: () => number
	/** 本行的实例标识；列用它挂一个只属于本行的 class，测量时不会把嵌套行的列算进来。 */
	id: () => string
}

/** 蒸汽模式没有 @media，断点用窗口宽度。不是正数时按 0，列只用 span。 */
export function readWindowWidth(): number {
	const width = uni.getWindowInfo().windowWidth
	return width > 0 ? width : 0
}
