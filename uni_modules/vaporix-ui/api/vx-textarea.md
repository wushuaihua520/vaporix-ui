# vx-textarea

多行输入框，支持标题与必填、固定高度、字数统计，并透传原生 textarea 的键盘与光标属性。字号、内边距和圆角与 `vx-input` 共用令牌。

## 示例

```vue
<vx-textarea v-model="intro" label="简介" label-width="80px" required placeholder="请输入" />
<vx-textarea v-model="intro" counter :maxlength="140" placeholder="请输入" />
<vx-textarea v-model="intro" auto-height min-height="66px" placeholder="随内容增高" />
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | string | `''` | 输入值，支持 `v-model` |
| size | `sm` \| `md` \| `lg` | `md` | 字号、内边距、圆角与内容区高度档位 |
| variant | `outline` \| `plain` \| `line` | `outline` | 描边盒、无边框段落、只保留下边框的表单行 |
| shape | `rounded` \| `square` | `rounded` | 外轮廓，`line` 形态不参与 |
| placeholder | string | `''` | 占位文案 |
| label | string | `''` | 内容区左侧标题 |
| labelWidth | string | `''` | 标题宽度，需带单位，如 `72px`；不传时按文字自适应 |
| required | boolean | `false` | 标题前显示必填星号 |
| disabled | boolean | `false` | 禁用，不可输入 |
| invalid | boolean | `false` | 校验失败，只改描边 |
| maxlength | number | `-1` | 最大长度，`-1` 不限制 |
| counter | boolean | `false` | 右下角显示字数统计 |
| height | string | `''` | 固定内容区高度，需带单位；`autoHeight` 时忽略 |
| minHeight | string | `''` | 内容区最小高度，需带单位 |
| autoHeight | boolean | `false` | 内容自适应增高 |
| borderColor | string | `''` | 默认态描边颜色，`focused` / `invalid` / `disabled` 优先 |
| focus | boolean | `false` | 获取焦点 |
| confirmType | `return` \| `send` \| `search` \| `next` \| `go` \| `done` | `return` | 键盘右下角按钮文案 |
| cursorSpacing | number | `0` | 光标与键盘的距离，单位 px |
| showConfirmBar | boolean | `true` | 显示键盘上方的完成栏 |
| adjustPosition | boolean | `true` | 键盘弹起时自动上推页面 |
| holdKeyboard | boolean | `false` | 聚焦时点击页面不收起键盘 |
| fixed | boolean | `false` | 位于 `position: fixed` 区域时使用 |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| input | 输入中触发 | 当前字符串 |
| focus / blur | 焦点变化 | 无 |
| confirm | 点击键盘确认键 | 当前字符串 |
| linechange | 行数变化 | 行数 |
| keyboardheightchange | 键盘高度变化 | 键盘高度 |

## 插槽

| 插槽 | 说明 |
| --- | --- |
| extra | 内容区底部左侧，计数或辅助操作的位置 |

## 说明

- 不传 `height` 时，内容区默认高度由 `size` 决定：`sm` 60、`md` 66、`lg` 72，即三行文本。
- 组件固定关闭 iOS 默认内边距，内边距由 `size` 控制。
- `counter` 在设置 `maxlength` 时显示 `当前/上限`，达到上限后变为危险色；不限制时只显示当前字数。
- `borderColor` 只改默认态。错误用 `invalid`。
- `autoHeight` 由原生 textarea 撑高，`height` 不生效；需要下限时用 `minHeight`。
- 不提供 `readonly`：只读展示用 `text` 组件，不可编辑的表单值用 `disabled`，不要用禁用态冒充只读。
