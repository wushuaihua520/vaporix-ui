export type VxRadioProps = {
	/** 选中时回传给分组的 value；分组里不能为空，空值会被分组忽略。 */
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
	/** 只停这一项：文字、圆圈和对号转灰，不响应点按，也不抛 change。 */
	disabled?: boolean
	/** 自定义选中色，字面值；圆圈样式改填充，只画对号时直接改对号色。 */
	color?: string
	/** 自定义未选中圆圈描边，字面值；只画对号时没有描边，不生效。 */
	borderColor?: string
	/** 自定义对号色，字面值；优先于 color，禁用时不生效。 */
	checkColor?: string
}
// 行高补偿说明：App 端 min-height 按内容盒计算，组件 style 内有 APP-UVUE calc 块。
