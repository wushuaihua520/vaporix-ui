import { VxSemantic, VxSize } from '../../libs/types/common'

/** 徽章形态：实心、浅底。 */
export type VxBadgeVariant = 'solid' | 'soft'

export type VxBadgeProps = {
	/** 计数。小于 1 不显示，超过 max 显示 max+。 */
	value?: number
	/** 自定义短文案，优先于 value；要显示 0 时传 text="0"。 */
	text?: string
	/** 计数封顶值，超过显示 max+。 */
	max?: number
	/** 只显示圆点，优先于 text 和 value。 */
	dot?: boolean
	/** 默认 danger，表达未读、待处理这类需要立刻看到的状态。 */
	type?: VxSemantic
	variant?: VxBadgeVariant
	size?: VxSize
	/** 定位到默认插槽的右上角。 */
	absolute?: boolean
	/** 在默认位置上的水平微调，单位 px；正值向右。 */
	offsetX?: number
	/** 在默认位置上的垂直微调，单位 px；正值向下。 */
	offsetY?: number
	/** 叠在图标、头像上时加一圈页面底色。 */
	ring?: boolean
	/** 自定义底色，只覆盖背景。 */
	bgColor?: string
	/** 自定义文字色，只覆盖文字。 */
	color?: string
}
