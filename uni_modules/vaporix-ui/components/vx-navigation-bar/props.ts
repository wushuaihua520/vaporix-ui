/** 导航栏测量完成后回传的布局信息。 */
export type VxNavigationBarInfo = {
	/** 导航栏总高度，含状态栏留白和第二行。 */
	height: number
	/** 状态栏留白高度；statusBar 关闭时为 0。 */
	statusBarHeight: number
	/** 导航栏宽度。 */
	width: number
	/** 当前背景透明度 0–1。 */
	opacity: number
	/** 窗口宽度。 */
	windowWidth: number
	/** 窗口高度。 */
	windowHeight: number
}

export type VxNavigationBarProps = {
	/** 标题，单行省略；默认插槽有内容时不渲染。 */
	title?: string
	/** 标题和内置返回箭头的颜色，字面值或主题令牌。 */
	color?: string
	/** 背景色或渐变，字面值或主题令牌；不传时用 surface。玻璃底不接 bgColor。 */
	bgColor?: string
	/** 底部 1px 分割线，默认关闭；透明和渐显未到 0.85 时不画。 */
	divider?: boolean
	/** 分割线颜色，字面值或主题令牌。 */
	dividerColor?: string
	/** 用 --vx-shadow-md 阴影代替分割线。 */
	shadow?: boolean
	/** 固定在页面顶部；关闭后按文档流排在页面里。 */
	fixed?: boolean
	/** 固定时在文档流里占同高；头图压到导航栏下面时关掉。 */
	placeholder?: boolean
	/** 顶部为状态栏留白；页面使用 navigationStyle: custom 时打开。 */
	statusBar?: boolean
	/** 显示内置返回箭头；prefix 插槽有内容时不渲染。 */
	back?: boolean
	/** 背景始终透明，忽略 fade、maxOpacity、分割线和阴影。 */
	transparent?: boolean
	/** 液态玻璃背景：磨砂玻璃底加发丝描边，铺满状态栏和内容行整条。传 true 强制玻璃；不传或 false 跟随全局控件风格（libs/global-style 的 isGlassStyle）。iOS 26+ 用系统液态玻璃材质（15~25 降级为系统毛玻璃，跟随系统外观），Android / 鸿蒙 / Web 用 backdrop-filter 磨砂，小程序保持半透明底。玻璃底不接 bgColor，fade / transparent 渐显逻辑也不作用于玻璃底。 */
	liquidGlass?: boolean
	/** 背景透明度跟随 scrollTop，从 0 增到 maxOpacity。 */
	fade?: boolean
	/** 滚动距离，绑定 scroll-view 的 @scroll detail.scrollTop。 */
	scrollTop?: number
	/** 渐显速度：滚过导航栏宽度 × 该值时达到 maxOpacity，默认 0.3。 */
	scrollRatio?: number
	/** 渐显上限 0–1，默认 1。 */
	maxOpacity?: number
	/** 固定时的浮层层级，默认 20，高于吸顶条、低于消息提示。 */
	zIndex?: number
}
