/** 弹出方向：四条边贴边，center 悬在页面中间。 */
export type VxPopupPlacement = 'top' | 'bottom' | 'left' | 'right' | 'center'

/** 圆角档位：只圆朝向页面的那一侧，贴边那条边保持直角；居中时四角全圆。 */
export type VxPopupRound = 'none' | 'sm' | 'md' | 'lg'

export type VxPopupProps = {
	/** 显示弹出层，支持 v-model:show；点可关闭的遮罩或关闭叉后回写 false。 */
	show?: boolean
	/** 弹出方向，默认 bottom。 */
	placement?: VxPopupPlacement
	/** 带单位的宽度，如 320px、86%；左右贴边和居中使用。不传时左右用 --vx-popup-width，居中按内容并收在 --vx-popup-max-width 内。 */
	width?: string
	/** 带单位的高度，如 320px、60%；上下贴边使用。不传时按内容高度排。 */
	height?: string
	/** 上下贴边时面板最大宽，需带单位，如 480px。不传时仍是 100% 宽；左右和居中不读。 */
	maxWidth?: string
	/** 圆角档位，默认 lg；贴边那一侧始终是直角。 */
	round?: VxPopupRound
	/** 内容上方单占一行显示关闭叉，点击收起并抛 close。 */
	closable?: boolean
	/** 点击遮罩收起并抛 close，默认打开；关掉后点遮罩只抛 click-mask，要靠关闭叉或内容里的按钮退出。 */
	maskClosable?: boolean
	/** 自定义遮罩色，字面值；不传时用 --vx-color-mask。 */
	maskColor?: string
	/** 液态玻璃 sheet 面：磨砂玻璃底加发丝描边和浮起阴影，铺满整张面板（含底部安全区）。传 true 强制玻璃；不传或 false 跟随全局控件风格（libs/global-style 的 isGlassStyle）。iOS 用 glass-effect-view 系统材质（跟随系统外观），Android / 鸿蒙 / Web 用 backdrop-filter 磨砂，小程序半透明实底。遮罩始终实色不玻璃化，maskColor 照常生效。 */
	liquidGlass?: boolean
	/** 上下贴边时由面板内边距让开顶部或底部安全区，默认打开；左右和居中的侧边安全区始终由内边距让开。 */
	safeArea?: boolean
	/** 浮层层级，默认 1000，低于数字键盘（1005）、消息提示（1010）、弹框（1020）、加载浮层（1050）和轻提示（1100）。 */
	zIndex?: number
	/** 进出场时长，单位毫秒，默认 220；0 表示直接切换。Web 上跟随系统的减少动效。 */
	duration?: number
	/** 打开时锁住页面滚动，默认打开；Web 端生效，小程序和 App 靠遮罩拦住手势，见 readme 的平台支持。 */
	lockScroll?: boolean
}
