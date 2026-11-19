# vx-switch

开关选择器。`v-model` 绑布尔值，点按立刻回写并抛 `change`；支持三档尺寸、六种语义色、单行或整行、整行点击、加载、禁用和四个自定义颜色。开关默认在文案后，没有文案时是一只独立开关。

## 示例

```vue
<template>
	<view class="page vx-theme-light">
		<vx-switch v-model="notify" label="消息通知" @change="onNotify" />
		<vx-card :body-padded="false">
			<vx-switch v-model="renew" layout="list" label="自动续费" description="到期前 3 天自动扣款" divider />
			<vx-switch v-model="quiet" layout="list" label="免打扰" description="22:00 至次日 8:00 不推送" divider>
				<template #extra>
					<vx-tag type="primary" variant="soft" size="sm" text="推荐" />
				</template>
			</vx-switch>
			<vx-switch v-model="sync" layout="list" label="同步通讯录" />
		</vx-card>
	</view>
</template>

<script setup>
	const notify = ref(true)
	const renew = ref(true)
	const quiet = ref(false)
	const sync = ref(false)
	const onNotify = (value: boolean) => {
		// value 是切换后的布尔值
	}
</script>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | boolean | `false` | 开关状态，支持 `v-model` |
| size | `'sm'` \| `'md'` \| `'lg'` | `'md'` | 轨道、滑块、加载圈、行高和文案档位 |
| type | `'primary'` \| `'success'` \| `'info'` \| `'warning'` \| `'danger'` \| `'default'` | `'primary'` | 打开状态的语义色 |
| label | string | `''` | 主文案；用默认插槽时忽略 |
| description | string | `''` | 主文案下的说明；用默认插槽时忽略 |
| layout | `'inline'` \| `'list'` | `'inline'` | 单行，或一项一行并让整行可点 |
| placement | `'start'` \| `'end'` | `'end'` | 轨道在文案前还是行尾 |
| divider | boolean | `false` | `list` 下画当前行底部的 1px 分割线；最后一行不要打开 |
| disabled | boolean | `false` | 停用整只开关，不响应点按，也不抛 `change` |
| loading | boolean | `false` | 请求进行中：滑块里显示缺口圆环并拦下点击 |
| color | string | `''` | 自定义打开轨道色，字面值；滑块仍按 `type` 取 `on-*` |
| trackColor | string | `''` | 自定义关闭轨道色，字面值 |
| thumbColor | string | `''` | 自定义滑块底色，字面值；两种状态都生效 |
| borderColor | string | `''` | 自定义关闭滑块的描边色，字面值；打开时不生效 |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| change | 用户切换后触发；加载和禁用时不抛 | 新状态 boolean |
| update:modelValue | `v-model` 同步 | 新状态 boolean |

## 插槽

| 插槽 | 说明 |
| --- | --- |
| 默认插槽 | 替换 `label` / `description`，用于带图标或两行排版的富文案 |
| extra | 文案后方的补充内容；轨道在行尾时正好在文案和轨道之间，自己带颜色和字号 |

没有方法。状态由 `v-model` 维护，程序化修改直接改绑定值。

## 说明

- `v-model` 是布尔值，点按立刻写回并抛 `change(value)`；加载和禁用都不抛。
- `layout="list"` 一行一项，最小行高 44 / 48 / 52，整行可点；`divider` 控制当前行底部 1px 线，最后一行关掉。
- 单行视觉高度 32 / 40 / 48，文案 14 / 16 / 18；`sm` / `md` 点击热区已外扩到 44（占位不变），`lg` 48 本身达标。列表文案 13 / 15 / 17，说明固定 13 / 20。
- 打开轨道用语义色、滑块取 `on-*`；关闭轨道用 `default-soft`，滑块加 1px 描边。位移等于轨道宽减滑块再减 4。
- `loading` 在滑块里画半圈缺口，加载期间不写模型也不抛 `change`。
- `disabled` 把文字、轨道、滑块和描边一起转灰；没有 `readonly`，展示已有结果用 `disabled` 并补说明。
- 四个颜色 props 都是字面值，禁用时都不生效；`extra` 点它会触发整行切换，需要独立操作时加 `@click.stop`。
- 从 ThorUI `tui-switch` 迁移：`checked` → `modelValue`，`scaleRatio` → `size`，`change(e)` → `change(value)`；`borderColor` 拆成 `trackColor` 和 `borderColor`，`type="checkbox"` 改用 `vx-checkbox`。
