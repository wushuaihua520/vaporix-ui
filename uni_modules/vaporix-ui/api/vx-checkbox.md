# vx-checkbox

多项中的一项。放在 `vx-checkbox-group` 里管 value、文案、说明和颜色；单独使用时是布尔 `v-model`，并支持部分选中。

## 示例

```vue
<vx-checkbox-group v-model="services" layout="list" card>
	<vx-checkbox value="photo" label="相册" description="已授权" />
	<vx-checkbox value="camera" label="相机" description="系统未授权" disabled />
	<vx-checkbox value="location" label="位置">
		<template #extra>
			<vx-tag type="primary" variant="soft" size="sm" text="推荐" />
		</template>
	</vx-checkbox>
</vx-checkbox-group>

<vx-checkbox :model-value="allPicked" :indeterminate="partialPicked" label="全选" @change="onToggleAll" />
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value | string | `''` | 勾选时回传给分组的 value；分组里不能为空 |
| index | number | — | `v-for` 的循环下标。同一组都传了才按最大 index 认最后一项；缺一项仍按挂载顺序。静态项不用传 |
| label | string | `''` | 主文案；用默认插槽时忽略 |
| description | string | `''` | 主文案下的说明；用默认插槽时忽略 |
| modelValue | boolean | `false` | 单独使用时的选中状态；在分组里由分组接管 |
| disabled | boolean | `false` | 只停这一项 |
| indeterminate | boolean | `false` | 部分选中：方框填充并画横线；只在单独使用、未选中且为 box 样式时生效 |
| color | string | `''` | 自定义选中色，字面值；方框改填充，对号样式直接改对号 |
| borderColor | string | `''` | 自定义未选中方框描边，字面值；对号样式不生效 |
| checkColor | string | `''` | 自定义对号和横线色，字面值；优先于 `color` |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| change | 这一项勾选状态变化时触发，分组内也会抛；被上限拦下不抛 | 新状态 boolean |
| update:modelValue | 单独使用时 `v-model` 同步 | 新值 boolean |

## 插槽

| 插槽 | 说明 |
| --- | --- |
| 默认插槽 | 替换 `label` / `description`，用于富文案 |
| extra | 文案后方的补充内容；标记在行尾时正好在文案和标记之间，自己带颜色和字号 |

## 说明

- 横排单项视觉高度 32 / 40 / 48；`sm` / `md` 点击热区已外扩到 44（占位不变），`lg` 48 本身达标。列表行最小高度 44 / 48 / 52，整行可点。
- `indeterminate` 只用于单独使用的「全选」类开关：父级根据已选数量算出 `checked` 和 `indeterminate`，在 `change` 里全选或清空。分组里的每个 value 非勾即否，不读该属性。
- 单项 `disabled` 只停这一项；文字和方框转 `disabled-text`，选中填充用 `disabled-text`、对号用 `surface`，只画对号时对号用 `disabled-text`。
- 方框模式里 `color` 只改填充，对号仍按 `type` 取 `on-*`，需要一起改时同时传 `checkColor`；三者都是字面值，禁用时都不生效。
- 自绘 `view` 不进入原生表单，Web 端也不进 Tab 顺序；提交和键盘入口由外层表单负责。
