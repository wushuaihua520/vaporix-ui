import { VxIconName } from '../../libs/icons/codepoints'
import { VxSize } from '../../libs/types/common'

/** 轮播方向：纵向往上走一格，横向往左走一格。 */
export type VxRollingNewsDirection = 'vertical' | 'horizontal'

/** 外观：带描边的卡片、浅底、完全透明（放进卡片或页面区块）。 */
export type VxRollingNewsVariant = 'card' | 'soft' | 'plain'

/** 外轮廓：默认圆角、胶囊（搜索框）、平角。 */
export type VxRollingNewsShape = 'rounded' | 'pill' | 'square'

/** 一条滚动消息。 */
export type VxRollingNewsItem = {
	/** 文案，单行显示，超出省略；换行交给外面的卡片或页面区块。 */
	text?: string
	/** 业务标识，原样带回 click。 */
	id?: string
}

export type VxRollingNewsProps = {
	/** 消息列表，按顺序轮播；空数组不渲染，只有一条时不轮播。 */
	items?: Array<VxRollingNewsItem>
	/** 轮播方向，默认纵向。 */
	direction?: VxRollingNewsDirection
	/** 外观，默认 card：surface 底加 1px 描边。 */
	variant?: VxRollingNewsVariant
	/** 外轮廓，默认 rounded。 */
	shape?: VxRollingNewsShape
	/** 行高、字号和图标档位，默认 md。 */
	size?: VxSize
	/** 左侧图标，取值见 libs/icons/codepoints.ts；extend 图标要先引入 icons-extend.css。 */
	icon?: VxIconName
	/** 左侧图标颜色，字面值或主题令牌；不传时用 primary。 */
	iconColor?: string
	/** 底色，字面值或主题令牌；不传时按 variant 取。 */
	bgColor?: string
	/** 文案颜色，字面值或主题令牌；不传时用正文色。 */
	color?: string
	/** 两条消息之间的停顿，单位毫秒，默认 3000；小于等于 0 时按 3000 处理。 */
	interval?: number
	/** 自动轮播，默认打开；关掉后停在第一条，由业务切换。 */
	autoplay?: boolean
	/** 右侧箭头，默认关闭；传了 suffix 插槽时以插槽为准。 */
	arrow?: boolean
	/** 整条可点，默认打开；静态展示传 false，既不按下变淡也不抛 click。 */
	clickable?: boolean
}
