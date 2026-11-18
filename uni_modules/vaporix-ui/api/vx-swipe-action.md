# vx-swipe-action

滑动菜单。列表行向左滑，右侧露出两三条动作；内容由默认插槽决定，点内容、点动作或滑回来都能收起。

## 示例

```vue
<vx-swipe-action v-for="order in orders" :key="order.id" :name="order.id" :actions="actions"
	@select="onSelect">
	<vx-list-cell :title="order.title" :description="order.meta" :value="order.status" :divider="false" />
</vx-swipe-action>

<vx-swipe-action v-model:open="open" :actions="actions" :close-on-select="false" />
<vx-swipe-action multiple :actions="actions" />
<vx-swipe-action :extra-width="132">
	<vx-list-cell title="自定义菜单" :divider="false" />
	<template #extra>
		<view class="custom-menu">
			<view class="custom-menu__btn" @click="onFavorite"><vx-icon name="star" /></view>
			<view class="custom-menu__btn" @click="onDelete"><vx-icon name="trash" /></view>
		</view>
	</template>
</vx-swipe-action>
```

`actions` 是 `{ text, type?, icon?, width?, disabled?, bgColor?, color? }` 数组，1–3 条；没有 `actions` 时改用 `extra` 插槽自己画菜单。

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| name | string | `''` | 这一行的业务标识，原样带回 `select` / `change` |
| actions | `VxSwipeActionItem[]` | `[]` | 右侧动作，1–3 条；空数组时改用 `extra` 插槽 |
| open | boolean | `false` | 是否展开，支持 `v-model:open` |
| swipeable | boolean | `true` | 手势滑出菜单；`false` 只停手势，程序控制仍可用 |
| closeOnSelect | boolean | `true` | 点动作后收起；`false` 时保持展开 |
| multiple | boolean | `false` | 允许同组同时展开多行；默认展开一行时收起同组其他行 |
| group | string | `''` | 互斥分组，默认按页面：不传时同页面的行共用一个组；一个页面上多个列表要各管各的，传不同的值 |
| extraWidth | number | `80` | `extra` 插槽的露出宽度，单位 px；没有 actions 且插槽存在时生效 |

`VxSwipeActionItem`：

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | string | — | 动作文案，建议 2–3 个字，单行省略 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `default` | 语义色；default 用浅灰底和正文色 |
| icon | `VxIconName` | — | 可选字体图标，排在文案上方 |
| iconVariant | `regular` \| `fill` | `regular` | 图标字重；扩展图标要先引入 `icons-extend.css` |
| width | number | `72` | 这一项的宽度，单位 px；小于等于 0 时按默认值 |
| disabled | boolean | `false` | 禁用，不响应点击，不抛 `select` |
| bgColor | string | `''` | 自定义底色，字面值 |
| color | string | `''` | 自定义文字和图标颜色，字面值；禁用时不生效 |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| select | 点击可用的动作时触发，默认先收起 | 索引 number、动作项、`name` string |
| change | 组件内展开状态变化时触发；外部改模型不回抛 | `open` boolean、`name` string |
| update:open | `v-model:open` 同步 | `open` boolean |

## 插槽

| 插槽 | 说明 |
| --- | --- |
| default | 行内容，高度决定整行高度；通常放 `vx-list-cell` 或自己的行布局 |
| extra | 自定义操作菜单，`actions` 为空时使用；宽度由 `extraWidth` 决定，点击默认收起 |

## 方法

| 方法 | 说明 |
| --- | --- |
| open() | 展开菜单，不受 `swipeable` 限制 |
| close() | 收起菜单；已收起时不重复抛 `change` |
| toggle() | 在展开和收起之间切换 |

## 说明

- 动作宽 72、`extra` 宽 80；菜单固定在右侧、压在内容下面，不要把菜单放进被平移的内容容器。
- 左滑超过动作总宽一半、或 24px / 250ms 内的快速轻扫展开；拖动不挂过渡，松手用 220ms。
- 横向超过 8px 且大于纵向后才接管手势，并拦住这一层外层滚动；纵向先走则整段还给页面。
- 展开期间点内容只收起，不触发下层行点击；滑动结束补 300ms 点击保护。
- 默认只展开一行：不传 `group` 时同页面共用一个组，同页多个列表各传一个值；`multiple=true` 允许多行同时展开。
- 没有 `actions` 也没有 `extra` 时不渲染菜单；`swipeable=false` 只停手势，程序控制仍可用。
- 删除等不可逆动作先收起菜单，再由业务用 `vx-modal` 确认；组件只抛 `select`。
- 从 ThorUI `tui-swipe-action` 迁移：`@click` → `@select`，`actions[].name` → `text`，`closable` → `closeOnSelect`，`forbid` → `swipeable`，`params` → `name`；`showMask` 换成 `multiple`。
