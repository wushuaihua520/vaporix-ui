import { VxIconName } from '../../libs/icons/codepoints'
import { VxIconVariant, VxSemantic, VxSize } from '../../libs/types/common'

/** 时间轴上的一条记录。有 title 是阶段，没有 title 是同一阶段下的事件。 */
export type VxTimeAxisItem = {
	/** 阶段标题；不传时按事件渲染，和上一条贴得更近。 */
	title?: string
	/** 说明文案，可以换行。 */
	description?: string
	/** 时间或补充文案，组件不解析内容。 */
	time?: string
	/** 节点图标；不传时用圆点。 */
	icon?: VxIconName
	/** 图标字重，默认 regular。 */
	iconVariant?: VxIconVariant
	/** 节点语义色，默认 default；default 是浅灰节点，其余是实心语义色。 */
	type?: VxSemantic
}

export type VxTimeAxisProps = {
	/** 记录，按从上到下的顺序排列；空数组不渲染。 */
	items?: Array<VxTimeAxisItem>
	/** 节点和文案档位，默认 md。 */
	size?: VxSize
	/** 竖线颜色，字面值；不传时用 --vx-color-border。 */
	lineColor?: string
}
