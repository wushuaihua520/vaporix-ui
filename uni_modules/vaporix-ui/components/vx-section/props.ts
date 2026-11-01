import { VxSize } from '../../libs/types/common'

/** 区块标题栏外观：透明底，或带浅底和圆角的标题条。 */
export type VxSectionVariant = 'plain' | 'soft'

export type VxSectionProps = {
	/** 标题；传默认插槽时忽略。 */
	title?: string
	/** 标题下的补充说明；传 suffix 插槽时忽略。 */
	description?: string
	/** 标题、说明、竖线和留白的档位，默认 md。 */
	size?: VxSize
	/** 外观，默认 plain。 */
	variant?: VxSectionVariant
	/** 标题前的竖线标记。 */
	marker?: boolean
	/** 底部分割线。 */
	divider?: boolean
	/** 整条标题栏可点：按下变淡并抛 click。 */
	clickable?: boolean
	/** 标题自定义颜色，字面值。 */
	titleColor?: string
	/** 说明自定义颜色，字面值。 */
	descriptionColor?: string
	/** 竖线自定义颜色，字面值。 */
	markerColor?: string
	/** 分割线自定义颜色，字面值。 */
	dividerColor?: string
}
