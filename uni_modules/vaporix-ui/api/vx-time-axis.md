# vx-time-axis

时间轴，按 `items` 从上到下画节点、竖线、标题、说明和时间。有 `title` 的是阶段，没有 `title` 的是同一阶段下的事件：事件缩成圆点，并和上一条贴得更近。不提供容器加子项的组合写法。

## 示例

```vue
<view class="page vx-theme-light">
	<vx-time-axis :items="logistics" />
</view>
```

```ts
const logistics = [
	{
		title: '已签收',
		description: '您的订单已由本人签收。感谢您在商城购物，欢迎再次光临。',
		time: '2019-05-01 18:48:26',
		icon: 'check',
		type: 'primary'
	},
	{
		title: '运输中',
		description: '您的订单已到达 XX【北京 XX 营业部】',
		time: '2019-05-01 16:17:32',
		icon: 'truck'
	},
	{ description: '您的订单已在 XX【北京 XX 营业部】收货完成', time: '2019-05-01 08:40:32' },
	{ description: '您的订单由 XXXX 送往 XX【北京 XX 营业部】', time: '2019-05-01 08:17:32' }
]
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | Array&lt;VxTimeAxisItem&gt; | `[]` | 记录，按从上到下的顺序排列；空数组不渲染 |
| size | `sm` \| `md` \| `lg` | `md` | 节点和文案档位 |
| lineColor | string | `''` | 竖线颜色，字面值；不传时用 `--vx-color-border` |

`items` 的每一项：

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | string | `''` | 阶段标题；不传时按事件渲染，和上一条贴得更近 |
| description | string | `''` | 说明文案，可以换行 |
| time | string | `''` | 时间或补充文案，组件不解析内容 |
| icon | VxIconName | — | 节点图标；不传时用圆点 |
| iconVariant | `regular` \| `fill` | `regular` | 图标字重 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `default` | 节点语义色 |

没有事件、插槽和方法。

## 说明

- 节点 20 / 24 / 28，事件圆点 6 / 8 / 10；阶段名 13 / 15 / 17 加 600 字重，说明 `sm` 13 / 20、`md` / `lg` 15 / 22，时间固定 13 / 20。
- 节点到内容 8 / 12 / 16；阶段之间留 24、事件之间留 12，下一条没有 `title` 时当前条目底部自动收紧。
- `type` 只表达状态：默认浅灰节点配次要灰图标，语义色用实心底配 `on-*`；没有 `icon` 时缩成圆点。
- 竖线 1px，两端收在首尾节点中心，单条记录不画线；`lineColor` 是字面值。
- 只承载阶段、事件和说明，不放按钮、表单和主操作，也不提供点击和横向时间轴。
- 从 ThorUI `tui-time-axis` 迁移：容器加子项换成 `items`，`content` / `node` 插槽换成 `title` / `description` / `time` / `icon`，节点颜色改用 `type`。
