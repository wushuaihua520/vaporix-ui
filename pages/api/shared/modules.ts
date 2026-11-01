/**
 * 接口目录：libs 里可以独立引用的 JS 模块。
 * 详情页按 module 参数取一个模块来演示，路径与 readme 保持一致。
 */

export type DemoApiModule = {
	key: string
	name: string
	en: string
	icon: string
	path: string
	summary: string
	exports: string[]
}

export type DemoApiGroup = {
	title: string
	items: DemoApiModule[]
}

const themeModule: DemoApiModule = {
	key: 'theme',
	name: '主题',
	en: 'theme',
	icon: 'sun',
	path: 'libs/theme.ts',
	summary: '原生导航栏与窗口背景色。',
	exports: ['vxNavTheme', 'VxNavFront', 'VxNavTheme']
}

const iconsModule: DemoApiModule = {
	key: 'icons',
	name: '图标',
	en: 'icons',
	icon: 'star',
	path: 'libs/icons/codepoints.ts',
	summary: '1112 个图标名与 core / extend 分级。',
	exports: [
		'VX_ICON_NAMES',
		'VX_ICON_CORE_NAMES',
		'VX_ICON_EXTEND_NAMES',
		'VX_ICON_TIER',
		'VX_ICON_GROUPS',
		'VX_ICON_GLYPHS'
	]
}

const datetimeModule: DemoApiModule = {
	key: 'datetime',
	name: '日期时间',
	en: 'datetime',
	icon: 'clock',
	path: 'libs/datetime.ts',
	summary: '解析、格式化、步长与闰年。',
	exports: [
		'vxDatetimeParse',
		'vxDatetimeFormat',
		'vxDatetimeDaysInMonth',
		'vxDatetimeSnap',
		'vxDatetimeSteps',
		'vxDatetimeYears',
		'vxDatetimePad',
		'vxDatetimeIsLeapYear'
	]
}

const calendarModule: DemoApiModule = {
	key: 'calendar',
	name: '日历',
	en: 'calendar',
	icon: 'calendar',
	path: 'libs/calendar.ts',
	summary: '星期、网格、区间与翻月。',
	exports: [
		'vxCalendarGrid',
		'vxCalendarWeekday',
		'vxCalendarWeekText',
		'vxCalendarParse',
		'vxCalendarShiftMonth',
		'vxCalendarMonthBounds',
		'vxCalendarDayNumber',
		'vxCalendarFormat'
	]
}

const lunarModule: DemoApiModule = {
	key: 'lunar',
	name: '农历',
	en: 'lunar',
	icon: 'moon',
	path: 'libs/lunar.ts',
	summary: '公历转农历，1900–2100。',
	exports: ['vxLunarFromSolar', 'VxLunarDate']
}

const gestureModule: DemoApiModule = {
	key: 'gesture',
	name: '动效与手势',
	en: 'motion',
	icon: 'refresh',
	path: 'libs/motion.ts · libs/rate.ts · libs/swipe-action.ts',
	summary: '按下、旋转、评分与滑动常量。',
	exports: [
		'VX_PRESSED_STAY_TIME',
		'VX_SPIN_DURATION',
		'VX_RATE_SIZE',
		'VX_RATE_GAP',
		'VX_SWIPE_ACTION_ITEM_WIDTH',
		'VX_SWIPE_ACTION_EXTRA_WIDTH',
		'vxSwipeActionKey'
	]
}

export const DEMO_API_MODULES: DemoApiModule[] = [
	themeModule,
	iconsModule,
	datetimeModule,
	calendarModule,
	lunarModule,
	gestureModule
]

export const DEMO_API_GROUPS: DemoApiGroup[] = [
	{
		title: '主题与视觉',
		items: [themeModule, iconsModule]
	},
	{
		title: '日期与时间',
		items: [datetimeModule, calendarModule, lunarModule]
	},
	{
		title: '交互与动效',
		items: [gestureModule]
	}
]
