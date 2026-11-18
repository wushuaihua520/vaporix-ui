# vx-divider

分割线。横向占满宽度，纵向由父级 flex 排布；支持虚线、中间文字和自定义间距。没有插槽、箭头、图标和点击态——它就是一条线。

## 示例

```vue
<vx-divider />
<vx-divider text="最近更新" align="left" />
<vx-divider dashed text="更多内容" />
<vx-divider spacing="24px" />

<view class="stat-row">
	<view class="stat-row__item">...</view>
	<vx-divider direction="vertical" />
	<view class="stat-row__item">...</view>
</view>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| direction | `horizontal` \| `vertical` | `horizontal` | 方向；纵向由父级 flex 排布 |
| text | string | `''` | 横线中间的文字；空串就是一条线 |
| align | `left` \| `center` \| `right` | `center` | 有文字时的位置；不认识的值按 `center` 处理 |
| dashed | boolean | `false` | 1px 虚线 |
| spacing | string \| number | `''` | 间距：数字按 px，字符串需带单位；横向是上下外边距，纵向是左右外边距；空串横向 12、纵向 16 |
| color | string | `''` | 字面值，覆盖线色与文字色 |
| height | string | `''` | 纵向线高度，需带单位；空串时撑满父级 |

## 说明

- 横线 1px，默认 `--vx-color-border`；不用列表行内的 `divider` 令牌。
- 带文字时两侧各画一段等宽线，`align` 决定文字位置：`left` 只画右侧线，`right` 只画左侧线。文字 13 / 20 次要灰，和线之间留 12。
- 虚线只换 `border-style`；1px 虚线比实线淡，重要分隔用实线，不要加粗到 2px。
- 竖线宽 1px，`align-self: stretch` 撑满父级那一行，`height` 传了才固定高度。
- `spacing` 数字按 px，字符串必须带单位；横向是上下外边距，纵向是左右外边距。
- `color` 是字面值，同时改线色和文字色，不表达状态。
- 没有插槽、图标和点击态；需要图标或点击时用 `vx-list-cell` 或 `vx-section`。
- 不要用分割线代替区块留白，外边距会叠加在相邻元素之后。
