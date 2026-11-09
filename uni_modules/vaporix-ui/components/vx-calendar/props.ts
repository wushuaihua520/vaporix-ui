import { VxSemantic } from '../../libs/types/common'

/**
 * 选择模式：单个日期，或一段起止日期。
 * 单个日期读写 `v-model`；区间读写 `v-model:start` / `v-model:end`，两种模式各用各的模型。
 */
export type VxCalendarMode = 'single' | 'range'

/** 一天上的标记：圆形底色、下方文案、文字色和对勾。 */
export type VxCalendarMark = {
	/** 日期，YYYY-MM-DD；不补零的写法也认，按日期匹配。 */
	date: string
	/** 日期下方的文案，建议 2 个字以内，覆盖农历。 */
	text?: string
	/** 整格的圆形底色，字面值或 var(--vx-color-*)。 */
	bgColor?: string
	/** 日期文字色，字面值或 var(--vx-color-*)。 */
	color?: string
	/** 把下方文案换成对勾，表示已完成。 */
	done?: boolean
}

/** 模型 `v-model`、`v-model:start`、`v-model:end`、`v-model:show` 由 defineModel 声明，不写在这里。 */
export type VxCalendarProps = {
	/** 选择模式，默认单个日期。 */
	mode?: VxCalendarMode
	/** 以底部弹层展示；不传时平铺在页面里，宽度跟随父级。 */
	popup?: boolean
	/** 弹层头部的标题，默认「日期选择」。 */
	title?: string
	/** 底部确定按钮的文案，默认「确定」。 */
	confirmText?: string
	/** 区间起点的下方文字，默认「开始」。 */
	startText?: string
	/** 区间终点的下方文字，默认「结束」。 */
	endText?: string
	/** 还没选出日期时，底部结果行的占位文字，默认「请选择日期」。 */
	placeholder?: string
	/** 可选的最早日期，空串表示不限；下限固定到 1900-01-01。 */
	minDate?: string
	/** 可选的最晚日期，空串表示不限；上限固定到 2100-12-31。 */
	maxDate?: string
	/** 在日期下方显示农历，默认关闭。 */
	showLunar?: boolean
	/** 显示年份切换箭头；关掉后只能按月翻，和「只能切换月份」一致。 */
	showYearArrow?: boolean
	/** 显示弹层底部的选中结果和确定按钮，默认打开。关掉后由业务调 confirm() 提交。 */
	showConfirm?: boolean
	/** 选中、区间和确定按钮的语义色，默认主色。 */
	type?: VxSemantic
	/** 日期标记，按 date 匹配当前月的每一天。 */
	marks?: Array<VxCalendarMark>
	/** 点遮罩关闭并抛 cancel，默认打开。 */
	maskClosable?: boolean
	/** 自定义遮罩色，字面值；不传时用 --vx-color-mask。 */
	maskColor?: string
	/** 浮层层级，默认 1000，和操作菜单同档，低于弹框（1020）和提示（1010 / 1100）。 */
	zIndex?: number
}
