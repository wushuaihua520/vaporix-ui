# vx-tabbar

自定义底部标签栏。`items` 按顺序等宽排列，`v-model` 是当前索引。字体图标跟选中色，图片图标成对传 `activeImage`；中间项可以凸起成主按钮，`action` 项只抛点击、不参与选中。`liquidGlass` 切液态玻璃风格：整条收成悬浮胶囊，选中项用浅色胶囊滑动指示。

## 示例

```vue
<vx-tabbar v-model="active" :items="tabs" @change="onTabChange" @click="onTabClick" />
<vx-tabbar v-model="active" :items="imageTabs" :fixed="false" />
<vx-tabbar v-model="active" :items="raisedTabs" :fixed="false" />
<vx-tabbar v-model="active" :items="glassTabs" liquid-glass />
```

项是 `{ text, icon?, activeIcon?, image?, activeImage?, badge?, dot?, disabled?, raised?, action? }`；有凸起主按钮时给那一项传 `raised` 和 `action`。

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | `VxTabbarItem[]` | `[]` | 标签栏项，一屏 3–5 个；空数组不渲染 |
| modelValue | number | `0` | 当前索引，支持 `v-model`；负数或越界不选中，非整数四舍五入 |
| size | `sm` \| `md` \| `lg` | `md` | 栏高、图标位、凸起圆钮和角标档位 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `primary` | 选中文字、字体图标和凸起圆钮的语义色 |
| fixed | boolean | `true` | 固定在页面底部；关闭后留在文档流里 |
| placeholder | boolean | `true` | 固定时补一个等高占位；只在标签栏放在页面末尾时生效 |
| safeArea | boolean | `true` | 为底部手势条留白，栏底色一直铺到屏幕底边 |
| divider | boolean | `true` | 顶部 1px 分割线 |
| liquidGlass | boolean | `false` | 液态玻璃风格：整条收成悬浮胶囊，磨砂玻璃底加发丝描边，选中项用 type 的浅色胶囊滑动指示 |
| glassStyle | `regular` \| `clear` | `regular` | 玻璃透档：clear 更透（iOS 换系统 clear 材质，Android / 鸿蒙 / Web 换更透的底色）；小程序无磨砂不生效。仅在 `liquidGlass` 下有意义 |
| bgColor | string | `''` | 整条底色，字面值或主题令牌；不传时用 `surface` |
| color | string | `''` | 未选中文字和字体图标的颜色；图片不受影响 |
| badgeMax | number | `99` | 计数角标封顶值 |
| badgeType | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `danger` | 角标语义色 |
| iconVariant | `regular` \| `fill` | `regular` | 未选中字体图标的字重；图片不受影响 |
| activeIconVariant | `regular` \| `fill` | `regular` | 选中字体图标的字重；做线性转实心时传 `fill` |
| zIndex | number | `1` | 固定时的层级，和固定页脚同档 |

`VxTabbarItem`：

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | string | `''` | 文案，建议 2–4 个字，单行省略 |
| icon | `VxIconName` | — | 字体图标名；有 `image` 时用图片 |
| activeIcon | `VxIconName` | — | 选中时的字体图标名；不传时沿用 `icon` |
| image | string | `''` | 图标图片地址，优先于字体图标；成对传 `activeImage` |
| activeImage | string | `''` | 选中时的图片地址；不传时沿用 `image` |
| badge | number | `0` | 计数角标，小于 1 不显示；超过 `badgeMax` 显示 `max+` |
| dot | boolean | `false` | 只显示圆点，优先于 `badge` |
| disabled | boolean | `false` | 禁用后不响应点击，图标、文字和角标一起转灰 |
| raised | boolean | `false` | 凸起成圆钮，浮在标签栏上沿；一个标签栏最多一个，多传时只认第一个 |
| action | boolean | `false` | 只做按钮：点击不写 `v-model`，只抛 `click`；通常和 `raised` 一起用 |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| change | 点击未选中且未禁用的普通项时触发 | 索引 number |
| click | 点击任意可用项时触发，包括当前项和 `action` 项 | 索引 number、项 `VxTabbarItem` |
| update:modelValue | `v-model` 同步当前索引 | 索引 number |

## 说明

- 一屏 3–5 个，等宽排列，不横向滚动；文案 2–4 个字，放不下先缩短文案。
- 只切视图和抛事件，不内置路由、请求和权限；切换后的内容由业务按索引渲染。
- 栏高 48 / 56 / 64，图标位 20 / 24 / 28，凸起圆钮 44 / 52 / 60；有凸起项时整行高 70 / 80 / 90。
- 一个标签栏最多一个凸起项，多传只认第一个；`raised` 只是外观，`action` 才决定不参与选中。
- 凸起圆钮用 `type` 的实心色，不跟选中态；圆钮是唯一热区，栏顶透明带把点击让给页面。
- 选中态同时换文字色和字重；图片图标不能染色，选中态靠 `activeImage`。
- `fixed` 和 `placeholder` 默认打开，组件放在页面根节点末尾；用 `scroll-view` 加底栏的列布局时改 `:fixed="false"`。
- `safeArea` 默认打开，安全区算在栏内；放进已经有底部安全区的容器时关掉，避免多出一截。
- `liquidGlass` 打开后：栏收成左右和底部各留 12px 的悬浮胶囊，顶部分割线换成整圈发丝描边；选中项底下有一枚 `type` 浅色胶囊滑动指示。磨砂分平台：iOS 用 `glass-effect-view` 出系统液态玻璃（iOS 26+；15~25 降级为系统毛玻璃），材质跟随系统外观；Android / 鸿蒙蒸汽与 Web 用 `backdrop-filter: blur`；小程序没有模糊，玻璃底不透明度给足。
- 玻璃风格里凸起圆钮按普通项渲染（`raised` 不生效，`action` 照常只抛点击）；`bgColor` 不作用于玻璃底（材质底色由令牌 `--vx-tabbar-glass-*` 控制），`divider` 开关不再影响外观。
- `glassStyle="clear"` 换透档：iOS 直传系统 clear 材质，Android / 鸿蒙 / Web 把底色降到接近全透（`--vx-tabbar-glass-bg-clear`），小程序端不生效。透档可读性弱一档，浅色页面近乎隐形，正文色块丰富的页面才建议用。
- 角标跟图标走，项没有 `icon` / `image` 时不渲染；`disabled` 只停这一项，不抛 `change` 和 `click`。
- 用了本组件就不要再配 `pages.json` 的 `tabBar`，否则两条底栏会叠在一起；层级固定 1，低于吸顶条和导航栏。
- 从 ThorUI `tui-tabbar` 迁移：`tabBar` → `items`，`current` 换成 `v-model`，`iconPath` / `selectedIconPath` → `image` / `activeImage`，`num` → `badge`，`hump` → `raised`；`verify` / `pagePath` 去掉，登录校验和路由在 `click` 里做。
