import { VxSize } from '../../libs/types/common'

/** 键盘类型，与原生 input 的 type 保持一致。 */
export type VxInputType = 'text' | 'number' | 'digit' | 'tel' | 'idcard'

export type VxInputConfirmType = 'done' | 'send' | 'search' | 'next' | 'go'

/** 容器形态：描边盒，或只保留底部分割线的表单行。 */
export type VxInputVariant = 'outline' | 'line'

/** 外轮廓：默认圆角、胶囊、平角。line 形态不参与圆角。 */
export type VxInputShape = 'rounded' | 'pill' | 'square'

export type VxInputAlign = 'left' | 'right'

export type VxInputProps = {
	type?: VxInputType
	size?: VxSize
	variant?: VxInputVariant
	shape?: VxInputShape
	placeholder?: string
	password?: boolean
	clearable?: boolean
	disabled?: boolean
	readonly?: boolean
	maxlength?: number
	invalid?: boolean
	confirmType?: VxInputConfirmType
	label?: string
	labelWidth?: string
	required?: boolean
	align?: VxInputAlign
	unit?: string
	arrow?: boolean
}
