import { VxSemantic, VxSize } from '../../libs/types/common'

/** 文本颜色：default 正文，secondary 次要说明，其余按语义表达状态。 */
export type VxTextType = VxSemantic | 'secondary'

/** 文本格式化：手机号掩码、金额千分位、银行卡分组、身份证掩码。 */
export type VxTextFormat = 'none' | 'phone' | 'amount' | 'bank-card' | 'id-card'

/** 字重档位，对应 --vx-weight-*。 */
export type VxTextWeight = 'regular' | 'medium' | 'semibold' | 'bold'

/** 对齐方式；只在 block 或自身有宽度时看得出效果。 */
export type VxTextAlign = 'left' | 'center' | 'right'

/** 装饰线：下划线、删除线。 */
export type VxTextDecoration = 'none' | 'underline' | 'line-through'

export type VxTextProps = {
	/** 文本内容；数字会转成字符串，空串不渲染。 */
	text?: string | number
	/** 文本颜色，默认 default；secondary 是次要灰，其余语义色只表达状态。 */
	type?: VxTextType
	/** 字号和行高档位，默认 md，对应 13 / 15 / 17 与 20 / 22 / 24。 */
	size?: VxSize
	/** 字重，默认 regular。 */
	weight?: VxTextWeight
	/** 自定义颜色，字面值；优先于 type，disabled 时不生效。 */
	color?: string
	/** 对齐方式，默认 left；block 下按整行对齐。 */
	align?: VxTextAlign
	/** 装饰线，默认 none。 */
	decoration?: VxTextDecoration
	/** 独占一行：宽度铺满父级，对齐和截断按整行算。 */
	block?: boolean
	/** 最多显示几行，0 表示不限；1 单行省略，2 以上多行截断。 */
	maxLines?: number
	/** 长按复制，默认关闭；复制成功抛 copy。 */
	copyable?: boolean
	/** 文本可选中；App 显示原生复制菜单，Web 可选择。与 copyable 同时打开时不生效。 */
	selectable?: boolean
	/** 可点击：按下变淡并抛 click，默认关闭。 */
	clickable?: boolean
	/** 停用：文字转 disabled-text，不抛 click 和 copy。 */
	disabled?: boolean
	/** 格式化方式，默认 none；先格式化再显示，click / copy 拿到格式化后的文本。 */
	format?: VxTextFormat
	/** 金额前缀，默认 ¥；只在 format="amount" 时生效。 */
	currency?: string
	/** 金额小数位，0–6，默认 2；只在 format="amount" 时生效。 */
	decimals?: number
}
