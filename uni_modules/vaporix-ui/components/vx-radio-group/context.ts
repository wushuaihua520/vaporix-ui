import { VxSemantic, VxSize } from '../../libs/types/common'
import { VxRadioLayout, VxRadioPlacement, VxRadioVariant } from './props'

/** provide / inject 的 key。只在 vx-radio-group 和 vx-radio 之间使用。 */
export const VX_RADIO_CONTEXT = 'vx-radio-context'

/**
 * 分组向单项暴露的状态和选中入口。
 *
 * 全部用函数而不是 ref：单项在自己的 computed 里调用，依赖仍会被单项的 computed 收集；
 * 单项不直接改分组内部变量。
 */
export type VxRadioContext = {
	/** 按 value 判断是否选中。 */
	isChecked: (value: string) => boolean
	/** 选中一个 value；已选中和空 value 都在分组里拦掉。 */
	select: (value: string) => void
	/** 标记和文案档位，由分组统一决定。 */
	size: () => VxSize
	/** 选中标记的语义色。 */
	type: () => VxSemantic
	/** 圆圈还是只画对号。 */
	variant: () => VxRadioVariant
	/** 标记在文案前还是行尾。 */
	placement: () => VxRadioPlacement
	/** 横排还是列表。 */
	layout: () => VxRadioLayout
	/** 列表是否画项间分割线。 */
	divider: () => boolean
	/** 整组是否禁用。 */
	disabled: () => boolean
	/** 项挂载时登记实例 id。index 为 null 表示这项没传位置。 */
	register: (id: string, index: number | null) => void
	/** 项卸载时注销实例 id。 */
	unregister: (id: string) => void
	/** 按实例 id 判断是不是最后一项，最后一项不画分割线。 */
	isLast: (id: string) => boolean
}
