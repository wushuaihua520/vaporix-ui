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
	/** 垂直对齐方式；列用它决定是否显式声明 align-self: stretch，以及要不要写高度。 */
	align: () => string
	/**
	 * 这一列所在视觉行的高度，单位 px。
	 * 0 表示不写 height：Web 始终是 0；还没量到、或 align 不是 stretch 时也是 0。
	 * mark 是列登记时拿到的测量标记。
	 */
	stretchHeight: (mark: number) => number
	/** 列在 setup 里登记，拿到只属于这一列的测量标记。 */
	claimMark: () => number
	/** 列卸载时交还标记，行会重新量剩下的列。 */
	releaseMark: (mark: number) => void
	/** 列增减、显隐或窗口尺寸变了，重新量。Web 上不量。 */
	requestStretch: () => void
	/** 列里的内容变高或变矮。测量那一拍里的回调不排下一次，避免写高度引起的回流再量。 */
	notifyContent: () => void
	/** 本行的实例标识；列用它挂一个只属于本行的 class，测量时不会把嵌套行的列算进来。 */
	id: () => string
}

/** 蒸汽模式没有 @media，断点用窗口宽度。不是正数时按 0，列只用 span。 */
export function readWindowWidth(): number {
	const width = uni.getWindowInfo().windowWidth
	return width > 0 ? width : 0
}
