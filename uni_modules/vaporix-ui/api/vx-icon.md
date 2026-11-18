# vx-icon

图标。**1112 个：core 112 + extend 1000**，Phosphor 2.1.2，每档都有 regular / fill。core 随 `variables.css` 默认加载；extend 默认不加载，用到时引入 `libs/style/icons-extend.css`。

## 示例

```vue
<vx-icon name="search" />
<vx-icon name="check" type="success" />
<vx-icon name="heart" variant="fill" />
<vx-icon name="trash" color="var(--vx-color-danger)" />
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| name | `VxIconName` | — | 图标名，见下表；类型由 `libs/icons/codepoints.ts` 生成 |
| size | `sm` \| `md` \| `lg` | `md` | 14 / 18 / 22，对应 `--vx-icon-*` |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `default` | 语义色；warning 使用 `warning-ink` |
| variant | `regular` \| `fill` | `regular` | 线性 / 实心；两套共用同一组 name 和码点 |
| color | string | `''` | 局部颜色，接受 CSS 值，通常传 `var(--vx-color-*)` |

**core / extend**：core 112 个默认加载；extend 1000 个需要额外引入扩展字体样式，`vx-icon` 会按名字自动选字体：

```ts
import '@/uni_modules/vaporix-ui/libs/style/icons-extend.css'
```

`VX_ICON_CORE_NAMES`、`VX_ICON_EXTEND_NAMES`、`VX_ICON_TIER` 可用来做筛选或构建期检查。core 112 与 extend 1000 共用同一组名字和码点；下表列 core 的 10 类，extend 只列数量。

### Core 112

| 分类 | 数量 | 图标 |
| --- | ---: | --- |
| 导航 | 14 | `chevron-right`、`chevron-down`、`arrow-left`、`arrow-right`、`arrow-up`、`arrow-down`、`chevron-left`、`chevron-up`、`home`、`map-pin`、`globe`、`compass`、`locate`、`map` |
| 动作 | 25 | `close`、`check`、`plus`、`minus`、`search`、`settings`、`trash`、`copy`、`download`、`upload`、`share`、`refresh`、`filter`、`more-horizontal`、`more-vertical`、`external-link`、`link`、`send`、`zoom-in`、`zoom-out`、`qr-code`、`save`、`power`、`log-in`、`log-out` |
| 编辑 | 7 | `edit`、`bold`、`italic`、`underline`、`align-left`、`align-center`、`align-right` |
| 状态 | 12 | `info`、`alert-circle`、`alert-triangle`、`check-circle`、`close-circle`、`help-circle`、`clock`、`loader-circle`、`battery`、`wifi`、`sun`、`moon` |
| 对象 | 18 | `eye`、`calendar`、`user`、`lock`、`unlock`、`eye-off`、`star`、`heart`、`bookmark`、`shield`、`key`、`users`、`contact`、`building`、`briefcase`、`smartphone`、`laptop`、`id-card` |
| 通信 | 8 | `bell`、`mail`、`phone`、`inbox`、`message-circle`、`message-square`、`phone-call`、`mic` |
| 媒体 | 8 | `play`、`pause`、`volume-high`、`volume-mute`、`audio-lines`、`video`、`camera`、`headphones` |
| 文件 | 6 | `image`、`file`、`folder`、`file-text`、`files`、`paperclip` |
| 布局 | 6 | `list`、`list-checks`、`layout-dashboard`、`grid-2x2`、`menu`、`table` |
| 商务 | 8 | `shopping-cart`、`wallet`、`package`、`gift`、`receipt`、`credit-card`、`truck`、`tag` |

### Extend 1000

| 分类 | 数量 |
| --- | ---: |
| 导航 | 110 |
| 动作 | 114 |
| 编辑 | 64 |
| 状态 | 107 |
| 对象 | 350 |
| 通信 | 55 |
| 媒体 | 59 |
| 文件 | 58 |
| 布局 | 42 |
| 商务 | 41 |
| **合计** | **1000** |

完整扩展名单以 `VX_ICON_EXTEND_NAMES` 和文档站为准；不在 readme 重复 1000 行。码点以 [`libs/icons/codepoints.ts`](libs/icons/codepoints.ts) 为准。

## 说明

- 图标是展示件，不触发点击；可点击的图标由业务包一层 44×44 热区。
- `sm` 14 / `md` 18 / `lg` 22。`sm` 只放简单轮廓，齿轮、日历这类复杂图形用 `md` 或 `lg`。
- `regular` 线性、`fill` 实心，名字和码点同一套。`fill` 给选中和强调，同一组不要混用。
- 用到 extend 图标必须引入 `icons-extend.css`，否则字形不加载；core 组件不依赖它。
- 图标名是公开契约：只追加、不改名、不复用。
- 字体随包分发，不依赖网络：App 和小程序内嵌 base64，Web 用 woff2，extend 分四段按 `unicode-range` 只下用到的段。
