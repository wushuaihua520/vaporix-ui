# vx-tabs

页签切换。同一屏放 2–5 个等宽页签，选中项加字重，再用短线、浅底胶囊或反色条标出位置。`v-model` 是当前索引，`items` 按顺序渲染。

## 示例

```vue
<vx-tabs v-model="active" :items="tabs" @change="onTabChange" />
<vx-tabs v-model="active" :items="tabs" variant="soft" />
<vx-tabs v-model="active" :items="tabs" variant="inverse" />
<vx-tabs v-model="active" :items="tabs" size="lg" type="warning" />
<vx-tabs v-model="active" :items="tabs" :divider="false" />

<!-- 竖排：每项一整行，右侧内容由业务按 active 渲染 -->
<vx-tabs v-model="active" :items="sections" direction="vertical" :vertical-width="120" />
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | `VxTabItem[]` | `[]` | 页签，按顺序等宽排列；空数组不渲染 |
| modelValue | number | `0` | 当前索引，支持 `v-model`；负数或越界不选中，非整数四舍五入 |
| variant | `line` \| `soft` \| `inverse` | `line` | 下划线、浅底胶囊、反色条；竖排不支持 `inverse` |
| direction | `horizontal` \| `vertical` | `horizontal` | 横向等宽页签，或纵向整行的侧边导航 |
| verticalWidth | number | `96` | 竖排宽度，单位 px；小于等于 0 时跟随容器撑满 |
| size | `sm` \| `md` \| `lg` | `md` | 高度、字号和角标档位 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `primary` | 选中文字、下划线和浅底胶囊的语义色 |
| divider | boolean | `true` | 底部 1px 分割线；`inverse` 始终不画 |
| bgColor | string | `''` | 整条底色，字面值或主题令牌 |
| color | string | `''` | 未选中文字色，字面值或主题令牌 |
| badgeMax | number | `99` | 计数角标封顶值 |
| badgeType | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `danger` | 角标语义色 |

`VxTabItem`：

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | string | `''` | 页签文案，建议 2–4 个字 |
| badge | number | `0` | 计数角标，小于 1 不显示 |
| dot | boolean | `false` | 只显示圆点，优先于 `badge` |
| disabled | boolean | `false` | 禁用后不响应点击，文字转灰 |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| change | 点击未选中且未禁用的页签时触发 | 索引 number |
| update:modelValue | `v-model` 同步当前索引 | 索引 number |

## 说明

- 高度沿用列表行 44 / 48 / 52，选中胶囊 28 / 32 / 36，下划线固定 24 / 32 / 40 × 2px。
- `line` 只换文字和短线，`soft` 用浅底胶囊，`inverse` 用正文色铺满整条、选中项浮 `surface` 胶囊且不画分割线；`inverse` 一屏最多一条。
- 竖排每项一整行，宽默认 96px（传 0 跟随容器），下划线换成左侧 2px 竖条，选中项整行铺浅底；角标改成行内排布，不再压上一行。
- 竖排不支持 `inverse`，传了按 `soft` 渲染；竖排不含内容区，右侧内容由业务按 `active` 自己放。
- `type` 表达状态，普通导航保持 `primary`；`bgColor` / `color` 是字面值，自定义反色条时要同时传 `color`。
- `disabled` 只停该页签的点击并转灰；不要把当前项设为禁用，也不要用禁用掩盖权限问题。
- 只抛索引，不内置内容、路由和请求；放进卡片时关掉 `divider`，需要吸顶时放进 `vx-sticky`。
- 一屏 2–5 个，不横向滚动；点击当前项不抛 `change`，越界索引不选中。
- 从 ThorUI `tui-tabs` 迁移：`tabs` → `items`，`field` 固定读 `text`，`isDot` → `dot`，`currentTab` 换成 `v-model`，`change` 只给索引；`unlined` → `:divider="false"`，`selectedColor` 改用 `type`，`isFixed` / `top` 改用 `vx-sticky`。
