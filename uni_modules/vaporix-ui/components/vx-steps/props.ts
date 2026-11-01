import { VxIconName } from '../../libs/icons/codepoints'
import { VxIconVariant, VxSemantic, VxSize } from '../../libs/types/common'

/** 步骤条方向：横向等宽排列，纵向从上到下。 */
export type VxStepsDirection = 'horizontal' | 'vertical'

/** 节点外观：小圆点或序号。带 icon 的记录不受它影响。 */
export type VxStepsVariant = 'dot' | 'number'

/** 连线样式：实线或虚线。 */
export type VxStepsLineStyle = 'solid' | 'dashed'

/** 一个步骤。当前步骤用勾标记，带 icon 时用图标；之前的步骤保留圆点或序号。 */
export type VxStepItem = {
	/** 步骤名，横向时建议 2–4 个字，长文案改用纵向。 */
	title?: string
	/** 补充说明，可以换行。 */
	description?: string
	/** 时间或日期，展示文本，组件不解析格式。 */
	time?: string
	/** 自定义节点图标；传了之后不再画圆点或序号。 */
	icon?: VxIconName
	/** 图标字重，默认 regular。 */
	iconVariant?: VxIconVariant
}

export type VxStepsProps = {
	/** 步骤，按顺序排列；空数组不渲染。 */
	items?: Array<VxStepItem>
	/** 当前步骤索引，从 0 开始；负数按未开始处理，其余非整数四舍五入，超过末项收到最后一步。 */
	active?: number
	/** 排列方向，默认 horizontal。 */
	direction?: VxStepsDirection
	/** 节点外观，默认 dot；带 icon 的记录始终用图标节点。 */
	variant?: VxStepsVariant
	/** 节点、文字和间距档位，默认 md。 */
	size?: VxSize
	/** 当前进度的语义色，默认 primary。 */
	type?: VxSemantic
	/** 连线样式，默认 solid。 */
	lineStyle?: VxStepsLineStyle
	/** 打开后整步可点，点击抛 click；默认关闭，点击交给外层。 */
	clickable?: boolean
}
