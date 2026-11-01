import { VxSize } from '../../libs/types/common'

export type VxListCellProps = {
	/** 主文案；传默认插槽时忽略。 */
	title?: string
	/** 主文案下的辅助说明。 */
	description?: string
	/** 右侧短文本；传 extra 插槽时忽略。 */
	value?: string
	/** 行高与主文案档位，对应 --vx-list-height-*。 */
	size?: VxSize
	/** 右侧导航箭头。 */
	arrow?: boolean
	/** 可点行：按下有底色，点击抛 click；静态展示行传 false。 */
	clickable?: boolean
	/** 禁用：文字和箭头转灰，不抛 click。 */
	disabled?: boolean
	/** 底部分割线；分组最后一行传 false。 */
	divider?: boolean
	/** 分割线颜色，字面值；不传时用 --vx-color-divider。 */
	dividerColor?: string
	/** 分割线不透明度，0–1；0 隐藏分割线，默认 1。 */
	dividerOpacity?: number
}
