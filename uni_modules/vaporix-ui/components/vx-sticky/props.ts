export type VxStickyProps = {
	/** 滚动容器的滚动距离，绑定 scroll-view 的 @scroll detail.scrollTop；不绑定就不会吸顶。 */
	scrollTop?: number
	/** 吸顶时距顶部安全区的距离，单位 px；负数按 0 处理。 */
	offsetTop?: number
	/** 吸顶时的浮层层级，默认 10，压在页面内容上、低于消息提示。 */
	zIndex?: number
	/** 吸顶时用 `--vx-shadow-md` 的浮层阴影代替底部分割线。玻璃面不叠加：玻璃态浮起感由玻璃分层阴影接管，本项忽略。 */
	shadow?: boolean
	/** 吸顶条底色，字面值；不传时未吸顶透明、吸顶后 surface。玻璃面不接 bgColor，玻璃激活时忽略。 */
	bgColor?: string
	/** 吸顶后的条面换液态玻璃：磨砂透底加发丝描边，滚过内容从条下穿过实时折射。传 true 强制玻璃；不传或 false 跟随全局控件风格（libs/global-style 的 isGlassStyle），只在吸顶态生效，未吸顶保持透明。iOS 用 glass-effect-view 系统材质（iOS 26+ 真液态玻璃，15~25 降级为系统毛玻璃，跟随系统外观），Android / 鸿蒙 / Web 用 backdrop-filter 磨砂，小程序实底近似。玻璃面不接 bgColor，分割线与 shadow 在玻璃态不画。 */
	liquidGlass?: boolean
}
