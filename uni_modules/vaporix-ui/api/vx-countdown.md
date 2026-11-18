# vx-countdown

倒计时。`time` 传剩余秒数，默认显示时、分、秒。支持天数、毫秒位、冒号或单位文字、三档尺寸、描边 / 浅底 / 无盒和语义色；自然到 0 抛 `end`，也可以用 `start()` / `pause()` / `reset()` 控制。

## 示例

```vue
<vx-countdown :time="967" />
<vx-countdown :time="967" show-milliseconds />
<vx-countdown :time="239953" show-days separator="unit" />
<vx-countdown :time="239953" show-days separator="unit" unit="en" />
<vx-countdown :time="967" size="lg" type="danger" />
<vx-countdown :time="967" variant="soft" />
<vx-countdown :time="967" variant="plain" separator="unit" />
<vx-countdown :time="967" bg-color="#d92d20" color="#ffffff"
	unit-color="var(--vx-color-danger-pressed)" border-color="#d92d20" />
<vx-countdown ref="countdownRef" :time="60" :auto-start="false" @tick="onTick" @end="onEnd" />
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| time | number | `0` | 剩余秒数，支持小数；变化时按新值重新开始 |
| showDays | boolean | `false` | 显示天数；打开后小时不再累计超过 24 |
| showHours | boolean | `true` | 显示小时 |
| showMinutes | boolean | `true` | 显示分钟 |
| showSeconds | boolean | `true` | 显示秒数；四段全关时回落到秒 |
| showMilliseconds | boolean | `false` | 显示毫秒位（十分位）；依附秒数，按 100ms 刷新 |
| size | `sm` \| `md` \| `lg` | `md` | 数字盒高度、字号和十分位盒宽度 |
| variant | `outline` \| `soft` \| `plain` | `outline` | 描边盒、浅底盒、无盒 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `default` | 数字和描边的语义色 |
| separator | `colon` \| `unit` | `colon` | 冒号分隔，或每段后面的单位文字 |
| unit | `zh` \| `en` | `zh` | 单位语言；`en` 为 d / h / m / s |
| autoStart | boolean | `true` | 挂载后自动开始；关闭后用 `start()` 启动 |
| bgColor | string | `''` | 数字盒底色，字面值或主题令牌；outline / soft 生效 |
| color | string | `''` | 数字和十分位颜色，字面值或主题令牌 |
| unitColor | string | `''` | 分隔符号和单位颜色，字面值或主题令牌；不传时跟随 type 或次要灰 |
| borderColor | string | `''` | 数字盒描边颜色，字面值或主题令牌；outline 生效 |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| tick | 显示秒数变化时触发 | 剩余秒数 number |
| end | 自然到 0 时触发一次 | — |

## 方法

| 方法 | 说明 |
| --- | --- |
| start() | 开始或继续；已经结束时从 `time` 重来 |
| pause() | 暂停，保留当前剩余时间 |
| reset(seconds?) | 重置并立即开始；不传秒数回到 `time` |

用 `ref` 拿实例调用方法：

```ts
const countdownRef = ref<VxCountdownComponentPublicInstance | null>(null)
const restart = () => countdownRef.value?.reset?.(60)
```

`reset(seconds)` 的自定义值只用于这一次；自然结束后再 `start()` 仍从 `time` 重来。

没有插槽，也不抛点击。

## 说明

- 可见单位由四个 `show*` 控制，被隐藏的上层单位并入下一个可见单位：去掉小时时分钟可以超过 59。四段全关时只显示秒。
- 秒数向上取整，最后一秒仍显示 1；毫秒位按 100ms 取整到十分位。`showMilliseconds` 依附秒数。
- 计时按截止时间重算，不靠每秒递减，退到后台再回来不会越走越慢。`tick` 在显示秒数变化时抛，`end` 只在自然到 0 时抛一次。
- `time` 变化时按新值重置；`start()` 在暂停后继续、结束后从 `time` 重来，`reset()` 不传参回到 `time`，传 `0` 停在 0。
- 数字盒高度 24 / 32 / 40，数字 13 / 15 / 17 加 600 字重，十分位和单位 13 / 15。
- `outline` 是描边盒，`soft` 浅底无描边，`plain` 去掉底色和描边；`type` 同时改数字、描边、单位和冒号。
- `color` / `unitColor` / `bgColor` / `borderColor` 默认是字面值，传 `var(--vx-color-*)` 时才跟主题。
- 只承载读数，不放标题、说明和按钮；整段不是热区。
- 从 ThorUI `tui-countdown` 迁移：`days` / `hours` / `minutes` / `seconds` 换成 `show*`，`isColon=false` 换成 `separator="unit"`，`unitEn` 换成 `unit="en"`，`isMs` 换成 `showMilliseconds`，`endOfTime` 用 `pause()` 代替；尺寸类属性改用 `size`。
