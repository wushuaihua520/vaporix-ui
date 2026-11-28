# vx-bubble-popup

贴着触发元素的轻量浮层：默认是菜单，也能做行内聊天气泡。`show` 控制显隐，`items` 是菜单，`content` 是单段文案，`extra` 放自定义面板。打开时量一次触发区和面板，气泡用 `position: fixed` 落位；一侧放不下、对面放得下时自动翻转，贴到屏幕边时在气泡内收口箭头。

## 示例

```vue
<vx-bubble-popup v-model:show="menuVisible" placement="bottom" align="end" :items="items"
	@select="onSelect" @close="onClose">
	<vx-button text="更多" @click="menuVisible = !menuVisible" />
</vx-bubble-popup>

<vx-bubble-popup v-model:show="menuVisible" placement="top" :items="items" divider mask>
	<vx-button type="primary" text="打开菜单" @click="menuVisible = !menuVisible" />
</vx-bubble-popup>

<!-- 行内聊天气泡：不渲染触发区，默认插槽或 content 是内容 -->
<vx-bubble-popup inline placement="right" variant="solid" type="warning" content="各位下午好">
	<template #prefix>
		<view class="chat-avatar">M</view>
	</template>
</vx-bubble-popup>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| show | boolean | `false` | 显隐，支持 `v-model:show`；点外部、滚动、Esc 回写 `false` |
| inline | boolean | `false` | 行内聊天气泡；不渲染触发区，`show` 和方法不生效 |
| placement | `top` \| `bottom` \| `left` \| `right` | `bottom` | 气泡相对触发区的方向；inline 下决定箭头贴哪条边 |
| align | `start` \| `center` \| `end` | `start` | 交叉轴对齐；inline 下把整行推到左、中、右 |
| variant | `surface` \| `solid` | `surface` | 浅浮层面板或语义实心气泡 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `primary` | `solid` 的语义色；`surface` 不用 |
| offset | number | `8` | 气泡与触发区的间距，单位 px |
| arrow | boolean | `true` | 显示箭头 |
| arrowOffset | number | `0` | 箭头沿气泡边缘的微调，单位 px；正值向右或向下 |
| width | string | `''` | 固定宽度，需带单位，如 `132px` |
| maxWidth | string | `''` | 最大宽度，需带单位；不传时菜单 280、聊天 260；App 只接受 px |
| items | `Array<VxBubblePopupItem>` | `[]` | 菜单项；非空时不再渲染 `content` 和默认插槽 |
| content | string | `''` | 单段文案，用于提示或聊天气泡 |
| divider | boolean | `false` | 菜单项之间画 1px 分割线 |
| closeOnSelect | boolean | `true` | 点菜单项后收起；关掉后保持打开 |
| mask | boolean | `false` | 铺遮罩压暗页面，只压页面不压气泡 |
| outsideClosable | boolean | `true` | 点遮罩或外部收起并抛 `close` |
| maskColor | string | `''` | 自定义遮罩色，字面值 |
| zIndex | number | `1000` | 浮层层级 |
| liquidGlass | boolean | — | 液态玻璃面板：surface 面板换磨砂玻璃面（发丝描边加分层浮起阴影，彩底从面板下透出）。传 `true` 强制玻璃；不传或 `false` 跟随全局控件风格。仅 `variant="surface"` 生效；玻璃态隐藏箭头与接缝 |

`items` 每项：

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | 动作文案，建议 2–6 个字，单行省略 |
| value | string | 否 | 右侧短值，如快捷键、数量或状态 |
| icon | `VxIconName` | 否 | 文案前的图标，取值见 `libs/icons/codepoints.ts` |
| type | `default` \| `primary` \| `danger` | 否 | 语义色，只在 `surface` 下生效 |
| disabled | boolean | 否 | 禁用，不抛 `select` |
| selected | boolean | 否 | 选中，显示勾和主色；选中值由业务维护 |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| select | 点击可用菜单项时触发；默认先收起 | `index: number`、`item: VxBubblePopupItem` |
| close | 点外部、滚动、Esc，或页面调 `cancel()` 收起时触发；`close()` 不触发 | — |
| update:show | `v-model:show` 同步，收起时回传 `false` | boolean |

## 插槽

| 插槽 | 说明 |
| --- | --- |
| default | popover 下是触发区；inline 下是气泡内容，替换 `content` |
| prefix | inline 下气泡左侧内容，放头像；popover 下不渲染 |
| suffix | inline 下气泡右侧内容，放头像；popover 下不渲染 |
| extra | 自定义面板内容，排在 `items` / `content` 之后；内容自己带颜色和字号 |

## 方法

| 方法 | 说明 |
| --- | --- |
| open() | 打开气泡；inline 下无效 |
| close() | 立刻收起，不抛 `close`；inline 下无效 |
| cancel() | 收起并抛 `close`，给页面 `onBackPress` 用；未打开或 inline 下直接返回 |
| toggle() | 按当前状态切换；inline 下无效 |
| refresh() | 重新测量触发区和面板；异步内容落定后调用 |

## 说明

- 默认插槽只放触发区，组件不自动绑触发区点击；`show` 由页面控制，重复打开不会叠第二个面板。
- 气泡用 `position: fixed` 落到页面层，卡片和 `scroll-view` 裁不到它；祖先带 `transform` 时坐标原点会变，要避开。
- 一侧放不下自动翻到对面，两侧都放不下时夹在屏幕内离边 8，箭头跟着触发区中心收口。
- `surface` 用底色、1px 描边、`md` 圆角和阴影，尾巴用旋转方块加描边；`solid` 用语义实心底配 `on-*`；`maxWidth` 在 App 上只接受 px。
- `liquidGlass` 接全局控件风格（`libs/global-style`，应用调 `vxSetStyle('liquid-glass')` 后默认玻璃化）：传 `true` 强制玻璃（全局关闭时也生效），不传或 `false` 跟随全局风格；仅 `variant="surface"` 生效，solid 语义实心底不玻璃化。玻璃面换发丝描边和分层浮起阴影（inline 沿用无阴影）；玻璃态隐藏箭头与接缝，气泡成纯圆角玻璃矩形，指向性由落位补偿。磨砂分平台：iOS 用 `glass-effect-view` 出系统液态玻璃（iOS 26+；15~25 降级为系统毛玻璃），材质跟随系统外观；Android / 鸿蒙蒸汽与 Web 用 `backdrop-filter: blur`；小程序没有模糊，玻璃底不透明度给足。遮罩保持实色，`maskColor` 照常生效。
- 菜单项 44 高，图标 18、文案 15 / 22 / 500、右侧短值 13 / 20；面板四周留 4。
- 换 `items` 数组或改数量会自动重测；原地改文案或换 `extra` 内容后调 `refresh()`。
- 遮罩默认关闭但点击层始终接住外部点击；`outsideClosable=false` 时保留触发区、菜单项或 `close()` 作为出口。
- 页面滚动、Web 上的 Esc 和点外部都抛 `close`；`close()` 只收起不抛事件。
- 层级 1000，和操作菜单、抽屉同档；Web 上量完位置淡入并放大，5.26 的 App 直接出现。
- 从 ThorUI `tui-bubble-popup` 迁移：默认插槽从内容改成触发区，菜单用 `items`、单段内容用 `content`、自定义面板用 `extra`；`direction` → `placement`（表示气泡在锚点哪一侧）；`maskBgColor` → `maskColor`，行内消息用 `inline`。
