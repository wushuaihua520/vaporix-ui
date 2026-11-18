# vx-badge

徽章。用于计数、短词和圆点，也能叠在图标、头像的右上角。盒子比控件小一档，不参与点击。

## 示例

```vue
<vx-badge :value="12" />
<vx-badge :value="12" :max="9" />
<vx-badge text="NEW" type="success" />
<vx-badge absolute ring :value="9" type="danger" size="sm">
	<vx-icon name="bell" size="lg" />
</vx-badge>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value | number | `0` | 计数；小于 1 不显示，超过 `max` 显示 `max+` |
| text | string | `''` | 自定义短文案，优先于 `value`；要显示 0 时传 `"0"` |
| max | number | `99` | 计数封顶值，超过显示 `max+` |
| dot | boolean | `false` | 只显示圆点，优先于 `text` / `value` |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `danger` | 语义色 |
| variant | `solid` \| `soft` | `solid` | 实心、浅底 |
| size | `sm` \| `md` \| `lg` | `md` | 徽章尺寸，对应 `--vx-badge-height-*` |
| absolute | boolean | `false` | 定位到默认插槽的右上角 |
| offsetX | number | `0` | 在默认位置上的水平微调，单位 px；正值向右 |
| offsetY | number | `0` | 在默认位置上的垂直微调，单位 px；正值向下 |
| ring | boolean | `false` | 叠在内容上时加一圈页面底色描边和浮层阴影 |
| bgColor | string | `''` | 自定义底色，只覆盖背景 |
| color | string | `''` | 自定义文字色，只覆盖文字 |

## 插槽

| 插槽 | 说明 |
| --- | --- |
| default | `absolute` 时作为被叠加的内容，如 `vx-icon`；其他情况不渲染 |

## 说明

- 三档尺寸 16 / 20 / 24，字号 12 / 13 / 14，圆点 6 / 8 / 10；单字符是正圆，多字符撑宽，轮廓固定胶囊。
- `type` 默认 `danger`，表达未读、待处理；普通计数传 `default`，其余用对应语义色。
- `value` 小于 1 不渲染；要显示 0 用 `text="0"`，`NEW` / `VIP` 这类短词也走 `text`。
- `absolute` 把圆心放在插槽内容的右上角，`offsetX` / `offsetY` 在此之上微调；叠在图标上时用 `size="sm"`，定位层不接点击。
- 角标和 `ring` 的阴影会伸出盒子，外层 `overflow: hidden` 会裁掉。
- `ring` 用 `surface` 描边加浮层阴影，只在叠图标、头像、图片时打开；`color` / `bgColor` 是字面值，要跟主题用 `type`。
