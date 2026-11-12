export type VxCheckboxProps = {
	/** 勾选时回传给分组的 value；分组里不能为空，空值会被分组忽略。 */
	value?: string
	/**
	 * v-for 的循环下标。同一组已注册项都传了，index 最大的才是最后一项。
	 * 有一项没传就整组退回挂载顺序，静态写死的项不用传。
	 */
	index?: number
	/** 主文案；用默认插槽时忽略。 */
	label?: string
	/** 主文案下的说明，和主文案之间留 4；用默认插槽时忽略。 */
	description?: string
	/** 单独使用时的选中状态；放进 vx-checkbox-group 后由分组接管，这一项不再参与渲染。 */
	modelValue?: boolean
	/** 只停这一项：文字、方框和对号转灰，不响应点按，也不抛 change。 */
	disabled?: boolean
	/**
	 * 部分选中：方框填充并画一条横线，只在单独使用、未选中且为 box 样式时生效。
	 * 分组里的选中状态由分组决定，这一项不读该值。
	 */
	indeterminate?: boolean
	/** 自定义选中色，字面值；方框样式改填充，只画对号时直接改对号色。 */
	color?: string
	/** 自定义未选中方框描边，字面值；只画对号时没有描边，不生效。 */
	borderColor?: string
	/** 自定义对号和横线色，字面值；优先于 color，禁用时不生效。 */
	checkColor?: string
}
