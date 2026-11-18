# vx-steps

步骤条。用 `items` 按顺序画节点、连线和文字；`active` 是当前步骤，当前用勾（带 icon 时用图标），之前的步骤保留圆点或序号。支持横向 / 纵向、圆点 / 序号 / 图标节点、语义色、虚线和可点击步骤。

## 示例

```vue
<vx-steps :items="steps" :active="1" />
<vx-steps :items="steps" :active="1" variant="number" />
<vx-steps direction="vertical" :items="steps" :active="1" type="success" />
<vx-steps :items="steps" :active="1" line-style="dashed" />
<vx-steps :items="steps" :active="step" clickable @click="step = $event" />
```

```ts
const steps = [
	{ title: '提交订单', time: '10-25 09:12' },
	{ title: '支付订单', time: '10-25 09:20' },
	{ title: '商家发货', time: '10-26 14:30' },
	{ title: '确认收货', time: '10-28 18:00' }
]
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | Array&lt;VxStepItem&gt; | `[]` | 步骤，按顺序排列；空数组不渲染 |
| active | number | `0` | 当前步骤索引，从 0 开始；负数按未开始处理，其余非整数四舍五入，超过末项收到最后一步 |
| direction | `horizontal` \| `vertical` | `horizontal` | 排列方向 |
| variant | `dot` \| `number` | `dot` | 节点外观；带 icon 的记录不受影响 |
| size | `sm` \| `md` \| `lg` | `md` | 节点、文字和间距档位 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `primary` | 当前进度的语义色 |
| lineStyle | `solid` \| `dashed` | `solid` | 连线样式 |
| clickable | boolean | `false` | 整步可点，点击抛 click |

`items` 的每一项：

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | string | `''` | 步骤名，横向时建议 2–4 个字 |
| description | string | `''` | 补充说明，可以换行 |
| time | string | `''` | 时间或日期，展示文本，组件不解析格式 |
| icon | VxIconName | — | 自定义节点图标；传了之后不再画圆点或序号 |
| iconVariant | `regular` \| `fill` | `regular` | 图标字重 |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| click | 打开 clickable 后点击整步触发 | 索引 number |

## 说明

- 组件不维护内部状态，也没有 `v-model`；负数按未开始，超过末项收到最后一步。
- 当前步骤用勾（带 `icon` 用图标），之前的步骤保留圆点或序号；之前和之后的连线颜色不同。
- `variant="dot"` 用 6 / 8 / 10 的小圆点，`variant="number"` 从 1 起显示序号，当前步骤仍用勾。
- 节点 20 / 24 / 28，标题 13 / 15 / 17 加 600 字重，说明 `sm` 13 / 20、`md` / `lg` 15 / 22，时间固定 13 / 20。
- `type` 同时决定当前节点、当前标题和已完成连线；待处理标题转次要灰，说明和时间始终是次要色。
- 带 `icon` 的记录按状态换底色：已完成浅底、当前实心底、待处理描边；扩展图标要先引入 `icons-extend.css`。
- `clickable` 默认关闭，打开后整步可点并抛索引；横向每步等宽，适合 2–5 个短步骤，文案长改纵向。
- 没有插槽、禁用态和加载态；只承载进度、标题、说明和时间，不放表单和主操作。
- 从 ThorUI `tui-steps` 迁移：`row` / `column` 改成 `horizontal` / `vertical`，`type` 的 1 / 2 改成 `variant`，`activeSteps` 改成 `active`，`activeColor` 改用 `type`。
