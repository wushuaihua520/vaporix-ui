# vx-calendar

日历。按周排布的月历，`mode="single"` 选一个日期，`mode="range"` 点两下选一段区间。弹层模式贴在屏幕底部，不写 `popup` 就平铺在页面里。支持农历、可选范围、翻月方式、区间文字、日期标记和语义色。`ref` 上暴露 `open()` / `close()` / `confirm()`。

## 示例

```vue
<vx-calendar v-model="checkIn" v-model:show="stayVisible" popup title="选择入住日期" />

<vx-calendar v-model="birthday" v-model:show="birthdayVisible" popup show-lunar
	min-date="1950-01-01" max-date="2026-12-31" />

<vx-calendar v-model:start="tripStart" v-model:end="tripEnd" v-model:show="tripVisible" popup
	mode="range" title="选择行程日期" start-text="出发" end-text="返程" />

<vx-calendar v-model="value" :marks="marks" show-lunar />
```

`marks` 按 `{ date, text?, bgColor?, color?, done? }` 匹配日期，`v-model` 的写法跟着 `mode` 走（区间用 `v-model:start` / `v-model:end`）。

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | string | `''` | 单个日期，支持 `v-model`；区间模式不读不写 |
| start | string | `''` | 区间起点，支持 `v-model:start` |
| end | string | `''` | 区间终点，支持 `v-model:end` |
| show | boolean | `false` | 弹层显隐，支持 `v-model:show`；平铺模式忽略 |
| mode | `single` \| `range` | `single` | 单个日期或日期区间 |
| popup | boolean | `false` | 以底部弹层展示；否则平铺在页面里 |
| title | string | `'日期选择'` | 弹层头部标题 |
| confirmText | string | `'确定'` | 确定按钮文案 |
| startText | string | `'开始'` | 区间起点的下方文字 |
| endText | string | `'结束'` | 区间终点的下方文字 |
| placeholder | string | `'请选择日期'` | 结果行的占位文字 |
| minDate | string | `''` | 可选的最早日期，空串不限 |
| maxDate | string | `''` | 可选的最晚日期，空串不限 |
| showLunar | boolean | `false` | 在日期下方显示农历日 |
| showYearArrow | boolean | `true` | 显示年份切换箭头；关掉只能按月翻 |
| showConfirm | boolean | `true` | 显示弹层底部的结果行和确定按钮；关掉后用 `confirm()` 提交 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `primary` | 选中、区间和确定按钮的语义色 |
| marks | `VxCalendarMark[]` | `[]` | 日期标记，按 date 匹配 |
| maskClosable | boolean | `true` | 点遮罩关闭并抛 `cancel` |
| maskColor | string | `''` | 自定义遮罩色，字面值 |
| zIndex | number | `1000` | 浮层层级 |

`VxCalendarMark`：

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| date | string | `''` | 日期，`YYYY-MM-DD`；不补零的写法也认，按日期匹配 |
| text | string | `''` | 日期下方文案，覆盖农历，建议 2 个字以内 |
| bgColor | string | `''` | 圆形底色，字面值或 `var(--vx-color-*)` |
| color | string | `''` | 日期文字色，字面值或 `var(--vx-color-*)` |
| done | boolean | `false` | 把下方文案换成对勾 |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| confirm | 点确定时触发，弹层同时收起 | 无 |
| cancel | 点关闭叉或可关闭的遮罩时触发 | 无 |
| change | 点选、草稿真的变化时触发 | 无 |
| monthChange | 翻月或翻年成功之后触发 | year: number, month: number |
| update:show | `v-model:show` 同步，收起时回传 `false` | boolean |
| update:modelValue | `v-model` 同步；平铺每次点选，弹层只在确定时回传 | string |
| update:start / update:end | 区间两端同步，规则同上 | string |

## 方法

| 方法 | 说明 |
| --- | --- |
| open() | 打开弹层；平铺模式不做任何事 |
| close() | 立刻收起，不抛 `cancel`，不改模型；平铺模式不做任何事 |
| confirm() | 把草稿写回模型并抛 `confirm`；弹层同时收起。没选完时直接返回。平铺模式值已经写回，再调一次只补事件 |

## 说明

- 弹层贴底、只圆上两角，最大宽度 480px；头部高 52，底部结果行 13 / 16，确定按钮铺满整行。
- 每格 42 高、宽 `14.28%`，按当月占几周排 5 或 6 行，周日排第一列；每天是 36 的等大方块。
- 日期 15 / 20，选中取 `on-*`，区间内和今天取语义色，不可选取 `disabled-text`；农历贴在方块底边，不占布局。
- 弹层模式点选先落草稿，点确定才写回；平铺模式点选当场写回，没有确定这一步。
- 区间用两个模型：点到起点之前重新起头，再点一次起点得到一天的区间；父级把起止写反时浅底仍按日期先后铺开。
- `minDate` / `maxDate` 之外转灰不可选，目标月一天都选不了时箭头禁用；范围默认收到 1900–2100，也是农历表的边界。
- `showYearArrow` 关掉后只剩按月翻；`marks` 里选中和区间优先于标记，标记是正圆。
- `type` 同时作用于选中底色、区间浅底、文字和确定按钮；warning 的琥珀底配深色字。
- 挂在页面根节点，层级 1000；同一屏只开一个。
- 从 ThorUI `tui-calendar` 迁移：`type`（1 / 2）换成 `mode`，`isFixed` 换成 `popup`，`arrowType` 换成 `showYearArrow=false`，`status` 换成 `marks`；年份范围由 `minDate` / `maxDate` 推出。
