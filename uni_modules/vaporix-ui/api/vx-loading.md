# vx-loading

加载中。转圈加可选文案，横排或纵排，三种转圈形态；`overlay` 打开后铺满页面居中显示，并挡住页面点击。

## 示例

```vue
<vx-loading />
<vx-loading text="保存中" type="primary" />
<vx-loading text="正在加载..." layout="column" size="lg" />
<vx-loading text="正在加载..." variant="arc" type="info" />
<vx-loading text="正在加载..." variant="bars" type="success" />
<vx-loading v-if="saving" overlay text="正在保存..." />
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | string | `'加载中'` | 转圈旁的文案；传空串只显示转圈 |
| wrap | boolean | `true` | 文案换行；关掉后保持单行 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `default` | 转圈颜色，不改变文案颜色 |
| size | `sm` \| `md` \| `lg` | `md` | 转圈 14 / 18 / 22，文案 13 / 13 / 15 |
| variant | `ring` \| `arc` \| `bars` | `ring` | 圆环、开口弧、十二瓣 |
| layout | `row` \| `column` | `row` | 横排或纵排；`overlay` 固定纵排 |
| overlay | boolean | `false` | 全屏浮层，面板居中，挡住页面点击 |
| mask | boolean | `true` | 浮层带遮罩；关掉后仍挡住点击，只是不压暗页面 |
| maskColor | string | `''` | 自定义遮罩色，字面值；不传时用 `--vx-color-mask` |
| zIndex | number | `1050` | 浮层层级，压在消息提示上、轻提示下 |

没有事件和插槽。

## 说明

- 行内默认横排，`layout="column"` 时转圈在上；尺寸只改转圈和文案，不加外层间距。
- `type` 只改转圈；文案在行内保持次要灰，浮层里转圈和文案一起用正文色。
- `overlay` 是整页浮层，用 `v-if` 控制显隐；面板最小 120、最大 240，`md` 圆角加阴影。
- `mask=false` 只去掉压暗，整层仍接住点击；层级 1050，不要和消息提示、轻提示叠用。
- 三种形态共用 700ms 节奏，`bars` 最重，同一页只用一种。
- 5.26 的 App 端可能不旋转，文案要能独立说明在等什么；5.31 起恢复正常。
- 加载中不是骨架屏、进度条或百分比，需要占位或进度时换对应组件。
- 全屏浮层挂在页面根节点，不要放进 `scroll-view` 或卡片。
