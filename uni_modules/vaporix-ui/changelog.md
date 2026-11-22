## 0.75.0（2026-11-22）

- `vx-loader` 液面动画节奏调快：2800/3200ms → 1800/2200ms（亮暗两套令牌同步），横移幅度大，再快不显急躁。
- 演示工程对齐 Pro 版式：`demo-topbar` / `demo-hero` / `demo-section-head` / `demo-page-nav` / `demo-footer` 5 个壳组件与 demo.css / pro-demo.css / catalog 54 条目录数据搬进免费库单源；54 个组件演示页整页替换（`navigationStyle: custom`）；首页重写为轮播 hero + 吸顶搜索/页签目录。
- 演示首页视觉改版：卡片图标块 8 色彩虹轮换（按组件全局下标取色，搜索过滤不漂移）、5 类专属渐变分组头与计数胶囊（白字对比度 ≥4.5:1）、蓝→紫→粉三停渐变首屏与彩色玻璃胶囊、回顶渐变圆钮；版本号/组件数单源进 `catalog.ts`（`DEMO_VERSION` / `DEMO_COMPONENT_COUNT`）。

## 0.74.0（2026-11-20）

- `vx-drawer` 新增 `coverNavbar`：默认 `true` 保持整页覆盖；传 `false` 时遮罩和面板整体让出状态栏 + 48px 导航栏行高（`--vx-navigation-bar-height`），自定义导航栏保持可见可点，面板不再重复留顶部安全区，进出场在让位后的层内裁切，四个方向都适用。只对 `navigationStyle: custom` 的页面有意义；导航栏带 `extra` 第二行时仍按标准行高让位。

## 0.73.0（2026-11-19）

- **行内单选 / 复选 / 开关热区外扩到 44**（`--vx-hit-size`）：`vx-radio` / `vx-checkbox` / `vx-switch` 的 inline 形态 sm / md 视觉高度仍是 32 / 40，纵向 padding 撑热区、等值负 margin 抵掉占位，行占位、轨道位置和项间距都不变；lg 48 已达标不动。list 形态行高本来就 ≥44，不受影响。
- App 端 min-height 按内容盒算：inline 三档在 `#ifdef APP` 里把 min-height 降回控件高，内容高 + 纵向 padding 才是 44 热区。
- `vx-icon` 新增 `hit`：单独可点的图标开 `hit` 撑出 44×44 热区，字形居中、字号不变，Web 补 pointer；默认 false，装饰图标和组件内部图标不受影响。

## 0.72.1 (2026-11-19)
修复小程序导航栏、吸顶和页签高度，开关空文案不再整件不渲染。
## 0.72.2（2026-11-18）

- `vx-switch` 修微信小程序整件不渲染：`hasOnSide` / `hasOffSide` 在 `onText` / `offText` 未注入时读 `.length` 抛错，轨道和文案都不画；改空串再比长度。

## 0.72.1（2026-11-18）

- 插件市场的兼容性表把蒸汽模式标成了不支持：`package.json` 的 `dcloudext.vapor` 从 `x` 改为 `√`。
- readme 接入第 1 步去掉指向插件市场自己的链接——市场页会整段过滤掉。`changelog.md`、`license.md` 改绝对地址，市场页原来指向 `ext.dcloud.net.cn` 下的相对路径，点了 404。
- readme 首屏三张演示图改挂官网 `www.vaporix-ui.com/readme/`：gitee 对第三方站点防盗链，市场页加载出来是空图。

## 0.72.0 (2026-11-18)
- `vx-switch` 新增 `onText` / `offText`：把「开 / 关」写进轨道另一半，随状态换边换字；`on` / `off` 插槽放图标。滑块、轨道尺寸和位移不变，文字建议 1 个汉字或 2~3 个字母，超出裁掉；字号走 `--vx-switch-text-*`（9 / 10 / 11）。
- 文档拆开：组件 API 移到 `api/`，一个组件一个文件；`readme.md` 只留优势、接入和组件清单。升级不受影响，只看文档的话路径变了。
## 0.71.2（2026-11-18）

- `vx-input` / `vx-textarea` 修 App 端标题末字被裁：`labelWidth` 比「星号 + 标题」窄时，标题位放开裁切、星号和标题不收缩，墨迹溢进右边距，后续节点位置不变。
- 演示页反馈表单 `labelWidth`：md 档 72 → 80px，lg 档 72 → 88px。

## 0.71.1（2026-11-17）

- `vx-input` 修 App 端两处布局：unit 末字符（如 `%`）被 text 边界裁尾，加 6px 内边距补余量、负外边距找回位置；`readonly` 的值文字顶格，去掉固定高度改由根节点垂直居中。

## 0.71.0（2026-11-17）

