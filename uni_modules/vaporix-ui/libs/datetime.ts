/**
 * 日期时间选择器的字段、模式、解析和格式化。
 *
 * 只处理六个整数年月日时分秒，不做时区换算，也不认 12 / 24 小时制：传入什么字符串就按本机时间读，
 * 输出也按本机时间写。字符串解析只认数字，分隔符可以是 - / : . 空格或年月日时分秒。
 */

/** 滚轮里能出现的六个字段，顺序固定。 */
export type VxDatetimeField = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second'

/**
 * 选择模式，决定滚轮里出现哪几列，以及默认输出格式。
 * 只有 year / year-month 用到年份；month-day 是「月日」，不出现年份。
 */
export type VxDatetimeMode =
	| 'year'
	| 'year-month'
	| 'month-day'
	| 'date'
	| 'date-hour'
	| 'datetime'
	| 'datetime-second'
	| 'time'
	| 'time-second'
	| 'minute-second'

/** 一次选择拆出来的六个字段。 */
export type VxDatetimeParts = {
	year: number
	month: number
	day: number
	hour: number
	minute: number
	second: number
}

/**
 * 滚轮行的像素高度，和 variables.css 的 --vx-datetime-row 手工保持一致。
 * picker-view 的 indicator-style 只认行内样式字符串，读不到 CSS 变量。
 */
export const VX_DATETIME_ROW = 44

/** 年份下限和上限，保证格式化后始终是四位。 */
export const VX_DATETIME_MIN_YEAR = 1000
export const VX_DATETIME_MAX_YEAR = 2999

/** 字段顺序，和 parts 的读写顺序一致。 */
export const VX_DATETIME_FIELDS: Array<VxDatetimeField> = ['year', 'month', 'day', 'hour', 'minute', 'second']

/** 每个模式包含的字段，按从左到右的列顺序排列。 */
export const VX_DATETIME_MODE_FIELDS: Record<VxDatetimeMode, Array<VxDatetimeField>> = {
	year: ['year'],
	'year-month': ['year', 'month'],
	'month-day': ['month', 'day'],
	date: ['year', 'month', 'day'],
	'date-hour': ['year', 'month', 'day', 'hour'],
	datetime: ['year', 'month', 'day', 'hour', 'minute'],
	'datetime-second': ['year', 'month', 'day', 'hour', 'minute', 'second'],
	time: ['hour', 'minute'],
	'time-second': ['hour', 'minute', 'second'],
	'minute-second': ['minute', 'second']
}

/** 每个模式的默认输出格式，和字段一一对应。 */
export const VX_DATETIME_MODE_FORMATS: Record<VxDatetimeMode, string> = {
	year: 'YYYY',
	'year-month': 'YYYY-MM',
	'month-day': 'MM-DD',
	date: 'YYYY-MM-DD',
	'date-hour': 'YYYY-MM-DD HH',
	datetime: 'YYYY-MM-DD HH:mm',
	'datetime-second': 'YYYY-MM-DD HH:mm:ss',
	time: 'HH:mm',
	'time-second': 'HH:mm:ss',
	'minute-second': 'mm:ss'
}

/** 每个字段的滚轮单位。 */
export const VX_DATETIME_UNITS: Record<VxDatetimeField, string> = {
	year: '年',
	month: '月',
	day: '日',
	hour: '时',
	minute: '分',
	second: '秒'
}

/** 非闰年的每月天数，二月单独判断。 */
const VX_DATETIME_MONTH_DAYS: Array<number> = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

/** 解析时认作分隔符的字符：日期和时间的常见写法都覆盖到。 */
const VX_DATETIME_SEPARATORS: Array<string> = ['-', '/', ':', ' ', '.', 'T', 'Z', '年', '月', '日', '时', '分', '秒']

/** 不足两位补零。 */
export function vxDatetimePad(value: number): string {
	if (value < 0) return `-${vxDatetimePad(-value)}`
	if (value < 10) return `0${value}`
	return `${value}`
}

/** 是否闰年。 */
export function vxDatetimeIsLeapYear(year: number): boolean {
	if (year % 400 === 0) return true
	if (year % 100 === 0) return false
	return year % 4 === 0
}

/** 某年某月有多少天；月份越界按 1 月或 12 月处理，不会返回 0。 */
export function vxDatetimeDaysInMonth(year: number, month: number): number {
	if (month < 1) return VX_DATETIME_MONTH_DAYS[0]
	if (month > 12) return VX_DATETIME_MONTH_DAYS[11]
	if (month === 2) return vxDatetimeIsLeapYear(year) ? 29 : 28
	return VX_DATETIME_MONTH_DAYS[month - 1]
}

/** 取当前本机时间。 */
export function vxDatetimeNow(): VxDatetimeParts {
	const now = new Date()
	return {
		year: now.getFullYear(),
		month: now.getMonth() + 1,
		day: now.getDate(),
		hour: now.getHours(),
		minute: now.getMinutes(),
		second: now.getSeconds()
	}
}

/** 把文本切成整数序列：不认符号和分隔符，连续数字算一个数。 */
export function vxDatetimeNumbers(text: string): Array<number> {
	let normalized = text
	for (let index = 0; index < VX_DATETIME_SEPARATORS.length; index++) {
		const separator = VX_DATETIME_SEPARATORS[index]
		normalized = normalized.split(separator).join(' ')
	}
	const pieces = normalized.split(' ')
	const numbers: Array<number> = []
	for (let index = 0; index < pieces.length; index++) {
		const piece = pieces[index].trim()
		if (piece.length === 0) continue
		const value = Number(piece)
		if (!isFinite(value)) continue
		numbers.push(Math.floor(value))
	}
	return numbers
}

