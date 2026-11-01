/**
 * 导航栏和窗口背景。这两处原生 API 不读 CSS 变量，色值在这里手工对齐 variables.css。
 * navBackground 对齐 --vx-color-surface，windowBackground 对齐 --vx-color-bg。
 * front 只允许 #000000 和 #ffffff，setNavigationBarColor 不接受其它色值。
 * pages.json 的 globalStyle 是静态配置，亮色要和这里对上：
 * navigationBarTextStyle 为 black，navigationBarBackgroundColor 对齐 surface，
 * backgroundColor、backgroundColorContent、backgroundColorTop、backgroundColorBottom 对齐 bg。
 */
export type VxNavFront = '#000000' | '#ffffff'

export type VxNavTheme = {
	front: VxNavFront
	navBackground: string
	windowBackground: string
}

export function vxNavTheme(dark: boolean): VxNavTheme {
	if (dark) {
		return {
			front: '#ffffff',
			navBackground: '#1a1d24',
			windowBackground: '#101216'
		}
	}
	return {
		front: '#000000',
		navBackground: '#ffffff',
		windowBackground: '#f5f7fb'
	}
}
