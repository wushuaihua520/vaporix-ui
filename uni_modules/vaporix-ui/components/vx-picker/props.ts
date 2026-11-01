import { VxPickerOption } from '../../libs/picker'

export type VxPickerProps = {
	/**
	 * 树形选项，层级由 children 的深度决定，一般 2–4 级。
	 * 节点固定 text / value / children / disabled；业务字段不同时先映射一份。
	 */
	options?: Array<VxPickerOption>
	/** 面板标题，可选；当前路径不可选时换成 invalidText。 */
	title?: string
	/** 取消按钮文案，默认「取消」。 */
	cancelText?: string
	/** 确定按钮文案，默认「确定」。 */
	confirmText?: string
	/** 结果文本的分隔符，默认 `' / '`；只影响 result.text，不改滚轮。 */
	separator?: string
	/** 空数据的提示，默认「暂无可选项」。 */
	emptyText?: string
	/** 当前路径含不可选项时头部显示的提示，默认「该选项不可选」。 */
	invalidText?: string
	/** 点击遮罩关闭并抛 cancel，默认打开。 */
	maskClosable?: boolean
	/** 自定义遮罩色，字面值；不传时用 --vx-color-mask。 */
	maskColor?: string
	/** 浮层层级，默认 90，和操作菜单、日期时间选择器同档。 */
	zIndex?: number
}
