# vx-popup

弹出层。遮罩铺满页面，面板按 `placement` 从一条边滑出或悬在中间；只圆朝向页面的那一侧，进出场只改位移和透明度。内容由业务给，组件不带标题栏、动作列表和滚动容器。

## 示例

```vue
<vx-popup v-model:show="bottomVisible" closable>
	<view class="popup-panel">筛选</view>
</vx-popup>

<vx-popup v-model:show="menuVisible" placement="left" width="86%" closable>
	<vx-list-view title="全部菜单">...</vx-list-view>
</vx-popup>

<vx-popup v-model:show="confirmVisible" placement="center" :mask-closable="false">
	<vx-button block type="danger" text="删除" @click="onDelete" />
</vx-popup>
```

`ref` 上暴露 `open()` / `close()` / `cancel()` / `toggle()`；返回键用 `cancel()` 收起并抛 `close`，再返回 `true` 拦住页面返回。

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| show | boolean | `false` | 显示弹出层，支持 `v-model:show`；点可关闭的遮罩或关闭叉回写 `false` |
| placement | `top` \| `bottom` \| `left` \| `right` \| `center` | `bottom` | 弹出方向 |
| width | string | `''` | 左右贴边和居中的宽度，需带单位，如 `320px`、`86%`；不传时左右用 `--vx-popup-width`，居中按内容并收在 `--vx-popup-max-width` 内 |
| height | string | `''` | 上下贴边的高度，需带单位，如 `320px`、`60%`；不传时按内容高度排 |
| maxWidth | string | `''` | 上下贴边时面板最大宽，需带单位，如 `480px`；不传时仍是 100% 宽。左右和居中不读 |
| round | `none` \| `sm` \| `md` \| `lg` | `lg` | 圆角档位；只圆朝向页面的那一侧，贴边那条边保持直角，居中四角全圆 |
| closable | boolean | `false` | 内容上方显示一行关闭叉，点击收起并抛 `close` |
| maskClosable | boolean | `true` | 点击遮罩收起并抛 `close`；关掉后点遮罩只抛 `click-mask` |
| maskColor | string | `''` | 自定义遮罩色，字面值 |
| liquidGlass | boolean | — | 液态玻璃 sheet 面：传 `true` 强制玻璃，不传或 `false` 跟随全局控件风格；磨砂分平台（iOS 用系统材质，Android / 鸿蒙 / Web 用 backdrop-filter，小程序半透明实底） |
| safeArea | boolean | `true` | 上下贴边时由面板内边距让开顶部或底部安全区；左右和居中的侧边安全区始终让开 |
| zIndex | number | `1000` | 浮层层级 |
| duration | number | `220` | 进出场时长，单位毫秒；`0` 直接切换，Web 上跟随系统的减少动效 |
| lockScroll | boolean | `true` | 打开时锁住页面滚动；只在 Web 生效，见「平台支持」 |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| open | 面板开始入场时触发，`v-model:show` 改 `true` 和调 `open()` 都算；首次渲染就显示时不触发 | 无 |
| close | 用户点可关闭的遮罩、关闭叉，或页面调 `cancel()` 时触发；默认先收起 | 无 |
| click-mask | 点遮罩总是触发；`maskClosable=false` 时只触发它，不关闭 | 无 |
| update:show | `v-model:show` 同步，收起时回传 `false` | boolean |

## 插槽

| 插槽 | 说明 |
| --- | --- |
| default | 面板内容；组件不内置内边距、标题栏、动作区和滚动容器 |

## 方法

| 方法 | 说明 |
| --- | --- |
| open() | 打开弹出层 |
| close() | 立刻收起，不抛 `close` |
| cancel() | 收起并抛 `close`，给页面 `onBackPress` 用 |
| toggle() | 打开或收起 |

## 说明

- 上下贴边默认占满宽度，高度由内容或 `height` 决定；左右贴边占满高度、宽 280，`width` 必须带单位；居中按内容宽度排、最宽 480。
- 贴屏的一侧不圆角，朝向页面的角取 `round`；面板用 `surface` 底、不加阴影，居中面板另加 1px 描边。
- `liquidGlass` 接全局控件风格（`libs/global-style`，应用调 `vxSetStyle('liquid-glass')` 后默认玻璃化）：传 `true` 强制玻璃（全局关闭时也生效），不传或 `false` 跟随全局风格。玻璃面铺满整张面板（含底部安全区），带发丝描边和分层浮起阴影；遮罩保持实色不玻璃化，`maskColor` 照常生效。磨砂分平台：iOS 用 `glass-effect-view` 出系统液态玻璃（iOS 26+；15~25 降级为系统毛玻璃），材质跟随系统外观；Android / 鸿蒙蒸汽与 Web 用 `backdrop-filter: blur`；小程序没有模糊，玻璃底不透明度给足。
- 面板不预留内容内边距，内容自己留 16；安全区由面板内边距让开。
- 关闭叉单占一行，高沿用列表行、图标 18；`maskClosable=false` 时点遮罩只抛 `click-mask`。
- `close()` 只收起；`cancel()` 收起并抛 `close`，给 `onBackPress` 用。
- 只过渡 `transform` 和 `opacity`，`duration` 默认 220，`0` 直接切换。
- 第一次打开后根节点常驻，关闭只切 `display: none`：真机上反复用 `v-if` 创建 `scroll-view` 会连遮罩和面板一起不画。要完全释放时用 `v-if` 包住整个弹出层。
- 内容超过一屏先给 `height`，再在内容里放 `scroll-view`；组件不内置滚动容器。
- 挂在页面根节点，不要放进 `scroll-view`、卡片或 `fixed` 容器；同一屏只开一个，嵌套时自己传 `zIndex`。
- 层级默认 1000，和抽屉、操作菜单同档；不做动作列表、标题栏和跟手拖动。

## 平台支持

| 平台 | 滚动锁 | 进出场 | 说明 |
| --- | --- | --- | --- |
| Web | 打开时给页面根节点加 `.vx-scroll-lock`（`overflow: hidden`），收起后移除 | `transform` 和 `opacity` 过渡 | 系统打开「减少动效」时按 `duration=0` 处理 |
| App | 不锁页面滚动 | 同一段过渡；不支持过渡时直接落位 | 需要整页固定时，页面用 `scroll-view` 包内容，再用 `v-if` 控制页面结构 |
| 微信小程序 | 只拦遮罩上的手势 | 同一段过渡 | 页面根节点拿不到；整页锁定要页面自己用 `page-meta` 或滚动容器处理 |
