# vx-radio

单项。放在 `vx-radio-group` 里管自己的 value、文案、说明和颜色；单独使用时是布尔 `v-model`，外观固定 `md` / `primary` / `circle` / `start`。

## 示例

```vue
<vx-radio-group v-model="plan" layout="list" card>
	<vx-radio value="basic" label="基础版" description="个人使用" />
	<vx-radio value="pro" label="专业版">
		<template #extra>
			<vx-tag type="warning" variant="soft" size="sm" text="推荐" />
		</template>
	</vx-radio>
	<vx-radio value="team" label="团队版" disabled />
</vx-radio-group>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value | string | `''` | 选中时回传给分组的 value；分组里不能为空 |
| index | number | — | `v-for` 的循环下标。同一组都传了才按最大 index 认最后一项；缺一项仍按挂载顺序。静态项不用传 |
| label | string | `''` | 主文案；用默认插槽时忽略 |
| description | string | `''` | 主文案下的说明；用默认插槽时忽略 |
| modelValue | boolean | `false` | 单独使用时的选中状态；在分组里由分组接管 |
| disabled | boolean | `false` | 只停这一项 |
| color | string | `''` | 自定义选中色，字面值；圆圈改填充，对号样式直接改对号 |
| borderColor | string | `''` | 自定义未选中圆圈描边，字面值；对号样式不生效 |
| checkColor | string | `''` | 自定义对号色，字面值；优先于 `color` |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| change | 这一项被选中时触发，分组内也会抛 | `true` boolean |
| update:modelValue | 单独使用时 `v-model` 同步 | 新值 boolean |

## 插槽

| 插槽 | 说明 |
| --- | --- |
| 默认插槽 | 替换 `label` / `description`，用于富文案 |
| extra | 文案后方的补充内容；标记在行尾时正好在文案和标记之间，自己带颜色和字号 |

## 说明

- 横排单项视觉高度 32 / 40 / 48；`sm` / `md` 点击热区已外扩到 44（占位不变），`lg` 48 本身达标。列表行最小高度 44 / 48 / 52，整行可点。
- 单独用 `vx-radio` 时是布尔 `v-model`；要换档位或颜色仍要包一个分组。
- 单项 `disabled` 只停这一项，文字和圆圈转 `disabled-text`；圆圈模式的对号用 `surface`，只画对号时对号用 `disabled-text`。
- `color` / `borderColor` / `checkColor` 都是字面值，禁用时都不生效，对比度由业务保证。
- 单选是 `view` 组合，Web 端不进入 Tab 顺序；需要键盘完整操作时由外层提供入口或改用原生表单控件。
