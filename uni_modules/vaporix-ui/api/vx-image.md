# vx-image

图片底座。加载中铺占位底色，成功后 200ms 淡入，失败只回落一次；圆角只作用于外框，图片一起裁切。点击、加载和失败都只抛事件，预览、长按保存和裁剪不属于这一件。

## 示例

```vue
<vx-image src="/static/demo/card/cover.jpg" width="240px" :ratio="1.78" radius="md" />

<vx-image src="/static/demo/card/thumb-1.jpg" width="120px" height="80px" radius="sm" />

<vx-image src="/static/demo/card/avatar-cs.png" width="64px" height="64px" radius="circle" />

<vx-image src="/static/demo/card/missing.jpg" height="120px" error-text="图片加载失败"
	@error="onImageError" />

<vx-image :src="cover" height="180px" :fade="false" lazy-load @load="onImageLoad" @click="openGallery" />
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| src | string | `''` | 图片地址；空串直接走失败态 |
| mode | `aspectFill` \| `aspectFit` \| `scaleToFill` \| `center` | `aspectFill` | 透传给原生 `image` 的 `mode`，其它值回落到 `aspectFill` |
| width | string | `'100%'` | 宽度，需带单位 |
| height | string | `''` | 高度，需带单位；空串时由 `ratio` 或父级高度决定 |
| ratio | number | `0` | 宽 / 高，例如 `1.78`；`0` 表示不按比例，只在 `width` 是 px 或 rpx 时生效 |
| radius | `none` \| `sm` \| `md` \| `lg` \| `circle` | `none` | 外框圆角；`circle` 取 `--vx-radius-pill` |
| placeholder | boolean | `true` | 加载中铺占位底色；失败态始终铺 |
| errorIcon | string | `'image'` | 失败态图标，取 `libs/icons/codepoints.ts` 里已有的名字；extend 图标要先引入 `icons-extend.css` |
| errorText | string | `''` | 失败态文案；空串只显示图标 |
| bgColor | string | `''` | 占位与失败态的底色，字面值；传了盖过 `--vx-color-default-soft`；成功态也留在外框上，`aspectFit` 的留白落在它上面 |
| lazyLoad | boolean | `false` | 懒加载，仅 Web 和小程序生效；App 端由平台决定 |
| fade | boolean | `true` | 加载完成后 200ms 淡入；关闭后直接出现 |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| load | 图片加载完成时触发一次 | 无 |
| error | 地址读不到时触发一次；`src` 为空直接显示失败态，不抛事件 | 无 |
| click | 点击图片时触发，失败态也触发 | 无 |

## 说明

- 三态：加载中只铺占位底色，成功按 `fade` 淡入，失败显示图标加文案并在框内垂直居中。
- 尺寸优先级：`height` → `ratio` 换算 → `100%`；前两者都没有时父级必须有确定高度，否则盒子高 0。
- `ratio` 只在 `width` 是 px 或 rpx 时生效，百分比和 `auto` 回落到父级高度并只警告一次；渲染时算好，第一帧不跳。
- `radius` 只写在外框，`circle` 取胶囊圆角，其余取 `sm` / `md` / `lg`。
- 失败只回落一次，不重试也不清空 `src`；重试由业务换 `src` 或 `:key`。同一个地址重新赋值不会触发新的 `load`。
- 只承载图片本身：不提供预览、长按保存、裁剪和占位插槽；预览用 Pro 的 `vx-gallery`，骨架用 `vx-skeleton`。

## 平台支持

| 平台 | ratio | lazyLoad | fade |
| --- | --- | --- | --- |
| Web | `width` 为 px / rpx 时按脚本换算；百分比和 auto 不生效 | 生效 | `opacity` 过渡 200ms |
| App（Android / iOS / 鸿蒙） | 同上 | 由平台处理，安卓默认懒加载 | 支持过渡时淡入，否则直接落位 |
| 微信小程序 | 同上 | 生效 | `opacity` 过渡 200ms |
