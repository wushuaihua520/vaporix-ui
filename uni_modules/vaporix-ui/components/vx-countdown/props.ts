import { VxSemantic, VxSize } from '../../libs/types/common'

/** 倒计时数字盒的外观：描边盒、浅底盒、无盒。 */
export type VxCountdownVariant = 'outline' | 'soft' | 'plain'

/** 分隔方式：冒号，或每段后面的单位文字。 */
export type VxCountdownSeparator = 'colon' | 'unit'

/** 单位语言：天、时、分、秒，或 d、h、m、s。 */
export type VxCountdownUnit = 'zh' | 'en'

export type VxCountdownProps = {
	/** 剩余秒数，支持小数；变化时按新值重新开始。 */
	time?: number
	/** 显示天数，默认关闭；打开后小时不再累计超过 24。 */
	showDays?: boolean
	/** 显示小时，默认打开。 */
	showHours?: boolean
	/** 显示分钟，默认打开。 */
	showMinutes?: boolean
	/** 显示秒数，默认打开。 */
	showSeconds?: boolean
	/** 显示毫秒位，默认关闭；只显示十分位，依附秒数。 */
	showMilliseconds?: boolean
	/** 数字盒尺寸，默认 md。 */
	size?: VxSize
	/** 数字盒外观，默认 outline。 */
	variant?: VxCountdownVariant
	/** 数字和描边的语义色，默认 default（正文色）。 */
	type?: VxSemantic
	/** 分隔方式，默认 colon。 */
	separator?: VxCountdownSeparator
	/** 单位语言，默认 zh；separator="unit" 时生效。 */
	unit?: VxCountdownUnit
	/** 挂载后自动开始，默认打开；关闭后用 start() 启动。 */
	autoStart?: boolean
	/** 数字盒底色，字面值或主题令牌；outline / soft 生效。 */
	bgColor?: string
	/** 数字和十分位的颜色，字面值或主题令牌。 */
	color?: string
	/** 分隔符号和单位的颜色，字面值或主题令牌；不传时跟随 type 或次要灰。 */
	unitColor?: string
	/** 数字盒描边颜色，字面值或主题令牌；outline 生效。 */
	borderColor?: string
}
