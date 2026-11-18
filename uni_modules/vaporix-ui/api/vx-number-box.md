# vx-number-box

数字框。`v-model` 绑定数值，左右减号、加号微调，中间可以直接输入。支持范围、步长、三档尺寸、描边 / 浅底形态和自定义颜色；标题、单位和说明放在组件外。

## 示例

```vue
<vx-number-box v-model="quantity" :min="1" :max="99" />
<vx-number-box v-model="weight" :min="0" :max="10" :step="0.1" />
<vx-number-box v-model="count" variant="soft" :min="0" />
<vx-number-box v-model="count" size="lg" shape="pill" />
<vx-number-box v-model="count" invalid />
<vx-number-box v-model="count" disabled />
<vx-number-box v-model="count" variant="soft" bg-color="#fff5e5" color="#8a4b00" icon-color="#8a4b00" />
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | number | `1` | 当前数值，支持 `v-model` |
| min | number | `1` | 最小值；大于 `max` 时自动交换 |
| max | number | `99` | 最大值 |
| step | number | `1` | 加减步长，支持小数；只决定增减量，不做网格对齐 |
| size | `sm` \| `md` \| `lg` | `md` | 控件高度、字号和图标档位 |
| variant | `outline` \| `soft` | `outline` | 描边盒，或浅底无框 |
| shape | `rounded` \| `pill` \| `square` | `rounded` | 整组外轮廓 |
| disabled | boolean | `false` | 禁用，停止输入和加减 |
| invalid | boolean | `false` | 校验失败，只改描边 |
| bgColor | string | `''` | 整组底色，字面值 |
| color | string | `''` | 数值颜色，字面值 |
| iconColor | string | `''` | 加减图标颜色，字面值；到达边界或禁用时仍用禁用色 |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| change | 点加减、失焦或确认后值真的变化时触发 | 新数值 number |
| update:modelValue | `v-model` 同步 | 新数值 number |
| focus / blur | 数值输入区焦点变化 | — |

没有插槽和方法。

## 说明

- 三档高度沿用控件 32 / 40 / 48；数值区宽 44 / 52 / 60，图标 14 / 18 / 22。
- 到边界后对应按钮转灰；`invalid` 只改描边，错误说明放在外面。
- 输入中只同步范围内的有效值；失焦或确认时收口：空值回 `min`，非数字回到最近一次有效值，越界夹到边界。收口后的值变化时才抛 `change`。
- 精度按参与运算的值、`step`、`min`、`max` 里最多的小数位截断，最多 6 位；`step` 不做网格对齐。
- 下限不小于 0 时用 `digit` 键盘，下限为负时用 `text`，否则负号打不出来。
- `outline` 给独立表单，`soft` 给列表行和购物车；`bgColor` / `color` / `iconColor` 是字面值，禁用时都不生效。
- 整个数字框的点击停在本组件，放进列表行或卡片时不会触发外层点击。
- 从 ThorUI `tui-numberbox` 迁移：`value` → `v-model`，`change` 只抛数值；`iconBgColor` / `width` / `height` / `radius` / `iconSize` 改用 `variant` / `shape` / `size`。
