# vx-checkbox-group

多项选择器的分组容器。包一组 `vx-checkbox`，`v-model` 绑选中的 value 数组；方框或只画对号，横排或列表，三档尺寸、六种语义色，支持可选上限。

## 示例

```vue
<template>
	<view class="page vx-theme-light">
		<vx-checkbox-group v-model="cities" layout="list" card :max="3">
			<vx-checkbox value="cn" label="中国" description="支持次日达" />
			<vx-checkbox value="us" label="美国" />
			<vx-checkbox value="ru" label="俄罗斯" />
		</vx-checkbox-group>
		<vx-checkbox-group v-model="channels" variant="check" placement="end" layout="list" card>
			<vx-checkbox value="sms" label="短信" />
			<vx-checkbox value="mail" label="邮件" />
			<vx-checkbox value="none" label="不通知" disabled />
		</vx-checkbox-group>
	</view>
</template>

<script setup>
	const cities = ref<string[]>(['cn'])
	const channels = ref<string[]>(['sms', 'mail'])
</script>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | `string[]` | `[]` | 选中项的 value 集合，支持 `v-model`；空数组表示未选中 |
| size | `'sm'` \| `'md'` \| `'lg'` | `'md'` | 标记、行高和文案档位 |
| type | `'primary'` \| `'success'` \| `'info'` \| `'warning'` \| `'danger'` \| `'default'` | `'primary'` | 选中标记的语义色 |
| variant | `'box'` \| `'check'` | `'box'` | 圆角方框加对号，或只画对号 |
| placement | `'start'` \| `'end'` | `'start'` | 标记在文案前还是行尾 |
| layout | `'inline'` \| `'list'` | `'inline'` | 横排换行，或一项一行 |
| divider | boolean | `true` | 列表项之间的 1px 分割线；横排忽略 |
| card | boolean | `false` | 列表收进 `surface` 卡片；横排忽略 |
| disabled | boolean | `false` | 整组禁用，所有项不响应点按 |
| max | number | `0` | 最多可选几项；`0` 不限，到上限后点未选项只抛 `exceed` |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| change | 勾选或取消一项后触发 | 新 value 数组 `string[]` |
| exceed | 到达 `max` 后点未选中项时触发，选中集合不变 | 上限 number |
| update:modelValue | `v-model` 同步 | 新 value 数组 |

## 插槽

| 插槽 | 说明 |
| --- | --- |
| 默认插槽 | `vx-checkbox` 列表；为空时不渲染 |

没有方法。选中集合由 `v-model` 维护，全选、反选和提交都由业务改数组。

## 说明

- `v-model` 是字符串数组，顺序按勾选先后追加；点已勾选项取消、点未勾选项追加，两者都抛 `change`。
- `max` 只拦新增勾选，取消不受限；到上限后未选项不转灰，由 `exceed` 弹提示。
- 方框是小圆角方形，和单选的正圆区分；三档 16 / 18 / 20，圆角 4 / 5 / 6，对号用旋转边框画。
- 横排项高 32 / 40 / 48，列表最小行高 44 / 48 / 52；列表最后一项自动不画分割线。
- 未选中方框用次要灰描边，选中填充取 `type` 语义色；列表按下铺 `surface-pressed`，横排只压透明度。
- 分组 `disabled` 停下全部，不抛 `change`。
- 从 ThorUI `tui-checkbox-group` 迁移：`change` 直接给新数组，选项上的 `checked` 并入分组的 `v-model`，`triggerGroup` / `name` 不再提供。
