import { VxSemantic, VxSize } from '../../libs/types/common'

/** 外轮廓：默认平角，给小圆角或胶囊。细轨道上 rounded 和 pill 看起来接近。 */
export type VxProgressShape = 'square' | 'rounded' | 'pill'

export type VxProgressProps = {
	/** 进度百分比，0–100；越界收敛，非数字按 0。 */
	percent?: number
	/** 填充的语义色，默认 primary；只改填充，不改标签和数值。 */
	type?: VxSemantic
	/** 轨道高度和文字尺寸档位，默认 md。 */
	size?: VxSize
	/** 外轮廓，默认 square；圆角同时作用于轨道和填充。 */
	shape?: VxProgressShape
	/** 右侧显示百分比；text 非空时优先显示 text。 */
	showText?: boolean
	/** 左侧标签，短文本，单行省略。 */
	label?: string
	/** 右侧自定义短文案，优先于 showText 生成的百分比。 */
	text?: string
	/** 数值颜色，字面值或主题令牌；不传时用正文色。 */
	color?: string
	/** 填充颜色或渐变，字面值或主题令牌；渐变只用于品牌强调。 */
	bgColor?: string
	/** 轨道颜色，字面值或主题令牌；不传时用 default-soft。 */
	trackColor?: string
	/** 轨道自定义高度，需带单位；不传时取 size 档位，文字不跟着变。 */
	height?: string
	/** 进度变化时的过渡时长，单位毫秒；0 直接落位，默认 220。 */
	duration?: number
}
