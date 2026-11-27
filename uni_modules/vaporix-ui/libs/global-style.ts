import { computed, ref } from 'vue'

/**
 * 全局控件风格。default 是默认实底风格；liquid-glass 让支持玻璃化的组件默认走
 * 液态玻璃面（iOS 系统材质、Android/鸿蒙/Web CSS 磨砂、小程序实底近似）。
 * 组件读 isGlassStyle 拼 glass modifier class 或做模板分支；
 * 组件 prop 显式传值时优先于全局（三态语义：不传 = 跟全局，true/false = 覆盖）。
 * 状态不落盘：持久化是应用侧的事（参考 demo 的 pages/demo/shared/style.ts）。
 */

export type VxStyleKey = 'default' | 'liquid-glass'

export const vxStyle = ref<VxStyleKey>('default')

export const isGlassStyle = computed((): boolean => vxStyle.value === 'liquid-glass')

export function vxSetStyle(style : VxStyleKey) : void {
	vxStyle.value = style
}
