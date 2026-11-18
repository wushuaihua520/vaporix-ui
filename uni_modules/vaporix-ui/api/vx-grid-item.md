# vx-grid-item

宫格项。按 `columns` 占宽，画图标、主文案、说明和角标；`index` 从 0 开始按行递增，决定第一行、第一列的内部线。整格默认可点，按下用 `surface-pressed` 底并抛 `click`；传了 `bgColor` 时改用整体透明度。

## 示例

```vue
<vx-grid>
	<vx-grid-item :columns="3" :index="0" icon="wallet" title="钱包" description="余额与账单"
	 @click="openWallet" />
	<vx-grid-item :columns="3" :index="1" icon="receipt" title="订单" description="待付款和售后"
	 @click="openOrders" />
	<vx-grid-item :columns="3" :index="2" icon="headphones" title="客服" description="在线咨询"
	 @click="openSupport" />
</vx-grid>

<vx-grid>
	<vx-grid-item :columns="4" :index="0" icon="wallet" title="钱包" icon-variant="fill" />
	<vx-grid-item :columns="4" :index="1" image="/static/demo/card/grid-1.jpg" title="相册" />
	<vx-grid-item :columns="4" :index="2" title="会员">
		<template #icon>
			<view class="grid-tile">
				<vx-icon name="star" size="lg" type="primary" />
			</view>
		</template>
	</vx-grid-item>
	<vx-grid-item :columns="4" :index="3" icon="bell" title="消息">
		<template #extra>
			<vx-badge :value="8" />
		</template>
	</vx-grid-item>
	<vx-grid-item :columns="4" :index="4" icon="check-circle" title="可点击" />
	<vx-grid-item :columns="4" :index="5" icon="eye" title="静态格" :clickable="false" />
	<vx-grid-item :columns="4" :index="6" icon="lock" title="禁用格" disabled />
	<vx-grid-item :columns="4" :index="7" icon="more-horizontal" title="更多" />
</vx-grid>

<vx-grid variant="plain">
	<vx-grid-item :columns="5" :index="0" size="sm" icon="camera" title="拍照" color="#8a2b33"
		icon-variant="fill" bg-color="#fdeaea" :divider="false" />
	<vx-grid-item :columns="5" :index="1" size="sm" icon="image" title="相册" color="#8a2b33"
		icon-variant="fill" bg-color="#fdeaea" :divider="false" />
	<vx-grid-item :columns="5" :index="2" size="sm" icon="video" title="视频" color="#8a2b33"
		icon-variant="fill" bg-color="#fdeaea" :divider="false" />
	<vx-grid-item :columns="5" :index="3" size="sm" icon="mic" title="录音" color="#8a2b33"
		icon-variant="fill" bg-color="#fdeaea" :divider="false" />
	<vx-grid-item :columns="5" :index="4" size="sm" icon="file" title="文件" color="#8a2b33"
		icon-variant="fill" bg-color="#fdeaea" :divider="false" />
</vx-grid>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| columns | number | `3` | 这一组的列数，2–5，超出按 3；同一组保持一致 |
| index | number | `0` | 格子序号，从 0 开始按行递增；决定第一行、第一列的内部线 |
| title | string | `''` | 主文案，单行省略 |
| description | string | `''` | 主文案下的说明，可以换行 |
| icon | VxIconName | — | 字体图标；传了 `image` 或 `icon` 插槽时忽略 |
| iconVariant | `regular` \| `fill` | `regular` | 字体图标字重；图片和 icon 插槽不受影响 |
| image | string | `''` | 图片地址，优先于字体图标；`icon` 插槽优先于两者 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `default` | 字体图标的语义色；default 显示为次要灰 |
| size | `sm` \| `md` \| `lg` | `md` | 最小高度、内边距、图标、图片和文案档位 |
| divider | boolean | `true` | 画上、左内部线；第一行、第一列不画 |
| clickable | boolean | `true` | 按下有底色并抛 `click`；静态格传 `false` |
| disabled | boolean | `false` | 组件内容转灰，不抛 `click` |
| bgColor | string | `''` | 格子底色，字面值；设置后按下改用整体透明度 |
| color | string | `''` | 主文案和字体图标的颜色，字面值；传了就不看 type |

## 事件

| 事件 | 说明 |
| --- | --- |
| click | 可点击格被点按时触发；静态格和禁用格不触发，不带参数 |

## 插槽

| 插槽 | 说明 |
| --- | --- |
| default | 替换图标、主文案和说明；宽度、内边距和点击仍由格子负责 |
| icon | 替换图标；主文案和说明仍按 props 渲染 |
| extra | 右上角角标；放徽章、短标签或状态 |

## 说明

- 列宽 50 / 33.33 / 25 / 20%，含 1px 内部线，不另加列间距；第一行不画上边线，第一列不画左边线，序号跳号会算错。
- 最小高度 72 / 88 / 104，内边距 8 / 12 / 16；主文案 13 / 15 / 17 单行省略，说明固定 13 / 20。
- 字体图标 18 / 22 不套底色，默认次要灰；普通入口不传 `type`，只有状态才上语义色。
- 图片 32 / 40 / 48 按 `aspectFit` 展示，圆角跟 `size` 取 6 / 8 / 10；`icon` 插槽内容自己定尺寸和颜色。
- 有 `bgColor` 时按下改用整体透明度；`color` 同时改主文案和图标，说明仍是次要灰。
- 不需要外框时容器写 `variant="plain"`，连内部线也去掉就每个格子写 `:divider="false"`。
- 静态格关掉 `clickable` 后没有按下态也不抛 `click`；可点击格子里不要再放按钮和链接，格内单独操作自己 `@click.stop`。
- `extra` 贴右上角，不占内容高度；格子是 `view`，Web 端不进 Tab 顺序。
