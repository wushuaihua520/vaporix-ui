# vx-button

按钮。一屏只有一个实心主操作；视觉层级用 `variant`，形状用 `shape`。`plain`、`round` 是旧写法，保留兼容，新代码不要与 `variant` / `shape` 混用。

## 示例

```vue
<vx-button text="页面主操作" type="primary" />
<vx-button text="页面辅助操作" type="danger" variant="plain" />
<vx-button text="查看说明" type="info" variant="soft" />
<vx-button text="胶囊按钮" type="primary" shape="pill" />
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `default` | 语义类型 |
| variant | `solid` \| `plain` \| `soft` \| `link` | `solid` | 实心、镂空、浅底、纯文字 |
| shape | `rounded` \| `pill` \| `square` | `rounded` | 默认圆角、胶囊、平角 |
| size | `sm` \| `md` \| `lg` | `md` | 尺寸，对应 `--vx-control-height-*` |
| text | string | `''` | 按钮文案，也可用默认插槽 |
| plain | boolean | `false` | 兼容旧写法，等价于 `variant="plain"` |
| round | boolean | `false` | 兼容旧写法，等价于 `shape="pill"` |
| shadow | boolean | `false` | 显式强调阴影，只作用于实心与浅底按钮 |
| block | boolean | `false` | 占满整行；优先于 `width` |
| width | string | `''` | 自定义宽度，需带单位，如 `160px`、`100%` |
| height | string | `''` | 自定义高度，需带单位，如 `64px` |
| disabled | boolean | `false` | 禁用 |
| loading | boolean | `false` | 加载中，不触发 click，不渲染默认插槽 |

## 事件

| 事件 | 说明 |
| --- | --- |
| click | 可点击时触发，不带参数 |

## 说明

- 一屏一个实心 `primary`。
- `info` 只表示提示。
- `plain` / `soft` 给次要操作，可以多个。
- `link` 只留文字。导航用链接。
- `shadow` 只加在实心和浅底上。镂空、纯文字、禁用没有。
- `width` / `height` 只给特殊布局。常规页面用 `sm | md | lg`。
