# vx-tag

标签用于状态、分类和筛选结果。实心、浅底、空心三种形态。高度、字号和内边距用 `--vx-tag-*`，不跟按钮共用。

## 示例

```vue
<vx-tag type="primary" text="主色" />
<vx-tag type="success" variant="soft" text="已完成" />
<vx-tag type="danger" variant="plain" text="已过期" />
<vx-tag type="primary" size="lg" shape="pill" text="胶囊" />
<vx-tag type="default" closable text="可关闭" @close="removeTag" />
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | string | `''` | 标签主文案；只放图标时可留空 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `default` | 语义色 |
| variant | `solid` \| `soft` \| `plain` | `solid` | 实心、浅底、空心 |
| size | `sm` \| `md` \| `lg` | `md` | 尺寸，对应 `--vx-tag-height-*` |
| shape | `rounded` \| `pill` \| `half` \| `square` | `rounded` | 小圆角、胶囊、半圆角（左圆右直）、平角 |
| color | string | `''` | 自定义文字色，同时作用于关闭图标 |
| bgColor | string | `''` | 自定义背景色，只覆盖底色 |
| borderColor | string | `''` | 自定义描边色，只覆盖描边 |
| closable | boolean | `false` | 显示关闭图标，点击抛 `close` |

## 事件

| 事件 | 说明 |
| --- | --- |
| close | 点击关闭图标时触发，无参数 |

## 插槽

| 插槽 | 说明 |
| --- | --- |
| prefix | 文案前的前缀内容，可放图标或圆点；颜色自己带 |
| default | 文案右侧的补充内容，可放计数或后缀图标；颜色自己带 |

## 说明

- 高度 `sm` 20 / `md` 24 / `lg` 28，左右内边距 6 / 8 / 10，圆角 6，描边 1；不借紧凑高度和控件字号。
- `type` 表达状态；纯分类用 `default` 或 `primary`，不要用警告、失败色区分类别。
- `color` / `bgColor` / `borderColor` 各只覆盖一处，没传的继续跟 `type`，且都是字面值、不跟主题。
- `shape="half"` 左边胶囊、右边平角，贴边排列时用。
- `closable` 只表示可移除，组件不删数据，在 `close` 里改业务数组。
- 标签是短文案，不换行；插槽内容不继承 `color`，颜色自己带。
