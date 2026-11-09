import { VxIconName } from '../../libs/icons/codepoints'
import { VxSemantic } from '../../libs/types/common'

/** 气泡相对锚点的方向：bottom 挂在下方，top 挂在上方，left / right 贴在两侧。inline 模式下同时决定箭头贴哪条边。 */
export type VxBubblePopupPlacement = 'top' | 'bottom' | 'left' | 'right'

/** 气泡在锚点横向（top / bottom）或纵向（left / right）上的对齐方式。 */
export type VxBubblePopupAlign = 'start' | 'center' | 'end'

/** surface 是浅浮层面板；solid 用语义实心底，配 on-* 前景。 */
export type VxBubblePopupVariant = 'surface' | 'solid'

/** 菜单项的语义色，和操作菜单同一套：default 正文色、primary 主操作、danger 不可逆操作。 */
export type VxBubblePopupItemType = 'default' | 'primary' | 'danger'

/** 气泡菜单里的一条动作。不传 items 时，面板改用 content 或 extra 插槽。 */
export type VxBubblePopupItem = {
	/** 动作文案，建议 2–6 个字，单行省略。 */
	text: string
	/** 右侧短值，比如快捷键、数量或状态；不参与点击。 */
	value?: string
	/** 文案前的图标，取值见 libs/icons/codepoints.ts。 */
	icon?: VxIconName
	/** 语义色，只在 surface 下生效；solid 面板统一用前景色。 */
	type?: VxBubblePopupItemType
	/** 禁用：转灰、不响应点击，也不收起气泡。 */
	disabled?: boolean
	/** 选中：换成主色并在右侧显示勾；选中值由业务维护。 */
	selected?: boolean
}

export type VxBubblePopupProps = {
	/** 显示气泡，支持 v-model:show；点遮罩或外部收起时回写 false。inline 模式忽略这一项。 */
	show?: boolean
	/** 行内聊天气泡模式：不渲染触发区，默认插槽是气泡内容，prefix / suffix 放头像。 */
	inline?: boolean
	/** 气泡相对锚点的方向，默认 bottom；inline 模式同样按这一项决定箭头贴哪条边。 */
	placement?: VxBubblePopupPlacement
	/** 气泡和锚点的对齐方式，默认 start；inline 模式用它把整行推到左侧或右侧。 */
	align?: VxBubblePopupAlign
	/** 面板外观，默认 surface；solid 需要配合 type。 */
	variant?: VxBubblePopupVariant
	/** solid 面板的语义色，默认 primary；surface 不使用。 */
	type?: VxSemantic
	/** 气泡盒子与锚点的间距，单位 px；箭头会向锚点一侧伸出 6px。 */
	offset?: number
	/** 是否显示箭头，默认打开。 */
	arrow?: boolean
	/** 箭头沿气泡边缘的微调，单位 px，正值向右或向下。 */
	arrowOffset?: number
	/** 气泡固定宽度，需带单位；百分比在 App 上同样可用。 */
	width?: string
	/** 气泡最大宽度，需带单位；App 的 max-width 只接受 px，不要传百分比。不传时菜单 280、聊天 260。 */
	maxWidth?: string
	/** 菜单项。非空时渲染菜单，content 和默认插槽都不再参与面板内容。 */
	items?: Array<VxBubblePopupItem>
	/** 面板文案，用于 tooltip 或聊天气泡；传了 items 或 inline 默认插槽时忽略。 */
	content?: string
	/** 菜单项之间画 1px 分割线，默认关闭。 */
	divider?: boolean
	/** 点菜单项后自动收起并抛 select，默认打开；关掉后由业务把 show 改回 false。 */
	closeOnSelect?: boolean
	/** 铺一层遮罩压暗页面，默认关闭；只压页面，不压气泡。 */
	mask?: boolean
	/** 点遮罩或气泡外部时收起并抛 close，默认打开。关掉且不铺 mask 时不挂点击层，页面还能操作；滚动后气泡不会跟随触发区。 */
	outsideClosable?: boolean
	/** 自定义遮罩色，字面值；不传时用 --vx-color-mask。 */
	maskColor?: string
	/** 浮层层级，默认 1000，和操作菜单、抽屉同档。 */
	zIndex?: number
}
