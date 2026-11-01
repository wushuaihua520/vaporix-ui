/**
 * 日历要的公历规则：一天的序号、星期、月份网格、日期文本的读写。
 *
 * 闰年、当月天数、补零沿用 libs/datetime.ts，日历和日期时间选择器共用一套公历判断。
 * 日期一律写成 YYYY-MM-DD，比较先后用序号，不用 Date：设备时区不该影响哪一天排在哪一天前面。
 */

import { vxDatetimeDaysInMonth, vxDatetimeNumbers, vxDatetimeNow, vxDatetimePad } from './datetime'

/** 一个公历日期。 */
export type VxCalendarDate = {
	year: number
	month: number
	day: number
}

/** 网格里的一格。当月之外的位置 day 是 0，date 是空串。 */
export type VxCalendarCell = {
	day: number
	date: string
	/** 星期几，0 是周日；空格子也是 0。 */
	weekday: number
}

/** 星期行的文案，和 vxCalendarWeekday 的下标一一对应。 */
export const VX_CALENDAR_WEEK_LABELS: Array<string> = ['日', '一', '二', '三', '四', '五', '六']

/** 星期的读法，下标同上。 */
const VX_CALENDAR_WEEK_NAMES: Array<string> = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']

/** 能排的年份上下限，和农历表的 1900–2100 对齐：超出就换不出农历。 */
export const VX_CALENDAR_MIN_YEAR = 1900
export const VX_CALENDAR_MAX_YEAR = 2100

/**
 * 公历日期到 1970-01-01 的天数，整数运算，不建 Date。
 * 公式把 3 月当成一年的开头，闰日落在年末，2 月不用单独判。
 */
export function vxCalendarDayNumber(year: number, month: number, day: number): number {
	const shifted = month <= 2 ? year - 1 : year
	const era = Math.floor(shifted / 400)
	const yearOfEra = shifted - era * 400
	const dayOfYear = Math.floor((153 * (month > 2 ? month - 3 : month + 9) + 2) / 5) + day - 1
	const dayOfEra = yearOfEra * 365 + Math.floor(yearOfEra / 4) - Math.floor(yearOfEra / 100) + dayOfYear
	return era * 146097 + dayOfEra - 719468
}

/** 星期几，0 是周日。1970-01-01 是周四，序号 0 直接对上。 */
export function vxCalendarWeekday(year: number, month: number, day: number): number {
	const index = (vxCalendarDayNumber(year, month, day) + 4) % 7
	return index < 0 ? index + 7 : index
}

/** 星期的读法，例如「星期一」。 */
export function vxCalendarWeekText(year: number, month: number, day: number): string {
	return VX_CALENDAR_WEEK_NAMES[vxCalendarWeekday(year, month, day)]
}

/** 月份的标题，例如「2026年10月」。 */
export function vxCalendarMonthText(year: number, month: number): string {
	return `${year}年${month}月`
}

/** 拼成 YYYY-MM-DD，月和日补零。 */
export function vxCalendarFormat(year: number, month: number, day: number): string {
	return `${year}-${vxDatetimePad(month)}-${vxDatetimePad(day)}`
}

/** 今天。 */
export function vxCalendarToday(): VxCalendarDate {
	const now = vxDatetimeNow()
	return { year: now.year, month: now.month, day: now.day }
}

/**
 * 读 YYYY-MM-DD，也认 / 和 . 分隔，以及「2026年10月26日」这种写法。
 * 少于三个数、月份或日越界时返回 null，不猜。
 */
export function vxCalendarParse(text: string): VxCalendarDate | null {
	const numbers = vxDatetimeNumbers(text)
	if (numbers.length < 3) return null
	const year = numbers[0]
	const month = numbers[1]
	const day = numbers[2]
	if (month < 1 || month > 12) return null
	if (day < 1 || day > vxDatetimeDaysInMonth(year, month)) return null
	return { year: year, month: month, day: day }
}

/**
 * 一个月的网格，固定 42 格（六行），当月之外的位置留空。
 * 组件按当月最后一天落在第几行，自己决定画 5 行还是 6 行；这里始终给满六行。周日排在第一列。
 */
export function vxCalendarGrid(year: number, month: number): Array<VxCalendarCell> {
	const firstWeekday = vxCalendarWeekday(year, month, 1)
	const total = vxDatetimeDaysInMonth(year, month)
	const cells: Array<VxCalendarCell> = []
	for (let index = 0; index < 42; index++) {
		const day = index - firstWeekday + 1
		if (day < 1 || day > total) {
			cells.push({ day: 0, date: '', weekday: 0 })
			continue
		}
		cells.push({
			day: day,
			date: vxCalendarFormat(year, month, day),
			weekday: (firstWeekday + day - 1) % 7
		})
	}
	return cells
}

/** 一个月的首尾两天，用序号表示，给上下限比较用。 */
export type VxCalendarBounds = {
	/** 当月 1 号的序号。 */
	first: number
	/** 当月最后一天的序号。 */
	last: number
}

export function vxCalendarMonthBounds(year: number, month: number): VxCalendarBounds {
	const last = vxDatetimeDaysInMonth(year, month)
	return { first: vxCalendarDayNumber(year, month, 1), last: vxCalendarDayNumber(year, month, last) }
}

/** 前后翻月，跨年时一起进位；只要年月，日固定 1。 */
export function vxCalendarShiftMonth(year: number, month: number, delta: number): VxCalendarDate {
	let nextMonth = month + delta
	let nextYear = year
	while (nextMonth < 1) {
		nextMonth += 12
		nextYear -= 1
	}
	while (nextMonth > 12) {
		nextMonth -= 12
		nextYear += 1
	}
	return { year: nextYear, month: nextMonth, day: 1 }
}
