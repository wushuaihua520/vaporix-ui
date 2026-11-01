import { VxIconVariant, VxSemantic, VxSize } from '../../libs/types/common'
import { VxIconName } from '../../libs/icons/codepoints'

export type VxIconProps = {
	/** 图标名，取值由 libs/icons/codepoints.ts 生成。 */
	name: VxIconName
	size?: VxSize
	type?: VxSemantic
	/** regular 线性 / fill 实心，共用同一组名字和码点。 */
	variant?: VxIconVariant
	/** 局部颜色，接受 CSS 值，通常传 var(--vx-color-*)。 */
	color?: string
}
