# vx-link

超链接。指向外部网页、帮助文档或协议条款的文字入口：Web 新开标签页，App 和小程序复制链接并提示。支持下划线、七种文字色、三档字号、电话和邮箱，以及 `prefix` / `suffix` 插槽。

## 示例

```vue
<vx-link href="https://gitee.com/DonkeySmall/vaporix-ui" text="查看仓库" />
<vx-link href="https://gitee.com/DonkeySmall/vaporix-ui" text="服务协议" underline />
<vx-link href="tel:10086" text="联系客服" type="secondary" />
<vx-link href="https://gitee.com/DonkeySmall/vaporix-ui" text="复制链接" action="copy" @copy="onCopy" />
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| href | string | `''` | 目标地址：http(s)、站内路径、`tel:` 或 `mailto:`；空串、空号码和空邮箱只展示 |
| text | string | `''` | 显示文案；不传时显示 `href`，默认插槽优先 |
| type | `default` \| `secondary` \| `primary` \| `success` \| `info` \| `warning` \| `danger` | `primary` | 文字颜色；secondary 是次要灰，其余按语义表达状态 |
| size | `sm` \| `md` \| `lg` | `md` | 字号和行高，13 / 15 / 17 与 20 / 22 / 24 |
| weight | `regular` \| `medium` \| `semibold` \| `bold` | `medium` | 字重 400 / 500 / 600 / 700 |
| color | string | `''` | 自定义颜色，字面值；优先 type，disabled 时不生效 |
| underline | boolean | `false` | 下划线，跟随文字色 |
| action | `auto` \| `copy` \| `none` | `auto` | 点按行为：按平台处理、只复制、只抛 click |
| tips | string | `''` | 复制后的提示；留空时按地址类型给默认文案 |
| disabled | boolean | `false` | 停用：转 disabled-text，不响应点按 |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| click | 点按时触发；disabled 和空 `href` 不抛 | 原始 `href` string |
| copy | 写入剪贴板成功后触发；`none` 不抛 | 实际复制的链接、号码或邮箱 string |

## 插槽

| 插槽 | 说明 |
| --- | --- |
| 默认插槽 | 替换 `text` 和 `href`；内容自己带颜色和字号，点按仍由根节点处理 |
| prefix | 文案前的图标或标记，与文案留 4px |
| suffix | 文案后的外链图标或箭头，与文案留 4px |

没有方法。打开、复制和提示都在组件内完成；需要自定义行为时用 `action="none"` 在 `click` 里处理。

## 说明

- 链接是正文级元素：按内容宽度排，不加内外边距、底色、描边和圆角；同一行多段链接由父级 `flex-wrap` 排。
- `href` 支持 http(s)、站内路径、`tel:` 和 `mailto:`；空串、空号码和空邮箱只展示，不抛 `click`。
- Web 用临时 `a` 标签新开标签页并带 `noopener noreferrer`；App 和小程序不能直接打开外部网页，默认复制并提示，需要在 App 内直接打开时用 `action="none"` 接自己的 openSchema 或 webview 页面。
- `tel:` 在 App 和小程序调起拨号，失败回落复制；`mailto:` 在 Web 交给系统，App 和小程序复制邮箱。
- 复制后抛 `copy(value)`，提示默认按地址类型给；传 `tips` 整句替换，`action="none"` 完全不弹。
- `type` 默认 `primary`，`secondary` 只用于不抢眼的内联入口；`underline` 默认关闭。
- 点按停在链接上，不触发外层列表行或卡片；Web 端是 `view` 组合，不进 Tab 顺序，键盘访问由外层提供。
- 从 ThorUI `tui-link` 迁移：`copyTips` → `tips`，尺寸改 `sm` / `md` / `lg`，语义色改用 `type`；下载和 App 内打开浏览器由业务自己做。
