# vx-toast

轻提示。全屏浮层、盒子居中，图标加一句短文案，默认 2000ms 自动收起。提示期间整层接住点击，点浮层可以提前关闭。

## 示例

```vue
<vx-toast v-model:show="toastVisible" text="操作成功" type="success" />
<vx-toast v-model:show="toastVisible" text="提示信息，无图标" type="info" :show-icon="false" />
<vx-toast v-model:show="toastVisible" image="https://cdn.example.com/icon.png" text="已加入收藏" />
<vx-toast v-model:show="toastVisible" :duration="0" text="常驻提示，点一下关闭" />
```

`ref` 上暴露 `open()` / `close()`；重复触发同一条时先改 props 再调 `open()`。

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| show | boolean | `false` | 显示提示，支持 `v-model:show`；自动关闭会同步回 `false` |
| text | string | `''` | 提示文案；超过最大宽度时换行 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `default` | 语义类型，只决定默认图标 |
| duration | number | `2000` | 自动关闭时间，单位毫秒；`0` 常驻 |
| maxWidth | string | `'240px'` | 盒子最大宽度，需带单位 |
| icon | `VxIconName` | — | 自定义字体图标；不传时跟 `type` |
| image | string | `''` | 自定义图标图片地址，优先于 `icon` |
| variant | `regular` \| `fill` | `regular` | 字体图标字重；`image` 不受影响 |
| showIcon | boolean | `true` | 显示图标；关掉后是纯文字提示 |
| zIndex | number | `1100` | 浮层层级 |
| bgColor | string | `''` | 自定义底色，字面值 |
| bgOpacity | number | `0.9` | 底色不透明度，0–1；只作用在底色上 |
| color | string | `''` | 自定义文字和字体图标色，字面值 |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| close | 自动关闭、点浮层或调 `close()` 时触发 | 无 |
| update:show | `v-model:show` 同步，自动关闭时回传 `false` | boolean |

## 方法

| 方法 | 说明 |
| --- | --- |
| open() | 显示并重新计时；重复触发同一条时用它 |
| close() | 立刻收起并抛 `close` |

## 说明

- 轻提示挂在页面根节点，放进 `scroll-view` 会被滚动带走或裁掉。
- 盒子最小 120、最大 240，内边距 24，图标 40，文案 15 / 22。
- `type` 只决定默认图标，盒子固定用正文反相底，亮暗自动互换；默认 0.9 不透明度。
- `duration` 到点自动关，`0` 常驻；自动关闭、点浮层和 `close()` 都抛 `close`。
- `image` 优先于 `icon`，固定 40 × 40 等比展示；extend 图标要先引入 `icons-extend.css`。
- `bgColor` / `bgOpacity` 只改底色，`color` 改文案和字体图标，不影响图片。
- 层级默认 1100，同一屏只放一条。
