import { VxSize } from '../../libs/types/common'

/** provide / inject 的 key。只在 vx-collapse 和 vx-collapse-item 之间使用。 */
export const VX_COLLAPSE_CONTEXT = 'vx-collapse-context'

/**
 * 容器向面板暴露的状态和切换入口。
 *
 * 全部用函数而不是 ref：面板在 computed 里调用这些函数时，读取的是容器自己的
 * props 和 ref，依赖仍会被面板的 computed 收集；面板不直接改容器内部变量。
 */
export type VxCollapseContext = {
	/** 按 name 判断是否展开。 */
	isOpen: (name: string) => boolean
	/** 切换一个面板；手风琴和 v-model 同步都在容器里处理。 */
	toggle: (name: string) => void
	/** 按实例 id 判断是不是最后一项，最后一项不画分割线。 */
	isLast: (id: string) => boolean
	/** 面板挂载时登记实例 id。index 为 null 表示这项没传位置。 */
	register: (id: string, index: number | null) => void
	/** 面板卸载时注销实例 id。 */
	unregister: (id: string) => void
	/** 当前档位，由容器统一决定。 */
	size: () => VxSize
	/** 整组是否显示箭头。 */
	arrow: () => boolean
	/** 整组是否禁用。 */
	disabled: () => boolean
	/** 是否画面板之间的分割线。 */
	divider: () => boolean
}