- Web 图标字体改 woff2：extend 按码点切四段各带 `unicode-range`，页面只下载命中的段；core 28 → 11 KB。同一页面图标字体从约 302 KB 降到 65 KB 左右。
- `static/fonts/` 新增 woff2，ttf 保留给 App、小程序与出图。App 和小程序分支仍内嵌 base64，字形不变。

## 0.70.0（2026-11-17）

- **导航栏内容行 44 → 48**（`--vx-navigation-bar-height`），内置返回和右侧动作一起加高，左右内边距 8 → 4。这是可见的尺寸变更，按 44 留过占位或算过偏移的要复核。
- 返回和右侧动作改跟行高，不再取 `--vx-hit-size`；`--vx-hit-size` 仍是 44，继续给关闭叉、回到顶部和独立图标按钮。`vx-tips` 的自绘导航栏补偿同步到 48。

## 0.69.0（2026-11-16）

- `vx-tips` 新增 `opacity`：整条一起淡，底色、文字、图标和阴影都乘这个值，默认 1；与 `bgOpacity` 同时传时相乘。低于 1 时对比度归业务，压在图片上的横幅建议不低于 0.6。
- Web 的淡入关键帧从盒子挪到定位层，行内 `opacity` 才不会被关键帧盖成 1。

## 0.68.2（2026-11-16）

- 修 `vx-tips` 顶部横幅压住导航栏：自绘导航栏的页面补「状态栏 + 导航栏」，原生导航栏的页面补 0，两种页面横幅都落在导航栏下方。

## 0.68.1（2026-11-16）

- **列表行三档高度改为 44 / 48 / 52**（原 44 / 52 / 60），`lg` 纵向内边距 16 → 12。页签、开关、单选复选、折叠面板标题、卡片头部、操作菜单动作行一起变矮，按旧值留过高度的要复核。
- App 端行高补偿：同一层写 `min-height` 加纵向内边距会多出一份，7 个列表行组件用 `calc()` 补回。
- 新增 `--vx-overlay-head`（52px）：弹层头部不再借列表行令牌，列表行改档时头部不动。
- 修 `vx-tabs` 非滚动形态点不动：指示线外框从铺满整行改成只占底部 2px，不再接管整排点击。
- `vx-actionsheet` 补退场动画：遮罩淡出、面板滑出，没播完又打开会取消计时。

## 0.68.0（2026-11-13）

- 控件文案字号 13 / 14 / 16 → 14 / 16 / 18，行高仍 20 / 22 / 24；单选圆圈和复选方框 14 / 16 / 18 → 16 / 18 / 20，重新比文案大 2px。
- `--vx-form-label-width` 72 → 80px：16px 下四字标题带星号放得下；`lg` 档的四字标题仍超出，自己传 88px。
- 升级后界面字大一号，版面和截图要跟着复查。

## 0.67.0（2026-11-12）

- 修弹层反复开关后整层不画：`vx-popup`、`vx-modal`、`vx-drawer`、`vx-picker`、`vx-calendar` 改首开后常驻，关闭只加隐藏 class（`display: none`）。要完全释放用 `v-if` 包住整个弹层。
- 弹层补 250ms 遮罩保护窗（`VX_POPUP_MASK_GUARD`），打开那一下的抬手不再误关；弹层打开期间锁页面滚动（Web）。
- `vx-actionsheet` 动作超过一屏时取消栏不再被顶出窗口；`vx-modal` 短屏或键盘弹起后不再出屏，只缩正文。
- `vx-popup` 新增 `overlay` 插槽和 `maxWidth`；贴边弹层去掉 `lg` 阴影。
- `vx-popup` 的 `closeable` 改名 `closable`，旧写法不再识别。
- `vx-popup` / `vx-drawer` / `vx-bubble-popup` 新增 `cancel()`，给页面 `onBackPress` 用。
- `vx-avatar` 新增 `clickable`；`vx-list-view` 新增 `size`；`vx-swipe-action` 新增 `group`，同页多个列表各传一个值。
- `vx-checkbox` / `vx-radio` / `vx-collapse` 系列新增 `index`：中间插入后顺序不再错位，同组都传才生效。
- 新增 `--vx-hit-size`（44px），关闭叉、返回、可点标题栏和独立图标按钮统一用它。
- 浮层层级统一到 1000–1100：操作菜单 1000、抽屉 1005、消息提示 1010、弹框 1015、日期时间 1020、加载浮层 1050、轻提示 1100。

## 0.66.2（2026-11-06）

- 修 `vx-tabs` 竖排角标压行：角标改成跟文案同一个 flex 行、垂直居中，不再绝对定位；竖排文案单行省略，角标完整。
- 修 `vx-input` 搜索变体的键盘确认键：`confirmType` 不传时 `search` 变体用「搜索」，其余变体仍是「完成」，切回 `outline` / `line` 时键面跟着回。

## 0.66.1（2026-11-06）

