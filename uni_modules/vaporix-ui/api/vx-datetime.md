# vx-datetime

日期时间选择器。底部弹层里的滚轮，`mode` 决定出现哪几列（年、月、日、时、分、秒），默认年月日加时分。打开时停在已选值，滚动只改草稿，点确定才写回 `v-model`。支持年份区间、分钟 / 秒步长、单位置顶和自定义输出格式。`ref` 上暴露 `open()` / `close()`。

## 示例

```vue
<vx-datetime v-model="bookDate" v-model:show="dateVisible" mode="date" title="选择预约日期" />

<vx-datetime v-model="bookTime" v-model:show="timeVisible" mode="time" format="HH:mm" />

<vx-datetime v-model="birthday" v-model:show="birthdayVisible" mode="date" :start-year="1950"
	:end-year="2026" />

<vx-datetime v-model="remindAt" v-model:show="remindVisible" :minute-step="5" unit-position="top" />
```

`mode` 决定列数和默认格式，取值见下表；`v-model` 的写法跟着 `mode` 走。

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | string | `''` | 已确定的值，支持 `v-model`；写法按 `mode` |
| show | boolean | `false` | 显示面板，支持 `v-model:show` |
| mode | `VxDatetimeMode` | `datetime` | 选择模式，决定出现哪几列 |
| title | string | `''` | 头部标题，可选 |
| cancelText | string | `'取消'` | 取消按钮文案 |
| confirmText | string | `'确定'` | 确定按钮文案 |
| startYear | number | `1980` | 年份下限，收口到 1000–2999 |
| endYear | number | `2050` | 年份上限 |
| minuteStep | number | `1` | 分钟步长，1–30 |
| secondStep | number | `1` | 秒步长，1–30 |
| unitPosition | `inline` \| `top` | `inline` | 单位跟数值后面，或单独一行 |
| format | string | `''` | 输出格式，不传按 `mode` |
| maskClosable | boolean | `true` | 点遮罩关闭并抛 `cancel` |
| maskColor | string | `''` | 自定义遮罩色，字面值 |
| zIndex | number | `1000` | 浮层层级 |

`mode` 的取值和默认格式：

| 值 | 列 | 默认格式 |
| --- | --- | --- |
| `year` | 年 | `YYYY` |
| `year-month` | 年、月 | `YYYY-MM` |
| `month-day` | 月、日 | `MM-DD` |
| `date` | 年、月、日 | `YYYY-MM-DD` |
| `date-hour` | 年、月、日、时 | `YYYY-MM-DD HH` |
| `datetime` | 年、月、日、时、分 | `YYYY-MM-DD HH:mm` |
| `datetime-second` | 年、月、日、时、分、秒 | `YYYY-MM-DD HH:mm:ss` |
| `time` | 时、分 | `HH:mm` |
| `time-second` | 时、分、秒 | `HH:mm:ss` |
| `minute-second` | 分、秒 | `mm:ss` |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| confirm | 点确定时触发，面板同时收起 | 格式化后的 string |
| cancel | 点取消或可关闭的遮罩时触发 | 无 |
| change | 滚动停止、值真的变化时触发 | 格式化后的 string |
| update:show | `v-model:show` 同步，收起时回传 `false` | boolean |
| update:modelValue | `v-model` 同步，只在确定时回传 | string |

## 方法

| 方法 | 说明 |
| --- | --- |
| open() | 打开面板 |
| close() | 立刻收起，不抛 `cancel`，不改 `v-model` |

## 说明

- 面板贴底、只圆上两角，最大宽度 480px；底部安全区由面板内边距承担。
- 头部高 52：取消用次要色、确定用主色，标题 17 / 24 / 600 居中，太长单行省略。
- 滚轮每行 44、可视区五行，指示器高度必须等于行高；行文字 15 / 22，选中加 600 字重，六列时收一档到 13 / 20。
- 暗色下原生蒙层会在两端发白，组件已换成透明，选中行靠字重和颜色区分。
- 打开时把 `v-model` 解析成草稿，读不出来或超出年份区间时回落到当前时间 / 区间边界。
- 滚动只改草稿，点确定才写回；取消、遮罩和 `close()` 都不动已提交的值。
- 天数跟着年月走，换月换年时选中的日超出当月会收口。
- `format` 认 `YYYY` / `MM` / `DD` / `HH` / `mm` / `ss`，其余字符原样保留；只改输出文本，不做时区换算。
- 挂在页面根节点，层级 1000，低于弹框；同一屏只开一个。
- 从 ThorUI `tui-datetime` 迁移：数字 `type` 换成 `mode`（`1` → `datetime`、`2` → `date`、`4` → `time` 等），`setDateTime` 换成 `v-model`，`hoursData` / `minutesData` 换成 `minuteStep` / `secondStep`，`unitTop` 换成 `unit-position="top"`；`confirm` 只抛格式化后的字符串。
