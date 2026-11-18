# vx-card

卡片承载一组相关内容：头部、正文、底部。默认 `surface` 底、1px 描边和 `md` 圆角，不加阴影；头部可放头像、标题和右侧时间，正文用默认插槽，底部用 `footer` 或 `suffix` 插槽。

## 示例

```vue
<vx-card title="CSDN云计算" meta="1小时前" avatar="/static/demo/card/avatar-cs.png"
	content="默认卡片内容部分 slot=>body" footer="默认卡片底部 slot=>footer" />

<vx-card title="标题文本" meta="1小时前" avatar="/static/demo/card/avatar-js.png"
	avatar-shape="circle" title-color="var(--vx-color-warning-ink)"
	meta-color="var(--vx-color-warning-ink)" content="头像换成圆形，标题和时间用同一个语义色。"
	footer="颜色是字面值，不跟随主题。" />

<vx-card title="CSDN云计算" meta="1小时前" avatar="/static/demo/card/avatar-cs.png"
	header-bg="var(--vx-color-default-soft)" :header-divider="false"
	meta-color="var(--vx-color-text)" content="头部底色单独设置，分割线可以关掉。" />

<vx-card size="lg" title="大号卡片" meta="lg" avatar="/static/demo/card/avatar-cs.png"
	content="正文仍是 15 / 22，内边距 24。" footer="头像 48 · 标题 17" />

<vx-card full title="通栏卡片" meta="full" avatar="/static/demo/card/avatar-cs.png"
	header-bg="var(--vx-color-default-soft)" :header-divider="false"
	content="通栏卡片贴住内容区两侧。" footer="上下描边保留。" />

<vx-card title="Vaporix UI">
	<template #prefix>
		<view class="card-icon">
			<vx-icon name="grid-2x2" size="lg" type="primary" />
		</view>
	</template>
	<template #extra>
		<vx-icon name="more-horizontal" size="sm" color="var(--vx-color-text-secondary)" />
	</template>
	<text class="card-copy">prefix 替换头像，extra 替换 meta；默认插槽放正文。</text>
</vx-card>

<vx-card clickable title="可点击卡片" avatar="/static/demo/card/avatar-cs.png"
	content="整卡可点时按下变淡，点击抛 click。" footer="卡片里不要再放入口和按钮。"
	@click="openCard" />
```

```vue
<!-- 富内容：封面和列表贴边用 bodyPadded=false，底部操作放 suffix。 -->
<vx-card title="JavaScript" meta="昨天" avatar="/static/demo/card/avatar-js.png" :body-padded="false">
	<image class="card-cover" src="/static/demo/card/cover.jpg" mode="aspectFill" />
	<vx-list-cell title=".NET Core 使用 Exceptionless 分布式日志收集" description="后端 · 8 分钟阅读">
		<template #prefix>
			<view class="card-thumb">
				<image class="card-thumb__image" src="/static/demo/card/thumb-2.jpg" mode="aspectFill" />
			</view>
		</template>
	</vx-list-cell>
	<template #suffix>
		<view class="card-more">
			<text class="card-more__text">余下 3 篇</text>
			<vx-icon name="chevron-down" size="sm" color="var(--vx-color-text-secondary)" />
		</view>
	</template>
</vx-card>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | string | `''` | 头部标题 |
| meta | string | `''` | 头部右侧短文本，放时间、状态或分类；传 `extra` 插槽时忽略 |
| avatar | string | `''` | 头部左侧图片地址；传 `prefix` 插槽时忽略 |
| avatarShape | `rounded` \| `circle` | `rounded` | 头部图片轮廓 |
| size | `sm` \| `md` \| `lg` | `md` | 内边距、头像和标题档位 |
| content | string | `''` | 正文文案快捷入口；传默认插槽时忽略 |
| footer | string | `''` | 底部文案；传 `suffix` 插槽时忽略 |
| headerBg | string | `''` | 头部底色，字面值；要跟随主题传 `var(--vx-color-*)` |
| headerDivider | boolean | `true` | 头部底部分割线 |
| bodyPadded | boolean | `true` | 正文保留四边内边距；图片和列表贴边时传 `false` |
| full | boolean | `false` | 通栏：去掉左右描边和圆角，上下描边保留 |
| clickable | boolean | `false` | 整卡可点：按下变淡，点击抛 `click` |
| titleColor | string | `''` | 标题自定义颜色，字面值 |
| metaColor | string | `''` | 头部右侧文字自定义颜色，字面值 |

## 事件

| 事件 | 说明 |
| --- | --- |
| click | `clickable` 时点击整卡触发，不带参数 |

## 插槽

| 插槽 | 说明 |
| --- | --- |
| default | 正文，替换 `content` |
| prefix | 头部左侧自定义内容，替换 `avatar` |
| extra | 头部右侧内容，替换 `meta`；标签、时间、操作都放这里 |
| suffix | 底部内容，替换 `footer`；放展开、查看全部这类补充操作 |

## 说明

- 三档尺寸只改内边距、头像和标题：正文四边 12 / 16 / 24，头像 32 / 40 / 48；头部高度下限沿用列表行。
- 标题 13 / 15 / 17、字重 600；正文 `sm` 13 / 20，`md` / `lg` 15 / 22；`meta` 和 `footer` 固定 13 / 20 次要色。
- 默认 1px 描边、不提供阴影；`full` 只去掉左右描边和圆角。
- `headerBg` / `titleColor` / `metaColor` 是字面值，不跟主题。
- `bodyPadded=false` 时正文内边距为 0，适合封面图、图片网格和列表行，内容自己补留白。
- `clickable` 默认关闭，打开后整卡按下变淡并抛 `click`；卡片里不要再放按钮、输入框和链接。
- 卡片不加外部间距，宽度跟随父级，不嵌套卡片；示例里的 `/static/demo/card/*` 接入时换成自己的资源。
