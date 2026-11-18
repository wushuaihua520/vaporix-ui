# vx-image-group

图片组合。用 `items` 按顺序排缩略图，支持三档方框、三种形状、横向 / 纵向和重叠 / 留缝；多行在 row 下打开 `wrap`。整张图默认可点，点击抛 `click(index, item)`，图片失败时换成占位图并抛 `error(index, item)`。

## 示例

```vue
<vx-image-group :items="photos" @click="preview" />

<vx-image-group :items="photos" size="sm" shape="circle" :offset="-12" ring />

<vx-image-group :items="photos" :offset="8" wrap />

<vx-image-group :items="photos" direction="column" :offset="8" />

<vx-image-group :items="photos" mode="aspectFit" shape="square" :clickable="false" />
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | VxImageGroupItem[] | `[]` | `{ src, id? }`；空数组不渲染 |
| size | `sm` \| `md` \| `lg` | `md` | 方框 40 / 64 / 88 |
| shape | `rounded` \| `circle` \| `square` | `rounded` | 形状；circle 用于头像 |
| mode | `aspectFill` \| `aspectFit` \| `scaleToFill` | `aspectFill` | 图片填充方式 |
| direction | `row` \| `column` | `row` | 横向一行或纵向一列 |
| offset | number | `0` | 相邻偏移，单位 px；负值重叠，正值留缝 |
| wrap | boolean | `false` | row 下多行；负 offset 按 0 处理 |
| ring | boolean | `false` | 每张图加 2px 内描边，重叠时分开 |
| ringColor | string | `''` | 描边颜色，字面值；默认 surface |
| clickable | boolean | `true` | 按下变淡并抛 `click`；静态展示传 `false`，不抛事件也不拦点击 |

## 事件

| 事件 | 说明 |
| --- | --- |
| click | 可点图被点按时触发，回传 `index` 和该项 `item` |
| error | 图片加载失败时触发一次，回传 `index` 和该项 `item`；`src` 为空只显示占位图，不抛事件 |

## 说明

- 方框固定正方形，不跟父级宽度缩放，同一组只用一档 `size`；圆角跟 `size` 取 6 / 8 / 10。
- `offset` 单位 px，取整；重叠量建议控制在方框三分之一以内。
- `wrap` 只在 `row` 下生效，父级要有宽度边界；横向和纵向留缝都取 `offset`，负值按 0，`column` 忽略 `wrap`。
- `ring` 是方框内侧的 2px 描边，默认 `surface`；放在页面底色上时传 `ring-color`。
- 加载失败或 `src` 为空显示占位底色和图标，失败抛 `error`、空地址不抛；同一个地址只抛一次。
- `clickable` 默认打开，点击停在单张图上；静态展示传 `:clickable="false"`，点缩略图等同于点外层行。
- 不加外框、底色和外部间距；标题、「查看全部」和删除由外层卡片或列表行承担。
- 从 ThorUI `tui-image-group` 迁移：`imageList` → `items`，`width` / `height` → `size`，`distance` → `offset`，`multiLine` → `wrap`，`borderWidth` → `ring`；`@errorEvent` → `@error`。
