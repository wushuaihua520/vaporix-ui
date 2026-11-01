/** 一行没排满时的水平排列：start 左对齐，center 居中，end 右对齐，between / around / evenly 均分。 */
export type VxRowJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'

/** 同一行里列的垂直对齐：stretch 拉成等高，其余按内容高度贴顶、居中或贴底。 */
export type VxRowAlign = 'start' | 'center' | 'end' | 'stretch'

export type VxRowProps = {
	/** 列间距，单位 px。四舍五入成整数，0 和负数不铺，超过 48 按 48；一半铺在列的两侧，行再用等量负外边距抵掉外侧半格。默认 0。 */
	gutter?: number
	/** 行间距，单位 px。收口和列间距一样；落在换行后每一列的上方，行再用等量负外边距抵掉第一行。默认 0。 */
	lineGutter?: number
	/** 水平排列方式，默认 start。列占满 24 列时看不出区别。 */
	justify?: VxRowJustify
	/** 垂直对齐方式，默认 stretch。 */
	align?: VxRowAlign
	/** 放不下时换行，默认打开；关掉后一行里的列按比例压缩。 */
	wrap?: boolean
}
