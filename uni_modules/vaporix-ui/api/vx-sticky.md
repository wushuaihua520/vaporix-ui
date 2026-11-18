# vx-sticky

吸顶容器。用 `scrollTop` 驱动：未吸顶时留在文档流里，吸顶后改为 `position: fixed` 并补一个等高占位。`suffix` 插槽决定吸到哪里结束。

## 示例

```vue
<view class="page vx-theme-light">
	<scroll-view class="page-scroll" direction="vertical" @scroll="onScroll">
		<vx-sticky :scroll-top="scrollTop" @change="onStickyChange">
			<view class="sticky-bar">
				<text class="sticky-bar__title">商品详情</text>
			</view>
			<template #suffix>
				<vx-list-cell title="订单 20261024001" value="待付款" :clickable="false" />
				<vx-list-cell title="订单 20261024002" value="待付款" :clickable="false" :divider="false" />
			</template>
		</vx-sticky>
	</scroll-view>
</view>
```

```ts
const scrollTop = ref(0)

const onScroll = (event: UniScrollEvent) => {
	scrollTop.value = event.detail.scrollTop
}
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| scrollTop | number | `0` | 滚动容器的滚动距离，绑定 scroll-view 的 `@scroll`；不绑定就不会吸顶 |
| offsetTop | number | `0` | 吸顶时距顶部安全区的额外距离，单位 px；负数按 0 处理 |
| zIndex | number | `10` | 吸顶时的浮层层级 |
| shadow | boolean | `false` | 吸顶时用 `--vx-shadow-md` 代替底部分割线 |
| bgColor | string | `''` | 吸顶条底色，字面值；不传时未吸顶透明、吸顶后 `surface` |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| change | 吸顶状态切换时触发 | `boolean`，`true` 表示已吸顶 |

## 插槽

| 插槽 | 说明 |
| --- | --- |
| default | 吸顶条内容 |
| suffix | 吸顶条后面的内容；传了就只在「吸顶条 + 这段内容」范围内吸顶 |

## 方法

| 方法 | 说明 |
| --- | --- |
| refresh() | 重新测量位置和尺寸；内容变高或窗口尺寸变化后由业务调用，占位高度才会更新 |

```vue
<vx-sticky ref="stickyRef" :scroll-top="scrollTop">
	<view class="sticky-bar">
		<text class="sticky-bar__title">商品详情</text>
	</view>
</vx-sticky>
```

内容变高（折叠、图片加载完）或窗口尺寸变化后调 `refresh()`，占位高度才会更新。

## 说明

- App 不支持 `position: sticky`，组件用 `scrollTop` 在文档流和 `fixed` 之间切换，吸顶后补等高占位，各端行为一致。
- 吸顶条贴住内容区顶部：Web 自动避开导航栏，`offsetTop` 在安全区之外再让出；这是页面级吸顶，不做局部滚动区。
- 未吸顶时条透明、不加内边距，外观由插槽内容决定；吸顶后才铺 `surface` 底和 1px 分割线，`shadow` 换成阴影，`bgColor` 未吸顶也生效。
- `suffix` 里的内容参与文档流，滚到末尾时用容器底边把吸顶条顶出去；不传就一直吸到页面末尾。
- `change` 只在状态变化时触发，挂载时已经吸顶也会触发一次 `true`。
- 挂载时测量，量不到时第一次滚动补测一轮；量成功后滚动不再改吸顶线。
- `offsetTop` 变化会自动重测：自定义导航栏 `ready` 后把高度写进去，吸顶线跟着下移。
- 吸顶条只放标题、页签和状态；输入框和主操作放在 `suffix` 里，否则吸顶后的位置变化会打断输入。
- 不要放进 `fixed` 浮层、带 `transform` 的容器或原生 `list-view` 的 sticky 结构；层级默认 10。
- 从 ThorUI `tui-sticky` 迁移：`stickyTop` → `offsetTop`，`container` + `content` → `suffix`，`recalc` → `refresh()`，`sticky` 事件 → `change`。
