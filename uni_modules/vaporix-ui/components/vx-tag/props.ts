import { VxSemantic, VxSize } from '../../libs/types/common'

/** 标签形态：实心、浅底、空心。 */
export type VxTagVariant = 'solid' | 'soft' | 'plain'

/** 标签外轮廓：小圆角、胶囊、半圆角（左侧胶囊、右侧平角）、平角。 */
export type VxTagShape = 'rounded' | 'pill' | 'half' | 'square'

export type VxTagProps = {
	text?: string
	type?: VxSemantic
	variant?: VxTagVariant
	size?: VxSize
	shape?: VxTagShape
	/** 自定义文字色，同时作用于关闭图标。 */
	color?: string
	/** 自定义背景色，只覆盖底色这一处。 */
	bgColor?: string
	/** 自定义描边色，只覆盖描边这一处。 */
	borderColor?: string
	/** 显示关闭图标，点击抛 close。 */
	closable?: boolean
}
