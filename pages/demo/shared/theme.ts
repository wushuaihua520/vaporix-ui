// 普通 .ts 模块不在 uvue 的自动引入范围内，这里显式引入 ref。
import { ref } from 'vue'
import { vxNavTheme } from '@/uni_modules/vaporix-ui/libs/theme'

/**
 * 示例项目的主题状态。
 *
 * 页面根节点用 vx-theme-light / vx-theme-dark 切令牌；
 * 原生导航栏、窗口底色和原生 tabBar 读不到 CSS 变量，由这里同步。
 * 主题存在本地缓存里，重新打开应用仍然是上次的选择。
 */

const VX_DEMO_THEME_KEY = 'vaporix-demo-theme'

const TAB_ICONS_LIGHT: string[] = [
	'/static/tabbar/components.png',
	'/static/tabbar/api.png',
	'/static/tabbar/mine.png'
]

const TAB_ICONS_LIGHT_ACTIVE: string[] = [
	'/static/tabbar/components-active.png',
	'/static/tabbar/api-active.png',
	'/static/tabbar/mine-active.png'
]

const TAB_ICONS_DARK: string[] = [
	'/static/tabbar/components-dark.png',
	'/static/tabbar/api-dark.png',
	'/static/tabbar/mine-dark.png'
]

const TAB_ICONS_DARK_ACTIVE: string[] = [
	'/static/tabbar/components-active-dark.png',
	'/static/tabbar/api-active-dark.png',
	'/static/tabbar/mine-active-dark.png'
]

export const demoIsDark = ref(uni.getStorageSync(VX_DEMO_THEME_KEY) === 'dark')

/** 原生导航栏和页面窗口底色跟着主题走。 */
export function applyDemoPageTheme() {
	const dark = demoIsDark.value
	const theme = vxNavTheme(dark)
	uni.setNavigationBarColor({
		frontColor: theme.front,
		backgroundColor: theme.navBackground
	})
	// 小程序没有 setPageStyle；Android、iOS 蒸汽模式会忽略 backgroundColorContent，页面底色靠主题 class。
	// #ifndef MP
	const pages = getCurrentPages()
	const page = pages[pages.length - 1]
	if (page != null) {
		page.setPageStyle({
			backgroundColor: theme.windowBackground,
			backgroundColorContent: theme.windowBackground
		})
	}
	// #endif
}

/** 原生 tabBar 的底色、文字色和图标，一次同步三项。只在 tab 页面调用。 */
export function applyDemoTabBarTheme() {
	const dark = demoIsDark.value
	const borderStyle: 'black' | 'white' = dark ? 'white' : 'black'
	uni.setTabBarStyle({
		color: dark ? '#9aa1ad' : '#6b7280',
		selectedColor: dark ? '#7da2ff' : '#2b6be0',
		backgroundColor: dark ? '#1a1d24' : '#ffffff',
		borderStyle: borderStyle
	})
	const icons = dark ? TAB_ICONS_DARK : TAB_ICONS_LIGHT
	const selected = dark ? TAB_ICONS_DARK_ACTIVE : TAB_ICONS_LIGHT_ACTIVE
	for (let index = 0; index < icons.length; index++) {
		uni.setTabBarItem({
			index: index,
			iconPath: icons[index],
			selectedIconPath: selected[index]
		})
	}
}

/** 写主题、落缓存、刷新当前页的原生外观。 */
function commitTheme(dark: boolean) {
	demoIsDark.value = dark
	uni.setStorageSync(VX_DEMO_THEME_KEY, dark ? 'dark' : 'light')
	applyDemoPageTheme()
}

/** tab 页切主题：页面 + 底栏一起换。 */
export function setDemoTabTheme(dark: boolean) {
	commitTheme(dark)
	applyDemoTabBarTheme()
}

/** 演示页切主题：没有 tabBar，只换页面和导航栏。 */
export function toggleDemoPageTheme() {
	commitTheme(!demoIsDark.value)
}

/** 演示页 onShow：把当前主题补到原生导航栏和窗口底色。 */
export function syncDemoTheme() {
	applyDemoPageTheme()
}

/** tab 页 onShow：再补一次 tabBar，从演示页切回来也能对齐。 */
export function syncDemoTabTheme() {
	applyDemoPageTheme()
	applyDemoTabBarTheme()
}
