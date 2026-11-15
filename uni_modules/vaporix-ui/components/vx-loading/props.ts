import { VxLoadingVariant, VxSemantic, VxSize } from '../../libs/types/common'

/** 加载指示器的排列：横排或纵排。浮层固定纵排，忽略该值。 */
export type VxLoadingLayout = 'row' | 'column'

export type VxLoadingProps = {
	/** 加载文案；传空串只显示转圈。 */
	text?: string
	/** 文案换行。关掉后保持单行；加载更多会关掉，避免长句把尾部撑高。 */
	wrap?: boolean
	/** 转圈颜色；default 行内用次要灰，浮层用正文色。文案不跟着改色。 */
	type?: VxSemantic
	/** 转圈尺寸，沿用图标的 14 / 18 / 22 三档。 */
	size?: VxSize
	/** 转圈形态：圆环、开口弧、十二瓣。 */
	variant?: VxLoadingVariant
	/** 排列方式；浮层固定纵排。 */
	layout?: VxLoadingLayout
	/** 铺满页面并居中的浮层，用 v-if 控制显隐，会挡住页面点击。 */
	overlay?: boolean
	/** 浮层显示遮罩；关掉后仍挡住点击，只是不压暗页面。 */
	mask?: boolean
	/** 自定义遮罩色，字面值；不传时用 --vx-color-mask。 */
	maskColor?: string
	/** 浮层层级，默认 1050（VX_OVERLAY_LOADER_LAYER），压在弹框之上、轻提示之下。 */
	zIndex?: number
}
