# vx-rate

星级评分。`v-model` 绑定分值，支持半星、横向滑动手势、三档星形、空心、分值文字和只读 / 禁用。

## 示例

```vue
<vx-rate v-model="score" />
<vx-rate v-model="score" show-text />
<vx-rate v-model="score" allow-half show-text />
<vx-rate v-model="score" :count="7" />
<vx-rate v-model="score" size="lg" show-text />
<vx-rate v-model="score" type="primary" />
<vx-rate v-model="score" active-color="#e5484d" void-color="#f4c7c9" />
<vx-rate v-model="score" hollow />
<vx-rate :model-value="3.45" readonly />
<vx-rate :model-value="4.5" disabled show-text />
<vx-rate :model-value="4.2" text="很好" readonly />
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | number | `0` | 当前分值，支持 `v-model`；0 表示未评分，可带小数用于只读展示 |
| count | number | `5` | 星星总数，收敛到 1–10 |
| size | `sm` \| `md` \| `lg` | `md` | 星形 20 / 24 / 28 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `warning` | 选中星形的语义色 |
| allowHalf | boolean | `false` | 允许半星，点按和滑动按 0.5 递增 |
| hollow | boolean | `false` | 未选中的星形用空心描边 |
| showText | boolean | `false` | 右侧显示当前分值 |
| text | string | `''` | 右侧自定义短文案，优先于 `showText` |
| activeColor | string | `''` | 选中星形的自定义颜色，字面值 |
| voidColor | string | `''` | 未选中星形的自定义颜色，字面值 |
| readonly | boolean | `false` | 只读展示，不响应点按和滑动 |
| disabled | boolean | `false` | 禁用，颜色转灰 |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| change | 分值变化时触发，点按和滑动都算；滑动中按档位连续触发 | 新分值 |
| update:modelValue | `v-model` 同步 | 新分值 |

## 说明

- 星形三档 20 / 24 / 28，间距固定 8，不并入图标三档。
- 选中层按分值裁出小数进度，只读的 `3.45`、`3.5`、`3.6` 都能如实显示；`count` 收敛到 1–10。
- `allowHalf` 打开后左半区给半星、右半区给整星；纵向为主的移动按滚动处理，不改分值。
- 需要清空评分由业务把分值改回 `0`，组件不内置清空手势。
- `readonly` 保留颜色，`disabled` 转灰，两者都不响应点按也不抛 `change`。
- `type="warning"` 的选中星形取 `warning-pressed`，白底上才够 3:1；`activeColor` / `voidColor` 是字面值，不跟主题。
- `showText` 显示一位小数，整数不补 `.0`；`text` 优先。
