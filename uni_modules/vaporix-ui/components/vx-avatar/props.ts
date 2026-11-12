import { VxSemantic, VxSize } from '../../libs/types/common'
import { VxIconName } from '../../libs/icons/codepoints'

/** 头像轮廓：圆形、小圆角、直角。 */
export type VxAvatarShape = 'circle' | 'rounded' | 'square'

/** 图片填充方式，只透传原生 image 支持的裁剪与等比两档。 */
export type VxAvatarMode = 'aspectFill' | 'aspectFit'

export type VxAvatarProps = {
	/** 图片地址；有值时先加载图片，失败后按 text → icon → user 回落。 */
	src?: string
	/** 首字文案；先 trim，再按 code point 取第一个字符。 */
	text?: string
	/** 字体图标名，取值见 libs/icons/codepoints.ts；空值回落到 user。 */
	icon?: VxIconName
	/** 外框尺寸，默认 md。 */
	size?: VxSize
	/** 轮廓，默认 circle。 */
	shape?: VxAvatarShape
	/** 首字与图标的语义色，默认 default。 */
	type?: VxSemantic
	/** 2px 内描边，画在方框内侧，不改变外框尺寸。 */
	ring?: boolean
	/** 自定义底色，字面值；图片态也铺这一层。 */
	bgColor?: string
	/** 自定义前景色，字面值；只作用于首字和图标。 */
	color?: string
	/** 图片填充方式，默认 aspectFill。 */
	mode?: VxAvatarMode
	/** 头像可点：按下变淡并抛 click。只写 @click 不传也算可点；显式 false 时才关掉。 */
	clickable?: boolean
}
