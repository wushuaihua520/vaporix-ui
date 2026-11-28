import { VxSemantic, VxIconVariant } from '../../libs/types/common'
import { VxIconName } from '../../libs/icons/codepoints'

export type VxToastProps = {
	/** 提示文案。超过一行时在盒子最大宽度内换行。 */
	text?: string
	/** 语义类型，只决定默认图标，不改变盒子的反相底色。primary 与 info 共用信息圆。 */
	type?: VxSemantic
	/** 自动关闭时间，单位毫秒；0 表示常驻，点浮层或由业务调 close() 收起。 */
	duration?: number
	/** 盒子最大宽度，需带单位。 */
	maxWidth?: string
	/** 自定义字体图标名，取值见 libs/icons/codepoints.ts；不传时跟 type。 */
	icon?: VxIconName
	/** 自定义图标图片地址，优先于 icon；盒子按 40 × 40 等比展示。 */
	image?: string
	/** 字体图标字重；image 不受影响。 */
	variant?: VxIconVariant
	/** 显示图标；关掉后是纯文字轻提示。 */
	showIcon?: boolean
	/** 浮层层级，默认 1100（VX_OVERLAY_TOAST_LAYER），全库最高的一档，压在加载浮层之上。 */
	zIndex?: number
	/** 自定义底色，字面值。玻璃面不接 bgColor，玻璃激活时忽略。 */
	bgColor?: string
	/** 底色不透明度，0–1，默认 0.9；只作用在底色上，文字和图标保持不透明。玻璃态底色归玻璃，本项不作用。 */
	bgOpacity?: number
	/** 自定义文字与图标色，字面值；image 不受影响。 */
	color?: string
	/** 盒子换液态玻璃面：磨砂透底加发丝描边，页面内容从盒下透出。传 true 强制玻璃；不传或 false 跟随全局控件风格（libs/global-style 的 isGlassStyle）。iOS 用 glass-effect-view 系统材质（iOS 26+ 真液态玻璃，15~25 降级为系统毛玻璃，跟随系统外观），Android / 鸿蒙 / Web 用 backdrop-filter 磨砂，小程序实底近似。玻璃面不接 bgColor，文字用正文色（玻璃底是浅色调）。 */
	liquidGlass?: boolean
}
