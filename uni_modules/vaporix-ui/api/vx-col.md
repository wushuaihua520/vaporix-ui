# vx-col

栅格列。只管占宽：24 栅格跨度、左侧偏移、视觉位移和四档断点；底色、描边、圆角和内容由插槽自己带。

## 示例

```vue
<vx-row :gutter="12" :line-gutter="12">
	<vx-col :span="24" :sm="12" :md="8" :lg="6">
		<view class="card">积分兑换</view>
	</vx-col>
	<vx-col :span="24" :sm="12" :md="8" :lg="6">
		<view class="card">优惠券</view>
	</vx-col>
</vx-row>

<vx-row :gutter="12">
	<vx-col :span="8" :offset="4">
		<view class="card">8 · 空出四列</view>
	</vx-col>
	<vx-col :span="8" :push="4">
		<view class="card">8 · 右移四列</view>
	</vx-col>
</vx-row>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| span | number | `24` | 占几列，1–24；`0` 表示当前宽度下不显示 |
| offset | number | `0` | 左侧空出几列，上限 `24 - span` |
| push | number | `0` | 视觉右移几列，不改变占位 |
| pull | number | `0` | 视觉左移几列，不改变占位 |
| sm | number | `-1` | 窗口宽度 ≥ 576 时的跨度；`-1` 不覆盖 |
| md | number | `-1` | 窗口宽度 ≥ 768 时的跨度；`-1` 不覆盖 |
| lg | number | `-1` | 窗口宽度 ≥ 992 时的跨度；`-1` 不覆盖 |
| xl | number | `-1` | 窗口宽度 ≥ 1200 时的跨度；`-1` 不覆盖 |

## 说明

- 24 份制：一份是行宽的 4.1667%，列宽向下取到 6 位小数，最后一列不会被挤到下一行。
- `span` 取 1–24，`0` 表示这一档不显示；`offset` 和跨度一起收口，写超了按 `24 - span` 算。
- `push` / `pull` 只改视觉位置、不改变占位，用 `left` 实现；两者同时传取净值。
- 断点按窗口宽度判断，不按父级宽度：列所在的 `vx-row` 用 `uni.getWindowInfo()` 量一次，`onResize` 时重算。
- 断点只覆盖 `span`，`offset` / `push` / `pull` 在所有宽度上同一个值；没传（`-1`）的那一档保持上一档。
- 列不写固定高度，嵌套只建议一层；`push` / `pull` 会让视觉顺序和读屏顺序不一致，关键内容不要靠位移调顺序。
- 从 ThorUI `tui-col` 迁移：`pushLeft` / `pullRight` 改为 `push` / `pull`，`gutter` 从 rpx 换成 px，断点改为 min-width 往上覆盖，不再有 `xs`。
