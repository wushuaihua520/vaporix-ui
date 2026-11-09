/** 分割线方向：横向占满宽度，纵向由父级 flex 排布。 */
export type VxDividerDirection = 'horizontal' | 'vertical'

/** 横线带文字时的文字位置，只影响文字落在左侧、中间还是右侧。 */
export type VxDividerAlign = 'left' | 'center' | 'right'

export type VxDividerProps = {
	/** 方向，默认 horizontal。 */
	direction?: VxDividerDirection
	/** 横线中间的文字；空串就是一条线。 */
	text?: string
	/** 有文字时的位置，默认 center；无文字时不生效。 */
	align?: VxDividerAlign
	/** 1px 虚线，默认实线。 */
	dashed?: boolean
	/** 间距：数字按 px，字符串需带单位；横向是上下外边距，纵向是左右外边距。 */
	spacing?: string | number
	/** 线色和文字色，字面值；不传时线取 border、文字取次要灰。 */
	color?: string
	/** 纵向线高度，需带单位；空串时撑满父级。 */
	height?: string
}
