# vx-section

区块标题栏。标题、说明、竖线和右侧短操作组成一个标题层，不包内容。`title` / `description` 是文案快捷入口，默认插槽替换标题，`suffix` 替换说明。

## 示例

```vue
<vx-section title="今日推荐" description="根据你的浏览记录更新，每天 6:00 刷新。" />

<vx-section title="前端工程化" description="构建、规范和发布流程。" marker />

<vx-section title="设计系统" description="令牌、组件和文档。" marker marker-color="#7c3aed" />

<vx-section title="账户安全" description="最近 30 天内更新" variant="soft" marker>
	<template #prefix>
		<vx-icon name="shield" size="md" type="primary" />
	</template>
	<template #extra>
		<view class="section-action" @click="openSecurity">
			<text class="section-action__text">查看全部</text>
			<vx-icon name="chevron-right" size="sm" color="var(--vx-color-primary-pressed)" />
		</view>
	</template>
</vx-section>

<vx-section title="发布状态" marker>
	<template #suffix>
		<view class="section-tags">
			<vx-tag size="sm" type="success" variant="soft" text="已发布" />
			<vx-tag size="sm" type="default" variant="soft" text="自动同步" />
		</view>
	</template>
</vx-section>

<vx-section size="lg" title="第一章 · 起点" description="2026 年 10 月 27 日" marker divider />

<vx-section clickable title="查看全部订单" description="整条可点，点击更新状态。" @click="openOrders" />
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | string | `''` | 标题；传默认插槽时忽略 |
| description | string | `''` | 标题下的补充说明；传 `suffix` 插槽时忽略 |
| size | `sm` \| `md` \| `lg` | `md` | 标题、说明、竖线和留白档位 |
| variant | `plain` \| `soft` | `plain` | 透明底，或带浅底和 `md` 圆角的标题条 |
| marker | boolean | `false` | 标题前的 3px 竖线 |
| divider | boolean | `false` | 标题内容下方的 1px 分割线 |
| clickable | boolean | `false` | 整条可点：按下变淡并抛 `click` |
| titleColor | string | `''` | 标题自定义颜色，字面值 |
| descriptionColor | string | `''` | 说明自定义颜色，字面值 |
| markerColor | string | `''` | 竖线自定义颜色，字面值 |
| dividerColor | string | `''` | 分割线自定义颜色，字面值 |

## 事件

| 事件 | 说明 |
| --- | --- |
| click | `clickable` 时点击整条触发，不带参数 |

## 插槽

| 插槽 | 说明 |
| --- | --- |
| default | 标题，替换 `title`；内容自己带字号和颜色 |
| prefix | 标题左侧图标、编号或品牌标记；和 `marker` 可以同时使用 |
| extra | 标题行右侧短操作，如「查看全部」；不冒泡到整条 |
| suffix | 说明区，替换 `description`；放标签、时间或自定义富文本 |

## 说明

- 标题 15 / 17 / 20，行高 22 / 24 / 28，字重 600；说明 `sm` / `md` 13 / 20，`lg` 15 / 22。
- `plain` 上下各留 4；`soft` 用浅底加 `md` 圆角和 8/12、12/16、16/24 的内边距，浅底上的说明单独调色保证 4.5:1。
- `marker` 3px 宽、高 14 / 16 / 20，胶囊圆头；只作区块标记，不用语义色装饰。
- `divider` 画在标题内容下方 8 / 8 / 12 处，不替代区块之间的 24 留白。
- `extra` 是独立目标，不冒泡到整条；静态标题栏不拦点击，也不加箭头暗示可点。
- 四个颜色 props 是字面值，要跟主题就传 `var(--vx-color-*)`。
- 标题栏不包内容、不加外部间距，内容紧跟其后。
- ThorUI `tui-section` 迁移：`descr` → `description`，`isLine` → `marker`，`color` → `titleColor`，`size` 改 `sm | md | lg`，`background` 用 `variant="soft"`。
