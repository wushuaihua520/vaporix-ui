import { VxDatetimeMode } from '../../libs/datetime'

/** 单位位置：跟在数值后面，或单独排在选择器上方。 */
export type VxDatetimeUnitPosition = 'inline' | 'top'

export type VxDatetimeProps = {
	/** 选择模式，决定滚轮里出现哪几列，默认日期加时分。 */
	mode?: VxDatetimeMode
	/** 面板标题，可选；不传时只在两端留取消和确定。 */
	title?: string
	/** 取消按钮文案，默认「取消」。 */
	cancelText?: string
	/** 确定按钮文案，默认「确定」。 */
	confirmText?: string
	/** 年份下限，默认 1980；越界按 1000 收口。 */
	startYear?: number
	/** 年份上限，默认 2050；越界按 2999 收口。 */
	endYear?: number
	/** 分钟的步长，默认 1；取值 1–30，超过 59 的候选值不出现。 */
	minuteStep?: number
	/** 秒的步长，默认 1；取值 1–30。 */
	secondStep?: number
	/** 单位位置，默认 inline：年、月、日跟在数值后面；top 时单独排在上方一行。 */
	unitPosition?: VxDatetimeUnitPosition
	/**
	 * 输出格式，默认按 mode 取模式格式。
	 * 只认 YYYY / MM / DD / HH / mm / ss，其余字符原样保留；只影响输出文本，不影响哪些列可以选。
	 */
	format?: string
	/** 点击遮罩关闭并抛 cancel，默认打开。 */
	maskClosable?: boolean
	/** 自定义遮罩色，字面值；不传时用 --vx-color-mask。 */
	maskColor?: string
	/** 浮层层级，默认 90，和操作菜单同档，低于弹框（110）和提示（100 / 200）。 */
	zIndex?: number
}
