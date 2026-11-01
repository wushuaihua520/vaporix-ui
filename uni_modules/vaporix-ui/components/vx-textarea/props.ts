import { VxSize } from '../../libs/types/common'

/** 容器形态：描边盒、无边框段落，或只保留底部分割线的表单行。 */
export type VxTextareaVariant = 'outline' | 'plain' | 'line'

/** 外轮廓。多行输入框没有胶囊形态。 */
export type VxTextareaShape = 'rounded' | 'square'

/** 键盘右下角按钮，return 是换行。 */
export type VxTextareaConfirmType = 'return' | 'send' | 'search' | 'next' | 'go' | 'done'

export type VxTextareaProps = {
	size?: VxSize
	variant?: VxTextareaVariant
	shape?: VxTextareaShape
	placeholder?: string
	disabled?: boolean
	invalid?: boolean
	maxlength?: number
	counter?: boolean
	autoHeight?: boolean
	height?: string
	minHeight?: string
	label?: string
	labelWidth?: string
	required?: boolean
	borderColor?: string
	focus?: boolean
	confirmType?: VxTextareaConfirmType
	cursorSpacing?: number
	showConfirmBar?: boolean
	adjustPosition?: boolean
	holdKeyboard?: boolean
	fixed?: boolean
}
