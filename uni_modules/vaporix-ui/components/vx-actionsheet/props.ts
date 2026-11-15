/** 动作类型：primary 标出当前视图的主操作，danger 标出删除、退出这类不可逆操作。 */
export type VxActionSheetItemType = 'default' | 'primary' | 'danger'

/** 一条动作。text 是必填的按钮文案，其余状态都由业务传入。 */
export type VxActionSheetItem = {
	/** 动作文案，建议 2–6 个字；太长会换行并把这一行撑高。 */
	text: string
	/** 语义类型，默认 default。primary 用主色，danger 用危险色。 */
	type?: VxActionSheetItemType
	/** 禁用后转灰，不响应点击，也不抛 select。 */
	disabled?: boolean
	/** 选中态：文案换成主色并显示勾；danger 动作保留危险色。多选由业务维护。 */
	selected?: boolean
}

export type VxActionSheetProps = {
	/** 显示操作菜单，支持 v-model:show；点击动作、取消或遮罩后会自动回写 false。 */
	show?: boolean
	/** 动作列表，按顺序排列；空数组不渲染，也不会铺遮罩。 */
	items?: Array<VxActionSheetItem>
	/** 面板标题，可选；和 description 都不传时不渲染头部。 */
	title?: string
	/** 标题下方的说明，可选；用次要色，适合放一句确认提示。 */
	description?: string
	/** 显示取消按钮，默认打开；关掉后面板只留动作列表。 */
	showCancel?: boolean
	/** 取消按钮文案，默认「取消」。 */
	cancelText?: string
	/** 点击遮罩关闭并抛 cancel，默认打开；关掉后只能用动作或取消按钮退出。 */
	maskClosable?: boolean
	/** 点击动作后自动收起，默认打开；做单选或多选时关掉，由业务在 select 里同步。 */
	closeOnSelect?: boolean
	/** 自定义遮罩色，字面值；不传时用 --vx-color-mask。 */
	maskColor?: string
	/** 自定义标题色，字面值；传 var(--vx-color-*) 时跟随主题。 */
	titleColor?: string
	/** 自定义说明色，字面值；传 var(--vx-color-*) 时跟随主题。 */
	descriptionColor?: string
	/** 浮层层级，默认 1000，低于消息提示（1010）、弹框（1020）、加载浮层（1050）和轻提示（1100）。 */
	zIndex?: number
}
// 行高补偿说明：App 端 min-height 按内容盒计算，组件 style 内有 APP-UVUE calc 块。
