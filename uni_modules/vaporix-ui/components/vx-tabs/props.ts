import { VxSemantic, VxSize } from '../../libs/types/common'

/** 页签外观：选中文字下的短线、浅底胶囊、整条反色。 */
export type VxTabsVariant = 'line' | 'soft' | 'inverse'

/** 排布方向：横向等宽页签，或纵向整行的侧边导航。 */
export type VxTabsDirection = 'horizontal' | 'vertical'

/** 一个页签。文案建议 2–4 个字，一屏放 2–5 个。 */
export type VxTabItem = {
	/** 页签文案。 */
	text?: string
	/** 计数角标，小于 1 不显示；超过 badgeMax 显示 max+。 */
	badge?: number
	/** 只显示圆点，优先于 badge。 */
	dot?: boolean
	/** 禁用后不响应点击，文字转灰。 */
	disabled?: boolean
}

export type VxTabsProps = {
	/** 页签，按顺序等宽排列；空数组不渲染。 */
	items?: Array<VxTabItem>
	/** 外观，默认 line。 */
	variant?: VxTabsVariant
	/** 排布方向，默认 horizontal；vertical 每项占一整行，选中标记换成左侧竖条。 */
	direction?: VxTabsDirection
	/** 竖排宽度，单位 px，默认 96；小于等于 0 时跟随容器撑满。 */
	verticalWidth?: number
	/** 横向可滚动：解除等宽约束，页签按文案宽度排布，超出容器横向滑动，选中项自动滚入可视区；仅 horizontal 生效。 */
	scrollable?: boolean
	/** 高度、字号和角标档位，默认 md。 */
	size?: VxSize
	/** 选中态的语义色，默认 primary。 */
	type?: VxSemantic
	/** 底部 1px 分割线，默认打开；inverse 不画。 */
	divider?: boolean
	/** 整条底色，字面值或主题令牌；不传时 line / soft 用 surface，inverse 用 text。 */
	bgColor?: string
	/** 未选中文字色，字面值或主题令牌；不传时 line / soft 用次要灰，inverse 用反色文字。 */
	color?: string
	/** 计数角标封顶，默认 99。 */
	badgeMax?: number
	/** 角标语义色，默认 danger；和徽章一样表达未读、待处理。 */
	badgeType?: VxSemantic
}