- 修 App 端图标全部显示成方框：HBuilderX 5.34 的增量构建不保证把 `uni_modules` 下 static 里的 ttf 同步到设备。App 分支的 `@font-face` 改成内嵌 base64，字体跟样式一起进包。
- 体积：`variables.css` 内嵌 core 两个字重（约 +70 KB），`icons-extend.css` 内嵌 extend（约 +694 KB，只有引入扩展 CSS 的项目才付）。Web 端不动。

## 0.66.0（2026-11-06）

- `vx-input` 新增 `variant="search"`：浅底胶囊搜索框，前置搜索图标，右侧取消按钮，新增 `search` / `cancel` 事件；键盘确认键默认「搜索」。
- `vx-tabs` 新增 `direction="vertical"` 和 `verticalWidth`：侧边导航形态，底部下划线换成左侧竖条，选中项整行铺浅底，`divider` 变成项间横线。
- 两个变体都不新增组件和令牌，`vx-` 组件数不变。

## 0.65.0（2026-11-05）

- 新增 `vx-avatar`：`src` / `text` / `icon` 三态回落，图片失败 → 首字 → 图标；首字按 code point 取，emoji 不会被截成半个。
- 三档外框 32 / 40 / 48，`shape` 三档，`ring` 用内层描边不改变外框；六种语义色，`clickable` 可点。
- 免费层到 60 件。

## 0.64.0（2026-11-05）

- 新增 `vx-image`：加载中 / 成功 / 失败三态，`width` / `height` / `ratio` 三种定尺寸，`radius` 五档，`lazyLoad` 和 200ms 淡入。
- 新增 `vx-divider`：横竖两向、虚线、文字位置、自定义间距和颜色。
- 新增 `vx-safe-area`：底部 / 顶部安全区占位，读 `--uni-safe-area-inset-*`，可固定。
- 不新增令牌，占位色、线色和安全区都复用现有变量。

## 0.63.0（2026-11-05）

- 新增弹层底座 `libs/overlay.ts`：层级常量、进出场时长、贴边方向和滚动锁类名，后几个免费弹层逐个迁过来。
- 新增 `vx-popup`：四向贴边和居中，`show` 支持 `v-model:show`，暴露 `open()` / `close()` / `toggle()`；只圆朝向页面的那一侧，安全区由面板内边距承担。
- 新增 `--vx-popup-width`（280px）和 `--vx-popup-max-width`（480px），以及全局 `.vx-scroll-lock`（Web 锁页面滚动；App 不锁，小程序只拦遮罩手势）。

## 0.62.0（2026-11-05）

- 新增 `vx-form` / `vx-form-item`：容器登记与串行校验，表单项管标题、星号、说明和错误行；不管数据、不带提交按钮。
- 新增 `libs/form.ts`：`required` / `len` / `min` / `max` / `pattern` / `type` / `validator` 七项，内置手机号、邮箱、身份证号、链接和数字。
- 标题归属定一条规则：输入类控件的标题在控件内部；开关、评分、多选由表单项画。
- 不新增令牌。

## 0.61.0（2026-11-03）

- 新增树型菜单令牌 `--vx-tree-row-*`（36 / 44 / 52）、`--vx-tree-indent-*`（16 / 20 / 24）和 `--vx-tree-marker-*`（20 / 24 / 28）。
- 供 Pro 的 `vx-tree-view` 使用，免费组件没有改动，升级时两个模块一起换。

## 0.60.0（2026-11-03）

- 新增数字键盘令牌 `--vx-keyboard-key-*`（44 / 52 / 60）、`--vx-keyboard-font-*`（20 / 24 / 28）、`--vx-keyboard-slot-*`（32 / 36 / 40）、`--vx-keyboard-slot-height`（44）和 `--vx-keyboard-dot-*`（8 / 10 / 12）。
- 供 Pro 的 `vx-keyboard` / `vx-keyboard-input` 使用，免费组件没有改动。

## 0.59.0（2026-11-02）

- 新增骨架屏令牌 `--vx-skeleton-*`：标题、行、头像、资料、媒体、方块、间距、行高各三档，加 `--vx-skeleton-duration-pulse`（1400ms）和 `-shimmer`（1600ms）。
- 新增占位色 `--vx-skeleton-fill` 和扫光色 `--vx-skeleton-shine`，亮暗各一份。
- 供 Pro 的 `vx-skeleton` 使用，免费组件没有改动。

## 0.58.0（2026-11-01）

- 从 Pro 迁入 `vx-radio` / `vx-radio-group` / `vx-checkbox` / `vx-checkbox-group` / `vx-switch`，免费库 50 → 53 件，Pro 从 1.20.0 起不再提供这五个组件。
- 单项选择、多项选择、开关的用法见对应条目。

## 0.57.0（2026-11-01）

