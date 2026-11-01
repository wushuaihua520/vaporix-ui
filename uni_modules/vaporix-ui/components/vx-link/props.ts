import { VxSemantic, VxSize } from '../../../libs/types/common'

/** 链接颜色：primary 品牌色、secondary 次要灰，其余按语义表达状态。 */
export type VxLinkType = VxSemantic | 'secondary'

/** 字重档位，对应 --vx-weight-*。 */
export type VxLinkWeight = 'regular' | 'medium' | 'semibold' | 'bold'

/** 点按行为：auto 按平台处理，copy 只复制，none 只抛事件。 */
export type VxLinkAction = 'auto' | 'copy' | 'none'

export type VxLinkProps = {
	/** 目标地址：http(s)、tel:、mailto: 或站内路径；空串、空号码和空邮箱只展示，不响应点按。 */
	href?: string
	/** 显示文案；不传时显示 href，默认插槽优先。 */
	text?: string
	/** 文字颜色，默认 primary；secondary 是次要灰，其余语义色只表达状态。 */
	type?: VxLinkType
	/** 字号和行高档位，默认 md，对应 13 / 15 / 17 与 20 / 22 / 24。 */
	size?: VxSize
	/** 字重，默认 medium。 */
	weight?: VxLinkWeight
	/** 自定义颜色，字面值；优先于 type，disabled 时不生效。 */
	color?: string
	/** 下划线，默认关闭。 */
	underline?: boolean
	/** 点按行为，默认 auto：Web 打开，App 和小程序复制；tel: 在 App 和小程序拨号。 */
	action?: VxLinkAction
	/** 复制后的提示文案；留空时按地址类型给「链接已复制」「号码已复制」「邮箱已复制」。 */
	tips?: string
	/** 停用：转 disabled-text，不响应点按，也不抛 click。 */
	disabled?: boolean
}
