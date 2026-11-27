// 普通 .ts 模块不在 uvue 的自动引入范围内，这里显式引入 ref。
import { ref } from 'vue'
import { vxSetStyle, VxStyleKey } from '@/uni_modules/vaporix-ui/libs/global-style'

/**
 * 示例应用的全局控件风格。组件实时跟库 store 走，这里只管持久化：
 * 选择落本地缓存，重启由 App.uvue onLaunch 调 restoreDemoStyle 恢复。
 */

const VX_DEMO_STYLE_KEY = 'vaporix-demo-style'

/** 全局控件风格，初始化时读缓存（未写过缓存时是 default）。 */
export const demoStyle = ref<VxStyleKey>(
	uni.getStorageSync(VX_DEMO_STYLE_KEY) === 'liquid-glass' ? 'liquid-glass' : 'default'
)

/** 切风格：写库 store（组件实时跟随）+ 落缓存。 */
export function setDemoStyle(style : VxStyleKey) {
	demoStyle.value = style
	vxSetStyle(style)
	uni.setStorageSync(VX_DEMO_STYLE_KEY, style)
}

/** 启动恢复：App.uvue onLaunch 调一次。 */
export function restoreDemoStyle() {
	vxSetStyle(demoStyle.value)
}
