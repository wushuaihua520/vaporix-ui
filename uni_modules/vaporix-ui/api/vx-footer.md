# vx-footer

页脚承载版权、备案号和辅助链接。默认留在文档流里，`fixed` 时才贴住安全区底部。组件不内置跳转，链接点击只抛 `click`。

## 示例

```vue
<vx-footer copyright="© 2026 Vaporix UI · MIT" />

<vx-footer fixed :links="footerLinks" copyright="© 2026 Vaporix UI · MIT" @click="onFooterLink" />
```

```ts
const footerLinks = [
	{ text: '返回首页', value: 'home' },
	{ text: '帮助', value: 'help' }
]
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| copyright | string | `''` | 版权、备案号等底部说明 |
| links | `Array<VxFooterLink>` | `[]` | 链接导航，相邻项自动加竖分隔线 |
| fixed | boolean | `false` | 固定在页面底部；默认留在文档流 |
| color | string | `''` | 版权文字色，字面值 |
| linkColor | string | `''` | 链接默认文字色，字面值；链接单项的 `color` 优先 |
| borderColor | string | `''` | 分隔线与固定底栏顶部描边的颜色，字面值 |
| bgColor | string | `''` | 页脚底色，字面值；固定模式不传时用 `surface` |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| click | 点击链接时触发 | 该链接对象 `VxFooterLink` |

`links` 的每一项是 `VxFooterLink`：

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | 链接文案 |
| value | string | 否 | 业务值，随 `click` 原样抛出 |
| color | string | 否 | 单个链接的文字色，优先于 `linkColor` |

## 插槽

| 插槽 | 说明 |
| --- | --- |
| default | 标准行上方的自定义内容，可放品牌、社交入口或补充说明 |

## 说明

- 版权走 `--vx-font-sm`，链接走 `--vx-font-md` 加 `medium`；页脚不属于控件，不借 `--vx-font-control-*`。
- 相邻链接自动加 1px 竖线，首尾不加；一行建议不超过四个，窄屏整项换行。
- 组件不内置路由，`value` 随 `click` 抛出，跳转、登录校验和埋点都放在事件里。
- 固定页脚用 `--uni-safe-area-inset-bottom` 抬到安全区外，`surface` 底加顶部 1px 描边、不加阴影；页面底部要自己留出页脚高度。
- 四个颜色 props 都是字面值，不跟主题；`links[i].color` 只覆盖单个链接。
