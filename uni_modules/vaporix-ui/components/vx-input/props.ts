import { VxSize } from '../../libs/types/common'

/** 键盘类型，与原生 input 的 type 保持一致。 */
export type VxInputType = 'text' | 'number' | 'digit' | 'tel' | 'idcard'

/** 键盘右下角按键；空串表示没传，由 variant 决定：search → search，其余 → done。 */
export type VxInputConfirmType = 'done' | 'send' | 'search' | 'next' | 'go' | ''

/** 容器形态：描边盒、只保留底部分割线的表单行，或胶囊搜索框。 */
export type VxInputVariant = 'outline' | 'line' | 'search'

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
