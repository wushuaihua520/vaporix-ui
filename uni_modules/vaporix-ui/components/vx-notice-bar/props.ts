import { VxIconName } from '../../libs/icons/codepoints'
import { VxSemantic, VxSize } from '../../libs/types/common'

/** 外观：语义浅底、语义实心、透明（放进卡片或页面区块）。 */
export type VxNoticeBarVariant = 'soft' | 'solid' | 'plain'

/** 外轮廓：默认平角通栏、圆角、胶囊。 */
export type VxNoticeBarShape = 'rounded' | 'pill' | 'square'

/** 第一轮滚动：从右侧入场，或直接从左侧起点开始。 */
export type VxNoticeBarActiveMode = 'backwards' | 'forwards'

export type VxNoticeBarProps = {
	/** 通告文案。传了默认插槽时以插槽为准；滚动模式只读这一项。 */
	text?: string
	/** 语义色，默认 warning；普通公告用 info，中性说明用 default。 */
	type?: VxSemantic
	/** 外观，默认 soft。 */
	variant?: VxNoticeBarVariant
	/** 行高、字号和图标档位，默认 md。 */
	size?: VxSize
	/** 外轮廓，默认 square；放进卡片时用 rounded。 */
	shape?: VxNoticeBarShape
	/** 左侧图标，取值见 libs/icons/codepoints.ts；extend 图标要先引入 icons-extend.css。 */
	icon?: VxIconName
	/** 左侧图标颜色，字面值或主题令牌；不传时跟随文案前景色。 */
	iconColor?: string
	/** 允许换行。滚动模式下忽略，文案固定单行。 */
	wrap?: boolean
	/** 横向滚动。只在 text 超出可视宽度时移动；默认插槽不参与滚动。 */
	scrollable?: boolean
	/** 滚动速度，单位 px/s，默认 100；0 和负数回到 100，其余收在 20–600。 */
	speed?: number
	/** 第一轮滚动的起点，默认 backwards；forwards 跳过右侧入场，从左侧起点开始。 */
	activeMode?: VxNoticeBarActiveMode
	/** 显示关闭图标；点击后收起并发 close。 */
	closable?: boolean
	/** 自定义底色，字面值或主题令牌。 */
	bgColor?: string
	/** 自定义文案颜色，字面值或主题令牌；不传 iconColor 时图标一起跟随。 */
	color?: string
	/** 整条可点，默认打开；静态展示传 false，既不按下变淡也不抛 click。 */
	clickable?: boolean
}
