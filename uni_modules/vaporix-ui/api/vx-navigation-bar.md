# vx-navigation-bar

自定义导航栏。标题居中，内置返回，左右和标题行下面都留插槽；固定时默认在文档流里占高，背景可透明、可渐变，也可以跟着滚动渐显。

页面在 `pages.json` 里关掉原生导航栏，导航栏放在页面根节点，和 `scroll-view` 平级：

## 示例

```json
{
	"path": "pages/order/detail",
	"style": {
		"navigationStyle": "custom"
	}
}
```

```vue
<vx-navigation-bar title="订单详情" back divider @back="goBack">
	<template #suffix>
		<view class="nav-action" @click="openMessage">
			<vx-icon name="bell" size="lg" />
		</view>
	</template>
</vx-navigation-bar>

<scroll-view class="page__body" direction="vertical" @scroll="onScroll">...</scroll-view>
```

头图压在导航栏下面时关掉占位，背景用 `transparent`：

```vue
<vx-navigation-bar title="城市漫游" back transparent color="#ffffff" :placeholder="false" />
<image class="hero" src="/static/city.jpg" mode="aspectFill" />
```

搜索框放在 `extra`，标题行保持 48：

```vue
<vx-navigation-bar title="鲜果商城" back>
	<template #suffix>
		<vx-badge absolute :value="3" :offset-y="-4">
			<view class="nav-action">
				<vx-icon name="message-square" size="lg" />
			</view>
		</vx-badge>
	</template>
	<template #extra>
		<view class="nav-search">
			<vx-input v-model="keyword" placeholder="搜索商品" shape="pill" clearable>
				<template #prefix>
					<vx-icon name="search" size="sm" color="var(--vx-color-text-secondary)" />
				</template>
			</vx-input>
		</view>
	</template>
</vx-navigation-bar>
```

滚动渐显：`fade` 打开后，背景从 0 增到 `maxOpacity`，`change` 回传 0–1。标题颜色按透明度自己切：

```vue
<vx-navigation-bar title="商品详情" back fade :placeholder="false" :scroll-top="scrollTop"
	:color="navColor" @change="onNavChange" />
```

```ts
const scrollTop = ref(0)
const navColor = ref('#ffffff')

const onNavChange = (opacity: number) => {
	navColor.value = opacity > 0.6 ? 'var(--vx-color-text)' : '#ffffff'
}
```

液态玻璃：传 `true` 强制玻璃，不传或 `false` 跟随全局控件风格（`libs/global-style`，应用调 `vxSetStyle('liquid-glass')` 后默认玻璃化）。玻璃底铺满状态栏和内容行整条，`bgColor` 与 `fade` / `transparent` 渐显逻辑都不作用于玻璃底：

```vue
<vx-navigation-bar title="城市漫游" back liquid-glass :placeholder="false" />
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | string | `''` | 标题，单行省略；默认插槽有内容时不渲染 |
| color | string | `''` | 标题和内置返回的颜色，字面值或主题令牌 |
| bgColor | string | `''` | 背景色或渐变，字面值或主题令牌；不传时用 `surface`；玻璃底不接 |
| divider | boolean | `false` | 底部 1px 分割线；透明和渐显未到 0.85 时不画；玻璃态不画 |
| dividerColor | string | `''` | 分割线颜色，字面值或主题令牌 |
| shadow | boolean | `false` | 用 `--vx-shadow-md` 代替分割线；玻璃态不画 |
| fixed | boolean | `true` | 固定在页面顶部；关闭后按文档流排在页面里 |
| placeholder | boolean | `true` | 固定时在文档流里占同高；头图场景关掉 |
| statusBar | boolean | `true` | 顶部为状态栏留白；非沉浸式或嵌在原生导航下面时关掉 |
| back | boolean | `false` | 显示内置返回箭头；`prefix` 插槽有内容时不渲染 |
| transparent | boolean | `false` | 背景始终透明，忽略 `fade` / `maxOpacity`、分割线和阴影；玻璃态不作用 |
| liquidGlass | boolean | — | 液态玻璃底：传 `true` 强制玻璃，不传或 `false` 跟随全局控件风格；磨砂分平台（iOS 用系统材质，Android / 鸿蒙 / Web 用 backdrop-filter，小程序半透明底） |
| fade | boolean | `false` | 背景透明度跟随 `scrollTop` |
| scrollTop | number | `0` | 滚动距离，绑定 `scroll-view` 的 `@scroll` |
| scrollRatio | number | `0.3` | 滚过导航栏宽度 × 该值时达到 `maxOpacity` |
| maxOpacity | number | `1` | 渐显上限 0–1 |
| zIndex | number | `20` | 固定时的层级，高于吸顶条、低于消息提示 |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| back | 点击内置返回箭头 | 无 |
| ready | 首次测量完成 | `VxNavigationBarInfo` |
| change | 渐显透明度变化 | `opacity` number，0–1 |

`VxNavigationBarInfo`：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| width | number | 导航栏宽度 |
| height | number | 导航栏总高度，含状态栏留白和第二行 |
| statusBarHeight | number | 状态栏留白高度 |
| opacity | number | 测量时的背景透明度 |
| windowWidth / windowHeight | number | 窗口宽高 |

## 插槽

| 插槽 | 说明 |
| --- | --- |
| default | 替换标题，适合搜索框或分段控件；窄屏单行省略由内容自己处理 |
| prefix | 替换返回区，放头像或自定义返回按钮 |
| suffix | 右侧动作，建议只放一个；自己带 48 热区，小程序上要为胶囊让出宽度 |
| extra | 标题行下面的第二行，放搜索、筛选或页签 |

## 方法

| 方法 | 说明 |
| --- | --- |
| refresh() | 重新测量高度和宽度；`extra` 异步变高、窗口尺寸变化后调用 |

## 说明

- `fixed` 打开时直接放在页面根节点下，默认占位会把内容推到安全区之外；不要放进 `scroll-view`。
- 页面要设 `navigationStyle: custom`，否则原生导航栏还在，组件排在它下面；状态栏留白取 `--uni-safe-area-inset-top`，Web 上为 0。
- 分割线和阴影只在背景透明度到 0.85 以上时出现，`shadow` 打开后不再画分割线。
- 渐显只改背景层，标题、图标和插槽始终不透明；`change` 只在透明度真的变化时抛。
- 头图压在导航栏下面时同时关掉 `placeholder`，滚动内容才从屏幕顶部开始；头图里的标题和按钮自己补留白，高度从 `ready` 取。
- 小程序右上角胶囊由组件让出，`suffix` 可用宽度变窄；更多动作放进 `extra`。
- `bgColor` / `transparent` 用字面值，亮暗主题和对比度由业务保证。
- 从 ThorUI `tui-navigation-bar` 迁移：`isOpacity` → `fade`，`isImmersive` → `statusBar`，`isFixed` → `fixed`，`splitLine` → `divider`，`backgroundColor` → `bgColor`，`@init` → `@ready`；`change` 参数从对象改成数字。
