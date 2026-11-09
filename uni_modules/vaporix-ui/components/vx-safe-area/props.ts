/** 安全区方向：顶部让开状态栏与刘海，底部让开手势条。 */
export type VxSafeAreaEdge = 'top' | 'bottom'

export type VxSafeAreaProps = {
	/** 贴哪一边，默认 bottom。 */
	edge?: VxSafeAreaEdge
	/** 自定义高度，需带单位；传了就不再读系统安全区。 */
	height?: string
	/** 底色，字面值；默认透明。 */
	bgColor?: string
	/** 固定到窗口对应边，默认留在文档流里。 */
	fixed?: boolean
}
