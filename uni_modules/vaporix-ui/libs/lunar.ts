/**
 * 公历转农历，覆盖 1900-01-31 到 2100-12-31。
 *
 * 只换算出年月日和一个「初一 / 廿一」这样的日子文案，不算节气、干支、生肖和宜忌。
 * 日子按整数运算从基准日推，不建 Date：农历年按东八区定，设备的时区不该影响结果。
 */

import { VX_CALENDAR_MAX_YEAR, VX_CALENDAR_MIN_YEAR, vxCalendarDayNumber } from './calendar'

/** 农历 1900–2100 每年的闰月与大小月，一年一个值。
 *  低 4 位是闰月月份（0 表示不闰），0x8000 到 0x10 依次是正月初一到腊月的天数（1 = 30 天），
 *  0x10000 是闰月的天数（1 = 30 天）。 */
const VX_LUNAR_INFO: Array<number> = [
	0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, // 1900-1909
	0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, // 1910-1919
	0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, // 1920-1929
	0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, // 1930-1939
	0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, // 1940-1949
	0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0, // 1950-1959
	0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, // 1960-1969
	0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6, // 1970-1979
	0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, // 1980-1989
	0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0, // 1990-1999
	0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, // 2000-2009
	0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, // 2010-2019
	0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, // 2020-2029
	0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, // 2030-2039
	0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0, // 2040-2049
	0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0, // 2050-2059
	0x0a2e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4, // 2060-2069
	0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0, // 2070-2079
	0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160, // 2080-2089
	0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252, // 2090-2099
	0x0d520 // 2100
]

// 能换算的年份上下限沿用 libs/calendar.ts：农历表按整年存，和日历能翻的 1900–2100 是同一段。

/** 日子写法：初一、十一、二十、廿一、三十。 */
const VX_LUNAR_DAY_PREFIX: Array<string> = ['初', '十', '廿', '卅']

const VX_LUNAR_DAY_NUMBER: Array<string> = ['日', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十']

/** 月份写法：正月、二月……冬月、腊月。 */
const VX_LUNAR_MONTH_NAME: Array<string> = ['正', '二', '三', '四', '五', '六', '七', '八', '九', '十', '冬', '腊']

/** 农历基准日：1900-01-31 是庚子年正月初一。 */
const VX_LUNAR_EPOCH = vxCalendarDayNumber(1900, 1, 31)

/** 农历一年有多少天。 */
function vxLunarYearDays(year: number): number {
	const info = VX_LUNAR_INFO[year - VX_CALENDAR_MIN_YEAR]
	let total = 348
	for (let bit = 0x8000; bit > 0x8; bit >>= 1) {
		if ((info & bit) !== 0) total += 1
	}
	return total + vxLunarLeapDays(year)
}

/** 闰几月，0 表示这一年不闰。 */
function vxLunarLeapMonth(year: number): number {
	return VX_LUNAR_INFO[year - VX_CALENDAR_MIN_YEAR] & 0xf
}

/** 闰月多少天，没有闰月返回 0。 */
function vxLunarLeapDays(year: number): number {
	if (vxLunarLeapMonth(year) === 0) return 0
	return (VX_LUNAR_INFO[year - VX_CALENDAR_MIN_YEAR] & 0x10000) !== 0 ? 30 : 29
}

/** 农历某月多少天，闰月走 vxLunarLeapDays。 */
function vxLunarMonthDays(year: number, month: number): number {
	const info = VX_LUNAR_INFO[year - VX_CALENDAR_MIN_YEAR]
	return (info & (0x10000 >> month)) !== 0 ? 30 : 29
}

/** 农历日的写法。 */
function vxLunarDayText(day: number): string {
	if (day === 10) return '初十'
	if (day === 20) return '二十'
	if (day === 30) return '三十'
	return `${VX_LUNAR_DAY_PREFIX[Math.floor(day / 10)]}${VX_LUNAR_DAY_NUMBER[day % 10]}`
}

/** 农历月的写法，闰月前面加「闰」。 */
function vxLunarMonthText(month: number, leap: boolean): string {
	const name = VX_LUNAR_MONTH_NAME[month - 1]
	return leap ? `闰${name}月` : `${name}月`
}

/** 一次换算的结果。 */
export type VxLunarDate = {
	year: number
	month: number
	day: number
	/** 这一天在闰月里。 */
	leap: boolean
	/** 月份写法，例如「九月」「闰六月」。 */
	monthText: string
	/** 日子写法，例如「廿一」。 */
	dayText: string
}

/**
 * 公历转农历，超出 1900-01-31 到 2100-12-31 时返回 null。
 * 表里只按整年存，末年的最后一天之后没有数据，这类越界一律当没有结果。
 */
export function vxLunarFromSolar(year: number, month: number, day: number): VxLunarDate | null {
	if (year < VX_CALENDAR_MIN_YEAR || year > VX_CALENDAR_MAX_YEAR) return null
	let offset = vxCalendarDayNumber(year, month, day) - VX_LUNAR_EPOCH
	if (offset < 0) return null

	// 按整年往下减，减到剩下的天数落在这一年里。
	let lunarYear = VX_CALENDAR_MIN_YEAR
	while (lunarYear < VX_CALENDAR_MAX_YEAR) {
		const days = vxLunarYearDays(lunarYear)
		if (offset < days) break
		offset -= days
		lunarYear += 1
	}

	// 再按整月往下减，闰月排在同名月份后面，所以同一个月会连着走两遍。
	const leapMonth = vxLunarLeapMonth(lunarYear)
	let lunarMonth = 1
	let leap = false
	while (lunarMonth <= 12) {
		const days = leap ? vxLunarLeapDays(lunarYear) : vxLunarMonthDays(lunarYear, lunarMonth)
		if (offset < days) break
		offset -= days
		if (leap) {
			leap = false
			lunarMonth += 1
		} else if (lunarMonth === leapMonth) {
			leap = true
		} else {
			lunarMonth += 1
		}
	}
	if (lunarMonth > 12) return null

	return {
		year: lunarYear,
		month: lunarMonth,
		day: offset + 1,
		leap: leap,
		monthText: vxLunarMonthText(lunarMonth, leap),
		dayText: vxLunarDayText(offset + 1)
	}
}
