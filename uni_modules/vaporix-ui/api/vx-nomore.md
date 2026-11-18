# vx-nomore

列表到底的收尾标记。默认一句「没有更多了」加两侧细线，也可以只留圆点或去掉线。

## 示例

```vue
<vx-nomore />
<vx-nomore text="我是有底线的" />
<vx-nomore text="NO MORE" size="lg" />
<vx-nomore dot />
<vx-nomore :line="false" text="没有更多了" />
<vx-nomore text="NO MORE" color="#a12f3b" line-color="#f0d3d8" />
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | string | `'没有更多了'` | 收尾文案，单行；传空串只保留线条或圆点 |
| dot | boolean | `false` | 用 6px 圆点代替文案 |
| size | `sm` \| `md` \| `lg` | `md` | 只改文案字号和标记高度，不改 16 的上下留白 |
| line | boolean | `true` | 两侧画 1px 细线 |
| color | string | `''` | 文案和圆点颜色，字面值；不传时文案次要灰、圆点禁用灰 |
| lineColor | string | `''` | 两侧细线颜色，字面值；不传时用 `--vx-color-divider` |

没有事件和插槽。

## 说明

- 上下留白 16，文案 13 / 20，`lg` 时 15 / 22；和同尺寸的 `vx-loadmore` 一样高。
- 默认线比卡片描边浅一档，两侧各占一半，中间给文案留 12。
- `dot` 优先于 `text`；`text=""` 且 `dot=false` 时两条线接成一条，线也关掉时高度为 0。
- `color` 只改文案和圆点，`lineColor` 只改线，都是字面值；只作品牌收尾，不表达状态。
- 收尾文案保持单行，建议两到六个字；不放按钮、链接和长说明。
