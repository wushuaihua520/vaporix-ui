import { VxSemantic } from '../../libs/types/common'
import { VxIconName } from '../../libs/icons/codepoints'

/** 提示位置：顶部横幅、屏幕居中、底部浮层。 */
export type VxTipsPosition = 'top' | 'center' | 'bottom'

export type VxTipsProps = {
	/** 提示文案。传了默认插槽时以插槽为准。 */
	text?: string
	type?: VxSemantic
	position?: VxTipsPosition
	/** 自动关闭时间，单位毫秒；0 表示常驻，只能手动或由业务关闭。 */
	duration?: number
	/** 贴边距离的微调，单位 px；top 往下让、bottom 往上让。顶部已经在导航栏下方，这里只加额外距离。 */
	offset?: number
	/** 浮层最大宽度，需带单位。top 铺满整条，忽略该值。 */
	maxWidth?: string
	/** 文案前的图标，取值见 libs/icons/codepoints.ts。 */
	icon?: VxIconName
	/** 显示关闭图标；打开后点提示任意位置都能关闭。 */
	closable?: boolean
	/** 浮层层级，默认 1010（VX_OVERLAY_TIPS_LAYER），压在弹层和数字键盘之上。 */
	zIndex?: number
	/** 自定义底色，字面值。玻璃面不接 bgColor，玻璃激活时忽略。 */
	bgColor?: string
	/** 底色不透明度，0–1，默认 1；只作用在底色上，文字和图标保持不透明。玻璃态底色归玻璃，本项不作用。 */
	bgOpacity?: number
	/** 自定义文字和图标色，字面值。 */
	color?: string
	/** 整条提示的不透明度，0–1，默认 1。底色、文字、图标和阴影一起淡；和 bgOpacity 相乘。 */
	opacity?: number
	/** 底层换液态玻璃面：磨砂透底加发丝描边，页面内容从条下透出。传 true 强制玻璃；不传或 false 跟随全局控件风格（libs/global-style 的 isGlassStyle）。iOS 用 glass-effect-view 系统材质（iOS 26+ 真液态玻璃，15~25 降级为系统毛玻璃，跟随系统外观），Android / 鸿蒙 / Web 用 backdrop-filter 磨砂，小程序实底近似。玻璃面不接 bgColor，语义底色（type）同样让位，文字用正文色。 */
	liquidGlass?: boolean
}
