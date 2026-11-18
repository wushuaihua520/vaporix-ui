# vx-loadmore

列表尾部正在加载下一页。转圈加一句文案，和 `vx-nomore` 共用同一套上下留白，替换时不跳高度。

## 示例

```vue
<vx-loadmore />
<vx-loadmore text="上拉加载更多..." />
<vx-loadmore type="primary" size="lg" />
<vx-loadmore variant="arc" text="正在加载更多..." />
<vx-loadmore variant="bars" text="正在加载更多..." />
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | string | `'正在加载...'` | 加载文案；传空串只显示转圈 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `default` | 转圈颜色，不改变文案颜色 |
| size | `sm` \| `md` \| `lg` | `md` | 转圈 14 / 18 / 22，文案 13 / 13 / 15 |
| variant | `ring` \| `arc` \| `bars` | `ring` | 转圈形态，和 `vx-loading` 共用 |

没有事件和插槽。

## 说明

- 只表示列表正在加载，不承载点击和重试；需要「加载更多」按钮时用按钮。
- 上下留白 16，文案单行不换行，避免和 `vx-nomore` 切换时跳高。
- 和 `vx-nomore` 放在同一个位置，加载中显示一个、结束后换另一个，不要同时渲染。
- 放在分组卡片外；转圈默认次要灰，需要主色时传 `type="primary"`。
