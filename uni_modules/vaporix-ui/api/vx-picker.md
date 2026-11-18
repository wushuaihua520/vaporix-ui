# vx-picker

联动选择。底部弹层里的多列滚轮，`options` 用树形数据表达层级，列数由 `children` 的深度决定。`v-model` 存每一级的值，打开时停在保存过的路径；滚动只改草稿，点确定才写回。支持禁用选项、空状态、自定义分隔符、遮罩和 `open()` / `close()`。

## 示例

```vue
<vx-input :model-value="regionText" label="所在地区" label-width="88px" readonly arrow
	placeholder="请选择地区" @click="regionVisible = true" />

<vx-picker v-model="regionValues" v-model:show="regionVisible" :options="regions" title="选择地区"
	@confirm="onRegionConfirm" />

<vx-picker v-model="roomValues" v-model:show="roomVisible" :options="buildings" title="选择房间" />

<vx-picker v-model="regionValues" v-model:show="regionVisible" :options="regions" separator=" · "
	mask-color="rgba(43, 107, 224, 0.28)" />
```

```ts
import { VxPickerOption, VxPickerResult, vxPickerText } from '@/uni_modules/vaporix-ui/libs/picker'

const regions: VxPickerOption[] = [
	{
		text: '广东省',
		value: '440000',
		children: [
			{
				text: '深圳市',
				value: '440300',
				children: [{ text: '南山区', value: '440305' }]
			}
		]
	}
]
const regionValues = ref<string[]>([])
const regionVisible = ref(false)
const regionText = computed(() => regionValues.value.length > 0
	? vxPickerText(regions, regionValues.value, ' / ')
	: '')

const onRegionConfirm = (result: VxPickerResult) => {
	console.log(result.text) // 广东省 / 深圳市 / 南山区
	console.log(result.values) // ['440000', '440300', '440305']
}
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | `string[]` | `[]` | 每一级已确定的值，支持 `v-model` |
| show | boolean | `false` | 显示面板，支持 `v-model:show` |
| options | `VxPickerOption[]` | `[]` | 树形选项，`children` 决定下一列 |
| title | string | `''` | 头部标题，可选；不可选时换成 `invalidText` |
| cancelText | string | `'取消'` | 取消按钮文案 |
| confirmText | string | `'确定'` | 确定按钮文案 |
| separator | string | `' / '` | `result.text` 的分隔符 |
| emptyText | string | `'暂无可选项'` | 空数据提示 |
| invalidText | string | `'该选项不可选'` | 当前路径含不可选项时的头部提示 |
| maskClosable | boolean | `true` | 点遮罩关闭并抛 `cancel` |
| maskColor | string | `''` | 自定义遮罩色，字面值 |
| zIndex | number | `1000` | 浮层层级 |

`options` 的节点是 `VxPickerOption`：

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | 展示文本；`value` 省略时也用它做值 |
| value | string | 否 | 业务值，省略时用 `text` |
| children | `VxPickerOption[]` | 否 | 下一列；空数组和省略等价 |
| disabled | boolean | 否 | 不可选；仍显示，停上去不能确认 |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| confirm | 点确定时触发，面板同时收起 | `VxPickerResult` |
| cancel | 点取消或可关闭的遮罩时触发 | 无 |
| change | 滚动停下或 options 重新对齐后，路径可选且真的变化时触发 | `VxPickerResult` |
| update:show | `v-model:show` 同步，收起时回传 `false` | boolean |
| update:modelValue | `v-model` 同步，只在确定时回传 | `string[]` |

`VxPickerResult` 有 `values` / `texts` / `indices` / `text` 四个字段：前三个逐级对应，`text` 按 `separator` 拼好。

## 方法

| 方法 | 说明 |
| --- | --- |
| open() | 打开面板 |
| close() | 立刻收起，不抛 `cancel`，不改 `v-model` |

## 说明

- 节点固定 `text` / `value` / `children` / `disabled`，业务字段不同时先映射一份；值统一用字符串。
- 列数等于当前路径深度，分支提前结束时少一列，不补空列；4 级起文字收一档到 13 / 20。
- 打开时按 value 逐级定位，命中不可选项时挪到最近的可选项；打开期间父级改 `v-model` 不跟，要换位置先 `close()`。
- 滚动只改草稿，点确定才写回并抛 `confirm`；取消、遮罩和 `close()` 都不动已提交的值。
- `change` 只在路径可选且真的变化时抛一次；异步补下一级时按当前路径重新对齐。
- 不可选项留在滚轮里转灰，停上去时头部换成 `invalidText`、确定置灰；`options` 为空时留一块和滚轮等高的空状态。
- 头部高 52，滚轮可视高度 220、每行 44；面板最大宽度 480，层级 1000。
- 挂在页面根节点，同一屏只开一个；两处用两个实例，各传一份 `options`。
- 从 ThorUI `tui-picker` 迁移：`pickerData` → `options`，`layer` 由树深度决定；`@change` 参数改成 `{ values, texts, indices, text }`，`@hide` → `@cancel`，`picker` 事件 → `@confirm`；`valueField` / `textField` / `childrenField` 不再支持。
