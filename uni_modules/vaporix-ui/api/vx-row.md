# vx-row

栅格行。只管排列：列间距、行间距、水平排列、垂直对齐和换行；不画底色、描边和圆角，外观由列里的内容决定。

## 示例

```vue
<vx-row :gutter="12" :line-gutter="12">
	<vx-col v-for="card in cards" :key="card.title" :span="12" :md="8" :lg="6">
		<view class="card">{{ card.title }}</view>
	</vx-col>
</vx-row>

<vx-row justify="center" align="center" :gutter="12">
	<vx-col :span="6">
		<view class="tile">6</view>
	</vx-col>
	<vx-col :span="6">
		<view class="tile">6</view>
	</vx-col>
</vx-row>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| gutter | number | `0` | 列间距，单位 px；一半铺在列的两侧，行抵掉外侧半格 |
| lineGutter | number | `0` | 行间距，单位 px；落在换行后每一列的上方，行抵掉第一行 |
| justify | `'start'` \| `'center'` \| `'end'` \| `'between'` \| `'around'` \| `'evenly'` | `'start'` | 一行没占满时的水平排列方式 |
| align | `'start'` \| `'center'` \| `'end'` \| `'stretch'` | `'stretch'` | 同一行里各列的垂直对齐方式 |
| wrap | boolean | `true` | 放不下时换行；关掉后一行按比例压缩 |

## 插槽

| 插槽 | 说明 |
| --- | --- |
| default | 一个或多个 `vx-col`；整行没有内容时用 `v-if` 去掉行 |

## 说明

- `gutter` 的一半铺在列的左右内边距上，行用等量负外边距抵掉外侧半格，首尾列内容仍贴住父级内边距；超过 48 按 48。
- `lineGutter` 落在换行后每一列的上外边距上，行抵掉第一行；多行网格要和 `gutter` 一起传。
- 行不写宽度，靠 `align-self: stretch` 撑满纵向容器；默认 `align="stretch"` 让同一行列等高，列里的卡片要一起撑满还得自己写 `flex: 1`。
- 从 ThorUI `tui-row` 迁移：`space-around` / `space-between` 改为 `around` / `between`，`top` / `middle` / `bottom` 改为 `start` / `center` / `end`；`isFlex`、`marginTop` / `marginBottom` 不再提供。
