import { VxSize } from '../../libs/types/common'

/** 组合里的一张图。 */
export type VxImageGroupItem = {
	/** 图片地址；空字符串显示占位图。 */
	src: string
	/** 业务标识，原样带回 click 和 error；列表里用它认出是哪一张。 */
	id?: string
}

/** 图片轮廓：小圆角、圆形、平角。 */
export type VxImageGroupShape = 'rounded' | 'circle' | 'square'

/** 排列方向：横向或纵向。 */
export type VxImageGroupDirection = 'row' | 'column'

/** 填充方式，取值与 uni-app image 的 mode 一致。 */
export type VxImageGroupMode = 'aspectFill' | 'aspectFit' | 'scaleToFill'

export type VxImageGroupProps = {
	/** 图片列表；空数组不渲染。 */
	items?: VxImageGroupItem[]
	/** 单张方框尺寸，默认 md。 */
	size?: VxSize
	/** 轮廓，默认 rounded。 */
	shape?: VxImageGroupShape
	/** 填充方式，默认 aspectFill；方框内不留白边。 */
	mode?: VxImageGroupMode
	/** 排列方向，默认 row；column 只排一列。 */
	direction?: VxImageGroupDirection
	/** 相邻两张图的偏移，单位 px；负值重叠，正值留缝，0 贴边。 */
	offset?: number
	/** row 下允许多行；只和 0 及以上的 offset 搭配，column 忽略。 */
	wrap?: boolean
	/** 每张图加一圈描边，重叠时把图片分开。 */
	ring?: boolean
	/** 描边颜色，字面值；不传时用 surface。 */
	ringColor?: string
	/** 可点：按下变淡并抛 click；静态展示传 false。 */
	clickable?: boolean
}
