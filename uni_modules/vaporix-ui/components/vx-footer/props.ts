/** 页脚中的文字链接。组件不内置跳转，点击只抛链接对象。 */
export type VxFooterLink = {
	/** 链接文案，保持短句，不换行。 */
	text: string
	/** 业务值，随 click 事件原样抛出，通常放路由名或页面地址。 */
	value?: string
	/** 单个链接的文字色，字面值；不传时跟随 linkColor。 */
	color?: string
}

export type VxFooterProps = {
	/** 版权、备案号等底部说明。 */
	copyright?: string
	/** 链接导航，从左到右排列，相邻链接之间自动加分隔线。 */
	links?: Array<VxFooterLink>
	/** 固定在页面底部；默认留在文档流里。 */
	fixed?: boolean
	/** 版权文字色，字面值；不传时用主题的次要文字色。 */
	color?: string
	/** 链接的默认文字色，字面值；links 里单项的 color 优先。 */
	linkColor?: string
	/** 分隔线与固定底栏顶部描边的颜色，字面值。 */
	borderColor?: string
	/** 页脚底色，字面值；固定模式不传时用主题的 surface。 */
	bgColor?: string
}
