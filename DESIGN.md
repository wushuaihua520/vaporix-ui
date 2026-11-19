---
version: alpha
name: Vaporix UI
description: uni-app x 蒸汽模式原生渲染组件库的设计系统。语义色板、字号、间距、圆角、控件与徽章尺寸、动效，以及组件与 CSS 的命名契约。
colors:
  primary: "#2b6be0"
  primary-pressed: "#245cc2"
  primary-soft: "#eef3ff"
  on-primary: "#ffffff"
  success: "#0b7c46"
  success-pressed: "#09693b"
  success-soft: "#e8f7ef"
  on-success: "#ffffff"
  info: "#0e7490"
  info-pressed: "#0b5f75"
  info-soft: "#e7f6fa"
  on-info: "#ffffff"
  warning: "#f79009"
  warning-pressed: "#dd7c04"
  warning-ink: "#8a4b00"
  warning-soft: "#fff5e5"
  on-warning: "#2a1a00"
  danger: "#d92d20"
  danger-pressed: "#b42318"
  danger-soft: "#ffefef"
  on-danger: "#ffffff"
  bg: "#f5f7fb"
  surface: "#ffffff"
  default-soft: "#eceff5"
  surface-pressed: "#f1f3f7"
  border: "#e6e8ee"
  divider: "#eef1f5"
  text: "#1a1d26"
  text-secondary: "#6b7280"
  text-inverse: "#ffffff"
  disabled-bg: "#eef0f4"
  disabled-text: "#a7adba"
  mask: "rgba(16, 18, 22, 0.45)"
  qrcode-dark: "#1a1d26"
  qrcode-light: "#ffffff"
  viewer-bg: "#000000"
  viewer-fg: "#ffffff"
  viewer-muted: "rgba(255, 255, 255, 0.64)"
  viewer-line: "rgba(255, 255, 255, 0.12)"
  viewer-control: "rgba(255, 255, 255, 0.14)"
  viewer-danger: "#ff8a80"
  loader-panel: "#23262e"
  loader-fg: "#ffffff"
  loader-muted: "rgba(255, 255, 255, 0.64)"
  loader-track: "rgba(255, 255, 255, 0.24)"
typography:
  display:
    fontSize: 28px
    lineHeight: 34px
    fontWeight: 700
    token: xl
  title:
    fontSize: 17px
    lineHeight: 24px
    fontWeight: 600
    token: lg
  body:
    fontSize: 15px
    lineHeight: 22px
    fontWeight: 400
    token: md
  body-small:
    fontSize: 13px
    lineHeight: 20px
    fontWeight: 400
    token: sm
rounded:
  sm: 6px
  md: 8px
  lg: 12px
  pill: 999px
spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
control:
  sm: 32px
  md: 40px
  lg: 48px
controlRadius:
  sm: 6px
  md: 8px
  lg: 10px
compact:
  sm: 28px
  md: 32px
  lg: 36px
tag:
  height:
    sm: 20px
    md: 24px
    lg: 28px
  font:
    sm: 12px
    md: 13px
    lg: 14px
  line:
    sm: 16px
    md: 18px
    lg: 20px
  padding:
    sm: 6px
    md: 8px
    lg: 10px
controlText:
  sm: 14px
  md: 16px
  lg: 18px
textarea:
  sm: 60px
  md: 66px
  lg: 72px
list:
  sm: 44px
  md: 48px
  lg: 52px
overlayHead: 52px
navigationBar:
  height: 48px
grid:
  height:
    sm: 72px
    md: 88px
    lg: 104px
  media:
    sm: 32px
    md: 40px
    lg: 48px
imageGroup:
  size:
    sm: 40px
    md: 64px
    lg: 88px
gallery:
  bar: 44px
  control: 44px
  foot: 60px
icon:
  sm: 14px
  md: 18px
  lg: 22px
  grid: 24
  stroke: 1.5
badge:
  sm:
    height: 16px
    fontSize: 12px
    dot: 6px
  md:
    height: 20px
    fontSize: 13px
    dot: 8px
  lg:
    height: 24px
    fontSize: 14px
    dot: 10px
rate:
  size:
    sm: 20px
    md: 24px
    lg: 28px
  gap: 8px
radio:
  size:
    sm: 16px
    md: 18px
    lg: 20px
checkbox:
  size:
    sm: 16px
    md: 18px
    lg: 20px
  radius:
    sm: 4px
    md: 5px
    lg: 6px
switch:
  width:
    sm: 36px
    md: 44px
    lg: 52px
  height:
    sm: 20px
    md: 24px
    lg: 28px
  thumb:
    sm: 16px
    md: 20px
    lg: 24px
  spinner:
    sm: 8px
    md: 10px
    lg: 12px
  inset: 2px
slider:
  track:
    sm: 4px
    md: 6px
    lg: 8px
  thumb:
    sm: 20px
    md: 24px
    lg: 28px
  inset:
    sm: 10px
    md: 12px
    lg: 14px
  height:
    sm: 32px
    md: 36px
    lg: 40px
  haloOut: -4px
indexList:
  header:
    sm: 28px
    md: 32px
    lg: 36px
  avatar:
    sm: 32px
    md: 40px
    lg: 48px
  key:
    sm: 16px
    md: 18px
    lg: 20px
  bar:
    sm: 28px
    md: 32px
    lg: 36px
  indicator:
    sm: 56px
    md: 64px
    lg: 72px
  indicatorFont:
    sm: 24px
    md: 28px
    lg: 32px
timeAxis:
  node:
    sm: 20px
    md: 24px
    lg: 28px
  dot:
    sm: 6px
    md: 8px
    lg: 10px
  center:
    sm: 10px
    md: 12px
    lg: 14px
steps:
  node:
    sm: 20px
    md: 24px
    lg: 28px
  dot:
    sm: 6px
    md: 8px
    lg: 10px
  font:
    sm: 12px
    md: 13px
    lg: 14px
  center:
    sm: 10px
    md: 12px
    lg: 14px
  lineOut:
    sm: -10px
    md: -12px
    lg: -14px
numberBox:
  field:
    sm: 44px
    md: 52px
    lg: 60px
countdown:
  height:
    sm: 24px
    md: 32px
    lg: 40px
  msWidth:
    sm: 20px
    md: 26px
    lg: 32px
progress:
  height:
    sm: 4px
    md: 6px
    lg: 8px
  valueMin:
    sm: 40px
    md: 44px
    lg: 52px
toast:
  icon: 40px
  minWidth: 120px
  maxWidth: 240px
  opacity: 0.9
actionSheet:
  maxWidth: 480px
swipeAction:
  width: 72px
  extraWidth: 80px
drawer:
  width: 280px
  height: 45%
modal:
  maxWidth:
    sm: 280px
    md: 320px
    lg: 400px
  icon: 48px
  close: 44px
bubblePopup:
  maxWidth: 280px
  minWidth: 120px
  chatMaxWidth: 260px
  arrow: 7px
  arrowBase: 14px
  arrowSeam: 13px
  arrowTip: 9.9px
  itemHeight: 44px
loading:
  minWidth: 120px
  maxWidth: 240px
loader:
  size:
    sm: 20px
    md: 28px
    lg: 40px
  dot:
    sm: 6px
    md: 8px
    lg: 10px
  panel:
    minWidth: 120px
    maxWidth: 240px
  duration:
    bar: 900ms
    dot: 960ms
    wave: 2800ms
    waveAlt: 3200ms
nomore:
  dot: 6px
noData:
  art:
    sm: 96px
    md: 128px
    lg: 160px
  disc:
    sm: 64px
    md: 80px
    lg: 96px
  glyph:
    sm: 32px
    md: 40px
    lg: 48px
  copyMax: 320px
msg:
  disc:
    sm: 56px
    md: 72px
    lg: 88px
  glyph:
    sm: 28px
    md: 36px
    lg: 44px
  title:
    sm: 17px
    md: 20px
    lg: 26px
  titleLine:
    sm: 24px
    md: 28px
    lg: 34px
  copyMax: 360px
  actionsMax: 320px
card:
  padding:
    sm: 12px
    md: 16px
    lg: 24px
  avatar:
    sm: 32px
    md: 40px
    lg: 48px
  metaMax: 160px
section:
  font:
    sm: 15px
    md: 17px
    lg: 20px
  line:
    sm: 22px
    md: 24px
    lg: 28px
  marker:
    sm: 14px
    md: 16px
    lg: 20px
    width: 3px
datetime:
  row: 44px
  wheel: 220px
  maxWidth: 480px
picker:
  row: 44px
  wheel: 220px
  maxWidth: 480px
calendar:
  cell: 42px
  tile: 36px
  week: 32px
  maxWidth: 480px
  lineDay: 20px
  lineResult: 16px
  fontSub: 10px
  lineSub: 12px
select:
  maxWidth: 480px
  media:
    sm: 28px
    md: 32px
    lg: 36px
rollingNews:
  height:
    sm: 32px
    md: 40px
    lg: 48px
noticeBar:
  height:
    sm: 32px
    md: 40px
    lg: 48px
qrcode:
  size:
    sm: 120px
    md: 160px
    lg: 200px
  logoPad: 4px
tabbar:
  height:
    sm: 48px
    md: 56px
    lg: 64px
  rowRaised:
    sm: 70px
    md: 80px
    lg: 90px
  media:
    sm: 20px
    md: 24px
    lg: 28px
  raise:
    sm: 44px
    md: 52px
    lg: 60px
  lift:
    sm: 22px
    md: 24px
    lg: 26px
  font:
    sm: 13px
    md: 13px
    lg: 14px
  line:
    sm: 20px
    md: 20px
    lg: 22px
  gap:
    sm: 2px
    md: 2px
    lg: 4px
motion:
  fast: 120ms
  normal: 220ms
  spin: 700ms
---

# 元汽UI 设计系统

## Overview

uni-app x 蒸汽模式组件库，覆盖 Android、iOS、鸿蒙、Web、小程序。

冷色、低饱和、细描边。层级靠留白和描边，不靠阴影和渐变。按钮 `shadow` 与徽章 `ring` 是例外。图片预览是唯一固定黑底的组件，用来把页面层次压掉。数值在 `variables.css` 的 `--vx-*`，和本文档一起改。

## 组件分层

两个包。`vaporix-ui` 免费，MIT；`vaporix-ui-pro` 付费，会员可用。令牌只有一份，在 `vaporix-ui/libs/style/variables.css`，两包同名同值。

分层看缺了这一件会不会断，不看名字高不高级。按顺序问，取第一个命中的：

1. 免费件里没有能承载这个语义的 → 免费。正文、链接、单选、多选、开关，免费层没有替代。
2. 免费件要用对它，得依赖某个付费件 → 一起免费。导航栏的正确留白依赖状态栏，两者同层。
3. 免费件里有替代，缺了页面仍能做完 → 付费。选择框用操作菜单加单选能拼，滑动选择用数字框加按钮能拼。

三条禁令：

- 不把基础控件切开卖。输入框免费，单选、多选、开关就得免费。高配控件另算，它们有免费替代。
- 不在同一个组件里按变体收费。`size`、`shape`、`variant` 和语义色全开，不留高配档。
- 免费层不能有付费件的硬依赖。

免费层负责「不缺件」：一个空项目走到上线。付费层负责「做完之后更好」：同一件事的高配版本、跨控件的组合件、重型单品、页面模板。数量不是卖点，缺件才是成本。

### 免费层的最低配置

六族分发，合计 60。少一件，就有一类页面拼不出来。

| 族 | 数 | 件 |
| --- | --- | --- |
| 基础 | 6 | button、icon、input、textarea、text、link |
| 表单 | 10 | number-box、radio、checkbox、switch、rate、datetime、picker、calendar、form、form-item |
| 展示 | 14 | avatar、tag、badge、card、section、image、image-group、qrcode、collapse、collapse-item、time-axis、countdown、steps、progress |
| 导航 | 7 | navigation-bar、status-bar、sticky、tabs、swipe-action、tabbar、footer |
| 反馈 | 13 | tips、toast、loading、loadmore、nomore、no-data、modal、drawer、actionsheet、popup、bubble-popup、rolling-news、notice-bar |
| 布局 | 10 | row、col、grid、grid-item、list-view、list-cell、white-space、wing-blank、divider、safe-area |

分组容器 `vx-radio-group`、`vx-checkbox-group` 随各自的单项一起算，不另计一件；按目录数是 62 个，按组件清单是 60 个。

### 付费层的准入

只收四类：

1. 同一件事的高配版本：select、slider、segmented-control、code-input、data-checkbox、index-list、divide-list、gallery、loader、skeleton、msg、circular-progress、landscape、pagination、waterfall、swiper、count-to。
2. 跨控件的组合件：`vx-page` 把导航栏、状态栏、安全区和滚动容器收成一件。表单容器与校验从 0.62.0 起在免费层，不再作为付费组合件规划。
3. 重型单品：upload、table、virtual-list、tree 与 cascader、rich-text、drag-list。
4. 服务：暗色与主题、i18n、无障碍、升级协助、源码授权。

第 2 类由 1.28.0 的 `vx-page` 补齐；第 3 类的 `upload`、`table`、`virtual-list` 和 `rich-text` 已补，tree 与 cascader 也已补，`drag-list` 由 1.38.0 补上；富文本编辑器不归组件库，渲染交给 `vx-rich-text`。图表不进：uCharts 一类免费够用，除非按本库令牌重绘并带手势。

### 迁移（0.56.0 起）

分三批迁完，数量从 45 / 19 变成 53 / 11，0.62.0 免费层再增到 55，0.63.0 补 `vx-popup` 到 56，0.64.0 补 `vx-image`、`vx-divider`、`vx-safe-area` 到 59：0.56.0 转 `vx-row`、`vx-col`、`vx-status-bar`；0.57.0 转 `vx-text`、`vx-link`；0.58.0 转 `vx-radio`、`vx-radio-group`、`vx-checkbox`、`vx-checkbox-group`、`vx-switch`。免费层的清单见上表，付费层只剩高配版本、组合件、重型单品和服务。0.59.0 起 Pro 再补 `vx-upload` 和 `vx-skeleton`；1.23.0 补 `vx-landscape`，1.24.0 补 `vx-pagination`，1.25.0 补 `vx-waterfall`，1.26.0 补 `vx-keyboard` / `vx-keyboard-input`，1.27.0 补 `vx-tree-view`，1.28.0 补 `vx-page`，1.29.0 补 `vx-table`，1.30.0 补 `vx-virtual-list`，1.31.0 补 `vx-swiper` / `vx-count-to`，1.32.0 补 `vx-dropdown` / `vx-back-top`，1.33.0 补 `vx-scroll-list` / `vx-cascader` / `vx-guide`。0.62.0 起表单容器与校验在免费层，Pro 不再规划表单容器。0.65.0 补 `vx-avatar` 到 60。1.37.0 补 `vx-rich-text`，1.38.0 补 `vx-drag-list`，当前付费层 31 件。

每个转出的组件跟着改：两包 readme 的清单、两包 changelog、文档站 `nav.ts` 的 `pro` 标记、`content` 中英文 meta 的「会员组件」、首页与索引页的组件数、Pro 的演示与依赖说明。免费库还要补演示页、`catalog.ts`、`pages.json`。全部迁完删掉本节。

## Colors

- `primary` 只用于当前视图内优先级最高的操作，一个屏幕内最多出现一个实心主色按钮。
- `primary-soft` 只作为主色的浅底衬（标签、选中态背景、浅底按钮），不用于大面积区块。
- `info` 用于中性信息、提示与帮助，不表达成功、警告或失败；不要用它替代页面主操作。
- `success-soft` / `info-soft` / `warning-soft` / `danger-soft` 与各自语义色配对，只用于浅底按钮、浅底标签和状态衬底；浅底按钮的文字使用对应的 `*-pressed`，warning 使用 `warning-ink`，保证 4.5:1 对比度。
- `warning-ink` 是琥珀色在描边、纯文字和浅底场景下的可读前景，不要把它当作大面积实心背景色。
- `surface` 用于卡片、输入框、浮层；`bg` 只做页面底色，不填充组件；`default-soft` 用于中性浅底按钮、标签和操作菜单的取消间隔带。
- `divider` 只给列表行内的分割线，比 `border` 浅一档；卡片和分组的外轮廓仍用 `border`，两者不要反过来用。
- 文本只有 `text`、`text-secondary`、`disabled-text` 三级灰度，不引入第四级。
- 留白组件不承载语义色：`vx-white-space` 的 `bgColor` 只用于显式色带，默认透明，是字面值；不要拿它表达成功、失败或警告。`vx-wing-blank` 不提供底色，需要背景时用外层容器。
- 语义色只表达状态，不表达品牌：`success` / `info` / `warning` / `danger` 不得用于装饰。
- 标签的 `type` 也表达状态；纯分类的标签用 `default` 或 `primary`，不用警告、失败色区分类别。
- 标签的自定义颜色分别对应一处：`color` 改文字、`bgColor` 改底色、`borderColor` 改描边。组件不做明暗推导，对比度由业务保证。
- 徽章的默认语义色是 `danger`，表达未读、待处理这类需要立刻看到的状态；普通计数用 `default`，状态计数用对应的语义色。同一含义的徽章一屏只出现一处，多个入口优先收进列表或页签。
- 徽章的 `variant="soft"` 用对应的 `*-soft` 衬底：文字取 `*-pressed`，warning 取 `warning-ink`，default 取 `text`。实心 `default` 是深色中性底，配 `text-inverse`；浅底 `default` 才是浅灰底的中性计数。
- 徽章的自定义颜色同样分两处：`bgColor` 改底色、`color` 改文字，不做明暗推导。覆盖在图标或图片上时用 `ring` 加一圈页面底色，亮色、暗色各取自己的 `surface`。
- 图片组合只显示缩略图，不承载语义色：图片本身不能染色，空白和加载失败用 `default-soft` 占位，占位图标用 `disabled-text`。重叠时用 `ring` 加一圈 `surface` 描边把相邻图分开；`ringColor` 是字面值，放在页面底色上时传对应的 `--vx-color-bg`。
- 头像的 `type` 只给首字和图标：底色取对应的 `*-soft`，前景取 `*-pressed`，`warning` 取 `warning-ink`，`default` 取正文色；图片态默认透明，传了 `bgColor` 才铺。`bgColor` 只改底色、`color` 只改前景，都是字面值，组件不做明暗推导。`ring` 固定 `surface`，不跟 `type`。
- 评分默认用 `warning` 的琥珀色表达评价结果；选中星形取 `warning-pressed`（原色在白底上不到 3:1，`warning-pressed` 才是可用的填充色）。`activeColor` 只覆盖选中色，`voidColor` 只覆盖未选中色，不做明暗推导。分数高低不改用 `success` / `danger` 表达，除非业务本身就在评价风险等级。
- 单选的选中圆圈用 `type` 语义色填充，对号取对应的 `on-*`，`warning` 填充取 `warning-pressed`、对号取 `on-warning`；未选中圆圈用 `text-secondary` 描边，不用 `border`。只画对号时对号本身就是选中色，`color` 同时改这一处。`color` / `borderColor` / `checkColor` 都是字面值，组件不做明暗推导，禁用时文字和圆圈转 `disabled-text`，圆圈模式的对号用 `surface`、只画对号时用 `disabled-text`，对比度由业务保证。
- 复选的选中方框用 `type` 语义色填充，对号取对应的 `on-*`，`warning` 填充取 `warning-pressed`、对号取 `on-warning`；未选中方框同样用 `text-secondary` 描边。部分选中的横线跟随对号色，禁用时方框填充用 `disabled-text`。`color` / `borderColor` / `checkColor` 的规则和单选一致，`checkColor` 同时改对号和横线；对比度由业务保证。
- 开关的关闭轨道用 `default-soft`，滑块用 `surface` 加一圈 `text-secondary` 1px 描边；打开轨道用 `type` 语义色填充，`warning` 取 `warning-pressed`，滑块取对应的 `on-*` 并把描边同色收掉。`default` 用正文色轨道配 `text-inverse` 滑块。关闭时靠描边和位置表达状态，不把整条轨道涂成深灰。
- 开关的加载圈颜色跟着状态：打开取 `type` 的语义色（`warning` 取 `warning`），关闭取正文色；圈是半圈缺口圆环，画在滑块里，不再额外铺底色。禁用时轨道转 `disabled-bg` / `disabled-text`，滑块固定 `surface`，关闭描边用 `disabled-text`、打开描边与滑块同色；加载圈在禁用时不渲染。
- 开关的 `color` 只改打开轨道，`trackColor` 只改关闭轨道，`thumbColor` 同时改两种状态的滑块底色并收掉打开时的描边，`borderColor` 只改关闭滑块的描边。四者都是字面值、不跟随主题，禁用时都不生效；自定义打开轨道色会同时改加载圈，关闭轨道的自定义色不改加载圈，对比度由业务保证。
- 分段器的描边、选中底色、未选中文字和分隔线共用 `type` 语义色；选中文字取对应的 `on-*`，`warning` 的填充、描边和分隔线取 `warning-pressed`、选中文字取 `on-warning`、未选中文字取 `warning-ink`，`default` 用正文色配 `text-inverse`。`color` 同时改前三处和分隔线，`activeTextColor` / `textColor` / `bgColor` 各只覆盖一处，`borderColor` 覆盖外框和分隔线；五者都是字面值，整组禁用时不生效。`color` 用主题令牌或底色偏浅时同时传 `activeTextColor`；`disabled` 和单项禁用都淡到 0.5，状态同时由底色和字重表达，不能只靠颜色。
- 分页器只翻页，不承载业务状态：`plain` 是中性的 `surface` 底、1px `border` 和正文色，强调只留给当前页码；`soft` 用对应的 `*-soft` 底配 `*-pressed` 文字，`solid` 用语义实心底配 `on-*`，`text` 不铺底色也不画描边。`warning` 的实心取 `warning-pressed`、文字取 `on-warning`，浅底和纯文字取 `warning-ink`；`default` 的实心用正文色配 `text-inverse`，当前页码仍回落到 `primary`。当前页码用 `type` 的语义色，总页数和斜杠用 `text-secondary`；`color` 同时改当前页码和 `plain` / `soft` / `text` 的文字，`plain` 的描边也一起改；`bgColor` / `textColor` / `borderColor` 各只覆盖一处，四者都是字面值，禁用时仍按原色淡出。实心按钮传 `bgColor` 而没传 `borderColor` 时，描边跟底色；底色和默认文字对比不足时要一起传 `textColor`，明暗推导不归组件。第一页的上一页、最后一页的下一页只淡按钮，整条 `disabled` 把按钮和页码一起淡到 0.5。
- 瀑布流只做排布，不用语义色：卡片默认 `surface` 底、1px `border` 描边，标题和价格用正文色，说明、原价和底部文字用 `text-secondary`；图片标签用正文色底配 `text-inverse`，失败占位和空状态用 `default-soft` 底、`disabled-text` 图标。`bgColor` / `borderColor` / `titleColor` / `priceColor` / `metaColor` 各只改一处，都是字面值；价格需要品牌色时由业务传 `priceColor`，组件不做明暗推导。
- 索引列表的分组标题用 `default-soft` 浅底配正文色，比行内容深一档靠底色分层，不加阴影；吸顶时同一样式压在列表上，底部 1px `divider` 只做分界。索引条未选中字母用 `text-secondary`，当前分组的字母用 `activeColor` 实心底配 `on-primary`；拖动时出现的指示器复用同一个 `activeColor`。`activeColor` 是字面值，不跟随主题，只改这两处，前景仍取 `on-primary`，浅色品牌底的对比度由业务保证。空状态图标用 `disabled-text`、文案用 `text-secondary`。
- 提示页的图标圆用 `type` 的语义实心底配对应的 `on-*`，`warning` 配 `on-warning` 深色字；`default` 用 `default-soft` 浅底配 `text-secondary`。`bgColor` 只改圆底、`iconColor` 只改字形，都是字面值，浅底或品牌底的对比度由业务保证。标题用 `text`，说明用 `text-secondary`，状态不能只靠圆底色表达。
- 提示页的主要操作跟随 `type` 实心、辅助操作跟随 `type` 浅底；`default` 页面没有语义色，两个动作回落到 `primary`。`primaryType` / `secondaryType` 可以分开覆盖，`warning` 的实心底仍配 `on-warning` 深色字。
- 页脚只做收尾：版权、备案号和辅助链接用 `text-secondary`，链接用 `primary-pressed`。页脚不是导航区，不放主操作，也不用语义色装饰。
- 实心按钮和标签的前景必须使用对应的 `on-*` 颜色；`warning` 的琥珀底不配白字。
- 正文文本对比度不低于 4.5:1，非文本控件边界不低于 3:1，禁用态除外。
- `mask` 只用于弹层遮罩，不用于图片蒙层。
- 加载指示器的 `type` 只改转圈，文案保持 `text-secondary`；浮层里默认转圈和文案改用 `text`，保证面板上的对比。加载更多、没有更多不铺语义底色。
- 加载动画 `vx-loader` 的面板和前景固定：面板 `#23262e`、主文案 `#ffffff`、说明 `rgba(255, 255, 255, 0.64)`、轨道 `rgba(255, 255, 255, 0.24)`，亮暗同值，不跟主题反色。`type` 只改行内动画，面板和浮层固定白色；`color` 覆盖动画色，`panelColor` 只换面板底色，`maskColor` 只换遮罩，三者都是字面值，浅底对比度由业务保证。液面方块的空白区用 `default-soft`（面板上用 `loader-track`），液体取动画色。
- 骨架屏只用中性色：占位块取 `--vx-skeleton-fill`，亮色 `#eceff5`、暗色 `#2a2e38`；扫光取 `--vx-skeleton-shine`，亮色 72% 白、暗色 8% 白。`color` / `shineColor` / `bgColor` 各只改一处，都是字面值，不表达状态；不用品牌色和语义色画骨架。
- 没有更多的两侧细线默认用 `divider`，文案用 `text-secondary`，圆点用 `disabled-text`；`lineColor` 和 `color` 只覆盖各自那一处。自定义颜色只作品牌收尾，不表达成功、失败或警告。
- 倒计时的 `type` 只表达紧迫程度，不用于装饰；默认用正文色。`color` 只改数字和十分位，`unitColor` 只改分隔符号与单位，`bgColor` / `borderColor` 各改一处；默认按字面值使用，传 `var(--vx-color-*)` 时跟随主题，对比度由业务保证。
- 进度条的轨道默认用 `default-soft`，填充色跟随 `type`（`warning` 用 `warning-pressed`，`default` 用正文色）；`bgColor` 只改填充、`trackColor` 只改轨道、`color` 只改右侧数值，三者默认按字面值使用，组件不做明暗推导。渐变只给明确的品牌强调，一屏最多一处，不用于表达成功或失败。
- 环形进度的轨道默认 `default-soft`，弧线跟随 `type`：`warning` 取 `warning-pressed`，`default` 取正文色。中心数值默认跟弧线色，`warning` 的数值改用 `warning-ink`，白底上才够 4.5:1。`color` 只改弧线和默认数值，`textColor` 只改数值，`trackColor` 只改轨道，`bgColor` 只改圆心，四者都是字面值；半圆的 `bgColor` 铺成上半圆。弧线只画实色，不用渐变表达状态。
- 标签页的选中态用 `type` 的语义色，普通导航保持 `primary`，不要给每组页签换一种颜色。`soft` 的文字落在 `*-soft` 底上，取对应的 `*-pressed`，warning 取 `warning-ink`。角标默认 `danger`，和徽章一样只表达未读、待处理；`inverse` 默认整条用正文色，品牌底色由 `bgColor` 显式传入，普通导航不要默认铺 `primary`。
- 标签栏的栏底色用 `surface`，顶部 1px `divider`；未选中文字和字体图标用 `text-secondary`，选中态跟 `type`，warning 用 `warning-ink`。凸起圆钮是实心的 `type` 色：warning 取 `warning-pressed`，图标取对应的 `on-*`，`default` 用正文色底配 `text-inverse`，禁用时换成 `disabled-bg` / `disabled-text`。角标默认 `danger`，规则和徽章一致。`bgColor` / `color` 是字面值，不跟随主题；选中态仍跟 `type`，对比度由业务保证。
- 滑动菜单的动作底色跟着 `type`：`default` 用 `default-soft` 浅底配正文色，其余五种用实心底配对应的 `on-*`；warning 的琥珀底配 `on-warning` 深色字。自定义 `bgColor` / `color` 是字面值，禁用时两者都不生效。
- 区块标题栏的标题用 `text`，说明用 `text-secondary`；竖线默认 `primary`，只作区块标记，不表达状态，也不占用一屏一个实心主操作的名额。`soft` 浅底用 `default-soft`，分割线用 `border`；`soft` 浅底上的说明亮色改用 `text`、暗色仍用 `text-secondary`（`--vx-section-soft-desc`），次要灰在 `default-soft` 上不到 4.5:1。`titleColor` / `descriptionColor` / `markerColor` / `dividerColor` 各只覆盖一处，都是字面值，不跟随主题。
- 通告栏默认用 `warning` 的琥珀浅底表达「需要留意」；普通公告用 `info`，中性说明用 `default`，结果用 `success` / `danger`。`soft` 用对应的 `*-soft` 底，文案和图标取 `*-pressed`，warning 取 `warning-ink`；`solid` 用语义实心底配 `on-*`，default 用正文色反相底配反色字；`plain` 透明。`bgColor` 只改底色，`color` 改文案并作为图标默认色，`iconColor` 只改图标和关闭叉；组件不做明暗推导。字面值不跟随主题时，亮暗两套对比度由业务保证。
- 气泡弹框的 `surface` 面板用 `surface` 底和 `border` 描边；`solid` 面板用 `type` 的语义实心底和 `on-*` 前景，warning 配 `on-warning` 深色字。`surface` 下菜单项的 `primary` / `danger` 只改文字和图标，`solid` 不按项染色；禁用项在 `surface` 上用 `disabled-text`，`solid` 上用 `--vx-opacity-disabled`。分割线用 `divider`，`solid` 用前景色降透明度。
- 二维码默认 `#1a1d26` 深码配 `#ffffff` 浅底（`--vx-qrcode-dark` / `--vx-qrcode-light`），不跟随亮色、暗色主题：反色二维码很多扫码器认不出来，宁可让白底方阵在暗色页面里独立成块。`color` 只改深色模块，`bgColor` 同时改底板和空白边距，两者都是字面值、组件不做明暗推导；对比度由业务保证，不使用渐变、半透明色和图片蒙层。
- 二维码的空状态和错误态用 `default-soft` 浅底，说明用 `text-secondary`；空状态图标取 `disabled-text`，错误态图标用 `warning`。内容过长不是业务错误，不铺 `danger`。
- 图片预览固定黑底白字，亮色、暗色同值，不跟主题反色：看图时要压掉页面层次，黑底也让图片的明度判断更准。`viewer-muted` 用于计数和失败说明，`viewer-control` 是关闭按钮的浅色底，`viewer-line` 只画底部工具行的 1px 分割线，`viewer-danger` 只给删除动作。预览层不铺语义色、品牌色和渐变，状态由文案和图标表达。
- 图片预览的计数、说明和删除动作都落在黑底上，前景对比度不低于 4.5:1；关闭按钮和删除热区不小于 44×44。`bgColor` 覆盖整层底色时，前景仍取 viewer 令牌，对比度由业务保证。
- 图片上传的格子只显示图片，不铺语义色：占位用 `default-soft`，图标和说明用 `disabled-text`；加号格用 `surface` 底、虚线 `border` 和 `text-secondary` 图标。上传和失败遮罩是图片上的固定暗层，不用 `mask` 令牌；进度条用 `viewer-fg` 白色。删除圆点是唯一红色（`danger` 底配 `on-danger`），失败不用红色描边。
- 压屏窗是活动浮层：遮罩取 `mask`，关闭按钮固定 `surface` 底配 `text-secondary` 叉，1px `border` 勾边、`--vx-shadow-md` 托起；海报和权益卡的颜色由内容自带，组件不染色、不铺底色。`closeColor` / `closeBgColor` / `maskColor` 各只改一处，都是字面值，浅色品牌底配深色叉的对比度由业务保证。
- 分隔列表的数值用 `text`，说明用 `text-secondary`，竖线用 `divider`，整条默认 `surface` 底；图片方框衬 `default-soft`，透明图的留白落在浅灰上。角标复用徽章的 `type`，默认 `danger`，只表达未读、待处理。`bgColor` / `valueColor` / `labelColor` / `dividerColor` 各只覆盖一处，每项的 `valueColor` / `labelColor` 再盖过全局；这些颜色都是字面值，禁用时数值和说明颜色不生效，整格内容淡到 0.5；整条底色保留，竖线随整格变淡，对比度由业务保证。
- 选择框的单选用正圆标记、多选用小圆角方形标记：选中填充跟随 `type`，`warning` 取 `warning-pressed`、对号取 `on-warning`，`default` 用正文色填充配 `text-inverse`；未选中标记用 `text-secondary` 描边。`color` / `borderColor` / `checkColor` 各只覆盖填充、未选中描边和对号，都是字面值，禁用时不生效。确定按钮固定走 `confirmType`，默认 `primary`，和标记的语义色分开；选项图片衬 `default-soft`，禁用时只压透明度，不染色。`titleColor` 只改标题，`maskColor` 只改遮罩。
- 弹出层只做容器：面板 `surface` 底、遮罩 `--vx-color-mask`，不铺语义色，也不给内容染前景色。`maskColor` 只改遮罩，是字面值；面板底色、文字和图标颜色都由业务自己带，组件不做明暗推导，也不在面板上铺品牌色。
- 文本的 `type` 只改文字颜色：`default` 用 `text`，`secondary` 用 `text-secondary`，语义色按状态取 `primary` / `success` / `info` / `warning-ink` / `danger`；warning 正文用 `warning-ink`，不用琥珀原色。`color` 是字面值，优先于 `type`，`disabled` 又盖过两者并转 `disabled-text`；这些颜色都不改底色和字重。
- 链接默认用 `primary`，`secondary` 只用于正文里不该抢眼的内联入口；`success` / `info` / `warning` / `danger` 只在链接本身表达状态时出现，warning 用 `warning-ink`。`color` 是字面值，优先于 `type`，禁用时两者都不生效，文字转 `disabled-text`。复制后的提示走系统轻提示，组件不另外铺底色或描边。
- 页面容器不承载配色：`bgColor` 只改页面底色，默认 `--vx-color-bg`；`navBgColor` 和 `color` 原样透传给 `vx-navigation-bar`，三者都是字面值，组件不做明暗推导。页面不改变导航栏、吸顶条和标签栏各自的语义色，也不在页面上铺渐变和遮罩。

- 表单标题用 `text`，星号用 `danger`，常驻说明用 `text-secondary`，错误行用 `danger`；错误不能只用颜色表达，错误行必须同时有文案，表单本身不铺底色、描边和语义色。禁用项跳过校验，标题和星号不因为禁用而转灰。

- 验证码输入框的焦点格用 `type` 的语义色描边、`*-soft` 浅底和同色光标，`warning` 取 `warning-ink`，`default` 用正文色和 `default-soft`；未聚焦格子和已填数字保持中性。`invalid` 时描边、焦点浅底和光标转 `danger`，`disabled` 时整格转 `disabled-bg` / `disabled-text`。`color` / `bgColor` / `borderColor` / `textColor` / `cursorColor` 各改一处，字面值，禁用时不生效。
- 状态栏只负责系统状态栏区域的底色和留白：默认 `surface`，`bgColor` 可传品牌色、渐变或令牌。系统时间、信号和电池由平台绘制，组件不改前景；浅底配深色前景、深底配浅色前景由 `pages.json` 的 `navigationBarTextStyle` 或系统配置决定。组件不画分割线、阴影，也不做明暗推导。
- 数字键盘的键位只用中性色：数字键 `surface` 底配 `text` 数字，0 同样；左下角动作键和退格键用 `default-soft` 浅底，取消取 `text-secondary`、退格取 `text`，让两个出口一眼分开。格子之间是 1px `divider`，面板 `surface`，遮罩 `mask`；数字键盘不铺语义色，`color` / `bgColor` / `panelColor` / `maskColor` 各只覆盖一处，都是字面值；禁用时只停 `color` / `bgColor`，面板和遮罩颜色保留。
- 数字键盘输入框的密码位只有三态：下一位取 `type` 的强调色（`default` 为正文色），已填取正文色（`textColor`），空位取 `text-secondary`（`borderColor`）；`invalid` 时三者一起转 `danger`，`disabled` 时转 `disabled-text`，数字、圆点和下划线同色。`invalid` 与 `disabled` 盖过密码位这三个自定义颜色，键盘底色和遮罩色仍生效；键盘部分沿用 `vx-keyboard` 的中性色，不跟着密码位染色。
- 树型菜单只做层级和选择，不用语义色装饰：未选中行用 `text`，图标和箭头用 `text-secondary`，参考线用 `border`；选中行用 `type` 的 `*-soft` 浅底和 `*-pressed` 文字，`warning` 用 `warning-ink`，`default` 用 `default-soft` 配正文色。勾选框沿用复选：填充跟 `type`（`warning` 取 `warning-pressed`），对号和横线取对应的 `on-*`，未选中只画 `text-secondary` 描边。
- 树型菜单的 `color` 只改选中文字、选中图标和勾选框填充，`activeBgColor` 只改选中底色，`textColor` 只改未选中文字和箭头，`iconColor` 只改未选中图标，`lineColor` 只改参考线，`bgColor` 只改整块底色；六者都是字面值，组件不做明暗推导，禁用时文字和图标仍转 `disabled-text`，整行淡到 0.5。
- 图片底座只做占位与回落，不用语义色：加载中和失败态铺 `default-soft`，失败图标取 `disabled-text`、文案取 `text`（次要灰在 `default-soft` 上不到 4.5:1）；`bgColor` 是字面值，只改这一层底色，对比度由业务保证，组件不做明暗推导。成功态不染色、不加蒙层，也不读骨架屏令牌。
- 分割线只用一条中性线：默认 `border`，比列表行内的 `divider` 深一档；带文字时文字取 `text-secondary`。`color` 是字面值，同时覆盖线色和文字色，不表达成功、失败或警告。
- 安全区不承载颜色语义：默认透明，`bgColor` 是字面值，只铺这一条；固定态也不加分割线、毛玻璃和渐变，系统状态栏的前景仍由 `pages.json` 或系统配置决定。
- 虚拟列表只做切片，不承载语义色：行本身不铺底色，分割线用 `divider`，空态文案用 `text-secondary`；行内容的背景、选中态和点击反馈由插槽自己带，组件不加品牌色和状态色。
- 轮播图只做图片和标题，不承载语义色：指示器当前项用 `primary`、其余用 `default-soft`（放在图片外面时改用 `text-secondary`），计数胶囊是 `rgba(0, 0, 0, 0.45)` 暗底配白字，标题条同样是固定暗层配白字，亮暗同值。`extra` 和默认插槽的颜色由业务自己带，组件不做明暗推导，也不往图片上铺蒙层。
- 数字动画只输出一串数字：默认正文色，`bold` 只把字重加到 600，不改颜色；`color` 是字面值、只改文字，不铺底色、不加描边。它不表达成功、警告或失败，状态由旁边的标签和图标说。
- 筛选栏只做筛选入口，不承载语义色：触发条底色 `surface`，未选中文字和箭头用 `text-secondary`，展开项和已生效项用 `activeColor`（默认 `primary`）并加一档字重；面板是 `surface`，遮罩取 `mask`，选项自己的颜色由插槽内容带。`activeColor` 是字面值、只改这两处文字和箭头，浅色品牌底的对比度由业务保证。
- 返回顶部只用中性色：默认 `surface` 底、1px `border` 描边、`text-secondary` 图标；`bgColor` 只改底色、`color` 只改图标，都是字面值，组件不做明暗推导。它不表达成功或警告，也不铺语义底色。

## Themes

暗色主题不新增令牌名，替换同名值，由页面根节点的 `vx-theme-dark` 生效。组件不读取系统深色模式。

| 颜色令牌 | 亮色 | 暗色 |
| --- | --- | --- |
| primary | #2b6be0 | #7da2ff |
| primary-pressed | #245cc2 | #5c8bf5 |
| primary-soft | #eef3ff | #1b2740 |
| on-primary | #ffffff | #0b1020 |
| success | #0b7c46 | #34d399 |
| success-pressed | #09693b | #22b47f |
| success-soft | #e8f7ef | #10291f |
| on-success | #ffffff | #06140e |
| info | #0e7490 | #38bdf8 |
| info-pressed | #0b5f75 | #0ea5e9 |
| info-soft | #e7f6fa | #0e2a36 |
| on-info | #ffffff | #04181f |
| warning | #f79009 | #fbbf24 |
| warning-pressed | #dd7c04 | #e0a800 |
| warning-ink | #8a4b00 | #fbbf24 |
| warning-soft | #fff5e5 | #32250e |
| on-warning | #2a1a00 | #1a1200 |
| danger | #d92d20 | #f87171 |
| danger-pressed | #b42318 | #e25555 |
| danger-soft | #ffefef | #2f1515 |
| on-danger | #ffffff | #1a0605 |
| bg | #f5f7fb | #101216 |
| surface | #ffffff | #1a1d24 |
| default-soft | #eceff5 | #24272f |
| surface-pressed | #f1f3f7 | #23262e |
| border | #e6e8ee | #2c303a |
| divider | #eef1f5 | #2c303a |
| text | #1a1d26 | #f2f4f8 |
| text-secondary | #6b7280 | #9aa1ad |
| text-inverse | #ffffff | #101216 |
| disabled-bg | #eef0f4 | #24272f |
| disabled-text | #a7adba | #5c626e |
| mask | rgba(16, 18, 22, 0.45) | rgba(0, 0, 0, 0.6) |
| viewer-bg | #000000 | #000000 |
| viewer-fg | #ffffff | #ffffff |
| viewer-muted | rgba(255, 255, 255, 0.64) | rgba(255, 255, 255, 0.64) |
| viewer-line | rgba(255, 255, 255, 0.12) | rgba(255, 255, 255, 0.12) |
| viewer-control | rgba(255, 255, 255, 0.14) | rgba(255, 255, 255, 0.14) |
| viewer-danger | #ff8a80 | #ff8a80 |
| loader-panel | #23262e | #23262e |
| loader-fg | #ffffff | #ffffff |
| loader-muted | rgba(255, 255, 255, 0.64) | rgba(255, 255, 255, 0.64) |
| loader-track | rgba(255, 255, 255, 0.24) | rgba(255, 255, 255, 0.24) |
| skeleton-fill | #eceff5 | #2a2e38 |
| skeleton-shine | rgba(255, 255, 255, 0.72) | rgba(255, 255, 255, 0.08) |

暗色主题只替换颜色令牌与阴影。字号、间距、圆角、尺寸不随主题变化。

`--vx-section-soft-desc` 是区块标题栏在 `soft` 浅底上的说明色：亮色取 `text`（#1a1d26），暗色取 `text-secondary`（#9aa1ad），避免 #6b7280 落在 `default-soft` 上只有 4.2:1。

导航栏背景、窗口背景放 `libs/theme.ts`，分别对齐 `surface`、`bg`。导航栏前景只有 `#000000` 和 `#ffffff`，`setNavigationBarColor` 只接受这两个值。`pages.json` 的 `globalStyle` 使用同一套亮色值。

## Typography

字号变量按尺寸命名，语义档位与变量的对应关系固定：

| 语义 | 变量 | 字号 / 行高 / 字重 |
| --- | --- | --- |
| display | `--vx-font-xl` `--vx-line-xl` `--vx-weight-bold` | 28 / 34 / 700 |
| title | `--vx-font-lg` `--vx-line-lg` `--vx-weight-semibold` | 17 / 24 / 600 |
| body | `--vx-font-md` `--vx-line-md` `--vx-weight-regular` | 15 / 22 / 400 |
| body-small | `--vx-font-sm` `--vx-line-sm` `--vx-weight-regular` | 13 / 20 / 400 |

- `display` 只用于页面级品牌区，一屏最多一处。
- `title` 用于区块标题。正文用上表的 `body` / `body-small` 档位。
- `body` 是正文与辅助说明的默认档位。
- `body-small` 用于辅助说明、分区标签、脚注。
- 控件文案比同档正文大 1px，单独用 `--vx-font-control-*`，跟控件高度配套，不跟正文抢档位：

| 控件尺寸 | 字号 | 行高 | 字重 |
| --- | --- | --- | --- |
| sm | `--vx-font-control-sm` 14px | `--vx-line-sm` 20px | 按钮 500，表单标题 500 |
| md | `--vx-font-control-md` 16px | `--vx-line-md` 22px | 按钮 500，表单标题 500 |
| lg | `--vx-font-control-lg` 18px | `--vx-line-lg` 24px | 按钮 500，表单标题 500 |

- 表单标题沿用控件字号 `--vx-font-control-*`（14 / 16 / 18，行高 20 / 22 / 24、500），`size` 三档只换字号和行高；错误行和常驻说明固定 `body-small`（13 / 20 / 400），不跟 `size` 放大。星号跟标题同字号，只染色不加档。
- 按钮文案用 `medium`；输入框 / 多行输入框的标题用 `medium`；输入内容、占位、单位和辅助文字用 `regular`。
- 标签文案单独用 `--vx-tag-font-*` / `--vx-tag-line-*`：12 / 16、13 / 18、14 / 20，字重 `regular`。12 只给标签 `sm`，不进按钮和输入框。
- 徽章文案单独用 `--vx-badge-font-*`：12 / 13 / 14，跟徽章盒子配套，字重 `medium`。行高等于盒子高度，不单独定义。
- 页脚不是控件：版权、备案号用 `body-small`（13 / 20 / 400），辅助链接用 `body`（15 / 22 / 500）。不借用 `--vx-font-control-*`。
- 消息提示的文案用 `body`（15 / 22 / 400），不借用控件字号；图标仍用 `--vx-icon-md`，不跟字号联动。
- 轻提示的文案同样用 `body`（15 / 22 / 400），图标单独 40px，不跟字号联动；多行按行高自然增高。
- 操作菜单的标题用 `title`（17 / 24 / 600），说明用 `body-small`（13 / 20 / 400）；动作和取消文案用 `body`（15 / 22 / 500），不借控件字号。
- 抽屉的标题用 `title`（17 / 24 / 600）；正文由业务组合，沿用正文档位，不借控件字号。
- 弹出层没有文案档位：标题、说明和按钮由业务组合，沿用正文档位和控件字号；组件只画一个关闭叉图标，固定 `md` 18，不跟字号联动。
- 弹框的标题固定 17 / 24 / 600，正文 15 / 22 / 400 次要色，都居中；动作文案沿用 `sm` 控件的 14 / 20 / 500，不借正文档位。弹框的字号不随 `size` 变化。
- 日期时间选择器的滚轮文字用 `body`（15 / 22）：未选中 `text-secondary` 400，选中 `text` 600；六列时收一档到 `body-small`（13 / 20）。单位固定 `body-small`（13 / 20），头部取消和确定用 `body`（15 / 22 / 500），标题用 `title`（17 / 24 / 600）。滚轮行高 44 不随字号变，字号收一档后上下留白更大；选择器不是控件，不借 `--vx-font-control-*`。
- 联动选择的滚轮文字和日期时间选择器同档：15 / 22，未选中 `text-secondary` 400，选中 `text` 600，不可选 `disabled-text`；四列起收一档到 13 / 20。头部取消、确定 15 / 22 / 500，标题 17 / 24 / 600，不可选提示用 `warning-ink`。空状态文案 13 / 20 次要色。选择器不是控件，不借 `--vx-font-control-*`。
- 标签页是导航行，文案用 `--vx-font-control-*`（14 / 16 / 18，行高 20 / 22 / 24）：未选中 400，选中 500。页签高度沿用列表行，字号仍按控件档位走，不借正文档位；角标用 `--vx-badge-font-*`。
- 标签栏的文案用 `--vx-tabbar-font-*` / `--vx-tabbar-line-*`：`sm` / `md` 13 / 20，`lg` 14 / 22，未选中 400，选中 500。标签栏是页面骨架，不借正文档位和控件字号；角标用 `--vx-badge-font-*`，图片图标没有文案档位。
- 导航栏标题用 `title`（17 / 24 / 600），单行省略；返回箭头仍用 `--vx-icon-lg` 22，不跟字号联动。导航栏是页面框架，不借 `--vx-font-control-*`。
- 状态栏没有文案档位：默认插槽的内容自己带字号和颜色，不借正文档位和控件字号；App 上这块内容会被系统状态栏盖住。
- 滑动菜单的动作文案用 `body`（15 / 22 / 500），图标固定 18、排在文案上方；动作不是表单控件，不借 `--vx-font-control-*`。`extra` 插槽里的文案由业务自己带。
- 日历的日期数字 15 / 20（`--vx-calendar-line-day`，比正文行高紧一档，方块里才排得开），农历和「开始 / 结束」单独 10 / 12（`--vx-calendar-font-sub` / `--vx-calendar-line-sub`），贴着方块底边；小字槽不占布局，所以整行数字对齐。选中不额外加字重，靠底色和文字色分层。标题用 `title`（17 / 24 / 600），星期行 13 / 20，结果行 13 / 16（`--vx-calendar-line-result`，只是交代选了什么），确定按钮 15 / 22 / 500。日历不是控件，不借 `--vx-font-control-*`。
- 加载中、加载更多和没有更多属于辅助状态，文案用 `body-small`（13 / 20 / 400）；加载中和没有更多的 `lg` 跟到 `body`（15 / 22 / 400）。它们不是控件，不借用 `--vx-font-control-*`。
- 加载动画的行内主文案 13 / 20（`lg` 15 / 22）、字重 500，说明 13 / 20、字重 400，都用次要灰，靠字重分层；面板主文案按 `size` 取 13 / 15 / 17（20 / 22 / 24）、字重 500、白色，说明固定 13 / 20 / 400、`loader-muted`。加载动画不是控件，不借 `--vx-font-control-*`。
- 评分的分值用 `body-small`（13 / 20 / 400），`lg` 星形旁跟到 `body`（15 / 22 / 400）。分值是辅助说明，不借 `--vx-font-control-*`。
- 单选的横排文案用 `--vx-font-control-*`（14 / 16 / 18，行高 20 / 22 / 24、400），列表行改用 13 / 15 / 17（20 / 22 / 24、400），和 `vx-list-cell` 同档；说明固定 13 / 20 次要色。行内高度是控件，列表行是列表，两者不互相借档位。
- 复选的文案档位和单选一致：横排 14 / 16 / 18，列表 13 / 15 / 17，说明固定 13 / 20 次要色；方框大小不改变字号。部分选中的「全选」行仍是普通选项文字，不另加字重。
- 开关的文案档位和单选一致：单独一行时 14 / 16 / 18，行高 20 / 22 / 24；列表行改用 13 / 15 / 17（20 / 22 / 24、400），和 `vx-list-cell` 同档；说明固定 13 / 20 次要色。`size` 同时决定轨道档位和文案档位，轨道和字号各取各的档位。
- 分段器的文案用 `--vx-font-control-*`（14 / 16 / 18，行高 20 / 22 / 24）：选中 500，未选中 400；段宽均分，文案 1–4 个字、单行省略。分段器是控件，不借正文档位。
- 分页器的按钮文案用 `--vx-font-control-*`（14 / 16 / 18，行高 20 / 22 / 24，字重 500），当前页码同字号、字重 600，总页数和斜杠同字号、字重 400、次要色。分页器是控件，不借正文档位；箭头沿用图标三档 14 / 18 / 22，不跟字号联动。
- 瀑布流的标题和价格跟正文档位走，不借控件字号：`sm` 标题 13 / 20、价格 15 / 22，`md` 标题 15 / 22、价格 17 / 24，`lg` 标题 17 / 24、价格 17 / 24；说明、原价和底部文字固定 13 / 20，`lg` 的底部文字跟到 15 / 22。卡片上的角标用标签令牌：高 20 / 24 / 28，字 12 / 13 / 14。
- 索引列表的分组标题固定 13 / 20 / 600，三档只改行高不换字号；行主文案 13 / 15 / 17（20 / 22 / 24、400），说明固定 13 / 20 次要色，行尾短值 `sm` / `md` 用 13 / 20、`lg` 用 15 / 22。索引条字母 10 / 11 / 12、500，当前分组 600；指示器字母 24 / 28 / 32、700，不借正文档位。空状态文案 13 / 20 / 400 次要色。
- 树型菜单的文案沿用控件字号：14 / 16 / 18，行高 20 / 22 / 24，字重 400；树的行高单独收紧到 36 / 44 / 52，不借正文档位。选中行只换文字色、图标色和底色，不加字重，避免字宽变化让文案跳位。默认插槽的内容自己带字号，不继承行文案档位。
- 时间轴的阶段名按 `size` 取 13 / 15 / 17，行高 20 / 22 / 24，字重 600；说明 `sm` 用 13 / 20，`md` / `lg` 用 15 / 22；时间固定 13 / 20 次要色。时间轴不是控件，不借用 `--vx-font-control-*`。
- 步骤条的步骤名按 `size` 取 13 / 15 / 17，行高 20 / 22 / 24，字重 600；说明 `sm` 用 13 / 20、`md` / `lg` 用 15 / 22；时间固定 13 / 20 次要色。节点里的序号单独用 12 / 13 / 14 的 `--vx-steps-font-*`，不借控件字号。步骤条不是控件，不借用 `--vx-font-control-*`。
- 卡片标题按 `size` 取 13 / 15 / 17，行高 20 / 22 / 24，字重 600；正文 `sm` 用 13 / 20，`md` / `lg` 用 15 / 22；`meta` 与 `footer` 固定 13 / 20。卡片不是控件，不借用 `--vx-font-control-*`。
- 区块标题栏的标题按 `size` 取 15 / 17 / 20，行高 22 / 24 / 28，字重 600；说明 `sm` / `md` 用 13 / 20，`lg` 用 15 / 22。标题栏不是控件，不借用 `--vx-font-control-*`。
- 滚动消息的文案用 `body` 三档：`sm` 13 / 20、`md` 15 / 22、`lg` 17 / 24，字重 400，单行省略；字号和行高直接取 `--vx-font-*` / `--vx-line-*`，不另开令牌。滚动消息是展示行，不借 `--vx-font-control-*`。
- 通告栏的文案同样用 `body` 三档：`sm` 13 / 20、`md` 15 / 22、`lg` 17 / 24，字重 400；单行省略，`wrap` 时换行。滚动通告固定单行，字号和行高随 `size` 走。通告栏是展示行，不借 `--vx-font-control-*`。
- 气泡弹框的菜单文案用 `body`（15 / 22 / 500），右侧短值 13 / 20 / 400 次要色；图标固定 18、勾固定 14，不跟字号联动。inline 聊天内容用 `body`（15 / 22 / 400）。气泡不是控件，不借 `--vx-font-control-*`。
- 宫格主文案按 `size` 取 13 / 15 / 17，行高 20 / 22 / 24，字重 400，单行省略；说明固定 13 / 20，可以换行。宫格不是控件，不借用 `--vx-font-control-*`。
- 图片组合没有文案档位：缩略图只是图片，标题、数量和说明由外面的卡片、列表行或页面区块提供。
- 图片预览的计数用 `body-small`（13 / 20 / 500）配 `viewer-muted`；说明用 `body`（15 / 22 / 400）配 `viewer-fg`；删除用 `body-small`（13 / 20 / 500）配 `viewer-danger`；加载失败说明用 `body-small`（13 / 20 / 400）配 `viewer-muted`。预览层不是控件，不借 `--vx-font-control-*`。
- 图片上传的百分比、「上传中」「重试」用 `body-small`（13 / 20）配 `viewer-fg`，百分比 600，其余 500 / 400；空态和占位说明用 13 / 20 次要色或 `disabled-text`。上传格子不是控件，不借 `--vx-font-control-*`。
- 压屏窗没有文案档位：海报和权益卡由内容自带文案，关闭按钮只有图标；不借正文档位和控件字号。
- 二维码的空状态和错误态说明用 `body-small`（13 / 20 / 400）次要色，居中显示，最多两行；二维码本身没有文案档位，券号、有效期和说明由外面的卡片承载。
- 倒计时的数字按 `size` 取 13 / 15 / 17，行高 20 / 22 / 24，字重 600；十分位、单位和冒号 13 / 15，行高 20 / 22。倒计时不是控件，不借用 `--vx-font-control-*`。
- 进度条的标签和数值按 `size` 取 13 / 15 / 17，行高 20 / 22 / 24；标签 400 次要色，数值 500 正文色。进度条不是控件，不借用 `--vx-font-control-*`。
- 环形进度的中心数值按 `size` 取 13 / 15 / 17，行高 20 / 22 / 24，字重 500，默认跟弧线色；插槽里的标签和值自己带字号。环形进度不是控件，不借用 `--vx-font-control-*`。
- 暂无数据的主文案按 `size` 取 13 / 15 / 17，行高 20 / 22 / 24，字重 500（`lg` 600）；说明 `sm` / `md` 用 13 / 20，`lg` 用 15 / 22。空状态不是控件，不借用 `--vx-font-control-*`。
- 提示页的标题按 `size` 取 17 / 20 / 26，行高 24 / 28 / 34，字重 600（`lg` 700）；说明 `sm` 用 13 / 20，`md` / `lg` 用 15 / 22、17 / 24。标题和说明都居中，页面级结果不借 `--vx-font-control-*`。
- 分隔列表的数值按 `size` 取 17 / 20 / 24，行高 22 / 26 / 30，字重 600；说明 12 / 13 / 14，行高 16 / 18 / 20，字重 400 次要色。两组都用 `--vx-divide-*`，不借正文档位和控件字号；数值和说明之间只留 2。
- 选择框的选项文案沿用列表行档位：13 / 15 / 17，行高 20 / 22 / 24，字重 400；标题用 `title`（17 / 24 / 600），空状态用 `body-small`（13 / 20 / 400）次要色。确定按钮是控件，沿用控件字号，不借正文档位。
- 文本组件的正文按 `size` 取 13 / 15 / 17，行高 20 / 22 / 24，字重 regular / medium / semibold / bold（400 / 500 / 600 / 700）；不借 `--vx-font-control-*`。页面级 28 / 34 的展示标题仍用 `--vx-font-xl` / `--vx-line-xl`，不放进正文组件。`secondary` 是正文的次要层级，不是第四级灰度。
- 链接沿用正文档位 13 / 15 / 17（20 / 22 / 24），字重默认 `medium`；不借 `--vx-font-control-*`，也不为链接单独放大一档。下划线只加装饰线，不改字号、字重和颜色。
- 验证码输入框的数字按 `size` 取 18 / 22 / 26，行高等于格子 40 / 48 / 56，字重 600；分隔符用 `body` 15 / 22 次要色，不借控件字号。密码圆点用 `view` 画，不用字体字符。
- `--vx-weight-medium` 用于按钮、表单标题和页脚链接；标签沿用正文的 400，靠底色、描边和尺寸区分。
- 行高跟随所属档位，不单独定义。
- 数字与金额如需等宽，另加数字字体令牌，不复用正文档位。

- 图片底座没有正文档位：失败态文案固定 `body-small`（13 / 20 / 400）正文色，图标沿用 `--vx-icon-*` 的 18，不跟尺寸联动；成功态不显示文字。
- 轮播图的标题和计数胶囊都用 `body-small`（13 / 20 / 400），单行省略；不借控件字号，也不为标题条单独放大一档。`extra` 里的角标沿用标签字级。
- 数字动画的字号沿用控件三档 14 / 16 / 18，行高 20 / 22 / 24，字重默认 400、`bold` 取 600；不做页面级 28 / 34 的展示数字，大号数字由外层排版承担。
- 筛选栏的触发项沿用控件字号 16 / 22（`--vx-font-control-md` / `--vx-line-md`），未选中 400、展开和已生效 500；箭头 14（`--vx-icon-sm`），不跟字号联动。面板里的行和按钮由插槽内容取自己的档位。
- 返回顶部的自定义文案固定 13 / 20、字重 500，图标 22（`--vx-icon-lg`）；不借正文档位，也不为「回到顶部」单独放大一档。
- 分割线带文字时用 `body-small`（13 / 20 / 400）次要灰，和线之间各留 12；不借控件字号，也不为分割线单独放大一档。纵向线没有文案档位。
- 安全区没有文案档位：组件不含文字，需要说明时由页面自己带。

## Layout

- 间距只取间距令牌，并且是 4 的倍数。
- 页面左右边距取 `lg`，区块间距取 `xl`。
- 上下留白 `vx-white-space` 只占纵向空间：`size` 三档直接取 `--vx-space-sm/md/lg`（8 / 12 / 16）；需要 24 / 32 这类区块间距时用 `height` 传带单位的值。宽度跟随父级，不参与点击，也没有插槽。
- 左右留白 `vx-wing-blank` 只加左右内边距：`size` 同样取 8 / 12 / 16，`gap` 传带单位的值时盖过档位。宽度跟随父级，高度由内容撑开；默认透明、无描边、无圆角、无外部间距。
- 两个留白组件的自定义值必须带单位；固定间距用 px，只有确实随屏宽变化时才用 rpx。`height` / `gap` 读不出单位时回落到档位。
- 页面左右边距只留一次：页面已经用 `lg` 时，通栏区块里的 `vx-wing-blank` 再用 `lg` 是把内容拉回页面边距，不是继续叠加；要再收进一段时才用更大的 `gap`。
- 交互控件高度只有三档：`sm` 32px、`md` 40px、`lg` 48px，按钮、输入框共用，对应 `--vx-control-height-*`。组件 `size` 使用同名的 `sm | md | lg`，默认 `md`。
- 数字框沿用交互控件三档高度，左右减号、加号按钮的宽度等于高度；中间数值区单独三档 44 / 52 / 60px（`--vx-number-box-field-*`），不并入控件高度。
- 紧凑高度单独三档：`sm` 28px、`md` 32px、`lg` 36px，给页脚链接和页签胶囊使用，对应 `--vx-compact-height-*`，不再并入交互控件高度。标签不借用这组高度。
- 列表行最小高度单独三档：`sm` 44px、`md` 48px、`lg` 52px，从可点热区起步，不并入 32 / 40 / 48 的控件高度。双行内容由内边距自然撑高，不固定行高。
- 列表行水平内边距 `sm` 12px、`md` / `lg` 16px，垂直 8 / 12 / 12px；说明固定 13 / 20，右侧值 `sm` / `md` 用 13 / 20，`lg` 用 15 / 22；箭头 14 / 18。
- 盒模型：Web 端 `box-sizing: border-box` 把描边和内边距算进宽高；App 蒸汽模式上同一层同时写 `min-height` 和纵向内边距时，总高会比令牌多出这份内边距，所以带纵向内边距的列表行在 `#ifdef APP` 块里用 `calc(var(--vx-list-height-*) - 纵向内边距)` 补回。只写 `height` 或只写左右内边距的层不受影响，弹层头部就是后者。两端是否对齐用 `pages/probe/box` 量，改令牌或改某行的纵向内边距后重跑一次。
- 导航栏内容行高 48px（`--vx-navigation-bar-height`），内置返回和右侧动作按行高 48 排，热区和行同高；`suffix` 里的动作自己包出 48 热区。左右各留 4px，返回热区才贴得到屏幕边，顶部状态栏留白取 `--uni-safe-area-inset-top`，横屏两侧取 `--uni-safe-area-inset-left` / `--uni-safe-area-inset-right`。标题 17 / 24 / 600 居中单行省略。
- 状态栏高度取 `--uni-safe-area-inset-top`（App 为状态栏与刘海，Web 为 0），`height` 传数字时是整条高度，0 表示跟随系统，超过 200 按 200。固定时占位同高；插槽内容左右各留 16，横屏再让开左右安全区；渐显距离是条宽 × `scrollRatio`（默认 0.3）。
- 页面容器的顶栏在文档流里：导航栏内容行 48，状态栏留白由导航栏的 `statusBar` 承担，不再叠一只状态栏。滚动区吃剩余高度，底部按 `tabbar`（`--vx-tabbar-height-md` 56）和 `--uni-safe-area-inset-bottom` 叠加占位，两者相加就是插槽里的 `bottomInset`；内容左右留 `lg` 16，`padded=false` 交给业务。`navHeight` 只算内容行（不含状态栏），直接给 `vx-sticky` 的 `offsetTop`；导航栏第一次 `ready` 的瞬态值不采用，内容行下限 48。`scroll=false` 时不锁高，整页交给页面滚动，`refresh` / `loadmore` / `scrollToTop` 不生效；触底阈值固定 80，不做成属性。
- 折叠面板的标题行沿用列表行最小高度 44 / 48 / 52，标题 13 / 15 / 17（20 / 22 / 24、500），说明固定 13 / 20，箭头 sm / md 用 14、lg 用 18；水平内边距 12 / 16 / 16，垂直 8 / 12 / 12。内容左右与标题对齐，上 8 / 12 / 16、下 12 / 16。这组尺寸不新增令牌，也不并入控件高度。
- 卡片不占外部间距，宽度跟随父级：正文四边内边距 12 / 16 / 24，头部上下 8 / 12 / 12、左右 12 / 16 / 24，头像 32 / 40 / 48。页面左右边距用 `lg`，卡片之间用 `xl`。
- 滚动消息是三档高的展示行：`sm` 32、`md` 40、`lg` 48（`--vx-rolling-news-height-*`），左右内边距 `sm` 12、`md` / `lg` 16，图标 14 / 18 / 22 跟档位，图标和文案留 8（`lg` 12），后缀同理。1px 描边含在这档高度里；滑层、视口和热区用内容区高度 `--vx-rolling-news-inner-*`（30 / 38 / 46），是行高减两条 1px 描边，直接写字面量，改行高时两处一起改。这组高度不并入控件三档。
- 通告栏是三档高的展示行：`sm` 32、`md` 40、`lg` 48（`--vx-notice-bar-height-*`），左右内边距 `sm` 12、`md` / `lg` 16；`plain` 不收左右内边距。`wrap` 时高度由内容撑开，最小高度仍是这一档，上下留 4 / 8 / 12。关闭热区宽度等于行高，关闭叉图标比文案小一档（14 / 14 / 18）；前置图标 14 / 18 / 22 跟档位，图标和文案留 8（`lg` 12），后缀同理。这组高度不并入控件三档。
- 气泡弹框的面板最小宽度 120（`--vx-bubble-min-width`）、最大 280（`--vx-bubble-max-width`），聊天 260（`--vx-bubble-chat-max-width`）；菜单四周留 4，项高沿用列表行 `sm` 44，左右内边距 12，图标和文案留 8，右侧短值也留 8；内容内边距 12 / 16。尾巴高 7、底边 14、旋转方块 9.9，沿边起点 16，气泡和触发区默认相距 8，离屏幕至少 8。这组尺寸不并入控件三档。
- 宫格宽度按 `columns` 分：2 / 3 / 4 / 5 列对应 50% / 33.33% / 25% / 20%；宽度含 1px 内部线，不另加列间距。最后一行不足时留白，不拉伸剩余格子。
- 宫格格子最小高度单独三档：`sm` 72px、`md` 88px、`lg` 104px，内边距 8 / 12 / 16；图片方框对应 32 / 40 / 48（`--vx-grid-media-*`），不并入控件高度。行高是下限，说明或默认插槽的内容由内边距自然撑高。
- 分隔列表的格子等宽，行高单独三档 56 / 70 / 84（`--vx-divide-height-*`），上下内边距 8 / 12 / 16、左右 4 / 8 / 8；数值 17 / 20 / 24，说明 12 / 13 / 14，图片 32 / 40 / 48（`--vx-divide-media-*`），不并入控件、列表行和宫格三档。竖线按档位行高的 `dividerHeight` 百分比算长度，默认 60，1px 宽，垂直居中；最后一项不画。
- 选择框是底部弹层：头部 52（`--vx-overlay-head`），标题 17 / 24 / 600，关闭叉 44×44、图标 18；选项行高沿用列表行 44 / 48 / 52，左右内边距 12 / 16 / 16，上下不再另外加内边距。标记 16 / 18 / 20，图片 28 / 32 / 36（`--vx-select-media-*`），标记和文案之间留 4（`lg` 8）。面板最大宽度 480（`--vx-select-max-width`）；列表最多显示 `maxRows` 行（默认 6，收在 2–10），超出后内部滚动，窗口矮时列表高度收在窗口内。底部确定按钮铺满整行、胶囊形，高度跟 `size` 取 32 / 40 / 48，左右留 16、上下留 12 / 16，底边再加安全区。
- 文本不占固定高度和内边距：内联按内容宽度，`block` 铺满父级；组件不加外边距、固定宽度和行高覆盖，段落间距和行内留白由父级布局给。`align` 只在 `block` 或确定宽度下生效。
- 文本的 `maxLines` 只截断显示：单行用 `nowrap + ellipsis`，App 再加 `max-lines`；多行在 App 5.21+ 用 `max-lines`，Web 和微信小程序用 `-webkit-box`；`copy` 和 `click` 仍拿完整文本。金额默认 `¥`、两位小数，`decimals` 收在 0–6。
- 链接是内联文字：按内容宽度排，不加内外边距、底色、描边和圆角；同一行的多段链接由父级 row + wrap 排开，间距由父级给。长链接用短文案，不截断地址。App 的 `max-width` 只认数字和 px，`100%` 兜底只在 Web 写。
- 栅格布局把一行分成 24 份：一份是行宽的 4.1667%，列宽向下取 6 位小数，24 个 1 加起来不超过 100%，最后一列不会被挤到下一行。
- 栅格的列间距 `gutter` 的一半铺在列的左右内边距上，行用等量负外边距抵掉外侧半格；行间距 `lineGutter` 落在换行后每一列的上外边距上，行抵掉第一行。两者都收 px，取 8 / 12 / 16 / 24，和间距令牌一致。
- 栅格的断点是 576 / 768 / 992 / 1200（min-width），只覆盖跨度；手机跨度仍写 `span`，不另开 `xs`。
- 图片组合的单张方框单独三档：`sm` 40px、`md` 64px、`lg` 88px（`--vx-image-group-size-*`），固定正方形，不跟父级宽度缩放。缩略图不是控件，不并入控件高度，也不再新增第四档。
- 图片组合的相邻偏移 `offset` 是像素数：负数重叠、正数留缝、0 贴边，行内只加前一张的后侧外边距，纵向只加上方外边距。重叠量不超过方框的三分之一，留缝不超过 16px。
- 图片组合的 `wrap` 只用于 `direction="row"`：父级要有宽度边界，每一行铺满父级后换行，横向和纵向留缝都取 `offset`；负值按 0 处理，避免上下两行叠在一起。`column` 只排一列，忽略 `wrap`。
- 图片组合的圆环用 `--vx-border-width-strong` 2px 描边，画在方框内侧；需要区分重叠的头像或缩略图时打开 `ring`，单张独立展示不加。
- 头像的外框单独三档：`sm` 32px、`md` 40px、`lg` 48px（`--vx-avatar-*`），首字 12 / 14 / 16（`--vx-avatar-font-*`），图标 14 / 16 / 18（`--vx-avatar-icon-*`）。外框是固定正方形，不跟父级宽度缩放；`ring` 的 2px 描边画在内侧，不改变外框尺寸。
- 图片预览是全屏层：顶部工具行 44（`--vx-gallery-bar`），关闭和删除热区 44（`--vx-gallery-control`），底部工具行 60（`--vx-gallery-foot`）。顶部让出状态栏，底部让出手势条，左右由外层 padding 让开刘海；舞台吃剩余高度，图片按 `aspectFit` 完整显示，不裁切。
- 图片预览的计数在顶部正中，关闭在左，`extra` 在右；底部说明单行省略，删除靠右。说明放不下时先缩短文案，不缩小字号；需要完整说明时由外层卡片或页面提供。
- 图片预览的缩放范围 1–`maxScale`（默认 3，收敛到 1.2–5），双击放大到 2.5 倍或 `maxScale`；放大后单指拖动查看，双击复位。翻页、关闭和换图都先把缩放复位到 1。
- 图片预览左右切换的落位阈值是舞台宽度的 22%，或 0.35px/ms 的快速轻扫；第一张继续向右、最后一张继续向左时按 30% 阻力回弹，不循环。
- 图片预览的顶部和底部工具行不参与翻页和缩放；手势只绑在舞台上。`items` 为空时不渲染整层，也不占高度。
- 图片上传的格子按 `columns` 等分容器并保持正方形，列数收敛到 1–6，间距 8（每格左右各 4）；`size` 只在测量不到容器宽度时兜底 64 / 80 / 96。圆角 `none` / `sm` 6 / `md` 8；删除热区 44（`--vx-hit-size`）、圆点 20，圆点中心仍距格角 14，热区挂在格子外层避开 overflow 裁剪；空态说明在网格下留 4，不占整块高度。
- 压屏窗是整屏浮层：内容左右各让 24，四边再让开 `--uni-safe-area-inset-*`；关闭按钮热区 44（`--vx-list-height-sm`）、图标 18，底部留 24、顶部留 16。内容默认铺满留白内的宽度，`width` 收口时必须带单位，比留白更宽时收到留白内；组件不做内部滚动，整组随内容垂直居中。
- 二维码边长单独三档：`sm` 120px、`md` 160px、`lg` 200px（`--vx-qrcode-size-*`），也可以用 `width` 传带 px 的边长。模块边长向下取整到整数像素，余量并进空白边距；`margin` 按模块数算，默认 2，收敛到 0–8，印刷场景用 4。这组尺寸不并入控件高度，也不再新增第四档。
- 二维码中心图标占方阵内容宽度的 0.22（0.12–0.3），四周留 `--vx-qrcode-logo-pad` 4px 的挖空；图标盒子用 `sm` 圆角，图片按 `aspectFit` 放在剩余区域。
- 徽章高度单独三档：`sm` 16px、`md` 20px、`lg` 24px，字号 12 / 13 / 14，圆点直径 6 / 8 / 10，与控件高度不互相换算。
- 倒计时数字盒高度单独三档：`sm` 24px、`md` 32px、`lg` 40px，最小宽度等于高度；十分位盒宽 20 / 26 / 32（`--vx-countdown-ms-width-*`）。这组尺寸不并入控件高度。
- 进度条的轨道高度单独三档：`sm` 4px、`md` 6px、`lg` 8px（`--vx-progress-height-*`），不并入控件、图标和徽章高度；标签和轨道、轨道和数值之间留 8 / 12 / 16，数值最小宽度按档位 40 / 44 / 52（`--vx-progress-value-min-*`）。自定义 `height` 只改轨道高度，标签和数值仍按 `size`，并且必须带单位。
- 环形进度的直径单独三档：`sm` 64px、`md` 80px、`lg` 100px（`--vx-circular-progress-size-*`），线宽 6 / 8 / 10（`--vx-circular-progress-stroke-*`）；半圆高度等于直径 / 2 + 线宽 / 2。组件读不到 CSS 变量，直径和线宽在脚本里按同值排像素。自定义 `width` 必须带 px，`thickness` 超过半径减 1 时收到上限；两者只改圆环，数值字号仍按 `size`。这组尺寸不并入控件、图标和进度条三档。
- 多行输入框不套用 32 / 40 / 48 的控件高度：`size` 决定字号；圆角和左右内边距跟输入框同档（`--vx-control-radius-*` 6 / 8 / 10，左右 12 / 16 / 24），上下内边距 8 / 12 / 16。内容区默认高三行，取 `sm` 60px、`md` 66px、`lg` 72px；需要其他高度时由 `height` 传入带单位的值，`autoHeight` 时由内容撑高。
- 表单项不占外部间距：项与项之间的距离由页面、卡片或外层留白决定。左侧标签不传 `labelWidth` 时宽取 `--vx-form-label-width`（80px），写在 class 上、不写行内；业务传了带单位的值才写行内盖过。`lg` 下四字标题带星号会超出这一档，需要自己传 88px。标签最小高度等于控件高度，和单行控件垂直居中；顶部标签独占一行（`width: 100%`）、和控件之间留 8，`labelWidth` 不生效。错误行上间距 4，单行省略；没有说明也没有错误时不预留高度。
- `sm` 用于表格行内、工具条等密集场景。独立表单项与页面主操作使用 `lg`；`md` 40px 视觉高度低于 44px，单选 / 复选 / 开关的横排单项热区已用纵向 padding + 负 margin 外扩到 44（占位和视觉不变），按钮需要更大点击面积时用 `height` 放大。
- 交互控件的左右内边距与尺寸同级：`sm` 12px、`md` 16px、`lg` 24px。标签左右内边距单独三档 6 / 8 / 10（`--vx-tag-padding-*`），不跟控件内边距。
- 图标尺寸只有 `sm` 14px、`md` 18px、`lg` 22px。单独可点的图标开 `hit` 撑出 44×44 热区（`--vx-hit-size`），字形居中；按钮、单元格里的装饰图标不开，热区由外层控件提供。
- 评分的星形单独三档：`sm` 20px、`md` 24px、`lg` 28px，星与星间距固定 8px。星形比图标大一档，不并入 `--vx-icon-*`，也不新增第四档。
- 单选的圆圈单独三档：16 / 18 / 20（`--vx-radio-size-*`），比横排文案大 2px，固定正圆、1px 描边；对号用旋转边框画，`md` / `lg` 2px、`sm` 1.5px，只画对号时放大一档。横排单项视觉高度取控件三档 32 / 40 / 48，`sm` / `md` 点击热区外扩到 44（纵向 padding 6 / 2 + 等值负 margin，占位不变；App 端 min-height 按内容盒另写），列表项最小高度取列表行三档 44 / 48 / 52，左右内边距 12 / 16 / 16、上下 8 / 12 / 12。这组尺寸不并入图标、徽章和星形三档。
- 复选的方框和单选同三档 16 / 18 / 20（`--vx-checkbox-size-*`），固定小圆角方形，圆角 4 / 5 / 6（`--vx-checkbox-radius-*`）；对号的描边宽度和只画对号时的放大规则同单选。横排项视觉高度 32 / 40 / 48，`sm` / `md` 点击热区外扩到 44（规则同单选），列表项最小行高 44 / 48 / 52，左右内边距 12 / 16 / 16、上下 8 / 12 / 12。部分选中的横线宽 5 / 6 / 7、高 1.5 / 2px，落在方框内。这组尺寸不并入图标、徽章和单选三档。
- 开关的轨道单独三档：36 × 20、44 × 24、52 × 28（`--vx-switch-width-*` / `--vx-switch-height-*`），滑块 16 / 20 / 24（`--vx-switch-thumb-*`），四周各留 2（`--vx-switch-inset`）；滑块位移等于轨道宽减滑块再减 4。加载圈 8 / 10 / 12（`--vx-switch-spinner-*`），描边 1.5px。这组尺寸不并入控件、图标和单选三档。
- 开关的单行视觉高度沿用控件三档 32 / 40 / 48，`sm` / `md` 点击热区外扩到 44（规则同单选），列表行最小高度沿用列表行 44 / 48 / 52，左右内边距 12 / 16 / 16、上下 8 / 12 / 12；轨道在文案前还是行尾用 `placement`，开关和文案之间留 8，`lg` 留 12。列表行整行可点，说明和 `extra` 插槽跟随行内排版。
- 分段器沿用交互控件高度 32 / 40 / 48，宽度跟随父级并等分；段内左右内边距 8 / 12 / 16（比独立控件紧一档，给等分让出宽度），圆角取控件圆角 6 / 8 / 10。一组 2–5 段，文案 1–4 个字；320 宽下 5 段每段只剩约 50px，5 段用 2–3 个字，4 个字控制在 4 段以内；宽度不够时先缩短文案或减少段数，不缩小字号。`divider` 的 1px 竖线绝对定位，不占段宽。这组尺寸不新增令牌。
- 分页器沿用交互控件高度 32 / 40 / 48，左右内边距 12 / 16 / 24，圆角取控件圆角 6 / 8 / 10；按钮最小宽度等于高度，箭头形态收成正方形，宽度等于高度。页码区吃掉剩余宽度并居中，左右各留 8；按钮和页码之间不再另加间距。分页器不新增令牌。
- 瀑布流宽度跟随父级：列宽 = (根节点宽度 − gap × (列数 − 1)) ÷ 列数，`gap` 默认 12，取 0–24；列数 1–3，默认 2。图片高度 = 列宽 ÷ `ratio`，`ratio` 取 0.4–2.5，加载前后不占两次高度。卡片行的行距也取 `gap`，不另开令牌。
- 瀑布流的默认卡片内边距 8 / 12 / 16，圆角取 `--vx-radius-*` 三档；`columns=1` 是大图列表，3 列留给平板和横屏。宽容器优先加列，不缩字号；卡片文案保持 1–3 行。
- 分页器的按钮文案控制在 2–5 个字，放不下时先用箭头形态或缩短文案，不缩小字号，也不把按钮压成不等宽。整条至少留出两个按钮和页码的宽度；更窄的容器只放箭头。两侧文案尽量等长，页码才落在整条中间。
- 索引列表的分组标题单独三档：28 / 32 / 36（`--vx-index-header-*`），水平内边距 12 / 16 / 16；行沿用列表行最小高度 44 / 48 / 52、左右内边距 12 / 16 / 16、上下 8 / 12 / 12。头像 32 / 40 / 48（`--vx-index-avatar-*`），和正文间距 8 / 12 / 12。
- 索引条贴右边缘垂直居中：字母槽高 16 / 18 / 20（`--vx-index-key-*`），条宽 28 / 32 / 36（`--vx-index-bar-*`），只放宽触摸区，不改变字母圆的大小；字母圆与槽同高。指示器 56 / 64 / 72（`--vx-index-indicator-*`），在索引条左侧 8px，竖直跟着按下的字母并夹在列表内。开索引条时行和分组标题右侧让出条宽 + 4（32 / 36 / 40），长文案不被字母压住。
- 开关列表的分割线 1px `divider`，左右和行内边距对齐，只画当前行底部；最后一行由业务关掉，组件不判断相邻项。
- 时间轴的节点单独三档：`sm` 20px、`md` 24px、`lg` 28px；节点图标 14 / 18 / 22，事件圆点 6 / 8 / 10。节点到内容留 8 / 12 / 16，阶段之间留 24，事件之间留 12；首尾竖线各收在节点中心，1px 线色用 `border`。这组尺寸不并入图标三档。
- 步骤条的节点单独三档：`sm` 20px、`md` 24px、`lg` 28px；完成态圆点 6 / 8 / 10，节点中心 10 / 12 / 14。小程序和 App 的 view 裁切溢出，连线拆成前后两半各画在本步边界内：后半从节点中心到步边缘，前半从步边缘到节点中心，前半颜色跟上一步进度，拼起来仍是中心到中心。节点到内容 8 / 12 / 16，纵向步骤之间留 24；横向每步等宽。这组尺寸不并入图标三档。
- 轻提示的盒子最小宽度 120px、最大宽度默认 240px，内边距 24px；图标 40px，和文案间距 12px。40px 图标单独一档，不并入 `--vx-icon-*`。
- 操作菜单的面板最大宽度 480px（`--vx-actionsheet-max-width`），手机上铺满；动作行高 48px（沿用列表行 `md`），内边距 12 / 24；标题和说明上下留 16、左右留 24，取消与动作之间用 4px `default-soft` 间隔带。
- 弹出层：上下贴边占满宽度、高度按内容或 `height`；左右贴边占满高度、宽 280（`--vx-popup-width`）；居中按内容宽度排、最宽 480（`--vx-popup-max-width`），四周留 24。关闭叉在内容上方单占一行 44（沿用列表行 `sm`）、图标 18；面板不预留内容内边距，由业务自己留 16。这组尺寸不并入控件三档。
- 抽屉贴着屏幕的一条边：左右宽 280px（`--vx-drawer-width`）、占满高度；上下高 45%（`--vx-drawer-height`）、占满宽度。头部用 `--vx-overlay-head` 的 52，标题 17 / 24 / 600、单行省略；正文默认四边 16，底栏上 12、左右 16；关闭叉热区 44、图标 18。面板最大不超出整屏，`width` / `height` 覆盖时必须带单位。这组尺寸不并入控件三档。
- 弹框的面板最大宽度单独三档 280 / 320 / 400（`--vx-modal-max-width-*`），左右至少留 24；内边距固定 24，标题、正文和动作之间分别留 12、24。弹框是紧凑浮层，动作固定 `sm` 32px，比页内主按钮（`md` 40）矮一档，靠整行宽度补足热区，不升到 40；两个并排等宽、间距 12，三个以上纵向、间距 8，并排文案控制在 2–4 个字。图标圆 48（`--vx-modal-icon-size`），图标仍用 `lg` 的 22；关闭叉热区 44（`--vx-modal-close-size`），图标 18。这组尺寸不并入控件三档。
- 日期时间选择器是底部弹层，头部高 52（`--vx-overlay-head`），滚轮可视高度 220（`--vx-datetime-wheel`），每行 44（`--vx-datetime-row`），正好五行。指示器高度必须等于行高，列才按行对齐；面板最大宽度 480（`--vx-datetime-max-width`）。取消和确定各自在头部两侧整高，头部左右各留 8、动作再各留 8，文字离屏幕 16。
- 日期时间选择器的单位默认跟在数值后面、留 4px；`unit-position="top"` 时单位单独一行、上下各 4，和滚轮列等分对齐。单位不参与格式化，只做提示。
- 联动选择沿用日期时间选择器的弹层尺寸：头部 52（`--vx-overlay-head`），滚轮可视高度 220（`--vx-picker-wheel`）、每行 44（`--vx-picker-row`），面板最大宽度 480（`--vx-picker-max-width`）。列按当前路径等分，分支提前结束时列数跟着少。
- 联动选择建议 2–4 级；4 级起每列只剩四分之一屏宽，文字收一档到 13 / 20，长地名单行省略。空状态和滚轮用同一块 220 高，面板高度不跳；不可选时标题换 `warning-ink`，确定转 `disabled-text`。
- 日历的行数按当月占几周算 5 或 6 行：每格 42 高（`--vx-calendar-cell`）、宽 `14.28%`（不用 1/7，避免浮点误差把第七列挤到下一行），当月之外的位置留空，五周的月份不留空的第六行；周日排第一列。网格、星期行和翻月行共用左右 4 的内边距，七列对齐，格子够宽才留得出方块两侧的空隙。
- 日历的翻月行高 44（`--vx-list-height-sm`），每个箭头热区 40×44；年份是并排的两个 14 号 chevron（合宽 30），月份是单个 18 号 chevron，和年份拉开距离。星期行高 32（`--vx-calendar-week`），文字 13 / 20 次要色。
- 日历每天是一个等大方块：边长 36（`--vx-calendar-tile`）、不跟格子宽度走，四边都留出空隙。选中和区间两端是实心方块，区间中间铺一层浅底，标记画成正圆（同为 36）；方块圆角 10（`--vx-control-radius-lg`），和标记的 `pill` 区分开。
- 日历弹层最大宽度 480（`--vx-calendar-max-width`），头部高 52（`--vx-overlay-head`）、标题 15 / 22 / 500 次要色居中、关闭叉 44×44 贴右；底部结果行 13 / 16 次要色居中、上下各留 8，确定按钮铺满整行、高 40、胶囊形。
- 标签页沿用列表行高度 44 / 48 / 52，不并进控件三档；选中胶囊用紧凑高度 28 / 32 / 36，下划线固定宽 24 / 32 / 40、高 2px（`--vx-tabs-indicator-*` 和 `--vx-border-width-strong`）。有分割线时下移 `--vx-tabs-indicator-out`（-1px）盖住分割线，没有分割线时贴在行内底边。角标跟 `--vx-badge-height-*`，胶囊左右内边距 12 / 16 / 16。
- 标签页一屏 2–5 个，按格等宽，不横向滚动；文案 2–4 个字（5 个时 2–3 个字）、不换行，放不下时先缩短文案或减少分组，不要缩小字号。导航行左右各留 12px，给末项角标留出余量。
- 标签栏栏高单独三档：`sm` 48px、`md` 56px、`lg` 64px（`--vx-tabbar-height-*`），图标位 20 / 24 / 28（`--vx-tabbar-media-*`），不并入图标、控件和列表行三档。一屏 3–5 个，按格等宽，不横向滚动；文案 2–4 个字，单行省略。图标和文案间距 2 / 2 / 4（`--vx-tabbar-gap-*`），不借页面留白。
- 有凸起项时栏顶再让出 22 / 24 / 26（`--vx-tabbar-raise-lift-*`），整行高 70 / 80 / 90（`--vx-tabbar-row-raised-*`）；凸起圆钮 44 / 52 / 60（`--vx-tabbar-raise-size-*`），固定正圆，和所在列等宽对齐。每一列都按伸出段下移内容，图标位仍在栏内居中，标签才落在同一条线上。只有圆钮是热区，透明带把点击让给页面。多传凸起项时只认第一个。
- 固定标签栏的占位只算可见栏高加 `--uni-safe-area-inset-bottom`，凸起圆钮伸出的透明段不占位；栏底色一直铺到屏幕底边，图标和文案仍落在手势条之上。水平方向让开 `--uni-safe-area-inset-left` / `--uni-safe-area-inset-right`。
- 滑动菜单一行动作 1–3 条，按数组顺序从左到右排；每条默认宽 72px，`extra` 插槽默认宽 80px，宽度都是像素，不跟屏宽缩放。动作文案 2–3 个字，4 个字或英文长标签时把 `width` 加到 96 这类值，不缩小字号、不换行。
- 滑动菜单整行高度由内容决定，建议不低于 44px；带图标时 18 + 4 + 22 正好 44，低于 44 只用文案。展开距离等于所有动作宽度之和，拖动超过一半或快速轻扫时展开。
- 加载转圈沿用图标三档 `14 / 18 / 22`，不再新增第四档；加载更多和没有更多上下留白 16px，加载中浮层的内边距 24px；两边同尺寸时尾部高度一致。
- 加载浮层面板最窄 120px、最宽 240px，固定居中，宽度由内容决定；没有更多的圆点 6px。
- 加载动画的动画画布单独三档 20 / 28 / 40（`--vx-loader-size-*`），圆点直径 6 / 8 / 10（`--vx-loader-dot-*`），不并入图标和控件高度。面板最小 120、最大 240（`--vx-loader-panel-*`），内边距 24，动画和文案之间 12（`lg` 16）；行内动画和文案之间 8（`lg` 12）。浮层左右各让 24，面板居中。
- 暂无数据的插图方框单独三档 96 / 128 / 160（`--vx-no-data-art-*`），图标圆 64 / 80 / 96（`--vx-no-data-disc-*`），字形 32 / 40 / 48（`--vx-no-data-glyph-*`）；拷贝最大宽度 320（`--vx-no-data-copy-max`）。这组尺寸不并入图标三档，也不跟控件高度换算。
- 暂无数据的插图到文案留 16，`lg` 留 24；主文案到说明留 4；文案到动作留 16，`lg` 留 24；内边距 `sm` 16，`md` / `lg` 24。
- 提示页的图标圆单独三档 56 / 72 / 88（`--vx-msg-disc-*`），字形 28 / 36 / 44（`--vx-msg-glyph-*`），标题 17 / 20 / 26（`--vx-msg-title-*`），不并入图标、暂无数据和控件三档。文案列最大 360（`--vx-msg-copy-max`），动作列最大 320（`--vx-msg-actions-max`）；动作高 40 / 48 / 48，内边距 16 / 24 / 24，图标到文案 16 / 24 / 24，文案到动作 24，两个动作间距 12。
- 徽章不是点击目标；叠在图标或头像上时不改变下层内容的尺寸。
- 页脚默认留在文档流；固定页脚 `fixed` 由业务按页面显式开启。底栏整块抬到安全区外，页面底部要留出页脚高度，再加 `--uni-safe-area-inset-bottom`，否则最后一段内容会被盖住。
- 页脚链接的点击热区高度取紧凑高度 `md` 的 32px，左右各留 8px；相邻链接之间放 1px、12px 高的竖分隔线，首尾不放。
- 独立主操作的可点区域建议不小于 44×44：交互控件 `lg` 为 48px，默认达标；`md` 40px、`sm` 32px 只用于密集场景，并靠外层间距或 `height` 补足。

- 验证码输入框的格子单独三档 40 / 48 / 56（`--vx-code-cell-*`），默认正方形，数字 18 / 22 / 26（`--vx-code-font-*`），密码圆点 6 / 8 / 10（`--vx-code-dot-*`），光标 20 / 24 / 28（`--vx-code-caret-*`）。整行居中，间距默认 8（0–24）；总宽不够时格子只收窄，`fluid` 均分父级，`width` 用绝对单位固定宽度且不再收窄，不要传百分比。4 位用 md / lg，6 位用 md / fluid，8 位用 sm / fluid。
- 数字键盘的键高单独三档 44 / 52 / 60（`--vx-keyboard-key-*`），数字 20 / 24 / 28（`--vx-keyboard-font-*`），不并入控件高度和列表行 44 / 48 / 52；三列等宽、四行等高的格子铺满面板，动作键和退格键各占一格，0 占中间。标题 17 / 24 / 600、说明 13 / 20，头部上 24、下 16，插槽区到按键 24，动作键文案 15 / 22。
- 数字键盘输入框的密码位宽 32 / 36 / 40（`--vx-keyboard-slot-*`），位高固定 44（`--vx-keyboard-slot-height`），数字沿用键盘字号，圆点 8 / 10 / 12（`--vx-keyboard-dot-*`），下划线 2px，间距默认 16（0–32）；总宽超出父级时位宽等比例收窄，不换行。密码位居中，4 位用 md，6 位用 sm 或 md，8 位用 sm。
- 树型菜单的行高单独三档：36 / 44 / 52（`--vx-tree-row-*`），每一级缩进 16 / 20 / 24（`--vx-tree-indent-*`），箭头位 20 / 24 / 28（`--vx-tree-marker-*`）；行左右内边距 12 / 16 / 16，勾选框视觉沿用 `--vx-checkbox-size-*` 的 16 / 18 / 20；箭头和勾选框热区至少 24 宽并撑满行高。这组尺寸不并入控件和列表行三档，字号仍取控件 14 / 16 / 18。层级只靠缩进表达，`indent` 取 1–40 时可覆盖档位；超过 5–6 级时把子级换页或改成分组。

- 图片底座不占外部间距，宽度跟随父级（默认 100%）：`width` / `height` 传带单位的值，`ratio` 只在 `width` 是 px 或 rpx 时生效（rpx 按 750 基准换算），百分比和 `auto` 下高度回落到父级。圆角四档只作用于外框，图片一起裁。
- 图片底座的失败态：占位底色等于外框底色，不额外留白；图标 18，文案 `body-small`，两者之间留 4，超出外框的内容由 `overflow: hidden` 裁掉。
- 分割线横向占满父级宽度，1px；`spacing` 数字按 px，空串横向上下各 12、纵向左右各 16。纵向线宽 1px、`align-self: stretch` 撑满父级那一行，`height` 传了才固定高度；文字行高 20。
- 安全区：不传 `height` 时高度等于 `--uni-safe-area-inset-top` / `--uni-safe-area-inset-bottom`，传了按传入值；固定态贴住对应边、层级 1。它只做纵向，左右安全区仍由页面和导航栏处理。App 取状态栏 / 手势条高度；Web 取页面相对窗口的留白，原生导航栏和 tabBar 的高度也会算进去，页面已经让开时不要再叠。
- 虚拟列表只支持等高行：`itemHeight` 默认 60（等于 `--vx-list-height-lg`），所有行必须同高；容器有 `height` 时按传入值，空串时 `flex: 1` 吃父级剩余高度，外层必须是纵向 flex 并给出确定高度。`buffer` 默认 3 行，只影响切片窗口，不改变总高。
- 轮播图的高度只由 `height` 决定（默认 160），组件不读窗口宽；指示器压在图里时有标题条离底 48（标题条 36 + 间距 12）、没有标题条离底 12，放到图片外面时排在下方一行、上下各留 8，计数胶囊右边距 12、高按内容 28。左右落位时指示器竖排成一列、纵向居中，贴边 8；放到图外时在图片旁边另起一列，和外框隔 8，外框让出这一列的宽度；计数胶囊仍是 28 高的一颗，不跟着那一列拉长。卡片模式的左右露出固定 32。
- 数字动画的宽度取起点和终点格式化后较宽的一边：码点大于 255 的按 1 个字号，数字、逗号、小数点、负号和 ASCII 前后缀按字号 × 0.6，再向上取整写成像素 `min-width`。倒数时起点更宽。`reserveWidth=false` 时不预留，位数变化会带动后面的内容。宽度跟随内容、默认靠左，居中由外层的横向 flex 排。
- 筛选栏的触发条行高沿用列表行 44（`--vx-list-height-sm`），触发项等宽平分整条；箭头 14，和文字留 4（`--vx-space-xs`）。面板紧贴触发条下沿、宽度等于触发条，最高铺到距窗口底 16（`--vx-space-lg`）；触发条放在内容区顶部，接近窗口底部时下方没有空间。
- 返回顶部的热区 44 × 44（`--vx-list-height-sm`）：只有图标时收成正圆 44，换成文案时宽度跟着内容走、左右各留 12，高度仍是 44；贴边 16（`--vx-space-lg`），距底由 `bottom` 给，默认 24，安全区由页面自己留。

## Elevation & Depth

- 按钮、输入框、卡片默认用 `border` 描边，不使用阴影。卡片只提供描边一种层级；通栏卡片用 `full` 去掉左右描边和圆角，不换成阴影。
- 表单不加阴影和浮层层级：错误只用控件描边、错误行文案和页面滚动表达，不弹浮层、不抢焦点、不弹键盘；受控 `error` 和本地错误都在文档流里占一行。
- 单选不加阴影和浮层层级：横排没有外框，标记只是一个 1px 描边的圆；列表分组默认透明，`card` 才加 `surface` 底、1px 描边和 `md` 圆角。行项之间只靠 1px `divider` 分开。
- 复选和单选同一套层级：横排没有外框，标记只是一个 1px 描边的小方框；列表分组默认透明，`card` 才加 `surface` 底、1px 描边和 `md` 圆角。不加阴影、渐变和浮层层级。
- 开关不加阴影和浮层层级：关闭轨道的浅灰底、滑块的 1px 描边和打开轨道的语义色就是全部层级，不用阴影把滑块从轨道上托起来。列表行仍不画外框，卡片边界交给外层 `vx-card` 或 `vx-list-view`。
- 分段器不加阴影和浮层层级：1px 描边、选中底色和字重就是全部层级；没有滑块、下划线和渐变，`divider` 打开时才画 1px 段间竖线。
- 分页器不加阴影和浮层层级：`plain` 靠 1px 描边和 `surface` 底色分层，`soft` / `solid` 靠底色，`text` 只靠文字；当前页码的语义色是整条唯一的强调。按下只压透明度，不做抬升。
- 瀑布流不靠阴影分层：卡片用 `surface` 底和 1px `border`，`plain` 去掉两者；`extra` 插槽里的动作是图片上的浮层，可以用 `--vx-shadow-sm`。列表本身不加浮层和阴影；加载更多放在 `suffix` 里，不压住卡片。
- 索引列表不加阴影和浮层层级：分组标题靠 `default-soft` 底色和 1px `divider` 分层，吸顶时同一块标题直接压在内容上，不另加描边或阴影。拖动指示器是唯一浮层，用 `--vx-shadow-md` 从列表里浮起，层级压在分组标题和索引条之上，松手即消失。
- 区块标题栏不加阴影、不加浮层层级；`soft` 只靠 `default-soft` 底色和 `md` 圆角分开，`plain` 完全靠留白和排版分层。
- 上下留白和左右留白默认不画描边和阴影，也不建立浮层层级；`vx-white-space` 的 `bgColor` 是唯一可选的一条平色带，不投阴影。
- 按钮的 `shadow` 是显式强调选项：只用于实心与浅底按钮，使用 `--vx-shadow-button`，同一屏最多一处。plain、link、禁用态不加阴影。
- 浮层阴影只用 `sm`、`md`、`lg` 三档。
- 贴边弹层不加阴影。面板贴住屏幕一条边时，遮罩已经把面板和页面分开，不再投 `--vx-shadow-lg`。弹出层、抽屉、操作菜单、日期时间、联动选择、日历弹层、选择框、数字键盘的 sheet、筛选栏都按这条。居中弹框仍用 `--vx-shadow-lg`；弹出层的居中档只用 1px 描边。没有遮罩的浮层保留各自阴影：气泡、轻提示、消息提示、回到顶部、关闭圆钮、引导气泡。
- 徽章的 `ring` 是浮层：底色描边配 `--vx-shadow-md`，让白底徽章压在浅色页面上也有边；独立计数不用。App 默认裁掉溢出，`ring` 和绝对定位要画出盒外的阴影和角标，这两处和它们外面每一层都用 `overflow: visible`。
- 图片组合不加阴影和浮层层级：缩略图是文档流里的图片，圆环是方框内侧的 2px 实线描边，不投阴影。
- 图片底座不加阴影、描边和浮层层级：占位底色、图片和失败态都在文档流里，层级只靠底色和图片本身；失败态不套卡片外框。
- 分割线不投阴影、不加描边、不建立浮层层级：1px 线就是全部层级，`color` 只改这一条线的颜色。
- 分隔列表不加阴影和浮层层级：整条默认 `surface` 底、项间 1px `divider` 竖线；不进卡片时自己不带圆角、描边和外边距，外轮廓由外层卡片负责。角标沿用徽章的胶囊，不投阴影。
- 验证码输入框不加阴影和浮层层级：1px 描边、焦点浅底和光标就是全部层级；`line` 只留 2px 底线，`filled` 用浅底，不叠阴影和渐变。
- 图片预览是覆盖整屏的内容浮层：固定黑底铺满整屏，不加阴影、描边和圆角，也不铺渐变。顶部和底部工具行都叠在黑底上，底部再画一条 1px `viewer-line` 与舞台分层，顶部不画线；关闭按钮的浅色底只帮助识别热区。层级默认 1015，高于消息提示 1010，低于弹框 1020、加载浮层 1050 和轻提示 1100；删除确认用 `vx-modal` 自然压在预览层上。
- 图片上传不加阴影和浮层层级：格子只有图片、固定暗层和 1px 虚线加号；删除圆点用 2px `viewer-fg` 描边和图片分开，不投阴影。预览和删除确认沿用 `vx-gallery` / `vx-modal` 的层级，组件本身不新建浮层。
- 数字键盘的 sheet 面板和操作菜单同一套：`surface` 底、顶部 `lg` 圆角，贴边不加阴影，遮罩用 `--vx-color-mask`；层级默认 1005，高于操作菜单、抽屉和压屏窗的 1000，低于消息提示 1010、弹框 1020、加载浮层 1050 和轻提示 1100。inline 模式不铺遮罩、不投阴影、不带圆角，也不建立层级。
- 数字键盘输入框和它的键盘共用一层 sheet，不叠第二层浮层；密码位只是面板里的一行，不加描边盒和阴影，错误抖动也不改变层级。
- 树型菜单不加阴影和浮层层级：层级只靠缩进、选中浅底和 1px 参考线分层，选中行和按下态都在文档流里。没有吸顶、浮层和滚动容器，放进卡片时由卡片负责圆角和裁切。
- 压屏窗只压页面，不建立面板：遮罩用 `--vx-color-mask`，海报和权益卡直接浮在遮罩上，不加第二层底色、描边和阴影；唯一浮起的是 44 的关闭圆钮，`surface` 底、1px `border` 勾边并配 `--vx-shadow-md`。层级默认 1000，和抽屉、操作菜单同档，低于消息提示 1010、弹框 1020、加载浮层 1050 和轻提示 1100。
- 加载动画是等待状态，不是内容浮层：行内布局不加底色、描边和阴影；面板和浮层用固定 `#23262e` 深底配白字，靠 `--vx-shadow-lg` 从页面里浮起，不跟主题反色。浮层遮罩用 `--vx-color-mask`，面板压在遮罩上，层级 1050，和加载浮层同档。
- 二维码不加阴影、描边和浮层层级：底板是 `bgColor` 的实色方块，模块压在底板上；空状态和错误态用 `default-soft` 浅底占位，看起来仍是一个方块，不另加卡片外框。
- 进度条不加阴影、描边和浮层层级：轨道用 `default-soft`，填充用语义色或 `bgColor`，只靠色差分层。
- 环形进度不加阴影、描边和浮层层级：轨道、弧线和可选的圆心底色三层只靠色差分层，弧线两端用圆头收口。
- 提示页不加阴影、描边和卡片底：结果块直接落在页面底色上，图标圆、标题、说明和按钮靠留白分层。需要边界时由页面或外层卡片提供。
- 固定页脚用 `surface` 底色和顶部 1px 描边分层，不加阴影；底边整块抬到 `--uni-safe-area-inset-bottom` 之上，不压住手势条、tabBar 或页面自己的底栏。
- 安全区固定时只压页面内容，层级 1，和固定页脚同档；不加分割线、阴影和毛玻璃，也不铺渐变。它没有内容和插槽，Web 上不拦指针。
- 状态栏不加圆角、描边和阴影；固定时用层级 20，和导航栏同档，只压页面内容和吸顶条。透明和渐显初期也不叠外围线。
- 页面容器不设 `z-index`，也不新建浮层：顶栏在文档流里，吸顶条、标签栏和弹层各用自己的层级；页面不加阴影、遮罩和渐变，底部占位只是留白。
- 吸顶条未吸顶时透明，吸顶后用 `surface` 底色和底部 1px `border` 描边分层；`shadow` 打开时改用 `--vx-shadow-md`，不叠两层。吸顶条层级 10，只压页面内容和固定页脚，不压提示浮层。
- 组件自带的浮层层级按下表排，同一档里后挂载的在上层：

| 层 | z-index | 组件 |
| --- | --- | --- |
| 固定页脚 | 1 | `vx-footer`、`vx-tabbar`、`vx-safe-area` 的 `fixed`、`vx-back-top` |
| 吸顶条 | 10 | `vx-sticky` |
| 导航栏 | 20 | `vx-navigation-bar`、`vx-status-bar` |
| 弹层 | 1000 | `vx-popup`、`vx-drawer`、`vx-actionsheet`、`vx-bubble-popup`、`vx-datetime`、`vx-picker`、`vx-calendar`、`vx-select`、`vx-landscape`、`vx-guide` |
| 数字键盘 | 1005 | `vx-keyboard` 的 sheet |
| 消息提示 | 1010 | `vx-tips` |
| 图片预览 | 1015 | `vx-gallery` |
| 弹框 | 1020 | `vx-modal` |
| 加载浮层 | 1050 | `vx-loader`、`vx-loading` 的浮层 |
| 轻提示 | 1100 | `vx-toast` |

  导航栏压在吸顶条和页面内容上；吸顶条压在页面内容和固定页脚上；弹层压在页面内容、吸顶条和导航栏上，低于数字键盘、消息提示、图片预览、弹框、加载浮层和轻提示；数字键盘收起后不占层级；图片预览压在弹层和消息提示上；弹框压在弹层、消息提示和图片预览上；加载浮层压在图片预览、弹框和消息提示上；轻提示压过页面内容和固定页脚。其他弹层由业务自己排。固定页脚 1、吸顶 10、导航栏 20 不变；业务自绘浮层用 100–999。
- 同一档的弹层不自动叠加：`vx-popup`、`vx-drawer`、`vx-actionsheet` 的 `zIndex` 默认 1000，嵌套两个时由业务传 1001 / 1002，不要指望组件自己往上加。`vx-dropdown` 的面板固定比它的底座高 1，业务改 `zIndex` 时只改一个值，遮罩和面板一起跟着走。
- 弹出层的面板用 `surface` 底色，不加阴影也不加描边；遮罩用 `--vx-color-mask`，只压页面，不压面板。居中面板四周加 1px `border`，从遮罩里分出边界；贴边和居中都不靠阴影表达层级。
- 操作菜单的面板用 `surface` 底色贴在遮罩上，不加阴影、不加描边；遮罩用 `--vx-color-mask` 压暗页面。
- 抽屉面板同样用 `surface` 底色贴在遮罩上，不加阴影、不加描边；遮罩用 `--vx-color-mask`，只压页面，不压面板。
- 弹框是居中浮层：面板用 `surface` 底色和 `--vx-shadow-lg` 浮在遮罩上，遮罩用 `--vx-color-mask`；面板不加描边，也不铺语义底色。贴边弹层不借用这层阴影。
- 气泡弹框是紧凑浮层：`surface` 面板用 `surface` 底、1px `border` 描边和 `--vx-shadow-md`，尾巴用旋转 45° 的方块加 1px 描边；`solid` 面板用语义实心底配 `on-*` 前景，不加描边；inline 聊天气泡去掉阴影，和页面内容同层。
- 日期时间选择器的面板和操作菜单同一套：`surface` 底色、顶部 `lg` 圆角，贴边不加阴影，遮罩用 `--vx-color-mask`，只压页面。滚轮两端不画渐变蒙层：`picker-view` 自带的白色渐变在暗色主题下会发白，换透明后靠选中行的字重和颜色分层。
- 联动选择的面板和日期时间选择器同一套：`surface` 底色、顶部 `lg` 圆角，贴边不加阴影，遮罩用 `--vx-color-mask`，只压页面。滚轮两端同样不画渐变蒙层，选中行靠字重和颜色分层。
- 日历弹层和操作菜单同一套：`surface` 底色、顶部 `lg` 圆角，贴边不加阴影，遮罩用 `--vx-color-mask`。平铺模式不带底色、描边、圆角和阴影，放进卡片或页面区块。
- 选择框和操作菜单同一套：`surface` 底色、顶部 `lg` 圆角，贴边不加阴影，遮罩用 `--vx-color-mask`，面板不加描边。层级默认 1000，和操作菜单、选择器、抽屉同档，低于消息提示 1010、弹框 1020、加载浮层 1050、轻提示 1100。
- 文本不画底色、描边、圆角和阴影，也不建立浮层层级；放进卡片、列表行或标题栏时，边界由外层提供。
- 链接不画底色、描边、圆角和阴影，也不建立浮层层级；复制后的提示是系统浮层，组件自己不画第二层。链接前面或后面放图标时只留 4px，不套底色块。
- 标签页不加阴影：`line` / `soft` 用 `surface` 底色和底部 1px `divider` 分层；`inverse` 整条反色、不画分割线，选中胶囊用 `surface` 或对应 `*-soft` 浅底，仍然不叠阴影。
- 标签栏不加阴影和外框：用 `surface` 底色和顶部 1px `divider` 与页面分层；凸起圆钮是实心色块，也不投阴影。固定层级 1，和固定页脚同档，低于吸顶条 10 和导航栏 20。
- 滑动菜单不是浮层：不铺遮罩、不加阴影和描边，根节点只裁掉溢出，行内容用 `surface` 底色。展开时内容整条左移，右侧动作和内容同高，边界由外层列表或卡片提供。
- 折叠面板不加阴影；卡片分组用 `surface` 底色和 1px `border` 描边分层，`plain` 只靠底色和分割线与页面区分。
- 滚动消息只有 `card` 外观带 1px 描边；`soft` 用 `default-soft` 浅底，`plain` 完全透明。三种外观都不加阴影；根节点 `z-index: 0` 收口，内部 prefix / suffix / 热区的 2、3 只在组件这一组里比较，不再和页面的固定页脚抢。
- 通告栏只用底色分层：`soft` 铺语义浅底，`solid` 铺语义实心底，`plain` 完全透明；不加阴影、描边和浮层层级。需要吸顶用 `vx-sticky`，固定由页面自己承载。
- 浮层底色可带透明度：轻提示默认 `0.9`，消息提示默认 `1`。透明度只作用在底色上，文字和图标始终不透明。
- 暗色主题加深阴影，层级仍以描边和背景色差为主。
- 轮播图不加阴影、描边和浮层层级：外框只裁圆角，标题条和指示器直接压在图片上，靠半透明暗层分层；`extra` 的位置由组件给，底色、阴影和热区由内容自己带。
- 数字动画不画底色、描边、圆角和阴影，也不建立浮层层级；放进卡片或统计块时边界由外层提供。
- 筛选栏挂在 `vx-popup` 的底座上：遮罩用 `--vx-color-mask`，只压页面；面板用 `surface` 底色，不加阴影也不加描边，贴住触发条的一侧直角、只圆下两角。展开时固定层再画一遍触发条压在遮罩上，点另一项能直接切换；面板层比底座高 1（默认 1000 / 1001），同一实例只开一个。
- 返回顶部固定定位，层级 1，和固定页脚同档，低于吸顶条 10 和弹层 1000。`surface` 底配 1px `border` 和 `--vx-shadow-md` 从页面里浮起；不加第二层描边，也不用语义色，滚到页面任何位置都不抢弹层的位置。
- 滚动列表不加阴影、描边和浮层层级：卡片边界由插槽或外层卡片给，指示器在文档流里；只有圆点颜色表达当前页，不给列表本身加底衬。
- 级联选择是内联控件，不设层级、不投阴影：`surface` 底、1px `border`、`md` 圆角和列间 1px 竖线就是全部层级；需要弹层时由业务配 `vx-popup`，组件不内置。
- 新手引导的遮罩、描边和气泡各自是 fixed 根节点，不套满屏透明父层：洞里的目标不被挡，Web 与 App 都能直接点；层级都用 1000，和弹层同档。遮罩默认 `rgba(0, 0, 0, 0.55)` 只压页面，气泡 `surface` 底配 1px `border` 和 `--vx-shadow-lg`，洞外 2px `primary` 描边压在目标边界上；层级低于消息提示 1010、弹框 1020、加载浮层 1050 和轻提示 1100。
- 拖拽排序不加阴影和浮层层级：被拖的行靠 `surface` 底、1px `primary` 描边和 1.02 缩放从兄弟行里分出来，层级 10 只在本列表内比较；落点占位是 1px `primary` 虚线配 `sm` 圆角，不铺底色。松手后 300ms 内落定行上盖一层透明守卫视图，挡住补发的 click——App 上 `pointer-events` 不挡触摸，只有原生视图压在上面才接得住。

## Shapes

- 表单容器和表单项不画外轮廓：不加底色、描边、圆角和阴影，边界交给外层卡片；错误行不画底色，只改文字色。表单不提供形状选项。
- 跟 `size` 走的元素圆角取 `--vx-control-radius-*` 6 / 8 / 10。不分档的容器（卡片、列表分组、浮层面板、提示）用 `--vx-radius-md` 8。贴边面板和弹框用 `--vx-radius-lg` 12。固定小件（标签、缩略图角标、二维码中心图标、气泡菜单按下态）仍用 `--vx-radius-sm` 6。复选框 4 / 5 / 6 是标记，不并入。通栏卡片用 `full` 去掉圆角。胶囊和半圆角用 `pill`。
- 按钮的 `shape` 有三档：`rounded`（默认）、`pill`（胶囊）、`square`（平角，0 圆角）。`round` 是 `shape="pill"` 的旧写法。
- 标签的 `shape` 有四档：`rounded`（默认小圆角）、`pill`（胶囊）、`half`（半圆角：左侧胶囊、右侧平角）、`square`（平角）。
- 同一页面内圆角档位不超过两种（`pill` 不计入）；使用 `square` 时，页面其他控件仍保持默认圆角，避免整体失去圆角语言。
- 圆角只作用于组件外轮廓。
- 徽章只有胶囊一种轮廓：单字符是正圆，多字符是胶囊，不使用方形或半圆角。
- 步骤条的节点固定为正圆，连线固定 1px；待处理态只换描边和文字色，不提供形状选项。
- 进度条默认 `square` 平角，`rounded` 用 6px 小圆角，`pill` 用胶囊；圆角同时作用于轨道和填充。细轨道上 `rounded` 会被夹到半个高度，和 `pill` 看起来接近，只有粗轨道才拉得开。
- 环形进度固定正圆和圆头：弧线两端是半径等于线宽一半的圆头，0% 不画圆头，100% 起点和终点重合；半圆只有上半圆，两端同样收圆。不提供平头、方头和自定义弧度。
- 倒计时数字盒按尺寸取 `--vx-control-radius-*` 6 / 8 / 10；`plain` 去掉底色和描边。
- 暂无数据不画外框、底色和阴影；内置线稿的纸张用 `md` 圆角，图标模式固定正圆，动作和文案不单独加圆角。
- 提示页不画外框和卡片底；图标圆固定正圆（`pill`），标题、说明、补充内容和两个动作都不单独加圆角。动作按钮沿用按钮的 `rounded`，不提供形状选项。
- 消息提示、轻提示和加载浮层面板都用 `md` 圆角，消息提示的顶部横幅是直角。提示不提供形状选项。
- 加载动画的面板用 `md` 圆角；液面方块 `sm` / `lg` 分别用 6 / 8 圆角，圆环、音律柱和圆点都是胶囊圆角。四种形态和两种布局都不提供形状选项。
- 操作菜单只圆顶部两角（`lg` 12），底部贴住屏幕；动作行、取消按钮和遮罩都不单独加圆角。
- 抽屉只圆朝向页面的两角（`lg` 12），贴住屏幕的一边保持直角；头部、正文、底栏和安全区都不单独加圆角。
- 弹出层只圆朝向页面的那一侧：底部圆上两角、顶部圆下两角、左右圆朝向页面的那一边，居中四角全圆，贴住屏幕的一条边保持直角。`round` 四档 `none` / `sm` / `md` / `lg` 取 0 / 6 / 8 / 12，只作用于外轮廓，内容不跟着裁圆角。
- 弹框面板用 `lg` 圆角（12），不加描边；动作按钮默认用按钮的 `rounded`，整组可以换成 `pill` 或 `square`，同一个弹框里保持一致。
- 日期时间选择器只圆顶部两角（`lg` 12），底部贴住屏幕；头部、滚轮和行都不单独加圆角，滚轮的高亮只由上下两条 1px 细线表达。
- 联动选择只圆顶部两角（`lg` 12），底部贴住屏幕；头部、滚轮和行都不单独加圆角，选中行只由字重和颜色分层。
- 日历弹层只圆顶部两角（`lg` 12），底部贴住屏幕。每天的方块固定圆角 10（`--vx-control-radius-lg`），不带形状选项；标记固定 `pill`，和方块的正方形区分开。网格、翻月行和星期行都不单独加圆角。
- 选择框只圆顶部两角（`lg` 12），底部贴住屏幕；头部、选项行和底部都不单独加圆角。单选标记固定正圆，多选标记固定小圆角方形（4 / 5 / 6），两种标记不互换；选项图片跟 `size` 取 `--vx-control-radius-*` 6 / 8 / 10，确定按钮固定胶囊。
- 文本没有形状选项：不加圆角、描边和底色，装饰线只有下划线和删除线。
- 链接没有形状选项：不加圆角、描边和底色，装饰线只有下划线。`prefix` / `suffix` 里的图标保持自己的形状，不给链接加底板。
- 标签页的选中胶囊固定为胶囊圆角，不给形状选项；`line` 不画胶囊，只画 2px 圆头短线。页签本身是直角导航行，不单独加圆角。
- 筛选栏的触发条是导航行，不给圆角；面板只圆下两角（`lg` 12），贴住触发条的上两角保持直角，不提供形状选项。
- 返回顶部的 `shape` 两档：`circle`（默认，宽高都取 44 的正圆）和 `rounded`（44 方块配 `md` 8 圆角）；换成 `extra` 文案时正圆自然变成胶囊，不提供方形和自定义圆角。
- 标签栏是直角导航条，不给圆角、描边和形状选项；凸起圆钮固定正圆（`pill`），角标沿用徽章的胶囊，图标和图片本身不裁圆角。
- 滑动菜单的根节点和动作都不单独加圆角，动作之间也不留缝；外轮廓交给外层列表或卡片，卡片裁出圆角，滑块只负责方角裁切。
- 分隔列表是直角长条，不给形状选项：根节点不画圆角，放进卡片时由卡片裁切；图片方框跟 `size` 取 `--vx-control-radius-*` 6 / 8 / 10，角标沿用徽章胶囊。
- 宫格卡片用 `md` 圆角，格子本身不带圆角；宫格不提供形状选项，`plain` 只去掉描边和圆角。
- 图片组合的 `shape` 有三档：`rounded`（默认，跟 `size` 取 `--vx-control-radius-*` 6 / 8 / 10）、`circle`（胶囊圆角，头像用）、`square`（平角）。不提供自定义圆角和描边宽度。
- 图片预览铺满整屏，四角都是直角；关闭按钮的浅色底是正圆（`pill`），删除热区不画底色和圆角。图片本身不裁圆角，`aspectFit` 的留白就是舞台的黑底。
- 图片上传的格子 `radius` 三档：`none` 直角、`sm` 6、`md` 8；图片按格子裁切，加号格同圆角，虚线边框不随圆角断开。删除圆点固定正圆，进度条胶囊。
- 压屏窗没有外框和形状选项：内容四角由海报或权益卡自己决定；关闭按钮固定正圆（`pill`），1px `border` 只在遮罩上勾边。
- 二维码是直角方块，不给形状选项：圆角会吃掉空白边距，也让扫码框找不到边。中心图标盒子用 `sm` 圆角，和图片缩略图同一档。
- 折叠面板的卡片分组用 `md` 圆角并裁掉溢出，面板本身不带圆角；`plain` 去掉描边和圆角，只保留 `surface` 底。
- 区块标题栏只有 `soft` 带轮廓：`default-soft` 浅底配 `md` 圆角；`plain` 不带底色、描边和圆角。竖线固定 `pill` 圆头，宽度不随档位变化。
- 留白组件没有外轮廓：两个方向都不加圆角、描边和形状选项；需要圆角、描边或卡片底色时由外层容器提供。
- 滚动消息按 `shape` 取圆角：`rounded` 用 `md` 8、`pill` 用胶囊、`square` 平角；1px 描边占位始终保留，换外观时内容不上下跳。
- 通告栏默认 `square` 平角通栏；`rounded` 用 `md` 8，放进卡片；`pill` 用胶囊。圆角只作用于整条外轮廓，关闭热区和内部内容不单独加圆角。
- 气泡弹框的面板圆角 `md` 8，菜单项按下圆角 `sm` 6；尾巴高 7、底边 14、旋转方块 9.9，方向由 `placement` 四档决定，不提供自定义圆角和尾巴尺寸。
- 单选的标记固定正圆（`pill`），不提供方形、半圆角或自定义圆角；只画对号时没有外轮廓。列表 `card` 用 `md` 圆角并裁掉行项四角，行本身保持直角。
- 复选的标记固定小圆角方形，圆角按档位取 4 / 5 / 6px，不提供正圆、胶囊和自定义圆角；只画对号时没有外轮廓。列表 `card` 同样用 `md` 圆角并裁掉行项四角。方框和单选的正圆是两种控件的识别点，不要互换。
- 开关固定胶囊轮廓：轨道和滑块都用 `pill`，滑块是正圆，不提供方形、半圆角或自定义圆角。滑块的 1px 描边只用来在浅灰轨道上分清边界，不另加阴影。
- 分段器的 `shape` 三档：`rounded`（默认，跟尺寸取控件圆角 6 / 8 / 10）、`pill`（胶囊）、`square`（平角）。圆角只作用于外轮廓，选中底色由根节点裁切；中间段保持直角，`divider` 的竖线在三种形状下都保持竖直，不提供自定义圆角。
- 分页器的 `shape` 三档：`rounded`（默认，跟尺寸取控件圆角 6 / 8 / 10）、`pill`（胶囊）、`square`（平角）。圆角只作用于两个按钮，页码区不画形状；箭头形态保持正方形，`pill` 和 `square` 都只改按钮圆角。
- 瀑布流的卡片圆角取 `--vx-radius-sm` / `md` / `lg`，默认 `md`；`none` 为平角，只作用于卡片外壳，图片和标签跟着外壳裁切。`tag` 用 `--vx-radius-sm`，`extra` 的形状由内容自带。
- 验证码输入框的 `shape` 三档：`rounded`（默认，跟尺寸取控件圆角 6 / 8 / 10）、`pill`（胶囊）、`square`（平角）。圆角只作用于格子外轮廓；`line` 形态固定平角，不提供自定义圆角和描边宽度。
- 数字键盘的 sheet 面板只有顶部两角取 `--vx-radius-lg`，按键保持直角，格子靠 1px 分隔线切分；`radius=false` 时 sheet 去圆角也去阴影。inline 模式四角全平，直接贴着页面底部。
- 数字键盘输入框的密码位没有外框，只有 2px 下划线；`password` 下的圆点是正圆，数字和圆点共用一条基线，不画格子、不用胶囊。
- 树型菜单没有外轮廓：行是直角长条，不给圆角、描边和阴影；勾选框沿用复选的小圆角方形（4 / 5 / 6），箭头只换字形，不做旋转动画和自定义圆角。参考线固定 1px，选中底色和按下态都不额外裁圆角。
- 状态栏没有形状选项：不加圆角、描边和底色块边界，只铺满整宽的一条底色。
- 头像的 `shape` 三档：`circle`（默认，胶囊圆角）、`rounded`（按档取 `--vx-control-radius-*` 6 / 8 / 10）、`square`（平角）。图片由外框裁切，不在 `<image>` 上加圆角，也不提供自定义圆角和描边宽度。
- 图片底座的 `radius` 五档：`none` 直角、`sm` / `md` / `lg` 取 `--vx-radius-*`、`circle` 取 `pill`；圆角只作用于外框，图片一起裁，不提供自定义圆角。
- 分割线没有形状选项：固定 1px 直线，竖线也不加圆角；不用胶囊线、粗线和双线。
- 安全区没有形状选项：不加圆角、描边和阴影，只是一块透明的占位。
- 轮播图的 `radius` 四档 `none` / `sm` / `md` / `lg` 取 0 / 6 / 8 / 12，同时作用于外框和每一屏，卡片模式下露出来的相邻屏也是圆的。指示器圆点固定正圆、短线固定胶囊、计数固定胶囊；标题条是直角通栏，不单独加圆角。
- 数字动画没有形状选项：不加圆角、描边和底色，只有一串文字。
- 滚动列表的卡片没有形状选项：宽高由 `itemWidth` / `height` 给，圆角、底色和描边都写在插槽里；指示器圆点固定正圆 6，未选中和当前页同尺寸，未选中取 `text-secondary`。
- 级联选择外框取 `md` 圆角并裁掉列底，列与列之间只有 1px 竖线；行是直角长条，选中行只换底色和文字，不给单独圆角，也不提供形状选项。
- 新手引导的描边圆角取 `step.radius`（默认 8），超过目标短边一半时收在短边的一半；气泡固定 `md` 圆角配 10px 旋转方块箭头，遮罩洞本身由四块遮罩切出直角矩形，不提供形状选项。

## Icons

图标是单色图标，来自 Phosphor 2.1.2，分 core / extend 两档，每档都有 regular（线性）和 fill（实心），统一按 24 网格重绘为字体轮廓。

- 网格 24；regular 使用 1.5px 描边和圆头连接，fill 为实心。不提供双色、duotone 或多色版本。
- 图标分 `core` 112 和 `extend` 1000 两档。core 只放高频常用图标，随 `variables.css` 默认加载；extend 放长尾/专业图标，用到时必须引入 `libs/style/icons-extend.css`。
- 每档都有 `variant="regular" / "fill"`，四套字体共用同一组名字和码点。`fill` 给选中、强调、小尺寸。同一组不要混用，除非实心表示选中。
- `vx-icon` 根据 `name` 的 tier 自动选 core / extend 字体，业务不手动选 `font-family`。
- 尺寸只有 `sm` 14px、`md` 18px、`lg` 22px，对应 `--vx-icon-*`，也就是字号（em）。实际绘制区约为字号的 0.84–0.9，不要再乘系数，也不要新增第四档。
- 宫格的字体图标沿用这三档：`sm` 格子取 18，`md` / `lg` 格子取 22，不套底色；默认用 `text-secondary`，语义色交给 `type`，`iconVariant` 切 regular / fill。图片用 32 / 40 / 48 方框（`--vx-grid-media-*`）按 `aspectFit` 展示。方框尺寸不并入图标三档。
- 标签栏的字体图标沿用 `--vx-icon-*`：`sm` 用 18，`md` / `lg` 用 22；图片图标用 `--vx-tabbar-media-*` 的 20 / 24 / 28 方框按 `aspectFit` 展示，选中换 `activeImage`。字体图标跟选中色，图片不能染色；`iconVariant` / `activeIconVariant` 只切字体字重。
- 步骤条的图标节点沿用 14 / 18 / 22，和节点 20 / 24 / 28 同档；当前节点实心底配 `on-*` 图标，已完成浅底配语义色图标，待处理描边盒配次要灰图标。
- 分页器的两个箭头用 `vx-icon` 的 `chevron-left` / `chevron-right`，尺寸跟 `size` 取 14 / 18 / 22；颜色和按钮文字同一档：`plain` 用正文色或 `color`，`soft` / `text` 用 `*-pressed`，`solid` 用 `on-*`，`warning` 用 `warning-ink`。端点禁用和整条禁用都由透明度表达，不换图标色。
- 轻提示的图标单独 40px，直接取图标字体的字形，不走 `vx-icon`：图标三档放不下 40px 的提示图标。`variant` 仍只有 regular / fill。
- 暂无数据默认用内置线稿，不用图标；传 `icon` 时字形直接取图标字体，三档 32 / 40 / 48，不走 `vx-icon`。extend 图标要先引入 `icons-extend.css`，`iconVariant` 切 regular / fill。
- 提示页的默认图标按 `type` 取：成功对号、失败叉、警告三角、信息圆、进行中时钟、中性消息圆。字形直接取图标字体，三档 28 / 36 / 44，不走 `vx-icon`；`icon` 改名字，`iconVariant` 切 regular / fill，extend 图标要先引入 `icons-extend.css`，`icon` 插槽替换整个图标圆。
- 二维码的空状态用 `vx-icon` 的 `qr-code`，错误态用 `alert-circle`，都取 `lg` 22；错误态的图标用 `warning`，文案仍用次要色，不用图标单独表达失败。
- 树型菜单的节点图标用 `vx-icon` 的 sm / md / lg 14 / 18 / 22，没有图标和图片的节点不留图标位；`icon` / `iconExpanded` 换展开前后的图标，图片用 `image` / `imageExpanded`，加载失败回落到节点图标，再回落到 `folder` / `file`。箭头固定用 `chevron-right` / `chevron-down`，不用图片三角；扩展图标要先引入 `icons-extend.css`。
- 默认颜色是 `text`。`type` 只表达语义色（`primary`、`success`、`info`、`warning`、`danger`），warning 使用 `warning-ink`。容器反白、次要灰和禁用色通过 `color` 传入对应的 `--vx-color-*`，不在图标组件里写死。
- 功能图标的对比度不低于 3:1；纯装饰图标跟随文字，禁用态除外。
- 图标本身是展示件，不触发 `click`。可点击图标由业务包一层不小于 44×44 的热区，或用带文案的按钮承载。
- 14px 只放简单轮廓（箭头、关闭、勾选、加减）；`fill` 更重，复杂图形优先 18 或 22。
- 图标名字与码点是公开契约：新增只能追加码点，不改名、不复用。构建后同时更新 `libs/icons/codepoints.ts`、`pages/demo/icon/icon.uvue` 和组件库 readme。
- 四套字体随组件库分发：App 端在 `variables.css` / `icons-extend.css` 里内嵌 base64，字体跟样式一起进包，不依赖 `uni_modules` 下 static 目录的同步；H5 读相对路径，小程序内嵌 base64；不依赖网络字体。core 默认加载，extend 只在引入扩展 CSS 后加载（App 的 base64 也只进扩展 CSS 那一段）。
- 图标来源与许可证记录在 `libs/icons/LICENSE`。不要混入第二个图标库，也不要用 emoji 代替图标。
- 分隔列表不内置字体图标；需要图标时用默认插槽自己放 `vx-icon`，图标尺寸和颜色由插槽内容决定，不跟数值档位联动。
- 图片底座的失败态回落到 `errorIcon`（默认 `image`），用 `vx-icon` 的 `md` 18、`disabled-text`；extend 图标要先引入 `icons-extend.css`。成功态不叠加图标和角标。
- 头像的图标回落到 `icon`，空值用 `user`；图标单独 14 / 16 / 18 三档，不走 `vx-icon` 的 14 / 18 / 22。字形直接取图标字体，extend 图标要先引入 `icons-extend.css`。
- 分割线和安全区都没有内置图标：需要图标时由外层的列表行、标题栏或按钮承载，不要往组件里塞装饰。
- 级联选择的下一列箭头固定用 `vx-icon` 的 `chevron-right`（`sm` 14），选中项跟 `primary-pressed`，禁用项不显示；新手引导不内置字体图标，箭头是气泡自身的形状，不是字形。

## Motion

- `fast` 120ms 用于按下停留。
- `normal` 220ms 用于一般过渡。
- `spin` 700ms 只用于加载旋转，节奏为 linear。
- 按下用 `--vx-opacity-pressed` 0.8，加载用 `--vx-opacity-loading` 0.7，反色底上的禁用文字用 `--vx-opacity-disabled` 0.5。不另画一套实色按下样式，除非某个浮层明确需要 `*-pressed` 色。列表行和宫格格子是例外：整块按下用 `--vx-color-surface-pressed` 底，文字保持不透明；格子有 `bgColor` 时改用整体透明度。
- 开关的滑块用 `transform` 位移、轨道和滑块同时换色，时长 `normal` 220ms、`--vx-ease-standard`；首次渲染直接落在当前状态，不播放入场。不做缩放、回弹和轨道拉伸，按下时列表铺 `surface-pressed`、单行只压 `--vx-opacity-pressed`。加载圈用 `--vx-duration-spin` 700ms 线性旋转，5.26 的 App 没有关键帧时停在静态缺口圆环。
- 分段器切换直接换底色和字重，不做滑块位移、缩放、颜色过渡和入场；`divider` 直接出现或消失，不参与过渡。按下压到 `--vx-opacity-pressed` 0.8，禁用不进入按下态。这样 Web、App 和小程序的落点一致，也不用测量段宽。
- 分页器翻页直接换页码和按钮状态，不做位移、缩放、页码翻转和入场；按下压到 `--vx-opacity-pressed` 0.8，端点的按钮淡到 0.5，整条禁用再淡一次 0.5。`hover-stay-time` 取 `VX_PRESSED_STAY_TIME`，和按钮同值。
- 瀑布流不做入场、位移和缩放：卡片按下只压 `--vx-opacity-pressed` 0.8，`extra` 的内容自己给反馈。列平衡和追加只改卡片顺序，不加过渡；图片加载前后由 `ratio` 预留高度，也不做高度动画。
- 滑块的圆盘直接跟手，不挂过渡：拖动时按手指位置即时落位，已选段宽度和圆盘位置同步，不做补间和回弹。按住时 4px 光晕即出现、松手即消失，不淡入淡出；程序化改值也直接落位，不播放入场。
- 索引列表不播放入场动画：滚动时吸顶标题按下一组标题的位置逐帧上推，不加过渡；点索引字母或滑过索引条立即定位，不做缓动。指示器按下即出现，松手即消失，不做淡入淡出。行按下铺 `surface-pressed`，不做缩放和位移。
- 树型菜单不做展开过渡、位移和缩放：点箭头或整行直接换可见行，箭头从 chevron-right 换成 chevron-down，不加旋转动画；按下只压 `--vx-opacity-pressed` 0.8，选中直接换底色和文字色。`hover-stay-time` 和按钮同值。
- 图片组合按下用 `--vx-opacity-pressed`，整张图连同圆环一起变淡；没有滑入、缩放和切换动画，`offset` 和 `wrap` 都直接落位。
- 图片预览在 Web 上用 `--vx-duration-normal` 淡入；App 5.26 直接出现，关闭即移除，不做退场。左右翻页用 `transform` 的 `--vx-duration-normal` 过渡，拖动期间不挂过渡，松手才补；缩放和双击复位同样用 `transform` 过渡。第一张向右、最后一张向左的回弹也走同一个时长。`zoom=false` 时没有缩放和双击，`swipeable=false` 时没有拖动。
- 图片上传只做按下透明度，不做格子缩放、淡入和进度条补间；进度宽度直接跟 `progress`，状态切换直接换遮罩。删除、重试和选择都立即落位；预览层的淡入和翻页沿用 `vx-gallery`。
- 压屏窗在 Web 上遮罩淡入、内容从 0.96 放大到 1，时长 `--vx-duration-normal`、`--vx-ease-standard`；5.26 的 App 直接出现，不做退场。第一次打开后根节点常驻，关闭只切 `display: none`，原生子组件不销毁；原生层在 App 上反复创建会整层不画。Web 的 `prefers-reduced-motion` 停掉两条动画。
- `hover-stay-time` 只接受数字，`vx-button`、`vx-tag`、`vx-list-cell` 从 `libs/motion.ts` 的 `VX_PRESSED_STAY_TIME` 取值，与 `--vx-duration-fast` 同值。iOS 与鸿蒙不透传该属性，实际停留 400ms。
- 消息提示在 Web 上用 `--vx-duration-normal` 淡入；App 5.26 没有 CSS 关键帧，元素直接出现。关闭即移除，不做退场动画。
- 轻提示和消息提示同一套淡入；App 上直接出现，点浮层关闭也不做退场。
- 操作菜单用 `--vx-duration-normal` 淡入遮罩、从底部滑入面板，关闭时反向淡出、滑出；关键帧没有平台条件编译，App 和 Web 是同一套（5.31 起 App 支持 `@keyframes`，5.26–5.30 直接出现，不会卡在透明态；这两种版本上没有退场动画，表现为多停约 220ms 再消失）。根节点是 `v-if`，关闭时先挂退场态让节点多留一帧时长再摘，所以进退场都有动画；退场期间重新打开会取消计时、摘掉退场态，关键帧换成入场那条从底部重新滑入，不会叠出第二个面板（关键帧做不到从半路接着走）。
- 抽屉和操作菜单同一套时长和曲线，走两帧式 `transform` 过渡（先挂着起点，下一帧再落位），App 和 Web 都有进退场，关闭时滑出所在边。抽屉第一次打开后根节点常驻，关闭只切 `display: none`，原生子组件不销毁；原生层在 App 上反复创建会整层不画。正文滚动不和页面串联，滚到底不把页面一起带走。
- 弹出层只过渡 `transform` 和 `opacity`：贴边面板从所在边滑入，居中面板只淡入不缩放，遮罩同时淡入。默认 `--vx-duration-normal` 220ms、`--vx-ease-standard`；`duration=0` 和 Web 的 `prefers-reduced-motion: reduce` 都直接切换，不挂过渡类。关闭动画走完（`duration` 加 16ms 一帧）只加隐藏 class：第一次打开后根节点常驻，关闭只切 `display: none`，原生子组件不销毁；原生层在 App 上反复创建会整层不画。关闭过程中再打开会从当前位置回到终点，不会叠出第二个面板。
- 弹出层的高度和宽度直接落位，不做展开、收起和尺寸过渡；改 `placement` 也不补间，换边即换边。
- 日期时间选择器沿用底部弹层的时长和曲线：Web 上淡入遮罩、从底部滑入面板，关键帧只写在 Web 里，App 上直接出现。第一次打开后根节点常驻，关闭只切 `display: none`，原生子组件不销毁；原生层在 App 上反复创建会整层不画。滚轮的惯性和吸附由原生 `picker-view` 负责，组件不额外加动画。
- 联动选择沿用底部弹层的时长和曲线：Web 上淡入遮罩、从底部滑入面板，关键帧只写在 Web 里，App 上直接出现。第一次打开后根节点常驻，关闭只切 `display: none`，原生子组件不销毁；原生层在 App 上反复创建会整层不画。列数变化时重挂滚轮，不做跨列过渡；滚轮的惯性和吸附由原生 `picker-view` 负责。
- 日历弹层沿用底部弹层的时长和曲线：Web 上淡入遮罩、从底部滑入面板，关键帧只写在 Web 里，App 上直接出现。第一次打开后根节点常驻，关闭只切 `display: none`，原生子组件不销毁；原生层在 App 上反复创建会整层不画。翻月、选中和区间都不做过渡，点完直接换色，避免 42 高的格子逐格动。平铺模式没有动效。
- 选择框沿用底部弹层的时长和曲线：Web 上淡入遮罩、从底部滑入面板，关键帧只写在 Web 里，App 上直接出现。第一次打开后根节点常驻，关闭只切 `display: none`，原生子组件不销毁；原生层在 App 上反复创建会整层不画。点选只换标记，确定才收起，不做缩放、位移和颜色过渡。
- 文本没有入场、切换和颜色过渡；`clickable` 按下压到 `--vx-opacity-pressed` 0.8，松手即恢复；`copyable` 调系统剪贴板，组件不调用轻提示（系统提示除外）。
- 链接没有入场、下划线动画和颜色过渡；按下压到 `--vx-opacity-pressed` 0.8，松手即恢复。禁用和 `action="none"` 都不产生位移和缩放，复制反馈由系统轻提示承担。
- 加载转圈用 `--vx-duration-spin` 700ms、linear；圆环、开口弧、十二瓣三种形态共用这个节奏。Web 上加一层 `normal` 淡入，5.26 的 App 直接出现；十二瓣在 5.26 真机上可能不旋转，文案要能独立说明状态。
- 加载动画的圆环 700ms linear；音律柱 900ms `ease-in-out` 交替，五根柱子按 130ms 错开；弹跳点 960ms，影子同一条时间轴缩放；液面两片椭圆分别 2.8s / 3.2s 交替，只横向移动椭圆，不移动整块。循环时长取 `--vx-loader-duration-*`，和令牌一起改。浮层在 Web 上用 `normal` 淡入；5.26 的 App 没有关键帧，四种形态都停在静态姿态，文案要能独立说明等待。Web 上 `prefers-reduced-motion` 关掉循环动画。
- 骨架屏的 pulse 1400ms 在 100% 与 70% 之间呼吸；shimmer 1600ms 让一道 64% 宽的高光从左扫到右。循环时长取 `--vx-skeleton-duration-*`，和令牌一起改。5.26 的 App 没有关键帧：pulse 停在 100%，shimmer 的扫光层保持透明。5.31 起 pulse 恢复；shimmer 的渐变在蒸汽模式不保证。Web 上 `prefers-reduced-motion` 同时停掉两条动画，静态骨架仍表达结构。
- 折叠面板展开用 `normal` 220ms：内容透明度 0 → 1、上移 8px 归位，`max-height` 从 0 到 2000px；收起反向。固定高度改用 `height` 从 0 到指定高度。第一帧不挂过渡，默认展开的面板不会滑进来。`max-height` 在 5.26 的 App 上不支持过渡时直接换高度，透明度仍然过渡。
- 标签页 `line` 形态的横向短线是一条跨项滑动的指示线：等宽形态挂在根节点上，格子按 `100 / 数量 %` 等分、`transform` 整格平移，几何全是百分比，Web 和 App 落点一致，也不需要测量；承载它的外框只占底部一条线高（`--vx-border-width-strong` 2px），不铺满整行——铺满时 App 上 `pointer-events` 不保证，整排页签的点击会被这一层接走。线要盖住底边分割线时靠 `overflow: visible` 下移 1px 画出去，不靠加高外框。`scrollable` 形态页签不等宽，用 `createSelectorQuery` 实测选中项中心 x（和轨道同一批取样，滑动中量也准），量不到就退回逐项渲染，线仍然画在当前项下。时长 `normal` 220ms、`--vx-ease-standard`，只过渡 `transform`，不做淡入淡出。`soft` / `inverse` 的选中胶囊和竖排的左侧竖条仍直接落位，不做位移动画。点当前项不重播；索引失效（负数、越界）先摘线，重新选中直接落在位置上，不播入场。按下用 `--vx-opacity-pressed`。
- 标签栏不画指示线；切换选中的动效是回弹（`animated`，默认打开）：新选中的图标位先收一档（缩到 0.82）再弹回 1，文案同时从下方 3px 上浮归位，时长 `normal` 220ms、`--vx-ease-standard`，只过渡 `transform`。App 没有 CSS 关键帧，收起帧不带时长当帧落位，弹回帧由行内给时长，两帧接力出回弹。首次渲染直接落在当前状态，不播放入场；`animated` 关掉后切换直接落位。纯文案栏没有图标位，整组轻微收放（0.96）。`action` 项没有选中态，凸起圆钮不缩放、不位移，都不参与回弹。其余照旧：切换换文字色、字重和图标，按下整列用 `--vx-opacity-pressed`。
- 区块标题栏没有入场、展开和位移；唯一的状态过渡是 `clickable` 按下变淡，复用 `--vx-opacity-pressed`。
- 留白组件没有动效：改 `size` / `height` / `gap` 时直接落位，不做展开、收起或过渡；滚动和页面切换由外层承载。
- 滚动消息每格用 `normal` 220ms 的 `transform` 过渡：当前条滑出、下一条滑入，两层在视口外对调，不往回滚。按下整条时暂停，松手后重新计时；改文案或方向从第一条重来，改间隔只重新计时，不做跨条动画。
- 通告栏的滚动用 `transform` 的线性 `transition`，时长按「视口宽 + 文字宽」和 `speed` 计算，5.26 的 App 端不用关键帧。文字放得下时停在原位；一轮走完在两端都看不见的位置复位，再从右侧进入。`forwards` 只让第一轮跳过右侧入场，从左侧起点开始。改文案、尺寸、图标、关闭叉会重新测量并从第一轮重来；改 `speed` / `activeMode` 只重置节奏。复位和起跑之间留 `VX_NOTICE_BAR_SETTLE` 一帧，避免过渡被并进同一次样式更新。
- 气泡弹框在量完位置后淡入，面板从 0.96 放大到 1，时长 `normal`；5.26 的 App 直接出现，关闭即移除，不做退场。页面滚动、点外部和 Web 上的 Esc 都会收起。
- 滑动菜单拖动时不挂过渡，内容跟手移动；松手才补 `--vx-duration-normal` 的 `transform` 过渡。横向超过 8px 且大于纵向位移后才接管，并拦住这一笔外层滚动；纵向先超过 8px 则整段手势交还给页面，不改当前展开距离。拖动超过动作总宽的一半，或 24px / 250ms 内的快速轻扫时展开；向右滑回或不到一半时收起。
- 滑动菜单默认同组只展开一行。同组另一行横向接管、调用 `open()`，或把 `v-model:open` 写成 true 时，已展开的行立即收起；不播放入场动画，不铺全屏透明遮罩。点页面其他位置不会收起，收起只由点内容、点动作、滑回来或改模型触发。
- 展开后的内容上盖一层透明保护层，点内容只收起、不触发行 `click`；滑动结束后保留 300ms 点击保护，挡住浏览器补发的 click。保护层不显示、不改变布局，也不阻止纵向滚动。
- 二维码没有入场、刷新和切换动画：内容或尺寸变化时直接重绘，不做淡入和缩放；重绘会让模块错位，扫码器需要重新对焦。
- 进度条改 `percent` 时用 `width` 过渡，默认 `--vx-duration-normal` 220ms、`--vx-ease-standard`；`duration=0` 直接落位，不支持过渡的平台也直接落位，首次渲染不播放入场动画。`end` 在计时结束时抛一次，连续改值只按最后一次；不依赖 `transitionend`，App 和小程序行为一致。
- 环形进度用脚本按帧推进（优先 rAF，小程序退回 16ms 定时器），默认 600ms、`--vx-ease-standard`；两段半环和圆头共用一个进度值，运动中不会脱节。`duration=0` 直接落位；连续改值时上一段立即取消，弧线从当前位置继续，只在落定后抛 `end`。首次渲染不播放入场动画，频繁更新的上传进度把时长控制在 300 以内。
- 提示页没有入场和切换动画：图标、标题、说明和动作直接落位；按钮的加载转圈沿用 `vx-button`，页面本身不播放入场、缩放和按压回弹。
- 分隔列表没有入场和切换动画：改数据、改尺寸和切主题都直接落位；按下默认铺 `surface-pressed`，自定义底色时整格淡到 0.8，禁用淡到 0.5，不做缩放、位移和颜色过渡。
- 验证码输入框只让光标 1s 线性闪烁，Web 上 `prefers-reduced-motion` 关掉闪烁；5.26 的 App 没有关键帧，光标停在静态竖线。焦点切换、满位和错误都不做缩放、位移、抖动和颜色过渡。
- 数字键盘的 sheet 在 Web 上遮罩淡入、面板从下方滑入，时长 `--vx-duration-normal`，跟随减少动效；滑入只在 Web 启用，App 直接出现，关闭即移除。按下只换底色，不做缩放、位移和回弹；`random` 重排也直接落位。
- 数字键盘输入框的错误抖动 320ms，Web 上生效；5.26 的 App 没有关键帧，只换颜色；抖动不改变值、不自动清空。密码位换色和数字增减直接落位，不做逐位弹出和计数动画。
- 表单校验失败不播放入场、抖动和颜色过渡：错误行直接出现，控件描边和文案同时换色；`scrollToError` 只滚 200ms，不抢焦点、不弹键盘。`clearValidate()` 直接收掉错误行，不保留占位。
- 状态栏不做入场和展开动画：`fade` 的底色透明度跟手滚动，不加过渡；`transparent` 时没有渐显，改主题或改高度都直接落位。
- 图片底座只在加载完成后做一次 220ms 的 `opacity` 淡入，`fade=false` 直接落位；`src` 变化重置回占位，不缩放、不位移、不做骨架扫光。不支持过渡的平台直接落位。
- 分割线没有动效：改方向、虚实、间距和颜色都直接落位，不做展开、收起和尺寸过渡。
- 安全区没有动效：改边、改高度和切换 `fixed` 都直接落位；固定条出现和收起都不淡入淡出。
- 虚拟列表不做入场、位移和缩放：用户滚动直接换窗口，不挂过渡；`scrollToIndex(animated=true)` 用 `scroll-view` 自带滚动动画，其余直接落位。程序化跳转期间锁住中间 `scroll` 事件，只取落点，避免连续重建和误触 loadmore。
- 拖拽排序的长按 300ms、落位 220ms、自动滚 16ms 一帧、点击守卫 300ms 写在组件目录的 `drag-list.ts`，与 `--vx-duration-normal` 手工一致。起拖前只观察：移动超过 8px 立刻按滚动处理。被拖行跟手不挂过渡，其余行 220ms 让位；起拖后锁滚动，落位动画走完再解锁；自动滚每帧写受控 `scroll-top`，方向不翻转。
- 轮播图的切换动画由原生 swiper 负责（默认 400ms）：拖拽、回弹和循环都是平台行为，组件不挂过渡；指示器直接换态，不做宽度补间和位移动画，`line` 的当前项从 8 直接变成 20。`card` 的左右露出由平台在换屏时处理。
- 数字动画用脚本按帧推进（优先 rAF，退回 16ms 定时器），每帧只改一个 `text`，不做逐位滚动；`duration=0` 和 `value === from` 不排帧，直接落值后异步抛一次 `finish`。连续改值先停旧补间再从 `from` 重播，不叠加、不从半路接着走。
- 筛选栏的箭头翻转 220ms（`--vx-duration-normal`、`--vx-ease-standard`）；面板只淡入淡出不位移，和遮罩同频，展开时先量位置再淡入，第一帧不在错误位置闪。收起走完 220ms 加一帧才卸载，关闭过程中再打开从当前位置回来。
- 返回顶部的显隐是透明度和 8px 位移的双向过渡，220ms（`--vx-duration-normal`、`--vx-ease-standard`）；节点常驻，滚过阈值时不跳版。按下压到 `--vx-opacity-pressed`，不做缩放和回弹。
- 滚动列表不做入场、位移和缩放：指示器换页直接换色，不做圆点宽度补间；`scrollToIndex(animated=true)` 用 `scroll-view` 自带滚动动画，跳转期间忽略中间 `scroll` 事件，避免指示器一路抖过去。
- 级联选择不播放入场和切列动画：换列、换选中行都直接换内容、底色和字重；每列首次出现时按选中行居中一次，同一列里的后续点选不再重算滚动位置，避免点一下跳一下。
- 新手引导的遮罩和洞直接落位，不做缩放入场；气泡在量完位置后淡入 220ms（`normal`），箭头没有动画。`refresh()` 和切步都不播气泡位移过渡，直接换到新位置。

## Components

- 标签名 `vx-<block>`，全小写、单词间用连字符。目录名、文件名、标签名一致，例如 `components/vx-button/vx-button.uvue`。
- Props 类型放在同目录 `props.ts`。跨组件复用的尺寸和语义色放在 `libs/types/common.ts`。
- class 用 BEM：块 `vx-button`、元素 `vx-button__text`、修饰 `vx-button--primary`。
- 选择器只能是单个 class，或逗号分组。组合态合成一个 class，例如 `vx-button--plain-primary`、`vx-button--plain-disabled`。
- 组件私有变量以块简写为前缀，例如 `--vx-btn-bg`。值必须是字面量；App 不支持把变量定义成另一个 `var()`。随状态变化的颜色直接写 `color` / `background-color` / `border-color: var(--vx-color-*)`。公共令牌一律 `--vx-<类别>-<角色>`。
- App 上单 class 的优先级按元素 class 字符串的先后，后写的生效。样式表定义顺序与 class 字符串保持一致，状态放在尺寸和类型之后。
- Props 小驼峰。布尔用肯定式（`disabled`、`loading`）。尺寸统一 `size`，语义统一 `type`。
- 控件文案用 `--vx-font-control-*`：14 / 16 / 18，与控件高度配套；正文仍用 `--vx-font-*`。控件内图标沿用 `--vx-icon-*`，不跟字号联动。
- 按钮文案用 `medium`；标签用 `regular`；输入框和多行输入框的标题用 `medium`；输入内容、占位、单位和辅助文字用 `regular`。
- 输入框和多行输入框的标题与内容同字号，靠字重拉开层级；不要给标题单独加一档字号。
- Emits 用动词或状态名（`click`、`change`、`confirm`、`cancel`、`close`），不加 `on`，只传业务值。
- 默认插槽承载主内容。具名插槽只允许 `prefix`、`suffix`、`icon`、`extra`。
- 按钮 `type` 有 `primary`、`success`、`info`、`warning`、`danger`、`default` 六种；`info` 只表达信息层级，不参与主操作。
- 按钮视觉层级用 `variant` 表达：`solid`（默认实心）、`plain`（镂空）、`soft`（浅底）、`link`（纯文字）。`plain` 是 `variant="plain"` 的旧写法。
- 按钮形状用 `shape` 表达：`rounded`、`pill`、`square`。`round` 是 `shape="pill"` 的旧写法。新代码优先使用 `variant` / `shape`。
- 自定义尺寸只允许通过按钮的 `width` / `height` 传入带单位的值，且不得用于页面主操作；常规页面仍使用 `sm | md | lg`。`block` 优先于 `width`。
- 按钮状态四种：默认、按下、禁用、加载。表单控件可以增加 `focused`。`invalid` 用修饰 class 改描边。
- 输入框形态用 `variant` 表达：`outline`（默认描边盒）、`line`（只保留底部分割线的表单行）、`search`（浅底胶囊的搜索框）。外轮廓用 `shape`，`line` 和 `search` 不参与圆角。
- 搜索框是输入框的语义扩展，不另开组件：底色 `default-soft`、胶囊圆角、默认不画可见描边，前置 `vx-icon` 的 `search`，左右内边距 12 / 16 / 16，高度仍是控件三档。描边留在 1px 透明边框上，聚焦换 `primary`、`invalid` 换 `danger`，既保住焦点可见性，也不让状态切换跳行高。搜索框的键盘确认键默认是 `search`（放大镜 /「搜索」），显式传 `confirmType` 时以传入值为准；`outline` / `line` 不传仍是 `done`，变体切回普通形态时键面跟着回到「完成」。
- 搜索框没有标题位：`label` / `required` / `unit` 在这个形态下不渲染，同时传了在开发环境提示一次；标题、必填和单位由外面的表单行或卡片承担。
- 搜索框的取消按钮固定在右侧，文案「取消」，字号取 `--vx-font-control-*`，色取 `text-secondary`；有值或聚焦时出现，其余时候不占位，`disabled` 时仍显示但按下不响应，`readonly` 不出现。点取消先清空值、收起键盘，再抛 `cancel`；`clearable` 的清除图标排在取消左侧。点清除在写回空串后同时抛 `input('')`，`clear` 照旧抛，不抛 `change`；`change` 仍只在失焦和确认时抛。
- 多行输入框沿用输入框的形态，并额外提供 `plain`：只留透明描边、不加底色，用于已经放进卡片或分组里的段落输入。`shape` 只有 `rounded` 与 `square`。
- 多行输入框的 `borderColor` 只改默认态描边。`focused`、`invalid`、`disabled` 仍按状态盖住，不用它表示错误。
- 输入框的标题、必填星号、单位与选择箭头都在控件内部。同一组表单行统一 `label-width`，让输入起点对齐；该值需要带单位。多行输入框的标题与内容顶端对齐，计数和 `extra` 插槽放在内容区底部。
- 输入框左右内边距跟尺寸（12 / 16 / 24）；标题与内容留 8 / 12 / 16，前缀、后缀、单位留 `sm`；清除、箭头和后缀图标共用右侧基线，箭头再补 `xs` 抵掉字形留白。
- 只读选择行用 `readonly` + `arrow`，点击整行由 `click` 事件处理；不要用禁用态冒充可选状态。
- 输入框的清除与选择箭头复用 `vx-icon` 的 `close` / `chevron-right`，尺寸比输入档位小一档；不要再用文字字符。搜索框的前置图标复用 `vx-icon` 的 `search`，走 `sm` / `md` 两档（14 / 18），`lg` 与 `md` 同档，不新增第四种图标尺寸。
- 表单由 `vx-form` 容器和 `vx-form-item` 表单项组成：容器管注册、串行校验、错误定位和整组状态，表单项管标题、星号、说明和错误行。表单不接收 `model`，也不抛 `submit` / `fail`：值留在各控件的 `v-model` 上，提交由页面调 `validate()` 后处理。
- 项在挂载时向容器登记 `{ prop, order, validate, clearValidate }`，卸载时摘除；`prop` 为空只做布局。同一个 `prop` 以先注册者为准，开发环境提示一次。
- `validate()` 按注册顺序串行、不并发，遇到第一个失败立即停止并返回 `false`；`validateField(prop)` 只校验一项，不自动滚动，适合输入框的 `change` / `blur`；`clearValidate(prop?)` 不传清全部、只清错误态，不碰业务数据。
- 规则判定写死：空值只看 `required`，非空依次跑 `len` → `min` / `max` → `type` → `pattern` → `validator`，第一个失败即返回。空值包括 `''`、`null`、`undefined`、`false`、空数组和 `NaN`；`0` 是有效数值。
- 内置 `type` 只有手机号、邮箱、身份证号、链接和数字；`pattern` 接字符串，内部 `new RegExp`，不接 RegExp 实例；`validator` 可同步或异步，抛异常按失败处理。
- 错误状态归表单项私有：`error` 字符串非空即 `invalid`；受控 `error` 非空时以它为准，父级清空后本地错误一起收掉。`help` 常驻，出错时被错误替换；两者都没有时不预留高度。
- 标题归属：输入类控件的标题在控件内部，表单项不传 `label`；非输入类控件由表单项画标题和星号。`labelPosition="top"` 时标签独占一行、`labelWidth` 不生效；星号在标题末尾，项没有 `label` 时不画。
- `required` 不传时按规则里有没有 `required: true` 推断，显式 `false` 可关星号；`disabled` 的整组或字段跳过校验，星号仍显示，控件自己的禁用态由业务传。
- `size` 改标题的字号、行距和左侧标签的最小高度，错误行固定 `body-small`；`labelWidth` 默认空串，视觉宽度来自 `--vx-form-label-width`（80px），不写行内、不警告，纯数字仍提示一次。容器和项都不画底色、描边、圆角和外部间距。
- `scrollToError` 先由失败项在自己的作用域里量根节点，把视口 `top` 交给容器；容器在外层是 `vx-page` 时滚它的滚动区，没有才用 `selectViewport().scrollOffset()` 补页面滚动量后调 `pageScrollTo({ scrollTop, duration: 200 })`。form 自己按 `.in(proxy)` 查 `.vx-form-item--invalid` 只作兜底；量不到、被禁用或页面不滚动时静默跳过。校验失败不抢焦点、不弹键盘。
- Web 上错误文案另有一层隐藏的 `aria-live="polite"` 播报层；App 没有 aria 属性。App 的页面滚动由最外层 `scroll-view` 模拟，内层 `scroll-view` 里 `pageScrollTo` 不生效；这时失败项仍交矩形，由 `vx-page` 的滚动区接手，接手不了就不滚动也不报错。
- 表单不提供 `trigger` 自动校验：实时校验由业务在控件的 `change` / `blur` 里调 `validateField`。不托管 `model`、不做 schema、动态增删行、跨字段联动和表单构建器。
- `vx-form-item` 默认插槽暴露 `{ invalid, error }`，把 `invalid` 传给控件的同名属性；没有具名插槽，控件的前后缀仍走控件自己的 `prefix` / `suffix`。
- 数字框由减号、数值输入和加号三段组成，没有分段线。中间输入区宽 44 / 52 / 60px（`--vx-number-box-field-*`），两侧按钮宽度等于控件高度 32 / 40 / 48px，图标 14 / 18 / 22，数值用 `--vx-font-control-*`。
- 数字框默认 `min` 1、`max` 99、`step` 1。到边界时对应按钮转 `disabled-text`，不再响应点击；`disabled` 让整组停下并转灰。
- 数值精度按参与运算的值、`step`、`min`、`max` 里最多的小数位收口，最多保留 6 位，避免 `0.1 + 0.2` 这类浮点尾巴。`step` 只决定加减量，不强制把值对齐到步长网格。
- 输入过程中只同步范围内的有效值；失焦或确认时再收口：空值回 `min`，非数字回最近一次有效值，越界夹到边界。点加减时越界或空草稿先夹回边界再走一步。父级写入的越界值不回写，此时点加减或失焦只夹到边界。`change` 只在点加减、失焦和确认收口后值真的变化时抛一次，不在每次按键时抛。
- 数字框形态用 `variant` 表达：`outline`（默认描边盒）、`soft`（浅底无框，适合列表行和购物车）。外轮廓用 `shape` 的 `rounded` / `pill` / `square`；`soft` 只换底色和描边，不改结构。
- `focused` 用主色描边，`invalid` 用危险色描边且只改描边；`disabled` 同时改底色、数值和图标颜色。圆角只作用于整组外轮廓。描边盒按下铺 `surface-pressed`，由根节点裁出圆角；浅底和自定义底色按下只让图标变淡，亮色和暗色同一套。
- 自定义颜色用 `bgColor` / `color` / `iconColor`，分别只覆盖整组底色、数值和加减图标，字面值不跟随主题；禁用时三者都不再生效，到达边界的一侧图标仍用 `disabled-text`。
- 数字框只承载数值，不内置标题、说明、单位和提交入口；标签放在外面的表单行、列表行或卡片里，同一组用同一档尺寸对齐。组件不提供插槽和方法。
- 整组点击停在本组件；放进可点击列表行或卡片时，数值区和加减按钮都不触发外层点击。
- 数值输入框在 Web 上是可聚焦的原生输入；加减按钮是 `view`，Web 端不进入 Tab 顺序。下限不小于 0 时用 `digit` 键盘；下限为负时用 `text`，否则负号打不出来。需要键盘完整操作时由外层表单提供可聚焦入口，并给数字框配可读的文字标签。
- 倒计时 `vx-countdown` 用 `time` 传剩余秒数，`showDays` / `showHours` / `showMinutes` / `showSeconds` 控制可见单位。没有可见单位时回落到秒；被隐藏的上层单位并入下一个可见单位，最大可见单位保留完整进位。
- `separator` 用 `colon`（默认）或 `unit`；`unit` 用天、时、分、秒，`unit="en"` 换成 `d / h / m / s`。冒号模式不显示单位。
- 数字盒外观用 `variant` 表达：`outline`（默认 `surface` 底、`border` 描边）、`soft`（`default-soft` 浅底、无描边）、`plain`（无盒，只留数字）；尺寸只取 `sm | md | lg`。`outline` 把 `borderColor` 设为 `transparent` 只去描边，连盒底一起去掉用 `plain`。
- 数字和十分位用 `text`，单位和冒号用 `text-secondary`。`type` 表达状态时数字、描边、单位和冒号一起跟随，warning 用 `warning-ink`，浅底用 `*-pressed`；默认 `default` 不染色。
- 自定义颜色用 `bgColor` / `color` / `unitColor` / `borderColor`，分别只覆盖盒底色、数字、分隔单位和描边；默认按字面值使用，传 `var(--vx-color-*)` 时跟随主题。`bgColor`、`borderColor` 只在 `outline` / `soft` 生效，`color` 只改数字，盒外的冒号用 `unitColor`。
- `showMilliseconds` 在秒后加一位十分位，按 100ms 刷新；毫秒位依附秒数，`showSeconds=false` 时一起隐藏。它只到 100ms 精度，不要当成高精度计时器，也不要在一屏放多个。
- 倒计时挂载后默认自动开始；`autoStart=false` 时等 `start()`。方法有 `start()` / `pause()` / `reset(seconds?)`，`reset` 不传秒数回到 `time`。`time` 改变时按新值重来。
- `tick` 在显示秒数变化时抛剩余秒数，`end` 只在自然到 0 时抛一次；暂停、重置和外部改 `time` 不抛 `end`。
- 倒计时只承载读数，不放标题、说明、按钮和链接；需要标签、操作和布局时由外面的卡片、列表行或页面区块承载。组件没有插槽，也不抛点击。
- 标签视觉层级用 `variant` 表达：`solid`（默认实心）、`soft`（浅底）、`plain`（空心）。`type` 与按钮相同，六种语义色，默认 `default`。
- 标签形状用 `shape` 表达：`rounded`（默认）、`pill`（胶囊）、`half`（半圆角：左侧胶囊、右侧平角）、`square`（平角）。
- 标签高度单独三档 20 / 24 / 28（`--vx-tag-height-*`），左右内边距 6 / 8 / 10（`--vx-tag-padding-*`），文案 12 / 16、13 / 18、14 / 20（`--vx-tag-font-*` / `--vx-tag-line-*`），字重 `--vx-weight-regular`。不借用紧凑高度，也不借用控件字号。
- 标签的自定义颜色用 `color` / `bgColor` / `borderColor`，分别只覆盖文字、底色、描边。实心标签同时传 `bgColor` 和 `color`，组件不推断对比度。
- 自定义颜色是字面值，不跟随亮色 / 暗色主题切换；需要跟随主题时用 `type`。
- 标签只承载展示与关闭：`closable` 显示 `close` 图标并抛 `close`。不提供点击态和禁用态；需要筛选、选中态时用专门的 chip 或按钮，不要给标签加点击样式。
- 标签的 `prefix` 插槽放前缀图标或圆点，默认插槽放文案右侧的补充内容；插槽内容不继承 `color`，文案用 `text`。
- 标签的关闭图标复用 `vx-icon` 的 `close`，三档都用 `sm` 14。`closable` 时右内边距收一档，关闭热区宽度不小于标签高度。
- 徽章只承载计数、短词和圆点：`value` 是计数，`text` 是自定义短文案且优先于 `value`，`dot` 只显示圆点并优先于两者。计数小于 1 时不渲染；要显示 0 用 `text="0"`。
- 徽章的计数封顶用 `max`，默认 99，超过显示 `max+`；计数取整。
- 徽章 `type` 默认 `danger`，`variant` 有 `solid`（默认实心）和 `soft`（浅底）两种，`size` 三档，轮廓固定为胶囊。
- 徽章的 `absolute` 把徽章定位到默认插槽的右上角，圆心按徽章自身边框盒计算，宽胶囊同样压在角上。`offsetX` / `offsetY` 是在默认位置上的微调，单位 px，正值向右、向下。定位层不接收点击，点击落到下面的内容。App 默认裁掉溢出，外层没写 `overflow: visible` 时伸出的角会被裁。角标透明度是 `--vx-badge-opacity`，默认 1；父级写成字面量时只淡化角标，不淡化插槽。
- 徽章叠在图标、头像或图片上时用 `ring` 加一圈 `surface` 色描边；不叠内容、独立出现的计数不用 `ring`。
- 徽章的自定义颜色用 `color` / `bgColor`，分别只覆盖文字与底色；自定义颜色是字面值，不跟随主题。
- 徽章不提供点击、禁用和加载态。需要点击的入口由外面的按钮、列表行或页签承载。
- 页脚承载版权、备案号和辅助链接，不承载主操作或主导航。默认留在文档流，`fixed` 时贴住安全区底部。
- 页脚的 `copyright` 是版权或备案文案，`links` 是短链接数组；每个链接有 `text` 和可选 `value`，点击只抛 `click` 和该链接对象，路由与权限由业务处理。
- 页脚相邻链接自动加竖分隔线，链接不换行；一行建议不超过四个，超出时整体换行。首尾不加分隔线，也不在版权文字里塞链接。
- 页脚的 `color` 改版权文字，`linkColor` 改链接默认色，单个链接的 `color` 优先；`borderColor` 同时改分隔线和固定底栏顶部描边，`bgColor` 只改底色。四者都是字面值，不跟随主题，对比度由业务保证。
- 固定页脚用 `surface` 和顶部分割线，不叠阴影。5.26 蒸汽模式没有 calc，安全区不加进内边距，整块用 `--uni-safe-area-inset-*` 外移；页面底部留出页脚高度，再加底部安全区。
- 页脚的默认插槽放在标准行上方，用来放品牌、社交入口或补充说明；标准版权与链接仍由 props 渲染，不在插槽里重复。
- 提示是浮层，不占布局，挂在页面根节点：`position` 三档 `top` / `center` / `bottom`。`top` 铺满整条、直角，贴在导航栏下方：App 上让开状态栏和一行 44 的导航栏，原生导航栏和页面自绘的导航栏都算，Web 和小程序读安全区；`center`、`bottom` 收成圆角浮层，`maxWidth` 默认 320px，左右至少留 24。
- 提示的 `type` 与按钮、标签同一套语义色，实心底配 `on-*` 前景。`default` 用正文色的反相底（`text` 底、`text-inverse` 字），亮暗主题自动互换，和徽章的实心 `default` 一致。
- 提示的 `bgOpacity` 只调底色，文字和图标保持不透明；默认 `1`，低于 1 时背景不再由组件保证 4.5:1 对比度。
- 提示的 `opacity` 让整条一起淡：底色、文字、图标和阴影都乘这个值，默认 `1`；和 `bgOpacity` 同时传时两者相乘，低于 1 时对比度归业务。
- 提示的 `duration` 默认 2000ms，`0` 表示常驻。自动关闭、点提示和 `close()` 都抛 `close`；父组件把 `show` 改回 `false` 只收起，不回抛。
- 提示的 `offset` 只做贴边微调，单位 px，`top` 往下、`bottom` 往上。`top` 已经在导航栏下方，这里只加额外距离（导航栏多一行 `extra` 时用它往下让）；`bottom` 在安全区外再留 16；居中、底部的定位层只有提示本身那么高，不铺满全屏挡点击。
- 提示的 `closable` 显示关闭图标，打开后点整条都能关。图标用 `icon` 传名字，固定 `md`，颜色跟前景；`icon` 和 `closable` 都是可选项，不是默认外观。
- 提示的默认插槽替换 `text`，用于两行内容；插槽内容不继承前景色，颜色、字号和行距自己带。
- 提示只承载一条消息：不嵌套表单、不放主操作；同一时刻只显示一条，重复触发同一条时调 `open()` 重新计时，不要叠两个实例。
- 消息提示不阻断页面点击；需要完全挡住页面、把结果放在屏幕中央时用轻提示 `vx-toast`，两者不要同时出现。
- 轻提示是居中浮层，不占布局：全屏定位层只负责接住点击，盒子在屏幕中间。`position` 不开放，顶部、底部消息仍用 `vx-tips`。
- 轻提示的 `type` 只决定默认图标：`success` 圆形勾、`danger` 圆形叉、`warning` 圆形感叹号、`info` 信息圆、`default` 消息气泡；`primary` 与 `info` 共用信息圆。盒子固定用 `text` 的反相底，亮暗主题自动互换，不铺语义色。
- 轻提示的 `bgOpacity` 只调底色，默认 `0.9`；文字和图标保持不透明，底色和页面内容有轻微叠影。
- 轻提示的图标 40px，不走 `vx-icon`：图标三档是 14 / 18 / 22，放不下这一档，字形直接取图标字体。`icon` 传字体图标名，`image` 传图片地址，图片优先，固定 40×40 等比展示。`color` 只改文案和字体图标，不给图片着色。
- 轻提示的盒子宽 120–240，内边距 24，圆角 `md`；文案用 `body`（15 / 22 / 400），最多三行。
- 轻提示的 `duration` 默认 2000ms，`0` 常驻；自动关闭、点浮层和 `close()` 都抛 `close`。点浮层可以提前收起，常驻提示也有出口。
- 轻提示挂在页面根节点，层级默认 1100，压过加载浮层（1050）、消息提示（1010）和固定页脚（1）；全屏层会挡住页面点击，只承载一条短消息，不放按钮、表单和长说明。
- 同一时刻只显示一条轻提示，重复触发先改 props 再调 `open()`，不要叠两个实例。
- 操作菜单 `vx-actionsheet` 是底部弹层：用 `items` 列出动作，`title` / `description` 是可选的头部，默认带取消按钮。`show` 支持 `v-model:show`，`open()` / `close()` 供 `ref` 调用。
- `items` 每项有 `text`、`type`、`disabled`、`selected`。`type` 只有 `default` / `primary` / `danger`：`primary` 标当前视图的主操作，`danger` 标删除、退出这类不可逆操作，其余保持 `default`。
- 面板用 `surface` 底、顶部 `lg` 圆角，贴边不加阴影，最大宽度 480px；遮罩用 `--vx-color-mask`，只压页面，不压面板。
- 标题 `title` 用 17 / 24 / 600，说明用 13 / 20 / 400 次要色；动作行高 48（`--vx-list-height-md`），文案 15 / 22 / 500，左右内边距 24。
- 动作行默认 `text`；`primary` 用 `primary-pressed`，`danger` 用 `danger-pressed`，禁用用 `disabled-text`。按下用 `surface-pressed`，分割线用 `divider` 通栏，最后一条不画。
- 选中态用主色文案加右侧 `check` 图标，`selected` 由业务维护；组件不保存选中值，点击只抛 `select`。选中态的主色是状态，不算主操作，选择类菜单里不要再放 `type="primary"` 的动作。`danger` 动作被选中时保留危险色，勾也用危险色。
- 取消按钮和动作同高、同字重，与动作之间用 4px `default-soft` 间隔带分开，不画 border；底部安全区由面板内边距承担，关掉取消后末条动作下面仍留安全区。
- 点击动作默认收起并抛 `select(index, item)`；`closeOnSelect=false` 时保持打开，适合单选、多选。点取消或可关闭的遮罩收起并抛 `cancel`；`close()` 只收起，不抛 `cancel`。
- `showCancel` 默认打开；`maskClosable` 默认打开，关掉后只能点动作或取消退出。空 `items` 不渲染面板，也不铺遮罩。
- `titleColor` / `descriptionColor` / `maskColor` 分别覆盖标题、说明和遮罩，字面值不跟随主题；传 `var(--vx-color-*)` 时跟随。
- 操作菜单只承载 2–6 条短动作，不放输入、表单、长说明和页面主操作；更多操作改用页面或选择器。`show` 期间页面点击被遮罩接住。
- 层级默认 1000，低于消息提示 1010、弹框 1020、加载浮层 1050、轻提示 1100，高于页面内容和吸顶条 10。
- 压屏窗 `vx-landscape` 是整屏活动浮层：`show` 支持 `v-model:show`，关闭按钮和可关闭的遮罩都会回写 `false` 并抛 `close`；`ref` 暴露 `open()` / `close()`，`close()` 只收起。
- 默认插槽承载海报或权益卡。`position` 三处：`bottom` 底部居中（默认）、`top-right` 右上、`top-left` 左上；三种都不和内容重叠，整组随内容垂直居中。
- `width` 给内容一个统一宽度，必须带单位；不传时铺满左右留白内的宽度，比留白更宽时收到留白内。关闭行、内容和关闭行共用一个宽度，三者的边对齐。
- 关闭按钮是压在遮罩上的白圆：热区 44、图标 18、`--vx-shadow-md`。`closable=false` 时内容里必须留一个退出入口；`maskClosable` 与 `closable` 不能同时关掉。
- `maskColor` / `closeBgColor` / `closeColor` 各只改一处，都是字面值；要跟主题传 `var(--vx-color-*)`。`zIndex` 默认 1000，低于消息提示、弹框、加载浮层和轻提示。
- 内容控制在一屏内，组件不做内部滚动；超过一屏时改用页面或拆成两步。海报只含图片时，页面补一句同义文案。同一屏只开一个压屏窗，不和弹框、操作菜单叠加。
- 弹框 `vx-modal` 是居中对话框：`title` / `content` 或默认插槽放正文，底部默认取消、确定两个动作；`actions` 非空时整组替换默认按钮。`show` 支持 `v-model:show`，`open()` / `close()` 供 `ref` 调用。
- `size` 只改面板最大宽度 280 / 320 / 400，字号固定；手机上由定位层左右 24 的内边距收窄。`showActions=false` 省掉整组动作，用于正文自带按钮的自定义弹框。
- 默认取消是 `plain default`，默认确定是 `solid primary`；`cancelType` / `confirmType` 改两者语义色，`confirmLoading` / `confirmDisabled` 只作用于默认确定按钮。
- `actions` 每项有 `text`、`type`、`variant`、`role`、`disabled`、`loading`。`type` 六种语义色，`variant` 与按钮相同，`role` 只有 `cancel` / `confirm`。
- 一个动作铺满，两个并排等宽，三个以上纵向；动作固定 `sm` 32，比页内主按钮（`md` 40）矮一档，靠整行宽度补足热区。轮廓由 `actionShape` 统一。取消动作和可关闭的遮罩始终收起并抛 `cancel`；确定动作在 `closeOnAction` 下收起并抛 `confirm`；没有 `role` 的动作在 `closeOnAction` 下收起并抛 `action(index, action)`。
- `closeOnAction=false` 时确定和普通动作不自动收起，适合异步提交；完成后由业务调 `close()`。取消按钮始终收起，不跟着这个开关走。
- 点遮罩默认收起并抛 `cancel`；`maskClosable=false` 时只能点动作、关闭叉（打开 `closable` 时）或调 `close()` 退出，必须保留至少一个出口。遮罩用 `--vx-color-mask`，只压页面，不压面板。
- `closable=true` 时右上角显示关闭叉：热区 44（`--vx-modal-close-size`），图标 18 用 `text-secondary`，点击收起并抛 `cancel`，和遮罩走同一个出口。关闭叉不受 `maskClosable` / `closeOnAction` 影响；有标题时标题左右各让 24，没有标题时正文右侧让 24。`close()` 仍然只收起，不因关闭叉新增事件。
- 面板用 `surface` 底、`lg` 圆角、`--vx-shadow-lg`，不加描边。`icon` 是可选状态图标，`iconType` 只染 48px 图标圆和图标本身：圆用 `*-soft`，图标用 `*-pressed`，warning 用 `warning-ink`，default 用 `text`；不传 `icon` 时不占头部高度。
- 标题居中 17 / 24 / 600，正文居中 15 / 22 / 400 次要色；标题和正文之间 12，正文和动作之间 24。自定义插槽不继承正文的颜色和字号，内容自己带。
- `titleColor` / `contentColor` / `maskColor` 分别覆盖标题、正文和遮罩，都是字面值，不跟随主题；`contentColor` 只改 `content`，不改默认插槽。
- 弹框挂在页面根节点，和滚动容器平级；不要放进 `scroll-view`、卡片或 `fixed` 容器。打开期间遮罩接住页面点击和触摸，只承载一件事。
- 同一屏只开一个弹框；不要叠两个弹框，也不要和操作菜单同时出现。需要等待用加载浮层、需要结果提示用轻提示，它们的层级更高。
- 弹框层级默认 1020，高于操作菜单 1000 和消息提示 1010，低于加载浮层 1050 和轻提示 1100。走两帧式 `transform` 过渡：遮罩淡入、面板从 0.96 放大到 1，关闭时反向收回；App 和 Web 都有进退场。第一次打开后根节点常驻，关闭只切 `display: none`，原生子组件不销毁；原生层在 App 上反复创建会整层不画。
- 弹框不做页面、路由、长表单和多步流程；需要一页内容时用页面，需要并列选择时用操作菜单。正文超过一屏时改用页面区块，弹框不内置滚动。
- 动作文案要写清行为，危险操作要在文字里说明后果，不能只靠危险色；至少保留动作、遮罩或 `close()` 中一个出口。
- 日期时间选择器 `vx-datetime` 是底部弹层：`v-model` 是已确定的值，`v-model:show` 控制显隐，`mode` 决定出现哪几列，`ref` 上暴露 `open()` / `close()`。
- `mode` 有十种：`year`、`year-month`、`month-day`、`date`、`date-hour`、`datetime`（默认）、`datetime-second`、`time`、`time-second`、`minute-second`。列顺序固定为年、月、日、时、分、秒，只显示模式包含的列，不重排。
- 打开时把 `v-model` 解析成草稿：读不出来、或超出年份区间时回落到当前时间 / 区间边界；分钟、秒按 `minuteStep` / `secondStep` 对齐到最近的刻度。
- 滚动只改草稿，点确定才写回 `v-model` 并抛 `confirm`；取消、可关闭的遮罩和 `close()` 都收起且不动已提交的值。`change` 在滚动停止、值真的变了时抛一次，用于联动和预览，不作为提交。
- 天数跟着年月走：闰年二月 29 天；换月或换年时选中的日超出当月会收口，并把日期列滚回去。打开期间收窄年份区间，选中的年也会夹回区间。
- `startYear` / `endYear` 默认 1980 / 2050，收口到 1000–2999，倒序自动交换；`minuteStep` / `secondStep` 取 1–30，候选值不超过 59。
- `unitPosition` 默认 `inline`，单位跟在数值后面；`top` 时单位单独一行，和滚轮列等分对齐。单位固定 13 / 20 次要色，只做提示，不参与格式化。
- `format` 只改输出文本，认 `YYYY` / `MM` / `DD` / `HH` / `mm` / `ss`，其余字符原样保留；不传时按 `mode` 取默认格式。输出永远按本机时间，不做时区换算。
- 头部高 52（`--vx-overlay-head`）：取消用 `text-secondary`，确定用 `primary-pressed`，都是 15 / 22 / 500；标题 17 / 24 / 600 居中，太长单行省略。不传标题时两端各贴边，中间留空。
- 滚轮可视高度 220、每行 44，正好五行；指示器高度必须等于行高，列才按行对齐。行文字 15 / 22，未选中 `text-secondary` 400，选中 `text` 600；六列时收一档到 13 / 20。行高不随字号变，字号越小上下留白越大。
- 原生 `picker-view` 的蒙层写死了白色渐变，暗色主题下会在两端发白；组件用 `mask-class` 把它换成透明，不靠渐变分层，选中行靠字重和颜色区分。
- `maskClosable` 默认打开；关掉时点遮罩不关闭也不抛 `cancel`，取消和 `close()` 仍在。`maskColor` 是字面值，不跟随主题，传 `var(--vx-color-*)` 时跟随。
- 层级默认 1000，和操作菜单同档，低于消息提示 1010、弹框 1020、加载浮层 1050、轻提示 1100。挂在页面根节点，不放进 `scroll-view`、卡片或 `fixed` 容器。
- 同一屏只开一个选择器；日期和时间要两个值时用两个实例，各自一个 `mode` 和一个值，不要在一个实例上来回切。
- 联动选择 `vx-picker` 是底部弹层：`options` 是树形数据，`v-model` 是每一级已确定的值，`v-model:show` 控制显隐，`ref` 上暴露 `open()` / `close()`。
- 节点固定 `text` / `value` / `children` / `disabled`。`value` 省略时用 `text` 做值，ThorUI 的文本数组可以直接迁；业务字段不同时先映射，不做 `textField` / `valueField` 动态键。值统一用字符串，数字 id 先转字符串。
- 层级由 `children` 的深度决定，分支提前结束时列数跟着少一列；一般 2–4 级，4 级起文字收一档。空 `options` 显示 `emptyText`，确定按钮置灰。
- 打开时把 `v-model` 按 value 定位到每一列；命中不可选项时挪到最近的可选项，读不出来时从第一项可选项开始。草稿只存在组件里，点确定才写回。打开期间父级改 `modelValue` 不跟，要换位置先 `close()`。
- 滚动只改草稿，点确定才写回 `v-model` 并抛 `confirm(result)`；取消、可关闭的遮罩和 `close()` 都收起且不动已提交的值。
- `change` 在滚动停下、路径真的变化且整条路径可选时抛一次；不可选项的草稿不抛 `change`，业务拿到的始终是能提交的值。`options` 异步补下一级时按当前路径重新对齐，必要时补抛一次 `change`。
- `options` 里 `disabled` 为 true 的节点仍留在滚轮里并转灰；停在不可选项上时头部换成 `invalidText`（默认「该选项不可选」），确定置灰，取消和遮罩仍可退出。整列都不可选时同样处理。
- 结果 `result` 有 `values` / `texts` / `indices` / `text` 四个字段：前三个逐级对应，`text` 按 `separator`（默认 `' / '`）拼好。只取展示文本用 `libs/picker.ts` 的 `vxPickerText`。
- `options` 换数组才触发重新规整；在原数组里直接 push 不会通知组件。异步加载下一级时替换整棵数组，或在打开前补齐。
- 头部高 52（`--vx-overlay-head`）：取消用次要色，确定用 `primary-pressed`，都是 15 / 22 / 500；标题 17 / 24 / 600 居中，单行省略。不可选时标题换 `warning-ink`。
- 滚轮可视高度 220、每行 44，正好五行；指示器高度必须等于行高。行文字 15 / 22，未选中 `text-secondary` 400，选中 `text` 600，不可选 `disabled-text`；四列起收一档到 13 / 20。
- 列按当前路径等分，长地名在自己的列里单行省略；不画列分隔线和渐变蒙层，选中行靠字重和颜色区分。
- `separator` 只改 `result.text`，不改滚轮和 `texts`。`emptyText` / `invalidText` 可换文案，默认中文。
- `maskClosable` 默认打开；关掉时点遮罩不关闭也不抛 `cancel`，取消和 `close()` 仍在。`maskColor` 是字面值，不跟随主题。
- 层级默认 1000，和操作菜单、日期时间选择器同档，低于消息提示 1010、弹框 1020、加载浮层 1050、轻提示 1100。挂在页面根节点，不放进 `scroll-view`、卡片或 `fixed` 容器。
- 同一屏只开一个选择器；地区、门店这类两个值用两个实例，各自一个值，选项不同时各传一份 `options`。入口由业务提供，通常用只读输入行或按钮。
- 日历 `vx-calendar` 的模型按模式分开：单日期用 `v-model`，区间用 `v-model:start` / `v-model:end`；`mode` 决定选一个还是选一段，`popup` 决定贴底弹层还是平铺在页面里，`v-model:show` 只对弹层有效。
- 弹层里点选先落在草稿上，点确定或 `confirm()` 才写回模型并抛 `confirm`；关闭叉、可关闭的遮罩和 `close()` 都收起且不动已提交的值。平铺模式没有确定这一步，点选当场写回并抛 `change`。`showConfirm=false` 时底部结果和确定按钮都不渲染，提交改走 `confirm()`。
- 区间的第一下点起点、第二下点终点；点到起点之前重新起头，再点一次起点得到一天的区间，两端都定好后再点一格从那一格重来。只选了起点时按单日显示，确定按钮是灰的。父级把起点写在终点后面时，浅底仍按日期先后铺开，两端文字留在各自的模型上。
- `minDate` / `maxDate` 是闭区间，默认收到 1900-01-01 到 2100-12-31（农历表的边界）。范围外的日子转灰不可选，选中底色和标记都不留；目标月一天都选不了时翻月和翻年箭头自动禁用，点也不动、不抛 `monthChange`。起止写反时整天不可选，箭头全部停住。已选值优先于可选范围：有已选值时显示月跟着它走，没有已选值时收窄范围才把显示月收到最近的边界月。
- `showLunar` 在日期下方排农历日；只算日子和闰月，不算节气、干支和宜忌。区间端点文字和标记文案优先于农历。
- `marks` 按日期补底色、文案和对勾，选中和区间优先于标记；`type` 同时作用于选中底色、区间浅底、文字和确定按钮，warning 用深色字和 `warning-ink`。
- 网格按当月占几周排 5 或 6 行，周日排第一列；今天只换数字颜色，不画圈。层级默认 1000，和操作菜单、日期时间选择器同档；弹层挂在页面根节点，平铺模式放进卡片或页面区块。
- 单选由 `vx-radio-group` 容器和 `vx-radio` 选项组成：容器维护选中的 `value`、整组尺寸、语义色、标记样式和排布，选项只画标记、文案和额外内容。`v-model` 是字符串，空串表示没有选中。
- `layout` 只有 `inline` 和 `list`：`inline` 横排并在放不下时换行，项高取控件三档 32 / 40 / 48；`list` 一项一行，最小高度取列表行三档 44 / 48 / 52，左右内边距 12 / 16 / 16、上下 8 / 12 / 12。`card` 只给 `list`，加 `surface` 底、1px `border` 和 `md` 圆角；横排的边界交给外层容器。
- `variant` 只有 `circle` 和 `check`：`circle` 是 1px 描边的正圆，选中后填充语义色并显示对号；`check` 去掉圆圈，只留对号，未选中不占视觉，但标记盒仍保留同样宽度，文案起点不跳。
- 圆圈三档 16 / 18 / 20（`--vx-radio-size-*`），比文案大 2px，对号用旋转的右边框和下边框画，`md` / `lg` 2px、`sm` 1.5px；只画对号时放大一档，和文案同高。不要用图标字体画对号，字体的字重和描边宽度对不上。
- `type` 决定选中标记的语义色，默认 `primary`。圆圈用语义色填充、对号取对应的 `on-*`；`warning` 的填充取 `warning-pressed`、对号取 `on-warning`。未选中圆圈用 `text-secondary` 描边，不用 `border`。`default` 用正文色填充、`text-inverse` 对号。
- `placement` 只有 `start` 和 `end`：`start` 在文案前，`end` 把标记推到行尾。行尾位置靠 `content` 的 `flex: 1` 撑开，文案长短不影响标记位置；`extra` 插槽始终排在文案之后，标记在行尾时它就在文案和标记之间。
- 列表分割线 1px，用 `divider`，左右和行内边距对齐；最后一项由容器按挂载顺序判断，不画线，业务不用手写 `index`。`divider=false` 去掉全部项间分割线。
- 横排文案用 `--vx-font-control-*`（14 / 16 / 18，行高 20 / 22 / 24、400），列表行改用 13 / 15 / 17（20 / 22 / 24、400），和列表行同档；说明固定 13 / 20 次要色，和主文案之间留 4。两组档位不互相换算。
- 标记和文案之间 4，`lg` 8；横排项与项之间 12 / 16，列表行之间靠分割线，不再加外边距。横排项不加左右内边距，和页面、卡片的左边缘对齐。
- 按下态：列表行铺 `surface-pressed`，横排只把整项压到 `--vx-opacity-pressed`，不铺底色；不做缩放、位移和选中动画，换项直接换填充和对号。
- 单项 `disabled` 只停这一项，容器 `disabled` 停下整组；两者都不抛 `change`。文字和圆圈转 `disabled-text`，圆圈模式的对号用 `surface`，只画对号时对号用 `disabled-text`，不能藏在卡片底色里。没有 `readonly`，展示已有结果时用 `disabled` 并补说明。
- `color` 只改圆圈模式的填充，`borderColor` 只改未选中描边，`checkColor` 只改对号；三者都是字面值、不跟随主题，禁用时都不生效。只画对号时 `color` 直接是对号色，`borderColor` 不生效，`checkColor` 优先。
- 单选只承载选项、选中值和说明，不放标题、提交按钮和表单校验；标题、分组说明和提交入口放在外面的卡片或表单行。组件没有方法，选中值直接改 `v-model`。
- 单选是 `view` 组合，Web 端不进入 Tab 顺序；需要键盘完整操作时由外层提供可聚焦入口或改用原生表单控件。
- 多选由 `vx-checkbox-group` 容器和 `vx-checkbox` 选项组成：容器维护选中的 `value` 数组、整组尺寸、语义色、标记样式和排布，选项只画标记、文案和额外内容。`v-model` 是字符串数组，空数组表示没有选中。
- `layout` 只有 `inline` 和 `list`：`inline` 横排并在放不下时换行，项高取控件三档 32 / 40 / 48；`list` 一项一行，最小高度取列表行三档 44 / 48 / 52，左右内边距 12 / 16 / 16、上下 8 / 12 / 12。`card` 只给 `list`，加 `surface` 底、1px `border` 和 `md` 圆角。
- `variant` 只有 `box` 和 `check`：`box` 是 1px 描边的小圆角方形，选中后填充语义色并显示对号；`check` 去掉方框，只留对号，未选中不占视觉，但标记盒仍保留同样宽度，文案起点不跳。
- 方框三档 16 / 18 / 20（`--vx-checkbox-size-*`），圆角 4 / 5 / 6（`--vx-checkbox-radius-*`）；对号用旋转的右边框和下边框画，`md` / `lg` 2px、`sm` 1.5px，只画对号时放大一档。方框固定小圆角方形，和单选的正圆区分，不要互换。
- `type` 决定选中标记的语义色，默认 `primary`。方框用语义色填充、对号取对应的 `on-*`；`warning` 的填充取 `warning-pressed`、对号取 `on-warning`。未选中方框用 `text-secondary` 描边，不用 `border`。`default` 用正文色填充、`text-inverse` 对号。
- `placement` 只有 `start` 和 `end`：`start` 在文案前，`end` 把标记推到行尾。行尾位置靠 `content` 的 `flex: 1` 撑开，文案长短不影响标记位置；`extra` 插槽始终排在文案之后，标记在行尾时它就在文案和标记之间。
- 列表分割线 1px，用 `divider`，左右和行内边距对齐；最后一项由容器按挂载顺序判断，不画线，业务不用手写 `index`。`divider=false` 去掉全部项间分割线。
- 多选文案档位和单选一致：横排 14 / 16 / 18，列表 13 / 15 / 17，说明固定 13 / 20 次要色，和主文案之间留 4。标记和文案之间 4，`lg` 8。
- 按下态：列表行铺 `surface-pressed`，横排只把整项压到 `--vx-opacity-pressed`，不铺底色；不做缩放、位移和选中动画，勾选直接换填充和对号。
- 单项 `disabled` 只停这一项，容器 `disabled` 停下整组；两者都不抛 `change`。文字和方框转 `disabled-text`，选中填充用 `disabled-text`，方框模式的对号用 `surface`，只画对号时对号用 `disabled-text`。
- `max` 只拦新增勾选：`0` 表示不限，取消勾选不受限；到上限后点未选项不改模型、不抛 `change`，只抛 `exceed(max)`，未选项不转灰。父级传入的数组超过 `max` 时照常显示，不再追加。
- `indeterminate` 只给单独使用的「全选」开关：方框填充并画横线，`checked` 优先；分组里的每个 `value` 非勾即否，不读该属性；只画对号时没有方框，也不画横线。横线用 `checkColor` 或对号色，禁用时用 `surface`。
- `color` 只改方框模式的填充，`borderColor` 只改未选中描边，`checkColor` 只改对号和横线；三者都是字面值、不跟随主题，禁用时都不生效。只画对号时 `color` 直接是对号色，`borderColor` 不生效，`checkColor` 优先。
- 多选只承载选项、选中集合和说明，不放标题、全选条、提交按钮和表单校验；标题、计数和提交入口放在外面的卡片或表单行，全选条用单独一只 `vx-checkbox` 和业务数组拼。
- 多选是 `view` 组合，Web 端不进入 Tab 顺序；需要键盘完整操作时由外层提供可聚焦入口或改用原生表单控件。
- 数据选择器 `vx-data-checkbox` 用 `options` 直接渲染一组可换行的胶囊：单选用 `v-model` 字符串，多选加 `multiple` 并用 `v-model:values` 数组。组件不保存第二份选中值，点按后写回并抛 `change`。
- `options` 固定 `label` / `value` / `icon` / `disabled` 四个字段；`value` 省略或为空串时用 `label`，空白 `label` 的项整项忽略，空数组不渲染。同一组里 `value` 唯一，数字 id 先转字符串。
- 单选默认点已选项不动作，`clearable` 打开后才写回空串；多选点未选项追加、点已选项移除，取消不受 `max` 限制。
- `max` 只拦新增选择，`0` 不限；到上限后点未选项只抛 `exceed(max)`，不改模型，未选项不转灰。父级传入超过上限的数组照常显示，组件不裁剪。不在当前选项里的旧值和重复值不占名额。
- 高度沿用控件三档 32 / 40 / 48，左右内边距 12 / 16 / 24，文案 14 / 16 / 18（20 / 22 / 24），图标 14 / 18，项间距默认 12；全部取免费库已有令牌，不新增。
- 未选中外观由 `variant` 决定：`outline` 白底加 1px `border`，`plain` 去掉可见描边，`soft` 换 `default-soft` 浅底；选中默认是语义浅底、1px 语义描边和 `medium` 字重。
- `type` 只染选中态，未选中始终中性；`warning` 的描边和文字都取 `warning-ink`，`default` 用 `default-soft` 底、`text-secondary` 描边和正文色文字。
- `shape` 只有 `rounded` / `pill` / `square`：`rounded` 跟尺寸取控件圆角 6 / 8 / 10，`pill` 是胶囊，`square` 是平角；只改外轮廓，一组只用一个形状。
- `width` 给每一项同一个固定宽度，必须带单位，按 `border-box` 计算并单行省略；`gap` 取 0–32，默认 12，由根节点的负外边距收回最后一行的尾巴。
- `options[].icon` 用 `vx-icon` 放在文案前，尺寸 14 / 18，颜色跟着选中、未选中和禁用三态走；核心图标直接可用，扩展图标先引入 `icons-extend.css`。
- 单项 `disabled` 只停这一项，整组 `disabled` 停下全部；两者都不抛 `change`，用 `disabled-bg` 底和 `disabled-text` 文字，选中的禁用项保留灰色描边。
- 按下压到 `--vx-opacity-pressed` 0.8；选中直接换底色、描边和字重，不做缩放、位移和颜色过渡。
- `color` 改选中文字、描边和图标，`bgColor` 改选中底色，`borderColor` 改未选中描边；三者都是字面值，禁用时不生效，对比度由业务保证。
- 数据选择器是 `view` 组合，不进入原生表单，Web 端也不进 Tab 顺序；提交和键盘入口由外层表单负责。
- 验证码输入框 `vx-code-input` 用一个透明原生 `input` 承接键盘、粘贴、退格和 Web Tab 焦点，格子只负责显示：`v-model` 是字符串，前导 0 保留；输入时清掉空白和非法字符并截到 `length`，每次编辑只抛 `input`。
- `length` 收敛到 1–8，默认 4；`0`、负数和非数字回到 4，大于 8 按 8。`keyboard` 只有 `number`（只收 0–9）和 `text`（字母数字，`uppercase` 可转大写），不是控件的语义色。
- 用户输入满位时抛 `complete` 和 `change`；失焦或点键盘完成时抛 `change`；程序化赋值不抛输入事件。父级写入超过 `length` 的值只显示前 `length` 位，组件不改写父级模型。
- `focus` 属性负责初始或受控聚焦，`focus()` / `blur()` / `clear()` 负责运行中操作；满位默认自动收起键盘，`blurOnComplete=false` 留在键盘上但仍然抛 `complete`。
- `separator` 配 `groupSize` 只在组间插分隔符，最后一组后面不画；`groupSize=0` 或大于等于 `length` 时不分隔，1 表示每格之间都插。分隔符不进模型和事件，3+3 最常用。
- 格子默认 40 / 48 / 56 的正方形，间距默认 8（0–24）；总宽不够时只收窄宽度、不换行。`fluid` 均分父级宽度，`width` 固定宽度且不再收窄；4 位用 md / lg，6 位用 md / fluid，8 位用 sm / fluid。
- `variant` 三档：`outline` 白底加 1px 描边，`line` 只留底部 2px 横线，`filled` 用 `default-soft` 浅底、描边透明。三者都只把焦点格换成语义描边；`line` 不铺焦点底色、不参与圆角；`borderColor` 只改未聚焦描边，`bgColor` 只改焦点底色。
- `type` 只染焦点格：描边取语义色、底色取对应的 `*-soft`、光标跟描边；`warning` 用 `warning-ink`，`default` 用正文色和 `default-soft`。未聚焦格子和已填数字保持中性。
- `invalid` 只改描边、焦点浅底和光标，数字仍用正文色；`readonly` 保留正常外观但不渲染输入、不弹键盘；`disabled` 整格转灰并移除输入。`invalid` + `disabled` 时按禁用处理，`invalid` + `readonly` 仍显示错误描边。
- 自定义颜色分五处：`color` 焦点描边和光标，`bgColor` 焦点底色，`borderColor` 未聚焦描边，`textColor` 数字和圆点，`cursorColor` 单独改光标。优先级 `invalid` > `cursorColor` > `color` > `type`，都是字面值、禁用时不生效，对比度由业务保证。
- `password` 把已填格子画成圆点，焦点格仍显示光标；只改显示，不加密、不改模型和事件参数。圆点直径 6 / 8 / 10，用 `view` 画；`textColor` 仍生效，禁用时转 `disabled-text`。
- 验证码输入框只承载值和焦点，不内置标题、说明、错误文案、倒计时、重发和提交按钮；没有插槽和 `loading`，`complete` 只表示满位，不表示验证通过。
- 开关 `vx-switch` 是单个布尔控件：`v-model` 只维护 `true` / `false`，用户点按后立刻写回并抛 `change(value)`；组件不保存第二份状态，也不做提交。
- `size` 决定轨道、滑块和加载圈：36 × 20 / 44 × 24 / 52 × 28，滑块 16 / 20 / 24，四周各 2；单行高度 32 / 40 / 48，列表行最小高度 44 / 48 / 52。同一档同时选中文案档位：单行 14 / 16 / 18，列表 13 / 15 / 17。轨道尺寸和字号是两套档位，但都由 `size` 选中。
- `layout` 只有 `inline` 和 `list`：`inline` 是单行，放不下时文案换行；`list` 一项一行，行内边距 12 / 16 / 16、上下 8 / 12 / 12，整行是热区。`placement` 只有 `start` / `end`，默认 `end`，因为设置项先读名称再读开关；`extra` 插槽排在文案后方；轨道在行尾时正好在文案和开关之间。
- `label` / `description` 是文案快捷入口，默认插槽替换两者；没有文案时就是一只独立开关，热区高度仍取控件档位。`divider` 只在 `list` 下画当前行底部的 1px 线，最后一行由业务关掉，组件不判断相邻项。
- `type` 只改打开状态的轨道和滑块，默认 `primary`；`warning` 轨道取 `warning-pressed`、滑块取 `on-warning`，`default` 用正文色轨道配 `text-inverse` 滑块。关闭状态始终是中性色，状态同时由滑块位置表达，不能只靠颜色。
- `color` 只改打开轨道，`trackColor` 只改关闭轨道，`thumbColor` 改两种状态的滑块并收掉打开时的描边，`borderColor` 只改关闭滑块的描边；四者都是字面值、不跟随主题，禁用时都不生效。自定义打开轨道色会同时改加载圈，关闭轨道的自定义色不改加载圈，浅底或反色组合的对比度由业务保证。
- `disabled` 停下整只开关：不响应点按、不抛 `change`，文案、轨道、滑块和描边一起转灰。`loading` 只拦点击并在滑块里画缺口圆环，轨道仍保持当前状态；两者同时为真时按禁用处理，不画加载圈。没有 `readonly`，展示已有结果用 `disabled` 并补说明。
- 点按停在开关上，不冒泡到外层列表行或卡片；列表里点文案、说明、`extra` 和轨道都切换同一个值。插槽内容不继承文字色和禁用色，开关、按钮这类独立操作要自己 `@click.stop`。
- 开关是自绘的 `view` 组合，不依赖原生 `switch`；Web 端不进入 Tab 顺序，需要键盘完整操作时由外层提供可聚焦入口或改用原生表单控件。加载和禁用不要只靠颜色表达，文案或说明要能读出来。
- 分段器 `vx-segmented-control` 在一组互斥视图之间切换：`options` 按顺序等宽排列，`v-model` 是选中段的值，点按立刻写回并抛 `change(value, index)`；模型里已经是这个值时不重复抛，组件不保存第二份选中态。
- `modelValue` 匹配不到任何段时显示第一个可选项并跳过单项禁用，组件不主动回写；点中显示的那段仍会写回。可选段都禁用时停在第一段。没有 `current` 索引 prop，默认选中直接写目标值；`value` 缺省时用 `label`。
- `size` 决定高度、字号、段内内边距和圆角：32 / 40 / 48，14 / 16 / 18，8 / 12 / 16，6 / 8 / 10。高度和字号取控件令牌，不新增令牌，也不借正文档位。
- `type` 同时决定描边、选中底色、未选中文字和分隔线：`warning` 的填充、描边和分隔线取 `warning-pressed`、选中文字取 `on-warning`、未选中文字取 `warning-ink`；`default` 用正文色配 `text-inverse`。选中段加 `medium` 字重。
- `shape` 只有 `rounded` / `pill` / `square`，只改外轮廓；选中底色由根节点圆角裁切，中间段保持直角。`rounded` 跟尺寸取控件圆角。
- `divider` 默认关闭；打开后每两段之间画 1px 竖线，第一段左侧不画，线色跟外框（`type` / `color` / `borderColor`）。线落在未选中段内侧，和选中底色同色时仍然留在浅底上；绝对定位不占段宽，切换时不跳字。
- `color` 同时改选中底色、描边、分隔线和未选中文字，选中文字默认白字；`activeTextColor` / `textColor` / `bgColor` 各只改一处，`borderColor` 改外框和分隔线。五者都是字面值，整组禁用时不生效，浅底或品牌底的对比度由业务保证。
- `disabled` 停用整组，`options[].disabled` 只停那一段；两者都淡到 0.5，不响应点按，也不抛 `change`。当前段不要设成禁用，没有 `readonly`。
- 分段器只承载切换，不放标题、说明、价格、提交按钮和滚动容器；标题和价格放在外面的卡片或表单行，内容切换、请求、路由和埋点由业务在 `change` 里处理。
- 分段器是自绘的 `view` 组合，Web 端不进入 Tab 顺序；需要键盘完整操作时由外层提供可聚焦入口或改用原生表单控件。2–5 段、文案 1–4 个字，段数超过 5 时改用页签、列表或选择器。
- 分页器 `vx-pagination` 只负责翻页：`v-model` 是当前页，`total` + `pageSize` 或 `pageCount` 算总页数，点按写回并抛 `change(current, direction)`；不请求数据、不滚动复位、不缓存页码。
- `pageCount` 大于 0 时优先，否则总页数按 `ceil(total / pageSize)` 算；没有数据也留 1 页。当前页越界只夹显示，用户翻页后才写回，父级把总页数改小后点一次按钮就落到新范围。
- `variant` 有四档：`plain`（默认，中性描边）、`soft`（语义浅底）、`solid`（语义实心）、`text`（纯文字）。`plain` 只有当前页码跟随 `type`；其余三档的按钮也跟随 `type`，`warning` 的实心取 `warning-pressed`、文字取 `on-warning`。
- `size` 决定高度、字号、内边距和圆角：32 / 40 / 48，14 / 16 / 18，12 / 16 / 24，6 / 8 / 10；箭头沿用图标三档。`shape` 只改按钮轮廓，页码区不参与。
- `iconOnly` 只显示 `chevron-left` / `chevron-right`，按钮收成正方形；`prevText` / `nextText` 传空串也回落到箭头。`showPage=false` 只隐藏内置页码，`prefix` / `suffix` 和默认插槽仍显示。
- 默认插槽替换页码区，拿到 `current` / `pageCount` / `total`；`prefix` / `suffix` 替换两个按钮的内容，按钮尺寸、按下态和禁用态仍由组件负责。
- `color` 同时改当前页码和 `plain` / `soft` / `text` 的文字，`plain` 的描边也一起改；`bgColor` / `textColor` / `borderColor` 各只覆盖一处；实心传 `bgColor` 时描边跟底色，底色和默认文字对比不足时要一起传 `textColor`。四者都是字面值，禁用时按原色淡出。
- 第一页的上一页、最后一页的下一页只淡按钮本身；整条 `disabled` 把按钮和页码一起淡到 0.5，不响应点按，`prev()` / `next()` / `goTo()` 也不动作。`change` 只在页码真的变化时抛。
- 分页器只承载翻页，不放标题、每页条数、跳转输入和总数说明；这些由外面的卡片、表格底栏或表单行提供。`prev()` / `next()` / `goTo()` 给手势、快捷键和外部按钮用。
- 分页器是自绘的 `view` 组合，Web 端不进入 Tab 顺序；需要键盘完整操作时由外层提供可聚焦入口，并保证按钮文案能独立说明方向，箭头形态在页面里补一句说明。
- 瀑布流 `vx-waterfall` 只负责排布：`items` 按传入顺序给，`mode` 选 `balance` 或 `flow`，`columns` 取 1–3；不请求、不排序、不分页，追加和加载更多由业务写 `items`。组件不虚拟化，长列表按页追加。
- `balance` 先按顺序分列占位，再批量量一次卡片高度，然后整组平衡；`flow` 不量。替换、删减、改列数或列宽后整组重排；末尾追加保留已有卡片位置，`balance` 只把新卡片放进较矮的一列，`flow` 按顺序分列。
- `ratio` 决定图片区高度，不用等图片加载；标题按 `titleLines` 截断，没有图片时只留文字。默认插槽替换卡片内容时，外壳、列宽、点击和测量仍归组件，切换插槽或异步高度变化后调 `refresh()`。
- 瀑布流只抛 `click(item, index)`，单项 `disabled` 不抛；`extra` 放在图片右上角，动作自己写 `@click.stop`，默认插槽里的独立动作同理。`prefix` / `suffix` 放区块头和加载更多，不参与列平衡。
- 瀑布流是自绘的 `view` 组合，Web 端不进入 Tab 顺序；图片没有独立焦点，标题和价格是普通文本。卡片内的独立操作要自己给热区，44 以上的点击目标优先放在 `extra` 或外层。
- 滑动选择器 `vx-slider` 在一条轨道上选数值：`v-model` 是当前值，`min` / `max` / `step` 定范围和步长；`range` 打开后加 `v-model:end` 选一段区间。组件不保存第二份值，拖动时就写回并抛 `changing`，一次操作结束才抛 `change`。
- 轨道厚度 4 / 6 / 8，圆盘直径 20 / 24 / 28，行高 32 / 36 / 40；轨道两端各内缩半颗圆盘（10 / 12 / 14），圆盘走到 0% 和 100% 时边缘正好和根节点对齐，不靠裁切。
- 已选段用 `type` 的语义色，`warning` 取 `warning-pressed`，`default` 用正文色；未选轨道固定 `default-soft`，圆盘是 `surface` 底加 1px `text-secondary` 描边，和开关的滑块同一套。
- 数值用 `showValue` 打开，位置由 `valuePosition` 决定：`top` / `bottom` 在轨道上方或下方单独一行，标签在左、数值在右，数值行向轨道方向压 4；`right` 放在轨道右侧并忽略 `label`。区间显示成「起点 – 终点」一段文案，不分列两端。
- `format` 用 `{value}` 占位换数值和单位，例如 `￥{value}`；区间两端各套一次模板。数值按 `step` 和边界的最大小数位收口，整数不补 `.0`。
- 两颗滑块不交叉：拖起点不会越过终点，拖终点也不会低于起点；父级把起点写在终点后面时，终点收到起点上。区间里按下的那颗，按手指离谁更近决定，正好在中间时算起点。两颗叠在一起时，落在右侧拖终点，落在左侧拖起点；压在叠点上向右拖终点、向左拖起点。
- 按下从轨道行开始，标签、数值和两端插槽都不落点；横向位移超过 4px 才接管，纵向滚动不顺手改值；点轨道直接落点，鼠标按下即落点。横向接管后拦住这一笔外层滚动，松手补一次末端位置。
- 按住的那颗圆盘四周显示 4px 光晕，取 `type` 的浅底色；只做「抓住了」的反馈，松手即消失，没有淡入淡出。
- `disabled` 停下整只滑块：未选轨道转 `disabled-bg`，已选段和文字转 `disabled-text`，圆盘保持 `surface`、描边转 `disabled-text`，不响应点按也不抛事件。`color` / `trackColor` / `thumbColor` / `borderColor` 分别只改已选段、未选轨道、圆盘底色和描边，都是字面值，禁用时不生效。
- 组件不内置标题、说明、提交按钮和滚动容器；名称放在外面的表单行或卡片标题，`prefix` / `suffix` 只放轨道两端的最小值、最大值图标，内容自己带颜色和字号。
- 滑块是 `view` 组合，Web 端不进入 Tab 顺序；需要键盘完整操作时由外层提供可聚焦入口或改用原生控件，读屏请靠文案和旁边的数值说明。
- 评分的星形直接取核心图标字体的 `star` 字形，不走 `vx-icon`：图标三档放不下 20 / 24 / 28 的星形，叠放的选中层和底层还要共用同一个字宽。星形只用 `--vx-rate-size-*` 与 `--vx-rate-gap`，不新增图标尺寸。
- 评分的 `v-model` 是分值，`0` 表示未评分；`count` 收敛到 1–10，`allowHalf` 打开后点按和滑动都按 0.5 递增，不打开时按整星递增。
- 选中星形默认取 `warning-pressed`，其它语义色取原色；`activeColor` 覆盖这一层，白底上的对比度由业务保证。
- 选中层按小数部分裁出进度：满星 100%、半星 50%、未选中 0，只读的 `3.45` 也如实显示；分值最多保留一位小数，整数不补 `.0`。
- 未选中的星形默认浅灰实心，`hollow` 换成线性空心；`voidColor` 只改未选中色，字面值不随主题切换。
- `readonly` 保留颜色、不响应点按和滑动，用于展示别人的评分；`disabled` 颜色转灰、同样不响应，用于表单整体不可用。两者都不抛 `change`。
- 手势从按下的半区起算：左半区给半星，右半区给整星；横向位移超过 4px 才接管，纵向滚动时不会顺手改分值。点按和滑动结束后补发的 click 不再改分。Web 上鼠标拖动和触摸同一套位移。
- 评分只承载打分和可选的分值文案，不放标题、说明和提交入口；这些由外面的表单行或卡片承载。
- 时间轴 `vx-time-axis` 用 `items` 从上到下渲染记录，不提供容器加子项的组合写法。有 `title` 的是阶段，没有 `title` 的是同一阶段下的事件：阶段画图标节点，事件缩成圆点，并和上一条贴得更近。
- `items` 每条记录包含 `title` / `description` / `time` / `icon` / `iconVariant` / `type`。`time` 是展示文本，组件不解析时间格式；空数组不渲染。
- 节点有 `icon` 时是图标圆节点，图标 14 / 18 / 22，跟步骤条同一档。默认 `type="default"` 用浅灰底和次要灰图标；`primary` / `success` / `info` / `warning` / `danger` 用语义实心底和 `on-*` 图标。没有 `icon` 时缩成圆点，默认和竖线同色，`type` 可以给圆点上语义色。
- 竖线 1px，两端收在第一个和最后一个节点中心；`lineColor` 只改这一条线，是字面值，不跟随主题。空数组不渲染，单条记录不画竖线。
- 阶段之间留 24，事件之间留 12：当前记录的下一条没有 `title` 时自动收紧。事件没有标题，顺序和分组只由数组顺序表达。
- 时间轴只承载阶段、事件和说明，不放按钮、表单和主操作；需要点击或展开时由外面的列表行、卡片承载。组件不提供点击、禁用态、横向时间轴和插槽。
- 步骤条 `vx-steps` 用 `items` 按顺序渲染，不提供容器加子项的组合写法。`active` 是当前步骤索引，从 0 开始；`-1` 表示还没开始，负数按未开始处理，其余非整数四舍五入，超过末项收到最后一步。空数组不渲染。
- 当前步骤用勾标记到达位置（带 `icon` 的节点用图标），之前的步骤保留圆点或序号；当前步骤之前的连线用语义色，之后的连线保持待处理色。
- `variant="dot"`（默认）用小圆点表示已完成和待处理，当前步骤用完整节点；`variant="number"` 已完成和待处理都显示序号，当前步骤仍用勾。带 `icon` 的记录用图标节点，不受 `variant` 影响。
- 横向 `direction="horizontal"` 默认，每步等宽，适合 2–5 个短步骤；纵向 `direction="vertical"` 从上到下，适合文案较长或步骤较多的流程。横向长标题由业务缩短，不靠缩小字号硬塞。
- 步骤条 `size` 三档 20 / 24 / 28，圆点 6 / 8 / 10，序号 12 / 13 / 14；步骤名 13 / 15 / 17（20 / 22 / 24、600），说明 `sm` 13 / 20、`md` / `lg` 15 / 22，时间固定 13 / 20。步骤条不是控件，不借 `--vx-font-control-*`。
- 当前步骤的标题用 `type` 的语义色，已完成用正文色，待处理用次要色；说明和时间始终用次要色。`type` 同时决定节点、当前标题和已完成连线的颜色，默认 `primary`；`default` 时当前标题用正文色，节点和勾仍可辨。
- 带 `icon` 的节点：已完成浅底配语义色图标，当前步骤实心底配 `on-*` 图标（`default` 用 `text-inverse`），待处理 `surface` 底加 `border` 描边配次要灰图标；`iconVariant` 切 regular / fill。扩展图标需要引入 `icons-extend.css`。
- `lineStyle` 有 `solid` / `dashed`，只改 1px 连线；已完成段用当前语义色，未完成段用 `border`。虚线不改变节点和文字。
- `clickable` 默认关闭；打开后整步可点，按下用 `--vx-opacity-pressed`，点击抛 `click` 和索引，点击停在步骤上。步骤条不维护内部状态，父级用 `active` 和 `click` 同步。
- 步骤条只承载进度、标题、说明和时间，不承载表单、按钮、主操作和长段落；需要操作时放在外面的卡片或页面区块。组件不提供禁用态、加载态和插槽。
- 进度条 `vx-progress` 是比例展示件：`percent` 传 0–100，负数和 0 按未开始，超过 100 按完成，非数字按 0。组件不维护内部状态，也不提供 `v-model`。
- 一行三段：可选 `label`、轨道、可选数值。`showText` 显示默认百分比，`text` 覆盖默认短文案；默认百分比最多保留一位小数，`94.5` 显示 `94.5%`，`60` 显示 `60%`，不补 `.0`。
- 不提供插槽、点击、禁用、加载和方法。标签和数值都用 props，操作放在外层卡片或列表行；不要把文字、图标和按钮塞进轨道，也不要把进度条当按钮。
- `type` 只改填充，默认 `primary`；`warning` 用 `warning-pressed`，`default` 用正文色。标签保持次要色，数值保持正文色，状态不能只靠填充色表达。
- `size` 三档：轨道 4 / 6 / 8（`--vx-progress-height-*`），标签和数值 13 / 15 / 17（20 / 22 / 24），间距 8 / 12 / 16。`height` 传带单位的值只覆盖轨道高度，文字仍按 `size`。
- `shape` 默认 `square` 平角，`rounded` 用 `--vx-radius-sm` 6，`pill` 用 999；圆角同时作用于轨道和填充，轨道用 `overflow: hidden` 裁切。细轨道上 `rounded` 和 `pill` 看起来接近。
- `bgColor` / `trackColor` / `color` 分别只改填充、轨道和数值，都是字面值，不跟随主题；跟主题时传 `var(--vx-color-*)`。`bgColor` 可以接渐变，但只在品牌强调时使用，一屏最多一处；语义状态用 `type`，不用渐变表达。
- 填充用 `width` 过渡，默认 220ms（`--vx-duration-normal`），`duration=0` 直接落位；不用 `transform`，渐变和两端圆角才会跟着可见宽度走。首次渲染不播放入场动画。
- `end` 在 `percent` 变化后的过渡计时结束时抛最终值；连续改值只按最后一次，卸载不补抛。它只用于接力或收尾，不要当业务提交。
- 数值最小宽度按档位 40 / 44 / 52（`--vx-progress-value-min-*`），多行进度条的百分比右对齐；标签单行省略，重要信息不要只放在会被截断的标签里。
- 进度条只占父级宽度，不加外部间距；放进卡片时由卡片内边距收口，多行之间留 12 / 16。频繁更新的上传进度把 `duration` 控制在 300 以内，避免永远追不上目标。
- 进度条是 `view` / `text` 组合，Web 端不进入 Tab 顺序；需要读屏时在 `label` 或旁边给出文字说明，`0%` 和 `100%` 也要显示数值。
- 从 ThorUI `tui-progress` 迁移：`showInfo` → `showText`，`activeColor` → `bgColor`，`backgroundColor` → `trackColor`，`width` → `size` / `height`，`radius` → `shape`；`duration` 从「每 1% 毫秒」改为「整段毫秒」，`activeend` → `end`。`percentWidth` 由 `--vx-progress-value-min-*` 接管，`size` / `color` 保留但含义分别改为尺寸档位和数值颜色。
- `percent` 只控制显示，真实进度仍由业务数据决定；不要把 `percent` 写死成 100 来表示「请求已发出」，也不要让动画落定时间早于接口返回。
- 环形进度 `vx-circular-progress` 是单个比例的展示件：`percent` 传 0–100，越界收敛，非数字按 0；组件不维护第二份进度，也没有 `v-model`。
- `size` 三档 64 / 80 / 100，线宽 6 / 8 / 10，中心数值 13 / 15 / 17；`width` 传带 px 的直径、`thickness` 传线宽，两者只改圆环，数值字号仍按 `size`。
- `arc` 只有 `circle` 和 `semicircle`：整圆从 12 点起画，半圆只画上半圆、高度减半。`direction` 只有 `clockwise` / `counterclockwise`，半圆顺时针从左起、逆时针从右起，不提供任意起始角。
- 弧线由 `view` 的边框和裁切拼成，不依赖 canvas：两条半环各裁到半边，填充只给两条边着色，旋转填充就是改弧长；两段半环、圆头和轨道分别叠上去，整段弧线由一个进度值驱动。
- 轨道是一整圈 `default-soft`（半圆是一段 180° 弧），弧线用 `type` 的语义色；两端圆头半径等于线宽的一半，0% 不画圆头，100% 起点和终点重合。
- 中心默认显示百分比（最多一位小数）；`text` 换短文案，`showText=false` 只留圆环，默认插槽替换整块中心内容。`bgColor` 只铺圆心，半圆铺成上半圆。
- `color` / `trackColor` / `textColor` / `bgColor` 各改一处，都是字面值；数值默认跟弧线色，`warning` 的数值用 `warning-ink`，自定义色的对比度由业务保证。
- `duration` 默认 600ms，0 直接落位；连续改值只按最后一次抛 `end(percent)`，卸载不补抛。首次渲染直接落位，不播放入场动画。
- 环形进度是 `view` / `text` 组合，没有点击、拖拽、禁用、加载和方法；需要交互时在圆环外放按钮、滑块或数字框。Web 端不进入 Tab 顺序，读屏只能读中心或旁边的文字。
- 从 ThorUI `tui-circular-progress` 迁移：`diam` → `size` / `width`，`lineWidth` → `size` / `thickness`，`fontShow` → `showText`，`percentText` → `text`，`defaultShow` → `showTrack`，`defaultColor` → `trackColor`，`progressColor` → `color` / `type`，`counterclockwise` → `direction`，`percentage` → `percent`；`height` / `multiple` 改用 `arc="semicircle"`，`gradualColor`、`sAngle`、`activeMode` 和按帧抛的 `change` 不再提供。
- 标签页 `vx-tabs` 用 `items` 按顺序等宽渲染，`v-model` 是当前索引，从 0 开始；负数或超出末项时不选中，非整数四舍五入。点击未选中且未禁用的页签写回模型并抛 `change(index)`，点击停在页签上，点击当前项不再抛事件。
- 一屏 2–5 个页签，文案 2–4 个字，不换行、不横向滚动；5 个时用 2–3 个字，更多入口改用宫格或列表。空数组不渲染。
- `variant` 三档：`line`（默认）只换文字色和字重并在底部画短线；`soft` 在选中项上加 `*-soft` 浅底胶囊；`inverse` 整条用正文色铺满，选中项浮 `surface` 胶囊。`inverse` 一屏最多一条，只给顶层入口。
- 高度沿用列表行 `--vx-list-height-*` 44 / 48 / 52；选中胶囊用 `--vx-compact-height-*` 28 / 32 / 36；下划线固定 `--vx-tabs-indicator-*` 24 / 32 / 40 宽、2px 高。有分割线时下移 `--vx-tabs-indicator-out` 盖住底边。宽度不跟文字长度联动。
- 文案用控件字号 14 / 16 / 18（行高 20 / 22 / 24），未选中 400，选中 500。页签是导航行，不借正文档位。
- `type` 只染选中文字、下划线和浅底胶囊；`soft` 的选中文字取对应的 `*-pressed`，其余形态取原色。普通导航保持 `primary`，只有页签本身表达状态时才用 `warning` / `danger`。warning 选中文字用 `warning-ink`，下划线用 `warning-pressed`。
- 角标用 `items[].badge`，`dot` 优先于计数；计数超过 `badgeMax`（默认 99）显示 `max+`。角标默认 `danger`，`badgeType` 只在计数有独立状态含义时改；横排角标叠在文字右上角，不参与布局，点击仍落在整格。竖排角标改成行内排布：和文案同一行、跟在文案后面垂直居中，落在右侧 12px 内边距内侧，不压上一行；文案单行省略、角标完整，`verticalWidth=96` 时也不会盖住文字。
- `items[].disabled` 只停该页签的点击：文字转 `disabled-text` 且保持不透明，角标单独降到 `--vx-opacity-disabled`，仍占位；反色条上的未选中禁用项只降透明度，保留反色文字。不要把当前项设为禁用；禁用不要用来掩盖权限问题。
- `divider` 默认打开，用 `--vx-color-divider` 画 1px 底边；`inverse` 始终不画。放进带描边的卡片时关掉，避免两条线叠加。
- `bgColor` 改整条底色，`color` 改未选中文字，都是字面值，组件不推断明暗；传 `var(--vx-color-*)` 时跟随主题。自定义反色条时同时传 `color`，否则未选中文字在换主题后可能看不清。
- `direction="vertical"` 是页签的另一种排布，不另开组件：每项占一整行，行高沿用列表行 44 / 48 / 52，宽度默认 96px（`verticalWidth`，传 0 跟随容器撑满）。竖排把底部下划线换成左侧 2px 竖条（`--vx-border-width-strong`、行高的 60%、垂直居中、颜色跟 `type`），选中项整行铺 `default-soft`（`soft` 外观铺对应的 `*-soft`），文字取 `*-pressed` 并加到 600 字重。竖排的角标不再绝对定位，和文案排在同一 flex 行、跟在文案后面垂直居中：文案占满剩余宽度并单行省略，角标不被压缩，宽度 96 时四字文案省略而角标完整。
- 竖排的 `divider` 从底部一条通栏底线变成项与项之间的 1px 横线，最后一项不画，右侧也不画竖线；`inverse` 不支持，传了按 `soft` 渲染并在开发环境提示一次。竖排不含内容区，右侧内容由业务按 `active` 自己排，`v-model` 和 `change` 与横向一致。
- 页签只切视图，不内置内容、路由、请求和插槽；需要内容联动时由业务按索引渲染。放进 `vx-sticky` 可以做吸顶，但要关掉页签自己的 `divider`，线交给吸顶条；页签本身不监听滚动。
- 标签栏 `vx-tabbar` 是自定义底部导航：`items` 按顺序等宽渲染，`v-model` 是当前索引。点击任意可用项都抛 `click(index, item)`，只有普通项真的换到新索引时才写回 `v-model` 并抛 `change(index)`；点当前项只抛 `click`。
- `items` 每项有 `text`、`icon` / `activeIcon`、`image` / `activeImage`、`badge` / `dot`、`disabled`、`raised`、`action`。图片优先于字体图标，`activeImage` 不传时沿用 `image`；`action` 项只做按钮，不参与选中。
- `size` 三档：栏高 48 / 56 / 64，图标位 20 / 24 / 28，角标跟 `--vx-badge-*`；文案 13 / 20，`lg` 14 / 22；图标和文案间距 2 / 2 / 4（`--vx-tabbar-gap-*`）。一屏 3–5 个，文案 2–4 个字，不换行、不横向滚动。
- `type` 只表达选中态和凸起圆钮：选中文字和字体图标跟语义色，warning 用 `warning-ink`；凸起圆钮用实心色，warning 取 `warning-pressed`，图标取对应的 `on-*`。普通导航保持 `primary`。
- `raised` 让某一项凸起成圆钮：栏顶让出 22 / 24 / 26 的透明段，圆钮 44 / 52 / 60，正圆、无阴影。一个标签栏最多一个，多传时只认第一个；每一列都按伸出段下移，只有圆钮是热区，透明带把点击让给页面，标签仍落在同一条基线上。
- `action` 和 `raised` 是两件事：`raised` 只改外观，仍是可选中项；`action` 只抛 `click`、不写 `v-model`。中间主按钮通常两者都传，点它打开操作菜单或页面，不让它变成第五个页签。
- `fixed` 默认打开，`placeholder` 默认打开：组件放在页面根节点的末尾，占位补出可见栏高和安全区，滚动区不会被压在标签栏下面。页面用 `scroll-view` + 底栏的列布局时改 `:fixed="false"`。
- `safeArea` 默认打开：安全区算在栏内，底色铺到屏幕底边，图标和文案落在手势条之上。放进卡片、画布或已经有底部安全区的容器时关掉，避免多出一截。
- `divider` 默认在顶部画 1px `divider`；放进带描边的卡片或画布时关掉。`bgColor` 只改整条底色，`color` 只改未选中文字和字体图标，图片不受影响；两者都是字面值，不跟随主题。
- 角标用 `items[].badge` 和 `dot`，`dot` 优先；超过 `badgeMax`（默认 99）显示 `max+`，默认 `danger`，不参与布局，点击仍落在这项的热区上。同一含义的角标一屏只出现一处。
- `items[].disabled` 只停这一项：文字和字体图标转 `disabled-text`，图片压到 0.4，角标单独降透明度，仍占位；不抛 `click` 和 `change`。当前项不要设成禁用。
- 标签栏只承载底部导航和点击，不内置路由、请求、权限和插槽；切换后的内容由业务按索引渲染。使用本组件时不要再配置 `pages.json` 的原生 `tabBar`，同一屏也只留一个底部导航。
- 标签栏是 `view` 组合，Web 端不进入 Tab 顺序；固定层级 1，和固定页脚同档，低于吸顶条 10、导航栏 20 和所有浮层。需要键盘和读屏支持时由页面另给链接或原生入口。
- 滑动菜单 `vx-swipe-action` 是行包装：默认插槽放行内容，`actions` 放右侧动作，`v-model:open` 控制展开。`name` 是这一行的业务标识，原样带回 `select(index, item, name)` 和 `change(open, name)`；列表里用它认出是哪一行。菜单固定在右侧、压在内容下面，内容单独平移；不要把菜单放进被平移的内容容器，Web 的 view 默认会裁掉它。
- `ref` 上暴露 `open()` / `close()` / `toggle()`，不受 `swipeable` 限制。`change` 只在组件内收起或展开时抛（手势、动作、内容点击、自动收起和方法），外部直接改模型不回抛；初始 `open=true` 直接呈现展开态，不播放入场。
- 动作 1–3 条，按数组顺序从左到右排；默认宽 72px，单项 `width` 覆盖。文案 2–3 个字、单行省略，4 个字时加宽到 96 这类值；图标固定 18、排在文案上方，行高不足 44 时只放文案。
- `type` 决定动作底色：`default` 用 `default-soft` 浅底配正文色，其余用实心底配对应的 `on-*`，warning 用 `on-warning` 深色字。按下用 `--vx-opacity-pressed`，不另画 pressed 底色。
- `disabled` 只停这一条：底色转 `disabled-bg`，文字和图标转 `disabled-text`，点击不抛 `select`。自定义 `bgColor` / `color` 是字面值，禁用时都不生效；传自定义底色时同时传文字色，组件不推断对比度。
- 展开距离等于所有动作宽度之和；拖动超过一半，或 24px / 250ms 内的快速轻扫时展开，向右滑回或不到一半时收起。拖动期间不挂过渡，松手用 `--vx-duration-normal` 的 `transform` 过渡。横向超过 8px 且大于纵向后才接管，并拦住外层滚动；纵向先超过 8px 则整段手势交还给页面。
- 展开后内容上盖一层透明保护层：点内容只收起，不触发行 `click`；滑动结束保留 300ms 点击保护，挡住浏览器补发的 click。保护层不阻止纵向滚动。
- 默认同组只展开一行：`group` 不传时按页面分组，同页两个列表各传一个值就互不影响。横向接管、`open()` 或把 `v-model:open` 写成 true 时，同组其他已展开的行收起并抛 `change(false, name)`。`multiple=true` 只影响当前行展开时是否收起同组的其他行。
- `swipeable=false` 只停手势：拖动不露出菜单，但内容仍可点，`v-model:open` / `open()` 仍能展开，展开后点内容仍能收起。禁止滑动不是禁用，内容不因此转灰。
- `closeOnSelect` 默认打开；关掉后点动作只抛 `select`，菜单保持展开。删除等不可逆动作仍先收起菜单，再由页面用 `vx-modal` 确认，组件不碰数据和路由。
- 不传 `actions` 时用 `extra` 插槽放自定义菜单，`extraWidth` 决定露出宽度（默认 80px）。两者都没有时不渲染菜单，手势也不移动内容。插槽默认不抛 `select`，点击内部在 `closeOnSelect` 下自动收起；需要保持打开时在控件上 `@click.stop`。宽度必须和插槽内容对上，不塞表单和长文案。
- 滑块底色 `surface`，根节点只裁切，不画描边、圆角和阴影；外轮廓交给外层列表或卡片。内容高度决定整行高度，建议不低于 44px，不放进横向滚动区。
- 不铺全屏透明遮罩，点页面其他位置不会收起；收起只由点内容、点动作、滑回来、自动收起或改模型触发。同组默认只留一行，只有明确的批处理场景才用 `multiple`。
- 卡片 `vx-card` 承载一组相关内容：头部、正文、底部。三块都可选；正文用默认插槽，底部用 `suffix`，头部左侧用 `prefix`，右侧用 `extra`。`content` / `footer` 是同一位置的文案快捷入口，插槽优先。
- 卡片默认 `surface` 底、1px `border` 描边、`md` 圆角，不加阴影，也不提供 `variant` / `type`。状态色由里面的标签、徽章和图标表达，不把整张卡片染色。
- 卡片 `size` 三档，默认 `md`。正文内边距 12 / 16 / 24；头部上下 8 / 12 / 12、左右 12 / 16 / 24；底部上 4 / 8 / 12、左右与下 12 / 16 / 24。头部高度下限沿用列表行 44 / 48 / 52，有头像时由头像撑高，不固定高度。
- 卡片标题按档位 13 / 15 / 17，行高 20 / 22 / 24，字重 600；正文 `sm` 用 13 / 20，`md` / `lg` 用 15 / 22；`meta` 和 `footer` 固定 13 / 20 次要色。
- 头部头像三档 32 / 40 / 48，圆角跟 `size` 取 6 / 8 / 10；`avatarShape="circle"` 换成圆形。头像只是标识，标题或名称必须同时给出，不能让图片单独承担信息。
- 头部由 `avatar` 或 `prefix`、`title`、`meta` 或 `extra` 组成；都为空时不渲染头部。`prefix` 替换头像，`extra` 替换 `meta`。
- 头部底部分割线默认打开，左右缩进和头部内边距对齐；`headerDivider=false` 去掉。需要灰色头部时传 `headerBg`，它是字面值，要跟主题就传 `var(--vx-color-*)`。
- `headerBg` 只改底色，前景仍用标题、`meta` 和插槽自己的颜色；对比度由业务保证。默认头部用 `surface`，不要为了装饰给每张卡片都加底色。
- 正文默认四边内边距；封面图、图片网格、列表行要贴边时打开 `bodyPadded=false`，由内容自己补左右留白。
- 底部默认渲染 `footer` 文案，`suffix` 插槽替换它，放「余下 3 篇」「查看全部」这类补充操作。底部不是主操作区，不放页面级按钮。
- `clickable` 默认关闭。整卡可点时打开：按下整卡用 `--vx-opacity-pressed`，点击抛 `click`，并且停在卡片上，不冒泡到外层。卡片里不要再放按钮、输入框和链接，避免一次点击触发两层。
- `titleColor` / `metaColor` 只覆盖对应文字，字面值不跟随主题；默认层级够用，品牌色只在明确需要时传。
- `full` 去掉左右描边和圆角，用于通栏；上下描边保留。卡片本身不加外部间距，通栏的左右边距由页面决定。
- 卡片宽度跟随父级，页面左右边距用 `lg`，卡片之间用 `xl`。卡片不嵌套卡片，也不放整块状态底色。
- 卡片标题可以换行，`meta` 保持单行，最大宽度 160px（`--vx-card-meta-max`）；标题太长时优先缩短文案，不靠缩小字号硬塞。
- 区块标题栏 `vx-section` 是独立标题条，不包内容；`plain` 只上下各留 4，不加左右内边距和外部间距。页面左右边距仍用 `lg`；标题和正文之间留 8–12，标题栏和上一个区块之间用 `xl`，两者都由页面决定。
- `vx-section` 的 `variant="soft"` 用 `default-soft` 浅底和 `md` 圆角，内边距 `sm` 8 / 12、`md` 12 / 16、`lg` 16 / 24（上下 / 左右）；浅底不是状态，也不抢卡片边界。
- `vx-section` 标题 15 / 17 / 20，行高 22 / 24 / 28；说明 `sm` / `md` 13 / 20，`lg` 15 / 22。竖线 3px 宽、高 14 / 16 / 20，固定 `pill` 圆角，和标题首行居中；`prefix` 与 `extra` 用同一档行高托底，距标题 8 / 12 / 16。
- `vx-section` 的分割线 1px，默认 `border`，在内容下方 8 / 8 / 12；它只分隔当前标题和下文，不代替区块之间的 `xl` 留白。`clickable` 打开后整条按下用 `--vx-opacity-pressed`，点击只抛 `click`，高度下限 44，`extra` 里的操作不冒泡。
- 区块标题栏 `vx-section` 只承载一个区块的标题层：标题、说明、竖线、分割线和右侧短操作。它不包内容，内容紧跟其后，标题和内容之间的距离由页面决定。
- `title` / `description` 是文案快捷入口；默认插槽替换 `title`，`suffix` 替换 `description`，`prefix` 放标题左侧图标、编号或品牌标记，`extra` 放右侧「查看全部」这类短操作。插槽内容不继承标题和说明的字号、颜色，自己带。
- `marker` 默认关闭；打开后显示标题前的竖线，`markerColor` 只改竖线颜色。竖线是区块标记，不表达成功、失败、警告或提示状态。
- `variant` 只有 `plain` / `soft`。`plain` 用于页面里的普通区块标题；`soft` 用于需要在页面底色上分出标题条的场景。同一屏同一层级只用一种，不要给每个区块都铺浅底。
- `divider` 默认关闭；打开后在标题内容下方画一条 1px 线，默认用 `border`，`dividerColor` 只改这一条线。`soft` 已有浅底和圆角，通常不再加分割线；两者同时打开时线画在浅底内部。分割线不替代区块留白，也不和卡片外框叠在一起。
- `clickable` 默认关闭；打开后整条按下变淡并抛 `click`，`extra` 是独立目标，不触发整条；标题栏高度下限 44，单行标题也有完整热区。静态标题栏不拦点击，点击继续落到外层卡片或列表行；不要为静态标题栏加按下态、箭头来暗示可点。
- `size` 三档，默认 `md`；同一层级用同一档。标题和说明可以换行，`extra` 保持自身宽度不换行；文案太长时先缩短，不靠缩小字号硬塞。
- `vx-section` 是 `view` / `text` 组合，Web 端不进入 Tab 顺序；`clickable` 只做触屏入口，需要键盘访问时由外层按钮或链接承载同一操作。
- `vx-section` 不放按钮、表单、长说明和第二个标题栏；右侧只放一个短操作，更多入口交给下面的卡片、列表行或页面区块。
- 上下留白 `vx-white-space` 只占高度：`size` 三档取 8 / 12 / 16，`height` 传带单位的值时盖过 `size`，`bgColor` 只用于显式色带。宽度跟随父级，纵向不收缩；没有插槽、事件、按下态和圆角，不承载内容。
- `height` 接受 px、rpx、百分比和 `var()`；单位缺失时声明失效，回落到 `size` 的档位。固定间距用 px，只有确实随屏宽变化时才用 rpx；百分比高度要求父级有确定高度，留白场景不使用。
- `bgColor` 是字面值，默认透明；跟主题时传 `var(--vx-color-*)`。它不表达状态，也不能代替分割线、骨架屏或可点击区域。
- 上下留白放在纵向布局里；父级是横向 flex 时它会占满一行宽度，不用于并排元素之间。需要左右留白时和 `vx-wing-blank` 配合，同一个位置只留一次。
- 左右留白 `vx-wing-blank` 只加左右内边距：`size` 三档取 8 / 12 / 16，`gap` 传带单位的值时盖过 `size`。宽度固定 100% 并按 `border-box` 计算，高度由默认插槽的内容撑开。纵向 `flex-shrink` 归零，父级压高度时内容不被挤扁；没有默认插槽时不留节点。
- `vx-wing-blank` 默认透明、无描边、无圆角、无外部间距；底色、圆角和描边交给外层容器或 `vx-card`。默认插槽是唯一的内容入口，没有具名插槽和事件。
- `gap` 是左右内边距，不是子项间距；接受 px、rpx、百分比和 `var()`，百分比按父级宽度算，左右都要给内容留足宽度，不传负值。
- 页面左右边距只留一次：页面已经用 `lg` 时，通栏区块里的 `lg` 是把内容拉回页面边距，不是叠加；要再收进一段时才用更大的 `gap`。
- 两个留白组件都不承载点击、状态和动效；需要交互时把按钮、列表行或链接放在 `vx-wing-blank` 的插槽里或外层容器里。需要背景、圆角或描边时，用外层 `view` 或 `vx-card`，不要把留白当卡片。
- 分割线 `vx-divider` 只画一条线：`direction` 横 / 竖，`dashed` 换虚线，`text` 配 `align` 放横线文字，`spacing` 调外边距，`color` 同时盖线色和文字色，`height` 只作用于竖线。没有插槽、图标、箭头和点击态。
- 分割线的横线默认 1px `border`；带文字时两侧各画一段等宽线，`left` 只画右侧、`right` 只画左侧、`center` 两侧都画；文字 13 / 20 次要灰，和线之间各留 12。
- 分割线的 `spacing` 数字按 px、字符串带单位；空串横向上下各 12、纵向左右各 16。`color` 是字面值，不跟随主题，也不表达状态。
- 分割线不自动居中：竖线靠父级 flex 排布，高度空串时 `align-self: stretch` 撑满一行，传 `height` 才固定高度。外边距不代替区块留白。
- 安全区 `vx-safe-area` 只占纵向：`edge` 选顶部或底部，不传 `height` 时读 `--uni-safe-area-inset-top` / `--uni-safe-area-inset-bottom`（带 `0px` 兜底），传了就写死高度。
- 安全区的 `bgColor` 是字面值、默认透明；`fixed` 时贴住对应边、层级 1，和固定页脚同档，不加分割线、毛玻璃和渐变，也不放内容。
- 安全区固定条不占文档流，页面底部要自己留高度；它不处理左右安全区，横屏由页面和导航栏负责。
- 状态栏 / 导航栏页面仍用 `vx-status-bar` 或 `vx-navigation-bar` 的 `statusBar`，不要在它们上面再叠一条安全区。
- 滚动消息 `vx-rolling-news` 用 `items` 按顺序轮播，每项只有 `text` 和可选的 `id`；空数组不渲染，只有一条时不轮播。点击整条抛 `click(index, item)`，路由和请求由业务处理。
- 两层叠放：当前条在上、下一条在下面一格（横向在右侧一格），换条时两层同时位移，落位后交换角色，滑出的那层在视口外回到下一格。不往回滚，也不复制副本；两层都用 `transform` 百分比位移，不测量高度。
- `direction` 有 `vertical`（默认）和 `horizontal`；步长都是一整条，图标、箭头和插槽不跟着动。换方向从第一条重来。
- `variant` 三档：`card`（默认，`surface` 底加 1px 描边）、`soft`（`default-soft` 浅底）、`plain`（透明且不收左右内边距，放进卡片）。
- `shape` 三档：`rounded`（默认，`md` 圆角）、`pill`（搜索框）、`square`（贴边通告）。三档都保留 1px 透明描边，高度不变。
- `size` 三档：行高 32 / 40 / 48，文案 13 / 15 / 17，图标 14 / 18 / 22，左右内边距 12 / 16；文案单行省略，不换行。
- `icon` 是唯一的强调色，默认 `primary`；`iconColor` 只改这一处，扩展图标要先引入 `icons-extend.css`。`prefix` / `suffix` 是独立目标，点它们不触发整条 `click`；传了插槽就不再渲染内置图标或箭头。
- `interval` 是两次切换的间隔，默认 3000ms，从这一格开始算；小于等于 0 按 3000 处理，改间隔只重新计时。`autoplay=false` 停在第一条，不要用空的 `v-if` 卸载再重建。
- 按下整条时暂停，松手后重新计时；Web 上的鼠标点按不触发这条逻辑。一屏只放一条滚动消息，同一页面不要跑两条同时轮播的通告。
- `clickable` 默认打开；静态展示传 `false`，既不按下变淡，也不铺点击热区，点击继续落到外层卡片或列表行。
- `bgColor` / `color` / `iconColor` 是字面值，对比度由业务保证；跟主题时传 `var(--vx-color-*)`。组件只承载轮播、点击和两侧插槽，不做详情、路由、请求和关闭逻辑。
- 通告栏 `vx-notice-bar` 只显示一条公告；多条消息轮播用 `vx-rolling-news`。`text` 是主文案，默认插槽替换它；`wrap` 打开后换行，`scrollable` 打开后横向滚动，滚动优先于换行。
- 通告栏默认 `warning`：琥珀浅底配 `warning-ink`；普通公告用 `info`，中性说明用 `default`，结果用 `success` / `danger`。`variant` 三档 `soft | solid | plain`；`solid` 用语义实心底配 `on-*`，warning 配 `on-warning`；`default` 实心是正文色反相底配反色字；`plain` 透明且不收左右内边距。
- 通告栏 `size` 三档：行高 32 / 40 / 48，文案 13 / 15 / 17，图标 14 / 18 / 22，左右内边距 12 / 16；`wrap` 时最小高度不变，上下留 4 / 8 / 12。`shape` 默认 `square` 通栏，`rounded` 放进卡片，`pill` 胶囊。
- 通告栏 `icon` 是可选标识，`iconColor` 只改图标和关闭叉；不传时跟随文案前景。`prefix` 替换图标，`suffix` 排在关闭叉前；两者是独立目标，点它们不触发整条 `click`，插槽内容自己带尺寸和颜色。
- 通告栏 `closable` 显示关闭叉，热区宽度等于行高；`v-model:show` 管显隐，`close` 只表示组件内收起，父级改回 `show` 不回抛。`open()` / `close()` / `refresh()` 供 `ref` 调用。
- 通告栏滚动只读 `text`：文字宽度和视口宽度都要能测，默认插槽内容保持静态。文字放得下时停在原位；放不下时按 `speed` 匀速走完，一轮结束后在两端都看不见的位置复位，再从右侧进入。
- 通告栏 `speed` 默认 100 px/s，0 和负数回到 100，其余收在 20–600；`activeMode` 的 `backwards` 从右侧入场，`forwards` 只让第一轮跳过入场、从左侧起点开始。改 `speed` / `activeMode` 从第一轮重来；改文案、尺寸、图标、关闭叉会重新测量。
- 通告栏测量失败重试三次，仍失败按静态展示；容器宽度变化、字体异步落定后调 `refresh()`。滚动用 `transform` 的线性 `transition`，5.26 的 App 端不依赖关键帧。
- 通告栏 `clickable` 默认打开；静态展示传 `false`，既不按下变淡，也不拦点击，点击继续落到外层卡片或列表行。默认插槽内容仍在整条热区里，带自己的操作时把操作放进 `suffix` 或关掉 `clickable`。
- 通告栏 `bgColor` / `color` / `iconColor` 是字面值，对比度由业务保证；跟主题时传 `var(--vx-color-*)`。组件只承载一条公告、滚动和关闭，不做详情、路由和请求。
- 通告栏默认留在文档流，不加阴影、不做 fixed；需要吸顶时放进 `vx-sticky`，固定由页面自己承载。空文案且没有默认插槽时不渲染。
- 列表分组 `vx-list-view` 与列表行 `vx-list-cell` 可以组合，也可以各自独立使用。分组默认 `variant="card"`：`surface` 底、1px 描边、`md` 圆角；`plain` 只保留底，不加描边和圆角。
- 分组标题在卡片外：标题用 15 / 22 / 500（`--vx-font-md` / `--vx-line-md` / `--vx-weight-medium`），说明用 `body-small`（13 / 20 / 400）次要色；默认左右各缩进 16，`size="sm"` 时 12，和同档列表行对齐，和卡片之间留 8；右侧 `extra` 插槽放「查看全部」这类操作。标题和说明都是可选项。
- 分组只承载列表行和分组标题，不承载按钮、表单和长说明；需要滚动时由页面或外层 `scroll-view` 负责。卡片分组会裁掉溢出，行里不要放需要越出卡片的浮层；选择器和弹层挂页面根节点。
- 列表行的高度和主文案一起分三档：`sm` 44（13 / 20）、`md` 48（15 / 22）、`lg` 52（17 / 24）。行内边距随档位收紧或放宽，双行时由内容自然撑高。
- 列表行的主文案用 `text`，说明和右侧值用 `text-secondary`；主文案和说明都可以换行，右侧值放短文本，不换行。
- 列表行右侧内容分两层：`value` 是短文本，`extra` 插槽放徽章、标签或时间；传了 `extra` 就忽略 `value`。插槽内容不继承颜色和字号，自己带。
- 列表行默认 `clickable`：可点行按下用 `surface-pressed` 底，点击抛 `click`，并且停在行上，不冒泡到外层。静态展示行必须写 `:clickable="false"`；`disabled` 把组件渲染的主文案、说明、值和箭头一起转灰，且不抛 `click`，插槽内容不自动转灰。
- 箭头只用 `chevron-right`，比行主文案小一档。有导航含义时才加箭头；静态行不放箭头。
- 分割线是行内的一条 1px 线，默认用 `--vx-color-divider`（比 `border` 浅一档），左右与内容内边距对齐；分组最后一行写 `:divider="false"`，避免和卡片底边叠成两条。
- `dividerColor` 只改这一条线，字面值不随主题；`dividerOpacity` 0–1 只改线的不透明度，0 直接隐藏；两者可以叠加，行内容不受影响。
- 列表行的前缀放图标、头像或选择框，后缀放值、徽章或时间。分组和行都不提供整行自定义底色，状态色交给里面的标签、徽章和图标。
- 列表行是 `view`，Web 端不进入 Tab 顺序；需要键盘入口时，由外层按钮或链接承载同一操作。
- 索引列表 `vx-index-list` 用分好组的 `sections` 传入，`letter` 是分组标题和索引字母，`items` 是联系人、城市或商品；空分组会被忽略，索引位置按可见分组计算。组件不排序、不分组、不请求数据。
- 列表行每项有 `title`、可选 `description` / `avatar` / `extra` / `disabled`。头像固定方形，按 `aspectFill` 裁切，加载失败回落到首字；没有头像时显示首字，首字也没有时用 `user` 图标。
- 整块是一个 `scroll-view`，高度由 `height` 决定，必须带单位或 `100%`；父级要有确定高度，组件不按窗口高度自己算。
- `sticky` 默认打开：分组标题滚到视口顶部就换成吸顶标题，下一组标题靠近时把它顶上去。吸顶标题是绝对定位的覆盖层，不占行高；`sticky=false` 时分组标题随内容滚走。
- `indexBar` 默认打开：右侧竖向索引条贴着列表垂直居中，字母是整条连续热区，按下、滑过都定位到对应分组并抛 `change`。`indexBar=false` 时不留右侧空位。
- `indicator` 默认打开：拖动索引条时在左侧显示大字母，松手消失；键盘和读屏都拿不到它，状态以吸顶标题和字母高亮为准。
- `v-model:current` 是当前分组索引，从 0 开始；滚动和点索引条都会回写，外部写值会定位到该分组。方法 `scrollTo(index)` / `scrollToLetter(letter)` 只滚动，不抛事件；`refresh()` 重测标题位置。
- `select(item, sectionIndex, itemIndex)` 在点行时抛，`disabled` 行不抛；默认插槽替换整行内容，拿到 `item` / `index` / `section` / `sectionIndex`，行内边距和分割线仍由组件负责。`extra` 插槽替换行尾短值。
- `prefix` 插槽在滚动区顶部，放搜索框或说明；`suffix` 插槽在列表末尾，放总数或「没有更多了」。两者都随内容滚走，要常驻的搜索栏放在组件外面。
- `activeColor` 只改索引条当前字母的底色和拖动指示器的底色，字面值不跟随主题；前景固定 `on-primary`，对比度由业务保证。
- 空列表只渲染 `emptyText` 和 `users` 图标，不渲染索引条；`emptyText=""` 时只留图标。
- 索引列表是 `scroll-view` 里的 `view` 组合，Web 端索引条不进入 Tab 顺序；需要键盘跳转时由外层提供字母快捷入口。
- 折叠面板由 `vx-collapse` 容器和 `vx-collapse-item` 面板组成：容器管展开名单、手风琴和分组外观，面板管标题、内容和禁用。`v-model` 是展开面板的 `name` 数组，`accordion` 打开后同一时间只保留一个。
- 同一组内 `name` 唯一。静态列表按挂载顺序认最后一项；`v-for` 要给每项传 `index`，全部都传了才按最大 `index` 不画分割线，有一项没传仍按挂载顺序。`divider=false` 去掉全部面板间分割线。
- 容器 `variant` 只有 `card` / `plain`：`card` 用 `surface` 底、1px `border` 描边和 `md` 圆角；`plain` 只保留 `surface` 底。两者都不加阴影，放进卡片时用 `plain`。
- 标题行沿用列表行最小高度 44 / 48 / 52，标题 13 / 15 / 17（20 / 22 / 24、500），说明固定 13 / 20，箭头 sm / md 用 14、lg 用 18；水平内边距 12 / 16 / 16，垂直 8 / 12 / 12。内容左右与标题对齐，上 8 / 12 / 16、下 12 / 16。
- 面板标题行是唯一热区，按下铺 `surface-pressed`；点击停在面板上，内容区不接管点击。箭头包一层 `view` 旋转 180°，样式隔离下不改 `vx-icon` 内部的 `text`。
- `disabled` 把标题、说明和箭头一起转 `disabled-text`，停下按下态和指针，且不抛 `change`；容器上的 `disabled` 作用于整组。插槽内容不自动转灰。
- `arrow` 在容器上关掉整组，在面板上只能再关掉单项；无箭头时标题行仍整行可点，展开状态由内容是否可见表达。
- `contentHeight` 固定内容区高度，必须带单位，内容放进 `scroll-view` 内部滚动；不传时由内容自然撑高，最多 2000px。固定高度用 `height` 过渡，自动高度用 `max-height` 过渡。
- 默认插槽第一次展开才创建，之后保持挂载；收起状态下插槽不渲染，也不挂原生子树。不要指望在收起时用 `validate` 校验里面的表单项。
- 面板前缀放图标或头像，`extra` 放标签、徽章、时间或状态；插槽内容自己带颜色和字号，按钮和开关要自己 `@click.stop`。面板只承载一条可折叠内容，不放页面主操作、长表单和第二个折叠面板。
- 容器方法 `open(name)` / `close(name)` / `toggle(name)` 只改 `v-model` 并抛 `change`，不受 `disabled` 限制；面板点击和容器方法走同一套手风琴和名单收口。手风琴自动收起旧项时不另抛一次 `change`，完整名单以 `v-model` / `update:modelValue` 为准。
- 折叠面板是 `view` 组合，Web 端不进入 Tab 顺序；需要键盘入口时，由外层按钮、链接或表单控件承载同一操作。
- 宫格由 `vx-grid` 容器和 `vx-grid-item` 格子组成。容器只画外框、底色和圆角，格子负责宽度、内部线、内容和点击。
- 列数写在格子上：`columns` 取 2–5，同一组保持一致；超出按 3。格子宽度按 50% / 33.33% / 25% / 20% 分。容器不再声明列数，避免两处不同步。
- `index` 从 0 开始，按行优先递增。格子靠它判断第一行、第一列，停掉外沿的内部线；序号必须连续。
- 宫格默认 `variant="card"`：`surface` 底、1px `border` 描边、`md` 圆角，并裁掉四角。`plain` 去掉描边和圆角，只保留 `surface` 底。
- 内部线只画上、左两条，默认用 `--vx-color-divider`，1px；第一行、第一列不画。外框仍用 `border`。最后一行没排满时留白，不补格子。
- 格子不画外框、圆角和阴影，外轮廓只由容器负责。宫格不提供阴影、选中态和折叠；底色用 `bgColor` 自己传。
- 格子 `size` 三档，默认 `md`，同一组保持一致：最小高度 72 / 88 / 104，内边距 8 / 12 / 16，主文案 13 / 15 / 17，说明固定 13 / 20，图标 18 / 22，图片 32 / 40 / 48。
- 格子图标用 `vx-icon` 直接渲染，不套底色：默认用 `text-secondary`，`type` 改语义色，`iconVariant` 切 regular / fill。`image` 用 32 / 40 / 48 方框按 `aspectFit` 展示，圆角由方框裁切，跟 `size` 取 `--vx-control-radius-*` 6 / 8 / 10。
- `icon` 插槽替换图标，内容自己带尺寸、颜色和底色；图片优先于字体图标，`icon` 插槽优先于两者。
- `type` 只作用于字体图标，默认 `default` 显示为次要灰；普通入口不传，只有状态才上语义色。图片和插槽内容不跟着变色。
- 主文案单行，超出用省略号；说明可以换行。需要换行的主文案时用默认插槽自己排。
- `bgColor` 只覆盖格子底色，`color` 同时覆盖主文案和字体图标，都是字面值，不随主题；有底色时按下改用整体透明度，不再换 `surface-pressed`。底色和分割线一起使用时由业务保证对比度；最后一行不足时空位保留容器底色。
- `color` 传了就不再看 `type`；`type` 只用于表达状态，普通入口不传，保持默认的次要灰。
- 格子 `clickable` 默认打开，按下用 `surface-pressed` 底并抛 `click`；静态格子传 `:clickable="false"`，禁用格子转灰且不抛 `click`。
- 点击停在格子上。格子里不要再放按钮、输入框和链接；需要格内单独操作时由那个操作自己 `@click.stop`。
- `extra` 插槽贴右上角，放徽章、短标签或状态；不占内容高度，也不替代主文案。
- 宫格卡片不加外部间距，宽度跟随父级；页面左右边距用 `lg`，宫格之间用 `xl`。宫格是 `view` 组合，Web 端不进入 Tab 顺序。
- 图片组合 `vx-image-group` 用 `items` 按顺序渲染缩略图，每项只有 `src` 和可选的 `id`；不提供容器加子项的组合写法，空数组不渲染。
- 尺寸写在组上：`size` 三档 40 / 64 / 88，方形方框固定边长，不跟父级宽度缩放；同一组只用一档。`shape` 的 `rounded` / `circle` / `square` 只改方框轮廓，圆角规则按形状一档。
- `mode` 取 uni-app `image` 的 `aspectFill` / `aspectFit` / `scaleToFill`，默认 `aspectFill`；方框裁切交给外层，图片只铺满内容区。
- `direction="row"` 默认横向排一行；`direction="column"` 纵向排一列，方框宽度不变。组本身不加外框、底色和外部间距，放进卡片或页面区块时由外层提供边界。
- `offset` 是相邻两张图的偏移，单位 px：负值重叠、正值留缝、0 贴边。重叠量控制在方框的三分之一以内，留缝不超过 16；`offset` 取整，读不出来的值按 0。
- `wrap` 只用于 row：每行铺满父级后换行，横向和纵向留缝都取 `offset`；负值按 0 处理，column 忽略 `wrap`。
- `ring` 给每张图加 2px 描边，压在图片内侧，重叠时靠它把相邻图分开；默认描边色是 `surface`，`ringColor` 是字面值。单张独立展示不加 `ring`，圆环挤占的是图片内容区，不改变方框边长。
- `clickable` 默认打开：按下整张图变淡，点击抛 `click(index, item)`，并停在图片上；静态展示传 `:clickable="false"`，不抛 `click`，也不拦点击，放进可点击行时点缩略图等同于点行。缩略图里不要再放按钮和链接。
- 图片加载失败时换成 `default-soft` 底色加 `image` 占位图标，图标取 `disabled-text`，并抛 `error(index, item)`；`src` 为空只按占位处理，不抛事件。父级整组换图时清掉失败记录重新加载，同一个地址在清掉失败记录前只抛一次。
- 图片组合只承载缩略图和点击，不放标题、数量、说明、按钮和主操作；需要标题或「查看全部」时由外面的卡片、列表行或页面区块承载。
- 图片组合是 `view` 组合，Web 端不进入 Tab 顺序；需要键盘入口时由外层按钮或链接承载同一操作。
- 头像 `vx-avatar` 用 `src` / `text` / `icon` 三态回落：图片失败后回落到首字，首字为空再回落到图标，图标也为空用 `user`；失败只记一次，`src` 变化后复位重试。首字先 `trim` 再按 code point 取，代理对连取两个 code unit。
- 头像的 `size` 只改外框、首字和图标，`shape` 只改轮廓；`ring` 是 2px 内描边，`mode` 只透传 `aspectFill` / `aspectFit`。没有 `badge`、在线状态点和 `disabled`：徽章用 `vx-badge` 的 `absolute` 包一层，状态点由业务用绝对定位的小圆点加。
- 头像 `clickable` 默认关闭。显式打开或只写 `@click` 时都算可点：按下用 `--vx-opacity-pressed`，点击抛 `click` 并停在头像上；显式 `clickable=false` 不挂按下态，点击继续落到外层卡片或列表行。
- 图片底座 `vx-image` 承载单张图片：`src` 为空直接失败，加载中铺占位底色，成功后按 `fade` 淡入，失败回落到 `errorIcon` / `errorText`，只回落一次。
- 图片底座的尺寸优先级：`height` → `ratio` 换算 → `100%`；`ratio` 只在 `width` 是 px 或 rpx 时生效，百分比和 `auto` 下回落到父级高度，只提示一次。
- 图片底座的三态在框内居中：加载中只有占位底色，失败时图标在上、文案在下，整组垂直居中；`placeholder=false` 只影响加载中的底色，失败态始终铺底。
- 图片底座的 `radius` 五档只作用于外框，`bgColor` 只覆盖占位与失败底色；`src` 变化重置成加载中，同一个地址重新赋值不会重挂节点，需要重播时换 `:key`。
- 图片底座只抛 `load` / `error` / `click`，不内置预览、长按保存、裁剪和骨架；卡片、图片组合、上传和瀑布流里的裸 `<image>` 本版不迁移。
- 图片预览 `vx-gallery` 是全屏浮层：`items` 按顺序放图，`show` 支持 `v-model:show`，`current` 支持 `v-model:current`。它挂在页面根节点，和滚动容器平级，不放进 `scroll-view`、卡片或 `fixed` 容器。
- `items` 每项是 `{ src, description?, id? }`。`src` 为空显示失败占位；`description` 是底部单行说明；`id` 原样带回 `change` / `delete` / `error`。空数组不渲染整层，也不占高度。
- `closable`、`showCounter`、`showDescription` 默认打开，`showDelete` 默认关闭。`deleteText` 默认「删除」，`errorText` 默认「图片加载失败」。删除只抛 `delete(index, item)`，组件不改 `items`；父级删完最后一张时自己关掉。
- `swipeable` 默认打开，左右切换；`closeOnTap` 默认打开，点图片关闭。`zoom` 默认打开，双指缩放和双击放大；`maxScale` 默认 3，收敛到 1.2–5。双击放大到 2.5 倍或 `maxScale`，双击复位。放大后单指拖动查看，点图片不关闭；翻页、关闭和换图都先把缩放复位。平移按图片 aspectFit 后的显示尺寸收口，不把四周留白拖进画面；宽高还没读到时先按舞台收口。
- `closeOnTap` 和 `zoom` 同时打开时，单击会等 260ms 的双击判定结束再关；`zoom=false` 时单击立即关闭。`closable=false` 且 `closeOnTap=false` 时，Web 上仍可用 Esc，App 上只剩 `close()`，所以至少保留一个出口。
- 顶部工具行 44：关闭在左、计数居中、`extra` 在右；底部工具行 60：说明单行省略、删除靠右。顶部让出状态栏，底部让出手势条，左右让开刘海；顶部和底部都不参与翻页和缩放。
- `open(index?)` 打开并定位；`close()` 只收起，不抛 `close`；`next()` / `prev()` / `goTo(index)` 更新 `v-model:current`，打开时抛 `change`；`refresh()` 重新量舞台，窗口或字体变化后调一次。
- 图片失败时换成 `image` 图标加 `errorText`，同一地址只抛一次 `error`；重新打开或换整组 `items` 会再给一次加载机会。组件不内置加载转圈、缩略图条、循环播放、删除确认和路由。
- `bgColor` 只改整层底色，字面值；不传时用 `--vx-color-viewer-bg`。`zIndex` 默认 1015，高于消息提示 1010，低于弹框 1020、加载浮层 1050 和轻提示 1100。`extra` 插槽内容自己带颜色、尺寸和热区。
- 图片预览是 `view` 组合，Web 端不进入 Tab 顺序；Web 上 Esc 关闭、左右方向键切换，更高层浮层打开时让出键盘；App 和小程序没有键盘入口。
- 图片预览不做虚拟化：一组建议 1–20 张，整条轨道一次渲染；更多图片先在页面分页或分批传入，不要把长列表塞进预览层。
- 图片上传 `vx-upload` 把「选图 → 过滤 → 上传 → 进度 → 失败重试 → 删除 → 预览」收成一条链：`v-model` 是 `VxUploadFile[]`，也接受远程地址字符串；写回始终是带 `status` / `progress` / `error` 的对象数组。
- 选完先按 `accept` 和 `maxSize` 过滤，被拒的图不进入列表，也不占 `count`；`invalid` / `oversize` 各带未入列的 `file` 和原因。`count` 满或本次选择被截断时只抛 `exceed`。
- `uploader` 优先于 `serverUrl`；两者都空时本地路径直接作为结果，状态是 `success`。内置上传用 `uni.uploadFile`，`header` / `formData` 原样透传，`urlField` 支持 `data.url` 点路径；非 2xx 失败。
- 并发由 `maxConcurrent` 控制，默认 3，收敛到 1–9；超出的停在 `pending`。一张失败不阻塞其它张，`retry(index)` 重试单张，`retry()` 不传下标等同 `submit()`，把 pending 和 failed 一起放回队列。
- 进度只表达真实数据：内置上传取 `UploadTask.onProgressUpdate`，自定义 `uploader` 用第二个参数回传；拿不到时停在 0，视图只写「上传中」，不显示假百分比。
- 删除默认立即生效，`confirmDelete` 走 `vx-modal`；失败遮罩整块可点重试。`deletable=false` 隐藏删除圆点，`disabled` 停用选择、提交、重试和删除，预览仍可用。
- `clear()` 只清列表，不取消已发出的请求；在途请求完成后不再写回。`add(paths)` 接业务自己的入口，过滤规则与 `choose()` 一致；`refresh()` 重测容器宽度。
- 内置预览用 `vx-gallery`，从当前张开始；`preview=false` 时只抛 `preview(index, files)`。图片加载失败时格子显示占位图标和「加载失败」，不进入 `failed` 上传状态。
- 图片上传不提供拖拽排序、手动排序、粘贴上传、视频、普通文件、分片续传和取消单个请求；这些能力需要时用外层页面或自定义 `uploader`。
- 二维码 `vx-qrcode` 用 `text` 传内容，按 UTF-8 字节编码；只做字节模式，版本 1–40 和最优掩码自动选，分块、交错和格式信息按 ISO/IEC 18004 计算。`size` 三档 120 / 160 / 200，`width` 传带 px 的边长覆盖；`level` 四档，默认 `M`。
- 模块用绝对定位的 `view` 画，同一行的连续深色模块合成一条，上下同宽的再叠成一块；边长向下取整到整数像素，余量并进空白边距，`margin` 按模块数算，默认 2、收敛到 0–8。普通验证码大约 80–300 条 `view`，不经过 canvas。
- `color` 只改深色模块，`bgColor` 同时改底板和空白边距；默认 `#1a1d26` / `#ffffff`，都是字面值、不跟随主题。反色二维码很多扫码器认不出来，暗色页面里也保留浅底方阵。
- `logo` 压住方阵中心，`logoSize` 占内容宽度的 0.12–0.3（默认 0.22），四周留 `--vx-qrcode-logo-pad` 的挖空，盒子用 `sm` 圆角；带图标时把 `level` 提到 `H`。图标加载失败时收起整层，方阵保持完整。
- 空内容显示空状态，超出 40 版容量显示错误提示，两种情况都用 `default-soft` 浅底占位，不渲染空白方阵，也不抛事件；`emptyText` / `errorText` 可替换文案。
- 二维码是展示件：没有点击、禁用、加载、插槽和方法，也不进入 Tab 顺序。放大、长按保存、刷新和详情跳转由外层按钮、列表行或卡片处理，组件只负责编码和绘制。
- 内容控制在 10 版（57 × 57）以内；再长的内容扫描成功率会下降，并带来上千条 `view`，不要放进长列表或输入事件的每一帧里。
- 图标用 `vx-icon`：`name` 取生成的 `VxIconName`，`size` 三档，`variant` 只有 `regular` / `fill`，`type` 五种语义色，`color` 只改这一处。core / extend 按 tier 选字体。图标不触发事件。
- 加载中 `vx-loading` 是转圈底座：`text` 可选，默认换行，`wrap=false` 时单行。`layout` 分横排、纵排，`variant` 分 `ring` / `arc` / `bars`；`overlay` 打开后铺满页面、面板居中，用 `v-if` 控制显隐。
- 加载中的 `type` 只改转圈，`size` 沿用图标三档，文案用 `body-small`，`lg` 跟到 `body`。浮层的默认 `type` 用正文色，行内用次要灰。
- 加载浮层默认带遮罩并挡住页面点击，层级 1050；`mask=false` 只去掉压暗，不放开点击。面板最小 120、最大 240，内边距 24，圆角 `md`，阴影 `lg`。
- 加载动画 `vx-loader` 是 Pro 的等待组件：`variant` 分 `ring` / `bars` / `dot` / `wave`，`layout` 分 `inline` / `panel`，`overlay` 打开时固定用面板。`delay` 让整块在挂载后延迟出现，超过 5000 按 5000；延迟内结束的短请求什么都不出现。
- 行内不加底色，动画在左、文案在右；面板用固定深底白字，动画在上、文案在下。浮层铺满页面、面板居中、默认带遮罩并挡住点击，层级 1050；`mask=false` 只去掉压暗，不放开点击。
- `type` 只改行内动画，面板和浮层固定白色；`warning` 行内取 `warning-ink`。`color` 覆盖动画色，`panelColor` 只换面板底色，`maskColor` 只换遮罩，都是字面值，组件不做明暗推导。
- `text` 默认「加载中」，`description` 是可选的第二行；两者都传空串时只剩动画。`size` 三档只改动画画布和面板文案，行内主文案 `lg` 跟到 15 / 22。
- 加载动画的文案要能独立说明在等什么；浮层挡点击但不锁键盘焦点，加载期间禁用触发入口并保证状态能收回。5.26 的 App 动画静止，不能只靠动画传达状态；Web 上系统关掉动效时同样停在静态姿态。
- 加载动画不承载点击、进度和百分比；需要进度用 `vx-progress`，需要安静的行内转圈用 `vx-loading`。同一屏只留一个加载状态，不把两个组件叠在一起。
- 骨架屏 `vx-skeleton` 是 Pro 的占位组件：`variant` 提供 text / article / list / card / profile / form / grid 七种预设，`sections` 把 media / line / block 和预设拼成整页。没有默认插槽时始终画骨架；有插槽时由 `loading` 切换。
- 骨架屏预设结构固定：text 是标题加正文；article 加封面和短行；list 是头像加两行；card 是描边卡片加卡图；profile 居中；form 是标签加输入框高度；grid 等宽加说明行。`count` / `lines` / `columns` 控制重复量，`0` 用预设值。
- 骨架屏三档尺寸：标题 16 / 18 / 20，正文 10 / 12 / 14，头像 32 / 40 / 48，资料头像 56 / 64 / 72，媒体 120 / 160 / 200，宫格块 64 / 80 / 96，表单高度取控件 32 / 40 / 48；行距 6 / 8 / 10，段落间距 16 / 20 / 24。
- 骨架屏占位块只用中性色，不铺品牌色和语义色；文字行和标题是胶囊，媒体、色块、宫格和表单用 `md` 8，头像用正圆。圆角不跟随 `size`。
- `sections` 每段字段和根节点同名，段内不传的字段用预设默认值，不继承根节点的 count / lines / show*；`gap` 只属于分段，取 0–64，第一段不设。
- 骨架屏 `animated` 默认开，`animation` 只有 pulse / shimmer。骨架是装饰，不拦点击、不进入键盘顺序；加载状态用可见文案或 `vx-loading` 说明。切换内容不保留原高度，高度由业务对齐。
- 骨架屏不请求、不存状态、不做路由；`loading` 只切显示。短请求先在页面侧 `v-if` 避开闪烁，不给骨架加延迟。
- 加载更多 `vx-loadmore` 和没有更多 `vx-nomore` 是列表尾部的两种状态，上下留白和文案档位一致，互相替换不跳高度。
- `vx-loadmore` 只做「正在加载」：文案默认「正在加载...」，单行不换行，转圈形态和加载中相同；不承载点击、重试和空状态。
- `vx-nomore` 只做收尾：默认「没有更多了」加两侧 1px 细线，`dot` 换成 6px 圆点，`line=false` 去掉线；`size` 三档只改文案和标记高度；`color` 只改文案和圆点，`lineColor` 只改线。
- 列表底部先用 `vx-loadmore`，取完数据后换成 `vx-nomore`；不要同时渲染，也不要用加载更多冒充空状态。
- 空状态 `vx-no-data` 承载空列表、搜索无结果、空购物车和加载失败：默认内置线稿加主文案，可选说明和动作。`type` 只给插图和图标上色，文案保持正文色；线稿默认用 `text-secondary` / `disabled-text`，语义色取 `*-pressed`，warning 取 `warning-ink`；图标圆用对应的 `*-soft` 底。
- 动作复用 `vx-button`：`actionText` 为空且没有 `extra` 插槽时不渲染，`actionType` / `actionVariant` / `actionShape` / `actionSize` / `actionWidth` / `actionLoading` / `actionDisabled` 原样透传；按钮点击只抛 `action`，不内置路由、请求和埋点。
- 尺寸三档只改插图、图标圆、字号和留白；插图 96 / 128 / 160，图标圆 64 / 80 / 96，字形 32 / 40 / 48，主文案 13 / 15 / 17，说明 13 / 13 / 15。图文顺序固定为插图、文案、动作，不提供横向排列。
- `image` 优先于 `icon`，`icon` 插槽优先于两者；自定义插图按方框等比展示，方框和线稿同宽。默认插槽替换主文案和说明，`extra` 替换动作按钮，可以放多个操作；插槽内容自己带颜色和字号。
- `fill` 撑满父级并垂直居中，父级需要是纵向 flex；不传时留在文档流，高度由内容撑开。空状态不画外框、底色和阴影，放在卡片或列表分组里时由外层提供边界。
- 空状态整块不响应点击，只有动作区域可点；没有动作时默认居中，不留一个空按钮位。`extra` 里的操作自己处理点击，只有默认按钮抛 `action`。搜索结果为空时文案要说清「没有找到什么」和下一步，不要只写「暂无数据」。
- 提示页 `vx-msg` 是页面级结果块：`type` 给图标圆和两个动作定语义，`title` / `description` 说明结果，`primaryText` / `secondaryText` 各带一个动作。两个都为空时不渲染动作区，只有文案时就是一张结果说明。
- 提示页的图标默认跟 `type`：success 对号、danger 叉、warning 三角、info 信息圆、primary 时钟、default 消息圆；`icon` 换名字，`iconVariant` 切字重。`bgColor` / `iconColor` 分别只改圆底和字形，字面值，浅底对比度由业务保证。`icon` 插槽替换整个图标圆，内容自己带尺寸和颜色；`showIcon=false` 只关掉内置图标。
- 提示页尺寸三档：图标圆 56 / 72 / 88、字形 28 / 36 / 44、标题 17 / 20 / 26（行高 24 / 28 / 34）、说明 13 / 15 / 17（行高 20 / 22 / 24）；动作 40 / 48 / 48，内边距 16 / 24 / 24。标题和说明都居中，文案列最大 360，动作列最大 320。
- 提示页动作上下排、等宽：主要操作实心，辅助操作浅底，两个都默认跟随 `type`；`default` 页面回落到 `primary`。`primaryType` / `secondaryType` 分开覆盖，`primaryLoading` / `secondaryLoading` / `primaryDisabled` / `secondaryDisabled` 原样交给 `vx-button`，加载和禁用不抛 `action`。
- 提示页点击只抛 `action(role)`，role 是 `primary` / `secondary`；路由、请求、埋点和结果页跳转由业务处理。默认插槽替换标题和说明，`extra` 插槽放在说明和动作之间，用来补订单号、金额、会员有效期这类补充信息。
- 提示页 `fill` 让整块撑满父级剩余高度并垂直居中，父级要是纵向 flex，并用最小高度占满一屏，不要写死高度；内容高出时组件不收缩，页面从顶滚到。不传 `fill` 时留在文档流，高度由内容撑开。页面级结果一屏只放一个，导航栏用 `vx-navigation-bar` 或原生导航，不要把标题栏塞进组件。
- 提示页不画外框、卡片底和阴影，按钮以外的区域不接管点击；文案要能独立说明结果，不能只靠图标和颜色。说明可以换行，长内容由页面滚动，不截断成省略号。
- 吸顶容器 `vx-sticky` 用 `scrollTop` 驱动：未吸顶时留在文档流，吸顶后改 `fixed` 并补一个等高占位。App 不支持 `position: sticky`，三端共用这一套行为，不要为了 Web 单独退回 CSS sticky。
- 吸顶条贴住页面内容区顶部，Web 自动避开导航栏；`offsetTop` 在安全区外再往下，单位 px，不是滚动容器自己的 `top`。吸顶时保持原来的横向位置和宽度，放进卡片时按卡片内容宽固定。
- 吸顶条未吸顶时透明、不加内边距，外观交给默认插槽；吸顶后才铺 `surface` 底和底部 1px `border` 分割线，`shadow` 换成 `--vx-shadow-md`。`bgColor` 是字面值，未吸顶也生效，对比度由业务保证。
- 吸顶条是容器不是控件：只放标题、页签和状态，文字沿用正文档位，不借用 `--vx-font-control-*`；输入框、按钮和主操作放进 `suffix`。组件不抛 `click`。
- `suffix` 插槽承载吸顶条后面的内容，决定吸到哪里结束；滚到末尾时容器底边把条顶出去，不跳高度。不传或传空 `suffix` 时一直吸到页面末尾。
- 吸顶条的 `change` 在状态切换时抛布尔值。挂载量不到时，第一次滚动再补测一轮；已经量成功后滚动不再改吸顶线。内容变高后由业务调 `refresh()`，占位高度才会更新。`offsetTop` 变化时组件自己重测。
- 吸顶条会离开文档流，不要放进 `position: fixed` 浮层、带 `transform` 的容器或原生 `list-view` 的 sticky 结构，这些会改掉 `fixed` 的坐标原点。
- 同一屏不要叠两个不带 `suffix` 的吸顶条；分段吸顶时每段各用一个带 `suffix` 的 `vx-sticky`，让上一段先复位。
- 导航栏 `vx-navigation-bar` 是页面骨架：`title` 居中，`back` 显示内置返回箭头，默认插槽替换标题，`prefix` 替换返回区，`suffix` 放右侧动作，`extra` 在标题行下面再排一行。组件只抛事件，不做路由跳转。
- 固定模式默认打开，并在文档流里补一个等高占位，页面不需要自己算高度；头图要压到导航栏下面时关掉 `placeholder`，让内容从屏幕顶部开始。
- `statusBar` 默认打开，用 `--uni-safe-area-inset-top` 为状态栏留白；页面使用 `navigationStyle: custom`。嵌在原生导航下面或放进卡片时关掉，避免多出一截。
- 标题 17 / 24 / 600、单行省略；内置返回用 `chevron-left` 的 `lg` 22，热区 44；`color` 同时改标题和返回图标，插槽内容自己带颜色。
- 背景用 `bgColor` 传颜色或渐变，不传时用 `surface`；`transparent` 让背景始终透明，适合头图。自定义颜色是字面值，亮暗主题由业务保证。
- 滚动渐显用 `fade` + `scrollTop`：透明度从 0 增到 `maxOpacity`，滚过导航栏宽度 × `scrollRatio` 到位；`change` 回传 0–1，业务据此切换标题颜色。
- 分割线和阴影只在背景透明度到 0.85 以上时出现；`divider` 默认关闭，`shadow` 用 `--vx-shadow-md` 并代替分割线；透明和渐显初期都不画。
- 固定层级默认 20，高于吸顶条 10、低于消息提示 1010；固定时导航栏挂在页面根节点，和滚动容器平级，不放进 `scroll-view`、卡片、带 `transform` 的容器或原生 `list-view` 的吸顶结构。关掉 `fixed` 后可以留在文档流和卡片里。
- 小程序右上角胶囊由组件让出，右侧动作可用宽度会变窄；更多操作放 `extra`。`extra` 内容异步变高后调 `refresh()` 重新占位。
- 导航栏只承载标题、返回和少量状态，不放主操作、长表单和第二个导航栏；页面级 tabBar 仍由 tabBar 或页签承载。
- 状态栏 `vx-status-bar` 是页面顶部的系统状态栏区域：默认取 `--uni-safe-area-inset-top` 留高并铺 `surface` 底色，系统时间、信号和电池由平台绘制，组件不画前景。导航栏页面用 `vx-navigation-bar` 的 `statusBar`，不要再叠一只状态栏。
- `height` 传数字覆盖系统高度，0 表示跟随，超过 200 按 200；`bgColor` 是字面值，接收颜色、渐变和 `var(--vx-color-*)`，不传时用 `surface`。`transparent` 只留高度不画底色，头图和地图可以从屏幕顶部落下来。
- `fixed` 时默认用 `placeholder` 在文档流补同高，滚动内容从占位下方开始；`:placeholder="false"` 让条压在内容上，首屏内容用 `ready` 的高度自己补间距。层级默认 20，和导航栏同档，挂在页面根节点。
- 默认插槽放自定义顶带，左右各留 16，横屏再让开左右安全区；`align` 控制靠左、居中、靠右。App 上系统状态栏会盖住这块内容，只用于 Web、桌面壳和隐藏系统状态的页面。
- `fade` 按 `scrollTop / (条宽 × scrollRatio)` 把底色从透明推到 `maxOpacity`，默认 0.3；背景单独一层，插槽内容不跟着淡，`transparent` 时不生效。
- `ready` 在挂载后回传 `height` / `statusBarHeight` / `windowWidth` / `windowHeight`，`height` 变化或调 `refresh()` 后重测再抛。旋转、分屏和异步布局后调 `refresh()`。
- 状态栏不加圆角、描边、阴影和动画；固定条不放进 `scroll-view`、卡片或带 `transform` 的容器。系统前景颜色在 `pages.json` 的 `navigationBarTextStyle` 或系统配置里设置，组件不改这一层。
- 页面容器 `vx-page` 是 Pro 的组合件：把状态栏、导航栏、滚动区、下拉刷新、触底加载、tabbar 和安全区收成一件。顶栏在文档流里（`vx-navigation-bar` 开 `statusBar`、关 `fixed`），和滚动区是同级兄弟，所以不需要 `fixed`，也不和吸顶条抢层级。
- 默认插槽的作用域是 `{ navHeight, bottomInset }`：`navHeight` 是导航栏内容行高度，不含状态栏留白，直接当 `vx-sticky` 的 `offsetTop`；`bottomInset` 是 tabbar 与安全区叠完的底部高度。滚动距离走 `@scroll`，已经取整，iOS 回弹的负值按 0。吸顶自己订阅这份值，不从插槽里拿，避免整页插槽每帧重建。
- 底部占位在滚动区外面：`tabbar` 预留 `--vx-tabbar-height-md` 56，`safeArea` 再叠 `--uni-safe-area-inset-bottom`；组件量一次实际高度回填 `bottomInset`，量不到时按 56 + 系统底部插入值兜底。两者可以叠加，最后一屏内容不会被盖住。
- 返回默认走组件的返回热区：栈底自动隐藏；点击先抛 `back`，再调 `uni.navigateBack`。业务要拦截跳转就传 `:back="false"` 自己画，不要既开 `back` 又监听 `back` 里再退一次。
- 下拉刷新用 `scroll-view` 的 `refresher-enabled` / `refresher-triggered` / `@refresherrefresh`，不写自定义手势；用户下拉时组件把 `v-model:refreshing` 写回 `true`，请求结束用 `finishRefresh()` 或父级写 `false` 收起。不支持 refresher 的平台把 `scroll` 设成 `false`，改用 `pages.json` 的 `enablePullDownRefresh`。
- 触底加载由 `@scrolltolower` 驱动，`lower-threshold` 固定 80。抛出 `loadmore` 前先把本地加载态锁上，等 `finishLoadMore()` 或 `loadingMore` 变成 false 再放开；`noMore` 和 `finishLoadMore(true)` 的到底锁也会拦住。停在底部不会连抛。尾部用 `vx-loadmore` / `vx-nomore`，两个状态互斥，不跳高度。
- `scroll=false` 时不包滚动容器、不锁高，中间交给默认插槽，整页跟着页面滚；`refresh` / `loadmore` / `@scroll` / `scrollToTop` 都不生效。要在中间放自己的滚动容器，给它确定高度；内容里有输入框时，软键盘弹起后的可视高度按平台行为。
- 页面容器不接管路由、不做转场、不改 `pages.json`，也不内置吸顶、tabbar 和登录拦截；这些分别交给 `vx-sticky`、`vx-tabbar` 和业务。
- 页面容器的 `bgColor` / `navBgColor` / `color` 是字面值，`navBgColor` / `color` 原样透传给导航栏；`extra` 插槽内容自己带尺寸和颜色。页面根节点要带 `vx-theme-light` / `vx-theme-dark`，令牌都挂在主题类上。
- 导航栏第一次 `ready` 可能早于样式落上，高度会偏小；`vx-page` 不直接采用这个瞬态值，改量顶栏外层，内容行下限 48。Web 上的返回热区带 `role="button"`、`aria-label="返回"` 和 `tabindex="0"`，Enter / 空格也能触发。

- Web 端指针：可点击控件用 `pointer`，禁用态用 `not-allowed`，加载态用 `progress`；原生端忽略该属性。
- 弹出层 `vx-popup` 是通用浮层：`placement` 有 `top` / `bottom` / `left` / `right` / `center`，默认 `bottom`；`show` 支持 `v-model:show`，`ref` 上暴露 `open()` / `close()` / `cancel()` / `toggle()`。
- 上下贴边默认占满宽度，`maxWidth` 可把面板收到指定宽并横轴居中，宽屏左右露出遮罩；不传时仍是 100%。`height` 可传。左右贴边占满高度、默认宽 280（`--vx-popup-width`），`width` 可传；居中按内容宽度排、最宽 480（`--vx-popup-max-width`），四周留 24。`width` / `height` / `maxWidth` 必须带单位。
- 面板只圆朝向页面的那一侧（`round` 默认 `lg` 12，四档 `none` / `sm` / `md` / `lg`），贴住屏幕的一边保持直角；居中四角全圆。
- 面板用 `surface` 底，不加阴影也不加描边；遮罩用 `--vx-color-mask`，只压页面，不压面板。居中面板四周加 1px `border`。`maskColor` 只改遮罩，是字面值。
- 组件不内置内边距、标题栏、动作列表和滚动容器：内容由默认插槽给，自己留 16；超过一屏时先给 `height`，再由内容里的 `scroll-view` 接管滚动。
- `closable=true` 时关闭叉在内容上方单占一行，行高 44、图标 18；贴顶的面板不会把关闭叉顶进状态栏，也不压住内容。
- 点可关闭的遮罩收起并抛 `close`，同时抛 `click-mask`；`maskClosable=false` 时点遮罩只抛 `click-mask`，不关闭也不抛 `close`。`close()` 只收起，不抛 `close`。`cancel()` 收起并抛 `close`，给页面 `onBackPress` 用。
- 安全区由面板内边距承担：上下贴边让开所在边的状态栏或手势条，`safeArea=false` 可以关掉；左右面板两头都让，横屏的左右安全区每档都让；居中靠四周的 24。
- 只过渡 `transform` 和 `opacity`：贴边面板从所在边滑入，居中面板只淡入。`duration` 默认 220、`0` 直接切换；关闭动画走完只加隐藏 class，第一次打开后根节点常驻，关闭只切 `display: none`，原生子组件不销毁；原生层在 App 上反复创建会整层不画。关闭中再打开会从当前位置回到终点。
- 层级默认 1000，和抽屉、操作菜单同档；低于数字键盘 1005、消息提示 1010、弹框 1020、加载浮层 1050 和轻提示 1100。组件不自动叠加，嵌套时由业务传 `zIndex`。
- 挂在页面根节点，和滚动容器平级；不要放进 `scroll-view`、卡片或 `fixed` 容器。同一屏只开一个。
- Web 上遮罩标 `aria-hidden`、关闭叉带可读标签，内容区不抢焦点。滚动锁只在 Web 生效：打开时给页面根节点加 `.vx-scroll-lock`，收起后移除；App 不锁页面滚动，小程序只拦遮罩上的手势。
- 弹出层只承载内容，不做动作列表、标题栏、跟手拖动、滚动容器和路由；这些用操作菜单、抽屉和弹框。
- 抽屉 `vx-drawer` 从屏幕一条边滑出：`position` 有 `left` / `right` / `top` / `bottom`，默认 `right`；`show` 支持 `v-model:show`，`ref` 上暴露 `open()` / `close()`。
- 左右抽屉宽 280（`--vx-drawer-width`）、占满高度；上下抽屉高 45%（`--vx-drawer-height`）、占满宽度。`width` 只改左右宽度，`height` 只改上下高度，都要带单位；面板最大不超出整屏。
- 面板贴边，只圆朝向页面的两角（`lg` 12），用 `surface` 底，不加阴影；遮罩用 `--vx-color-mask`，只压页面。`bgColor` 只改面板底色，是字面值。
- 头部由 `title`、`closable` 和 `prefix` / `extra` 插槽组成，都没有时不渲染。标题 17 / 24 / 600 单行省略，头部高 52（`--vx-overlay-head`），底部一条 1px `divider`。
- `closable=true` 时右上角显示关闭叉：热区 44（`--vx-list-height-sm`）、图标 18 用 `text-secondary`，点击收起并抛 `close`，和可关闭的遮罩走同一个出口。
- 正文是唯一的滚动区，用 `scroll-view` 撑满头尾之间的高度；头部和底栏固定。默认四边内边距 16，`bodyPadded=false` 让列表、图片贴边。
- `suffix` 是固定底栏，上边 1px `divider`、内边距 12 / 16，放 1–2 个动作；不承载主导航和长表单。
- 点可关闭的遮罩收起并抛 `close`；`maskClosable=false` 时点遮罩不关闭也不抛 `close`，必须保留关闭叉或内容里的关闭按钮。`close()` 只收起，不抛 `close`。
- 四个方向各有自己的安全区：左右抽屉让开顶部、所在边的侧边距和底部手势条，上下抽屉让开顶部或底部，正文由面板内边距承担。
- 同一屏只开一个抽屉；抽屉挂在页面根节点，和滚动容器平级，不放进 `scroll-view`、卡片或 `fixed` 容器。
- 层级默认 1000，和操作菜单、日期时间选择器、日历弹层同档；低于消息提示 1010、弹框 1020、加载浮层 1050、轻提示 1100。
- 遮罩淡入、面板从所在边滑入，走两帧式 `transform` 过渡，App 和 Web 都有进退场。抽屉第一次打开后根节点常驻，关闭只切 `display: none`，原生子组件不销毁；原生层在 App 上反复创建会整层不画。正文 `overscroll-behavior: contain`，滚到底不带动页面。
- 抽屉只承载内容，不做路由、请求、焦点接管和嵌套浮层；需要确认用弹框，需要动作列表用操作菜单。
- 气泡弹框 `vx-bubble-popup` 是贴着触发元素的轻量浮层：默认插槽是触发区，`items` 是菜单，`content` 是单段文案，`extra` 是自定义面板。`show` 支持 `v-model:show`，`ref` 上暴露 `open()` / `close()` / `toggle()` / `refresh()`。触发区保持自身宽度，不用 `block` 按钮铺满整行；要靠右或居中，用外层 flex 容器排触发区。
- 打开时用 `createSelectorQuery` 量触发区和面板，按 `placement`（top / bottom / left / right）、`align`（start / center / end）和 `offset` 算落点；气泡用 `position: fixed` 挂到页面层，外层 `view` 的 `overflow: hidden` 裁不到它。祖先带 `transform` 时 fixed 的参考系会变，要避开。
- 一侧放不下、对面放得下时自动翻到对面；两侧都放不下时把气泡夹在屏幕内（离边 8），箭头跟着触发区中心走并在气泡里收口。异步内容落定后调 `refresh()` 重测。
- `surface` 面板用 `surface` 底、1px `border` 描边、`md` 圆角和 `--vx-shadow-md`，尾巴用旋转 45° 的方块加 1px 描边；`solid` 面板用语义实心底配 `on-*`，不加描边；inline 聊天气泡去掉阴影。
- 菜单项高度沿用列表行 `sm` 44，左右内边距 12，图标 18、文案 15 / 22 / 500、右侧短值 13 / 20 次要色，勾 14；面板四周留 4，菜单项圆角 6。
- 菜单项只放一行，长文案省略；`type` 只有 default / primary / danger，`surface` 下分别用正文色、`primary-pressed`、`danger-pressed`；`solid` 下不按项染字。
- `divider` 只在菜单项之间画 1px 线，不画首尾；`solid` 的分隔线用前景色降透明度。
- `outsideClosable` 默认打开：透明点击层收起并抛 `close`；`mask` 打开时用 `--vx-color-mask` 压暗页面。`close()` 只收起，不抛 `close`。关掉且不铺遮罩时不挂点击层，页面仍可操作；滚动后 fixed 气泡不会跟随触发区，需要时调 `refresh()` 或先收起。
- 层级默认 1000，和操作菜单、抽屉同档，低于消息提示 1010、弹框 1020、加载浮层 1050、轻提示 1100。
- inline 模式是行内聊天气泡：不渲染触发区，默认插槽或 `content` 是内容，`prefix` / `suffix` 放头像，`align` 把整行推到左或右，`placement` 决定箭头贴哪条边；`show` 和方法只对 popover 生效，要隐藏整条用 `v-if`。
- 对话气泡内容 15 / 22 / 400，最大宽度 260（`--vx-bubble-chat-max-width`），内边距 12 / 16；菜单最小宽度 120、最大 280（`--vx-bubble-min-width` / `--vx-bubble-max-width`）。
- 尾巴高 7px，底边 14px，向外 7px；旋转方块边长 9.9px，1px 描边和面板同色同粗。`surface` 面板在尾巴底部补 13×1 同色接缝（左右各压 0.5px），面板描边不会从尾巴底下横穿出来。App 没有 calc，正负值和尺寸各用一个令牌（`--vx-bubble-arrow` / `--vx-bubble-arrow-base` / `--vx-bubble-arrow-seam` / `--vx-bubble-arrow-tip` / `--vx-bubble-arrow-out`），改一处要一起改。
- Web 上量完位置后淡入并 `scale(0.96 → 1)`，5.26 的 App 直接出现；页面滚动、点外部、Esc 收起；关闭即移除，不做退场。
- 同一屏只开一个气泡菜单；不要在一个触发区上叠两个气泡，也不要和操作菜单、弹框同时出现。菜单 2–6 项，取消/关闭出口由外部点击、触发区或业务方法提供。
- 气泡只承载菜单项、短消息和补充内容；不放表单、长段落和页面主操作。对话里的头像由 `prefix` / `suffix` 传入，组件不保存选中值。
- 菜单项是 `view` 组合，Web 端不进入 Tab 顺序；触发区必须自己是按钮或可聚焦入口，菜单项文案要能独立说明行为，危险操作在文字里写清后果。
- 栅格 `vx-row` 是排列层，只管 `gutter` / `lineGutter` / `justify` / `align` / `wrap`；`vx-col` 是占宽层，只管 `span` / `offset` / `push` / `pull` 和断点。两者都不画底色、描边、圆角、阴影和浮层层级，点击由列里的内容承载。
- 行不写宽度，靠 `align-self: stretch` 撑满纵向容器，列间距的负外边距要靠它抵回来；放进横向 flex 容器时行按内容宽度排，需要定宽时在外面包一层。
- 列间距的一半铺在列的左右内边距上，行用等量负外边距抵掉外侧半格；列宽（`border-box`）包含内边距，间距只改内容宽度、不变占的份数。第一列和最后一列的内容仍贴住父级内边距。
- 行间距只在换行后的列上出现，第一行由行的负上外边距抵掉；`lineGutter` 默认 0，多行网格要和 `gutter` 一起传。两者都先四舍五入，0 和负数不铺，超过 48 按 48。
- `span` 取 1–24，默认 24；`0` 表示这一档不显示，负数按 0，超过 24 按整行，带小数的四舍五入取整。
- `offset` 上限是 `24 - span`，写超了按上限算；`push` / `pull` 只改视觉位置、不改变占位，同时传时取净值（`push` 向右、`pull` 向左）。
- 断点用 `sm` / `md` / `lg` / `xl` 四个 props，分别从 576 / 768 / 992 / 1200 起往上覆盖，没传（`-1`）的那一档保持上一档；断点只改 `span`，`offset` / `push` / `pull` 在所有宽度上同一个值。
- 蒸汽模式没有 `@media`：窗口宽度由 `vx-row` 用 `uni.getWindowInfo()` 量一次，写了断点的列才读，在页面 `onResize` 时重算。没写断点的列不跟窗口重排。单独使用的列自己量。不按父级宽度判断，也不在组件里挂 `window` 监听。
- 默认 `align="stretch"`，同一行的列等高；列不写固定高度，行高由内容决定，列里的卡片要等高还要自己撑满（`flex: 1`）。
- 分隔列表 `vx-divide-list` 把 2–5 个同级概览等宽排成一行：`items` 按顺序渲染，每项 `value` 在上、`label` 在下，项间用 1px 竖线分开。数据由业务传入，组件不排序、不分组、不请求。
- `value` 支持数字和字符串，`0` 也显示；`image` 存在时替换数值，按 `aspectFit` 放 32 / 40 / 48 的小圆角方框。两者都没有时不占数值行；`label` 单行省略，建议 2–4 个字。
- 行高 56 / 70 / 84 是下限，图片或默认插槽更高时由内容撑开，同一行所有格子等高；格子等宽、上下居中，左右内边距 4 / 8 / 8，长说明在自己的格子里省略。
- `divider` 默认打开，1px 竖线按档位行高的 `dividerHeight` 百分比算长度并垂直居中，默认 60，范围 10–100；最后一项不画，`divider=false` 去掉全部竖线。
- 角标复用 `vx-badge`：数值的角标放在数值右侧的上标位，左缘压住数值右缘 2px，不盖住数字；图片的角标压在图片右上角，圆心落在角上。`badge` 小于 1 不显示，`badgeText` 优先于计数，`dot` 优先于两者，`badgeMax` 默认 99。角标档位跟 `size`：sm / md 16 高、lg 20 高，圆点 6 / 8；没有数值和图片时不单独占位。
- `clickable` 默认打开：整格是热区，点击抛 `click(index, item)`；按下铺 `surface-pressed`，自定义 `bgColor` 时改整格 0.8 透明度。`clickable=false` 只展示；整条 `disabled` 和单项 `disabled` 都淡到 0.5，不抛事件。
- `bgColor` / `valueColor` / `labelColor` / `dividerColor` 和每项的 `valueColor` / `labelColor` 各只覆盖一处，每项优先于全局；都是字面值，禁用时数值和说明颜色不生效，整格内容变淡，整条底色保留、竖线随整格变淡。默认数值 `text`、说明 `text-secondary`、竖线 `divider`、整条 `surface`。
- 默认插槽拿到 `item` / `index`，替换整格内容；竖线、点击、按下态和禁用仍由组件处理，插槽内容自己带尺寸、颜色和间距。需要字体图标、头像或两行富内容时用它。
- 组件不画外框、圆角、阴影和外边距，宽度跟随父级；放进卡片时由卡片负责圆角和裁切，要透明就把 `bgColor` 写成 `transparent`。Web 端是 `view` 组合，不进入 Tab 顺序。
- 选择框 `vx-select` 是底部弹层：`show` 支持 `v-model:show`，`options` 按顺序渲染，单选用 `v-model`、多选加 `multiple` 和 `v-model:values`；`ref` 上暴露 `open()` / `close()`。挂在页面根节点，和滚动容器平级。
- 单选的 `v-model` 是字符串，空串表示没有选中；多选的 `v-model:values` 是字符串数组，空数组表示没有选中。两个模型不混用，`multiple` 在组件生命周期里保持固定。
- 选项固定 `label` / `value` / `image` / `disabled`。`value` 省略或为空串时用 `label`；同一组里的值要唯一。`image` 放在文案左侧，按 `size` 取 28 / 32 / 36 的方框；没有字体图标入口。
- 点选只改草稿：单选重复点当前项不重复抛 `change`，多选按选项顺序收集结果；点确定才写回模型并抛 `confirm(result)`。取消、关闭叉、遮罩和 `close()` 都收起且不动已提交的值。
- `result` 有 `values` / `texts` / `indices` / `options` / `text` 五个字段，前四个逐项对应，`text` 多选按 `separator`（默认 `', '`）拼好。只取展示文本时直接用 `result.text`。
- 单选必须先选到一项才能确定；多选允许空选，用来清空。没有可选项时确定一直不可点，列表换成 `emptyText` 空状态，面板高度按两行留。
- 标记位置用 `placement`：`start` 在文案前，`end` 推到行尾。单选标记固定正圆，多选标记固定小圆角方形；`type` 决定选中填充，`warning` 取 `warning-pressed`、`default` 用正文色。确定按钮走 `confirmType`，默认 `primary`。
- `max` 只拦多选的新增：`0` 表示不限，取消勾选不受限；到上限后点未选项不改草稿、不抛 `change`，只抛 `exceed(max)`，未选项不转灰。父级传入的数组超过 `max` 时照常显示，不再追加。
- `maxRows` 决定列表最多显示几行，默认 6，收在 2–10；列表高度按行高算，窗口矮时再收在窗口内，超出后内部滚动。打开时把第一项选中项滚到可视区中间。
- `color` / `borderColor` / `checkColor` 分别只改选中填充、未选中描边和对号，都是字面值、禁用时不生效；`titleColor` 只改标题，`maskColor` 只改遮罩。要跟主题就传 `var(--vx-color-*)`，亮暗两套各检查一次对比度。
- 单项 `disabled` 只停这一项：文字和对号转 `disabled-text`，选中项保留灰色填充和对号，图片压到 0.5，仍留在列表里；点它不改草稿也不抛事件。没有整组 `disabled`，要停用入口就别打开弹层。
- 选择框只承载一组短选项和一次确认，不放搜索、表单、分页、长说明和第二层操作；选项多到要搜索时改用页面或独立的选择页。同一屏只开一个选择框。
- 选择框是 `view` 组合，Web 端不进入 Tab 顺序；入口必须自己是按钮或可聚焦行，选项文案要能独立说明选的是什么。需要键盘完整操作时由外层提供可聚焦入口或改用原生表单控件。
- 文本 `vx-text` 是正文和说明的基础展示件：`text` 接字符串或数字，默认 15 / 22、正文色、400、按内容宽度排；`block` 铺满父级。同一行多段文字各用一个实例，父级用 row + wrap，间距由父级给。
- `type` 有 `default` / `secondary` / `primary` / `success` / `info` / `warning` / `danger`；`secondary` 是次要灰，其余语义色只表达状态，warning 文本用 `warning-ink`。`color` 是字面值，优先于 `type`，`disabled` 盖过两者。
- `size` 三档 13 / 15 / 17（20 / 22 / 24），`weight` 四档 400 / 500 / 600 / 700；正文不借控件字号，页面级 28 / 34 展示标题不放进组件。
- `align` 只在 `block` 或确定宽度下生效；`decoration` 只有 `underline` / `line-through`。组件不画底色、描边、圆角、阴影和外边距。
- `maxLines` 0 不限、1 单行省略、2 以上多行截断；截断需要确定宽度，只影响显示，`copy` / `click` 拿完整文本。
- `format` 有 `phone` / `amount` / `bank-card` / `id-card`；只传数值本身，标签放外面。手机号只处理 11 位，金额默认 `¥` 和 2 位小数，银行卡每四位分组，身份证保留前 6 后 4。
- `copyable` 长按复制完整文本，成功后抛 `copy`；`selectable` 走原生选择；同时打开时按复制，不再打开选择。Web 桌面端没有长按，要另给按钮或选择入口。
- `clickable` 按下变淡并抛 `click(text)`，拦下这一笔事件；`disabled` 转 `disabled-text`，不抛 `click` / `copy`，也不可选择。可点击文本不是按钮，键盘入口由外层提供。
- 链接 `vx-link` 是正文级的文字入口：`href` 接 http(s)、站内路径、`tel:` 和 `mailto:`，`text` 不传时显示 `href`，默认插槽替换整段文案；`prefix` / `suffix` 放图标，与文案留 4px。
- `href` 为空时只展示，不挂指针也不抛 `click`；`disabled` 转 `disabled-text` 并停下点按，两者都不拦外层点击。可点时拦下这一笔，不触发外层列表行或卡片。`disabled` 只灰化组件渲染的文案，插槽内容自己转灰。
- Web 用临时 `a` 标签：http(s) 和站内路径新开标签页并带 `noopener noreferrer`，`tel:` / `mailto:` 交给系统；不用 `window.open`，避免被当成没有用户手势的弹窗。
- App 和小程序不能直接打开外部网页：默认复制链接并弹提示；`tel:` 调拨号，失败退回复制；`mailto:` 复制邮箱，去掉前缀和 `?subject=` 参数。需要 App 内直接打开浏览器时用 `action="none"` 接自己的 openSchema 插件或 webview 页。
- `action` 三档：`auto` 按平台处理，`copy` 只复制，`none` 只抛 `click`。`click` 抛原始 `href`，`copy` 在写入成功后抛实际复制的链接、号码或邮箱。
- `type` 默认 `primary`，`secondary` 只用于正文里的次要入口；`size` 三档 13 / 15 / 17（20 / 22 / 24），`weight` 四档 400 / 500 / 600 / 700，默认 `medium`。`color` 是字面值，优先 `type`，禁用时不生效。`secondary` 链接和正文颜色接近时补 `underline`，可点性不能只靠颜色。
- `underline` 默认关闭，跟随文字色；`tips` 留空时按地址类型给「链接已复制」「号码已复制」「邮箱已复制」，传 `action="none"` 不弹提示。
- 链接不截断文案，长地址用短文案；Web 端是 `view` 组合，不进入 Tab 顺序，需要键盘访问时由外层按钮或链接承载同一动作。
- 数字键盘 `vx-keyboard` 是十二格固定排布：1–9、0、退格和左下角动作键。`show` 支持 `v-model:show`，`ref` 暴露 `open()` / `close()` / `shuffle()`；`mode="inline"` 时常驻，不看 `show`。按键只抛 `press(key)` / `backspace` / `clear` / `cancel`，组件不保存值、不判断满位、不自动收起。
- `action` 三档：`cancel` 收起并抛 `cancel`，`clear` 只抛 `clear`，`none` 只留一格浅底。`cancelText` / `clearText` / `backspaceText` 改三处文案，退格文案空串回落到 `⌫`。
- `random` 只打乱 1–9，0、退格和动作键留在原位；打开（含以 `show=true` 挂载）、改 `random` 和调 `shuffle()` 时重排，inline 模式挂载时也先排一次。打乱是为了防肩窥，不改变按键语义。
- 标题和说明居中，默认插槽放在标题和按键之间：密码位、忘记密码这类内容由调用方带间距，左右和底部内边距由组件给。标题、说明都为空且没有插槽时不渲染头部，也不画按键上方那条 1px 分隔线。
- 数字键盘的 sheet 挂在页面根节点，和滚动容器平级；遮罩和面板接住点击和拖动，背后页面不跟着滚。inline 模式直接放在页面底部，不拦页面滚动，底部安全区由面板内边距承担。`disabled` 把按键转灰，不抛按键事件，但可关闭的遮罩和 `close()` 仍能收起，且不抛 `cancel`。
- 数字键盘输入框 `vx-keyboard-input` 用 `v-model` 绑数字字符串，`length` 收敛到 1–8：只留 0–9，前导 0 保留，满位后点数字不再变化。下层键盘由 `vx-keyboard` 渲染，sheet / inline、动作键、随机排布和退格都与它一致；`ref` 也转发 `shuffle()`，规则和 `vx-keyboard` 相同：0、退格和动作键不动，没开 `random` 也可以调。
- 满位抛一次 `complete`，程序化赋值不抛；`input` 每次改值都抛。组件不自动提交、不自动收起、不判断对错；校验、请求和跳转由业务在 `complete` 里做。
- 密码位三态由组件算：下一位强调、已填、空位；满位后不再高亮任何一位。`password` 只改显示，模型和事件仍是数字；`invalid` 只改颜色，`shake()` 只补抖动，两者不互相触发，抖动结束后值不变。
- 清空键和 `clear()` 走同一条出口：先抛 `clear`，有值时再抛 `input('')`，不动 `show`。sheet 模式下取消、遮罩和 `close()` 只收起，不清空值；inline 只抛 `cancel`；清不清由业务在 `cancel` 里决定。
- `extra` 插槽放在密码位和键盘之间，承载忘记密码、指纹解锁这类入口；行高、热区和颜色由内容自己带，组件只给左右内边距。标题用 `title`，说明用 `description`，两者都为空时不渲染头部。
- 数字键盘和数字键盘输入框都只做整数密码、PIN 和短数字：不内置标题以外的错误文案、倒计时、提交按钮和指纹校验。金额、数量用 `vx-number-box`，验证码分格用 `vx-code-input`，要系统键盘或长数字时用 `vx-input`。
- 树型菜单 `vx-tree-view` 用 `nodes` 传层级数据，组件只负责可见行的展开、选中和勾选：不排序、不分组、不请求、不虚拟化，外层负责滚动，分组和过滤结果由业务准备好再传。
- 节点固定 `id` / `label` / `children` / `icon` / `iconExpanded` / `image` / `imageExpanded` / `expanded` / `disabled`；`id` 同时是选中、展开和勾选用的键，同一棵树里必须唯一，省略时按位置生成。节点级的 `expanded` 只作初始状态。
- `v-model` 是选中节点的键，`v-model:expanded` 是展开名单，`v-model:checked` 是勾选集合。`select` 每次点行都抛，`change` 只在键真的变化时抛，`toggle` 只报用户点按，`check` 回传完整集合和按树顺序排列的节点。
- 默认点整行同时展开和选中，点箭头只展开，点勾选框只改勾选；`toggleOnClick` 管第一组关系，`selectable` 管选中。选中不可见于数据时组件不报错，模型里的键仍保留。
- 展开状态先按节点的 `expanded` 和 `defaultExpandAll` 播种一次，之后由 `v-model:expanded` 接管；数据异步到达时，等第一次非空再播种。`accordion` 让用户展开时同一层级只留一个展开项，受控名单、初始播种、`expandTo()` 和 `expandAll()` 不强制它。
- `checkable` 打开时勾选框排在箭头和图标之间。`cascade` 打开时，勾父级写整棵子树、勾子级回算所有上级；半选只落在显示上，不写进 `checked`。`cascade=false` 时每行只改自己的键。停用的行只停自己，级联仍会把勾选写进去。
- 图标优先取展开态，图片优先于字体图标；图片失败回落到节点图标，再回落到 `folder` / `file`。没有图标和图片的节点不留图标位，`showIcon=false` 时全部收起。扩展图标要先引入 `icons-extend.css`。
- `showLine` 从有后续兄弟的上级中心起画，到最后一项的中心停，最后一项不会多出下半截；`indent` 取 1–40 覆盖档位，层级只靠缩进和参考线表达，不缩字号。
- 选中行用 `type` 的 `*-soft` 浅底和 `*-pressed` 文字；`color` / `activeBgColor` / `textColor` / `iconColor` / `lineColor` / `bgColor` 各改一处，都是字面值。禁用时整行淡到 0.5，勾选和展开状态保留。
- 组件提供 `expand()` / `collapse()` / `toggle()` / `expandAll()` / `collapseAll()` / `expandTo()`，方法只改展开名单，不抛 `toggle`；`expandTo` 用来在异步加载子级或外部跳转后把节点带到可见区。
- 默认插槽替换行内容，`icon` / `extra` / `prefix` / `suffix` 补图标、行尾动作和头尾内容；箭头、勾选框、缩进和点击始终由组件负责。默认插槽拿到 `node` / `level` / `expanded` / `selected` / `checked` / `partial`。
- 树型菜单是 `view` 组合，Web 端不进入 Tab 顺序；需要键盘操作时由外层提供可聚焦入口。展开和勾选都不发请求，异步由业务替换 `children` 后再调 `expandTo()` 或写 `v-model:expanded`。
- 表格 `vx-table` 把列定义和数据行排成表头 + 数据行：`columns` 管顺序、宽度、对齐、排序、插槽和固定列，`rows` 的 `cells` 与列一一对应。数据由业务传入，组件不排序、不分页、不请求，也不做本地筛选。
- 单元格值统一用字符串，和 `vx-tree-view` 的节点、`vx-picker` 的选项是同一套约定；数字、金额和日期先由业务格式化，组件不猜类型，也不做千分位和货币转换。
- 行高沿用列表行 `--vx-list-height-*` 的 44 / 48 / 52，表头和数据行同高；字号用 `--vx-font-control-*` 的 14 / 16 / 18。`rowHeight` 覆盖行高，空态和加载态按它的 3 倍取高，最少 120。
- 列宽全定宽时按 `width` 排；只要有一列缺 `width`，缺的列按「剩余宽度 ÷ 缺的列数」补，下限 120。基准是表格自身宽度，量不到时退回窗口宽度；页面和卡片有左右留白时，按窗口宽分会把列撑出表格。
- 固定列用 `columns[i].fixed = 'left' | 'right'`，放在 `columns` 两端；左固定 / 中间滚动 / 右固定三段排布，固定列不参与剩余宽度均分，缺 `width` 时按 120。中间列分的是「表格宽 − 左固定宽 − 右固定宽」，三段表头和行高严格对齐。
- 固定段和中间段之间有一条 `border` 色 1px 竖线，`border=false` 时一起收掉；固定列不加阴影和渐变，照常支持对齐、排序、斑马纹、按下态、行点击和插槽，插槽只渲染一次。
- 超宽时表头和数据行在同一个横向 `scroll-view` 里一起滚；内层宽度按列宽之和（不够铺满时取视口宽）写死，滚到最右不露出空白。表格自己不垂直滚，纵向交给外层页面。不要给表格再包一层纵向滚动容器。
- 表头底色默认 `default-soft`，文案用正文色、600；排序中的列标题加到 700，表头底线用 `border` 色，排序箭头未选中用 `text-secondary`、选中方向用正文色。两个箭头紧凑叠放，整格仍是热区。表头不参与斑马纹。
- 数据行默认 `surface`；`stripe` 从第二行起隔行铺 `default-soft`，`border=false` 时斑马纹仍然保留。行间分割线用 `divider`，外框用 `border`，两者不要反过来用；最后一行不画分割线，底边由外框收口。
- 排序是受控的：点 `sortable` 列头按 asc → desc → 空 三态循环，只抛 `sort(columnIndex, order)`；组件不改 `sortKey` / `sortOrder`，也不重排 `rows`，重排由业务做。数字列由业务自己传 `align="right"`。
- `columns[i].slot=true` 的列走默认插槽，作用域是 `{ row, rowIndex, column, columnIndex }`；其余列直接渲染字符串。具名插槽只有 `extra`，放在表格右上角，用来放导出、筛选这类短操作。
- 空态是一行次要色文案，加载态是 `vx-loading`，两者都占表体位置且同高；表头保留，切换时不跳版。单元格默认单行省略，`ellipsis` 是 v1 的固定行为，不做成属性。
- 单选行、多选列、展开行、合计行、固定表头、虚拟滚动和列宽拖拽都不在 v1 内；需要分页时配合 `vx-pagination`，行多到要虚拟化时等后续版本，列表形态改用 `vx-list-view`。
- 表格是 `view` 组合，Web 端用 `role="table"` / `row` / `columnheader` / `cell` 语义，排序列头带 `aria-sort`；固定列拆成左 / 中 / 右三段后仍保留同样的角色和排序状态，固定段不重复挂插槽。行和排序列头按下有底色或变淡。Web 端不进入 Tab 顺序，需要键盘操作时由外层按钮或可聚焦入口承载同一动作。
- 虚拟列表 `vx-virtual-list` 只负责切片：`items` 用 `Array<any>` 原样收集，组件不读字段、不要求业务 key、不判断业务类型；行内容、背景和点击都由默认插槽给，作用域 `{ item, index }`。
- v1 只支持等高行：`itemHeight` 默认 60，等于 `--vx-list-height-lg`；所有行必须同高，行内容超出行高会被裁掉。不定高要测高回写，留给后续版本。
- 切片窗口是 `[start, end)`：`start = max(0, floor(scrollTop / itemHeight) - buffer)`，`end = min(total, ceil((scrollTop + viewHeight) / itemHeight) + buffer)`。顶部 spacer 高 `start × itemHeight`，底部 spacer 高 `(total - end) × itemHeight`，切片部分总高恒等于 `total × itemHeight`，尾部另算。
- `@scroll` 只在算出的 `start` 变化时写 `start` / `end`，窗口没变不 setState；不按 16ms / 32ms 定时器节流。切片 key 用 `index`，不用业务数据当 key，避免窗口变化时整片重建。
- 触底加载跟 `vx-page` 同一套语义：剩余不足 `buffer` 行时抛 `loadmore`，`loadingMore`、`noMore` 和本地到底锁拦住重复触发；尾部分别复用 `vx-loadmore` / `vx-nomore`，两个状态互斥。
- 空态：`items` 为空且 `loadingMore=false` 时整块居中显示 `emptyText`，不渲染 spacer；`loadingMore=true` 时先显示转圈，不先闪空文案。
- `scrollToIndex()` / `scrollToTop()` 先算目标 `scrollTop` 再写回受控值，目标按 `max(total × itemHeight - viewHeight, 0)` 夹住；同一目标连续调用交替写 ±1px，跳转期间锁住中间 `scroll` 事件，避免二次滚动、回弹和误触 `loadmore`。
- `height` 有值时固定容器高度，空串时 `flex: 1` 吃父级剩余高度；可视高从 `scroll-view` 自身测量，量不到时补试三次，之后可以调 `refresh()`。一个页面只放一个纵向虚拟列表，不再套第二个纵向滚动容器。
- 虚拟列表是 `view` 组合，Web 端根节点 `role="list"`、行 `role="listitem"`，不进入 Tab 顺序，也不劫持键盘；行内可点控件由插槽自己承载。
- 轮播图 `vx-swiper` 用原生 `swiper` 当底座：拖拽、回弹、循环和卡片边距交给平台，组件只做外框尺寸与圆角、指示器、标题条和点击；不自己写手势，跨端差异最少。
- `items` 三件事各管一处：`src` 决定这一屏走 `vx-image` 还是默认插槽，`title` 决定底部标题条，`key` 随 `change` / `click` 回传；`src` 为空时这一屏交给默认插槽，作用域 `{ item, index }`。
- 指示器四态 `dot` / `line` / `number` / `none`；`indicatorPosition` 四档 `auto` / `bottom` / `left` / `right`，`auto` 横向放底部、纵向竖排在右侧，左右两档把标记排成一列、`line` 转成竖条。只有一项时不渲染指示器，也不自动播放。`indicatorOutside` 把它们放到图片外面：底部落位是下面一排，左右落位是旁边一列；压在图里时按有没有标题条自动让位。
- 标题条是固定 `rgba(0, 0, 0, 0.45)` 暗层配白字，单行省略、左右各 12；不跟主题反色，也不铺渐变。`showTitle=false` 时整条不渲染。
- `card` 用原生的 `previous-margin` / `next-margin` 各 32，组件不自己算宽度；`vertical` 和 `card` 同时打开时按纵向渲染，开发环境提示一次。`circular` 只影响首尾衔接。
- 方法 `next()` / `prev()` / `goTo(index)` / `startAutoplay()` / `stopAutoplay()`：循环时首尾相接、不循环时走到端点停住，`goTo()` 先按下标夹住；三个切屏方法同样抛 `change`，埋点不用区分来源。
- 事件 `change(index, item)` 和 `click(index, item)` 都是下标在前，和 `vx-waterfall` 的 `(item, index)` 相反；`extra` 和插槽里的动作自己 `@click.stop`。
- 高度只认正数，0、负数和非法值回落到 160；`items` 变短时把当前下标夹回最后一屏，变长不动。`lazyLoad` 透传给 `vx-image`，uni-app x 的原生 swiper 没有这个属性。
- 轮播图是 `swiper` / `swiper-item` 组合，Web 端不进入 Tab 顺序；指示器和标题条只是视觉，键盘入口由外层给。
- 数字动画 `vx-count-to` 只做一次读数滚动：`value` 是目标、`from` 是起点、`duration` 是时长；不接图表、不做倒计时，倒计时用免费的 `vx-countdown`。
- 每帧只改一个 `text`，优先 `requestAnimationFrame`，没有就退回 16ms 定时器，两种都按 `Date.now()` 算进度；不做逐位滚动，也不切换数字字体。
- 格式化顺序写死：先按 `decimals`（0–2）定小数位，再只给整数部分插千分位，最后拼 `prefix` / `suffix`；负号始终在最前，`-0.00` 这类负零不带负号。
- 缓动三态 `linear` / `easeOut`（`1 - (1-t)^3`）/ `easeInOut`（标准两段）；`duration=0` 和 `value === from` 不排帧，直接落值后异步抛一次 `finish`。
- `autoplay` 只管挂载那一次：关掉时停在 `from`，等 `start()`；`value` 变化一律先停旧补间再从 `from` 重播，`reset()` 是唯一停在 `from` 而不抛 `finish` 的方式。
- 卸载、`reset()` 和下一次补间都会先取消排队的帧和定时器，并让 token 前进一格；已在回调里的那一帧直接退出，连续改值不会叠出第二条补间。
- `reserveWidth` 取起点和终点格式化后较宽的一边：码点大于 255 的按 1 个字号，数字、逗号、小数点、负号和 ASCII 前后缀按字号 × 0.6，再向上取整写成像素 `min-width`。倒数时起点更宽，位数变化时容器不动、后面的单位不跟着滑；`reserveWidth=false` 时不预留。需要像素级对齐时由外层给固定宽度。
- 数字动画是 `view` / `text` 组合，Web 端读屏读的是当前渲染的值；动画过程中不写 `aria-live`，否则每帧都会念一次。
- 筛选栏 `vx-dropdown` 是组合件：一行等宽的触发项 + 一块挂在 `vx-popup` 上的面板容器。只做展开态，选项列表和选中值由业务画在默认插槽里，组件不托管 `Record<key, value>`。
- `items` 每项只有 `key` / `title` / `active`；`active` 是受控的展开下标（`-1` 收起）。用户点触发项时组件先算「点同一项收起、点别的项切换」，写回 `v-model:active` 后再抛 `open` / `close` / `change`。
- 触发条留在文档流里，展开时固定层再画一遍同样的条压在遮罩上：点另一项直接切换，不经过全收起的中间态，遮罩也不会把触发表压暗。
- 面板位置按触发条实测：1px 的 `fixed` 标尺量出坐标原点，面板 `top` 等于触发条底边、宽度等于触发条宽度；量不到时退回文档流里的绝对定位，外层裁切交给业务。
- 面板贴住触发条，上两角直角、只圆下两角，不加阴影和描边；最高铺到距窗口底 16，长列表自己放进 `scroll-view` 并用 `panelHeight` 固定高度。
- 遮罩、遮罩点击和滚动锁全部来自 `vx-popup`：点遮罩、插槽里的 `close()`、再点同一项都能收起，`closeOnMask=false` 时遮罩只拦手势。组件不另外加锁，也不新增层级。
- 返回顶部 `vx-back-top` 是受控件：传 `visible` 时以它为准；不传时 `scrollTop` 严格大于 `threshold` 才出现。点击只抛 `click`；不做自动滚动，也不监听页面滚动。和 `vx-page` 平级放置，不放进滚动插槽。
- 显隐只用透明度和 8px 位移，节点常驻不挂卸；隐藏时 `pointer-events: none`，Web 上 `tabindex=-1` 并标 `aria-hidden`。
- 只有图标时宽高都取 44 收成正圆；换成 `extra` 文案时宽度跟着内容走、左右各留 12，高度仍是 44。`position` 贴左或贴右，`bottom` 只认数字。
- 返回顶部固定层级 1，不抢弹层的位置；一页只放一个，底部有 tabbar 或手势条时把 `bottom` 调到让开的高度。
- 滚动列表 `vx-scroll-list` 只排宽度：`items` 用 `Array<any>` 原样收集，卡片宽 `itemWidth`、间距 `gap`、高度 `height` 由业务给定；卡片内容、底色和点击都在默认插槽，作用域 `{ item, index }`。
- 行内容层按内容总宽写死 px，卡片 `flex-shrink: 0`；横向 `scroll-view` 的 `scrollWidth` 必须大于容器宽，卡片才真的能被拖动，只靠卡片不收缩不够。
- 页宽从 `scroll-view` 自身量，页数 = `ceil(内容总宽 ÷ 页宽)`，当前页 = `round(scrollLeft ÷ 页宽)`；最后一页只露出一部分时，滚到末尾固定算最后一页。`@scroll` 按 16ms 合批，只在页码变化时抛 `change`。量不到页宽时指示器整条隐藏，一屏放得下时也不渲染。
- `scrollToIndex()` / `scrollToStart()` 先按「内容总宽 − 一屏」夹目标再写 `scroll-left`；同一目标连续调用交替写 ±1px，跳转期间锁住中间 `scroll` 事件。`items` 为空时不渲染滚动区和指示器，空态由页面自己画。
- 级联选择 `vx-cascader` 只做内联：`options` 按 `label / value / children / disabled` 读，`value` 省略时用 `label`；`modelValue` 是每一级的值数组，`change` 回传 `values` 和 `labels` 两条路径。
- 列数 = 已选路径能走到的深度 + 1，末级是叶子就不再出一列；点某项写入该级、清掉更深的选择再抛 `change`，`disabled` 项灰掉、不可点、不显示箭头。面包屑每级可点回退，可点热区 44（`--vx-hit-size`），最后一级不再响应；空树显示「暂无可选项」，高度与 `panelHeight` 一致。
- `children` 显式写成空数组表示可远程加载：点它抛一次 `expand(value, level)`，同一父项只抛一次；业务补完 `children` 后列靠 `options` 的响应式出现。`reset()` 清空选择并抛一次 `change([], [])`。
- 新手引导 `vx-guide` 用四块遮罩拼洞：洞 = 目标外扩 `holePadding`，2px `primary` 描边内缩到目标边界，气泡和洞留 8。`show` / `current` 受控，`next()` / `prev()` 换步抛 `change`，最后一步主按钮换成「完成」。
- 目标矩形用 `createSelectorQuery().select(step.target).boundingClientRect()` 量；量不到时洞隐藏、遮罩铺满、气泡居中，`next` 仍可用。组件不监听页面滚动，`refresh()` 由业务在页面滚动、键盘弹起和数据变化后调用。
- `placement` 四档加 `auto`：`auto` 先看上下再看左右，显式方向放不下时翻到对面，再按 12 的边距夹住。组件不存「已看过」，`finish` / `skip` 之后由业务写存储；`closeOnMask` 默认关，打开后点遮罩等同跳过并抛 `skip`。
- 富文本 `vx-rich-text` 只做渲染：`content` 按 `format` 拆成块再排版，不托管编辑、不回写 HTML；富文本编辑器不在组件库范围。
- 段落不用原生 `rich-text`：一种样式且没有链接时落一个 `text` 节点，混排时按 CJK 逐字、拉丁词连空白切片，靠 `flex-wrap` 换行。链接要能点、图片要能预览，代价就是混排段落多几个节点；纯文字段落不付这份成本。
- 块类型固定九种：标题、段落、列表项、引用、代码、图片、表格、分隔线、embed。引用和列表在解析阶段拍平成带 `quote` / `level` 的块，模板不递归，嵌套列表最多缩到第三档。
- 安全是四道白名单：标签、属性、地址、行内样式。`script` / `style` / `form` 系列连内容一起丢，`on*` 不读，`javascript:` / `vbscript:` / `data:text/html` 整条丢，行内样式只留 `color`、`font-size`（12–28）和 `text-align`。加新标签前先补这四道和用例。
- 代码块只做横滚和复制，复制提示走 `vx-toast`；表格只读、列宽下限 120（列少均分、列多横滚），排序、合并、固定表头去 `vx-table`；iframe 和音视频不内嵌，只出地址卡。
- Markdown 先转 HTML 再走同一套解析，过滤只有一份。只承诺文档里列出的子集，不追 CommonMark；脚注、公式和任务列表不做。
- 长度护栏是 100000 字 / 3000 块：先截断再解析，并抛 `error('too-large')`。阈值和演示页的「大文档」对照一起改。
- 图片按源里的宽高比和实测正文宽换算高度：挂载后量一次正文宽，首帧按 180 兜底，约一帧后落到正确高度；量不到宽度时一直是 180。`preview` 只负责调 `vx-gallery`，关掉后仍抛 `image-click`。
- 每个组件同时交付：`vx-<block>.uvue`、`props.ts`、独立的 `pages/demo/<name>/<name>.uvue` 演示页、`pages/demo/shared/catalog.ts` 登记、`uni_modules/vaporix-ui/api/README.md` 清单和 `uni_modules/vaporix-ui/api/vx-<name>.md`。`readme.md` 只留接入和组件清单，属性表写进 api 目录。
- 单文件顺序：`template` → `script setup` → `style`。`style` 与元素 class 字符串都按「基础 → 尺寸 → 类型 → 形状 → 状态 → 文本」排列。

## Do's and Don'ts

Do：

- 用 `view` 和 `text` 组织界面，文案放在 `text`、`button`、`input`、`textarea` 上。
- 用 `script setup` 写组合式 API，不写 `lang`。HBuilderX 5.26 按 uts2js 编译这些 TypeScript 写法；5.31 起未写 `lang` 时默认就是 TypeScript。
- 颜色、字号、间距、圆角、高度从 `--vx-*` 取值。
- 按钮默认用 `variant` 和 `shape` 表达层级与轮廓；`plain`、`round` 只用于兼容旧代码。
- 控件文案用 `--vx-font-control-*`，正文用 `--vx-font-*`；两边不互相借用档位。
- 数字框用 `min` / `max` / `step` 表达范围和步长；到边界让对应按钮停下，不要靠禁用整组暗示范围。
- 数字框的标题、单位和说明放在外面的表单行；`soft` 给列表行和购物车，`outline` 给独立表单。
- 数字框输入完在 `blur` / `confirm` 收口，`change` 拿最终数值；业务算金额和库存只依赖这个值和 `v-model`。
- 倒计时用 `time` 传秒数；需要天数时打开 `showDays`，单位文字用 `separator="unit"`。
- 秒级读数保持 `showMilliseconds` 关闭；只有确实需要十分位读数时才打开，并且一屏不要放多个。
- 倒计时结束用 `end` 更新业务状态；暂停和重置由按钮调用 `pause()` / `reset()`。
- 自定义红底或品牌底时，`color` 和 `unitColor` 分开传，盒外的冒号才不会跟着数字一起刷白。
- 标签用 `type` 表达状态，纯分类优先 `default`；可关闭标签在 `close` 里删业务数据。
- 标签的自定义颜色只传需要覆盖的那一项，实心标签同时给 `bgColor` 和 `color`。
- 徽章用 `value` 承载计数，超过 `max` 自动显示 `max+`；只用圆点时传 `dot`。
- 徽章叠加在图标上时打开 `ring`，用 `surface` 色把徽章和下层内容分开；独立计数不加。
- 徽章的自定义颜色只传需要覆盖的那一项，字面值不跟随主题。
- 页脚用 `copyright` 放版权和备案，用 `links` 放辅助链接，在 `click` 里做路由。
- 固定页脚打开 `fixed` 时，给页面底部留出页脚高度，再加 `--uni-safe-area-inset-bottom`；固定层不要叠阴影。
- 图标默认跟随 `text`，语义用 `type`，字重用 `variant`，容器内的反白与次要灰用 `color` 传令牌。
- 消息提示用 `type` 表达结果，`duration` 默认 2 秒；常驻提示打开 `closable`，重复触发同一条用 `open()` 重新计时。
- 提示挂在页面根节点，和滚动容器平级；显隐优先用 `v-model:show`。
- 轻提示用 `type` 选默认图标并写清结果，时长跟文案长度走；常驻时点浮层或调 `close()` 收起。
- 轻提示挂在页面根节点；同一屏只放一条，重复触发先改 props 再调 `open()`。
- 需要浮层和页面有一点叠影时，用 `bgOpacity` 调底色；文字和图标保持不透明。整条都要淡（比如压在头图上的横幅）用 `opacity`，两者相乘。
- 操作菜单用 `items` 列动作，标题和说明只在需要解释时传；删除、退出这类不可逆操作用 `type="danger"`。
- 点动作默认收起；需要连续选择时关掉 `closeOnSelect`，在 `select` 里更新 `selected`。
- 操作菜单挂在页面根节点，和滚动容器平级；用 `v-model:show` 控制显隐，`open()` / `close()` 只在需要时调。
- 同一屏只开一个操作菜单，动作控制在 2–6 条；更多选择改用页面或选择器。
- 只在必须强制选择时关掉 `maskClosable`，并确保取消按钮还在。
- 弹框用 `v-model:show` 控制显隐，默认取消、确定足够时不要再传 `actions`；标题和正文用短句说清结论。
- 三个以上动作改传 `actions`，按从上到下的顺序排；`role="cancel"` / `"confirm"` 标出语义出口，其余动作在 `action` 里处理。
- 删除、退出这类不可逆操作用 `confirmType="danger"`；只有整个确认都危险时才把 `cancelType` 也改成 `danger`。
- 自定义正文用默认插槽，并关掉 `showActions` 自己在正文里放按钮；标题仍用 `title`，不要整块自己画头。
- `maskClosable=false` 时至少保留一个动作；异步提交把 `closeOnAction` 关掉，完成后调 `close()`。
- 需要给用户随时退出的入口时打开 `closable`，尤其是自定义正文和强制确认；关闭叉和取消走同一个 `cancel`，不另外抛事件。
- `icon` 只给结果状态用，`iconType` 跟状态一致；普通确认不配图标。
- 自定义颜色只传需要覆盖的一项；传令牌时跟随主题，字面值由业务保证对比度。
- 抽屉用 `v-model:show` 控制显隐；入口放在列表行、卡片或页面操作区，抽屉挂页面根节点。
- 侧边入口用默认 `right` 或 `left`，底部选择和分享用 `position="bottom"`；同一屏只开一个。
- 抽屉内容超过面板时靠正文滚动，不要给面板写死 `overflow`；头部和底栏保持不动。
- 需要自定义宽度时给 `width` 传带单位的值（如 86%），窄屏不小于 240px；不要为塞内容缩小字号。
- `closable=true` 或内容里放一个关闭按钮；关掉 `maskClosable` 时至少保留一个出口。
- 弹出层用 `v-model:show` 控制显隐，入口放在页面操作区，弹出层挂页面根节点；同一屏只开一个，嵌套时自己传 `zIndex`。
- 弹出层上下贴边用 `height`，左右和居中用 `width`，都要带单位；不要靠内容里的空 `view` 撑高度。
- 弹出层的内容自己留 16；超过一屏时给 `height`，把列表放进 `scroll-view`，不要让面板无限往下长。
- 弹出层要居中、四周留白和四角全圆时用 `placement="center"`；要贴边、只圆一侧时用四向。
- 弹出层的关闭叉和内容里的关闭按钮至少留一个；关掉 `maskClosable` 时必须还有另一个出口。
- 弹框、抽屉、弹出层、压屏窗、日期时间、联动选择和选择框在第一次打开后根节点常驻，关闭只切 `display: none`；节点和插槽里的 `scroll-view` / `picker-view` 都还在，需要完全释放时用 `v-if` 包住整个弹层。
- 压屏窗用 `v-model:show` 控制显隐，入口放在首页卡片、活动按钮或列表行；挂在页面根节点。
- 海报或权益卡自己带底色和圆角；内容控制在一屏内，超出一屏改用页面或拆成两步。
- 关闭按钮保持 44 热区，底部居中或右上、左上；`closable=false` 时内容里必须留一个退出入口。
- 关掉遮罩关闭时至少保留关闭按钮；同一屏只开一个压屏窗，不和弹框、操作菜单叠加。
- 自定义颜色只传需要覆盖的一项，字面值不跟随主题；要跟随就传 `var(--vx-color-*)`。
- 日期时间用 `v-model` 绑已确定的值，`v-model:show` 控制显隐；触发入口用只读输入行或列表行，点击打开。
- 只选日期用 `mode="date"`，只选时刻用 `mode="time"`；两件事用两个实例、两个值，不要在一个实例上来回切 `mode`。
- 生日、历史档案这类超出默认区间的值，用 `startYear` / `endYear` 放宽；预约档位用 `minuteStep` 收窄分钟。
- 需要把值写进自定义模板时用 `format`，不要在 `confirm` 里再拼字符串。
- 选择器挂在页面根节点；打开期间不要要求用户操作下面的页面。
- 单选用 `vx-radio-group` 包一组 `vx-radio`，`v-model` 绑选中项的 value；选项都可见、只选一个时用它。
- 表单行用默认横排，地址、配送和方案这类带说明的选项用 `layout="list"`；独立表单用 `card`，放进卡片用默认透明底。
- 标记放行尾时用 `placement="end"`，行内标签和价格放 `extra`；同一组只用一个位置。
- 选中标记只用一种语义色；普通表单保持 `primary`，结果类选项按业务语义选色，不要给每组换一种。
- 选项需要有说明时分两行：主文案放 `label`，地址或权益放 `description`，右侧短标签放 `extra`。
- 暂时不可选的项单独 `disabled`，整块表单不可编辑时用分组 `disabled`；原因写在说明里。
- 需要品牌色时传 `color` 和 `checkColor`，并同时检查亮暗两套主题；跟主题就传 `var(--vx-color-*)`。
- 多选用 `vx-checkbox-group` 包一组 `vx-checkbox`，`v-model` 绑 value 数组；勾选和取消都抛 `change`，拿到的始终是新数组。
- 表单行用默认横排，带说明的权益、通知和地址用 `layout="list"`；独立表单用 `card`，放进卡片用默认透明底。
- 标记放行尾时用 `placement="end"`；需要只标出已选项时用 `variant="check"`，同一组只用一个位置和一种标记。
- 有数量上限时传 `max`，在 `exceed` 里提示「最多选 N 项」；未选项保持可点，不要手动转灰。
- 「全选」用单独一只 `vx-checkbox` 加 `indeterminate`，根据已选数量算 `checked`，在 `change` 里全选或清空数组。
- 选项需要说明时分两行：主文案放 `label`，权益或通知方式放 `description`，右侧短标签放 `extra`。
- 暂时不可选的项单独 `disabled`，整块表单不可编辑时用分组 `disabled`；原因写在说明里。
- 需要品牌色时传 `color` 和 `checkColor`，并同时检查亮暗两套主题；跟主题就传 `var(--vx-color-*)`。
- 城市、标签、筛选项这类短选项用数据选择器；选项超过 12 个或文案很长时改用选择框或表单列表。
- 单选用 `v-model`，多选用 `v-model:values`；同一实例不要切换 `multiple`，也不要把两种模型混在一起。
- 需要允许单选清空时打开 `clearable`，并在业务侧接受空串；必选一项时保持关闭并校验。
- 有上限时传 `max`，在 `exceed` 里提示「最多选 N 项」；到上限不要把未选项转灰或禁用。
- 选项字数接近时用 `width` 固定宽度，字数差很多时保持自适应；一组只用一个 `type`、`variant` 和 `shape`。
- 图标只做辅助，选项文案写完整名称；核心图标直接用，扩展图标先引入 `icons-extend.css`。
- 开关用 `v-model` 绑布尔值，打开和关闭都抛 `change`；需要立即生效的设置项直接写回，不要另放保存按钮。
- 设置项用 `label` 写名称，`description` 写影响范围，`layout="list"` 让整行可点；开关默认在行尾，先读名称再读状态。
- 需要异步确认时先乐观写回，再在请求期间把 `loading` 打开；失败时把值改回去，不要一直停在加载态。
- 需要品牌色时只传需要覆盖的那一项：`color` 改打开轨道，`trackColor` 改关闭轨道，`thumbColor` 改滑块，`borderColor` 改关闭描边。
- 一屏里的开关保持一种语义色；只有业务本身在表达风险或结果时才改用 `warning` / `danger`。
- 分段器用 `v-model` 绑选中段的值，`options` 按顺序给 2–5 段；点按立刻切换，模型里已经是这个值时不抛事件。
- 默认选中写目标值；初始值匹配不到时组件显示第一个可选项，点中才写回。需要一开始就同步时，在数据到位后自己补一次。
- 普通视图切换保持 `primary`；只有筛选项本身在表达状态、结果或风险时才用其他语义色。
- 段文案写 1–4 个字，例如「日」「周」「月」；320 宽的 5 段用 2–3 个字。宽度不够时先缩短文案或减少段数，不要缩小字号。
- 2 段通常不用分割线；3–5 段或轨道较宽时打开 `divider`，线色跟外框，不单独调线色。
- 分段器只放切换项，标题、价格、说明和提交按钮留在卡片或表单行；需要路由用页签，不要把分段器当导航。
- 需要品牌色时传 `color`；底色浅时一起传 `activeTextColor`，并检查亮暗两套主题的对比度。
- 当前段不要设成禁用；需要展示但不可改时整组 `disabled`，原因写在标题或说明里。
- 分页器用 `v-model` 绑当前页；列表已经分页返回时直接把总页数传给 `pageCount`，手上有总数时用 `total` + `pageSize`。
- 列表页、表格底栏和订单列表用 `plain`；强调色只给当前页码。需要整块醒目时才用 `soft` 或 `solid`，一屏不要同时出现两种外观。
- 上一页、下一页文案控制在 2–5 个字；空间紧时用 `iconOnly`，并在页面或列表标题里补一句「上一页 / 下一页」的说明。
- 到端点只让对应按钮变淡，不要隐藏或移除按钮；只有一页时两个按钮都停下，页码仍显示 1/1。
- 需要跳转、每页条数或总数说明时放在分页器外面；`showPage=false` 只用于已经有页码说明的表格底栏。
- 虚拟列表用 `height` 或外层 flex 给确定高度，行内容按 60 等高排；要不等高卡片改用 `vx-waterfall`。
- 触底加载只改 `loadingMore` / `noMore` 和数组长度；跳到指定行用 `scrollToIndex()`，不要在外部同时改 `scrollTop` 和重排数组。
- 分页器不和滚动加载混用：整页翻页用分页器，信息流继续用加载更多；两者不要同时出现在同一列表底部。
- 瀑布流用 `ratio` 预留图片高度，不要等图片加载后再让卡片长高；同一组卡片用同一个 `imageRatio` 兜底，图片比例差别大时逐项传 `ratio`。
- 追加数据只往末尾加，已有卡片不会跳列；筛选、排序、删除后整组会重排，不要在两列之间做「保持滚动位置」的假设。
- 默认卡片的标题、说明和底部文字保持短句；标题 1–3 行，说明和底部单行。价格用正文色，需要品牌色时传 `priceColor`，不要把语义色当装饰。
- 瀑布流不接管滚动和分页：加载更多放 `suffix`，分页用 `vx-pagination`，加载中状态用 `vx-skeleton` 或 `vx-loading`。
- 自定义卡片自己带内边距和图片高度；内容异步变化后调 `refresh()`，不要靠改 `items` 触发重排。
- 滑动选择器用 `v-model` 绑当前值，配 `min` / `max` / `step`；区间选择再加 `range` 和 `v-model:end`。
- 设置项用外面的表单行或卡片标题写名称，`showValue` 打开数值；数值放 `top` 紧跟轨道，右侧还要放图标时放 `right`。
- 需要单位或金额时用 `format` 的 `{value}`，不要在 `change` 里再拼字符串。
- 拖动中要实时联动时听 `changing`，请求和提交放在 `change`，一次操作只发一次。
- 音量、亮度这类两端有极值的控件，用 `prefix` / `suffix` 放最小值、最大值图标，点击交给外层按钮。
- 需要品牌色时分别传 `color` / `trackColor` / `thumbColor` / `borderColor`，并同时检查亮暗两套主题。
- 评分用 `v-model` 绑定分值；允许半星时打开 `allowHalf`，只读展示用 `readonly`。
- 评分默认跟随 `warning`，需要品牌色时只改 `activeColor`；分值的文字说明放在组件外。
- 时间轴用 `items` 传记录，阶段给 `title` 和 `icon`，同一阶段下的多条动态不给 `title`。
- 节点色只在表达状态时传 `type`，待处理保持默认的浅灰节点；一条时间轴只用必要的语义色。
- 需要改竖线颜色时传 `lineColor`，不要把节点色一起改掉；单条记录会自动不画线。
- 时间轴的标题、说明和时间交给组件；点击、展开和主操作放在外面的卡片或列表行。
- 步骤条用 `items` 和 `active` 表达流程；当前步骤之前才算完成，不要把后续步骤提前上完成色。
- 横向步骤保持 2–5 个短标题；文案长、步骤多时改 `direction="vertical"`，不要缩小字号硬塞。
- 需要点击切换时打开 `clickable`，在 `click` 里用返回的索引更新 `active`；默认关闭，交给外层处理。
- 普通流程用圆点或序号；只有每个步骤都有独立含义时才用图标节点，并保证文字能独立说明状态。
- 虚线只用于流程本身是草稿、待确认的语义；同一组步骤保持一种线型。
- 进度条用 `percent` 表达 0–100 的比例，上传、配额和任务进度都用它；到 100 才表示完成。
- 需要标签和读数时用 `label` / `showText`，自定义读数用 `text`；数值和标签都放在组件内，不放在轨道上。
- 普通进度保持默认轨道和 `primary`；只有业务本身在表达风险、结果或完成状态时才用语义色。
- 自定义颜色分别传 `bgColor` / `trackColor` / `color`；跟主题用 `var(--vx-color-*)`，亮暗对比度自己保证。
- 改值需要补间时用 `duration`，0 直接落位；需要知道落定时间用 `end`，不要拿定时器猜。
- 环形进度用 `percent` 表达 0–100 的单个读数，会员成长值、健康评分和任务完成度都用它；到 100 才表示完成。
- 读数放圆心，短文案用 `text`，两行用默认插槽；`showText=false` 时在圆环外补数字和单位。
- 普通圆环保持 `type` 和 `default-soft` 轨道；需要品牌色时分别传 `color` / `track-color` / `text-color` / `bg-color`，亮暗各检查一次。
- 做半圆刻度时用 `arc="semicircle"`；需要两行文案时把 `width` 放大到 120px 以上，不要缩小字号。
- 连续改值用 `duration` 控制补间，频繁更新控制在 300 以内；需要落定回调时用 `end`，不要自己定时。
- 同一组圆环只用一档尺寸和一种语义色；分项超过 3 个时改用列表或页签。
- 页签用 `v-model` 绑当前索引，`items` 按顺序提供文案和角标；点击当前项不抛 `change`，不要用它做重复请求。
- 同一页只切 2–5 个视图时用页签；常规页面用 `line`，卡片工具条用 `soft`，顶层入口才用 `inverse`。
- 页签表达状态筛选时才传 `type`，普通导航保持 `primary`；角标默认 `danger`，同一含义一屏只放一处。
- 禁用单个页签只用于暂时不可选的分组；不可用入口优先隐藏，当前项永远不要禁用。
- 页签放进卡片时关掉 `divider`，需要吸顶时放进 `vx-sticky` 并关掉页签自己的 `divider`；内容按 `change` 的索引切换，路由和请求留在业务。
- 侧边导航用 `vx-tabs` 的 `direction="vertical"`：每项一整行，宽度用 `verticalWidth`，右侧内容按 `active` 自己排；一列 2–8 项，超了改用列表或宫格。竖排角标和文案同一行、跟在文案后面，不要再用绝对定位往文字上叠。
- 自定义 `bgColor` / `color` 时成对检查亮暗两套主题的对比度；要跟主题就传 `var(--vx-color-*)`。
- 标签栏用 `v-model` 绑当前索引，`items` 按顺序提供图标和文案；固定时放在页面根节点末尾，让占位生效。
- 一屏 3–5 个标签，文案 2–4 个字；导航保持默认 `type="primary"`，同一屏不要再放第二个底部导航。
- 需要中间主按钮时同时传 `raised` 和 `action`，点击在 `click` 里打开操作菜单或页面；不要让它变成可选中页签。
- 图片图标成对传 `image` / `activeImage`，亮暗各一套；字体图标要线性转实心时传 `activeIconVariant="fill"`。
- 角标默认 `danger`，同一含义一屏只放一处；能用圆点就不用数字。
- 放进卡片、画布或已经有底部安全区的容器时关掉 `safeArea`；页面用列布局时用 `:fixed="false"`，不要同时打开占位。
- 选中态同时换文字色和字重；图片图标没有选中色，必须换 `activeImage`，不能只靠 `color`。
- 滑动菜单用 `name` 标识行，在 `select` / `change` 里按 `name` 找到数据；列表里不要靠下标猜行。
- 一行只放 1–3 条短动作；删除、退出这类不可逆动作先收起菜单，再用 `vx-modal` 确认。
- 同组默认只展开一行；批量场景才打开 `multiple`，同一页面统一一种展开策略。
- 用 `v-model:open` 或在 `change` 里同步状态；程序化开合优先调 `open()` / `close()`，不要直接改 DOM 或滑动距离。
- 需要保留入口但暂不允许手势时用 `swipeable=false`；需要维持展开时用 `closeOnSelect=false`，不要用禁用态冒充。
- 自定义菜单用 `extra` 插槽时同时给 `extraWidth`，并让插槽内容自己带热区、颜色和按下态。
- 卡片用头部放身份和时间，正文放默认插槽，底部用 `suffix` 或 `footer`；标题和头像一起出现时，标题不能省。
- 图片、图片网格和列表行要贴边时打开 `bodyPadded=false`；普通文案保持默认内边距。
- 整卡可点时打开 `clickable`，并确认卡片里没有按钮、输入框和链接；Web 端另给可聚焦入口。
- 通栏卡片用 `full`，左右边距由页面控制；卡片之间留 `xl`，不靠卡片自身的外边距。
- 列表用 `vx-list-view` 包一组 `vx-list-cell`；最后一行写 `:divider="false"`，避免和卡片底边叠线。
- 可点击行保持默认 `clickable`，配箭头或右侧操作；静态展示行关掉 `clickable`，也不要放箭头。
- 行内图标、头像放 `prefix` 插槽，徽章、标签和时间放 `extra` 插槽；值只是短文本时才用 `value`。
- 分组标题用 `title`，补充说明用 `description`，右侧操作放 `extra` 插槽；操作文案自己带 13 / 20 和 `primary-pressed`。
- 索引列表先用业务数据分组：`letter` 用大写字母，`#` 放最后；同一组的字母唯一，空分组直接不传。
- 列表高度由父级给定：独立页面用 `height="100%"`，嵌在滚动页里传固定像素或 `calc` 出来的值；不要指望组件自己算窗口高度。
- 联系人、城市和热门商品用 `title` + `avatar`，说明放 `description`；行尾只放短值或状态，徽章和标签用默认插槽替换整行。
- 需要常驻搜索时把 `vx-input` 放在组件外面；搜索框会跟着滚走时放进 `prefix`，并在搜索时重新分组 `sections`。
- 当前分组要联动外部状态时用 `v-model:current`，或在 `change` 里同步；程序化跳转用 `scrollTo` / `scrollToLetter`。
- 字母、数量、尺寸，以及主文案、说明是否占行变化时会自动重测；默认插槽、`prefix`、`suffix` 或字体晚于挂载落位时调 `refresh()`。
- 折叠用 `vx-collapse` 包一组 `vx-collapse-item`，`v-model` 绑展开的 `name` 数组；一次只开一条时打开 `accordion`。
- 独立分组用 `variant="card"`，放进卡片用 `variant="plain"`；同一组保持一个形态和一个尺寸。
- 面板标题写短句，补充说明放 `description`，图标放 `prefix`，标签和徽章放 `extra`；`name` 在同一组里唯一。
- 长内容用 `contentHeight` 固定高度并在内部滚动；自动高度最多 2000px，超过一屏不要再靠它撑开页面。
- 展开状态用 `v-model` 或 `change(name, open)`；程序化操作用 `ref` 上的 `open()` / `close()` / `toggle()`。
- 宫格用 `vx-grid` 包一组 `vx-grid-item`，列数和尺寸在同一组里保持一致。
- 给格子按行优先传连续的 `index`，第一行、第一列才不会多画内部线。
- 宫格入口用 `icon` + `title`；需要图片图标时用 `image`，需要自己画底和图形时用 `icon` 插槽。
- 实心图标用 `iconVariant="fill"`；主文案保持单行，长文案换成短词或用默认插槽。
- 需要色底时传 `bgColor`，再按底色决定 `color`；不需要线就关掉 `divider`。
- 只有表达状态时才传 `type`；普通入口保持默认次要灰，不做装饰色。
- 角标放 `extra`，内容自己用 `vx-badge` 或 `vx-tag`；静态格子关掉 `clickable`，不可用格子用 `disabled`。
- 图片组合用 `items` 传 `{ src, id }`，点击时用返回的索引或 `id` 定位数据；列表里不要靠下标猜业务对象。
- 头像堆叠用 `shape="circle"`、负 `offset` 和 `ring`；商品缩略图用 `shape="rounded"`、正 `offset` 或 `wrap`。
- 图片组合放进卡片或列表行时，尺寸和偏移对齐外层内容；需要标题、数量或操作时由外层提供。
- 图片组合放进可点击列表行时传 `:clickable="false"`，让点击落到整行；只有需要单独打开图片预览时才保持默认可点。
- 图片预览从 `vx-image-group` 或缩略图的 `click` 打开：在事件里用返回的索引调 `open(index)`，或先写 `v-model:current` 再打开。列表里优先用 `id` 认数据。
- 删除在 `delete` 里处理：先按 `id` 从业务数据里删，再回写 `items`；删到最后一张时把 `show` 关掉。组件不会替你改数组。
- 需要看细节时保留默认 `zoom`；只看不缩放时传 `:zoom="false"`，单击就会立即关闭，不再等双击判定。
- 需要分享、保存或更多动作时用 `extra` 插槽放在右上角；插槽内容自己带 44 热区、颜色和按下态。
- 底部说明只放一行，完整说明放在外层卡片或页面；长标题先缩短，不靠缩小字号硬塞。
- 同时安装 Pro 和免费库时保持 easycom `autoscan: true`，不要用一条 `^vx-(.*)` 把所有标签指向其中一个目录。
- 图片预览挂在页面根节点，和滚动容器平级；同一屏只开一个，关闭后再开下一个。
- 图片上传用 `uploader` 或 `serverUrl` 二选一；上传函数把 `file.path` 交给请求库，进度通过第二个参数回传。
- 上传前把 `count` / `maxSize` / `accept` 三条限制一起给；被拒的图用 `invalid` / `oversize` 提示，不静默丢。
- 删除和异步回调按 `VxUploadFile.id` 定位；不要在异步回调里按下标猜数据。
- 手动提交时关掉 `autoUpload`，提交前检查每张 `status`；成功后再取 `url`。
- 自定义入口用默认插槽，选完调 `add(paths)`；不要自己维护第二份列表。
- 上传成功后在 `success` 里保存 `url`，不要把临时 `path` 当最终地址；换设备或重启后临时路径会失效。
- 二维码用 `text` 传验证码或短链接，长度控制在 10 版以内；长内容先换成短链接。
- 带中心图标时同时用 `logo` 和 `level="H"`，图标比例不超过 0.3；不带图标保持默认 `M`。
- 二维码保持默认深码浅底；需要品牌色时只改 `color` 并保证对比度，`bgColor` 跟随卡片的白色底。
- 二维码和券号、有效期一起出现，扫码失败时用户还能把号码报给商家；放大和保存由外层按钮承载。
- 二维码放进白底卡片时用默认 `margin`；印刷或放在有颜色的底上时传 `margin="4"`。
- 换肤只替换页面根节点的 `vx-theme-light` / `vx-theme-dark`。
- 加载中默认横排，需要堆叠时写 `layout="column"`；全屏等待用 `overlay`，并保证状态能收回。
- 加载动画按场景选 `variant`：通用等待用 `ring`，短队列和上传用 `bars`，轻量行内用 `dot`，液面用 `wave`；同屏只用一种。
- 全屏等待用 `overlay`，短请求用 `delay` 避开闪烁；等待结束先关浮层再刷新内容，不留下空列表。
- 骨架屏优先用预设或 `sections` 画结构；骨架和真实内容在同一块区域时，用 `loading` 或 `v-if` 切换。
- 骨架屏的 `count` / `lines` / `columns` 跟着真实内容走；半屏位置先减一档，不要把桌面数量照搬到手机。
- 一屏一种骨架、一种动效；短请求先等 200ms 再挂骨架，避免闪一下。
- 列表尾部用 `vx-loadmore` / `vx-nomore` 二选一，放在分组卡片外；加载结束再换成没有更多。
- 空列表用 `vx-no-data`，文案说清「没有什么」；需要下一步动作时传 `actionText`，在 `action` 里做路由或刷新。
- 搜索无结果时把关键词和下一步写进 `text` / `description`，不要只写「暂无数据」；需要重试时用 `actionText="重新搜索"` 或 `"重新加载"`。
- 需要整块居中时打开 `fill`，父级用纵向 flex 撑出高度；普通页面区块直接留在文档流里。
- 默认线稿够用时不要传 `icon`；要表达失败、网络异常等状态时用 `type` 上色，或换 `icon` / `image` 让语义更具体。
- 自定义插图放 `image` 或 `icon` 插槽，方框按 96 / 128 / 160 等比展示；插槽内容自己带尺寸和颜色。
- 一个空状态只放一个主要动作；次要动作放 `extra` 插槽，并保持比主操作轻一档。
- 空状态放在卡片或列表分组里时由外层提供描边和底色，组件本身不画外框。
- 一次操作的结果用 `vx-msg`，标题先给结论，说明再补原因和下一步；成功、失败、审核中都沿用这一套。
- 一个提示页只留一个主要操作，辅助操作放下方；两个动作都用 `action` 的 role 区分，不在按钮里塞第二层逻辑。
- 页面级结果打开 `fill` 并让父级占满一屏；嵌在卡片或弹层里时不传 `fill`，由外层给边界。
- 图标默认跟 `type`；业务有更具体的语义时换 `icon`，需要插画时用 `icon` 插槽，不要在标题里画图标。
- 吸顶把 `scrollTop` 绑到页面主 `scroll-view` 的 `@scroll`；吸顶条放在这段滚动内容里，贴到页面顶部才停住。
- 需要限定吸顶范围时用 `suffix` 放后面的内容；分段吸顶时每段各用一个 `vx-sticky`，上一段先复位再由下一段接管。
- 吸顶条只放短标题、页签和状态；内容自己带底色和内边距，组件只在吸顶后补 `surface` 和分割线。
- 内容变高（折叠、图片加载完）或窗口尺寸变化后调一次 `refresh()`，占位高度才会更新；位置稳定时不要反复重测。
- 需要和滚动内容分层时保留默认的 1px 分割线；需要明显的浮层感再打开 `shadow`。
- 品牌底色用 `bgColor` 并自己保证对比度；要跟随主题就不要传，让吸顶后的 `surface` 生效。
- 吸顶状态用 `change` 更新，不在模板里用滚动距离自己判断。
- 导航栏放在页面根节点，页面用 `navigationStyle: custom`；固定时默认占位，头图场景关掉 `placeholder` 自己从屏幕顶部排内容。
- 用 `back` 打开内置返回，在 `back` 事件里做 `navigateBack`；需要自定义左侧时用 `prefix`，不要再叠一个返回图标。
- 头图、渐变和品牌底色用 `bgColor` / `transparent`；滚动渐显用 `fade` + `scrollTop`，在 `change` 里按透明度切换标题颜色。
- 右侧只放一个动作；更多操作放进 `extra`，小程序上给右上角胶囊留出位置。
- 状态栏放在页面根节点，页面用 `navigationStyle: custom`；默认跟随系统安全区，Web、平板和横屏用 `height` 显式给值。
- 头图用 `transparent`，非固定时作为头图里的第一段占位；固定并压在头图上时关掉 `placeholder`，首屏内容用 `ready` 的高度补间距。
- 头图渐显用 `fade`，在页面的 `scrollTop` 里驱动；`transparent` 打开时不要再传 `maxOpacity`。
- 插槽只放短的顶带文案，`align` 按页面结构选；App 上会被系统状态栏盖住，主操作和信息不要放这里。
- 系统状态栏前景在 `pages.json` 的 `navigationBarTextStyle` 或系统配置里配好，浅底配深字、深底配浅字。
- 滚动消息用 `items` 传消息，点击在 `click` 里取 `index` 和 `item` 做路由；空数组直接不渲染。
- 需要暂停时传 `autoplay`，不要在页面里卸载重建；间隔保持在 1200ms 以上。
- 通告条用 `variant="soft"` 加 `bgColor` 和语义 `iconColor`；搜索框用 `shape="pill"`；卡片内用 `variant="plain"`。
- 关闭、刷新这类操作放进 `suffix`，它不会触发整条的点击。
- 只有一条消息时不要指望轮播；需要逐条读完的内容改用列表或页面区块。
- 单条公告用 `vx-notice-bar`；需要逐条轮播时才用 `vx-rolling-news`。默认 `warning` 表达「需要留意」，普通公告换 `info`，中性说明换 `default`。
- 文案短、只占一行时保持默认单行省略；需要读完的多行公告打开 `wrap`。只有一条长文案要横向走完时才打开 `scrollable`。
- 滚动速度保持在 60–120 px/s；`activeMode` 的 `forwards` 只用于页面中段接入第一轮的场景，不要拿它改循环方向。
- 关闭、查看这类操作放进 `suffix`，它不会触发整条 `click`；整条只做详情入口时保留默认 `clickable`，纯展示传 `false`。
- 需要吸顶时把通告栏放进 `vx-sticky`，需要固定时由页面承载；不要给通告栏加阴影、fixed 或第二层底色。
- 上下间距用 `vx-white-space`，左右内边距用 `vx-wing-blank`；不要给每个内容块单独加 `margin`。
- 留白档位用 `sm | md | lg`；需要 24 / 32 时给 `height` / `gap` 传带单位的值，不要叠两个 `md`。
- `vx-white-space` 放在纵向布局里，`vx-wing-blank` 只包内容；同一个方向的留白只留一次。
- 通栏区块用 `vx-wing-blank` 把内容对齐页面边距；页面已经用 `lg` 时不要再叠一个 `lg`。
- 单张图片用 `vx-image`：占位、失败回落、圆角和比例一次配齐；点击预览交给 Pro 的 `vx-gallery`。
- 需要按比例时给 `width` 传 px 或 rpx 再配 `ratio`；宽度要跟父级时改成只给 `height`，不要指望百分比宽度下 `ratio` 生效。
- 传 `vx-image` 的 `bgColor` 时确认失败文案和图标仍有足够对比度；跟主题时传 `var(--vx-color-*)`。
- 单人头像用 `vx-avatar`：有图传 `src`，名称首字传 `text`，没有字和图标时自动用 `user`；首字只取第一个字符，完整名称放在旁边的标题里。
- 需要和卡片、列表行或图片组合对齐时，头像外框用同一档 32 / 40 / 48；`ring` 只用于重叠分隔，独立展示不加。
- 区块内部的分隔用 `vx-divider`，横线配 `text` 做分组标题；页面级的区块间距仍交给 `vx-white-space`。
- 底栏和手势条之间用 `vx-safe-area` 占位；固定底栏由业务自己留出高度，固定安全区只负责那一条。
- `bgColor` 只在需要色带时传，跟主题用 `var(--vx-color-*)`；不要拿它表达状态。
- 留白组件的交互交给插槽内容或外层按钮，组件本身不接点击。
- 栅格用 `vx-row` 包一组 `vx-col`，宽度按 24 份写在 `span` 上；同一行加起来 24 就铺满，不到 24 用 `justify` 分配空间。
- 列间距和行间距分别用 `gutter` / `lineGutter`，取 8 / 12 / 16 / 24；多行网格两个一起传，第一行不会多出半格。
- 卡片、数据块和表单行自己画描边、圆角和底色，栅格只排位置；等高卡片靠默认的 `stretch` 和内容自己撑满。
- 多端适配先写手机的 `span`，再用 `sm` / `md` / `lg` / `xl` 往上覆盖；不要给每个断点复制一套卡片。
- 窄屏要收起整列时用 `span="0"` 加断点；整行都不要时用 `v-if` 去掉 `vx-row`，空行不会留下间距。
- 分隔列表用 `items` 传 2–5 个同级概览，`value` 在上、`label` 在下；订单状态、关注 / 粉丝、积分 / 优惠券都用这一套。
- 数值保持短：计数超过 4 位时先换算成 `1w+` 或缩短，不要缩小字号；更长的内容用默认插槽。
- 需要角标时用 `badge` / `badgeText` / `dot`，同一含义一屏只放一处；能用圆点就不用数字。
- 放进卡片时让卡片负责圆角和裁切，组件 `bgColor` 用默认或 `transparent`；只有整条独立落在页面底色上时才传深色或品牌底色。
- 点击整格进入对应列表；路由、请求和埋点放在 `click` 里，组件不保存选中态。
- 纯统计不跳转时传 `clickable=false`，不要用禁用态冒充静态展示。
- 选择框用 `v-model` 绑单值，多选加 `multiple` 和 `v-model:values`；点确定才写回，取消和关闭叉不改已提交的值。
- 选项值用字符串且唯一；`value` 省略时用 `label`。文案写短，长文案先缩短或换行外层说明，不要靠缩小字号硬塞。
- 单选标记默认在文案前，复选标记放行尾时用 `placement="end"`；同一张表单保持一种位置。
- 多选有上限时传 `max`，在 `exceed` 里提示「最多选 N 项」；不可选项单独 `disabled`，原因写进文案。
- 需要清空多选时允许空数组确认；单选没有选中时确定不可点，用取消退出，不要用空值冒充选择。
- 选择框挂页面根节点，和滚动容器平级；确认后用 `result` 更新业务数据和入口文案，列表长时先用 `maxRows` 收住可视区。
- 自定义标记色时分别传 `color` / `borderColor` / `checkColor`，确定按钮颜色走 `confirmType`，两者不混用；亮暗两套各检查一次对比度。
- 图片选项的地址要稳定，图片只做识别，不能单独承担文案；禁用时图片压到 0.5，文字和标记一起转灰。
- 文本用 `vx-text` 写正文、说明和金额；段落加 `block`，同一行多段放 row + wrap，间距由父级给。
- 手机号、金额、银行卡和身份证用 `format`，只传数值，标签放外面；复制成功在 `copy` 里给反馈。
- 只在表达状态时传语义色；次要说明用 `secondary`，warning 文本用 `warning-ink`。
- 需要限制行数时用 `block` + `maxLines`，并在详情页或外层保留完整文本。
- 用 `vx-link` 做外部网页、协议和帮助入口；站内路由用页面跳转，表单提交用按钮。
- 链接文案写目的地或动作，例如「查看协议」「联系客服」；不要写「点击这里」，也不要把整段 URL 当文案。
- 链接默认用 `primary`；正文里不该抢眼的入口用 `secondary`，只有链接本身表达状态时才用语义色。
- 需要外链暗示时在 `suffix` 放 `external-link` 图标，图标自己带颜色；不要靠图标单独说明新窗口。
- 电话和邮箱分别用 `tel:` / `mailto:`，号码和邮箱写完整；复制成功后在 `copy` 里补埋点。
- 需要 App 内直接打开浏览器时，用 `action="none"` 在 `click` 里调用自己的 openSchema 插件，不要指望组件自己打开。
- 新增令牌时同时补亮色、暗色，并更新本文档。
- 验证码用一格一位，配合外面的标题、说明和「重新发送」；满位后只当作输入完成，不当作验证通过。
- 输入值在 `input` 里清理，数字只留 0–9、文本只留字母和数字，并截到 `length`；父级写入更长值时只显示前 `length` 位，不静默改写父级模型。
- 4 位用 `md` / `lg`，6 位用 `md` / `fluid`，8 位用 `sm` / `fluid`；超过 8 位改用两行或普通输入。
- 3+3、4+4 分组用 `separator` + `groupSize`，一屏不超过两个分隔符；模型里保持纯字符。
- 验证失败用 `invalid` 加外面错误文案，重输调 `clear()` 再 `focus()`；成功后清空模型。
- 密码圆点只做肩窥遮挡；验证码不要写日志或长期存储，高安全场景用系统密码控件。
- 密码、PIN 用数字键盘或数字键盘输入框，整页锁屏用 `mode="inline"`，弹层支付用默认 sheet；sheet 挂页面根节点，inline 放在页面底部。
- 满位只当作输入完成，在 `complete` 里校验；失败先打开 `invalid`，再调 `shake()`，然后清空让用户重输。
- 支付密码、锁屏密码打开 `password`，6 位订单号这类短数字保持明文；切换只改显示，模型不动。
- 6 位密码用 `md`，4 位用 `md` / `lg`，8 位用 `sm` 并把 `gap` 收到 8；一位都不能挤出屏幕。
- 随机排布只给「防肩窥 + 固定位置无肌肉记忆」的场景；同一轮输入里排布不变，收起重开才算新的一轮。
- 忘记密码、指纹解锁、切换账号放在 `extra` 插槽，不用键盘的按键承载；它们的分隔由内容自己排。
- sheet 模式下取消和遮罩只收起，值不清；inline 只抛 `cancel`；要「取消即清空」就在 `cancel` 里自己清，组件不替业务做决定。
- 树型菜单用 `nodes` 传好层级，`id` 保持唯一；换数据只替换 `nodes`，不要在组件里改树结构，也不要在页面里手写缩进。
- 文件树用 `icon` + `iconExpanded` 表达文件夹开合，叶子按类型给 `file-*`；图片图标用 `image` / `imageExpanded`，加载失败不用自己兜。
- 需要默认展开时打开 `defaultExpandAll`，或给节点写 `expanded`；运行中控制展开状态用 `v-model:expanded`，程序化展开用 `expandTo()`。
- 组织架构和权限菜单打开 `checkable` 和 `cascade`，提交时直接用 `check` 回传的 `keys`；半选只用于显示，不要拿它当已选。
- 需要只选中不改层级时关掉 `toggleOnClick`，展开交给箭头；只读展示时关掉 `selectable`，不要用禁用态冒充静态树。
- 行尾放状态用 `extra` 插槽，插槽里的动作自己写 `@click.stop`；整行点击只用来选中或展开。
- 层级深时打开 `showLine`，用缩进和参考线读层级；`size="sm"` 给侧栏，`md` 给页面，`lg` 给平板和独立页面。
- 数据多时分批或按目录加载，滚动的交给外层 `scroll-view`；切换目录后调 `expandTo(key)`，不要自己拼展开数组。
- 需要搜索框时用 `vx-input` 的 `variant="search"`，图标、取消和清除都由组件画；查询放在 `search` 里做，退出搜索放在 `cancel` 里收状态，不要另建搜索组件。搜索变体的键盘确认键默认就是 `search`，不需要再传 `confirm-type="search"`；要换成发送 / 下一项时才显式传 `confirmType`。
- 用 `vx-form` 包一组 `vx-form-item`，`prop` 在同组里唯一，`value` 和控件的 `v-model` 绑同一份数据；提交时 `await validate()` 再发请求。
- 输入类控件用控件自己的 `label`，表单项只接错误行；开关、评分、多选、上传这类没有标题位的控件才给表单项传 `label`。
- 实时校验在控件的 `change` / `blur` 里调 `validateField(prop)`；不要在每次输入里调 `validate()`，也不要在 `rules` 里写自动触发。
- 服务端错误写进 `error`，成功后清成空串；本地说明和错误共用一行，语义由 `help` / `error` 分开。
- 整组不可编辑时给表单 `disabled` 并同时把控件自己的 `disabled` 打开；只跳过校验不改控件会让用户以为还能改。
- 表单和卡片之间用页面留白或 `vx-white-space`；表单项自身不加外边距，同一组 `labelWidth` 统一。
- 需要错误定位时保留默认 `scrollToError`；只校验单项（失焦、联动）用 `validateField`，不要让它顺手滚动页面。
- 轮播图用 `items` 给数据；要自定义一屏时让 `src` 留空、在默认插槽里排，不要在插槽里再画一层 swiper。
- 轮播图一屏最多一个动作；图上的 `extra` 角标和插槽里的按钮自己 `@click.stop`，避免和整屏点击叠在一起。
- 轮播图的高度用 `height` 给、宽度跟随父级；卡片模式要露出相邻屏时由外层留出左右空间，不要自己缩 `width`。
- 数字动画在数据到手后播一次；同一屏最多两三个同时在跑，其余直接显示终值。
- 金额和数量把单位放进 `prefix` / `suffix`，不要拼进 `value`；需要千分位和小数位就用组件的 `separator` / `decimals`。
- 数字宽度会变的位置打开 `reserveWidth`，让它后面的单位不跟着左右滑；需要像素级对齐时给外层固定宽度。
- 筛选栏把触发条放在内容区顶部，`active` 交给 `v-model:active`；选项在默认插槽里画，选完调插槽给的 `close()`。
- 筛选项要标「已有筛选生效」时给对应的 item 打开 `active`，不要改触发条底色或加图标。
- 返回顶部和 `vx-page` 平级放。`@scroll` 里只在跨过阈值时写一个布尔，交给 `visible`；点击后由业务调 `scrollToTop()`。一页只放一个。模拟阈值时仍可传 `scrollTop`。
- 新增令牌时同时补亮色、暗色，并更新本文档。

Don't：

- 不在组件和页面里写 UTS，不给 `script` 加 `lang`。
- 不使用 `scoped`、伪元素、关系选择器、`.a.b` 连写、`!important`。
- 不在组件内部写死色值、字号、高度、圆角。
- 不把正文档位或 12px 以下的字号塞进控件；按钮、输入框的文案只用 `--vx-font-control-*`，标签用 `--vx-tag-font-*`，徽章用 `--vx-badge-font-*`。12px 只出现在标签 `sm`。
- 不在组件里判断主题或读取本地存储。
- 不新增第四种尺寸，不自造 `hover` 作为组件状态名。按下用 `pressed`。
- 不混用第二个图标库，不用 emoji 代替图标，不给图标新增第四种尺寸。
- 不把加载中当骨架屏、进度条或百分比；加载更多不是按钮，重试和空状态由业务另做。
- 不用骨架画永久内容、遮罩、进度和分割线；骨架不拦点击，也不进入键盘顺序。
- 不在骨架里放品牌色和语义色；骨架只表达结构，状态由文案和提示组件表达。
- 不在加载浮层里放取消、表单和长说明；浮层会挡住整页点击，等待期间不要把页面操作留成可用的样子。
- 不用液面动画冒充上传进度或显示百分比；它只表达「还在等」，进度用 `vx-progress`。
- 不在同一屏同时用 `vx-loading` 和 `vx-loader`，也不把四个形态堆在一页展示；等待状态只留一个。
- 不把 `delay` 当成缩短请求或遮住慢代码的手段；延迟只避开闪烁，等待本身要能结束。
- 不给面板换浅色底后仍用白字；`panelColor` 是字面值，对比度由业务保证，深底才配白字。
- 不给没有更多塞按钮、链接和长段落，也不把它做成页面区块之间的分割线；它只表示列表到底。
- 不把空状态当页面主操作：`vx-no-data` 只承载插图、说明和一个动作，不要塞表单、长列表和第二个空状态。
- 不用空状态冒充加载中或加载失败。加载中用 `vx-loading` / `vx-loadmore`，失败要写清原因并给重试入口。
- 不给空状态加外框、阴影和整块底色，也不要把它做成可点击区域；点击只落在动作按钮上。
- 不用 `vx-msg` 做轻提示、消息条和空状态：短暂反馈用 `vx-toast` / `vx-tips`，列表为空用 `vx-no-data`，需要确认用 `vx-modal`。
- 不在提示页里塞表单、列表、第二个图标和多个同义动作；补充信息放 `extra`，长内容交给页面滚动。
- 不让图标和颜色单独说明结果；标题或说明必须能独立读出成功、失败或进行中。
- 不给提示页加卡片底、描边、阴影和入场动画；结果块直接落在页面底色上。
- 不把 `type` 当装饰色：没有失败、搜索、网络等语义时保持 `default`，让文案和插图承担表达。
- 不用图标和颜色单独说明状态，主文案必须能独立读出「没有什么」和下一步。
- 不在同一屏放多个同义空状态，也不在空状态里再放「没有更多」；两者不是一回事。
- 不自定义插图尺寸和第四档 `size`；`image` 和 `icon` 插槽自己带尺寸，方框仍跟三档走。
- 不让加载文案只靠转圈表达状态；5.26 的 App 端可能不旋转，文案要写清在等什么。
- 不把加载的 `type` 铺成整块底色，也不给加载文案上语义色。
- 不把 `shadow` 当作常规按钮样式，也不在 plain / link / 禁用态上叠加阴影。
- 不把标签当按钮用，不加点击态；需要点击或选中用按钮或 chip。
- 不用标签承载长文案，也不在标签里换行。
- 不把徽章当按钮用，不加点击态、禁用态和加载态。
- 不用徽章承载超过四个字符的文案；长计数用 `max` 封顶，别把完整数字硬塞进去。
- 不用徽章表达纯装饰。没有计数或状态可表达时不要放徽章。
- 不把页脚当主导航，不放超过四个链接，也不放长段落。版权之外需要更多内容时用页面区块，不要继续加高页脚。
- 不给固定页脚加阴影、毛玻璃或第二层底色；打开 `fixed` 时不要只留页脚自身高度、漏掉底部安全区。
- 不在页脚链接里内置路由或权限判断，组件只抛 `click`；需要埋点和登录校验时由业务在事件里处理。
- 不在页面或组件的脚本里直接写色值，JS 侧统一走 `libs/theme.ts`。
- 不把消息提示当弹窗用：不在里面放主操作、表单或长说明，需要二次确认用对话框。
- 不在同一位置叠两条提示，也不把提示放进 scroll-view 或卡片，浮层会被滚动带走或裁掉。
- 不把轻提示当弹窗用：不放主操作、表单和长说明，需要确认用对话框。
- 不在同一位置叠两条轻提示，也不把轻提示放进 scroll-view 或卡片。
- 不用语义色铺满轻提示盒子，也不给图片图标着色；结果由图标和文案表达。
- 不用轻提示承载超过三行的文案；内容再多改用页面区块或对话框。
- 不在轻提示显示期间要求用户操作下面的页面，全屏层会挡住点击。
- 不用整体 `opacity` 代替 `bgOpacity` 调底色，也不把 `bgOpacity` 当成文字透明度；`bgOpacity` 只作用在底色上，整条一起淡才用 `opacity`，按下态除外。
- 不把操作菜单当对话框：不放表单、输入框、长说明和二次确认。
- 不在 `items` 里放超过 6 条动作或整段文案；长内容改用页面。
- 不用 `primary` 给每个动作染色，也不在一条菜单里放多个 `primary`。
- 不用 `disabled` 掩饰不能点的原因；禁用动作要能看出为什么不能点。
- 不在操作菜单打开时要求用户操作下面的页面；遮罩会挡住点击。
- 不把操作菜单放进 `scroll-view` 或卡片，`fixed` 定位会被裁掉或带走。
- 不把弹框当页面或路由：不放长表单、多步流程和整页内容；这些用页面区块。
- 不同时开两个弹框，也不把弹框和操作菜单叠在一起；需要等待或结果提示时用加载浮层、轻提示。
- 不把关闭叉当确认按钮用，也不给关闭叉换图标、加文字或再放第二个右上角按钮；它只负责退出。
- 不把 `closable` 和 `maskClosable=false` 当成没有出口的强制弹框；关闭叉是额外出口，不是主操作。
- 不用 `contentColor` 给普通正文做装饰色；它能覆盖的地方只有 `content`，不改变默认插槽。
- 不给弹框自定义宽度、第四档尺寸、字号和圆角；`size` 只取 `sm | md | lg`。
- 不用图标和颜色单独表达状态；标题和正文要能独立说明结果。
- 不把弹框放进 `scroll-view`、卡片或 `fixed` 容器，定位层会被裁剪或带走。
- 不用遮罩关闭冒充强制选择；关掉 `maskClosable` 时必须保留动作出口。
- 不把抽屉当对话框或操作菜单；需要确认用弹框，并列动作用操作菜单。
- 不把弹出层当对话框、操作菜单或抽屉用；需要标题栏、动作列表和跟手拖动的场合分别用弹框、操作菜单和抽屉。
- 不给弹出层面板加阴影、第二层底色、整块描边和渐变色块；层级由遮罩和留白表达，居中档才有 1px 描边。
- 不把 `width` / `height` 写成数字或 calc 表达式；宽度只作用于左右和居中，高度只作用于上下。
- 不在弹出层里再叠同档弹层而不传 `zIndex`；两个 1000 谁在上面取决于挂载顺序，要按设计表自己往上加。
- 不让面板内容无限往下长，也不给面板写死 `overflow`；长内容先给 `height`，滚动交给内容里的 `scroll-view`。
- 不把弹出层放进 `scroll-view`、卡片或 `fixed` 容器，定位层会被裁剪或带走。
- 不在抽屉里再放第二个抽屉、弹框或操作菜单；先关掉当前层。
- 不给抽屉加阴影、外描边、渐变和整块状态底色。贴边弹层都不投阴影。
- 不把 `width` / `height` 写成数字或 calc 表达式；面板自己不超过整屏。
- 不在抽屉里塞整页流程、长表单和主导航；内容只做当前页面的一段补充。
- 不把触发入口放进抽屉自身，也不要让抽屉成为唯一出口。
- 不把压屏窗当页面或长表单：不放需要滚动的内容、列表和多步流程。
- 不用压屏窗做二次确认、等待和短提示；确认用 `vx-modal`，等待用 `vx-loader`，提示用 `vx-toast`。
- 不给压屏窗加面板底色、外框和第二层阴影；内容自带海报或卡片，组件只负责遮罩和关闭。
- 不把关闭按钮做成小于 44 的热区，也不给它换图标、加文字或第二枚右上角按钮。
- 不在压屏窗打开时要求用户操作下面的页面；遮罩会挡住点击。
- 不把压屏窗放进 `scroll-view`、卡片或 `fixed` 容器；定位层会被裁剪或带走。
- 不在弹框里再放第二个弹框、操作菜单或吸顶容器；需要更多内容时先收起当前弹框。
- 不用自写字色代替 `type`；主题令牌保证亮暗对比度。
- 不用日期时间选择器选长列表、层级数据或带搜索的选项；这些用页面或搜索。
- 不在滚轮里放按钮、开关和说明，也不在头部再放第二个操作：头部只承载取消、标题和确定。
- 不把 `change` 当提交：`change` 只用于预览和联动，提交要等 `confirm` 或 `v-model` 更新。
- 不给选择器加第四档尺寸、自定义行高和字号；滚轮高度和行高只来自令牌，且要保证指示器高度等于行高。
- 不用自绘高亮块代替选中行的字重和颜色；滚轮的高亮只由 1px 细线和文字层级表达。
- 不把 `maskColor` 写死成一套主题色；要跟随亮暗就传 `var(--vx-color-*)`。
- 不同时开两个选择器，也不把它放进 `scroll-view`、卡片或 `fixed` 容器。
- 不用联动选择器做带搜索、分页或远程分批的选项列表；先在页面里筛好再打开。
- 不把树形数据拍平成多套数组再手动同步下标；`options` 用 `children` 表达层级，组件自己算列。
- 不用 `change` 当提交：`change` 是不可选路径之外的草稿，提交等 `confirm` 或 `v-model`。
- 不给联动选择加自定义行高、列宽和字号；行高和高度只来自 `--vx-picker-*`。
- 不把 `disabled` 当隐藏：不可选项留在滚轮里转灰，停上去时确定置灰；要隐藏就从 `options` 里去掉。
- 不在滚轮两侧画渐变、阴影和列分隔线；面板层级和选中行只靠字重、颜色和 1px 指示线。
- 不把 `options` 和 `modelValue` 做成两套下标；`v-model` 存值，下标只在组件内部用。
- 不用联动选择器承载筛选后的搜索结果；搜索和层级选择分开，长列表先在页面里收敛。
- 不用 `success` / `danger` 表达分数高低，评分只在评价风险等级时才借用语义色。
- 不用单选做多选、开关和页面导航；多选用 `vx-checkbox` / `vx-checkbox-group`，开关用 `vx-switch` 类控件，导航用页签或列表行。
- 不在同一组里混用 `circle` 和 `check`，也不混用 `placement` 和 `size`；需要两种样式时拆成两组。
- 不给圆圈换第二套形状、第二套描边宽度和第四档尺寸；尺寸只来自 `--vx-radio-size-*`。
- 不用 `border` 充当未选中描边，也不用自定义浅色描边；低对比的圆圈在表单里读不出来。
- 不把 `color` 当主题色用：它是字面值，组件不推断明暗，禁用时也不生效；要跟主题就传 `var(--vx-color-*)`。
- 不用 `disabled` 隐藏选项或掩盖权限问题；禁用项仍要可读，原因写在说明里。
- 不把标题、提交按钮和校验文案塞进单选组；这些放在外面的卡片、表单行或按钮上。
- 不给单选加阴影、渐变、浮动和选中动画；换项直接换填充和对号，列表按下才铺 `surface-pressed`。
- 不用多选做单选、开关和页面导航；互斥选项用 `vx-radio-group`，开关用 `vx-switch` 类控件。
- 不给方框换正圆、胶囊和第四档尺寸；尺寸和圆角只来自 `--vx-checkbox-size-*` 和 `--vx-checkbox-radius-*`，方框不能和单选的圆圈混用。
- 不用浅色描边冒充未选中方框；低对比的方框在多选列表里读不出来。
- 不把 `indeterminate` 塞进分组里的每一项；它只服务单独使用的「全选」，分组里的选中状态由数组说了算。
- 不在到上限后把未选项转灰；`max` 只拦新增勾选，提示交给 `exceed`，否则用户看不到为什么点不动。
- 不把标题、全选条、提交按钮和校验文案塞进多选组；这些放在外面的卡片、表单行或按钮上。
- 不用数据选择器做页面导航、二元开关和长列表；导航用页签，开关用 `vx-switch`，长选项用 `vx-select`。
- 不在同一组里混用 `outline` / `plain` / `soft`、`rounded` / `pill` / `square` 和多种语义色。
- 不给胶囊加阴影、渐变和选中动画；选中只通过底色、描边和字重表达。
- 不把 `color` / `bgColor` / `borderColor` 当主题色；它们不随亮暗切换，禁用时也不生效。
- 不到上限后把未选项转灰或禁用；`max` 只拦新增选择，提示交给 `exceed`。
- 不用图标或颜色单独表达选中；选项文案、描边和字重仍要能读出来。
- 不给数据选择器加第四档尺寸、自定义行高、自定义圆角和多行文案；档位和形状由 props 收口。
- 不把 `max` 当校验；提交前仍要检查最少选择数。
- 不给搜索框传 `label` / `required` / `unit`，也不把搜索做成带标题的输入框；搜索没有标题位，这三项在 `variant="search"` 下不渲染，标题和单位放到外面的表单行。
- 不用验证码输入框做手机号、密码登录、金额和长文本；普通输入用 `vx-input`，数字加减用 `vx-number-box`。
- 不把标题、错误文案、重发倒计时和提交按钮塞进组件；它们属于外层表单或卡片。
- 不把 `complete` 当成验证成功；是否自动提交由业务决定，失败要能重输。
- 不给格子加阴影、渐变、抖动、整格缩放和成功动画；焦点切换和满位直接落位。
- 不混用 `variant` / `shape` / `type`；`line` 不参与圆角，`filled` 的焦点格才铺语义浅底。
- 不用 `disabled` 冒充结果展示；只读结果用 `readonly`，只有整段流程不可用时才用 `disabled`。
- 不把 `password` 当加密或安全存储；它只改显示，模型和事件仍是明文。
- 不新增第四档尺寸、自定义格子宽高比和自定义光标高度；档位由 `size` 收口。
- 不用开关做互斥选项、多选和页面导航；互斥用 `vx-radio-group`，多选用 `vx-checkbox-group`，导航用页签或列表行。
- 不用开关代替提交按钮：开关只写当前值，保存、请求和路由放在事件里。
- 不给轨道和滑块换方形、胶囊以外的形状，也不新增第四档尺寸；尺寸只来自 `--vx-switch-*`。
- 不把关闭轨道涂成深灰实心，也不给滑块加阴影、渐变和外发光；浅灰轨道、1px 描边和位置已经能说明关闭。
- 不用颜色单独表达打开或关闭；滑块位置是主线索，自定义颜色只作品牌收尾，禁用和加载仍要能被读出来。
- 不把 `loading` 当进度或长时间遮罩；请求结束就关掉，失败要把值改回去并给出口。
- 不用 `disabled` 掩盖权限问题；禁用项仍要可读，原因写在 `description` 或外面的说明里。
- 不在一个设置行里放两只开关，也不在开关文案里塞长段落；需要更多内容时拆成列表或页面区块。
- 不把开关放进原生 `switch`、`checkbox` 里再包一层；自绘控件已经处理了热区、按下和尺寸。
- 不用分段器做页面级导航、多选和开关；导航用页签，多选用复选框，二元状态用开关。
- 不把标题、说明、价格、徽章和提交按钮塞进 `options`；分段器只显示短文案，富内容留在内容区。
- 不为了多放一段缩小字号、减少左右内边距或让文案换行；超过 5 段改用页签、列表或选择器。
- 不给分段器加滑块、下划线和阴影；段间线只由 `divider` 打开，选中态只换底色和字重。
- 不用 `divider` 分隔不同内容块，也不用它替代选中态；内容块之间用间距或卡片。
- 不用禁用冒充隐藏，也不把当前段设成禁用；原因写在标题或说明里。
- 不让分段器自己发请求、改路由或保存业务状态；这些动作放在 `change` 里由页面处理。
- 不用滑块做开 / 关、互斥选择和精确输入；开关用 `vx-switch`，互斥用 `vx-radio-group`，精确数值用 `vx-number-box`。
- 不给滑块换第二种轨道形状或第四档尺寸，也不把圆盘换成方块；尺寸只来自 `--vx-slider-*`。
- 不把已选段涂成浅灰、把未选轨道涂成深灰：状态由已选段长度和圆盘位置表达。
- 不把数值放进圆盘或让它跟着圆盘走；两端会被裁，拖动时还会压住轨道，数值固定在 `top` / `bottom` / `right` 三处之一。
- 不给滑块加阴影、渐变和浮动光晕；光晕只在按下时出现，取语义色浅底。
- 不用 `disabled` 掩盖权限和等待：禁用项仍要能读，请求中的值由业务自己锁住。
- 不在一次拖动里同时发请求或路由；`changing` 只做联动显示，提交放 `change`。
- 不把标题、说明和按钮塞进滑块；它们放在外面的卡片、表单行或页面区块。
- 不给多选加阴影、渐变、浮动和选中动画；换项直接换填充和对号，列表按下才铺 `surface-pressed`。
- 不给评分换第二套星形或 emoji；星形只取核心字体的 `star`，尺寸只取 `--vx-rate-size-*`。
- 不用 `disabled` 冒充只读展示；颜色要留就传 `readonly`，只有整个表单不可用时才灰掉。
- 不把数字框当自由输入框：`step` 只决定加减量，不替业务校验精度和整数；需要整数或小数位上限时在业务侧校验。
- 不在数字框里塞单位、标题和辅助说明；这些放在外面的表单行，数字框只留数值和加减。
- 不给数字框加第四档尺寸或第二种图标；图标只取 `minus` / `plus`。
- 不把倒计时当高精度计时器：`showMilliseconds` 只到 100ms，需要毫秒精度时在业务侧计时。
- 不在倒计时里放标题、按钮、链接和表单；这些放在外面的卡片或页面区块。
- 不把 `color` 当成整体前景色：它只改数字；分隔和单位用 `unitColor`。
- 不在一屏放多个带十分位的倒计时，也不给倒计时加第四档尺寸、阴影和整块状态底色。
- 不在评分里塞标题、说明和提交按钮，也不把评分做成左右滑动的页面级手势，横滑只改分值。
- 不把时间轴做成按钮、表单或横向滚动区；组件不提供点击、禁用态和插槽。
- 不用节点颜色和图标代替文字状态；同一条时间轴里只保留必要的语义色。
- 不给每条事件都配图标：阶段用图标节点，同一阶段下的动态用圆点。
- 不在时间轴里塞长段落、多个操作和第二条时间轴；这些交给页面区块或卡片。
- 不把步骤条当导航栏或页签；切换页面用页签，跳转用列表行。
- 不在步骤条里放表单、按钮和主操作，也不要给当前步骤加加载态。
- 不用 `active` 越界表达全部完成；末项就是当前步骤，最后一段连线保持待处理。
- 不给横向步骤塞长文案或超过 5 个步骤；换行交给纵向。
- 不用自定义色代替 `type`，也不让节点颜色单独承担状态；标题、序号和勾都要能说明当前步骤。
- 不用进度条做步骤导航、评分或加载中；步骤用 `vx-steps`，打分用 `vx-rate`，等待用 `vx-loading`。
- 不在轨道里放文字、图标和按钮；标签和读数用 `label` / `text` / `color`，操作放外层卡片或列表行。
- 不把 `percent` 当业务提交值；它只控制显示，接口未返回前不要提前写到 100。
- 不给进度条加第四档尺寸、第二种图标和禁用 / 加载态；它是展示件，不是表单控件。
- 不用渐变表达成功、失败或警告；渐变只给品牌强调，语义状态用 `type` 和文字说明。
- 不让动画落定时间早于接口返回；`duration` 只负责显示补间，完成状态仍由业务数据决定。
- 不用环形进度做步骤导航、评分或加载中；步骤用 `vx-steps`，打分用 `vx-rate`，等待用 `vx-loading`。
- 不把环形进度当按钮或滑块；它不响应点击、拖拽和输入，交互放在圆环外。
- 不在弧线上塞渐变、描边和阴影；要品牌渐变时改用 `vx-progress` 的填充。
- 不给圆环加第四档尺寸或任意起始角；更大的圆环用 `width` / `thickness`，半圆只有上半圆。
- 不让数值只靠弧线颜色表达；圆心或旁边必须有可读的百分比或文字。
- 不把 `percent` 当业务提交值；接口未返回前不要提前写到 100。
- 不把中心写成会被弧线挡住的长文案；整圆最多 4 个字，半圆插槽最多两行。
- 不把标签写成会被截断的长句；标签只放 2–6 个字，完整说明放在外面的卡片或列表行。
- 不把页签当步骤条、页面导航或长列表；进度用步骤条，页面跳转用 tabBar 或列表行。
- 不放超过 5 个页签，不换行、不横向滚动，也不靠缩小字号硬塞长文案。
- 不在同一屏放两条 `inverse` 页签，不默认拿 `primary` 铺满整条，也不做渐变背景。
- 不靠颜色单独说明当前页签；字重和短线 / 胶囊必须同时存在。
- 不给页签内置内容、路由、请求和插槽；页面内容、空状态和提交入口由业务自己排。
- 不把竖向标签当页面主导航或步骤条：它是同一块区域里的侧边切换，页跳转用 tabBar 或列表行，流程用 `vx-steps`；竖排也不要 `inverse`。
- 不用禁用冒充权限或隐藏入口，也不把当前页签设为禁用；不可用时先隐藏。
- 不把角标当按钮，也不在每个页签上挂计数；同一含义一屏只留一处。
- 不写死 `bgColor` / `color` 后又不检查另一套主题；自定义反色条不传 `color` 会让未选中文字在暗色下消失。
- 不同时配置原生 `tabBar` 又使用 `vx-tabbar`，两条底栏会叠在一起；同一屏也只留一个底部导航。
- 不把标签栏当页签、步骤条或页面内筛选；页面内切换用 `vx-tabs`，流程用 `vx-steps`。
- 不在一个标签栏里放两个凸起项，也不把 `action` 项当可选中页签；当前索引不要指向 `action` 项。
- 不给凸起圆钮加阴影、渐变、第二套形状和第四档尺寸；尺寸只来自 `--vx-tabbar-raise-*`。
- 不用颜色单独说明选中项；字重、文字色和图片的 `activeImage` 必须同时存在。
- 不把标题、搜索框、表单和主操作塞进标签栏；它只做底部导航，内容放在页面里。
- 不用禁用掩盖权限；不可用入口优先隐藏，必须保留时写清原因。
- 不给标签栏加第四档尺寸、自定义栏高和圆角；数值只取 `--vx-tabbar-*` 和 `--vx-badge-*`。
- 不把标签栏放进可滚动内容中间当浮动条；它要么固定贴底，要么作为列布局的最后一项留在文档流里。
- 不把滑动菜单当按钮栏或主导航：一行只做行内快捷操作，主操作留在页面上。
- 不在滑动菜单里直接删数据、跳路由或发请求；组件只抛 `select`，后续由业务处理。
- 不在 `v-for` 列表里省略 `name`，也不要靠动作对象反推行；同一份 `actions` 会出现在每一行。
- 不把动作写成 5 个字以上、不缩小字号硬塞、不给每个动作配图标；图标只帮助识别，不能代替文案。
- 不用 `default` 浅灰动作冒充禁用；禁用项要单独传 `disabled`，颜色和点击一起停下。
- 不在同一页混用 `multiple` 和默认展开策略，也不要一屏展开超过两行。
- 不给滑动菜单加全屏透明遮罩、外框、圆角、阴影和渐变色；边界由外层列表或卡片负责。
- 不把滑动菜单放进横向滚动区、页面级横滑手势或另一个滑动菜单里；手势会互相抢。
- 不把表单、长文案、图片网格和主操作塞进 `extra` 插槽；它只放短动作。
- 不给 `extra` 插槽传了内容却漏掉 `extraWidth`，也不要让插槽宽度和露出距离对不上。
- 不在 `swipeable=false` 时还指望手势能用；也不能用禁止滑动冒充整行禁用，内容仍要能读、能点。
- 不给卡片加阴影、渐变和整块状态色；卡片只有描边一种层级。
- 不在卡片里再套卡片，也不把页面的主按钮塞进卡片底部当页脚。
- 不在 `clickable` 的卡片里再放入口、按钮和链接，避免一次点击触发两层。
- 不用头像代替标题或名称，也不让图片单独说明卡片内容。
- 不把 `headerBg`、`titleColor`、`metaColor` 固定成一套写死的色值来冒充主题；要跟随主题就传令牌。
- 不把列表分组当卡片容器塞按钮、表单和长段落；这些交给页面区块或表单行。
- 不用标题栏充页面标题、导航栏或页签；页面标题交给导航栏或首屏，页面切换交给页签。
- 不给每个区块都加竖线或 `soft` 浅底；同一层级的标题栏只用一种标记，一屏只保留必要的强调。
- 不用 `success` / `info` / `warning` / `danger` 给竖线或标题做装饰；标题栏只表达区块层级，状态交给下面的标签、徽章和提示。
- 不把按钮、表单、长段落和第二个标题栏塞进标题栏；右侧只放一个短操作，更多内容交给下面的区块。
- 不把分割线当区块间距；标题和正文之间仍用 8–12，标题栏和上一个区块之间仍用 `xl`。
- 不给标题栏加阴影、渐变、描边和浮层层级；`soft` 只有浅底和 `md` 圆角。
- 不给静态标题栏加 `clickable` 来换取按下态；只有整条真的可点时才打开，并保证里面有清楚的出口。
- 不新增第四档尺寸、第二种竖线宽度和自定义圆角；尺寸、竖线和圆角只来自 `--vx-section-*`、`--vx-radius-*`。
- 不给静态行保留按下底色和箭头，也不要让禁用行继续抛 `click`。
- 不把分割线画到分组最后一行，也不让分割线顶到卡片两侧的描边。
- 不把分割线调到和正文一样深，也不让自定义线色抢过卡片外框；默认保持安静。
- 不用列表行承载整段长文；说明放在 `description`，更多内容用页面区块。
- 不新增第四档列表行高，也不给行或分组加自定义圆角、阴影和整行状态底色。
- 不在可点击行里再套一个整行级入口；行内单个操作自己 `@click.stop`，避免触发两次。
- 不把索引列表当页面导航或跨页目录；它只在同一个可滚动的数据集里定位分组。
- 不在组件内做排序、拼音首字母转换和远程请求；分组结果由业务准备好再传入。
- 不给分组标题加阴影、渐变和语义色；它就是列表里的分层条，颜色只取 `default-soft` 和正文色。
- 不用索引条代替搜索：字母跳转只按分组走，找人、找商品仍用搜索。
- 不把 `height` 写成数字或 `auto`；`scroll-view` 没有确定高度就不会滚，索引定位也会失效。
- 不在吸顶标题上放按钮和第二个操作；需要操作时放在 `prefix` 或行内，吸顶标题只显示字母。
- 不给索引字母单独设热区：整条索引条是连续热区，滑过和按下都定位，拆成一个个小圆点会断开手势。
- 不让指示器常驻或挡住整行；它只在拖动索引条时出现，松手即消失。
- 不把 `activeColor` 写死成浅色品牌底还沿用白字；前景固定 `on-primary`，浅底时换深色品牌色或降低明度。
- 不在索引列表里放分页加载、虚拟滚动和第二层滚动容器；超大数据先分页，再交给列表。
- 不把折叠当导航、页签或主操作入口；切换页面用页签，跳转用列表行，确认用按钮或弹框。
- 不在同一组折叠里重复 `name`，也不混用尺寸和形态；最后一项的分割线由组件判断，不要手写 `index`。
- 不给面板加外框、圆角和阴影；外轮廓只由 `vx-collapse` 负责。`plain` 只在卡片内部使用。
- 不用 `disabled` 掩饰不能展开的原因；原因写在 `description` 里。插槽内容不自动转灰，也不要让它假装禁用。
- 不把长表单、页面主操作和第二个折叠面板塞进一个面板；需要这些内容时用页面区块或卡片。
- 不让自动高度承载超过一屏的内容；超过时用 `contentHeight` 固定高度并滚动。
- 不在同一行混用不同 `columns`，也不在容器上重复声明列数；列数只认格子自己的 props。
- 不给格子加圆角、描边、阴影和整块状态底色；自定义底色用 `bgColor`，外框只由 `vx-grid` 负责。
- 不在可点击的格子里再放入口、按钮和链接，避免一次点击触发两层。
- 不用宫格承载表单、长文案和页面主操作；需要这些内容时用表单行或页面区块。
- 不把 `extra` 角标当主文案，也不让角标盖住 `icon` 和 `title`；角标只补状态。
- 不为宫格新增第四种尺寸或第二套图标尺寸；图片只取 `--vx-grid-media-*`。
- 组件不给字体图标自动套第二层色底；需要自定义底时用格子的 `bgColor` 或 `icon` 插槽自己画。
- 不用 `bgColor` 表达成功、失败等状态；状态仍交给语义色和图标。
- 不用 `type` 给普通入口做装饰色；只有状态含义时才上语义色。
- 不让主文案在格子里换行；单行省略，完整文字用 `description` 或默认插槽。
- 不给图片组合加外框、卡片底色、阴影和圆环以外的装饰；外轮廓和留白由外层负责。
- 不用图片组合承载标题、数量、说明、按钮和表单；这些放在卡片、列表行或页面区块里。
- 不把 `sm` 图片组合当独立主操作：40 是堆叠和密集场景的热区下限，独立入口用 `md` / `lg` 并留出外层间距。
- 不用 `offset` 做瀑布流或任意间距布局；它只调整相邻两张图的叠放关系，多行仍按顺序排。
- 不让 `wrap` 搭配负 `offset`，也不给 column 传 `wrap`；两种写法都会让行列关系难以预期。
- 不用 `ringColor` 写死一套主题色；要跟随主题就传 `var(--vx-color-*)`，亮暗对比度由业务保证。
- 不把 `clickable` 的缩略图再套一层点击入口，避免一次点击触发两层；静态展示关掉 `clickable`。
- 不用空 `src`、裂图和纯色块冒充有内容；失败时组件已经给占位图，业务在 `error` 里补重试或换图。
- 不新增第四档图片尺寸，也不给图片组合加自定义圆角和描边宽度；`shape` 只取三档。
- 不用图片预览做单张静态图、页面头图或轮播广告；那些用页面自己的 `image` 或 `swiper`。预览层只用来沉浸式看一组图。
- 不在 `delete` 里直接改 `items` 以外的状态，也不让组件替你删数组；删完最后一张要自己把 `show` 关掉。
- 不把图片预览放进 `scroll-view`、卡片或 `fixed` 容器；定位层会被裁剪或带走。
- 不给图片预览加圆角、阴影、渐变、语义底色和品牌色；它只有黑底、白字、一条 1px 分割线和一个危险色删除动作。
- 不把加载转圈、缩略图条、循环播放、下载、分享和删除确认塞进组件；需要时用 `extra` 插槽或外层页面，删除确认用 `vx-modal`。
- 不把长列表全塞进图片预览；一组 1–20 张，更多图片先分页或分批传入，组件不做虚拟化。
- 不把底部说明写成两行或塞进按钮；说明单行省略，完整内容由外层承载。
- 不同时打开两个图片预览，也不把它和操作菜单叠在一起；删除确认用 `vx-modal`，它默认 1020，压在预览层 1015 上。
- 不用 `bgColor` 冒充主题；需要跟主题时保留默认黑底，品牌底色由业务保证前景对比度。
- 不把 `zIndex` 当成常规样式；只有被业务浮层盖住时才调，且要保持高于消息提示，低于弹框、加载浮层和轻提示。
- 不给图片预览加 `size`、自定义圆角、自定义关闭热区和第二套图标；尺寸只来自 `--vx-gallery-*` 和图标三档。
- 不用图片上传做纯展示、轮播和头像裁剪；展示用 `vx-image-group` / `vx-gallery`，裁剪用专门组件。
- 不把上传格子和 `vx-image-group` 混排成同一组；一个可选、一个只读。
- 不让 `count` / `maxSize` / `accept` 只靠提示文案；组件负责拦，页面提示只是补充。
- 不用假进度条或提前写 100%；拿不到进度就写「上传中」，完成由 `success` 决定。
- 不在删除时按数组下标跨异步操作；用 `id` 或删除回调里的文件对象。
- 不用红色描边表达上传失败；失败用遮罩和重试，红色只给删除圆点。
- 不把标题、说明、提交按钮和错误文案塞进格子；这些放在外层卡片或表单行。
- 不给上传加自定义格子尺寸、第四档圆角、拖拽排序和视频；v1 只做图片。
- 不用临时路径当最终地址存库；成功后取 `url`。
- 不用二维码承载长文案、富文本和图片；超长内容先换短链接，或者拆成多个二维码。
- 不在暗色主题下把二维码反色，也不在二维码上叠渐变、半透明、图片蒙层和贴纸。
- 不给二维码加点击态、禁用态、加载态、形状选项和第四档尺寸；它不是按钮。
- 不用过大的中心图标（超过 0.3）或超过 10 版的密集方阵；扫码失败时先缩短内容，不要缩小二维码。
- 不在列表里批量渲染长内容二维码，也不在输入事件的每一帧重新生成；内容确定后再渲染。
- 不用 CSS `position: sticky` 代替 `vx-sticky`：App 不支持，两端行为会分叉。
- 不把吸顶条放进 `position: fixed` 浮层、带 `transform` 的容器或原生 `list-view` 的 sticky 结构，`fixed` 的坐标原点会变。
- 不把 `offsetTop` 当成滚动容器的 `top`；它从页面内容区顶部、安全区之外算起，嵌套滚动区不用它做吸顶。
- 不用 `vx-sticky` 做页面导航栏或固定页脚；导航栏交给原生导航或 `vx-navigation-bar`，固定页脚用 `vx-footer`。
- 不在吸顶条里放输入框、主操作、长说明和第二个 `vx-sticky`；这些放进 `suffix`。
- 不给吸顶条写死高度，也不用 `overflow: hidden` 裁掉分割线或阴影；高度由内容撑开，占位按实测高度补。
- 不在同一屏叠两个不带 `suffix` 的吸顶条，也不要让吸顶条压过消息提示和轻提示。
- 不靠滚动事件里反复 `refresh()` 兜底；只在异步布局结束后重测一次。
- 不把固定导航栏放进 `scroll-view`、卡片、带 `transform` 的容器或原生 `list-view` 的吸顶结构，`fixed` 的坐标原点会变；非固定的导航栏可以留在文档流里。
- 不用导航栏承载页面主操作、长表单、tabBar 或第二个导航栏；这些交给页面、页脚和页签。
- 不用状态栏代替导航栏：标题、返回和右侧动作交给 `vx-navigation-bar`；导航栏已经带 `statusBar` 时不要再叠一只状态栏。
- 不在状态栏插槽里放主操作、表单、长文案和第二只状态栏；App 上这块区域由系统绘制，内容会被盖住。
- 不把固定状态栏放进 `scroll-view`、卡片或带 `transform` 的容器，`fixed` 的坐标原点会变。
- 不在透明底或渐显初期画分割线和阴影；需要边界时等背景够实，或交给下面的自定义头部。
- 不用状态栏承载底部安全区、tabBar 或页面背景：底部安全区归标签栏、页脚和弹层。
- 不在透明底上默认画分割线和阴影；需要分层时等渐显到位，或用 `shadow` 代替线。
- 不让插槽内容依赖 `color` 和字号继承，自己带；小程序上不要往 `suffix` 塞两个以上动作。
- 不用 `vx-page` 接管路由、页面转场和登录拦截；它只管一页的骨架，返回只调 `uni.navigateBack`。
- 不在 `vx-page` 外面再叠一只状态栏或导航栏；需要透明渐变导航时不要用 `vx-page`，直接用 `vx-navigation-bar` 和 `scroll-view` 自己组合。
- 不在另一个 `scroll-view` 里再放整页的 `vx-page` 做双层滚动；舞台和卡片里嵌入时给外层固定高度，整页场景用 `scroll=false` 交给页面滚。
- 不让业务自己量导航栏高度再传给 `vx-sticky`：`offsetTop` 用插槽里的 `navHeight`，滚动值单独订阅 `@scroll`。`navHeight` 已经扣掉状态栏留白。
- 不把 `vx-back-top` 这类 `fixed` 放进 `vx-page` 的默认插槽。插槽在 `scroll-view` 里面，固定层会被带走或裁掉。滚动内容走插槽，固定层和 `vx-page` 平级。
- 不在 `scroll=false` 时还依赖 `refresh` / `loadmore` / `scrollToTop`；要下拉刷新就换 `pages.json` 的 `enablePullDownRefresh`，要触底就用外层滚动自己监听。
- 不把 `tabbar` 和 `safeArea` 当成互斥开关：两者是叠加的，`bottomInset` 才是最终占位高度。
- 不在 `back` 打开时再监听 `back` 重复退一次；要拦截就传 `:back="false"`，自己画返回并在处理完后调 `uni.navigateBack`。
- 不给页面容器加自定义高度、第二套顶栏和内置 tabbar；`tabbar` 只预留高度，标签栏用 `vx-tabbar` 自己放，并传 `:placeholder="false"` 避免占位叠两次。
- 不把滚动消息当列表或详情页：它只轮播一条，详情和请求留在业务。
- 不在同一页面放两条同时轮播的通告，也不要让轮播快过 1200ms。
- 不用 `height` / `padding` / `radius` / 自定义字号改滚动消息：尺寸只取 `size`，外观只取 `variant` / `shape`。
- 不在 `items` 里放多行文案和富文本；文案固定单行省略，需要多行时改用卡片或页面区块。
- 不把 `prefix` / `suffix` 当第二个页面入口：各自只放一个短操作或标签。
- 不用语义色给每条消息换颜色；状态色靠 `bgColor` + `iconColor` 显式传，图标是唯一的强调色。
- 不给滚动消息加阴影、渐变和整块状态底色；`card` 只有一条描边。
- 不把通告栏当轮播容器：它只显示一条公告，多条消息用 `vx-rolling-news`，也不要自己叠两个通告栏。
- 不用 `scrollable` 承载需要逐条读完的长文案；放不下时先换短文案，或改 `wrap` 让用户读完。
- 不在 `scrollable` 时传默认插槽指望它滚动；滚动只读 `text`，插槽内容保持静态。
- 不用 `activeMode` 改滚动方向或循环节奏；它只决定第一轮从哪里开始。
- 不给通告栏加 fixed、阴影、渐变和第二个状态底色；吸顶交给 `vx-sticky`，固定交给页面。
- 不把通告栏做成表单、导航或主操作区；它只承载一条公告、一个图标、一个关闭入口和最多一个短操作。
- 不用自定义颜色冒充主题：`bgColor` / `color` / `iconColor` 是字面值，跟主题时传 `var(--vx-color-*)`，亮暗对比度自己保证。
- 不在默认插槽里放自己的按钮或链接；这些放进 `suffix`，或关掉 `clickable`，避免一次点击触发两层。
- 不新增第四档高度、第二套字号和自定义关闭热区宽度；尺寸只取 `--vx-notice-bar-height-*` 和图标三档。
- 不把气泡弹框当表单、二次确认或页面导航：确认用弹框，动作多用操作菜单，长内容用页面区块。
- 不在一个触发区上叠两个气泡，也不把气泡和操作菜单、弹框同时打开；同一屏只留一个。
- 不给菜单项加第二行、图标底、选中底色和自定义圆角；选中只加勾和主色，危险动作只换文字和图标色。
- 不用 `solid` 菜单项表达 primary / danger；实心底上的项统一用前景色，语义色只在 `surface` 下生效。
- 不把 inline 聊天当弹层控制显隐；inline 用 `v-if`，`show` 和 `open()` / `close()` / `toggle()` 只对 popover 生效。
- 不把长段落、图片网格、表单塞进菜单；自定义内容用 `extra`，也只放短内容。
- 不用 `close()` 抛 `close`；`close` 只代表用户点外部、滚动或 Esc。
- 不让箭头脱离触发区：箭头跟随触发区中心，面板被夹到屏幕内时在气泡里收口。
- 不在组件里判断主题；`surface` / `solid` 和箭头颜色都来自令牌。
- 不把气泡放进带 `transform` 的祖先里还指望 fixed 坐标准确；坐标原点会跟着变。
- 不把 `vx-white-space` 当分割线、骨架屏或可点击占位；它只留白。
- 不给 `vx-image` 的百分比宽度配 `ratio`，也不要用它做轮播、裁剪、长按保存和骨架扫光。
- 不用 `vx-avatar` 做头像组、裁剪上传、在线状态点或徽章内嵌；头像组用 `vx-image-group`，徽章用 `vx-badge` 的 `absolute` 包一层。
- 不给 `vx-avatar` 的 `bgColor` / `color` 传会自动推导的颜色；它们是字面值，跟主题时显式传 `var(--vx-color-*)`。
- 不用 `vx-divider` 做卡片外框、区块留白和带图标的分组标题；它就是一条线。
- 不把 `vx-safe-area` 当底栏、导航栏或背景板，也不在它上面再叠一条状态栏。
- 不用 `vx-white-space` 的 `bgColor` 表达成功、失败或警告，也不用它画卡片和浮层。
- 不把 `vx-wing-blank` 当卡片、弹层边界或点击入口；背景、圆角和描边交给外层。
- 不给留白组件加第四档尺寸、阴影、描边和外部间距。
- 不给 `height` / `gap` 传裸数字、负值或 `calc()`；单位缺失时回落到档位，不要靠裸数字碰运气。
- 不在 `vx-wing-blank` 里再套一个 `vx-wing-blank` 做同方向的叠加；页面边距只留一次。
- 不在横向 flex 里用 `vx-white-space` 占位，也不要给 `vx-wing-blank` 再加第二套宽度。
- 不把 `vx-row` / `vx-col` 当卡片、弹层边界或点击入口；底色、描边、圆角和点击交给列里的内容。
- 不用栅格替代普通纵向布局：只有一两块内容、宽度固定时，直接写 `view` 和留白。
- 不在同一行混用两套间距，也不给行加外边距当区块间距；行列间距用 `gutter` / `lineGutter`，区块间距用 `vx-white-space`。
- 不给栅格加像素级列宽、`rpx` 间距和第四种对齐方式；宽度只来自 24 份，间距只收 px。
- 不用 `push` / `pull` 调整阅读顺序：它只改视觉位置，读屏和键盘仍按 DOM 顺序走。
- 不把关键操作藏在只有宽屏才出现的列里（`span="0"` 加断点），手机上要另给入口。
- 不在横向 flex 容器里放 `vx-row` 指望它撑满；行不写宽度，靠纵向容器的 `stretch`。
- 不靠缩小 `gutter` 在小屏塞进更多列；放不下时减少列数或缩短文案。
- 不用分隔列表承载表单、长文案、页面主操作和滚动内容；这些用表单行、列表行或页面区块。
- 不把 6 个以上入口塞进一行，也不靠缩小字号硬塞；超过 5 个改用 `vx-grid` 或列表。
- 不给分隔列表加外框、圆角、阴影和第二层底色；外轮廓交给卡片，整条只保留 `surface` 和竖线。
- 不用 `valueColor` 表达成功、失败或危险；语义色只在业务本身表达状态时出现，角标用 `badgeType`。
- 不在默认插槽里再套整条点击入口或第二个分隔列表；一次点击只触发一层。
- 不把选择框嵌进页面或改成下拉菜单；它是底部弹层，内嵌选择用 `vx-picker`、页签或列表。
- 不在选择框里放搜索、分页、表单和长说明；选项多到要搜索时改用独立页面或带搜索的弹层。
- 不用单选的正圆表示多选，也不把复选的小圆角方形用于单选；两种标记不互换。
- 不把 `checked` 写进选项数据；选中值只来自 `v-model` / `v-model:values`，打开时组件自己复制草稿。
- 不在打开期间改模型并要求草稿跟着跳；要换选中项先收起再改，或者重新打开。
- 不用 `disabled` 隐藏选项或掩盖权限；禁用项仍留在列表里，原因写在文案或外层说明。
- 不把确定按钮做成第二套语义色和标记色混在一起；标记跟 `type`，按钮跟 `confirmType`，两者分开。
- 不把选择框和操作菜单、弹框、日期时间选择器同时打开；同一屏只留一个底部弹层。
- 不给选择框加第四档尺寸、自定义行高和字号；行高只取列表行三档，图片只取 `--vx-select-media-*`。

- 不用 `vx-text` 做标签、徽章、区块标题和富文本；这些交给 `vx-tag`、`vx-badge`、`vx-section` 和 `rich-text`。
- 不给文本传任意字号、行高、内边距和外边距；尺寸只取 `sm` / `md` / `lg`，行高跟档位走。
- 不用 `format` 包住带标签的整串；格式化只接数值本身，标签放在组件外面。
- 不把金额、手机号、证件和订单状态截断成省略号；这些内容优先换行或加宽容器。
- 不同时开 `copyable` 和 `selectable`，也不把长按当唯一复制入口；桌面端和键盘用户要有可见按钮或可选文本。
- 不用颜色单独表达状态，也不给正文加装饰色；状态旁边要有可读文字。
- 不把链接当按钮：主要操作、表单提交和页面主入口用 `vx-button`。
- 不给链接加底色、描边、圆角、阴影和内外边距，也不自造第四档字号或字重。
- 不在同一段里放两个以上链接，也不让一屏的链接颜色超过两种。
- 不用下划线以外的装饰线，不用语义色做装饰，也不给链接加粗强调。
- 不截断链接文案，不把完整 URL 放进正文；长地址放 `href`，文案用短词。
- 不在链接里内置路由、权限和埋点；这些放在 `click` / `copy` 事件里。
- 不给数字键盘加第四档尺寸、自定义键高和自定义圆角；键高只取 44 / 52 / 60，圆角只跟随 sheet 的 `radius`。
- 不在数字键盘里放小数点、正负号和确认键；金额和数量改用 `vx-input` / `vx-number-box`，提交放在外层按钮。
- 不用键盘组件保存密码、做校验或自动跳转；`press` 只抛一位数字，业务值放在页面或 `vx-keyboard-input` 的模型里。
- 不用颜色单独表达「校验失败」；`invalid` 配错误文案，`shake()` 只是补充。
- 不在锁屏和支付页把密码明文写进日志、埋点或长期存储；`password` 只挡肩窥，不是加密。
- 不把数字键盘的 sheet 放进 `scroll-view`、卡片或 `fixed` 容器；sheet 挂页面根节点，inline 放在页面底部。
- 同一屏不开两个数字键盘，也不和操作菜单、弹框、日期时间选择器叠加。
- 不用树型菜单做页面导航、表单和长列表；导航用页签或列表行，表单用 `vx-input` / `vx-select`，长列表用 `vx-list-view`。
- 不在同一棵树里重复 `id`；要区分同名节点就给不同的 `id`，不要靠数组下标猜。
- 不把展开后的子级再塞回同一个节点数组的另一处；父子关系只写在 `children` 里，避免同一节点出现两次。
- 不用缩进代替层级：数据必须是真正的 `children`，不要拍平成带空格的文案。
- 不在 `check` 里再改一遍 `checked` 数组；事件里的 `keys` 已经是级联后的完整集合，直接覆盖或提交。
- 不拿半选当已选提交；半选只在显示里，提交用 `checked` 或 `check` 的 `keys`。
- 不用禁用父节点表达「整棵子树不可用」；`disabled` 只停当前行，整块不可用时再给整棵树 `disabled`。
- 不在节点数据里写样式、颜色和点击回调；树只读结构字段，样式走 props 和插槽。
- 不给树型菜单加内置滚动、搜索、虚拟化和分页；这些由外层页面组合，组件只负责可见行。
- 不把 `indent` 写到 40 以上，也不靠缩小字号塞深层级；超过 5–6 级时把子级换页或改成分组。
- 不给树型菜单加展开动画、旋转箭头和整行缩放；展开直接换可见行，按下只压透明度。
- 不用 `iconColor` 盖掉选中态；选中图标跟 `color` / `type`，未选中才用 `iconColor`。
- 不把 `vx-form` 当数据容器：不传 `model`、不内置提交按钮和 Toast，值仍在控件上。
- 不在输入类控件上同时给表单项传 `label`；两处标题会让表单行看起来像多了一列，标题归属只留一处。
- 不让错误只靠红色描边表达；错误行必须有文案，读屏和灰度屏都要读得到。
- 不把错误行塞成两行、加按钮或加图标；超长文案先在业务里缩短，错误行单行省略。
- 不用 `error` 冒充本地校验结果；受控错误只放服务端回包、跨字段结果这类业务判断。
- 不给表单项加背景、描边、圆角、阴影和外边距；外轮廓交给卡片，间距交给页面。
- 不在表单里做动态增删行、schema 驱动、跨字段联动和异步防抖队列；这些由页面组合。
- 不为表单新增颜色令牌：错误用 `danger`、说明用 `text-secondary`，字号和间距取现有令牌。
- 不在 `rules` 里写 `trigger`、`transform` 和自定义规则 DSL；`validator` 只负责返回一句文案。
- 不把 `scrollToError` 当成焦点管理：校验失败不抢焦点、不弹键盘，滚动只做定位。
- 不用虚拟列表承载不等高内容；不定高、测高回写和瀑布流都不在 v1 内，卡片高低不一时改用 `vx-waterfall`。
- 不给虚拟列表套第二个纵向 `scroll-view`，也不放进 `vx-page` 的滚动区当唯一内容；一个页面只放一个纵向虚拟列表。
- 不用业务数据当切片 key，不在行内塞超过行高的内容；行内容超出会被裁掉，需要更高就调 `itemHeight`，不要改行高。
- 不把 `height` 写成数字、`auto` 或百分比而没有确定父高；`scroll-view` 没有确定高度就不会滚，切片也会失效。
- 不靠频繁改 `scrollTop` 驱动列表滚动，也不在跳转后马上重排数据；跳转用 `scrollToIndex()`，数据变更后用 `refresh()` 补量。
- 不在虚拟列表里做分页请求、排序和筛选；组件只抛 `loadmore` 和当前首项下标，数据和请求都由业务处理。
- 不用轮播图放长文案、表单和视频；一屏只留图片、标题和一条短说明，其余交给页面区块。
- 不给轮播图加 3D、视差和自定义手势；拖拽和回弹交给原生 swiper，需要自由滑动时用 `vx-gallery` 或页面自己实现。
- 不用轮播图做步骤导航、价格对比或倒计时；步骤用 `vx-steps`，对比用列表，倒计时用 `vx-countdown`。
- 不用数字动画做倒计时、图表和逐位滚动；倒计时用 `vx-countdown`，金额格式化用 `vx-text` 的 `format="amount"`。
- 不让数字一直循环播，也不在一屏里放十几个同时在跑；一次读数只播一次，其余直接显示终值。
- 不在数字动画上加底色、描边和圆角，也不在动画过程中写 `aria-live`；读屏只读当前值，播报由业务在 `finish` 后做。
- 不把筛选栏当页签、选择器或步骤条用：页面内切换视图用 `vx-tabs`，底部弹层做单选多选用 `vx-select`。
- 不给筛选栏塞内置选项列表、多级联动、搜索和远程加载；组件不托管选中值，也不维护多选集合。
- 不用返回顶部替业务滚动，也不让它监听页面滚动。显隐用 `visible`，或在模拟阈值时传 `scrollTop`；滚动动作留在业务手里。
- 不在返回顶部上加语义底色、第二个按钮和角标；它是收尾入口，一屏只出现一个。