- 从 Pro 迁入 `vx-text` 和 `vx-link`，免费库 48 → 50 件，Pro 从 1.19.0 起不再提供。
- `vx-text` 管正文、说明、金额和证件；`vx-link` 管外部入口，Web 新开标签页，App 和小程序复制并提示。

## 0.56.0（2026-11-01）

- 从 Pro 迁入 `vx-row` / `vx-col` 栅格和 `vx-status-bar` 状态栏，免费库 45 → 48 件，Pro 从 1.18.0 起不再提供。
- 状态栏用 0.55.0 起的安全区变量，三个组件都不新增令牌。

## 0.55.0（2026-10-30）

- 补状态栏的设计规则：默认取 `--uni-safe-area-inset-top` 留高并铺底色，支持 `height` 覆盖、透明、固定占位、滚动渐显、横屏安全区、默认插槽和 `ready`。
- 组件在 Pro 1.17.0，不新增令牌。

## 0.54.0（2026-10-30）

- 新增验证码输入框令牌 `--vx-code-cell-*`（40 / 48 / 56）、`--vx-code-font-*`（18 / 22 / 26）、`--vx-code-dot-*`（6 / 8 / 10）和 `--vx-code-caret-*`（20 / 24 / 28）。
- 格子默认正方形，宽度不够时只收窄；供 Pro 的 `vx-code-input` 使用。

## 0.53.0（2026-10-30）

- 补数据选择器的设计规则：一组数据排成可换行的胶囊，单选用 `v-model`，多选用 `v-model:values`；三档尺寸、六种语义色、三种未选中外观。
- 组件在 Pro 1.15.0，不新增令牌。

## 0.52.0（2026-10-30）

- 补链接的设计规则：正文级文字入口，默认 primary，下划线，三档正文字号，`tel:` / `mailto:`，App 与 Web 的打开差异。
- 组件在 Pro 1.14.0，不新增令牌。

## 0.51.0（2026-10-30）

- 补文本的设计规则：正文 13 / 15 / 17，字重 400 / 500 / 600 / 700，语义色、截断、格式化和长按复制。
- 组件在 Pro 1.13.0，不新增令牌。

## 0.50.0（2026-10-30）

- 新增选择框令牌 `--vx-select-max-width`（480px）和 `--vx-select-media-*`（28 / 32 / 36）；行高仍用列表行，标记仍用单选复选令牌。
- 供 Pro 的 `vx-select` 使用。

## 0.49.0（2026-10-30）

- 新增分隔列表令牌 `--vx-divide-*`：数值 17 / 20 / 24、说明 12 / 13 / 14、媒体 32 / 40 / 48、行高 56 / 70 / 84，加 `--vx-divide-gap`（2px）。
- 供 Pro 的 `vx-divide-list` 使用。

## 0.48.0（2026-10-30）

- 补分段器的设计规则：2–5 段等宽，选中段填充语义色，可选分割线；沿用控件三档高度和 6 / 8 / 10 圆角。
- 组件在 Pro 1.10.0，不新增令牌。

## 0.47.0（2026-10-30）

- 补栅格的设计规则：24 份制、负外边距抵消间距、断点 576 / 768 / 992 / 1200。
- 组件在 Pro 1.9.0，不新增令牌。

## 0.46.0（2026-10-30）

- 新增滑动选择器令牌 `--vx-slider-track-*`（4 / 6 / 8）、`--vx-slider-thumb-*`（20 / 24 / 28）、`--vx-slider-inset-*`（10 / 12 / 14）和 `--vx-slider-height-*`（32 / 36 / 40）。
- 供 Pro 的 `vx-slider` 使用。

## 0.45.0（2026-10-29）

- 新增提示页令牌 `--vx-msg-disc-*`（56 / 72 / 88）、`--vx-msg-glyph-*`（28 / 36 / 44）、`--vx-msg-title-*`（17 / 20 / 26）和 `--vx-msg-copy-max` / `--vx-msg-actions-max`（360 / 320）。
- 供 Pro 的 `vx-msg` 使用。

## 0.44.0（2026-10-29）

- 新增环形进度令牌 `--vx-circular-progress-size-*`（64 / 80 / 100）和 `--vx-circular-progress-stroke-*`（6 / 8 / 10）。
- 供 Pro 的 `vx-circular-progress` 使用。

## 0.43.0（2026-10-29）

- 新增 `vx-tabbar` 标签栏：`items` 等宽排列，`v-model` 当前索引；支持 `raised` 凸起圆钮、`action` 项、`fixed` / `placeholder` / `safeArea`、角标和分割线。
- 新增 `--vx-tabbar-*`：栏高 48 / 56 / 64、凸起行高 70 / 80 / 90、图标 20 / 24 / 28、圆钮 44 / 52 / 60。

## 0.42.0（2026-10-29）

