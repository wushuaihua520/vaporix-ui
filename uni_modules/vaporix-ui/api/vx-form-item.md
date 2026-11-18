# vx-form-item

表单项。只负责标题、必填星号、常驻说明和错误行；控件放进默认插槽，插槽暴露 `{ invalid, error }`，把 `invalid` 传给控件的同名属性即可。校验规则由 `libs/form.ts` 的 `runFormRules` 执行。

## 示例

```vue
<!-- 输入类控件：标题在控件内部，form-item 不再传 label，只接错误行 -->
<vx-form-item prop="email" :value="email" :rules="emailRules" help="用于接收发货通知">
	<template #default="{ invalid }">
		<vx-input v-model="email" label="邮箱" label-width="72px" :invalid="invalid" required
			placeholder="name@example.com" />
	</template>
</vx-form-item>

<!-- 非输入类控件：没有标题位，label 交给 form-item，星号也由它画 -->
<vx-form-item prop="notify" label="接收通知" :value="notify" :rules="notifyRules">
	<vx-switch v-model="notify" />
</vx-form-item>

<!-- 受控错误：服务端回包后写 error，清空后回到本地校验结果 -->
<vx-form-item prop="phone" :value="phone" :rules="phoneRules" :error="serverError" help="示例：13800138000">
	<template #default="{ invalid }">
		<vx-input v-model="phone" label="手机号" label-width="72px" :invalid="invalid" required />
	</template>
</vx-form-item>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| prop | string | `''` | 字段键，同组唯一；为空时只做布局，不参与校验 |
| value | string \| number \| boolean \| string[] | `''` | 要校验的值，和控件的 `v-model` 绑同一份数据 |
| rules | VxFormRule[] | `[]` | 见下方规则表；空数组表示只做布局 |
| label | string | `''` | 只有非输入类控件才传；输入类控件的标题在控件内部 |
| required | boolean \| null | `null` | 不传时按 `rules` 里有没有 `required: true` 推断；显式 `false` 可关掉星号 |
| help | string | `''` | 常驻说明，次要色；出现错误时被错误文案替换 |
| error | string | `''` | 受控错误文案，非空时以它为准，忽略本地校验结果 |

### rules

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| required | boolean | 必填。空值只跑这一项，不再继续跑格式规则 |
| min | number | 下限：字符串按长度、数字按数值、数组按元素个数 |
| max | number | 上限：同上 |
| len | number | 定长：字符串按长度、数字按数值相等、数组按元素个数 |
| pattern | string | 字符串正则，内部走 `new RegExp`；不直接传 RegExp 实例 |
| type | `phone` \| `email` \| `idcard` \| `url` \| `number` | 内置格式 |
| message | string | 失败文案；不传时用内置中文文案 |
| validator | `(value) => string \| Promise<string>` | 返回 `''` 通过，返回文案即失败；抛异常按失败处理 |

| 内置 type | 判定 |
| --- | --- |
| phone | `^1[3-9]\d{9}$`，默认「手机号格式不正确」 |
| email | `^[^\s@]+@[^\s@]+\.[^\s@]{2,}$`，默认「邮箱格式不正确」 |
| idcard | `^\d{17}[\dXx]$`，默认「身份证号格式不正确」 |
| url | `^https?:\/\/\S+$`，默认「链接格式不正确」 |
| number | `parseFloat` 后 `isFinite`，且整串必须是数字；默认「请输入数字」 |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| validate | 单项校验结束就抛一次，用于埋点和联动 | `(ok: boolean, message: string)` |

## 插槽

| 插槽 | 说明 |
| --- | --- |
| 默认插槽 | 控件内容，作用域 `{ invalid, error }`；把 `invalid` 传给控件的 `invalid` |

## 说明

- 空值：`''`、`null`、`undefined`、`false`、空数组和 `NaN`；`0` 是有效数值。空值只看 `required`，非必填直接通过。
- 非空值依次跑 `len` → `min` / `max` → `type` → `pattern` → `validator`，第一个失败即返回。
- `pattern` 写错按失败处理，不把配置错误抛给页面；`validator` 可返回 Promise，抛异常时用异常的 `message`。
- 受控 `error` 非空时跳过本地规则，清成空串后本地错误一起收掉。
- 标题归属只有一条规则：有标题位的控件（`vx-input`、`vx-textarea`、`vx-picker` / `vx-datetime` 的只读触发行）标题在控件内部，表单项不传 `label`；开关、复选、单选、评分、数字框这类没有标题位的控件传 `label`，由表单项画。
- `labelPosition="top"` 时标签独占一行，`labelWidth` 不生效。
- `help` 和错误共用一行，两者都没有时不占高度；错误行固定 13 / 20，单行省略。
- 禁用的项跳过校验，`@validate` 仍抛一次 `true`；插槽内容自己带尺寸和颜色。
