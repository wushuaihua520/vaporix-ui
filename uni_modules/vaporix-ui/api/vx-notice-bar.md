# vx-notice-bar

通告栏。一条公告的展开方式：默认单行省略，`wrap` 换行，`scrollable` 在文字超出视口时横向滚动。默认 `warning` 琥珀浅底，普通公告换 `info`，中性说明换 `default`；支持语义实心、透明、自定义颜色、图标、关闭和两侧插槽。

## 示例

```vue
<vx-notice-bar :text="notice" icon="volume-high" closable @click="openNotice" @close="dismiss" />
<vx-notice-bar :text="notice" wrap />
<vx-notice-bar :text="notice" type="info" variant="solid" shape="rounded" />
<vx-notice-bar :text="longNotice" scrollable :speed="80" icon="volume-high" />
<vx-notice-bar v-model:show="visible" :text="notice" type="danger" icon="alert-triangle" closable />
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | string | `''` | 通告文案；传了默认插槽时以插槽为准，滚动模式只读这一项 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `warning` | 语义色 |
| variant | `soft` \| `solid` \| `plain` | `soft` | 语义浅底、语义实心、透明 |
| size | `sm` \| `md` \| `lg` | `md` | 高度 32 / 40 / 48，文案 13 / 15 / 17，图标 14 / 18 / 22 |
| shape | `rounded` \| `pill` \| `square` | `square` | 外轮廓；默认平角通栏 |
| icon | `VxIconName` | — | 左侧图标；传了 prefix 插槽时以插槽为准 |
| iconColor | string | `''` | 左侧图标和关闭叉颜色；默认跟随文案前景 |
| wrap | boolean | `false` | 允许换行；`scrollable` 打开时忽略 |
| scrollable | boolean | `false` | 文字超出视口时横向滚动；只对 text 生效 |
| speed | number | `100` | 滚动速度，单位 px/s；0 和负数回到 100，其余收在 20–600 |
| activeMode | `backwards` \| `forwards` | `backwards` | 第一轮从右侧入场，或直接从左侧起点开始 |
| closable | boolean | `false` | 显示关闭叉；点击收起并发 close |
| bgColor | string | `''` | 底色，字面值或主题令牌 |
| color | string | `''` | 文案颜色，字面值或主题令牌；不传 iconColor 时图标一起跟随 |
| clickable | boolean | `true` | 整条可点；静态展示传 false |
| show | boolean | `true` | 显隐，支持 `v-model:show` |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| click | 点击整条时触发，`clickable=false` 不抛 | — |
| close | 点关闭叉或调 `close()` 时触发；父级改 `show` 不抛 | — |

## 插槽

| 插槽 | 说明 |
| --- | --- |
| default | 替换 text，用来放自定义静态内容；不参与滚动 |
| prefix | 替换左侧图标，放标签、头像或自定义图形 |
| suffix | 关闭叉前面的右侧内容，放「查看」、标签或刷新 |

## 方法

| 方法 | 说明 |
| --- | --- |
| open() | 显示；已经显示时重新测量滚动宽度 |
| close() | 收起并发 close |
| refresh() | 重新测量文字和视口；字体异步落定、容器宽度变化后调用 |

## 说明

- 只显示一条消息，多条轮播用 `vx-rolling-news`，不要两个组件拼。
- 单行默认省略；`wrap` 后高度由内容撑开；`scrollable` 优先于 `wrap`，固定单行。
- 滚动只读 `text`，文字和视口都要能测；传默认插槽时保持静态。文字放得下时停在原位，不空转。
- 滚动用 `transform` 匀速位移，不依赖关键帧；宽度测量失败重试三次后按静态展示，容器宽度或字体变化后调 `refresh()`。
- `soft` 用浅底加 `*-pressed` 前景，`solid` 用实心底加 `on-*`，`plain` 透明且不收左右内边距。
- `closable` 的关闭叉宽度等于行高，图标比文案小一档；`v-model:show` 管显隐，`close` 只表示组件内收起。
- `prefix` / `suffix` 是独立目标，点它们不触发整条 `click`；`clickable=false` 时不淡也不拦点击。
- 默认留在文档流，不加阴影、不做 fixed；需要吸顶放进 `vx-sticky`。
- 从 ThorUI `tui-notice-bar` 迁移：`content` → `text`（ThorUI 默认多行，这里要加 `wrap`），`backgroundColor` → `bgColor`；字号和高度改用 `size`，文案固定 400；`isFixed` / `top` 改用 `vx-sticky`，`click` 不再带参数。
