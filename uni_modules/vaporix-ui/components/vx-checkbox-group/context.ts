import { VxSemantic, VxSize } from '../../libs/types/common'
import { VxCheckboxLayout, VxCheckboxPlacement, VxCheckboxVariant } from './props'

/** provide / inject 的 key。只在 vx-checkbox-group 和 vx-checkbox 之间使用。 */
export const VX_CHECKBOX_CONTEXT = 'vx-checkbox-context'

/**
 * 分组向单项暴露的状态和切换入口。
 *
 * 全部用函数而不是 ref：单项在自己的 computed 里调用，依赖仍会被单项的 computed 收集；
 * 单项不直接改分组内部变量。
 */
export type VxCheckboxContext = {
	/** 按 value 判断是否选中。 */
	isChecked: (value: string) => boolean
	/** 切换一个 value；返回是否真的改了选中集合。空 value、整组禁用和超出 max 都返回 false。 */
	toggle: (value: string) => boolean
	/** 标记和文案档位，由分组统一决定。 */
	size: () => VxSize
	/** 选中标记的语义色。 */
	type: () => VxSemantic
	/** 方框还是只画对号。 */
	variant: () => VxCheckboxVariant
	/** 标记在文案前还是行尾。 */
	placement: () => VxCheckboxPlacement
	/** 横排还是列表。 */
	layout: () => VxCheckboxLayout
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