- 新增索引列表令牌 `--vx-index-*`：分组标题 28 / 32 / 36、头像 32 / 40 / 48、字母 16 / 18 / 20、索引条 28 / 32 / 36、指示器 56 / 64 / 72。
- 供 Pro 的 `vx-index-list` 使用。

## 0.41.0（2026-10-29）

- 新增开关令牌 `--vx-switch-width-*`（36 / 44 / 52）、`--vx-switch-height-*`（20 / 24 / 28）、`--vx-switch-thumb-*`（16 / 20 / 24）、`--vx-switch-spinner-*`（8 / 10 / 12）和 `--vx-switch-inset`（2px）。
- 供 Pro 的 `vx-switch` 使用。

## 0.40.0（2026-10-29）

- 新增复选框令牌 `--vx-checkbox-size-*`（14 / 16 / 18）和 `--vx-checkbox-radius-*`（4 / 5 / 6）；单选标记同时从 18 / 22 / 26 收到这一档。
- 供 Pro 的 `vx-checkbox` / `vx-checkbox-group` 使用。

## 0.39.0（2026-10-29）

- 新增单选令牌 `--vx-radio-size-*`（18 / 22 / 26）。
- 供 Pro 的 `vx-radio` / `vx-radio-group` 使用。

## 0.38.0（2026-10-28）

- 新增加载动画令牌 `--vx-loader-size-*`（20 / 28 / 40）、`--vx-loader-dot-*`（6 / 8 / 10）、面板尺寸与配色，以及四种动画的时长。
- 深色面板固定白字，不跟主题反色；供 Pro 的 `vx-loader` 使用。

## 0.37.1（2026-10-28）

- 新增图片预览令牌 `--vx-gallery-bar` / `-control` / `-foot`（44 / 44 / 60）和 `--vx-color-viewer-*`：预览层固定黑底白字，不跟主题反色。
- 浮层层级增加图片预览 105，高于消息提示、低于弹框；供 Pro 的 `vx-gallery` 使用。

## 0.37.0（2026-10-28）

- 新增 `vx-progress` 进度条：`percent` 传 0–100，标签、轨道、数值三段；六种语义色、三档尺寸、三种形状，`end` 事件在过渡结束时抛最终值。
- 新增 `--vx-progress-height-*` 和 `--vx-progress-value-min-*`（40 / 44 / 52）。
- 从 ThorUI `tui-progress` 迁移：`showInfo` → `showText`，`activeColor` → `bgColor`，`backgroundColor` → `trackColor`，`width` → `size` / `height`，`radius` → `shape`，`activeend` → `end`。
- `vx-wing-blank` 纵向不再被压扁。

## 0.36.0（2026-10-28）

- 新增 `vx-white-space` 上下留白和 `vx-wing-blank` 左右留白：`size` 三档取间距 8 / 12 / 16，也可传带单位的值覆盖。
- 两个组件都不接点击、不画外框、不加动效；`bgColor` 是色带，不表达状态。
- 与 ThorUI 的差异：尺寸改 `sm` / `md` / `lg`，`height` / `gap` 必须带单位，`background` 换 `bgColor`，点击交给外层。

## 0.35.0（2026-10-27）

- 新增 `vx-qrcode` 二维码：`text` 按 UTF-8 编码，自动选版本 1–40 和最优掩码；用 `view` 绘制，同一行连续深色模块合成一条，不依赖 canvas。
- `size` 三档 120 / 160 / 200，`width` 只认 px；`level` 四档默认 M，`margin` 默认 2；深码浅底，不跟主题反色。
- `logo` / `logoSize` 支持中心图标，建议配 `level="H"`；内容为空或超出容量时显示占位文案，不画空白方阵。
- 新增 `libs/qrcode.ts` 和 `--vx-qrcode-*` 令牌；编码器用 jsQR 做了回读校验。

## 0.34.0（2026-10-27）

- 新增 `vx-bubble-popup` 气泡弹框：触发区加默认插槽，`items` 菜单、`content` 单段文案、`extra` 自定义面板。
- 一侧放不下自动翻到对面，两侧都放不下夹在屏幕内；气泡挂在页面层，卡片和 `scroll-view` 不会裁掉它。
- `variant` 有 `surface` / `solid`，另有 `inline` 聊天气泡形态；点遮罩、Web 上按 Esc 都会收起并抛 `close`。
- 新增 `--vx-bubble-*` 令牌；面板打开时先量尺寸再显示，第一帧不会落在左上角。
- 打磨 `vx-notice-bar` 和 `vx-rolling-news`：单行省略改为定宽截断，滚动轨道改用令牌。

## 0.33.0（2026-10-27）

- 新增 `vx-notice-bar` 通告栏：`text` 显示一条公告，`wrap` 换行，`scrollable` 超出视口时横向匀速滚动；多条轮播仍用 `vx-rolling-news`。
- `type` 六种语义色，`variant` 三种外观，`size` 三档，`shape` 三档；`closable`、`v-model:show`、`close` 事件和 `prefix` / `suffix` 插槽。
- 滚动用 `transform` 匀速位移，不依赖关键帧；文字宽度量失败重试三次后按静态展示。
- 新增 `--vx-notice-bar-height-*` 和速度常量。

