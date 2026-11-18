# vx-tips

消息提示是浮层，不占布局。顶部是整条横幅，居中和底部是圆角浮层；`duration` 到点自动收起，也可以常驻后手动关闭。

## 示例

```vue
<vx-tips v-model:show="tipsVisible" text="操作成功" type="success" />
<vx-tips v-model:show="tipsVisible" position="top" type="warning" text="网络连接已断开" />
<vx-tips v-model:show="tipsVisible" position="bottom" icon="check-circle" text="已保存到草稿" />
<vx-tips v-model:show="tipsVisible" text="点一下关闭" :duration="0" closable />
<vx-tips v-model:show="tipsVisible" position="top" type="primary" :opacity="0.6" text="整条半透明" />
```

`ref` 上暴露 `open()` / `close()`，重复触发同一条提示时改 props 再调 `open()`，计时会重新开始，不用叠两个实例。

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| show | boolean | `false` | 显示提示，支持 `v-model:show`；自动关闭会同步回 `false` |
| text | string | `''` | 提示文案；传默认插槽时忽略 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `default` | 语义色 |
| position | `top` \| `center` \| `bottom` | `center` | 顶部横幅、垂直居中、底部浮层 |
| duration | number | `2000` | 自动关闭时间，单位毫秒；`0` 常驻 |
| offset | number | `0` | 贴边微调，单位 px；`top` 往下、`bottom` 往上。顶部已经在导航栏下方，这里只加额外距离 |
| maxWidth | string | `'320px'` | 浮层最大宽度，需带单位；`top` 忽略 |
| icon | `VxIconName` | — | 文案前的图标，取值见 `libs/icons/codepoints.ts` |
| closable | boolean | `false` | 显示关闭图标，点整条关闭并抛 `close` |
| zIndex | number | `1010` | 浮层层级 |
| bgColor | string | `''` | 自定义底色，字面值 |
| bgOpacity | number | `1` | 底色不透明度，0–1；只作用在底色上 |
| color | string | `''` | 自定义文字和图标色，字面值 |
| opacity | number | `1` | 整条提示的不透明度，0–1；底色、文字、图标和阴影一起淡 |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| close | 自动关闭、点关闭或调 `close()` 时触发 | 无 |
| update:show | `v-model:show` 同步，自动关闭时回传 `false` | boolean |

## 插槽

| 插槽 | 说明 |
| --- | --- |
| default | 消息正文，替换 `text`；颜色和字号自己带 |

## 方法

| 方法 | 说明 |
| --- | --- |
| open() | 显示并重新计时；同一条提示重复触发用它 |
| close() | 立刻收起并抛 `close` |

## 说明

- 提示是浮层，挂在页面根节点、和滚动容器平级；放进 `scroll-view` 会被滚动带走或裁掉。
- `top` 铺满整条、直角，贴在导航栏下方（原生导航栏和自绘导航栏都算），Web 和小程序读安全区；`center` / `bottom` 是 `md` 圆角盒子，默认最大宽度 320。
- `type` 是实心底加 `on-*` 前景，`default` 用正文反相底，亮暗自动互换。
- `duration` 到点自动关，`0` 常驻；自动关闭、手动关闭都抛 `close`，父组件改 `show` 不回抛。
- `bottom` 在安全区之外再多留 16；自定义底栏用 `offset` 抬高。
- `bgColor` / `bgOpacity` 只改底色，`color` 改文字和图标；`opacity` 让整条一起淡，与 `bgOpacity` 同时传时相乘。
- 文案超出一行时在 `maxWidth` 内换行，浮层跟着长高；长文案要加 `duration` 或常驻。
