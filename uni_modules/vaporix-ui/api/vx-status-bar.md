# vx-status-bar

状态栏。为系统状态栏留高并铺底色，系统时间和信号仍由平台绘制。默认跟随 `--uni-safe-area-inset-top`，也可以用 `height` 覆盖；支持固定占位、透明、滚动渐显、横屏安全区和默认插槽，`ready` 回传实测高度。

## 示例

```vue
<vx-status-bar fixed @ready="onReady" />

<!-- 头图从屏幕顶部铺下来，状态栏只留高度 -->
<vx-status-bar transparent />

<!-- 固定并随滚动渐显 -->
<vx-status-bar fixed fade :scroll-top="scrollTop" :scroll-ratio="0.3" />
```

`ready` 回传 `{ height, statusBarHeight, windowWidth, windowHeight }`，头图里补间距用它。

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| height | number | `0` | 固定高度，单位 px；`0` 跟随系统状态栏，超过 200 按 200 |
| bgColor | string | `''` | 底色，字面值、渐变或主题令牌；不传用 `surface` |
| transparent | boolean | `false` | 背景始终透明，忽略 `fade` / `maxOpacity`；适合头图 |
| fixed | boolean | `false` | 固定在页面顶部 |
| placeholder | boolean | `true` | 固定时在文档流里占同高；头图场景关掉 |
| zIndex | number | `20` | 固定时的浮层层级，和导航栏同档 |
| safeArea | boolean | `true` | 插槽内容让开左右安全区 |
| align | `'start'` \| `'center'` \| `'end'` | `'center'` | 插槽内容的水平对齐 |
| fade | boolean | `false` | 背景透明度跟随 `scrollTop` |
| scrollTop | number | `0` | 滚动距离，绑定 `scroll-view` 的 `@scroll` |
| scrollRatio | number | `0.3` | 滚过条宽 × 该值时达到 `maxOpacity` |
| maxOpacity | number | `1` | 渐显上限 0–1 |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| ready | 挂载后抛一次；调 `refresh()` 或改 `height` 后重测再抛 | `VxStatusBarInfo` |

`VxStatusBarInfo`：`height` 实际高度（含 `height` 覆盖）、`statusBarHeight` 系统上报值（Web 为 0）、`windowWidth`、`windowHeight`，都是 number。

## 插槽

| 插槽 | 说明 |
| --- | --- |
| 默认插槽 | 自定义顶带。App 上会被系统状态栏盖住，只用于 Web 和隐藏系统状态栏的页面 |

## 方法

| 方法 | 说明 |
| --- | --- |
| refresh() | 重新读窗口信息、测量并再抛 `ready`；旋转、分屏和异步布局后调用 |

## 说明

- 默认高度取 `--uni-safe-area-inset-top`：App 为状态栏和刘海高度，Web 为 0；`height` 是整条高度，不和系统高度相加。
- 默认底色 `surface`，页面根节点要加 `vx-theme-light` 或 `vx-theme-dark`；`bgColor` 收颜色、渐变和主题令牌。
- 系统时间和信号由平台绘制，前景色在 `pages.json` 的 `navigationBarTextStyle` 里设，组件不改这一层。
- `fixed` 默认补占位，`:placeholder="false"` 让条压在内容上，首屏用 `ready` 的高度自己补间距。
- `transparent` 只去底色，高度和安全区照旧；打开时 `fade` 和 `maxOpacity` 都不生效。
- `fade` 按 `scrollTop / (条宽 × scrollRatio)` 算透明度，背景单独一层，插槽内容不跟着淡。
- 同一屏只放一只状态栏：导航栏页面用 `vx-navigation-bar` 的 `statusBar`，不要再叠；底部安全区归 tabBar 和弹层。
- 挂在页面根节点，不放进 `scroll-view` 或带 `transform` 的容器；旋转、分屏后调 `refresh()`。
- 不加圆角、描边、阴影和动画，也没有点击；Web 端不进 Tab 顺序。
- 从 ThorUI `tui-status-bar` 迁移：`background` → `bgColor`（默认从透明改为 `surface`），`isFixed` → `fixed`，`zIndex` 从 998 收到 20，`init` → `ready`；新增 `height`、`transparent`、`placeholder`、`fade` 和 `refresh()`。