## 0.32.0（2026-10-27）

- 新增 `vx-rolling-news` 滚动消息：`items` 按顺序轮播，点击整条抛 `click(index, item)`；空数组不渲染，只有一条时不轮播。
- 两层叠放换条，落位后对调，不测宽高；`direction` 横竖两向，`interval` 默认 3000ms，按下暂停、松手重新计时。
- `variant` 三档、`shape` 三档、`size` 三档，`prefix` / `suffix` 插槽独立，点它们不触发整条点击。
- 新增 `--vx-rolling-news-height-*` 和时长常量。

## 0.31.0（2026-10-27）

- 新增 `vx-section` 区块标题栏：承载标题、说明、竖线、分割线和右侧短操作，组件不包内容。
- `size` 三档，`variant` 的 `plain` / `soft`，`marker` 竖线，`divider` 分割线，`clickable` 可点，`prefix` / `extra` / `suffix` 插槽。
- 新增 `--vx-section-*` 令牌；`soft` 浅底上的说明单独调色，保证对比度。

## 0.30.0（2026-10-26）

- 新增 `vx-picker` 联动选择：底部弹层里的多列滚轮，`options` 用树形节点表达层级，列数跟着当前路径走。
- 滚动只改草稿，点确定才写回；`confirm` / `change` 回传 `values` / `texts` / `indices`，`vxPickerText()` 直接拼完整路径。
- 支持禁用节点、空数据和异步补下一级；不可选项留在滚轮里转灰，停上去时头部提示、确定置灰。
- 新增 `libs/picker.ts` 和 `--vx-picker-row`（44px）/ `-wheel`（220px）/ `-max-width`（480px）。

## 0.29.0（2026-10-26）

- 新增 `vx-image-group` 图片组合：`items` 按顺序排缩略图，方框三档 40 / 64 / 88；`shape`、`direction`、`offset`、`wrap`、`ring` 可调。
- 图片失败或空地址换占位色加图标并抛 `error(index, item)`；同一个地址失败只抛一次。
- 新增 `--vx-image-group-size-*`。
- 演示工程改为三 tab：组件目录、JS 接口、我的；原 234 组示例拆成 30 个演示页。
- 打磨 `vx-swipe-action`：点按和纵向滚动不再改写展开距离，长列表只收起已展开的行。

## 0.28.0（2026-10-26）

- 新增 `vx-navigation-bar` 自定义导航栏：标题居中、内置返回、左右插槽和第二行 `extra`；固定时在文档流里补等高占位。
- 支持 `statusBar`、`transparent`、`bgColor`（可渐变）、`fade` + `scrollTop` 渐显、`divider` / `shadow`、`ready` 和 `refresh()`。
- 内置返回只抛 `back`，不做路由；小程序自动让出右上角胶囊。
- 新增 `--vx-navigation-bar-height`（44px，0.70.0 改 48）。

## 0.27.0（2026-10-26）

- 新增 `vx-swipe-action` 滑动菜单：左滑露出 1–3 条动作，拖动跟手，超过一半或快速轻扫展开。
- `name` 原样带回 `select` / `change`；`multiple` 允许多行同时展开，默认只开一行。
- 展开后内容上盖透明保护层，点内容只收起；`swipeable`、`closeOnSelect`、`extraWidth` 可调。
- 新增 `libs/swipe-action.ts`：宽度、接管阈值、轻扫判定、点击保护时长和展开登记表。
- 不新增令牌。

## 0.26.0（2026-10-26）

- 打磨 `vx-calendar`：点选不再重算整月农历，范围外的日子去掉选中底色，`ref` 增加 `confirm()`。
- 新增 `vx-drawer` 抽屉：四向滑出，左右 280px、上下 45%，面板贴屏一侧不圆角；`title` / `closable` / `prefix` / `extra` / `suffix` 组成头尾。
- 正文用 `scroll-view` 占满头尾之间；层级默认 90，遮罩只压页面。
- 新增 `--vx-drawer-width` / `--vx-drawer-height`。

## 0.25.0（2026-10-26）

- 新增 `vx-calendar` 日历：`single` 选一天，`range` 选区间；`popup` 走底部弹层，不写就平铺。
- 支持 `minDate` / `maxDate` 可选范围、`showLunar` 农历、`marks` 日期标记、六种语义色和翻年箭头。
- 新增 `libs/calendar.ts` 和 `libs/lunar.ts`（1900–2100 公历转农历）。
- 新增 `--vx-calendar-*` 令牌；网格按当月占几周排 5 或 6 行。
- 修翻月箭头一直点不动、`marks` 日期归一化的问题。

