# vx-rolling-news

滚动消息。一条一条轮播新闻、热词和通告，纵向往上或横向往左；当前条滑出、下一条滑入，走到头从第一条接着走。默认 3 秒一条，按下暂停，两侧插槽可以放标签、图标和短操作。

## 示例

```vue
<vx-rolling-news :items="news" icon="volume-high" arrow @click="openNews" />
<vx-rolling-news :items="news" direction="horizontal" icon="volume-high" />
<vx-rolling-news :items="news" variant="soft" shape="pill" :interval="1200" />
<vx-rolling-news :items="hotSearch" variant="soft" shape="pill" icon="search">
	<template #prefix>
		<vx-tag type="danger" variant="soft" size="sm" text="热" />
	</template>
	<template #suffix>
		<view class="more" @click="refresh">换一批</view>
	</template>
</vx-rolling-news>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | `VxRollingNewsItem[]` | `[]` | 消息列表，按顺序轮播；空数组不渲染 |
| direction | `vertical` \| `horizontal` | `vertical` | 纵向往上走一格，横向往左走一格 |
| variant | `card` \| `soft` \| `plain` | `card` | 描边卡片、浅底、透明 |
| shape | `rounded` \| `pill` \| `square` | `rounded` | 外轮廓；描边占位不随形状变化 |
| size | `sm` \| `md` \| `lg` | `md` | 行高 32 / 40 / 48，字号 13 / 15 / 17 |
| icon | `VxIconName` | — | 左侧图标；不传时左侧留空 |
| iconColor | string | `''` | 左侧图标颜色，默认 `primary` |
| bgColor | string | `''` | 底色，字面值或主题令牌 |
| color | string | `''` | 文案颜色，字面值或主题令牌 |
| interval | number | `3000` | 两次切换的间隔，单位毫秒 |
| autoplay | boolean | `true` | 自动轮播；关掉后停在第一条 |
| arrow | boolean | `false` | 右侧箭头；传 `suffix` 时以插槽为准 |
| clickable | boolean | `true` | 整条可点；静态展示传 `false` |

`VxRollingNewsItem`：

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | string | `''` | 文案，单行省略 |
| id | string | — | 业务标识，原样带回 `click` |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| click | 点击整条时触发，`clickable=false` 不抛 | 索引 number、消息对象 `VxRollingNewsItem` |

## 插槽

| 插槽 | 说明 |
| --- | --- |
| prefix | 替换左侧图标，放标签、头像或自定义图形 |
| suffix | 替换右侧箭头，放短操作、标签或关闭按钮 |

## 说明

- 行高 32 / 40 / 48，字号取 `--vx-font-*`，左右内边距 12 / 16，图标 14 / 18 / 22 跟档位。
- 两层用 `transform` 位移：当前条滑出、下一条滑入，落位后在视口外对调，不往回滚；过渡 220ms。
- 间隔从这一格开始算，小于等于 0 按 3000 处理；改间隔只重新计时，换方向从第一条重来。
- 只有一条时不轮播也不铺第二层，空数组不渲染；换数组或改文案会回到第一条。
- 按下整条时暂停，松手后重新计时；Web 上的鼠标点按不触发这条逻辑。
- `prefix` / `suffix` 是独立目标，点它们不触发整条的 `click`，传了插槽就不再渲染内置图标或箭头。
- `card` 给独立通告条，`soft` 给工具条和搜索框，`plain` 放进卡片且不补左右内边距。
- `icon` 是唯一强调色，默认 `primary`；`bgColor` / `color` / `iconColor` 是字面值，对比度由业务保证。
- 只承载轮播、点击和两侧插槽，不做详情、路由和关闭逻辑。
- 从 ThorUI `tui-roll-news` 迁移：`list` → `items`，`vertical` → `direction`，`click` 参数从对象改成 `(index, item)`；`lines`、`bold` 和自定义字号不再支持，文案固定单行省略。
