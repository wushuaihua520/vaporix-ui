# vx-grid

宫格容器。负责排列、外框和四角裁切，列数、尺寸、内容和点击都在 `vx-grid-item` 上。`variant="card"` 是默认的描边卡片；`plain` 只保留 `surface` 底，适合放进已有卡片或浅色区块。

## 示例

```vue
<vx-grid>
	<vx-grid-item v-for="(entry, index) in entries" :key="entry.title" :columns="3" :index="index"
		:icon="entry.icon" :title="entry.title" @click="open(entry.title)" />
</vx-grid>

<vx-grid>
	<vx-grid-item :columns="3" :index="0" icon="wallet" title="钱包" />
	<vx-grid-item :columns="3" :index="1" icon="receipt" title="订单" />
	<vx-grid-item :columns="3" :index="2" icon="truck" title="物流" />
	<vx-grid-item :columns="3" :index="3" icon="headphones" title="客服" />
	<vx-grid-item :columns="3" :index="4" icon="heart" title="收藏" />
	<vx-grid-item :columns="3" :index="5" icon="settings" title="设置" />
</vx-grid>

<vx-grid variant="plain">
	<vx-grid-item :columns="2" :index="0" icon="grid-2x2" title="工作台" description="审批、日程和待办" />
	<vx-grid-item :columns="2" :index="1" icon="users" title="通讯录" description="同事和外部联系人" />
</vx-grid>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| variant | `card` \| `plain` | `card` | 描边卡片，或只保留 surface 底的平面宫格 |

## 插槽

| 插槽 | 说明 |
| --- | --- |
| default | 格子，通常放 `vx-grid-item` |

## 说明

- 容器只负责排列和外观；列数、尺寸和内容写在格子上，避免两处不同步。
- `card` 用 `surface` 底、1px 描边和 `md` 圆角并裁四角；`plain` 去掉描边和圆角。
- 不加阴影、渐变和外部间距；最后一行没排满时留白，剩余格子不拉伸。
