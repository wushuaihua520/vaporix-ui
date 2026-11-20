/** 抽屉从哪条边滑出：left / right 占满高度，top / bottom 占满宽度。 */
export type VxDrawerPosition = 'left' | 'right' | 'top' | 'bottom'

export type VxDrawerProps = {
	/** 显示抽屉，支持 v-model:show；点遮罩或关闭叉后回写 false。 */
	show?: boolean
	/** 滑出方向，默认 right。 */
	position?: VxDrawerPosition
	/** 左右抽屉的宽度，必须带单位，如 280px、86%；不传用 --vx-drawer-width。上下抽屉忽略。 */
	width?: string
	/** 上下抽屉的高度，必须带单位，如 45%、320px；不传用 --vx-drawer-height。左右抽屉忽略。 */
	height?: string
	/** 头部标题；和 closable、prefix、extra 都不传时不渲染头部。 */
	title?: string
	/** 头部右侧显示关闭叉，点击收起并抛 close。 */
	closable?: boolean
	/** 正文保留四边内边距；列表、图片要贴边时传 false。 */
	bodyPadded?: boolean
	/** 点击遮罩收起并抛 close，默认打开；关掉后要靠关闭叉、内容里的按钮或 close() 退出。 */
	maskClosable?: boolean
	/** 是否盖住自定义导航栏，默认 true。false 时遮罩和面板整体让出状态栏 + 48px 导航栏行高，导航栏保持可见可点；只对 navigationStyle: custom 的页面有意义，导航栏带 extra 第二行时高度按标准行算。 */
	coverNavbar?: boolean
	/** 自定义遮罩色，字面值；不传时用 --vx-color-mask。 */
	maskColor?: string
	/** 自定义面板底色，字面值；不传时用 --vx-color-surface。 */
	bgColor?: string
	/** 浮层层级，默认 1000，和操作菜单、日期时间选择器、日历弹层同档。 */
	zIndex?: number
}
