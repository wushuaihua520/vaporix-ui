import { VxSize } from '../../libs/types/common'

/** 分组外观：描边卡片，或只保留 surface 底的平面分组。 */
export type VxCollapseVariant = 'card' | 'plain'

export type VxCollapseProps = {
	/** 手风琴：同一时间只展开一个面板，默认关闭。 */
	accordion?: boolean
	/** 分组外观，默认 card。 */
	variant?: VxCollapseVariant
	/** 标题、箭头和间距档位，默认 md。 */
	size?: VxSize
	/** 面板之间画 1px 分割线，最后一个面板不画，默认打开。 */
	divider?: boolean
	/** 整组显示箭头；面板上的 arrow 只能再关掉，不能反向打开，默认打开。 */
	arrow?: boolean
	/** 整组禁用：按下不响应，标题、说明和箭头转灰。 */
	disabled?: boolean
}
