# vx-drawer

抽屉。从屏幕的一条边滑出，左右默认宽 280、上下默认高 45%；遮罩铺满页面，点遮罩或关闭叉收起。正文、固定底栏和头部都可以按需组合，长内容在正文里滚动。

## 示例

```vue
<vx-drawer v-model:show="drawerVisible">
	<view class="drawer-basic">
		<vx-button block type="danger" shape="pill" text="关闭抽屉" @click="drawerVisible = false" />
	</view>
</vx-drawer>

<vx-drawer v-model:show="filterVisible" title="筛选" closable :body-padded="false">
	<vx-tag v-for="item in filters" :key="item.text" :text="item.text" />
	<template #suffix>
		<vx-button block type="primary" text="查看 128 件商品" />
	</template>
</vx-drawer>

<vx-drawer v-model:show="shareVisible" position="bottom" height="42%">
	<view class="drawer-share">分享面板</view>
</vx-drawer>

<vx-drawer v-model:show="navVisible" position="left" width="86%" title="全部菜单">
	<vx-list-view title="订单" variant="plain">...</vx-list-view>
</vx-drawer>
```

`ref` 上暴露 `open()` / `close()` / `cancel()`；返回键用 `cancel()` 收起并抛 `close`。

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| show | boolean | `false` | 显示抽屉，支持 `v-model:show`；点遮罩或关闭叉回写 `false` |
| position | `left` \| `right` \| `top` \| `bottom` | `right` | 滑出方向 |
| width | string | `''` | 左右抽屉宽度，需带单位，如 `320px`、`86%`；不传用 `--vx-drawer-width`，上下抽屉忽略 |
| height | string | `''` | 上下抽屉高度，需带单位，如 `320px`、`42%`；不传用 `--vx-drawer-height`，左右抽屉忽略 |
| title | string | `''` | 头部标题；和 `closable`、`prefix`、`extra` 都没有时不渲染头部 |
| closable | boolean | `false` | 头部右侧显示关闭叉，点击收起并抛 `close` |
| bodyPadded | boolean | `true` | 正文保留四边内边距 16；列表、图片贴边时传 `false` |
| maskClosable | boolean | `true` | 点击遮罩收起并抛 `close` |
| maskColor | string | `''` | 自定义遮罩色，字面值 |
| bgColor | string | `''` | 自定义面板底色，字面值 |
| zIndex | number | `1000` | 浮层层级 |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| close | 用户点可关闭的遮罩、关闭叉，或页面调 `cancel()` 时触发；默认先收起 | 无 |
| update:show | `v-model:show` 同步，收起时回传 `false` | boolean |

## 插槽

| 插槽 | 说明 |
| --- | --- |
| default | 正文，超过面板高度时在内部滚动 |
| prefix | 头部左侧，标题前的图标或标识；颜色和尺寸自己带 |
| extra | 头部右侧，标题后的标签或状态；关闭叉仍在更右侧 |
| suffix | 固定底栏，放 1–2 个动作；不参与正文滚动 |

## 方法

| 方法 | 说明 |
| --- | --- |
| open() | 打开抽屉 |
| close() | 立刻收起，不抛 `close` |
| cancel() | 收起并抛 `close`，给页面 `onBackPress` 用 |

## 说明

- 左右抽屉宽 280，上下抽屉高 45%，面板最大不超出整屏；`width` / `height` 必须带单位，App 上不要写 `calc`。
- 贴屏的一侧不圆角，朝向页面的两角用 12；面板用 `surface` 底加阴影、不加描边。
- 头部高 52，标题 17 / 24 / 600 单行省略；关闭叉热区 44，点击和遮罩走同一个 `close`。
- 正文是唯一的滚动区，头部和底栏固定；默认内边距 16，`bodyPadded=false` 让列表和图片贴边。
- `suffix` 上边一条分割线，放 1–2 个动作，不做主导航和长表单。
- `maskClosable=false` 时点遮罩不关闭，要保留关闭叉；`close()` 只收起，`cancel()` 收起并抛 `close`。
- 四个方向的安全区都由面板内边距承担。
- 挂在页面根节点，同一屏只开一个；层级 1000，低于消息提示、弹框和轻提示。
- 第一次打开后根节点常驻，关闭只切 `display: none`；要完全释放时用 `v-if` 包住整个抽屉。
- 从 ThorUI `tui-drawer` 迁移：`visible` → `v-model:show`，`mode` → `position`，`backgroundColor` → `bgColor`；`mask` 不再提供，抽屉始终带遮罩，常驻侧栏用页面布局。