## 0.24.0（2026-10-26）

- 新增 `vx-tabs` 标签页：`items` 等宽渲染，`v-model` 当前索引；`line` / `soft` / `inverse` 三种外观。
- `size` 三档，高 44 / 52 / 60；支持 `badge` / `dot` / `disabled`，计数超过 `badgeMax` 显示 `99+`。
- 页签只切视图，不内置内容、路由和请求，也不横向滚动。
- 新增 `--vx-tabs-indicator-*`。

## 0.23.0（2026-10-26）

- 新增 `vx-datetime` 日期时间选择器：十种 `mode`，列数 1 到 6；滚轮用原生 `picker-view`。
- 支持 `startYear` / `endYear`、`minuteStep` / `secondStep`、`unitPosition` 和 `format`；天数跟着年月走。
- 新增 `libs/datetime.ts` 和 `--vx-datetime-row` / `-wheel` / `-max-width`。

## 0.22.0（2026-10-26）

- 新增 `vx-no-data` 暂无数据：内置线稿插图按 96 / 128 / 160 三档缩放，不依赖图片；动作按钮整套透传。
- 支持 `fill` 撑满父级并居中，`iconVariant` 和 `image`；`VxButtonVariant` / `VxButtonShape` 移到 `libs/types/common.ts`。
- 新增 `--vx-no-data-*` 令牌。

## 0.21.0（2026-10-26）

- 新增 `vx-collapse` / `vx-collapse-item` 折叠面板：容器用 `v-model` 绑展开的 `name` 数组，支持手风琴、卡片 / 平面形态、固定高度滚动和整组禁用。
- 容器方法 `open()` / `close()` / `toggle()`，`change(name, open)`；标题行沿用列表行高度。
- 不新增令牌。
- `vx-modal` 内置动作收到 `sm` 档，新增 `closable` 关闭叉。

## 0.20.0（2026-10-26）

- 新增 `vx-modal` 弹框：居中对话框，默认取消、确定两个动作；`actions` 可自定义，一个铺满、两个并排、三个以上纵向。
- `size` 三档 280 / 320 / 400，`icon` / `iconType` 状态图标；`closeOnAction=false` 时异步提交保持打开。
- 浮层层级增加 110。
- 新增 `--vx-modal-max-width-*` 和 `--vx-modal-icon-size`。
- 打磨 `vx-actionsheet` 和 `vx-modal` 的阴影裁切、图标间距和长文案。

## 0.19.0（2026-10-26）

- 新增 `vx-actionsheet` 操作菜单：底部弹层，`items` 列动作，默认带取消；`default` / `primary` / `danger` 三种类型。
- `closeOnSelect=false` 保持打开；`maskClosable=false` 只能点动作或取消退出。
- 面板最大宽度 480px；浮层层级增加 90。
- 新增 `--vx-actionsheet-max-width`。

## 0.18.0（2026-10-25）

- 新增 `vx-steps` 步骤条：`items` 按顺序渲染，`active` 是当前索引，`-1` 表示未开始。
- `variant` 的 `dot` / `number`，`direction` 横竖，`lineStyle` 实虚线，可点击整步。
- 新增 `--vx-steps-*` 令牌。

## 0.17.0（2026-10-25）

- 新增 `vx-countdown` 倒计时：`time` 传剩余秒数，四个 `show*` 控制可见单位；`separator` 冒号或单位，三档尺寸和三种盒形。
- 计时按截止时间重算，不在回调里递减；`tick` / `end` / `reset` 事件和 `start()` / `pause()` / `reset()` 方法。
- 新增 `--vx-countdown-height-*` 和 `-ms-width-*`。

## 0.16.0（2026-10-25）

- 新增 `vx-number-box` 数字框：减号、数值、加号三段；范围、步长、三档尺寸、描边 / 浅底形态和校验失败态。
- 输入中只同步范围内的值，失焦或确认时收口；精度按最多的小数位截断，不留浮点尾巴。
- 新增 `--vx-number-box-field-*`。

## 0.15.0（2026-10-25）

- 新增 `vx-time-axis` 时间轴：`items` 从上到下渲染节点、竖线、标题、说明和时间；有 `title` 是阶段，没有的是同一阶段下的事件。
- 节点三档 20 / 24 / 28，事件圆点 6 / 8 / 10；`type` 六种语义色，`lineColor` 只改线色。
- 新增 `--vx-time-axis-*` 令牌。

## 0.14.0（2026-10-25）

- 新增 `vx-sticky` 吸顶容器：用 `scrollTop` 驱动，在文档流和 `fixed` 之间切换，吸顶后补等高占位。App 不支持 `position: sticky`，各端共用这一套。
- `offsetTop` 在安全区之外再让出距离，`suffix` 插槽决定吸到哪里结束，`refresh()` 供异步内容后重测。
- `zIndex` 默认 10。

