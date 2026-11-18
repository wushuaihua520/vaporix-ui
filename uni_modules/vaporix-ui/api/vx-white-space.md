# vx-white-space

上下留白。只占纵向空间，不放内容、不接点击、不画外框；宽度跟随父级，高度取间距令牌或自定义值。

## 示例

```vue
<vx-white-space />
<vx-white-space size="lg" />
<vx-white-space height="24px" />
<vx-white-space height="64rpx" />
<vx-white-space height="var(--vx-space-xl)" />
<vx-white-space size="sm" height="32px" />
<vx-white-space height="8px" bg-color="var(--vx-color-primary-soft)" />
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| size | `sm` \| `md` \| `lg` | `md` | 8 / 12 / 16，对应 `--vx-space-sm/md/lg` |
| height | string | `''` | 自定义高度，需带单位；传了盖过 `size` |
| bgColor | string | `''` | 自定义底色，字面值；默认透明 |

## 说明

- `size` 直接取间距令牌：`sm` 8、`md` 12、`lg` 16；要 24 / 32 用 `height`，不要叠两个 `md`。
- `height` 接受 px、rpx、百分比和 `var()`，必须带单位，缺单位时回落到 `size`。
- 固定间距用 px，只有确实随屏宽变化时才用 rpx；百分比高度要求父级有确定高度。
- `bgColor` 只用于确实需要一条色带时，是字面值、不接受渐变和图片，也不表达状态。
- 组件没有插槽和事件；要上下留白包住内容就前后各放一个，或由页面容器补 `padding`。
- 从 ThorUI `tui-white-space` 迁移：`size` 改 `sm` / `md` / `lg`，`height` 必须带单位，`background` → `bgColor`；默认插槽和 `click` 不再提供。
