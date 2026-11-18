# vx-text

文本。正文、说明、金额、手机号和证件都用同一套字号、字重和语义色；支持内联和块级、三档尺寸、四种字重、对齐、装饰、截断、格式化、可选中和长按复制。

## 示例

```vue
<vx-text text="订单已提交，我们会尽快为你发货。" />
<vx-text block type="secondary" text="收货地址：深圳市南山区科技园" />
<vx-text block size="lg" weight="bold" format="amount" text="5201314" />
<vx-text copyable text="订单号：VX202610300001" @copy="onCopy" />
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | string \| number | `''` | 文本内容；数字转字符串，空串不渲染 |
| type | `default` \| `secondary` \| `primary` \| `success` \| `info` \| `warning` \| `danger` | `default` | 文本颜色；secondary 是次要灰，其余按语义表达状态 |
| size | `sm` \| `md` \| `lg` | `md` | 字号和行高，13 / 15 / 17 与 20 / 22 / 24 |
| weight | `regular` \| `medium` \| `semibold` \| `bold` | `regular` | 字重 400 / 500 / 600 / 700 |
| color | string | `''` | 自定义颜色，字面值；优先于 type，disabled 时不生效 |
| align | `left` \| `center` \| `right` | `left` | 对齐；block 或确定宽度下生效 |
| decoration | `none` \| `underline` \| `line-through` | `none` | 装饰线 |
| block | boolean | `false` | 独占一行，宽度铺满父级 |
| maxLines | number | `0` | 最多显示几行；0 不限，1 单行省略，2 以上多行截断 |
| copyable | boolean | `false` | 长按复制，成功抛 copy |
| selectable | boolean | `false` | 文本可选中；App 弹出复制菜单，Web 可选择。与 copyable 同时打开时不生效 |
| clickable | boolean | `false` | 可点击：按下变淡并抛 click |
| disabled | boolean | `false` | 停用：转 disabled-text，不抛 click 和 copy |
| format | `none` \| `phone` \| `amount` \| `bank-card` \| `id-card` | `none` | 格式化方式；先格式化再显示 |
| currency | string | `'¥'` | 金额前缀；只在 format="amount" 时生效 |
| decimals | number | `2` | 金额小数位 0–6；只在 format="amount" 时生效 |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| click | 可点击文本被点击时触发；disabled 不抛，静态文本不拦事件 | 格式化后的完整文本 string |
| copy | 长按复制成功时触发；组件不调用轻提示（系统提示除外） | 格式化后的完整文本 string |

没有插槽，也没有方法。同一行多段文字各用一个实例，父级用 `flex-direction: row; flex-wrap: wrap`，间距由父级留白给。

## 说明

- 默认按内容宽度排，`block` 铺满父级；组件不加外边距、内边距、底色、描边和圆角。
- `type` 只有 `default` 和 `secondary` 是正文层级，其余语义色只表达状态；warning 用 `warning-ink`。
- `size` 是正文档位，不借控件字号；页面级 28 / 34 的展示标题仍用页面自己的 text。
- `format` 只接数值本身：phone 只处理 1 开头的 11 位，amount 默认 ¥ 和两位小数，bank-card 每四位分组，id-card 保留前 6 后 4；带标签的整串原样返回。
- `maxLines` 只影响显示，`copy` 和 `click` 拿完整文本；多行截断在 App 5.21+、Web、微信小程序可用。
- `copyable` 和 `selectable` 只选一个，同时打开时按复制；Web 桌面端没有长按，要另给可见的复制按钮。
- `clickable` 抛 `click(text)` 并拦下这一笔事件；可点击文本不是按钮，键盘入口由外层提供。
- `disabled` 同时关掉点击、复制和选择，文字转 `disabled-text`。
- 从 ThorUI `tui-text` 迁移：`gray` / `black` → `secondary` / `default`，`fontWeight` 数字换成 `regular` / `medium` / `semibold` / `bold`，`highlight` → `clickable`，`disable` → `disabled`。
