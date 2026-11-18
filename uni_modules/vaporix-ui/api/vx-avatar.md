# vx-avatar

头像。`src` 有值时先加载图片，失败后按 `text` 首字 → `icon` → `user` 图标逐级回落；`src` 变化会重新尝试。首字按 code point 取，emoji 不会被截成半个。描边画在外框内侧，不改变 32 / 40 / 48 的外框尺寸。

## 示例

```vue
<vx-avatar src="/static/demo/card/avatar-cs.png" />
<vx-avatar text="汽" />
<vx-avatar icon="camera" type="primary" />
<vx-avatar text="😀" size="lg" ring type="primary" />
<vx-avatar :src="avatarUrl" text="汽" clickable @error="onAvatarError" @click="openProfile" />
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| src | string | `''` | 图片地址；空串直接走首字，不经过图片节点 |
| text | string | `''` | 首字，先 `trim` 再按 code point 取第一个字符 |
| icon | string | `''` | 字体图标名，取 `libs/icons/codepoints.ts` 里已有的名字；空值回落到 `user` |
| size | `sm` \| `md` \| `lg` | `md` | 外框 32 / 40 / 48 |
| shape | `circle` \| `rounded` \| `square` | `circle` | 圆形 / 小圆角 / 直角 |
| type | `default` \| `primary` \| `success` \| `warning` \| `danger` \| `info` | `default` | 首字与图标的浅底和前景 |
| ring | boolean | `false` | 2px 内描边，画在外框内侧，不改变外框尺寸 |
| bgColor | string | `''` | 字面值，覆盖 `type` 的底色；图片态也铺 |
| color | string | `''` | 字面值，覆盖首字和图标的前景色 |
| mode | `aspectFill` \| `aspectFit` | `aspectFill` | 透传给原生 `image` 的填充方式 |
| clickable | boolean | `false` | 可点击：按下变淡并抛 click；只写 `@click` 不传也算可点 |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| error | 图片加载失败时触发一次；`src` 为空不抛事件 | 无 |
| click | 有 `@click` 监听或 `clickable` 为 true 时触发；显式 `clickable=false` 和静态头像不拦外层点击 | 无 |

## 说明

- 回落链：`src` → `text` 首字 → `icon` → `user`。图片失败只记一次不重试，`src` 变化后重新走一遍。
- 首字先 `trim`，取第一个 code unit；是高位代理时连取两个，emoji 和中文首字都不会乱码。
- 外框 32 / 40 / 48，首字 12 / 14 / 16，图标 14 / 16 / 18，图标不走 `vx-icon` 的三档。
- 底色取 `*-soft`、前景取 `*-pressed`，`warning` 取 `warning-ink`；图片态不铺底色，除非传了 `bgColor`。
- `ring` 是内层 2px 描边，外框不加 `border`，尺寸不会变大。
- 只写 `@click` 也算可点，按下变淡并停在头像上；显式 `clickable=false` 时不淡、不拦外层点击。
- 不做徽章、在线状态点、裁剪上传和长按保存：徽章用 `vx-badge` 的 `absolute` 包一层。
