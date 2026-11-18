# vx-list-view

列表分组。标题在卡片外，右侧可放「查看全部」；行由 `vx-list-cell` 提供。`variant="plain"` 去掉描边和圆角，适合直接落在页面底色上。

## 示例

```vue
<vx-list-view title="账户与订单" description="今天有 2 笔待付款">
	<vx-list-cell title="我的钱包" value="¥128.00" arrow @click="openWallet" />
	<vx-list-cell title="待付款订单" value="2 笔" arrow @click="openOrders" />
	<vx-list-cell title="收货地址" value="上海市浦东新区" arrow :divider="false" @click="openAddress" />
</vx-list-view>

<vx-list-view title="通知设置" variant="plain">
	<vx-list-cell title="系统通知" value="已开启" arrow @click="toggleSystem" />
	<vx-list-cell title="营销推送" value="已关闭" arrow :divider="false" @click="toggleMarketing" />
</vx-list-view>

<vx-list-view title="最近消息">
	<template #extra>
		<view class="list-action" @click="openMessages">
			<text class="list-action__text">查看全部</text>
		</view>
	</template>
	<vx-list-cell title="呼噜猪" description="上线打游戏了！" :divider="false">
		<template #prefix>
			<vx-icon name="message-circle" size="lg" type="primary" />
		</template>
	</vx-list-cell>
</vx-list-view>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | string | `''` | 分组标题，显示在卡片外 |
| description | string | `''` | 标题下的补充说明 |
| size | `sm` \| `md` \| `lg` | `md` | 标题区左右内边距。默认和 `lg` 为 16，`sm` 为 12，和同档列表行对齐。不传给里面的行 |
| variant | `card` \| `plain` | `card` | 描边卡片，或不带描边和圆角的平面分组 |

## 插槽

| 插槽 | 说明 |
| --- | --- |
| default | 分组内容，通常放 `vx-list-cell` |
| extra | 标题右侧的操作，颜色和字号自己带 |

## 说明

- 分组只提供标题与外观，不负责行的内容和点击。
- `card` 用 `surface` 底、1px 描边和 `md` 圆角；`plain` 只保留底色。
- 标题 15 / 22 / 500，说明 13 / 20 次要色；标题在卡片外，默认和 `lg` 左右缩进 16，`sm` 为 12。
- 分组最后一行传 `:divider="false"`，避免和卡片底边叠成两条；分组之间留 24。
- 卡片分组会裁掉溢出，行里不要放需要越出卡片的浮层。
