# vx-input

输入框。支持 `v-model`。尺寸、圆角、描边和字号与 `vx-button` 共用令牌，控件高度 32 / 40 / 48。

## 示例

```vue
<vx-input v-model="name" label="姓名" label-width="80px" required placeholder="请输入姓名" />
<vx-input v-model="keyword" placeholder="请输入" clearable />
<vx-input v-model="ratio" label="百分比" label-width="80px" align="right" unit="%" type="digit" />
<vx-input v-model="query" variant="search" clearable @search="onSearch" @cancel="onCancel" />
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | string | `''` | 输入值，支持 `v-model` |
| type | `text` \| `number` \| `digit` \| `tel` \| `idcard` | `text` | 键盘类型 |
| size | `sm` \| `md` \| `lg` | `md` | 控件尺寸，对应 `--vx-control-height-*` |
| variant | `outline` \| `line` \| `search` | `outline` | 描边盒、只保留底部分割线的表单行，或浅底胶囊搜索框 |
| shape | `rounded` \| `pill` \| `square` | `rounded` | 外轮廓，`line` 形态不参与 |
| placeholder | string | `''` | 占位文案 |
| password | boolean | `false` | 密码输入 |
| clearable | boolean | `false` | 有值时显示清除 |
| disabled | boolean | `false` | 禁用 |
| readonly | boolean | `false` | 只读展示，不唤起键盘，常用于选择器行 |
| maxlength | number | `-1` | 最大长度，`-1` 不限制 |
| invalid | boolean | `false` | 校验失败，只改描边 |
| confirmType | `done` \| `send` \| `search` \| `next` \| `go` | 按变体 | 键盘确认键；不传时 `search` 用 `search`，其余变体用 `done` |
| label | string | `''` | 输入区左侧标题 |
| labelWidth | string | `''` | 标题宽度，需带单位，如 `80px`；不传时按文字自适应 |
| required | boolean | `false` | 标题前显示必填星号 |
| align | `left` \| `right` | `left` | 输入内容与只读值的对齐方向 |
| unit | string | `''` | 右侧单位，如 `%`、`元`，不参与取值 |
| arrow | boolean | `false` | 右侧选择箭头，常与 `readonly` 搭配 |

## 事件

| 事件 | 说明 |
| --- | --- |
| input | 输入中，参数为当前字符串；点清除时也会收到空串 |
| change | 失焦或确认，参数为当前字符串 |
| confirm | 点击确认键，参数为当前字符串 |
| search | 点击确认键，参数为当前字符串；只在 `variant="search"` 下抛 |
| cancel | 点击取消，无参数；`variant="search"` 下先清空并收起键盘再抛 |
| clear | 点击清除，无参数；点清除同时抛 `input('')`，不抛 `change` |
| focus / blur | 焦点变化，无参数 |
| click | 点击整行时触发，只读选择行用它打开选择器 |

## 插槽

| 插槽 | 说明 |
| --- | --- |
| prefix | 输入区左侧，可放区号或图标 |
| suffix | 输入区右侧，可放按钮或说明 |

## 说明

- `clearable` 只在有值、未禁用且未只读时出现；`readonly` 不渲染原生 input，点整行走 `click`。
- `shape` 只作用于 `variant="outline"`；`line` 只保留下边框，适合成组的表单行。
- 同一屏的表单行统一 `label-width`，输入起点才对齐；`unit` 只作展示，值仍是 `modelValue`。
- 搜索变体是浅底胶囊、默认不画描边，聚焦补 1px `primary`、`invalid` 补 1px `danger`，行高不跳。
- 搜索变体不渲染 `label` / `required` / `unit`，标题放到外面；键盘确认键默认「搜索」，取消会清空 `v-model` 再抛 `cancel`。
- 搜索图标沿用 `sm` / `md` 两档（14 / 18），`lg` 与 `md` 同档；前置图标由组件画，不要再传 `prefix`。
