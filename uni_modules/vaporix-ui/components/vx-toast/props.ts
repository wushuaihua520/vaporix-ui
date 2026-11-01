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
	/** 浮层层级，默认 200，压在页面内容和消息提示之上。 */
	zIndex?: number
	/** 自定义底色，字面值。 */
	bgColor?: string
	/** 底色不透明度，0–1，默认 0.9；只作用在底色上，文字和图标保持不透明。 */
	bgOpacity?: number
	/** 自定义文字与图标色，字面值；image 不受影响。 */
	color?: string
}
