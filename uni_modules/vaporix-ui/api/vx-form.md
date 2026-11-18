# vx-form

表单容器。把一组 `vx-form-item` 收进来，按注册顺序串行校验；`validate()` 失败时可以把页面滚到第一个错误项。组件不托管数据，也不内置提交按钮：业务的值仍在各控件的 `v-model` 上，提交由页面调 `validate()` 后自己处理。

## 示例

```vue
<vx-form ref="formRef" label-width="80px" :scroll-to-error="true">
	<vx-form-item prop="phone" :value="model.phone" :rules="phoneRules">
		<template #default="{ invalid }">
			<vx-input v-model="model.phone" label="手机号" label-width="80px" type="number"
				:invalid="invalid" required clearable placeholder="请输入手机号" />
		</template>
	</vx-form-item>
	<vx-form-item prop="notify" label="接收通知" :value="model.notify" :rules="notifyRules">
		<vx-switch v-model="model.notify" />
	</vx-form-item>
</vx-form>
```

提交时 `const passed = await formRef.value.validate()`，通过后再发请求或跳转。

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| labelWidth | string | `''` | 整组标签宽。不传时左侧宽取 `--vx-form-label-width`（80px），不写行内、不警告；传了带单位的值才写行内盖过。纯数字在开发阶段提示一次。只影响 `labelPosition="left"` 且有 `label` 的项 |
| labelPosition | `left` \| `top` | `left` | 标签在左还是在上；`top` 时标签独占一行 |
| size | `sm` \| `md` \| `lg` | `md` | 标签的字号和行距档位，下发给每个 `vx-form-item` |
| disabled | boolean | `false` | 整组禁用：校验跳过，星号仍显示；控件自己的禁用态由业务传给控件 |
| scrollToError | boolean | `true` | 校验失败后滚到第一个错误项；量不到位置时静默跳过 |

## 方法

| 方法 | 说明 |
| --- | --- |
| validate() | 按注册顺序串行校验，遇到第一个失败立即停止并返回 `false`；`scrollToError` 打开时滚过去 |
| validateField(prop) | 只校验一项，返回 `Promise<boolean>`；不自动滚动，适合输入框的 `change` / `blur`；prop 没有匹配项时开发阶段提示一次，仍返回 `true` |
| clearValidate(prop?) | 不传清全部，只清错误态，不碰业务数据；受控 `error` 仍由父级改 prop 收起 |

## 说明

- 不提供 `@submit` / `@fail`，也不接收 `model`：值仍在各控件的 `v-model` 上，事件没有触发源，只留方法。
- 项在挂载时向容器注册，卸载时摘除；`prop` 为空只做布局，同一个 `prop` 只认先注册者。
- `validate()` 串行不并发，前一项失败时不启动后一项，错误定位也不会被后面的项抢走。
- 整组 `disabled` 时跳过校验，星号仍显示；字段单独不可编辑时不要给它 `rules`。
- 容器不画底色、描边和外部间距，项与项之间的距离由页面或卡片决定。
- 平台差异：Web 的错误文案有一层 `aria-live` 播报；三端定位都靠失败项回传的矩形，外层是 `vx-page` 时滚它的滚动区，否则调 `uni.pageScrollTo`。
