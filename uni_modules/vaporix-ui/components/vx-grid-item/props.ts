import { VxSemantic, VxIconVariant, VxSize } from '../../libs/types/common'
import { VxIconName } from '../../libs/icons/codepoints'

export type VxGridItemProps = {
	/** 这一组的列数，2–5，默认 3；超出按 3，同一组保持一致。 */
	columns?: number
	/** 格子序号，从 0 开始；用来判断第一行和第一列，停掉外沿的分隔线。 */
	index?: number
	/** 主文案，单行省略；传默认插槽时忽略。 */
	title?: string
	/** 主文案下的辅助说明，可以换行。 */
	description?: string
	/** 图标名，取值由 libs/icons/codepoints.ts 生成；image 和 icon 插槽优先。 */
	icon?: VxIconName
	/** 字体图标字重；image 和 icon 插槽不受影响。 */
	iconVariant?: VxIconVariant
	/** 图标图片地址，优先于字体图标；icon 插槽优先于两者。 */
	image?: string
	/** 图标的语义色，默认 default；default 显示为次要灰。 */
	type?: VxSemantic
	/** 内边距、图标、图片和文案档位。 */
	size?: VxSize
	/** 画上、左分隔线；第一行、第一列不画，默认打开。 */
	divider?: boolean
	/** 可点：按下有底色，点击抛 click；静态格传 false。 */
	clickable?: boolean
	/** 禁用：组件渲染的图标和文案转灰，不抛 click。 */
	disabled?: boolean
	/** 格子底色，字面值；设置后按下改用整体透明度。 */
	bgColor?: string
	/** 主文案和字体图标的自定义颜色，字面值；传了就不再看 type。 */
	color?: string
}
