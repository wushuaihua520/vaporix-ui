import { VxFormRule, VxFormValue } from '../../libs/form'

export type VxFormItemProps = {
	/** 字段键，同组唯一；为空时只做布局，不参与校验。 */
	prop?: string
	/** 要校验的值，和控件的 v-model 绑同一份数据；本组件不托管业务数据。 */
	value?: VxFormValue
	/** 这一项的规则，见 libs/form.ts；空数组表示只做布局。 */
	rules?: Array<VxFormRule>
	/** 标题。输入类控件的标题在控件内部，这里不传；开关、评分、多选这类控件才用。 */
	label?: string
	/**
	 * 必填星号。不传（null）时按 rules 里有没有 required: true 推断；
	 * 显式 false 可以关掉星号，true 会让没有 label 的项也不画星号（星号跟着 label 走）。
	 */
	required?: boolean | null
	/** 常驻说明，次要色；出现错误时被错误文案替换。 */
	help?: string
	/** 受控错误文案，非空时以它为准，忽略本地校验结果。 */
	error?: string
}
