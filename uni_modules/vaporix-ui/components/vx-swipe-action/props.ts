import { VxIconVariant, VxSemantic } from '../../libs/types/common'
import { VxIconName } from '../../libs/icons/codepoints'

/** 一条动作：文案、语义色、可选图标和宽度。 */
export type VxSwipeActionItem = {
	/** 动作文案，建议 2–3 个字，单行省略；4 个字时加宽。 */
	text: string
	/** 语义色，默认 default：浅灰底、正文色；其余用实心底配 on-* 前景。 */
	type?: VxSemantic
	/** 可选的字体图标，排在文案上方。 */
	icon?: VxIconName
	/** 图标字重，默认 regular；扩展图标要先引入 icons-extend.css。 */
	iconVariant?: VxIconVariant
	/** 这一项的宽度，单位 px，默认 72；小于等于 0 时按默认值。 */
	width?: number
	/** 禁用：底色转灰，不响应点击，也不抛 select。 */
	disabled?: boolean
	/** 自定义底色，字面值；和 color 一起传，组件不推断对比度。 */
	bgColor?: string
	/** 自定义文字和图标颜色，字面值；禁用时两者都不生效。 */
	color?: string
}

export type VxSwipeActionProps = {
	/** 这一行的业务标识，原样带回 select / change；列表里用它认出是哪一行。 */
	name?: string
	/** 右侧动作，建议 1–3 条，按数组顺序从左到右渲染；空数组时改用 extra 插槽。不在组件里截断，select 的下标和原数组一致。 */
	actions?: VxSwipeActionItem[]
	/** 是否展开，支持 v-model:open；只传布尔值时由组件自己维护并在操作时回抛 update:open。 */
	open?: boolean
	/** 手势滑出菜单，默认打开；关闭后仍可由 v-model:open 或 open() 展开。 */
	swipeable?: boolean
	/** 点动作后收起，默认打开；关掉后菜单保持展开。 */
	closeOnSelect?: boolean
	/** 允许同时展开多行，默认关闭：展开这一行时收起其他行。 */
	multiple?: boolean
	/** extra 插槽的展开宽度，单位 px，默认 80；没有 actions 且插槽存在时生效。两者都没有时不露出菜单。 */
	extraWidth?: number
}