/**
 * 按模式解析文本，读不出来时回落到 now。
 *
 * 数字个数比字段多时，以模式里第一个字段是不是 year 决定取前还是取后：
 * `month-day` 收到 `2019-09-12` 取后两个，`date` 收到 `2019-08-01 17:01` 取前三个。
 */
export function vxDatetimeParse(text: string, mode: VxDatetimeMode, fallback: VxDatetimeParts): VxDatetimeParts {
	const fields = VX_DATETIME_MODE_FIELDS[mode]
	// 模式名传错时整串当读不出来处理，回落到的值仍然是合法草稿。
	if (fields == null) return fallback
	const numbers = vxDatetimeNumbers(text)
	if (numbers.length === 0) return fallback

	const values: Array<number> = [fallback.year, fallback.month, fallback.day, fallback.hour, fallback.minute, fallback.second]
	const start = fields[0] === 'year' || numbers.length <= fields.length ? 0 : numbers.length - fields.length
	for (let index = 0; index < fields.length; index++) {
		const position = start + index
		if (position >= numbers.length) break
		const slot = VX_DATETIME_FIELDS.indexOf(fields[index])
		if (slot < 0) continue
		values[slot] = numbers[position]
	}
	return {
		year: values[0],
		month: values[1],
		day: values[2],
		hour: values[3],
		minute: values[4],
		second: values[5]
	}
}

/** 把六个字段夹到合法范围，日期按当月天数收口。 */
export function vxDatetimeClamp(parts: VxDatetimeParts, startYear: number, endYear: number): VxDatetimeParts {
	let year = parts.year
	if (!isFinite(year) || year < startYear) year = startYear
	if (year > endYear) year = endYear

	let month = parts.month
	if (!isFinite(month) || month < 1) month = 1
	if (month > 12) month = 12

	const maxDay = vxDatetimeDaysInMonth(year, month)
	let day = parts.day
	if (!isFinite(day) || day < 1) day = 1
	if (day > maxDay) day = maxDay

	let hour = parts.hour
	if (!isFinite(hour) || hour < 0) hour = 0
	if (hour > 23) hour = 23

	let minute = parts.minute
	if (!isFinite(minute) || minute < 0) minute = 0
	if (minute > 59) minute = 59

	let second = parts.second
	if (!isFinite(second) || second < 0) second = 0
	if (second > 59) second = 59

	return { year: year, month: month, day: day, hour: hour, minute: minute, second: second }
}

/**
 * 步长收成 1–30 的整数。候选值和吸附必须走同一个数，
 * 否则滚轮上没有的刻度会在确定时被写回去。
 */
function vxDatetimeStepSize(step: number): number {
	let size = Math.floor(step)
	if (!isFinite(size) || size < 1) return 1
	if (size > 30) return 30
	return size
}

/**
 * 把值对齐到步长网格，并夹在 [0, max] 里。
 * 步长小于 2 时只做上下限，避免不传步长也走一遍取整。
 */
export function vxDatetimeSnap(value: number, step: number, max: number): number {
	let current = value
	if (!isFinite(current) || current < 0) current = 0
	if (current > max) current = max
	const size = vxDatetimeStepSize(step)
	if (size < 2) return current
	let grid = size
	if (grid > max) grid = max
	const snapped = Math.round(current / grid) * grid
	if (snapped > max) return Math.floor(max / grid) * grid
	return snapped
}

/** 把六个字段拼成文本。格式串只认 YYYY / MM / DD / HH / mm / ss，其余字符原样保留。 */
export function vxDatetimeFormat(parts: VxDatetimeParts, pattern: string): string {
	let text = pattern.split('YYYY').join(`${parts.year}`)
	text = text.split('MM').join(vxDatetimePad(parts.month))
	text = text.split('DD').join(vxDatetimePad(parts.day))
	text = text.split('HH').join(vxDatetimePad(parts.hour))
	text = text.split('mm').join(vxDatetimePad(parts.minute))
	text = text.split('ss').join(vxDatetimePad(parts.second))
	return text
}

/** 年份列表，升序。倒序会交换；非数字回落到 1980–2050；两端都夹进 1000–2999。 */
export function vxDatetimeYears(startYear: number, endYear: number): Array<number> {
	let lower = Math.floor(startYear)
	let upper = Math.floor(endYear)
	if (!isFinite(lower)) lower = 1980
	if (!isFinite(upper)) upper = 2050
	if (lower > upper) {
		const swap = lower
		lower = upper
		upper = swap
	}
	// 只夹上限时，下限仍可能停在 2999 之外。
	if (lower < VX_DATETIME_MIN_YEAR) lower = VX_DATETIME_MIN_YEAR
	if (lower > VX_DATETIME_MAX_YEAR) lower = VX_DATETIME_MAX_YEAR
	if (upper > VX_DATETIME_MAX_YEAR) upper = VX_DATETIME_MAX_YEAR
	if (upper < VX_DATETIME_MIN_YEAR) upper = VX_DATETIME_MIN_YEAR
	if (upper < lower) upper = lower
	const list: Array<number> = []
	for (let year = lower; year <= upper; year++) list.push(year)
	return list
}

/** 分钟、秒的候选值。步长先收成 1–30，最后一个值不超过 59。 */
export function vxDatetimeSteps(step: number): Array<number> {
	const size = vxDatetimeStepSize(step)
	const list: Array<number> = []
	for (let value = 0; value < 60; value += size) list.push(value)
	return list
}
