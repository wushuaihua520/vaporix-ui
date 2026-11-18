# vx-wing-blank

左右留白。给默认插槽加左右内边距；宽度跟随父级，高度由内容撑开。不画外框、不加外部间距，外轮廓交给外层容器。

## 示例

```vue
<vx-wing-blank>
	<view class="block">左右各留 12</view>
</vx-wing-blank>

<vx-wing-blank size="sm">
	<view class="block">左右各留 8</view>
</vx-wing-blank>

<vx-wing-blank gap="64rpx">
	<view class="block">随屏宽留白</view>
</vx-wing-blank>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| size | `sm` \| `md` \| `lg` | `md` | 8 / 12 / 16，对应 `--vx-space-sm/md/lg` |
| gap | string | `''` | 自定义左右内边距，需带单位；传了盖过 `size` |

## 插槽

| 插槽 | 说明 |
| --- | --- |
| default | 内容，宽度在左右留白之内 |

## 说明

- `size` 取间距令牌 8 / 12 / 16，`lg` 和页面左右边距同值。
- `gap` 是左右内边距，不是子项间距，传了盖过 `size`，必须带单位；百分比按父级宽度算，不要用负值。
- 宽度固定 100%、按 `border-box` 计算，高度由内容撑开，纵向不收缩；不铺底色，不加描边、圆角和外部间距。
- 点击由插槽里的按钮、列表行或链接提供；需要底色和圆角时外层包 `view` 或直接用 `vx-card`。
- 页面边距只留一次：页面已有 16 时再套 `lg` 就是 32。
- 从 ThorUI `tui-wing-blank` 迁移：`size` 改 `sm` / `md` / `lg`，`gap` 必须带单位；`background` / `radius` / `click` 交给外层或插槽内容。
