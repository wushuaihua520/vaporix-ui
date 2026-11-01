import { VxButtonShape, VxButtonVariant, VxSemantic, VxSize } from '../../libs/types/common'

/** 类型已移到 common.ts，这里保留导出，旧代码引用按钮 props 时不断。 */
export type { VxButtonShape, VxButtonVariant } from '../../libs/types/common'

/** 按钮语义类型。保留别名，避免旧代码引用 VxButtonType 时中断。 */
export type VxButtonType = VxSemantic

export type VxButtonProps = {
	type?: VxButtonType
	variant?: VxButtonVariant
	shape?: VxButtonShape
	size?: VxSize
	text?: string
	plain?: boolean
	round?: boolean
	shadow?: boolean
	block?: boolean
	width?: string
	height?: string
	disabled?: boolean
	loading?: boolean
}
