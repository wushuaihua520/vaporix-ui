/** 状态栏区域测量完成后回传的信息。 */
export type VxStatusBarInfo = {
	/** 组件实际占用的高度，含 height 覆盖。 */
	height: number
	/** 系统上报的状态栏高度；Web 为 0。 */
	statusBarHeight: number
	/** 窗口宽度。 */
	windowWidth: number
	/** 窗口高度。 */
	windowHeight: number
}

/** 插槽内容的水平对齐：靠左、居中、靠右。 */
export type VxStatusBarAlign = 'start' | 'center' | 'end'

export type VxStatusBarProps = {
	/** 固定高度，单位 px；0 表示跟随系统状态栏。 */
	height?: number
	/** 底色，字面值或主题令牌；不传时用 surface。 */
	bgColor?: string
	/** 背景始终透明，忽略 fade 和 maxOpacity；适合头图。 */
	transparent?: boolean
	/** 固定在页面顶部。 */
	fixed?: boolean
	/** 固定时在文档流里占同高；头图场景关掉。 */
	placeholder?: boolean
	/** 固定时的浮层层级，默认 20，和导航栏同档。 */
	zIndex?: number
	/** 插槽内容让开左右安全区，横屏不被刘海盖住。 */
	safeArea?: boolean
	/** 插槽内容的水平对齐，默认 center。 */
	align?: VxStatusBarAlign
	/** 背景透明度跟随 scrollTop，从 0 增到 maxOpacity。 */
	fade?: boolean
	/** 滚动距离，绑定 scroll-view 的 @scroll detail.scrollTop。 */
	scrollTop?: number
	/** 滚过状态栏宽度 × 该值时达到 maxOpacity，默认 0.3。 */
	scrollRatio?: number
	/** 渐显上限 0–1，默认 1。 */
	maxOpacity?: number
}
