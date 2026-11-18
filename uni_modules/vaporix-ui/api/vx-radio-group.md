# vx-radio-group

单项选择器的分组容器。包一组 `vx-radio`，`v-model` 绑选中的 value；横排或列表两种排布，圆圈标记或只画对号，三档尺寸和六种语义色。

## 示例

```vue
<template>
	<view class="page vx-theme-light">
		<vx-radio-group v-model="city" layout="list" card>
			<vx-radio value="cn" label="中国" description="支持次日达" />
			<vx-radio value="us" label="美国" />
			<vx-radio value="ru" label="俄罗斯" />
		</vx-radio-group>
		<vx-radio-group v-model="channel" type="success">
			<vx-radio value="sms" label="短信" />
			<vx-radio value="mail" label="邮件" />
			<vx-radio value="none" label="不通知" disabled />
		</vx-radio-group>
	</view>
</template>

<script setup>
	const city = ref('cn')
	const channel = ref('sms')
</script>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | string | `''` | 选中项的 value，支持 `v-model`；空串表示未选中 |
| size | `'sm'` \| `'md'` \| `'lg'` | `'md'` | 标记、行高和文案档位 |
| type | `'primary'` \| `'success'` \| `'info'` \| `'warning'` \| `'danger'` \| `'default'` | `'primary'` | 选中标记的语义色 |
| variant | `'circle'` \| `'check'` | `'circle'` | 圆圈加对号，或只画对号 |
| placement | `'start'` \| `'end'` | `'start'` | 标记在文案前还是行尾 |
| layout | `'inline'` \| `'list'` | `'inline'` | 横排换行，或一项一行 |
| divider | boolean | `true` | 列表项之间的 1px 分割线；横排忽略 |
| card | boolean | `false` | 列表收进 `surface` 卡片；横排忽略 |
| disabled | boolean | `false` | 整组禁用，所有项不响应点按 |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| change | 用户选中另一项时触发；点已选中项不抛 | 新 value string |
| update:modelValue | `v-model` 同步 | 新 value string |

## 插槽

| 插槽 | 说明 |
| --- | --- |
| 默认插槽 | `vx-radio` 列表；为空时不渲染 |

没有方法。选中值由 `v-model` 维护，程序化修改直接改绑定值。

## 说明

- `v-model` 是字符串，数字 id 先转成字符串；点击已选中项不重复抛 `change`，空 `value` 的项点不动。
- 横排项高 32 / 40 / 48，列表最小行高 44 / 48 / 52；标记 16 / 18 / 20，比文案大 2px。
- 横排文案 14 / 16 / 18，列表文案 13 / 15 / 17，说明固定 13 / 20，两组档位不互相换算。
- 未选中圆圈用次要灰描边，选中填充取 `type` 语义色，对号取 `on-*`。
- 列表最后一项自动不画分割线；`card` 只对列表生效；动态列表要给每项传 `index`。
- 整组 `disabled` 停下全部；没有 `readonly`，展示已有结果用 `disabled` 并补说明。
- 从 ThorUI `tui-radio-group` 迁移：分组和选项拆成两个组件，选项上的 `checked` 并入分组的 `v-model`，`isCheckMark` 换成 `variant="check"`，`scaleRatio` 换成 `size`。
