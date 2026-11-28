import { VxSemantic, VxSize } from '../../libs/types/common'
import { VxIconName } from '../../libs/icons/codepoints'

/** 动作的语义出口：cancel 收起并抛 cancel，confirm 收起并抛 confirm。不传时抛 action。 */
export type VxModalActionRole = 'cancel' | 'confirm'

/** 动作视觉层级，与按钮同一套：实心、镂空、浅底、纯文字。 */
export type VxModalActionVariant = 'solid' | 'plain' | 'soft' | 'link'

/** 动作外轮廓：默认圆角、胶囊、平角。整组共用一个形状。 */
export type VxModalActionShape = 'rounded' | 'pill' | 'square'

/** 弹框底部的一个动作。默认取消、确定由 showCancel / cancelText / confirmText 生成。 */
export type VxModalAction = {
	/** 动作文案，建议 2–6 个字。 */
	text: string
	/** 语义色，默认 default。确定按钮由 confirmType 决定。 */
	type?: VxSemantic
	/** 视觉层级，默认 solid；默认取消按钮用 plain。 */
	variant?: VxModalActionVariant
	/** 语义出口；不传时点击只抛 action，不抛 confirm / cancel。 */
	role?: VxModalActionRole
	/** 禁用：转灰、不响应点击，也不收起弹框。 */
	disabled?: boolean
	/** 加载中：显示转圈、不响应点击；异步动作自己调 close() 收起。 */
	loading?: boolean
}

export type VxModalProps = {
	/** 显示弹框，支持 v-model:show；取消、关闭叉、遮罩和可自动收起动作会回写 false。 */
	show?: boolean
	/** 弹框标题，可选；和 icon 都不传时不渲染头部。 */
	title?: string
	/** 正文文案，可选；传了默认插槽时以插槽为准。 */
	content?: string
	/** 面板最大宽度：sm 280、md 320、lg 400；字号不随尺寸变化。 */
	size?: VxSize
	/** 头部状态图标，取值见 libs/icons/codepoints.ts；不传时不渲染图标。 */
	icon?: VxIconName
	/** 图标语义色，只染 48px 图标圆和图标本身，默认 primary。 */
	iconType?: VxSemantic
	/** 自定义动作列表，按顺序排列；非空时替换默认的取消、确定按钮。 */
	actions?: Array<VxModalAction>
	/** 是否渲染底部动作区，默认打开；自定义正文自带按钮时关掉。 */
	showActions?: boolean
	/** 默认动作里显示取消按钮，默认打开；只在没有传 actions 时生效。 */
	showCancel?: boolean
	/** 默认取消按钮文案。 */
	cancelText?: string
	/** 默认确定按钮文案。 */
	confirmText?: string
	/** 默认取消按钮的语义色；按钮是镂空样式。 */
	cancelType?: VxSemantic
	/** 默认确定按钮的语义色；按钮是实心样式。 */
	confirmType?: VxSemantic
	/** 默认确定按钮加载中；只在没有传 actions 时生效。 */
	confirmLoading?: boolean
	/** 默认确定按钮禁用；只在没有传 actions 时生效。 */
	confirmDisabled?: boolean
	/** 动作外轮廓，整组共用，默认 rounded。 */
	actionShape?: VxModalActionShape
	/** 点击遮罩关闭并抛 cancel，默认打开；关掉后仍可用动作、关闭叉（closable 打开时）或 close() 退出。 */
	maskClosable?: boolean
	/** 右上角显示关闭叉，点击收起并抛 cancel，默认关闭；不受 maskClosable / closeOnAction 影响。 */
	closable?: boolean
	/** 点击确定或普通动作后自动收起；取消按钮和关闭叉始终收起。 */
	closeOnAction?: boolean
	/** 自定义标题色，字面值；传 var(--vx-color-*) 时跟随主题。 */
	titleColor?: string
	/** 自定义正文色，字面值；只作用于 content，不改变默认插槽。 */
	contentColor?: string
	/** 自定义遮罩色，字面值；不传时用 --vx-color-mask。 */
	maskColor?: string
	/** 液态玻璃面板：磨砂玻璃底加发丝描边和浮起阴影，正文直接铺在玻璃面上，可读性由磨砂底的实度兜底。传 true 强制玻璃；不传或 false 跟随全局控件风格（libs/global-style 的 isGlassStyle）。iOS 用 glass-effect-view 系统材质（跟随系统外观），Android / 鸿蒙 / Web 用 backdrop-filter 磨砂，小程序实底近似。遮罩始终实色不玻璃化，maskColor 照常生效。 */
	liquidGlass?: boolean
	/** 浮层层级，默认 1020，低于加载浮层（1050）和轻提示（1100）。 */
	zIndex?: number
}
