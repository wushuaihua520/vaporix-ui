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
	/** 贴边距离的微调，单位 px；top 往下让、bottom 往上让。 */
	offset?: number
	/** 浮层最大宽度，需带单位。top 铺满整条，忽略该值。 */
	maxWidth?: string
	/** 文案前的图标，取值见 libs/icons/codepoints.ts。 */
	icon?: VxIconName
	/** 显示关闭图标；打开后点提示任意位置都能关闭。 */
	closable?: boolean
	/** 浮层层级，默认 100，压在页面内容和固定页脚之上。 */
	zIndex?: number
	/** 自定义底色，字面值。 */
	bgColor?: string
	/** 底色不透明度，0–1，默认 1；只作用在底色上，文字和图标保持不透明。 */
	bgOpacity?: number
	/** 自定义文字和图标色，字面值。 */
	color?: string
}
