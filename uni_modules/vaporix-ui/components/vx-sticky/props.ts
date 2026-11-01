export type VxStickyProps = {
	/** 滚动容器的滚动距离，绑定 scroll-view 的 @scroll detail.scrollTop；不绑定就不会吸顶。 */
	scrollTop?: number
	/** 吸顶时距顶部安全区的距离，单位 px；负数按 0 处理。 */
	offsetTop?: number
	/** 吸顶时的浮层层级，默认 10，压在页面内容上、低于消息提示。 */
	zIndex?: number
	/** 吸顶时用 `--vx-shadow-md` 的浮层阴影代替底部分割线。 */
	shadow?: boolean
	/** 吸顶条底色，字面值；不传时未吸顶透明、吸顶后 surface。 */
	bgColor?: string
}
