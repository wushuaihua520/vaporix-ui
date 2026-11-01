import { VxSize } from '../../libs/types/common'

/** 外框形态：描边盒，或浅底无框。 */
export type VxNumberBoxVariant = 'outline' | 'soft'

/** 外轮廓：默认圆角、胶囊、平角。 */
export type VxNumberBoxShape = 'rounded' | 'pill' | 'square'

export type VxNumberBoxProps = {
	min?: number
	max?: number
	step?: number
	size?: VxSize
	variant?: VxNumberBoxVariant
	shape?: VxNumberBoxShape
	disabled?: boolean
	invalid?: boolean
	bgColor?: string
	color?: string
	iconColor?: string
}
