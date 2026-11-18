# vx-safe-area

安全区占位。顶部让开状态栏与刘海，底部让开手势条；不传 `height` 时读 `--uni-safe-area-inset-top` / `--uni-safe-area-inset-bottom`，传了就直接写高度。只做纵向，左右安全区由页面自己处理。

## 示例

```vue
<vx-safe-area />
<vx-safe-area edge="top" bg-color="var(--vx-color-primary-soft)" />
<vx-safe-area edge="bottom" fixed height="44px" bg-color="var(--vx-color-surface)" />
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| edge | `top` \| `bottom` | `bottom` | 贴哪一边；不认识的边按 `bottom` 处理 |
| height | string | `''` | 带单位；传了就不再读系统安全区 |
| bgColor | string | `''` | 字面值，默认透明 |
| fixed | boolean | `false` | 固定到窗口对应边，层级 1，与固定页脚同层 |

## 说明

- 不传 `height` 时高度由 `padding` 读 `--uni-safe-area-inset-top` / `-bottom`：App 取状态栏和手势条，Web 取页面相对窗口的留白（有原生导航栏或 tabBar 时等于其高度），已经让开的页面不要再叠。
- 传了 `height` 就写固定高度，不再读系统值，两者不叠加。
- `fixed` 贴住对应边，层级 1；不占文档流，页面底部要自己留高度。放在页面根节点，不要放进 `scroll-view`。
- 不加分割线、毛玻璃和渐变，也不放内容；`bgColor` 是字面值。
- 只管纵向，左右安全区交给页面或导航栏组件；状态栏页面用 `vx-navigation-bar` 的 `statusBar`，不要在这里再叠一条。

## 平台支持

| 平台 | 系统安全区 | fixed |
| --- | --- | --- |
| Web | 自定义导航且无 tabBar 时 0；有原生导航栏 / tabBar 时等于对应高度 | 固定定位；不拦点击（`pointer-events: none`） |
| App（Android / iOS / 鸿蒙） | 状态栏 / 刘海和手势条高度 | 固定定位，层级 1 |
| 微信小程序 | 由宿主注入；变量为 0 时这条不占高度 | 固定定位，层级 1 |
