import { VxSize } from '../../libs/types/common'

/** 标签位置：左侧一列，或单独占一行放在控件上方。 */
export type VxFormLabelPosition = 'left' | 'top'

export type VxFormProps = {
	/** 整组标签宽度，必须带单位；只在 labelPosition="left" 且这项有 label 时生效。 */
	labelWidth?: string
	/** 标签位置，默认 left。 */
	labelPosition?: VxFormLabelPosition
	/** 标签和说明的字号、行距档位，下发给每个 vx-form-item，默认 md。 */
	size?: VxSize
	/** 整组禁用：项仍显示星号，但校验会跳过。控件自己的禁用态由业务传给控件。 */
	disabled?: boolean
	/** 校验失败后自动滚到第一个错误项，默认打开；量不到位置时静默跳过。 */
	scrollToError?: boolean
}