## 0.13.0（2026-10-25）

- 新增 `vx-loading` 加载中：`ring` / `arc` / `bars` 三种形态，`row` / `column` 两种排列，三档尺寸、六种语义色。
- `overlay` 全屏浮层，层级 150，挡页面点击；`mask=false` 只去掉压暗，不放开点击。
- 新增 `vx-loadmore` 加载更多和 `vx-nomore` 没有更多，两者同尺寸同高，切换时不跳高度。
- 新增 `--vx-loading-min-width` / `-max-width` 和 `--vx-nomore-dot`。

## 0.12.0（2026-10-25）

- 新增 `vx-grid` / `vx-grid-item` 宫格：容器管底色、外框和圆角，格子管宽度、内部线和内容。
- `columns` 取 2–5，`index` 按行递增决定内部线；三档最小高度 72 / 88 / 104。
- 图标、图片和 `icon` 插槽三选一，新增 `--vx-grid-height-*` 和 `-media-*`。

## 0.11.0（2026-10-25）

- 新增 `vx-card` 卡片：头部、正文、底部三段，`avatar` / `title` / `meta` 组成头部；三档尺寸，`bodyPadded=false` 让内容贴边，`full` 用于通栏。
- 圆角统一到 `md` 8px，和按钮、输入框一致。
- 新增 `--vx-card-avatar-*` 和 `--vx-card-meta-max`。
- `vx-list-cell` 分割线新增 `dividerColor` / `dividerOpacity`。

## 0.10.0（2026-10-25）

- 新增 `vx-list-view` 列表分组：标题在卡片外，`variant="card"` 或 `plain`。
- 新增 `vx-list-cell` 列表行：`title` / `description` / `value`，三档行高 44 / 52 / 60（0.68.1 改 44 / 48 / 52）。
- 新增 `--vx-list-height-*`。

## 0.9.0（2026-10-24）

- 新增 `vx-toast` 轻提示：全屏浮层，图标加一句短文案，默认 2000ms 收起；`duration="0"` 常驻。
- 六种语义只决定默认图标，盒子固定用正文反相底，亮暗自动互换。
- 新增 `--vx-toast-icon-size` / `-min-width`；`vx-toast` 与 `vx-tips` 新增 `bgOpacity`。

## 0.8.0（2026-10-24）

- 新增 `vx-rate` 评分：`v-model` 绑分值，`count` 收敛到 1–10，`allowHalf` 半星，三档星形 20 / 24 / 28。
- 选中层按百分比裁出小数进度，`3.45` 也能如实显示；点按左右半区分别选半星和整星，也支持横向滑动。
- 新增 `--vx-rate-size-*` 和 `--vx-rate-gap`。

## 0.7.0（2026-10-24）

- 新增 `vx-tips` 消息提示：`top` 整条横幅，`center` / `bottom` 圆角浮层；`duration` 到点收起，`0` 常驻。
- 六种语义色沿用实心底加 `on-*` 前景；`zIndex` 默认 100。
- 新增 `icon` / `closable` / `offset` / `bgColor` / `color`、默认插槽和 `open()` / `close()`。

## 0.6.0（2026-10-24）

- 新增 `vx-footer` 页脚：版权、备案号和辅助链接；默认留在文档流，`fixed` 时贴安全区底部。
- 链接用 `links` 数组，相邻项自动加竖线，点击只抛 `click`，不内置跳转。
- 支持 `color` / `linkColor` / `borderColor` / `bgColor` 和默认插槽。

## 0.5.0（2026-10-24）

- 新增 `vx-badge` 徽章：计数、`max` 封顶、圆点、三档尺寸，solid / soft 两种形态。
- `absolute` 叠加到插槽右上角，`offsetX` / `offsetY` 调偏移，`ring` 用页面底色描边。
- 新增 `--vx-badge-height-*`（16 / 20 / 24）、`-font-*`（12 / 13 / 14）、`-dot-*`（6 / 8 / 10）。

## 0.4.0（2026-10-23）

- 新增 `vx-tag` 标签：solid / soft / plain 三种形态，六种语义色，三档尺寸，四种轮廓，可关闭。
- 控件高度统一到 28 / 32 / 36，按钮、输入框、标签共用；控件文案改用 `--vx-font-control-*`（13 / 14 / 16）。
- `vx-input` 内部间距收紧：单位与内容留 8px，清除图标和箭头对齐右侧基线。

## 0.3.0（2026-10-23）

- 首次发布，包含 `vx-button`、`vx-input`、`vx-textarea`、`vx-icon`。
- `vx-icon` 提供 core 112 与 extend 1000，regular / fill 两套，图标来自 Phosphor 2.1.2（MIT）。
- 设计令牌在 `libs/style/variables.css`，页面根节点用 `vx-theme-light` 或 `vx-theme-dark`。
