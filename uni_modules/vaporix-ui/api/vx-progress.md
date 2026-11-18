# vx-progress

进度条。`percent` 传 0–100 的比例，可选左侧 `label` 和右侧百分比；支持语义色、三档尺寸、平角 / 小圆角 / 胶囊、自定义填充、轨道和数值颜色，以及宽度过渡和 `end` 事件。

## 示例

```vue
<vx-progress :percent="60" show-text />
<vx-progress label="上传进度" :percent="64" show-text />
<vx-progress label="同步队列" :percent="42" text="处理中" />
<vx-progress :percent="80" type="success" shape="pill" show-text />
<vx-progress :percent="60" bg-color="#7c3aed" track-color="#ede9fe" show-text />
<vx-progress :percent="60" bg-color="var(--vx-color-warning-pressed)"
	track-color="var(--vx-color-warning-soft)" color="var(--vx-color-warning-ink)" show-text />
<vx-progress :percent="100" :duration="0" show-text @end="onProgressEnd" />
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| percent | number | `0` | 进度百分比，0–100；越界收敛，非数字按 0 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `primary` | 填充的语义色 |
| size | `sm` \| `md` \| `lg` | `md` | 轨道高度和文字档位 |
| shape | `square` \| `rounded` \| `pill` | `square` | 外轮廓 |
| showText | boolean | `false` | 右侧显示百分比 |
| label | string | `''` | 左侧标签，单行省略 |
| text | string | `''` | 右侧自定义短文案，优先于 showText |
| color | string | `''` | 数值颜色，字面值或主题令牌 |
| bgColor | string | `''` | 填充颜色或渐变，字面值或主题令牌 |
| trackColor | string | `''` | 轨道颜色，字面值或主题令牌 |
| height | string | `''` | 轨道自定义高度，需带单位；覆盖 size |
| duration | number | `220` | 过渡时长，单位毫秒；0 直接落位 |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| end | percent 变化后的过渡计时结束时触发，连续改值只按最后一次 | 最终百分比 number |

## 说明

- `percent` 只控制显示，组件不维护内部状态；负数和 0 按未开始，超过 100 按完成，非数字按 0。
- 百分比最多保留一位小数，`text` 非空时优先显示短文案；`label` 是左侧短标签，单行省略。
- 一行三段：标签、轨道、数值；`size` 三档决定轨道 4 / 6 / 8 和文字 13 / 15 / 17，`height` 只覆盖轨道高度。
- `shape` 默认平角，`rounded` 6、`pill` 胶囊，圆角同时作用于轨道和填充。
- `type` 只改填充，标签保持次要色、数值保持正文色；状态不能只靠填充色表达。
- `bgColor` / `trackColor` / `color` 分别只改填充、轨道和数值，默认是字面值；`bgColor` 可以接渐变，但一屏最多一处。
- 填充用 `width` 过渡，默认 220ms，`duration=0` 直接落位；`end` 在过渡计时结束时抛最终值，连续改值只按最后一次。
- 只占父级宽度，不加外部间距；没有插槽、点击和方法，需要读屏时在 `label` 或旁边给文字说明。
- 从 ThorUI `tui-progress` 迁移：`showInfo` → `showText`，`activeColor` → `bgColor`，`backgroundColor` → `trackColor`，`radius` → `shape`，`activeend` → `end`；`duration` 从「每 1% 毫秒」改成整段毫秒。
