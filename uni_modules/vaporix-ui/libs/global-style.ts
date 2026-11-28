import { computed, ref } from 'vue'

/**
 * 全局控件风格。default 是默认实底风格；liquid-glass 让支持玻璃化的组件默认走
 * 液态玻璃面（iOS 系统材质、Android/鸿蒙/Web CSS 磨砂、小程序实底近似）。
 * 组件读 isGlassStyle 拼 glass modifier class 或做模板分支；
 * 组件 prop 两态语义：传 true 强制玻璃，不传或 false 跟随全局。
 * 不做「显式 false 强制关」——Vue 对无 default 的 Boolean prop 缺席即 false（web / 小程序），
 * App 端缺席是 null，缺席检测跨端不一致（坑：0.82 实测）。
 * 状态不落盘：持久化是应用侧的事（参考 demo 的 pages/demo/shared/style.ts）。
 */

export type VxStyleKey = 'default' | 'liquid-glass'

export const vxStyle = ref<VxStyleKey>('default')

export const isGlassStyle = computed((): boolean => vxStyle.value === 'liquid-glass')

export function vxSetStyle(style : VxStyleKey) : void {
	vxStyle.value = style
}
