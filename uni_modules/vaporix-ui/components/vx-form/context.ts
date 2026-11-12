import { VxSize } from '../../libs/types/common'
import { VxFormLabelPosition } from './props'

/** provide / inject 的 key。只在 vx-form 和 vx-form-item 之间使用。 */
export const VX_FORM_CONTEXT = 'vx-form-context'

/**
 * 一个表单项在容器里的登记信息。
 *
 * order 由容器按挂载顺序发号，validate() 按它串行执行；prop 为空的项目不登记。
 * validate / clearValidate 由项自己提供，容器只负责排序和调用。
 */
export type VxFormItemInstance = {
	/** 实例 id：同一个 prop 只认先注册者，摘除时也要能区分实例。 */
	uid: string
	/** 字段键，为空时不参与校验。 */
	prop: string
	/** 注册顺序，由容器赋值。 */
	order: number
	/** 跑这一项的规则，返回是否通过。 */
	validate: () => Promise<boolean>
	/** 只清这一项的错误态，不改业务值。 */
	clearValidate: () => void
}

/**
 * 失败项根节点在视口里的位置。
 * 只带 top：页面滚动拿它换算绝对位置，vx-page 拿它换算滚动区内的偏移。
 */
export type VxFormInvalidRect = {
	top: number
}

/**
 * 容器向项暴露的读取、登记和失败定位入口。
 *
 * 全部用函数而不是 ref：项在 computed 里调用这些函数时，读到的是容器自己的
 * props，依赖仍会被项的 computed 收集；容器也只会通过 register / unregister 改登记表。
 */
export type VxFormContext = {
	/** 项挂载时登记；prop 为空或重复时由容器忽略。 */
	register: (item: VxFormItemInstance) => void
	/** 项卸载时摘除。 */
	unregister: (item: VxFormItemInstance) => void
	/** 整组标签宽度，带单位。 */
	labelWidth: () => string
	/** 标签位置。 */
	labelPosition: () => VxFormLabelPosition
	/** 字号、行距档位。 */
	size: () => VxSize
	/** 整组是否禁用。 */
	disabled: () => boolean
	/**
	 * 这次失败要不要定位。
	 * 关掉 scrollToError 时为 false；validateField 单项校验期间也是 false，避免边输入边跳。
	 */
	scrollToError: () => boolean
	/**
	 * 失败项把量到的根节点位置交回来。
	 * 量不到传 null，容器再从自己的作用域查一次；两边都拿不到就静默，不改校验结果。
	 */
	reportInvalid: (rect: VxFormInvalidRect | null) => void
}
