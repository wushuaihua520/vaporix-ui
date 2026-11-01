import { VxIconVariant, VxSemantic, VxSize } from '../../libs/types/common'
import { VxIconName } from '../../libs/icons/codepoints'

/** 一个标签栏项。图片优先于字体图标；action 项只抛点击，不参与选中。 */
export type VxTabbarItem = {
	/** 文案，建议 2–4 个字，单行省略。 */
	text?: string
	/** 字体图标名，取值由 libs/icons/codepoints.ts 生成；有 image 时用图片。 */
	icon?: VxIconName
	/** 选中时的字体图标名；不传时沿用 icon。 */
	activeIcon?: VxIconName
	/** 图标图片地址，优先于字体图标；成对传 activeImage。 */
	image?: string
	/** 选中时的图片地址；不传时沿用 image。 */
	activeImage?: string
	/** 计数角标，小于 1 不显示；超过 badgeMax 显示 max+。 */
	badge?: number
	/** 只显示圆点，优先于 badge。 */
	dot?: boolean
	/** 禁用后不响应点击，图标和文字转灰。 */
	disabled?: boolean
	/** 凸起成圆钮，浮在标签栏上沿；一个标签栏最多一个，多传时只认第一个。 */
	raised?: boolean
	/** 只做按钮：点击不写 v-model，只抛 click；通常和 raised 一起用。 */
	action?: boolean
}

export type VxTabbarProps = {
	/** 标签栏项，一屏 3–5 个；空数组不渲染。 */
	items?: Array<VxTabbarItem>
	/** 栏高、图标和凸起按钮档位，默认 md。 */
	size?: VxSize
	/** 选中态和凸起按钮的语义色，默认 primary。 */
	type?: VxSemantic
	/** 固定在页面底部；默认打开。 */
	fixed?: boolean
	/** 固定时在文档流里占同高，默认打开；标签栏放在页面末尾才有意义。 */
	placeholder?: boolean
	/** 为底部手势条留白，默认打开；栏底色一直铺到屏幕底边。 */
	safeArea?: boolean
	/** 顶部 1px 分割线，默认打开。 */
	divider?: boolean
	/** 整条底色，字面值或主题令牌；不传时用 surface。 */
	bgColor?: string
	/** 未选中的文字和字体图标颜色，字面值或主题令牌；图片不受影响。 */
	color?: string
	/** 计数角标封顶，默认 99。 */
	badgeMax?: number
	/** 角标语义色，默认 danger；和徽章一样表达未读、待处理。 */
	badgeType?: VxSemantic
	/** 未选中字体图标的字重，默认 regular；图片不受影响。 */
	iconVariant?: VxIconVariant
	/** 选中字体图标的字重，默认 regular；做线性转实心时传 fill。 */
	activeIconVariant?: VxIconVariant
	/** 固定时的浮层层级，默认 1，和固定页脚同档。 */
	zIndex?: number
}
