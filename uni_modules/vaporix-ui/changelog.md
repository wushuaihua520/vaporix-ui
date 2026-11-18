## 0.71.2（2026-11-18）

- `vx-textarea` / `vx-input` 标题防裁字（App 端）：`labelWidth` 给得比「星号 + 标题」内容窄时，最后一个 text 节点被 flex 压缩后在自身边界裁字——「反馈内容」四字标题在 72px 下末字被切掉约 40%（实测墨迹 173px，自然墨迹 182px）。两个组件的标题位加 `overflow: visible`，星号和标题 text 加 `flex-shrink: 0`：宽度不够时墨迹溢进右边距，不再裁字；后续兄弟节点位置不变。运行时 `createSelectorQuery` 实测 label 盒宽度生效。
- 演示工程 `textarea` 页反馈表单的 `labelWidth` 修正：md 档 72 → 80px（星号 9 + 间距 4 + 四字 64 ≈ 78，72 装不下），lg 档 72 → 88px（18px 字号下约 87）；sm 档 72 够用不动。

## 0.71.1（2026-11-17）

- `vx-input` 修 App 端两处布局（iOS 模拟器像素级验证，建议真机复验）：
  - **unit 末字符被裁**：iOS 对比例字符（`%`）的测量宽度比字形实际宽度窄，末字符被 text 节点自身边界裁掉——`%` 只剩左圆和斜杠，右圆被截（CJK 全宽字符如「元」量得准，不受影响）。unit 加 `padding-right: 6px` 补余量、`margin-right: -6px` 找回位置：墨迹位置不动、后续兄弟节点（清除、箭头）位置也不变，只是裁剪边界右移进父级 padding 区。
  - **readonly 值文字顶格不居中**：`vx-input__display` 的 `height: 100%` 让 App 端 text frame 拉满整行，`line-height` 行盒只占 frame 顶部，值文字墨迹贴行顶（实测偏 -8.3 逻辑px）。去掉固定高改 auto，靠根节点 `align-items: center` 居中（和 label 同机制），readonly 三行实测回到 ±0.3 逻辑px。

## 0.71.0（2026-11-17）

- **Web 图标字体改 woff2，extend 切四段各带 `unicode-range`**：以前 extend 是一条 `@font-face` 指到 278 KB 的 ttf，页面只要出现一个 extend 图标（页脚的 Android `robot`、鸿蒙 `cpu`）就得整包下载。现在按码点切成 21–34 KB 的四段，浏览器只取命中字符的那几段；core 也一并转 woff2（28 KB → 11 KB）。同一页面的图标字体从约 302 KB 降到 65 KB 左右。
  - 分段与转换在 `tools/icons/web_fonts.py`，段数由 `EXTEND_PIECES` 决定；改段数后跑 `python tools/icons/write-css.py` 即可重写 CSS，不用重建字体。
  - App 和小程序分支不变：`#ifdef APP` / `#ifdef MP` 仍内嵌全量 ttf 的 base64，真机字形与原来一致。
  - `static/fonts/` 新增 `vx-icons.woff2`、`vx-icons-fill.woff2` 与 `vx-icons-extend{,-fill}-1..4.woff2`，ttf 保留给 App / 小程序与 QA 出图。
  - 校验脚本 `tools/icons/check_web_fonts.py`：核对每段 cmap 与 CSS 的 `unicode-range` 一致、四段合起来覆盖全部 1000 个 extend 码点。

## 0.70.0（2026-11-17）

- **导航栏内容行 44 → 48**（`--vx-navigation-bar-height`），内置返回和右侧动作一起跟到 48。原来返回的宽高取 `--vx-hit-size` 44，和行同高但只占可见面积的一小半，右插槽里又常被写成 36，点起来明显偏窄。48 正好是控件 `lg` 一档，状态栏 24 时整条 72、iPhone 47 时 95。这是可见的尺寸变更，业务按 44 留过占位或算过偏移的要复核。
- **导航栏左右内边距 8 → 4**：返回热区加宽后仍要贴得到屏幕边，左侧收一档；右侧同值，标题保持居中。`suffix` 自定义动作因此多出 4px 可用宽度。
- **返回和右侧动作不再取 `--vx-hit-size`**：两者改用 `--vx-navigation-bar-height`，行高改档时热区跟着变，不会再出现热区比行矮一截。`--vx-hit-size` 仍是 44，继续给关闭叉、回到顶部和独立图标按钮。`vx-page` 的返回（`vx-page__back`）同改，Pro 的 `VX_PAGE_NAV_HEIGHT` 兜底值从 44 改到 48，内容行下限同步。
- `vx-tips` 的 `VX_NAVIGATION_BAR_HEIGHT` 从 44 改到 48：自绘导航栏页面的顶部横幅仍落在导航栏下方，不会压住加高后的那一行。
- 演示工程右侧动作统一 `lg` 22、热区跟行高；Pro 顶部栏的主题开关从 36×36 放大到 48×48，图标从 `md` 18 换到 `lg` 22。
- 同步 `DESIGN.md`、readme、文档站（中英两份）和演示说明里的旧值。

## 0.69.0（2026-11-16）

- **`vx-tips` 新增 `opacity`**：整条提示一起淡，底色、文字、图标和阴影都乘这个值，默认 `1`，0 全透明。和 `bgOpacity` 同时传时相乘——`bgOpacity` 仍只压底色、文字保持不透明。写在盒子上而不是外层定位层：真机上定位层带 alpha 后盒子的阴影不再画出来（`--vx-shadow-md` / `lg` 整条消失），写在盒子上阴影跟着一起淡。低于 1 时对比度归业务，压在图片或头图上的横幅建议不低于 0.6。
- 演示工程（Pro）新增「透明度」分组：整条半透明、`bgOpacity` 与 `opacity` 相乘两条。
- Web 的淡入关键帧从盒子挪到定位层：关键帧里的 `opacity` 优先级高于行内值，留在盒子上会把 `opacity` 盖成 1。

## 0.68.2（2026-11-16）

- **修 `vx-tips` 顶部横幅压住导航栏**：App 上 `position: fixed` 的原点是页面内容顶，`--uni-safe-area-inset-top` 在原生导航栏页面是 0，在页面自绘导航栏（如 `vx-navigation-bar`）的页面只到状态栏。原来直接读这个变量，自绘导航栏的页面横幅正好盖住 44 的一行。改成定位层固定在页面内容顶、由盒子的上边距补出导航栏：原生导航栏页面补 0，自绘导航栏页面补「状态栏 + 44」。两者靠 `screenHeight - windowHeight` 区分（原生导航栏会额外压掉这一段），并且在横幅渲染时才量——`setup` 阶段页面还没换成自绘导航栏，`windowHeight` 偏小会误判。真机 2026-11-16（XiaoMi 14 / Android 13 / 基座 5.34）：原生导航栏和 `vx-navigation-bar` 两种页面横幅都落在 y 244–364，正好在导航栏下方。
- `offset` 的说明同步：顶部已经在导航栏下方，它只加额外距离（导航栏多一行 `extra` 时用它往下让）。

## 0.68.1（2026-11-16）

- **列表行三档高度改为 44 / 48 / 52**（原来 44 / 52 / 60），`lg` 纵向内边距 16 → 12（`--vx-list-height-sm/md/lg`）。页签、开关和单选复选的列表行、折叠面板标题、卡片头部、索引列表行、操作菜单动作行、选择框选项行都跟着变矮。这是可见的尺寸变更，业务按旧值留过高度的地方要复核。
- **App 端行高补偿**：同一层同时写 `min-height` 和纵向内边距时，App 上的总高会比令牌多出这份内边距。免费库 7 个列表行组件（操作菜单、卡片头部、单选、复选、折叠面板、列表行、开关）在 `#ifdef APP` 块里用 `calc(var(--vx-list-height-*) - 纵向内边距)` 补回，Pro 的索引列表同样处理，两端行高一致。原因是 Web 和 App 对 `min-height` 的盒模型处理不同。
- **新增令牌 `--vx-overlay-head: 52px`**（亮暗各一份）：弹层头部（取消 / 确定、标题、关闭叉所在的横条）不再借用列表行令牌，列表行改档时头部不动。`vx-picker`、`vx-datetime`、`vx-calendar`、`vx-drawer` 改用该令牌，头部回到 52；`vx-select` 在 Pro 里，用 `var(--vx-overlay-head, 52px)` 兜底，旧版免费库下仍是 52。
- **修 `vx-tabs` 非滚动形态点不动**：滑动指示线的外框原来是 `top: 0; bottom: 0` 铺满整行的绝对定位层，App 上 `pointer-events: none` 不生效时会把整排页签的点击接走（真机复现：默认形态 15 组页签点击全部无响应，`scrollable` 形态正常）。外框改成只占底部一条线高（2px），线要盖住分割线时靠 `overflow: visible` 下移 1px 画出去；几何仍是纯百分比，落点不变。
- `vx-actionsheet` 补退场动画：关闭时先给遮罩和面板挂退场态、播完 `--vx-duration-normal` 再摘节点，遮罩淡出、面板滑出；没播完又打开会取消计时、摘掉退场态，关键帧换成入场那条从底部重新滑入。此前只有入场，关闭是瞬间消失。退场期间不关 `pointer-events`（关掉后 Web 上会穿透到页面），重复操作由事件里的 `leaving` 判断挡掉。
- 新增盒模型探针页 `pages/probe/box`（「我的 → 演示 → 盒模型探针」）：量 `height` / `min-height` 和纵向内边距的组合、以及 `vx-button` / `vx-input` / `vx-list-cell` 的真实高度，用来验证上面的 calc 补偿。改令牌或改某行的纵向内边距后重跑一次。
- 同步 `DESIGN.md`、readme 和文档站的残留旧值：列表行 44 / 52 / 60、动作行 52、各弹层头部 52 的表述，以及抽屉 / 弹框 / 操作菜单「App 不做退场」的旧描述。

## 0.68.0（2026-11-13）

- 控件文案字号三档从 13 / 14 / 16 提到 14 / 16 / 18（`--vx-font-control-*`），行高仍是 20 / 22 / 24。按钮、输入框、多行输入框、数字框、表单项标题、单选 / 复选 / 开关的横排文案、标签页、分段器、分页器、树、表格和数字动画一起换；正文档位 13 / 15 / 17、标签 12 / 13 / 14、徽章 12 / 13 / 14 不动。
- 单选圆圈和复选方框从 14 / 16 / 18 提到 16 / 18 / 20（`--vx-radio-size-*` / `--vx-checkbox-size-*`），重新比横排文案大 2px。列表里标记的顶对齐补偿从 3px 收到 2px：行高 20 / 22 / 24 和标记都差 4，补一半。`vx-select` 的选项标记共用这两组令牌，跟着变；圆角、对号字形和标记到文案的间距不变。
- 表单左侧标签列宽 `--vx-form-label-width` 从 72px 提到 80px。16px 下四字标题带星号原来会被列宽裁掉，现在放得下；`lg` 的四字标题带星号仍超出这一档，业务自己传 88px。`vx-form` 的 `labelWidth` 默认还是空串，不传就走新值。
- `vx-tag` 只看标签自己的令牌，`vx-avatar` 的图标 14 / 16 / 18 和 `vx-icon` 的 14 / 18 / 22 也不是控件文案，这次都没有改。
- `vx-datetime` 删掉迁到 `vx-popup` 后留下的死样式：定位层 `.vx-datetime`、`.vx-datetime__mask`、Web 段的 `touch-action` / 淡入关键帧，以及和底座重复的顶部两角圆角。圆角只由 `vx-popup` 的 `round`（默认 `lg`）决定，样式块里 grep 不到 `vx-datetime__sheet` / `vx-datetime__mask`。
- 演示工程补验收要的组合：倒计时加 103 天三档和可重置的「最后一分钟」实例，标签加「放进列表行和卡片头部」分组，卡片加「卡片放进可点区域」分组（静态卡交点击给外层、可点卡停住），弹出层加 `maxWidth` 底部实例。H5 已验证：行高 52、卡片头部 65、三位数左右余量 5 / 5 / 9、1024 宽下 sheet 480 居中。
- 演示工程第二批：多行输入框的「反馈表单」改成三档输入框 + 多行输入框成对、lg 档带 extra，标签页加「滚动形态」（显隐 + 换文案），折叠面板加「中间插入」「和列表行同排」「超长内容」，吸顶加「隐藏与变高」，标签栏加「凸起与固定」，单选组加「中间插入」，气泡弹框加「50 个关闭实例」。吸顶页补上 `@scroll` 把滚动值喂给 `demoScrollTop`——之前整页 scrollTop 恒为 0，H5 上任何 `vx-sticky` 都不会吸顶。H5 已验证：三档标题 / 正文左缘对齐、指示条跟着重测、分割线条数、箭头 14 / 14 / 18 与右缘一致、吸顶占位 46 → 90、凸起透明带栈顶是页面内容、关闭态实例不挂 window scroll 监听。
- 吸顶页加「自定义导航栏 + 吸顶」：固定导航栏带默认占位，`ready` 回传高度写进 `vx-sticky` 的 `offsetTop`；加一行 `extra` 后调 `refresh()` 重新测量。H5 已验证：占位 44 → 101、滚动区顶 88 → 145、吸顶条 top 44 → 101，收起导航栏后 offset 归 0。

## 0.67.0（2026-11-12）

- 弹层在真机上会整层不画：`position: fixed` 的子树里用 `v-if` 反复创建原生 `scroll-view` / `input` / `picker-view`，几次开关之后遮罩和面板一起消失，等 8.5 秒也不补画。真机复测（XiaoMi 14 / Android 13 / HBuilderX 5.34）：B 组（带 `scroll-view`）第 7 次、C 组（带 `input`）第 5 次、D 组（带 `picker-view`）第 3 次开始看不到「罩」和「面板在」；A 组（只有 `view` / `text`）30/30 正常，页面本身没有失活。
- 五个弹层改成首开后常驻：`vx-popup`、`vx-modal`、`vx-drawer`、`vx-picker`、`vx-calendar` 的根节点只从「不在」变成「在」，关闭动画走完或 `duration=0` 时只加隐藏 class（`display: none`），不再卸载。探针 E 组（同样内容改成首次打开后不销毁、关闭用 `display: none`）和 F 组（`vx-popup` 里放纵向 `scroll-view`）都是 30/30 正常。真机验证：XiaoMi 14 / Android 13 / HBuilderX 5.34，长内容抽屉滚到中下部后关闭再开、连开两次，正文都回到顶部，证据在 `pages/demo/drawer/drawer.uvue` 文件头。
- Web 的入场关键帧不靠重新挂载：`display: none` 会终止动画，去掉隐藏类后浏览器从头再播一遍，和第一次打开一致。
- `vx-datetime` 的滚轮改成下一帧挂载：`picker-view` 和 `fixed` 根节点同一帧创建时 App 端会拒绝创建，先画同尺寸占位，`nextTick` 后再换成滚轮；下标由 `prepare()` 当场备好，不会给空 `value`。挂上后常驻，列数变化仍由 `wheelKey` 整只换。
- 新增一次性探针页（已移除）：不进 `pages/demo/shared/catalog.ts`，演示目录和首页看不到入口，只在 `pages.json` 留路由。真机记录和 Web 冒烟结论见上面弹层几条。

- 操作菜单动作超过一屏会把取消栏顶出屏幕：不再写 `max-height: 100%`，打开时在本组件作用域里量 `.vx-actionsheet` 根节点的高度减 24 写行内上限，量不到才退回 `getWindowInfo().windowHeight` 减 24，两者都拿不到就不写上限。`panel` 补 `flex-shrink: 1`、动作区补 `min-height: 0`：App 不会把 `sheet` 的 `max-height` 分给子项，子项不写收缩就按内容高撑出去，取消栏被裁在屏幕下面。多出来的动作仍在动作区被裁，动作行不收缩，52 的行高（App 上加上下各 12 内边距 76）不被压扁。`items` 超过 8 条仍只警告一次，规范是 2–6 条。真机验证：XiaoMi 14 / Android 13 / HBuilderX 5.34，12 条动作时取消栏完整在窗口内可点、顶部留白 24dp、改 `wm size` 后不再多吃 32px；2–6 条版式和改前一致，证据在 `pages/demo/actionsheet/actionsheet.uvue` 文件头。
- 弹框动作在短屏或键盘弹起后会出屏：面板按 `getWindowInfo().windowHeight` 减上下各 24 写 `max-height`，头部和底栏保持不收缩，只缩正文（`flex-shrink: 1` + `min-height: 0` + `overflow: hidden`）。窗口高度每次打开重读，键盘收起后再打开上限跟着走；不再把 `uni.onWindowResize` 当成必需，先判是不是函数再挂（Web 听 `window.resize`）。
- 弹框和抽屉的关闭叉离面板边 8：弹框 `top` / `right` 从 4 改 `--vx-space-sm`，抽屉头部右内边距从 4 改 8；两处热区都改用 `--vx-hit-size`。
- 贴边弹层不再投阴影：`vx-actionsheet`、`vx-drawer`、`vx-picker`、`vx-calendar`、`vx-datetime` 去掉 `--vx-shadow-lg`，遮罩已经把面板和页面分开；居中弹框仍保留 `lg` 阴影。
- 打开那一下的抬手会点到刚挂上的遮罩，浮层一闪就关：`vx-popup`、`vx-modal`、`vx-drawer`、`vx-picker`、`vx-actionsheet`、`vx-bubble-popup` 补上 250ms 遮罩保护窗（`VX_POPUP_MASK_GUARD`，`vx-calendar` 已有），窗口内丢掉遮罩 / 外层点击，连 `click-mask` 也不抛。
- 弹层打开期间锁页面：`vx-modal`、`vx-drawer`、`vx-picker`、`vx-calendar`、`vx-actionsheet` 打开时调 `vxLockPageScroll()`，关闭或卸载时还原；Web 生效，App 和小程序仍靠遮罩拦手势。
- `vx-popup`、`vx-drawer`、`vx-bubble-popup` 新增 `cancel()`：收起并抛 `close`，给页面 `onBackPress` 用；`close()` 仍然只收起。
- 弹框和操作菜单不再在根节点统一拦 `touchmove`：只拦遮罩、头部和底栏，正文插槽里的 `scroll-view` 才能接住手势。

- `vx-popup` 新增 `overlay` 插槽：和遮罩、面板同一个根节点，共享 `fixed` 落点，默认不渲染；不要放进面板，面板的裁切会把自绘层裁掉。新增 `maxWidth`（只对上下贴边生效，横轴居中，窄屏仍铺满）；落位拆成 `--in-y` / `--in-x`，上下贴边用 `translateY`，左右和居中仍用 `translateX`。
- `vx-popup` 的 `closeable` 改名 `closable`：旧写法不再识别，与 `vx-modal`、`vx-drawer`、`vx-tag` 统一；0.63.0 条目里的旧拼写一起更正。关闭叉热区改用 `--vx-hit-size`。
- `vx-avatar` 新增 `clickable`：只写 `@click` 也算可点（读 `vnode.props`），显式 `clickable=false` 时按下不变淡也不拦点击；可点时才 `stopPropagation`。圆角跟 `size` 取 `--vx-control-radius-*`；`src` 显式 `null` 先收成空串。
- `vx-card` 静态卡片不再 `@click.stop`：不抛 `click` 的卡片把点击交给外层列表行，可点时才拦。
- `vx-bubble-popup` 的 Web 全局监听只在打开期间挂：关着的实例不跟页面滚动跑回调，收起即摘。
- `vx-checkbox` / `vx-checkbox-group` / `vx-radio` / `vx-radio-group` 新增 `index`：同一组都传了才按最大 `index` 认最后一项，缺一项整组退回挂载顺序；中间插入后 `index` 变化会重新登记。分组改成原地维护登记表，选中值先收成表再判断，挂载不再 O(N²)。
- `vx-collapse` / `vx-collapse-item` 新增 `index`，规则同上，静态写死的面板不用传。
- `vx-collapse-item` 的插槽和 `scroll-view` 第一次展开才创建，之后留着；自动高度先量内容再走和固定高度同一套 `height` 过渡，量不到才退回 `max-height`，量到之后超过 2000px 也不截。箭头 `sm` / `md` 用 14、`lg` 用 18，占位跟字形同大。
- `vx-countdown` 的秒段先按最小可见单位向上取整再拆天时分秒：只显示到分 / 时 / 天时，不再每秒进位；`onHide` 只停表，`onShow` 按截止时间补回剩余毫秒。`lg` 单独 10 圆角，三位数左右各补 8。
- `vx-divider` 的默认间距改走令牌：横线上下 `--vx-space-md`、竖线左右 `--vx-space-lg`，只有传了 `spacing` 才写行内；`align="left"` / `"right"` 去掉没有线那侧的外边距。
- `vx-form` 的 `labelWidth` 默认改成空串，宽度取 `--vx-form-label-width`（72px），不写行内也不警告；传了带单位的值才写行内盖过。
- `vx-form` 的失败项改为自己上报位置：表单项在自己作用域里量根节点，把视口 `top` 交给容器；容器外面是 `vx-page` 时滚它的滚动区（`libs/page-scroll.ts` 的注入键），没有才补页面滚动量调 `pageScrollTo`；form 自己查 `.vx-form-item--invalid` 只作兜底。`validateField` 单项校验不定位，边输入边跳不再出现。真机结论：XiaoMi 14 / Android 13 / HBuilderX 5.34，第 4 项和第 1 项失败时都滚到距顶 8 逻辑像素（设备像素 21、密度 2.625）。
- `vx-form-item` 的内容区最小高度跟控件档位，矮控件在这一层垂直居中，双行时标题仍停在第一行；异步校验回来序号对不上就丢弃，`value` 变化让旧结果失效。真机结论：连续改两次只留「第二次校验」；`clearValidate` 之后 800ms 晚到的失败没有把错误行带回来。
- `libs/form.ts` 的异步 `validator` 返回非字符串（含 `undefined`）按通过处理，收成空串，不再被当成错误文案。
- `vx-grid-item` 的圆角跟 `size` 取 6 / 8 / 10，禁用图片压到 `--vx-opacity-media-disabled`。
- `vx-image` 的 `src` 显式 `null` 先收成空串；窗口宽在 `props.ts` 里缓存一次，列表里不再每个实例打 `getWindowInfo`；淡入时长走 `--vx-duration-normal`。
- `vx-image-group` 的失败按格子 `index` 记：同一地址两张图，一张失败不把另一张已经显示的换掉，也不再按地址恢复；换 `items` 清掉失败记录；`wrap` 用 `align-self: stretch` 代替 `width: 100%`，父宽刚好 n 列时最后一列不再换行。
- `vx-input` 点清除时在 `clear` 之外补抛 `input('')`，绑 `@input` 过滤的业务也能收到空串；`change` 仍只在失焦和确认时抛，已经是空串不补抛。清除热区收成 30 / 34（图标 14 / 18 加左右各 8），不再占整档控件高度。搜索取消按钮在 App 上用按下标记留住热区，Web 用 `mousedown.prevent` 保住焦点。
- `vx-list-view` 新增 `size`：只改标题区左右内边距（`sm` 12，`md` / `lg` 16），不传给里面的行。
- `vx-loading` 的 `bars` 变体按顺序写递减 `opacity`（终点 0.16）：5.26 的 App 没有关键帧时十二瓣也分得出前后，关键帧跑起来仍盖过行内值。
- `vx-navigation-bar` 的 `ready` 在条高变化超过 0.5px 时重新抛：`refresh()` 改字体、胶囊或槽之后，外层占位和 `sticky` 的 `offsetTop` 能跟着更新。返回热区改用 `--vx-hit-size`。
- `vx-no-data` 的内边距改用 `--vx-space-xl` / `--vx-space-lg`，不再写字面量 24 / 16。
- `vx-nomore` 的线、文案和圆点收进同一行容器：只留线时也占一行文案高度（`sm` / `md` 走 `--vx-line-sm`，`lg` 走 `--vx-line-md`），和同尺寸的 `vx-loadmore` 同高。
- `vx-picker` 的 `prepare()` 看到同一份 `options` 引用就跳过规整，全国三级三千多个节点连开不必重走；每次打开强制写一次 `value`，常驻的滚轮在隐藏期间丢了位置也能拨回草稿，打开期间的滚动仍走「没变就不换」。
- `vx-qrcode` 的 `text` / `logo` 显式 `null` 先收成空串；`width` 传 `rpx` 时回落档位边长，不再被 `parseFloat` 读成 200；模块 `key` 改用下标复用，内容变化不再整批删掉重建；`logoBox` 单独计算，改 `logoScale` 不重拼全部模块样式。
- `vx-rate` 按下后中途被改成只读或禁用时整笔手势作废，拖动中写过的分值退回按下时的值；横向接管后 `stopPropagation`，不再把这一笔交给外层滚动。
- `vx-rolling-news` 根节点加 `z-index: 0` 收口：内部 `prefix` / `suffix` / 热区的 2、3 只在组件这一组里比较，Web 上不再压到固定页脚。
- `vx-row` / `vx-col` 的 `stretch` 改成按视觉行分组：换行后每一行只用自己的最高列，不再用整组最高撑后面的短卡片；Web 不写像素高度，`align-items: stretch` 本身生效；离开 `stretch` 时清掉旧 `height`；测量前先拿掉高度再量，内容变矮也缩得回。App 用 `UniResizeObserver` 听列内容，小程序在列的 `onUpdated` 补量，Web 不写像素高度。
- `vx-section` 可点标题栏的最小高度改用 `--vx-hit-size`。
- `vx-sticky` 已经量到位置就不再在滚动里重测，只由 `refresh()` 触发；`offsetTop` 变化时自动重测，导航栏 `ready` 后改偏移能落到新的吸顶线。
- `vx-swipe-action` 新增 `group`：不传时按页面分组（`getCurrentPages()` 的 `route` 加栈位置），同页多个列表各传一个值；动作节点第一次露出后常驻，收起不再卸载重建；跟手期间直接写内容节点的 `transform`，不再每一帧重绘整行。演示页两列表各传 `group`，H5 复验互不干扰（展开 A 列表一行后再展开 B 列表一行，A 仍展开）。
- `vx-tabbar` 的凸起圆钮只有圆钮能点：栏身不切换，栏顶以上的透明段不接点击，点下去落到页面。行高不再为凸起加高，未固定时用 `margin-top` 留出圆钮，固定时正文铺到栏顶下面；圆钮自己挂按下态和指针，禁用图片压到 `--vx-opacity-media-disabled`。
- `vx-tabs` 的行对象只跟 `items`、尺寸、`variant`、`type`、竖排和滚动形态走，选中变了不重建：选中 / 未选中两份 class 在行上预留，模板按当前下标挑，只有新旧两项的挑选结果变。
- `vx-tag` 的高度、字号、行高和左右内边距改用标签自己的令牌：高 20 / 24 / 28，字 12 / 13 / 14，行 16 / 18 / 20，内边距 6 / 8 / 10。关闭叉三档都用 `sm` 14，热区宽度不小于标签高度，不再靠放大图标。
- `vx-textarea` 的圆角跟 `--vx-control-radius-*`，左右内边距按档 12 / 16 / 24，和输入框对齐。
- `vx-time-axis` 的图标不再比节点小一档，直接跟 `size` 取 14 / 18 / 22。
- `vx-calendar` 的翻月箭头宽 40、年份双箭头宽 30 改用 `--vx-calendar-arrow` / `--vx-calendar-double`，关闭叉热区改用 `--vx-hit-size`。

- 新增 `--vx-form-label-width`（72px），表单项左侧标签默认取它；亮暗各一份。
- 新增 `--vx-hit-size`（44px），关闭叉、返回、可点标题栏和独立图标按钮统一用它。`--vx-gallery-control` / `--vx-modal-close-size` 这一版仍写 44，下个大版本删除；App 不能写 `--a: var(--b)`，两处数值手工保持相等。
- 新增标签令牌 `--vx-tag-height-*`、`--vx-tag-font-*`、`--vx-tag-line-*`、`--vx-tag-padding-*`，亮暗各一份；`--vx-compact-height-*` 只留给页脚链接和页签胶囊，标签不再借用。
- 新增 `--vx-opacity-media-disabled`（0.4），亮暗各一份。
- 新增 `--vx-calendar-arrow`（40）、`--vx-calendar-double`（30），亮暗各一份。
- 新增给 Pro 用的令牌：`--vx-index-key-font-*` / `--vx-index-key-line-*`、`--vx-index-indicator-font-*` / `--vx-index-indicator-line-*`、`--vx-guide-arrow` / `--vx-guide-arrow-out`、`--vx-indicator-dot` / `--vx-indicator-line` / `--vx-indicator-line-active` / `--vx-indicator-line-height`、`--vx-swiper-caption` / `--vx-swiper-indicator-over`、`--vx-opacity-key-dim`（0.72）；免费层本次没有组件读取它们。
- `vx-tips` / `vx-toast` 只改注释里的默认层级（1010 / 1100），样式和行为不变。
- 圆角约定同步：`--vx-control-radius-*` 是跟 `size` 走的三档元素圆角 6 / 8 / 10，不分档的容器仍用 `--vx-radius-md`，贴边面板和弹框仍用 `--vx-radius-lg`。
- DESIGN 和 readme 同步：弹层层级表从 90 / 95 / 100 / 105 / 110 / 150 / 200 改到 1000 / 1005 / 1010 / 1015 / 1020 / 1050 / 1100（与 `libs/overlay.ts` 一致）；贴边弹层不投阴影；常驻、`display: none` 和「要完全释放用 `v-if` 包住整个弹层」写进各弹层条目；标签尺寸、控件字号表、三档元素圆角、表单 `labelWidth`、输入框清除补抛 `input`、折叠面板的 `index`、滑动菜单的 `group`、列表分组的 `size` 一并补上。README.en 的标签高度和层级同步。
- 演示工程：头像加 `clickable` 和显式 `false` 两组、折叠面板和弹出层的 `v-for` 补 `index`、列表分组加 `size="sm"` 一组、标签演示的尺寸说明改成 20 / 24 / 28、标签栏提示改成「只有圆钮能点」。免费仍 60 件（按目录 62），Pro 仍 29 件，本版不新增组件。
- 版本号统一到 0.67.0：`uni_modules/vaporix-ui/package.json`、`manifest.json`（versionCode 6700）、演示工程首页、头像 / 折叠面板 / 列表分组 / 弹出层 / 标签栏 / 标签六个演示页页脚。

## 0.66.2（2026-11-06）

- 修复 `vx-tabs` 竖排角标压行：竖排的行只有文字高，角标仍绝对定位在文案右上角，会顶出本行压到上一行的分割线，`soft` 外观下还盖住文案。改成行内排布——文案和角标放进同一个 flex 行，角标跟在文案后面、垂直居中，右侧落在 12px 内边距内侧，不再绝对定位。
- 竖排文案 `flex: 1` + `min-width: 0` + 单行省略，角标 `flex-shrink: 0`：`verticalWidth=96` 时四字文案省略、角标完整；`badge` 超过 `badgeMax` 显示 `max+`、`dot` 优先于计数仍由 `vx-badge` 处理，没有重写角标。
- 横排一个 class、一条偏移量都没动：绝对定位、`:offset-y="-4"`、DOM 结构和 `vx-tabs__badge` 全部保持原样，新增样式只挂在 `vx-tabs__item--vertical-chip` / `--vertical-content` / `--vertical-text` / `--vertical-badge` 上。
- 修复 `vx-input` 搜索变体的键盘确认键：`confirmType` 默认值从 `'done'` 改成 `''`（空串表示没传），组件内新增计算值——显式传了用传入值，`search` 变体默认 `'search'`，其余变体仍是 `'done'`；模板改绑计算值，`variant` 从 `search` 切回 `outline` / `line` 时键面跟着回到「完成」。
- 不改任何 class、焦点态、取消按钮和清除图标逻辑，`outline` / `line` 分支的视觉与行为不变；`confirm` / `search` 的触发时机也不变，点搜索键仍会先抛 `confirm` 再抛 `search`。
- 不新增 `--vx-*` 令牌，也不新增组件：免费仍 60 件（按目录 62），Pro 仍 29 件。
- 版本号统一到 0.66.2：组件包、`manifest.json`（versionCode 6602）、演示工程首页、标签页和输入框两个演示页页脚、文档站（含站点页眉 / 页脚 / 组件页 meta）。readme 补竖排角标规则和 search 的 confirm-type 默认值；DESIGN 补标签页竖排角标、输入框 search 的键盘键面；文档站中英 tab / input 页补同样两句，`pnpm build` 通过（98 个静态页）。
- 真机验证：XiaoMi 14 / Android 13 / HBuilderX 5.34，标签页 09 两处角标完整可见、01–08 与改动前一致，输入框 09 的搜索键面变成放大镜 /「搜索」、01–08 的普通输入框仍是「完成」。

## 0.66.1（2026-11-06）

- 修复 App 端图标全部显示成方框：HBuilderX 5.34 的 dev 运行没有稳定把 `uni_modules` 下 static 里的 ttf 同步到设备（巡检那轮设备上就没有字体文件；clean 构建能带上，增量构建和中断过的同步会丢），`@font-face` 拿不到文件，字形就落成方框；失败时 logcat 里能看到 `local font not found`。
- 方案：App 分支的 `@font-face` 改成内嵌 base64，字体跟样式一起进包，不再依赖 static 同步；`variables.css` 只内嵌 core 两个字重（约 +70 KB），`icons-extend.css` 内嵌 extend 两个字重（约 +694 KB，只有引入扩展 CSS 的项目才付这份体积）。
- Web 端不动：`#ifdef WEB` 仍用包内 ttf 的相对路径；小程序继续走原来的 base64。`vx-icon` 的 props / 事件 / 插槽、`codepoints.ts` 的码点和 tier、字体文件本身都没有改。
- 探针结论：App 端 `uni.loadFontFace` 存在，传 `/uni_modules/...` 路径也能加载成功，但运行时注册的 family 不会被 uvue `text` 的 `font-family` 解析（class 和行内 style 都回落）；`@font-face` 写在 App.uvue 根样式里、或从 `variables.css` 引入，只要 ttf 在包内都能正常出图，多 URL 叠 `format('truetype')` 的写法本身没有问题。真正缺的是字体文件。
- 构建工具：新增 `tools/icons/font_css.py`（@font-face 块模板）和 `tools/icons/write-css.py`（只重写样式、不重建字体）；`build.py` 改为调用同一份模板，重建字体后 App 的 base64 会跟着更新，不用手工粘贴。
- 文档站构建加了 `stripAppOnlyCss` 插件，把 App 独占的 base64 块从 Web 产物里去掉：文档站 CSS 体积和改动前一致，图标页渲染不变。
- 真机验证：XiaoMi 14 / Android 13 / HBuilderX 5.34，Pro 演示工程 `tag`、`rate`、`steps`、`badge`、`keyboard`、`tree-view` 六页图标正常；免费工程同轮编译通过。巡检页跑到 `landscape`（压屏窗）时应用崩溃过一次，单开该页正常，崩溃日志里 11 月 4 日也有同签名记录，按既有问题记录，不算本次改动引入。
- 版本号统一到 0.66.1：组件包、`manifest.json`（versionCode 6601）、演示工程首页与页脚、文档站。

## 0.66.0（2026-11-06）

- `vx-input` 新增 `variant="search"`：搜索框是输入框的语义扩展，不新开组件。浅底 `default-soft`、胶囊圆角、默认不画可见描边，前置 `search` 图标，左右内边距 12 / 16 / 16，高度仍是控件三档 32 / 40 / 48。
- 搜索变体的取消按钮固定在右侧，文案「取消」，`--vx-font-control-*`、`--vx-color-text-secondary`；有值或聚焦时出现，其余时候不占位。点取消先清空 `v-model`、收起键盘，再抛 `cancel`；`disabled` 时仍显示但不响应，`readonly` 不出现。
- 搜索变体不渲染 `label` / `required` / `unit`，同时传了在开发环境提示一次。新增 `search` 事件（键盘确认，参数为当前文本）和 `cancel` 事件（无参数）；`confirm` / `change` / `clear` 等原有事件不变。
- `outline` / `line` 分支的 class 名、DOM 结构和默认值一个都没动：新样式全部落在 `vx-input--search`、`vx-input--search-sm` 和 `vx-input__search-*` 上。清除图标在搜索下收成图标宽，排在取消左侧。
- 搜索图标沿用 `vx-icon` 的 `sm` / `md` 两档（14 / 18），`lg` 与 `md` 同档：图标只有三档，不为 16 新增第四种尺寸。默认无描边，聚焦补 1px `primary`、`invalid` 补 1px `danger`，1px 透明边框保住焦点可见性，也不让状态切换跳行高。
- `vx-tabs` 新增 `direction="vertical"` 和 `verticalWidth`：侧边导航是页签的另一种排布，不新开组件。每项占一整行，行高沿用列表行 44 / 52 / 60，宽度默认 96px，传 0 跟随容器撑满。
- 竖排把底部下划线换成左侧 2px 竖条（高 60%、垂直居中、颜色跟 `type`），选中项整行铺 `default-soft`（`soft` 外观铺对应的 `*-soft`），文字取 `*-pressed` 并加到 600 字重；`divider` 变成项之间的 1px 横线，最后一项不画，右侧也不画竖线。
- 竖排不支持 `variant="inverse"`：传了按 `soft` 渲染并在开发环境提示一次。横向分支的 class 名、指示器计算和整条反色都没动；`v-model`、`change` 和 `items` 结构完全不变。
- 不新增 `--vx-*` 令牌：搜索框复用 `default-soft`、`--vx-radius-pill`、`--vx-icon-*` 和控件三档；竖排复用列表行高度、`*-soft` 浅底、`--vx-border-width-strong` 和 `--vx-color-divider`。
- 演示工程输入框页追加「搜索变体」、标签页追加「竖向标签」，各 1 组新区块；版本号统一到 0.66.0：组件包、manifest、首页、两个演示页页脚和文档站。
- readme 补两节属性、事件和说明；DESIGN 输入框条目补 search、标签页条目补 vertical，Do / Don't 各加一句。免费组件仍 60 件（按目录 62），Pro 仍 29 件，变体不增件数。
- 本版不做 `vx-search` / `vx-sidebar` 新组件，不做搜索历史、联想和扫码入口，不给页签加内容区、拖动排序和竖排反色。

## 0.65.0（2026-11-05）

- 新增免费组件 `vx-avatar`：`src` / `text` / `icon` 三态回落，图片失败 → 首字 → 图标 → `user`；失败只记一次，`src` 变化复位重试，空 `src` 不经过图片节点。
- 首字先 `trim` 再按 code point 取，第一个 code unit 是高位代理时连取两个 code unit；`😀` 不会被 `slice(0, 1)` 截成半个，中文首字正常。
- 三档外框 32 / 40 / 48，首字 12 / 14 / 16，图标 14 / 16 / 18；`shape` 三档，`ring` 用 `inset: 0` 的内层 2px 描边、不改外框，`mode` 只透传 `aspectFill` / `aspectFit`。
- 六种 `type` 复用 `*-soft` 浅底和 `*-pressed` / `warning-ink` 前景；`bgColor` / `color` 是字面值，图片态不铺底色，只有传入 `@click` 时才挂按下态和指针。
- 新增 9 个尺寸令牌 `--vx-avatar-*`、`--vx-avatar-font-*`、`--vx-avatar-icon-*`，亮暗各一份；不新增颜色令牌。
- 演示工程新增头像演示页 7 组示例；组件目录、路由、翻页链（安全区 → 头像）、首页版本和页脚一起更新。
- readme 新增一节用法、属性、事件和说明；DESIGN 补充分层计数、组件条目、配色 / 尺寸 / 形状 / 图标和 Do / Don't；README 授权段补上头像。
- 免费层到 60 件（按目录 62），展示族到 14；uView 的广度对标到此结束。版本号统一到 0.65.0：组件包、manifest、演示页页脚。
- 本版不改 `vx-card` / `vx-image-group` / `vx-list-cell` 里的头像实现，也不做徽章内嵌、在线状态点、裁剪和长按保存。

## 0.64.0（2026-11-05）

- 新增免费组件 `vx-image`：加载中 / 成功 / 失败三态，`src` 空串直接走失败态；`placeholder` 控制加载中的占位底色，失败态用 `errorIcon` / `errorText` 回落，只回落一次、不重试。
- `vx-image` 根节点显式声明 `display: flex`，失败态图标在上、文案在下，整组在固定高度里垂直居中；`vx-divider` 也显式声明 flex 行，不依赖宿主默认的 view 布局。
- `vx-image` 支持 `width` / `height` / `ratio` 三种定尺寸方式：`height` 优先，没传时按 `ratio` 和 `width` 换算，两者都没有时高度取 100%；`ratio` 只在 `width` 是 px 或 rpx 时生效，rpx 按 750 基准换算，百分比和 `auto` 下只提示一次。
- `vx-image` 提供 `radius` 五档（`circle` 取胶囊）、`bgColor` 覆盖占位与失败底色、`lazyLoad` 和 200ms 的 `fade` 淡入；`src` 变化重置成加载中，点击 / 加载 / 失败只抛事件，不内置预览。
- 新增免费组件 `vx-divider`：`direction` 横竖两向、`dashed` 1px 虚线、`text` 配 `align` 三种文字位置、`spacing` 数字按 px（空串横向 12 / 纵向 16）、`color` 同时覆盖线色与文字色、竖线 `height` 覆盖；没有插槽、图标、箭头和点击态。
- 新增免费组件 `vx-safe-area`：`edge` 顶部 / 底部、`height` 覆盖、`bgColor` 和 `fixed`；不传高度时用 `padding` 读 `var(--uni-safe-area-inset-top/bottom, 0px)`，固定态层级 1、不加分割线 / 毛玻璃 / 渐变，只处理纵向。
- 演示工程新增图片、分割线、安全区三个演示页，分别 7 / 5 / 4 组示例；组件目录、路由翻页链、首页版本和页脚一起更新，弹出层的「下一个」接到图片。
- 演示工程在全局样式里引入 `icons-extend.css`，组件目录的扩展图标（含本版三件）不再缺字形。
- readme 新增三节用法、属性、事件和平台支持；DESIGN 补充三件的配色、排版、尺寸、形状、层级、动效和 Do / Don't，分层表改到 59（按目录 61）；README 授权段的免费组件清单补上三件。
- 本版不新增令牌：占位底色复用 `--vx-color-default-soft`，线色复用 `--vx-color-border`，安全区复用 `--uni-safe-area-inset-*`。
- 不迁移 `vx-card` / `vx-image-group` / `vx-upload` / `vx-waterfall` 里的裸 `<image>`；点击预览、长按保存、裁剪和骨架扫光也都不在本版。
- 免费组件数从 56 增到 59（按目录 58 增到 61），展示族从 12 增到 13、布局族从 8 增到 10；版本号统一到 0.64.0：组件包、manifest、演示页页脚和文档站一起更新。

## 0.63.0（2026-11-05）

- 新增弹层底座 `libs/overlay.ts`：六档层级常量（90 / 95 / 100 / 110 / 150 / 200）、进出场时长、贴边方向到安全区的映射、圆角档位到 px 的换算和滚动锁类名；只放常量和纯函数，读写状态留在组件里，后面几个免费弹层逐个迁移过来。
- 新增免费组件 `vx-popup`：`placement` 支持四向贴边和居中，`width` / `height` / `round` / `closable` / `maskClosable` / `maskColor` / `safeArea` / `zIndex` / `duration` / `lockScroll` 十个选项；`show` 支持 `v-model:show`，`ref` 上暴露 `open()` / `close()` / `toggle()`。
- 进出场只改 `transform` 和 `opacity`，贴边面板从所在边滑入、居中面板只淡入；关闭动画走完（`duration` 加一帧）才卸载，关闭过程中再打开会从当前位置回到终点；`duration=0` 和 Web 的「减少动效」都直接切换。
- 面板只圆朝向页面的那一侧，贴边那条边保持直角，居中四角全圆；贴边面板不加阴影也不加描边，居中面板四周加 1px 描边；关闭叉在内容上方单占一行 44，贴顶时不会钻进状态栏。
- 安全区由面板内边距承担：上下贴边让开所在边的状态栏或手势条，左右面板两头都让，横屏的左右安全区每档都让；`safeArea=false` 只影响上下贴边。
- 新增令牌 `--vx-popup-width`（280px）和 `--vx-popup-max-width`（480px），亮暗各一份；左右贴边不传宽度时用前者，居中按内容宽度收在后者以内。
- 新增全局样式 `.vx-scroll-lock`：Web 上 `lockScroll` 打开时给页面根节点加这个 class 停住页面滚动，收起后移除；组件样式带 `[data-v-*]` 作用域够不到页面根节点，所以放在全局令牌表里。App 不锁页面滚动，小程序只拦遮罩上的手势，差异写进 readme 的平台支持。
- 演示工程新增弹出层演示页：四向与居中、圆角四档、关闭方式、安全区、宽高、长内容、方法与层级、业务组合共 8 组；组件目录、路由翻页链、首页版本和页脚一起更新。
- readme 新增一节用法、属性、事件、插槽、方法和平台支持；DESIGN 补充弹层层级表，以及弹出层的配色、排版、尺寸、形状、层级、动效和 Do / Don't；README 授权段的免费组件清单补上弹出层。
- 免费组件数从 55 增到 56（按目录 57 增到 58），反馈族从 12 增到 13；版本号统一到 0.63.0：组件包、manifest、演示页页脚和文档站一起更新。

## 0.62.0（2026-11-05）

- 新增免费组件 `vx-form` 和 `vx-form-item`：容器负责登记与串行校验，表单项负责标题、星号、说明和错误行；不托管数据，不内置提交按钮、loading 和 Toast。
- 新增纯函数规则引擎 `libs/form.ts`：`required` / `len` / `min` / `max` / `pattern` / `type` / `validator` 七项能力；空值只看必填，非空按定长 → 范围 → 格式 → 正则 → 自定义的顺序判定；内置手机号、邮箱、身份证号、链接和数字五种格式。
- 表单项支持 `prop` / `value` / `rules` / `label` / `required`（不传时从 rules 自动推断）/ `help` / `error`，默认插槽暴露 `{ invalid, error }`，校验结束抛 `@validate(ok, message)`。
- 容器支持 `validate()` / `validateField()` / `clearValidate()`；`validate()` 按注册顺序串行、第一个失败即停，`scrollToError` 用 `createSelectorQuery` 量失败项后 `pageScrollTo`；`disabled` 时跳过校验，重复 `prop` 以先注册者为准并在控制台提示。
- 标题归属写成一条规则：输入类控件的标题在控件内部，表单项不再传 `label`；开关、评分、多选这类控件由表单项画标题和星号；`labelPosition="top"` 时标题独占一行、`labelWidth` 不生效。
- 演示工程新增表单演示页：登录、规则一览、错误定位、非输入类字段、标签位置、尺寸三档、禁用态、受控错误、方法与完整收货地址共 10 组；组件目录、路由翻页链和页脚版本一起更新。
- readme 新增两节用法、属性、事件、插槽、规则表和平台支持；DESIGN 补充表单的配色、排版、尺寸、形状、层级、动效、标题归属和 Do / Don't；README 授权段的免费组件清单补上表单。
- 不新增 `--vx-*` 令牌：标签宽度、字号、间距和错误色都取现有令牌；亮暗两套主题不需要各写一份。
- 免费组件数从 53 增到 55（按目录 57），表单族从 8 增到 10；版本号统一到 0.62.0：组件包、manifest、演示页页脚和文档站一起更新。

## 0.61.0（2026-11-03）

- 新增树型菜单令牌 `--vx-tree-row-sm/md/lg`（36 / 44 / 52）、`--vx-tree-indent-sm/md/lg`（16 / 20 / 24）和 `--vx-tree-marker-sm/md/lg`（20 / 24 / 28），亮暗各一份。
- 节点行高单独一档，不并入列表行 44 / 52 / 60；层级靠缩进表达，箭头位跟着档位放大，字号仍用控件三档 13 / 14 / 16。
- DESIGN.md 补充树型菜单的配色、排版、尺寸、形状、层级、动效、组件和 Do / Don't 规则；树只负责展开、选中和勾选，不排序、不请求、不虚拟化。
- 免费组件没有改动；`vx-tree-view` 在 `vaporix-ui-pro` 1.27.0，使用本版新增的 `--vx-tree-*` 令牌，升级时两个模块一起换。
- 版本号统一到 0.61.0：组件包、manifest、演示页页脚和文档站一起更新。

## 0.60.0（2026-11-03）

- 新增数字键盘令牌 `--vx-keyboard-key-sm/md/lg`（44 / 52 / 60）、`--vx-keyboard-font-sm/md/lg`（20 / 24 / 28）、`--vx-keyboard-slot-sm/md/lg`（32 / 36 / 40）、`--vx-keyboard-slot-height`（44）和 `--vx-keyboard-dot-sm/md/lg`（8 / 10 / 12），亮暗各一份。
- 键高单独一档，不并入控件 32 / 40 / 48 和列表行 44 / 52 / 60；密码位的下划线宽度跟档位，高度三档共用，数字和圆点都贴着下划线落位。
- DESIGN.md 补充数字键盘的配色、排版、尺寸、形状、动效、组件和 Do / Don't 规则；按键只承载一位数字，不校验、不保存、不自动收起。
- 免费组件没有改动；`vx-keyboard` 和 `vx-keyboard-input` 在 `vaporix-ui-pro` 1.26.0，使用本版新增的 `--vx-keyboard-*` 令牌，升级时两个模块一起换。
- 版本号统一到 0.60.0：组件包、manifest、演示页页脚和文档站一起更新。

## 0.59.0（2026-11-02）

- 新增骨架屏令牌 `--vx-skeleton-title-sm/md/lg`（16 / 18 / 20）、`--vx-skeleton-line-sm/md/lg`（10 / 12 / 14）、`--vx-skeleton-avatar-sm/md/lg`（32 / 40 / 48）、`--vx-skeleton-profile-sm/md/lg`（56 / 64 / 72）、`--vx-skeleton-media-sm/md/lg`（120 / 160 / 200）、`--vx-skeleton-tile-sm/md/lg`（64 / 80 / 96）、`--vx-skeleton-gap-sm/md/lg`（6 / 8 / 10）、`--vx-skeleton-row-sm/md/lg`（16 / 20 / 24），以及 `--vx-skeleton-duration-pulse`（1400ms）和 `--vx-skeleton-duration-shimmer`（1600ms）。
- 新增占位色 `--vx-skeleton-fill`（亮色 `#eceff5` / 暗色 `#2a2e38`）和扫光色 `--vx-skeleton-shine`（亮色 72% 白 / 暗色 8% 白），亮暗各一份；占位块只用中性色，不表达状态。
- DESIGN.md 补充骨架屏的配色、尺寸、间距、圆角、动效、组件和 Do / Don't 规则；骨架是装饰，不拦点击，不进入键盘顺序。
- 免费组件没有改动；`vx-skeleton` 在 `vaporix-ui-pro` 1.22.0，使用本版新增的令牌，升级时两个模块一起换。
- 版本号统一到 0.59.0：组件包、manifest、文档站、演示页页脚和组件索引计数一起更新。

## 0.58.0（2026-11-01）

- 迁入 `vx-radio` / `vx-radio-group` 单项选择器：整组只选一项，`v-model` 绑字符串；横排或列表两种排布、圆圈或只画对号、三档尺寸、六种语义色、行尾标记、分割线、卡片和整组禁用。
- 迁入 `vx-checkbox` / `vx-checkbox-group` 多项选择器：`v-model` 绑字符串数组；方框或只画对号、可选上限 `max` 与 `exceed` 事件、部分选中 `indeterminate`、全选由父级算。
- 迁入 `vx-switch` 开关选择器：`v-model` 绑布尔值；单行或整行、轨道位置、`loading` 加载圈、禁用和四个自定义颜色。
- 五个组件从 `vaporix-ui-pro` 迁出，免费库的组件数从 50 增到 53，付费库从 14 减到 11；`vaporix-ui-pro` 1.20.0 起不再提供这五个组件。
- 演示工程新增单项选择器、多项选择器和开关选择器三个演示页，组件目录、路由翻页链和页脚版本一起更新。
- readme 新增五节（两个分组与三个单项）的用法、属性、事件、插槽和从 ThorUI `tui-radio` / `tui-checkbox` / `tui-switch` 的迁移说明。
- 版本号统一到 0.58.0：组件包、manifest、文档站、演示页页脚和组件索引计数一起更新。
## 0.57.0（2026-11-01）

- 迁入 `vx-text` 文本：正文、说明、金额和证件统一字号、字重和语义色；支持 `block`、三档尺寸、四种字重、对齐、装饰、单行 / 多行截断、手机号 / 金额 / 银行卡 / 身份证格式化、可选中、长按复制、可点击和禁用。
- 迁入 `vx-link` 超链接：Web 新开标签页，App 和小程序复制并提示；支持 `tel:` / `mailto:`、七种文字色、三档尺寸、四种字重、下划线、三种打开方式、`prefix` / `suffix` 插槽和禁用。
- 两个组件从 `vaporix-ui-pro` 迁出，免费库的组件数从 48 增到 50，付费库从 16 减到 14；`vaporix-ui-pro` 1.19.0 起不再提供这两个组件。
- 演示工程新增文本和超链接两个演示页，组件目录、路由翻页链和页脚版本一起更新。
- readme 新增两节的用法、属性、事件、插槽、方法和从 ThorUI `tui-text` / `tui-link` 的迁移说明。
- 版本号统一到 0.57.0：组件包、manifest、文档站、演示页页脚和组件索引计数一起更新。
## 0.56.0（2026-11-01）

- 迁入 `vx-row` / `vx-col` 栅格布局与多端适配：24 栅格跨度、偏移、位移、四档断点、列间距、行间距、水平排列、垂直对齐和换行。`vx-row` 不新增令牌，`vx-col` 的列宽按百分比算。
- 迁入 `vx-status-bar` 状态栏：为系统状态栏留高并铺底色，支持 `height` 覆盖、透明、固定占位、滚动渐显、横屏安全区、默认插槽、`ready` 和 `refresh()`。不新增令牌，用 0.55.0 起的安全区变量和已有底色、间距令牌。
- 三个组件从 `vaporix-ui-pro` 迁出，免费库的组件数从 45 增到 48，付费库从 19 减到 16；`vaporix-ui-pro` 1.18.0 起不再提供这三个组件，升级时把 `uni_modules/vaporix-ui` 一起换到 0.56.0。
- 演示工程新增栅格布局、多端适配和状态栏三个演示页，组件目录、路由翻页链和页脚版本一起更新。
- readme 新增三节的用法、属性、事件、插槽、方法和从 ThorUI `tui-row` / `tui-col` / `tui-status-bar` 的迁移说明。
- 版本号统一到 0.56.0：组件包、manifest、文档站、演示页页脚和组件索引计数一起更新。
## 0.55.0（2026-10-30）

- 新增状态栏 `vx-status-bar` 的设计规则：默认取 `--uni-safe-area-inset-top` 留高并铺 `surface` 底色，系统时间、信号和电池由平台绘制；支持 `height` 覆盖、透明、固定占位、滚动渐显、横屏安全区、默认插槽和 `ready` 高度回传。
- Colors 补充状态栏的底色与系统前景边界；Typography 补充插槽没有文案档位；Layout 补充高度、占位、左右留白和渐显距离；Elevation、Shapes 和 Motion 补充无圆角、无阴影、无动画；Components 补充固定、透明、渐显、插槽和 `ready` / `refresh()` 的规则。
- Do's / Don'ts 补充状态栏只做系统状态栏区域，不代替导航栏、不叠导航栏、不放主操作和信息。
- 免费组件和令牌没有改动；`vx-status-bar` 在 `vaporix-ui-pro` 1.17.0，不新增令牌，升级时两个模块一起换。
- 版本号统一到 0.55.0：组件包、manifest、文档站、演示页页脚和组件索引计数一起更新。

## 0.54.0（2026-10-30）

- 新增验证码输入框令牌 `--vx-code-cell-sm/md/lg`（40 / 48 / 56）、`--vx-code-font-sm/md/lg`（18 / 22 / 26）、`--vx-code-dot-sm/md/lg`（6 / 8 / 10）和 `--vx-code-caret-sm/md/lg`（20 / 24 / 28），亮色、暗色各一份。
- 格子默认正方形，宽度不够时只收窄；数字、密码圆点和光标高度不并入图标、控件和徽章三档。分隔符字号取正文档位，不另开令牌。
- DESIGN.md 补充验证码输入框的配色、排版、尺寸、形状、层级、动效、组件和 Do / Don't 规则。
- 免费组件没有改动；`vx-code-input` 在 `vaporix-ui-pro` 1.16.0，使用本版新增的令牌，升级时两个模块一起换。
- 版本号统一到 0.54.0：组件包、manifest、文档站、演示页页脚和组件索引计数一起更新。

## 0.53.0（2026-10-30）

- 新增数据选择器 `vx-data-checkbox` 的设计规则：一组数据排成可换行的胶囊，单选用 `v-model` 字符串，多选用 `multiple` + `v-model:values` 数组；支持三档尺寸、六种语义色、三种未选中外观、固定宽度、可选上限、图标和自定义颜色。
- Components 补充数据选择器的选中配色、控件文案档位、换行与固定宽度、三种未选中外观、三种轮廓、按下态和禁用；选项结构、单选 / 多选模型、`max`、`clearable`、图标、自定义颜色和平台约束也一并写入。
- Do's / Don'ts 补充只承载短选项，不承载导航、开关、标题和校验。
- 免费组件和令牌没有改动；`vx-data-checkbox` 在 `vaporix-ui-pro` 1.15.0，不新增令牌，升级时两个模块一起换。
- 版本号统一到 0.53.0：组件包、manifest、文档站、演示页页脚和组件索引计数一起更新。

## 0.52.0（2026-10-30）

- 新增链接 `vx-link` 的设计规则：正文级文字入口、默认 primary、secondary 用于次要内联入口、下划线、三档正文字号和四种字重、`tel:` / `mailto:`、复制提示、App 与 Web 的打开差异。
- Colors 补充链接的语义色与 warning-ink；Typography 补充链接沿用正文档位、默认 medium；Layout 补充内联宽度、不加内外边距和 App 的 `max-width` 限制；Shapes、Elevation、Motion 和 Components 补充链接的无轮廓、无浮层、按下态、平台打开方式和交互规则。
- Do's / Don'ts 补充链接只做文字入口，不承载主操作、路由和埋点；长地址用短文案，不截断链接本体。
- 免费组件和令牌没有改动；`vx-link` 在 `vaporix-ui-pro` 1.14.0，不新增令牌，升级时两个模块一起换。
- 版本号统一到 0.52.0：组件包、manifest、文档站、演示页页脚和组件索引计数一起更新。

## 0.51.0（2026-10-30）

- 新增文本 `vx-text` 的设计规则：正文 13 / 15 / 17（20 / 22 / 24）、字重 400 / 500 / 600 / 700、default / secondary 与五种语义色、内联与块级、对齐与装饰、单行 / 多行截断、手机号 / 金额 / 银行卡 / 身份证格式化、可选中和长按复制。
- Typography 补充正文三档、四种字重和页面级展示标题的边界；Colors 补充文本语义色与 warning-ink；Layout 补充内联 / 块级、截断和金额格式化；Shapes、Elevation、Motion 和 Components 补充文本的无轮廓、无浮层、按下态和交互规则。
- Do's / Don'ts 补充文本只做正文和说明，不承载标签、徽章、标题、富文本和任意字号；格式化只接数值本身，关键信息不截断。
- 免费组件和令牌没有改动；`vx-text` 在 `vaporix-ui-pro` 1.13.0，不新增令牌，升级时两个模块一起换。
- 版本号统一到 0.51.0：组件包、manifest、文档站、演示页页脚和组件索引计数一起更新。

## 0.50.0（2026-10-30）

- 新增选择框令牌 `--vx-select-max-width`（480px）和 `--vx-select-media-sm/md/lg`（28 / 32 / 36），亮色、暗色各一份。
- 选择框行高沿用列表行 44 / 52 / 60，标记沿用 `--vx-radio-size-*` / `--vx-checkbox-*`，面板宽度取新令牌；媒体尺寸只用于选项图片，不并入图标三档。
- DESIGN.md 补充选择框的配色、排版、尺寸、形状、层级、动效、组件和 Do / Don't 规则。
- 免费组件没有改动；`vx-select` 在 `vaporix-ui-pro` 1.12.0，使用本版新增的令牌，升级时两个模块一起换。
- 版本号统一到 0.50.0：组件包、manifest、文档站、演示页页脚和组件索引计数一起更新。

## 0.49.0（2026-10-30）

- 新增分隔列表令牌 `--vx-divide-value-sm/md/lg`（17 / 20 / 24）、`--vx-divide-value-line-sm/md/lg`（22 / 26 / 30）、`--vx-divide-label-sm/md/lg`（12 / 13 / 14）、`--vx-divide-label-line-sm/md/lg`（16 / 18 / 20）、`--vx-divide-media-sm/md/lg`（32 / 40 / 48）、`--vx-divide-height-sm/md/lg`（56 / 70 / 84）和 `--vx-divide-gap`（2px），亮色、暗色各一份。
- 行高等于上下内边距加数值行、2px 间距和说明行，不并入控件、列表行和宫格三档；媒体尺寸只用于图片，不并入图标三档。分隔线长度不另开令牌，由组件按档位行高的百分比算。
- DESIGN.md 补充分隔列表的配色、排版、尺寸、形状、层级、动效、组件和 Do / Don't 规则。
- 免费组件没有改动；`vx-divide-list` 在 `vaporix-ui-pro` 1.11.0，使用本版新增的令牌，升级时两个模块一起换。
- 版本号统一到 0.49.0：组件包、manifest、文档站、演示页页脚和组件索引计数一起更新。

## 0.48.0（2026-10-30）

- 新增分段器 `vx-segmented-control` 的设计规则：2–5 段等宽、选中段填充语义色、未选中文字跟随同一色、选中加 `medium` 字重、可选 `divider` 段间竖线，分隔线跟外框同色并画在未选中段内侧。
- Layout 补充分段器沿用控件三档高度 32 / 40 / 48、段内左右内边距 8 / 12 / 16 和圆角 6 / 8 / 10；Typography 补充文案 13 / 14 / 16；Shapes 补充 `rounded` / `pill` / `square`；Colors、Elevation、Motion 和 Components 补充分段器的配色、分割线、层级、切换和边界。
- Do's / Don'ts 补充分段器的使用边界：只做互斥视图切换，不承载导航、多选、长文案和业务请求；分割线只帮助分界，不用来分隔内容块或替代选中态。
- 免费组件和令牌没有改动；`vx-segmented-control` 在 `vaporix-ui-pro` 1.10.0，不新增令牌，升级时两个模块一起换。
- 版本号统一到 0.48.0：组件包、manifest、文档站、演示页页脚和组件索引计数一起更新。

## 0.47.0（2026-10-30）

- 新增栅格布局 `vx-row` 和多端适配 `vx-col` 的设计规则：24 份制、列间距和行间距的负外边距抵消、断点 576 / 768 / 992 / 1200。
- Layout 补充栅格的 24 份制、列宽取整、间距机制和断点取值；Components 补充排列层和占宽层的分工、间距与断点的实现规则；Do's / Don'ts 补充栅格的使用边界。
- 免费组件和令牌没有改动；`vx-row` / `vx-col` 在 `vaporix-ui-pro` 1.9.0，间距由 props 以 px 传入，断点写在组件里，不新增令牌，升级时两个模块一起换。
- 版本号统一到 0.47.0：组件包、manifest、文档站、演示页页脚和组件索引计数一起更新。

## 0.46.0（2026-10-30）

- 新增滑动选择器令牌 `--vx-slider-track-sm/md/lg`（4 / 6 / 8）、`--vx-slider-thumb-sm/md/lg`（20 / 24 / 28）、`--vx-slider-inset-sm/md/lg`（10 / 12 / 14）和 `--vx-slider-height-sm/md/lg`（32 / 36 / 40），亮色、暗色各一份。
- 内缩等于圆盘直径的一半，圆盘走到 0% 和 100% 时边缘正好和根节点对齐；行高是圆盘直径加 12，按下光晕向四周各伸 4px（`--vx-slider-halo-out`），上下各留 2。这组尺寸不并入控件、开关和进度条三档。
- DESIGN.md 补充滑动选择器的配色、排版、尺寸、形状、按下态、动效、组件和 Do / Don't 规则。
- 免费组件没有改动；`vx-slider` 在 `vaporix-ui-pro` 1.8.0，使用本版新增的令牌，升级时两个模块一起换。
- 版本号统一到 0.46.0：组件包、manifest、文档站、演示页页脚和组件索引计数一起更新。

## 0.45.0（2026-10-29）

- 新增提示页令牌 `--vx-msg-disc-sm/md/lg`（56 / 72 / 88）、`--vx-msg-glyph-sm/md/lg`（28 / 36 / 44）、`--vx-msg-title-sm/md/lg`（17 / 20 / 26）、`--vx-msg-title-line-sm/md/lg`（24 / 28 / 34）和 `--vx-msg-copy-max` / `--vx-msg-actions-max`（360 / 320），亮色、暗色各一份。
- 提示页的图标圆、字形和标题不并入图标、控件和暂无数据三档；标题 20 / 26 是页面级结果的中间两档，动作高度仍取控件三档里的 40 / 48。
- DESIGN.md 补充提示页的配色、排版、尺寸、形状、层级、动效、组件和 Do / Don't 规则。
- 免费组件没有改动；`vx-msg` 在 `vaporix-ui-pro` 1.7.0，使用本版新增的令牌，升级时两个模块一起换。
- 版本号统一到 0.45.0：组件包、manifest、文档站、演示页页脚和组件索引计数一起更新。

## 0.44.0（2026-10-29）

- 新增环形进度令牌 `--vx-circular-progress-size-sm/md/lg`（64 / 80 / 100）和 `--vx-circular-progress-stroke-sm/md/lg`（6 / 8 / 10），亮色、暗色各一份；半圆高度在组件里按直径 / 2 + 线宽 / 2 算，不另开令牌。
- DESIGN.md 补充环形进度的配色、排版、尺寸、形状、动效、组件和 Do / Don't 规则。
- 免费组件没有改动；`vx-circular-progress` 在 `vaporix-ui-pro` 1.6.0，尺寸与本版新增的令牌同值；升级时两个模块一起换。
- 版本号统一到 0.44.0：组件包、manifest、文档站、演示页页脚和组件索引计数一起更新。

## 0.43.0（2026-10-29）

- 新增 vx-tabbar 标签栏：自定义底部导航，`items` 等宽排列，`v-model` 当前索引；字体图标跟选中色，图片图标成对传 `activeImage`。
- 新增 `raised` 凸起圆钮和 `action` 按钮项：圆钮浮在栏顶，`action` 项只抛 `click`、不写 `v-model`；一栏最多一个凸起项。
- 新增 `fixed` / `placeholder` / `safeArea`：固定时贴住屏幕底部，占位补出栏高和安全区，栏底色铺到屏幕底边；`divider`、`bgColor`、`color`、`badgeMax`、`badgeType`、`iconVariant` / `activeIconVariant`、`zIndex` 可调。
- 新增令牌 `--vx-tabbar-height-*`（48 / 56 / 64）、`--vx-tabbar-row-raised-*`（70 / 80 / 90）、`--vx-tabbar-media-*`（20 / 24 / 28）、`--vx-tabbar-raise-size-*`（44 / 52 / 60）、`--vx-tabbar-raise-lift-*`（22 / 24 / 26）、`--vx-tabbar-font-*`（13 / 13 / 14）和 `--vx-tabbar-line-*`（20 / 20 / 22），亮色、暗色各一份；行高是栏高加伸出段，App 不能 calc，单独维护。
- DESIGN.md 补充标签栏的配色、排版、尺寸、层级、动效、组件和 Do / Don't 规则。
- 演示页新增标签栏实验室，含基础、字体与图片图标、凸起按钮、角标、尺寸、语义色、禁用、分割线、自定义颜色、固定与安全区、内容组合 11 组示例；同时把固定标签栏做成可开关的真机演示。
- 文档站新增标签栏页，中英文含基础、凸起按钮、尺寸、图标、角标、状态、分割线、固定与安全区、自定义颜色、组合、设计规范、可访问性和 API；示意卡片、预览页和真实组件接入。
- 组件目录、路由、前后翻页和组件库 readme 登记；版本号统一到 0.43.0：组件包、manifest、文档站、演示页页脚和组件索引计数一起更新。

## 0.42.0（2026-10-29）

- 新增索引列表令牌 `--vx-index-header-sm/md/lg`（28 / 32 / 36）、`--vx-index-avatar-sm/md/lg`（32 / 40 / 48）、`--vx-index-key-sm/md/lg`（16 / 18 / 20）、`--vx-index-bar-sm/md/lg`（28 / 32 / 36）和 `--vx-index-indicator-sm/md/lg`（56 / 64 / 72），亮色、暗色各一份。
- 索引条字母槽高等于字母圆直径；条宽只放宽触摸区，不改变字母圆。指示器字号 24 / 28 / 32 和行、标题字号在组件里按档位写死，不新增令牌。
- DESIGN.md 补充索引列表的配色、排版、尺寸、层级、动效、组件和 Do / Don't 规则。
- 免费组件没有改动；`vx-index-list` 在 `vaporix-ui-pro` 1.5.0，使用本版新增的令牌，升级时两个模块一起换。
- 版本号统一到 0.42.0：组件包、manifest、文档站、演示页页脚和组件索引计数一起更新。

## 0.41.0（2026-10-29）

- 新增开关令牌 `--vx-switch-width-sm/md/lg`（36 / 44 / 52）、`--vx-switch-height-sm/md/lg`（20 / 24 / 28）、`--vx-switch-thumb-sm/md/lg`（16 / 20 / 24）和 `--vx-switch-spinner-sm/md/lg`（8 / 10 / 12），亮色、暗色各一份；滑块位移 = 轨道宽 - 滑块 - 4，不另开令牌。
- 新增 `--vx-switch-inset`（2px），滑块四周统一留白；这组尺寸不并入控件、图标和单选三档。
- DESIGN.md 补充开关的配色、排版、尺寸、形状、层级、动效、组件和 Do / Don't 规则；滑块位移和加载圈描边宽度在组件里按档位写死，不新增令牌。
- 免费组件没有改动；`vx-switch` 在 `vaporix-ui-pro` 1.4.0，使用本版新增的令牌，升级时两个模块一起换。
- 版本号统一到 0.41.0：组件包、manifest、文档站、演示页页脚和组件索引计数一起更新。

## 0.40.0（2026-10-29）

- 新增复选框令牌 `--vx-checkbox-size-sm/md/lg`（14 / 16 / 18）和 `--vx-checkbox-radius-sm/md/lg`（4 / 5 / 6），亮色、暗色各一份；方框不并入图标、徽章和单选三档，圆角按档位递进。单选 `--vx-radio-size-*` 从 18 / 22 / 26 收到同一档，标记比文案大 1–2px。
- DESIGN.md 补充复选框的配色、排版、尺寸、圆角、按下态、组件和 Do / Don't 规则；对号和横线的宽高在组件里按档位写死，不新增令牌。
- 免费组件没有改动；`vx-checkbox` / `vx-checkbox-group` 在 `vaporix-ui-pro` 1.3.0，使用本版新增的令牌，升级时两个模块一起换。
- 版本号统一到 0.40.0：组件包、manifest、文档站、演示页页脚和组件索引计数一起更新。

## 0.39.0（2026-10-29）

- 新增单选令牌 `--vx-radio-size-sm/md/lg`（18 / 22 / 26），亮色、暗色各一份；圆圈不并入图标、徽章和星形三档。
- DESIGN.md 补充单选的配色、排版、尺寸、形状、按下态、组件和 Do / Don't 规则；对号宽度和横排 / 列表行高在组件里按档位写死，不新增令牌。
- 免费组件没有改动；`vx-radio` / `vx-radio-group` 在 `vaporix-ui-pro` 1.2.0，使用本版新增的令牌，升级时两个模块一起换。
- 版本号统一到 0.39.0：组件包、manifest、文档站、演示页页脚和组件索引计数一起更新。

## 0.38.0（2026-10-28）

- 新增加载动画令牌 `--vx-loader-size-sm/md/lg`（20 / 28 / 40）和 `--vx-loader-dot-sm/md/lg`（6 / 8 / 10），亮色、暗色各一份；动画画布不并入图标和控件高度。
- 新增 `--vx-loader-panel-min` / `--vx-loader-panel-max`（120 / 240）和 `--vx-loader-panel` / `--vx-loader-fg` / `--vx-loader-muted` / `--vx-loader-track`，亮色、暗色同值：深色面板固定白字，不跟主题反色。
- 新增 `--vx-loader-duration-bar` / `--vx-loader-duration-dot` / `--vx-loader-duration-wave` / `--vx-loader-duration-wave-alt`（900ms / 960ms / 2800ms / 3200ms），亮色、暗色同值。
- DESIGN.md 补充 `vx-loader` 的颜色、排版、尺寸、圆角、层级、动效、组件和 Do / Don't 规则。
- 免费组件没有改动；`vx-loader` 在 `vaporix-ui-pro` 1.1.0，使用本版新增的令牌，升级时两个模块一起换。
- 版本号统一到 0.38.0：组件包、manifest、文档站、演示页页脚和组件索引计数一起更新。

## 0.37.1（2026-10-28）

- 新增图片预览令牌 `--vx-gallery-bar` / `--vx-gallery-control` / `--vx-gallery-foot`，亮色、暗色各一份；顶部工具行 44、关闭和删除热区 44、底部工具行 60，不并入控件三档。
- 新增 `--vx-color-viewer-bg` / `--vx-color-viewer-fg` / `--vx-color-viewer-muted` / `--vx-color-viewer-line` / `--vx-color-viewer-control` / `--vx-color-viewer-danger`，亮色、暗色同值：预览层固定黑底白字，不跟主题反色。
- DESIGN.md 补充图片预览的颜色、排版、尺寸、形状、层级、动效、组件和 Do / Don't 规则；浮层层级增加图片预览 105，高于消息提示 100，低于弹框 110、加载浮层 150 和轻提示 200。
- 免费组件没有改动；`vx-gallery` 在 `vaporix-ui-pro` 1.0.0，使用本版新增的令牌，升级时两个模块一起换。
- 版本号统一到 0.37.1：组件包、manifest、文档站、演示页页脚和组件索引计数一起更新。

## 0.37.0（2026-10-28）

- 新增 vx-progress 进度条：`percent` 传 0–100，负数和 0 按未开始，超过 100 按完成，非数字按 0；组件不维护内部状态，也没有 `v-model`。
- 一行三段：可选 `label`、轨道、可选数值。`showText` 显示默认百分比，`text` 覆盖默认文案；默认百分比最多保留一位小数，`60` 显示 `60%`，`94.5` 显示 `94.5%`。
- 新增 `type` 六种语义色，只改填充；`warning` 用 `warning-pressed`，`default` 用正文色。标签保持次要色，数值保持正文色，状态不能只靠填充色表达。
- 新增 `size` 三档：轨道 4 / 6 / 8（`--vx-progress-height-*`），标签和数值 13 / 15 / 17（20 / 22 / 24），间距 8 / 12 / 16。新增 `height` 自定义轨道高度，必须带单位，只改轨道，文字仍按 `size`。
- 新增 `shape` 三档：`square` 平角（默认）、`rounded` 小圆角 6、`pill` 胶囊。圆角同时作用于轨道和填充，轨道用 `overflow: hidden` 裁切；细轨道上 `rounded` 和 `pill` 看起来接近。
- 新增 `bgColor` / `trackColor` / `color`，分别只改填充、轨道和数值，都是字面值，不跟随主题；跟主题时传 `var(--vx-color-*)`。`bgColor` 可以接渐变，但只用于品牌强调，一屏最多一处。
- 填充用 `width` 过渡，默认 220ms（`--vx-duration-normal`），`duration=0` 直接落位；不用 `transform`，渐变和两端圆角才会跟着可见宽度走。首次渲染不播放入场动画。
- 新增 `end` 事件：在 percent 变化后的过渡计时结束时抛最终值，连续改值只按最后一次，卸载不补抛；不依赖 `transitionend`，App 和小程序行为一致。
- 新增令牌 `--vx-progress-height-sm/md/lg` 和 `--vx-progress-value-min-sm/md/lg`（40 / 44 / 52），亮色、暗色各一份；一位小数在 md / lg 上比 40 宽，按档位分开，多行百分比才右对齐。
- DESIGN.md 补充进度条的颜色、排版、尺寸、形状、层级、动效、组件和 Do / Don't 规则；readme 新增 API、用法和 ThorUI `tui-progress` 迁移说明。
- 演示页新增进度条实验室，含基础、标签与数值、类型、形状、尺寸、自定义颜色、动画与事件、组合八组示例；组件目录、路由和前后翻页一起接入。
- 文档站新增进度条页，中英文含基础、类型、形状、尺寸、自定义颜色、动画、组合、设计规范、可访问性和 API；示意卡片、预览页和真实组件接入。
- 从 ThorUI `tui-progress` 迁移：`showInfo` → `showText`，`activeColor` → `bgColor`，`backgroundColor` → `trackColor`，`width` → `size` / `height`，`radius` → `shape`；`duration` 从「每 1% 毫秒」改为「整段毫秒」，`activeend` → `end`。`percentWidth` 由 `--vx-progress-value-min-*` 接管，`size` / `color` 保留但分别改为文字档位和数值颜色。
- 版本号统一到 0.37.0：组件包、manifest、文档站、演示页页脚和组件索引计数一起更新。
- `vx-wing-blank` 纵向 `flex-shrink` 归零，放进纵向 flex 时内容不被压扁；没有默认插槽时不留节点。左右留白演示的通栏去掉 `width: 100%`，负外边距才能左右同时贴边。

## 0.36.0（2026-10-28）

- 新增 vx-white-space 上下留白：只占纵向高度，不放内容、不接点击、不画外框；`size` 三档直接取间距令牌 8 / 12 / 16，`height` 传带单位的值时盖过档位。
- 新增 `height` 自定义值：接受 px、rpx、百分比和 `var()`；单位缺失时声明失效，回落到 `size` 档位。固定间距用 px，只有确实随屏宽变化时才用 rpx。
- 新增 `bgColor` 色带：默认透明，字面值不跟随主题；跟主题时传 `var(--vx-color-*)`。它不表达状态，不代替分割线、骨架屏和可点击区域。
- 新增 vx-wing-blank 左右留白：给默认插槽加左右内边距，宽度跟随父级、高度由内容撑开；`size` 同样取 8 / 12 / 16，`gap` 传带单位的值时盖过档位。
- `vx-wing-blank` 默认透明、无描边、无圆角、无外部间距；底色、圆角和描边交给外层容器或 `vx-card`。`gap` 是左右内边距，不是子项间距；百分比按父级宽度算。
- 两个组件都不承载点击、状态和动效；按钮、列表行和链接由插槽内容或外层容器提供。页面左右边距只留一次，通栏区块用 `vx-wing-blank` 把内容拉回页面边距。
- 与 ThorUI 的差异：`size` 的 `small` / `default` / `large` 换成 `sm` / `md` / `lg`；`height` / `gap` 必须带单位（`64` 写成 `64rpx`）；`tui-white-space` 的 `background` 换成 `bgColor`，默认插槽和 `click` 不再提供；`tui-wing-blank` 的 `background` / `radius` / `marginTop` / `marginBottom` / `click` 分别交给外层容器、`vx-white-space`、页面布局和插槽内容。
- DESIGN.md 补充两个组件的间距映射、单位规则、色带约束、页面边距、无点击和可访问性规则；readme 新增 API、用法和 ThorUI 迁移说明。
- 演示页新增上下留白和左右留白实验室：上下留白六组、左右留白五组，含基础、三档尺寸、自定义值、背景、页面节奏或页面边距、组合；组件目录、路由和前后翻页一起接入。
- 文档站新增上下留白与左右留白页，中英文逐节对应，含基础、尺寸、自定义值、页面节奏 / 页面边距、组合、设计规范、可访问性和 API；示意卡片、预览页和真实组件接入。

## 0.35.0（2026-10-27）

- 新增 vx-qrcode 二维码：`text` 按 UTF-8 字节编码，自动选版本 1–40 和最优掩码；只做字节模式，一个汉字 3 字节、一个 emoji 4 字节，40 版上限 L 2953 / M 2331 / Q 1663 / H 1273 字节。
- 模块用 `view` 绘制，同一行的连续深色模块合成一条，上下同宽的再叠成一块，不依赖 canvas：App 上不新增原生层，Web、小程序和各类卡片、滚动区里的层级一致。普通验证码大约 80–300 条 `view`。
- 新增 `size` 三档 120 / 160 / 200（`--vx-qrcode-size-*`），新增 `width` 自定义边长，只认 px；模块边长向下取整到整数像素，多出来的收进空白边距，相邻行之间不透缝。
- 新增 `level` 四档 `L | M | Q | H`，默认 M；`margin` 空白边距按模块数算，默认 2，收敛到 0–8，印刷场景传 4 和标准一致。
- 新增 `color` / `bgColor`，默认 `#1a1d26` / `#ffffff`，都是字面值、不跟随亮色 / 暗色主题：二维码必须深码浅底，反色后很多扫码器认不出来。
- 新增 `logo` / `logoSize`：中心图标占内容宽度默认 0.22，收敛到 0.12–0.3，四周用 `--vx-qrcode-logo-pad` 挖空，垫色取 `bgColor`；带图标时建议 `level="H"`。图标加载失败时隐藏整层，方阵保持完整。
- 新增 `emptyText` / `errorText`：内容为空显示空状态，超出 40 版容量显示错误提示，两种情况都不渲染空白方阵，也不抛事件。
- 新增 `libs/qrcode.ts`：GF(256) 计算纠错码字、标准分块和交错、BCH 格式 / 版本信息、八种掩码按四条罚分规则选优；三档边长常量 `VX_QRCODE_SIZE` 和 `variables.css` 的 `--vx-qrcode-size-*` 手工对齐。
- 新增令牌 `--vx-qrcode-size-sm/md/lg`、`--vx-qrcode-logo-pad` 和 `--vx-qrcode-dark/light`，亮色、暗色各一份；深码浅底两枚颜色亮暗同值，不跟主题反色。
- DESIGN.md 补充二维码的渲染方式、尺寸、颜色、空白边距、中心图标、容量、主题和可访问性规则；readme 新增 API、用法和 ThorUI `tui-qrcode` 迁移说明。
- 演示页新增二维码实验室，含基础、尺寸、纠错级别、自定义颜色、中心图标、内容与边界、优惠券组合七组示例；组件目录、路由和前后翻页一起接入。
- 文档站新增二维码页，中英文含基础、尺寸、纠错级别、自定义颜色、中心图标、内容与边界、组合、设计规范、可访问性和 API；示意卡片、预览页和真实组件接入。
- 编码器用 jsQR 对 102 组内容（ASCII、中文、emoji、随机长串）做解码回读，版本选择和 qrcode-generator 对照一致；40 版容量边界逐级校验。

## 0.34.0（2026-10-27）

- 新增 vx-bubble-popup 气泡弹框：默认插槽是触发区，`items` 是菜单，`content` 是单段文案，`extra` 放自定义面板；`show` 支持 `v-model:show`，`ref` 上暴露 `open()` / `close()` / `toggle()` / `refresh()`。
- 打开时用 `createSelectorQuery` 量触发区和面板，按 `placement`（top / bottom / left / right）、`align`（start / center / end）和 `offset` 算落点；气泡用 `position: fixed` 挂到页面层，卡片和 `scroll-view` 的 `overflow: hidden` 不会裁掉它。
- 一侧放不下、对面放得下时自动翻到对面；两侧都放不下时夹在屏幕内，离边 8；箭头跟着触发区中心走，面板被挤到屏幕边时在气泡范围内收口。
- 新增 `variant` 的 `surface` / `solid`：`surface` 用 `surface` 底、1px `border` 描边、`md` 圆角和 `--vx-shadow-md`，尾巴用旋转方块加 1px 描边；`solid` 用语义实心底配 `on-*`，不加描边，inline 聊天气泡去阴影。
- 新增 `items` 菜单：`text` / `value` / `icon` / `type` / `disabled` / `selected`。菜单项 44 高、左右内边距 12，图标 18、文案 15 / 22 / 500、右侧短值 13 / 20 次要色、勾 14；面板四周留 4；`divider` 画 1px 分割线。
- 新增 `selected` 和 `disabled`：选中显示勾和主色，禁用不响应点击；`closeOnSelect=false` 时保持打开，选中值由业务在 `select` 里维护。
- 新增 `mask` / `maskColor` / `outsideClosable` 和 `close` 事件：默认只有透明点击层，点外部收起并抛 `close`；页面滚动、Web 上的 Esc 也收起并抛 `close`；`close()` 只收起，不抛事件。
- 新增 `inline` 行内聊天气泡：不渲染触发区，默认插槽或 `content` 是内容，`prefix` / `suffix` 放头像，`align` 把整行推到左、中、右，`placement` 决定箭头贴哪条边；inline 不响应 `show` 和方法，要隐藏整条用 `v-if`。
- 新增 `width` / `maxWidth` / `arrow` / `arrowOffset` / `zIndex`；尾巴高 7、底边 14、旋转方块 9.9、离触发区默认 8、离屏幕至少 8；`surface` 面板在尾巴底部补 13×1 同色接缝（左右各压 0.5px），面板描边不会从尾巴底下横穿出来；层级默认 90，和操作菜单、抽屉同档。
- 新增令牌 `--vx-bubble-arrow` / `--vx-bubble-arrow-base` / `--vx-bubble-arrow-seam` / `--vx-bubble-arrow-tip` / `--vx-bubble-arrow-out` / `--vx-bubble-min-width` / `--vx-bubble-max-width` / `--vx-bubble-chat-max-width`，亮色、暗色各一份。App 没有 calc，正负值和尺寸各用一个令牌，改一处要一起改。
- 面板打开时先量尺寸再显示，第一帧不会落在左上角；Web 上量完位置后淡入、面板从 0.96 放大到 1，5.26 的 App 直接出现，关闭即移除。异步内容落定后调 `refresh()` 重测。
- DESIGN.md 补充气泡弹框的尺寸、颜色、层级、圆角、箭头、动效、fixed 坐标和可访问性规则；readme 新增 API、用法和 ThorUI `tui-bubble-popup` 迁移说明。
- 演示页新增气泡弹框实验室，含右上角菜单、上方弹出、类型与图标、选中与禁用、遮罩、聊天气泡、气泡颜色、自定义内容、方向与对齐、方法和组合十一组示例；组件目录、路由和前后翻页一起接入。
- 文档站新增气泡弹框页，中英文含基础、上方弹出、类型与图标、选中与禁用、遮罩与关闭、聊天气泡、气泡颜色、自定义内容、方向与对齐、方法、组合、设计规范、可访问性和 API；示意卡片、预览页和真实组件接入，文档站补一份只给预览用的 `uni.createSelectorQuery` shim。
- 打磨 vx-notice-bar 和 vx-rolling-news：单行省略改为定宽截断；滚动轨道、轮播层和点击热区改用行高或内容区令牌，不用百分比高度。可点时点击停在组件上，两侧插槽不冒泡。新增 `--vx-rolling-news-inner-*`（30 / 38 / 46），滚动消息默认间隔收进 `VX_ROLLING_NEWS_INTERVAL`。

## 0.33.0（2026-10-27）

- 新增 vx-notice-bar 通告栏：`text` 显示一条公告，单行默认省略；`wrap` 打开后自然换行，高度由内容撑开。`scrollable` 在文字超出视口时横向匀速滚动，文字放得下就停在原位。多条消息轮播仍用 `vx-rolling-news`，两者不混用。
- 新增 `type` 六种语义色，默认 `warning`；`variant` 三档 `soft | solid | plain`：`soft` 用 `*-soft` 浅底，`solid` 用实心底配 `on-*`，`plain` 透明且不收左右内边距。默认 `warning` 是琥珀浅底配 `warning-ink`，普通公告换 `info`，中性说明换 `default`。
- 新增 `shape` 三档 `rounded | pill | square`，默认 `square` 通栏；新增 `size` 三档：高度 32 / 40 / 48（`--vx-notice-bar-height-*`），文案 13 / 15 / 17，图标 14 / 18 / 22，左右内边距 12 / 16。关闭热区宽度等于行高。
- 新增 `icon` / `iconColor` / `bgColor` / `color`：图标和关闭叉默认跟随文案前景，`iconColor` 只改图标；自定义颜色是字面值，跟主题时传 `var(--vx-color-*)`，对比度由业务保证。
- 新增 `wrap` 和 `scrollable`：`scrollable` 优先于 `wrap`，滚动固定单行；滚动只读 `text`，默认插槽内容保持静态。`speed` 默认 100 px/s，0 和负数回到 100，其余收在 20–600；`activeMode` 的 `backwards` 从右侧入场，`forwards` 只让第一轮跳过入场、从左侧起点开始。
- 滚动用 `transition` 的 `transform` 匀速位移，时长按文字宽度、视口宽度和速度计算，5.26 的 App 端不依赖关键帧。文字宽度用 `createSelectorQuery` 测量，失败重试三次后按静态展示；视口宽度变化、字体异步落定后调 `refresh()` 重测。改文案、尺寸、图标或关闭叉会从第一轮重来。
- 新增 `closable`、`v-model:show` 和 `close` 事件；组件关闭时只收起并抛 `close`，父级改回 `show` 不回抛。新增 `open()` / `close()` / `refresh()` 方法。
- 新增 `prefix` / `suffix` 插槽：`prefix` 替换内置图标，`suffix` 排在关闭前；两者都是独立目标，点它们不触发整条 `click`。`clickable` 默认打开，`clickable=false` 时按下不变淡，点击继续落到外层卡片或列表行。
- 新增令牌 `--vx-notice-bar-height-sm/md/lg`，亮色、暗色各一份；新增 `libs/motion.ts` 的 `VX_NOTICE_BAR_SPEED` / `VX_NOTICE_BAR_SPEED_MIN` / `VX_NOTICE_BAR_SPEED_MAX` / `VX_NOTICE_BAR_SETTLE` / `VX_NOTICE_BAR_MEASURE_DELAY`。
- DESIGN.md 补充通告栏的语义色、尺寸、换行、滚动、速度、起点、关闭、插槽、动效和可访问性规则；readme 新增 API、用法和 ThorUI `tui-notice-bar` 迁移说明。
- 演示页新增通告栏实验室，含基础、多行、类型、视觉变体、尺寸、自定义颜色、滚动、速度与起点、关闭、图标与插槽、组合十一组示例；组件目录、路由和前后翻页一起接入。
- 文档站新增通告栏页，中英文含基础、多行、类型、视觉变体、尺寸、自定义颜色、滚动、速度与起点、关闭、图标与插槽、组合、设计规范、可访问性和 API；示意卡片、滚动预览、预览页和真实组件接入。

## 0.32.0（2026-10-27）

- 新增 vx-rolling-news 滚动消息：`items` 按顺序轮播新闻、热词和通告，一条一条走；点击整条抛 `click(index, item)`，不做详情、路由和请求。空数组不渲染，只有一条时不轮播，也不铺第二层。
- 两层叠放换条：当前条滑出、下一条滑入，落位后两层在视口外对调，走到头从第一条接着走，不往回滚。两层都用 `transform` 百分比位移，不测量高度和宽度；过渡 220ms，和 `--vx-duration-normal` 对齐，5.26 的 App 端没有关键帧也能用。
- 新增 `direction` 的 `vertical` / `horizontal`；换方向从第一条重来，不会停在半格上。新增 `interval`（两次切换的间隔，默认 3000ms）和 `autoplay`（关掉后停在第一条）。按下整条时暂停，松手后重新计时；Web 上的鼠标点按不影响节奏。
- 新增 `variant` 三档 `card | soft | plain`：`card` 用 `surface` 底加 1px 描边，`soft` 用 `default-soft` 浅底，`plain` 透明且不收左右内边距。新增 `shape` 三档 `rounded | pill | square`，三档都保留 1px 透明描边，换外观时内容不上下跳。
- 新增 `size` 三档：行高 32 / 40 / 48，文案 13 / 15 / 17，图标 14 / 18 / 22，左右内边距 12 / 16；字号直接取正文档位，不借 `--vx-font-control-*`。
- 新增 `icon` / `iconColor` / `arrow` / `bgColor` / `color`：图标默认取 `primary` 作唯一强调色，`iconColor` 只改这一处；扩展图标要先引入 `icons-extend.css`。自定义颜色都是字面值，跟主题时传 `var(--vx-color-*)`。
- 新增 `prefix` / `suffix` 插槽：`prefix` 替换内置图标，`suffix` 替换箭头，两者都是独立目标，点它们不触发整条 `click`。`clickable=false` 时既不按下变淡，也不铺点击热区，点击继续落到外层卡片或列表行。
- 新增令牌 `--vx-rolling-news-height-sm/md/lg`，亮色、暗色各一份；新增 `libs/motion.ts` 的 `VX_ROLLING_NEWS_DURATION` / `VX_ROLLING_NEWS_SETTLE`，和 `--vx-duration-normal` 手工对齐。
- DESIGN.md 补充滚动消息的行高、字号、方向、外观、形状、图标、插槽、间隔、动效、层级和可访问性规则；readme 新增 API、用法和 ThorUI `tui-roll-news` 迁移说明。
- 演示页新增滚动消息实验室，含基础、方向、外观、尺寸、图标与插槽、间隔与暂停、消息数据和组合八组示例；组件目录、路由和前后翻页一起接入。
- 文档站新增滚动消息页，中英文含基础、轮播方向、视觉变体、形状、尺寸、图标、插槽、间隔与暂停、组合、设计规范、可访问性和 API；示意卡片、预览页和真实组件接入。

## 0.31.0（2026-10-27）

- 新增 vx-section 区块标题栏：一个区块的标题层，承载标题、说明、竖线、分割线和右侧短操作。组件不包内容，内容紧跟其后，入口和间距由页面组合。
- 新增 `size` 三档 `sm | md | lg`：标题 15 / 17 / 20，行高 22 / 24 / 28，字重 600；说明 `sm` / `md` 用 13 / 20，`lg` 用 15 / 22；`md` 是默认档。
- 新增 `variant` 的 `plain` / `soft`：`plain` 透明底、上下各留 4；`soft` 用 `default-soft` 浅底、`md` 圆角，内边距 8 / 12、12 / 16、16 / 24（上下 / 左右）。同一层级只用一种。
- 新增 `marker` 竖线：3px 宽，高 14 / 16 / 20，固定胶囊圆头，和标题首行居中；`markerColor` 只改竖线。竖线只作区块标记，不表达状态。
- 新增 `divider` 和 `dividerColor`：在标题内容下方 8 / 8 / 12 处画一条 1px 线，默认 `border`；分割线不替代区块之间的 24 留白。
- 新增 `clickable` + `click`：整条按下用 `--vx-opacity-pressed`，高度下限 44，单行标题也有完整热区；点击停在标题栏上，`extra` 是独立目标，不冒泡到整条。静态标题栏不拦点击，点击继续落到外层卡片或列表行。
- 新增 `prefix` / `extra` / `suffix` 插槽和默认插槽：`prefix` 放标题左侧图标、编号或品牌标记，`extra` 放「查看全部」这类短操作，`suffix` 替换说明，默认插槽替换标题；插槽内容自己带字号和颜色。
- 新增 `titleColor` / `descriptionColor` / `markerColor` / `dividerColor`：分别只覆盖标题、说明、竖线和分割线，字面值不跟随主题；要跟主题就传 `var(--vx-color-*)`。
- 新增令牌 `--vx-section-font-*` / `--vx-section-line-*` / `--vx-section-marker-*`，亮色、暗色各一份；竖线宽 3px，高度 14 / 16 / 20。新增 `--vx-section-soft-desc`：`soft` 浅底上的说明亮色用正文色、暗色用次要灰，避免 #6b7280 落在 `default-soft` 上只有 4.2:1；`plain` 说明仍用次要灰。
- DESIGN.md 补充标题栏的字号、竖线、分割线、浅底、圆角、按下态、层级和可访问性规则；readme 新增 API、用法和 ThorUI `tui-section` 迁移说明。
- 演示页新增标题栏实验室，含基础、竖线、视觉变体、尺寸、插槽、分割线、可点击和组合八组示例；组件目录、路由和前后翻页一起接入。
- 文档站新增标题栏页，中英文含基础、竖线、视觉变体、尺寸、插槽、分割线、可点击、组合、设计规范、可访问性和 API；示意卡片、预览页和真实组件接入。

## 0.30.0（2026-10-26）

- 新增 vx-picker 联动选择：底部弹层里的多列滚轮，`options` 用 `text` / `value` / `children` / `disabled` 的树形节点表达层级，列数由当前路径的 `children` 深度决定，不写死级数。分支提前结束时少一列，不补空列。
- `v-model` 是每一级已确定的值数组，打开时按 value 逐级定位；`value` 省略的节点按 `text` 匹配和回传，ThorUI 的文本数组可以直接继续用。滚动只改草稿，点确定才写回并抛 `confirm`；取消、可关闭的遮罩和 `close()` 都不动已提交的值。
- `confirm` / `change` 回传 `VxPickerResult`：`values` / `texts` / `indices` 逐级对应，`text` 按 `separator`（默认 `' / '`）拼好。新增 `vxPickerText(options, values, separator)`，业务在触发入口上显示完整路径时不用自己再遍历树。
- 新增 `change` 语义：只在滚动停下、整条路径可选且真的变化时抛一次；停在不可选项上的草稿不抛，`options` 异步补下一级时按当前路径重新对齐，必要时补抛一次。
- 新增 `disabled` 节点：不可选项仍留在滚轮里转灰，停上去时头部换成 `invalidText`（默认「该选项不可选」）、确定置灰，取消和遮罩仍可退出；整列不可选同样处理。初始值落在不可选项上时，打开前挪到最近的可选项。
- 新增空数据状态：`options` 为空时用和滚轮等高的 `emptyText` 占位，面板高度不跳，确定置灰；异步先打开、后补 `options` 也能长出下一列。
- 新增 `title` / `cancelText` / `confirmText` / `separator` / `emptyText` / `invalidText` / `maskClosable` / `maskColor` / `zIndex`；头部高 52，滚轮 220、每行 44，面板最大宽度 480，层级默认 90，和操作菜单、日期时间选择器同档。
- 滚轮行文字 15 / 22：未选中 `text-secondary` 400，选中 `text` 600，不可选 `disabled-text`；四列起收一档到 13 / 20。列按当前路径等分，长地名在自己的列里单行省略；不画列分隔线和渐变蒙层。
- 行 key 用「深度 + 行版本号 + 行号」，换上级分支时只递增下级版本号；列数变化时重挂 `picker-view`。原生列会真正换掉内容，滚动不会停在旧行，也不会因为无关列重建而跳动。
- 指示器行高只写在 `indicator-style` 里，和 `VX_PICKER_ROW` 对齐。App 读不到这里的 CSS 变量，细线改挂 `indicator-class`，用 `--vx-color-border`；App 仍用原生指示器自己的线。
- 滚轮选中态直接返回整段 class，不再逐行拼接；叶子滚动留着原来的行对象，不重建没换内容的列。树不进响应式，关着的实例不预先复制；同一拍打开只规整一次，深度和节点同一次遍历。
- 新增 `libs/picker.ts`：规整树、最大层级、第一项 / 最近可选项、按值定位、按路径取列、可提交判断、结果拼装和值数组比较。行高同时写在 `VX_PICKER_ROW` 里，和 `--vx-picker-row` 保持一致。
- 新增令牌 `--vx-picker-row` 44px、`--vx-picker-wheel` 220px、`--vx-picker-max-width` 480px，亮色、暗色各一份；`picker-view` 的原生白色渐变用 `mask-class` 换成透明。
- DESIGN.md 补充联动选择的层级、默认值、禁用选项、空状态、结果、分隔符、尺寸、字号、层级、动效和可访问性规则；readme 新增 API、用法和 ThorUI `tui-picker` 迁移说明。
- 演示页新增联动选择实验室，含三级联动、数据层级、默认值、禁用选项、禁用状态、空数据、标题与遮罩、方法与事件、分隔符与结果、表单组合十组示例；组件目录、路由和前后翻页一起接入。
- 文档站新增联动选择页，中英文含基础、数据层级、默认值与结果、禁用选项、空数据、标题与遮罩、方法、组合、设计规范、可访问性和 API；示意卡片、预览页和地区示例数据接入真实组件。

## 0.29.0（2026-10-26）

- 新增 vx-image-group 图片组合：用 `items` 按顺序排缩略图，每项只有 `src` 和可选的 `id`；空数组不渲染。方框三档 40 / 64 / 88，固定正方形，不跟父级宽度缩放。
- 新增 `shape` 三档 `rounded` / `circle` / `square`：`sm` 用 `sm` 圆角，`md` / `lg` 用 `md` 圆角；`circle` 用于头像，`square` 用于连续图块。新增 `mode` 的 `aspectFill` / `aspectFit` / `scaleToFill`，默认裁剪填满。
- 新增 `direction` 的 `row` / `column` 和 `offset`（px）：负值重叠、正值留缝、0 贴边，行内只加后侧外边距，纵向只加上方外边距。`wrap` 在 row 下多行，横向和纵向留缝都取 `offset`；负值按 0 处理，column 忽略 `wrap`。
- 新增 `ring` / `ringColor`：每张图加 2px 方框内描边，用 `surface` 把重叠的相邻图分开，`ringColor` 是字面值；圆环不改变方框边长。
- 图片加载失败或 `src` 为空时换成 `default-soft` 底色加 `image` 占位图标，并抛 `error(index, item)`；换地址重新加载成功会撤掉占位，同一个地址失败只抛一次。`clickable` 默认打开，点击抛 `click(index, item)` 并停在单张图上。
- 新增令牌 `--vx-image-group-size-sm/md/lg` 40 / 64 / 88，亮色、暗色各一份；圆环复用 `--vx-border-width-strong`，按下复用 `--vx-opacity-pressed`。
- DESIGN.md 补充图片组合的形状、尺寸、偏移、多行、纵向、圆环、占位、点击和可访问性规则；readme 新增 API、用法和 ThorUI `tui-image-group` 迁移说明。
- 演示页新增图片组合实验室，含基础、形状、尺寸、偏移、多行、纵向、圆环与填充、组合八组示例；组件目录、路由和翻页一起接入。
- 文档站新增图片组合页，中英文含基础、形状、尺寸、偏移、多行、纵向、圆环、填充方式、组合、设计规范、可访问性和 API；预览层和示意卡片接入真实组件。
- 演示工程改为三 tab 示例：组件目录、JS 接口、我的。原 234 组示例拆到 30 个组件演示页，`pages/index/index.uvue` 只保留目录；公共演示样式提到全局，主题状态、原生导航栏、窗口底色和原生 tabBar 一起同步，tabBar 提供亮 / 暗两套图标。
- 新增 JS 接口目录和详情页，覆盖 `libs/theme.ts`、图标表、日期时间、日历、农历以及动效 / 手势常量，附可运行示例。
- 清理 App 端编译警告：去掉 `vx-no-data` 的 `aria-hidden`、`@font-face` 不支持的 `font-weight` / `font-style` / `font-display`；`vx-steps` 的 `cursor` 和 `vx-countdown` / `vx-toast` 的百分比 `max-width` 改为仅 Web 生效；`vx-navigation-bar` 的状态栏高度类型收口。剩余 `animation-*` / `@keyframes` 提示是 HBuilderX 5.26 的 App 关键帧限制，升级到 5.31+ 后消失。
- 打磨 vx-swipe-action：点按和纵向滚动不再改写展开距离，长列表只收起已经展开的行。横向接管后拦住这一笔外层滚动；没有 actions 也没有 extra 时不露出空白。`v-model:open` 写成 true 和 `open()` 一样会收起其他行。保护层接住同一套手势，避免拖动中途插入后跟手中断。

## 0.28.0（2026-10-26）

- 新增 vx-navigation-bar 自定义导航栏：标题居中、内置返回、左右插槽和第二行 `extra`；页面用 `navigationStyle: custom`，组件挂在页面根节点。
- 固定模式默认打开，并在文档流里补一个等高占位，页面不需要自己算高度；头图场景关掉 `placeholder`，内容从屏幕顶部开始，导航栏压在头图上。
- 新增 `statusBar`（默认打开，按 `--uni-safe-area-inset-top` 为状态栏留白）和左右安全区；非沉浸式或嵌在原生导航下面时关掉。
- 新增 `transparent`、`bgColor`（颜色或渐变）和 `color`；背景单独一层，渐显只改背景，标题、图标和插槽始终不透明。
- 新增 `fade` + `scrollTop` + `scrollRatio` + `maxOpacity`：背景透明度从 0 增到上限，`change` 回传 0–1，业务据此切换标题颜色。
- 新增 `divider` / `dividerColor` / `shadow`：分割线和阴影只在背景透明度到 0.85 以上时出现，`shadow` 用 `--vx-shadow-md` 并代替分割线。
- 新增 `back` / `prefix` / `suffix` / `extra` / 默认插槽：`prefix` 替换返回区，默认插槽替换标题，`extra` 在标题行下再排一行搜索或筛选；内置返回只抛 `back`，不做路由。
- 新增 `ready`（首次测量完成，回传宽度、高度、状态栏高度、透明度和窗口尺寸）和 `refresh()`（`extra` 异步变高后重新占位）。
- 新增令牌 `--vx-navigation-bar-height` 44px，亮色、暗色各一份；内置返回和右侧动作按 44 行高排，返回热区由组件补足，层级默认 20，高于吸顶条、低于消息提示。
- 小程序自动让出右上角胶囊；`suffix` 可用宽度会变窄，更多动作放 `extra`。
- DESIGN.md 补充导航栏的尺寸、状态栏、透明与渐变、滚动渐显、分割线与阴影、固定占位、层级和可访问性规则；readme 新增 API、用法和 ThorUI `tui-navigation-bar` 迁移说明。
- 演示页新增导航栏实验室，含基础、状态栏、透明与渐变、滚动渐显、阴影、插槽与搜索、商品页组合、固定与事件八组示例。
- 文档站新增导航栏页，中英文含基础、状态栏、透明与背景、滚动渐显、阴影、插槽、组合、设计规范、可访问性和 API；预览层接入近似场景，可滚动看渐显。

## 0.27.0（2026-10-26）

- 新增 vx-swipe-action 滑动菜单：列表行向左滑，右侧露出 1–3 条动作；内容由默认插槽决定，`actions` 为空时改用 `extra` 插槽。`ref` 上暴露 `open()` / `close()` / `toggle()`，`open` 支持 `v-model:open`。
- 新增 `name`：这一行的业务标识，原样带回 `select(index, item, name)` 和 `change(open, name)`；列表里不用再按下标猜行。
- 拖动跟手、松手过渡：向左滑过动作总宽的一半，或 24px / 250ms 内的快速轻扫展开；向右滑回或不到一半收起。拖动期间不挂 CSS 过渡，松手用 `--vx-duration-normal`。
- 菜单固定在右侧、压在内容下面，内容单独平移。uni-app x Web 给每个 view 默认加了 `overflow: hidden`，菜单不能放进被平移的内容容器，否则展开时会被裁掉、动作也点不到。
- 默认只展开一行：展开另一行时上一行自动收起并抛 `change(false, name)`。`multiple=true` 允许多行同时展开；不再提供 ThorUI 的全屏透明遮罩，点页面其他位置不会误收起。
- 展开后内容上盖一层透明保护层，点内容只收起，不触发下层行的 `click`；滑动结束补 300ms 点击保护，Web 的后续 click 不会走进详情。
- 新增 `swipeable`（`false` 只停手势，`v-model:open` 和 `open()` 仍可用）、`closeOnSelect`（`false` 时点动作只抛 `select`，菜单保持展开）、`extraWidth`（`extra` 插槽宽度，默认 80px）。
- 动作项支持 `text` / `type` / `icon` / `iconVariant` / `width` / `disabled` / `bgColor` / `color`。语义色用实心底配对应的 `on-*` 前景，`default` 用 `default-soft` 浅底和正文色，warning 用 `on-warning` 深色字；禁用时底色、文字和图标一起转灰，忽略自定义色。
- 动作宽度默认 72px，文案 15 / 22 / 500，图标 18 排在文案上方，单行省略；`extra` 插槽默认宽 80px。行高由内容决定，低于 44px 时不宜放图标。
- 新增 `libs/swipe-action.ts`：动作和插槽默认宽度、横向接管阈值（8px）、快速轻扫判定、点击保护时长，以及跨实例的展开登记表；阈值和 `DESIGN.md` 同步。
- Web 端收起后延迟 220ms 把菜单设为 `visibility: hidden`，键盘 Tab 不会进入已收起的自定义菜单；收起动画期间保持动作可见，关闭后也不再响应点击。
- 不新增 CSS 令牌：底色、文字、图标、圆角和动效都复用现有 `--vx-*`；滑块不画外框、圆角和阴影，边界交给外层列表或卡片。
- DESIGN.md 补充滑动菜单的动作、宽度、图标、颜色、禁用、展开策略、手势、点击保护、层级和可访问性规则；readme 新增 API、用法和 ThorUI `tui-swipe-action` 迁移说明（`@click` → `@select`，`name` → `text`，`closable` → `closeOnSelect`，`forbid` → `swipeable`，`showMask=false` → `multiple`）。
- 演示页新增滑动菜单实验室，含基础、动作类型、图标与宽度、点击不关闭、禁止滑动、变量控制与方法、多行展开、自定义菜单和订单列表组合九组示例；删除确认交给 `vx-modal`。
- 文档站新增滑动菜单页，中英文含基础、动作项、点击不关闭、禁止滑动、变量控制、同时打开多行、自定义菜单、组合、设计规范、可访问性和 API；预览层接入真实组件，鼠标拖动也能操作。

## 0.26.0（2026-10-26）

- 打磨 vx-calendar：点选不再重算整月农历和标记；范围外的日子去掉选中底色，只留禁用色；起止写反时箭头全部停住，区间两端填反时浅底仍按先后铺开。`ref` 增加 `confirm()`，关掉底部按钮后用它提交。平铺模式的 `open()` / `close()` 不再改 `show`。弹层滑动不再把页面底下的列表一起拖走。
- 新增 vx-drawer 抽屉：从屏幕的一条边滑出，`position` 有 `left` / `right` / `top` / `bottom`，默认右侧；`show` 支持 `v-model:show`，`ref` 上暴露 `open()` / `close()`。
- 左右抽屉占满高度、宽 280px（`--vx-drawer-width`）；上下抽屉占满宽度、高 45%（`--vx-drawer-height`）。新增 `width` / `height` 覆盖尺寸，必须带单位；面板最大不超出整屏。
- 面板贴住屏幕的一侧不圆角，朝向页面的两角用 `lg` 12；`surface` 底、`--vx-shadow-lg`，不加描边；遮罩用 `--vx-color-mask`，只压页面。新增 `bgColor` / `maskColor` 两个字面值入口。
- 新增头部：`title`（17 / 24 / 600、单行省略）、`closable`（44 热区、18 图标）、`prefix` / `extra` 插槽；头部高 52，底部一条 1px `divider`。四者都没有时不渲染头部。
- 正文用 `scroll-view` 占满头尾之间的剩余高度，头部和底栏固定；默认四边内边距 16，`bodyPadded=false` 让列表和图片贴边。新增 `suffix` 固定底栏，上边一条 `divider`，内边距 12 / 16。
- 点可关闭的遮罩或关闭叉收起并抛 `close`；`maskClosable=false` 时点遮罩不关闭也不抛事件；`close()` 只收起，不抛 `close`。
- 四个方向的安全区由面板内边距承担：左右抽屉让开顶部、所在边的侧边距和底部手势条，上下抽屉让开顶部或底部。
- 层级默认 90，和操作菜单、日期时间选择器、日历弹层同档；低于消息提示 100、弹框 110、加载浮层 150、轻提示 200。Web 上遮罩淡入、面板从所在边滑入；App 5.26 直接出现，关闭即移除。
- 新增令牌 `--vx-drawer-width` 280px、`--vx-drawer-height` 45%，亮色、暗色各一份。
- DESIGN.md 补充抽屉的方向、尺寸、头部、正文滚动、底栏、遮罩、安全区、层级和可访问性规则；readme 新增 API、用法和 ThorUI `tui-drawer` 迁移说明。
- 演示页新增抽屉实验室，含基础、四个方向、尺寸、头部、贴边与底栏、长内容滚动、遮罩受限、自定义颜色、方法与事件、筛选组合十组示例。
- 文档站新增抽屉页，中英文含基础、位置、尺寸、头部、插槽、遮罩、自定义颜色、组合、方法、设计规范、可访问性和 API；预览层接入真实组件，四个方向和正文滚动都能操作。

## 0.25.0（2026-10-26）

- 新增 vx-calendar 日历：按周排布的月历，`mode="single"` 选一个日期，`mode="range"` 点两下选一段区间；`popup` 走底部弹层，不写就平铺在页面里，宽度跟随父级。`ref` 上暴露 `open()` / `close()`。
- 模型按模式分开：单日期用 `v-model`，区间用 `v-model:start` / `v-model:end`，两种模式互不干扰。弹层里点选先落在草稿上，点确定才写回；关闭叉、遮罩和 `close()` 都不动已提交的值。平铺模式没有确定这一步，点选当场写回。
- 区间交互：第一下点起点、第二下点终点，点到起点之前重新起头，再点一次起点得到一天的区间，两端都定好后点任意一格从那一格重来；只选了起点时按单日显示，确定按钮同时是灰的。
- 新增 `minDate` / `maxDate` 可选范围（闭区间，默认收到 1900-01-01 到 2100-12-31），范围外的日子转灰不可选；目标月一天都选不了时翻月和翻年箭头自动禁用，点也不动、不抛 `monthChange`。已选值优先于可选范围：有已选值时显示月跟着它走，没有已选值时收窄范围才把显示月收到最近的边界月。
- 新增 `showLunar` 农历：日期下方排一行初一、廿一这样的农历日，附带 `libs/lunar.ts`（1900–2100 公历转农历，只算日子和闰月）。农历不出现节气、干支和宜忌，越界时安静留空。
- 新增 `marks` 日期标记：`bgColor` 画圆、`color` 改数字色、`text` 顶掉农历行、`done` 换成对勾。选中和区间优先于标记，不可选的日子也不显示标记颜色。标记是正圆，和选中方块同为 36。
- 新增 `type` 语义色（`primary` / `success` / `info` / `warning` / `danger` / `default`），同时作用于选中底色、区间浅底、文字和确定按钮；warning 的琥珀底配深色字，区间文字用 `warning-ink`。
- 新增 `showYearArrow`（外侧双箭头翻年、内侧单箭头翻月，关掉后只剩按月翻，等同 ThorUI 的「只能切换月份」）、`title`、`confirmText`、`startText` / `endText`、`placeholder`、`showConfirm`、`maskClosable`、`maskColor`、`zIndex`（默认 90，和操作菜单、日期时间选择器同档）。
- 新增 `libs/calendar.ts`：一天的序号、星期、月份网格、日期解析与格式化、前后翻月。闰年、当月天数、补零沿用 `libs/datetime.ts`；日期比较用整数序号，不建 Date，设备时区不影响排序。`vxDatetimeNumbers` 改为导出，日期解析复用它。
- 网格按当月占几周排 5 或 6 行，当月之外留空，五周的月份不留空的第六行；周日排第一列；今天只换数字颜色。每天一个 36 的等大方块（圆角 10），四边都留缝：选中和区间两端实心、区间中间铺浅底，标记画成正圆；小字槽钉在方块底部、不占布局，整行数字对齐，没有小字时日期回到方块正中。
- 新增令牌 `--vx-calendar-cell`、`--vx-calendar-tile`、`--vx-calendar-week`、`--vx-calendar-max-width`、`--vx-calendar-line-day`、`--vx-calendar-line-result`、`--vx-calendar-font-sub`、`--vx-calendar-line-sub`，亮色、暗色各一份。
- DESIGN.md 补充日历的尺寸、行数、区间底色、标记、语义色、翻月、层级和可访问性规则；readme 新增 API、用法和 ThorUI `tui-calendar` 迁移说明（`isFixed` → `popup`，`status` → `marks`）。
- 演示页新增日历实验室，含单个日期、日期区间、农历、平铺、可选范围与翻月、标记、自定义颜色、标题与遮罩、方法与事件、表单组合十组示例。
- 文档站新增日历页，中英文含基础、日期区间、农历、平铺展示、可选范围与翻月、标记、自定义颜色、标题与遮罩、方法、组合、设计规范、可访问性和 API；预览层接入真实组件，可翻月、可点选。
- 打磨 vx-calendar：修好翻月箭头一直点不动的问题（`vxCalendarMonthBounds` 返回数组、组件按 `.first` / `.last` 读，可选范围的边界收口也一直没生效）；`marks` 的 `date` 先归一再匹配，`2026-10-5` 这种不补零的写法也认，读不出来的直接丢掉；禁用日和翻不动的箭头在 Web 上不再显示可点光标；`libs/lunar.ts` 的年份上下限改用 `libs/calendar.ts` 的同一对常量，不再各写一份。

## 0.24.0（2026-10-26）

- 新增 vx-tabs 标签页：`items` 按顺序等宽渲染，`v-model` 绑当前索引；点击未选中且未禁用的页签写回模型并抛 `change(index)`，点击当前项不再抛事件。
- 新增三种外观：`line` 下划线（默认）、`soft` 浅底胶囊、`inverse` 反色条。反色条用正文色铺满整条，选中项浮 `surface` 胶囊，且不画分割线；一屏最多一条。`soft` 的选中文字取对应的 `*-pressed`，warning 取 `warning-ink`，保证浅底上的 4.5:1。
- 新增 `size` 三档：高度沿用列表行 44 / 52 / 60，选中胶囊收一档到紧凑高度 28 / 32 / 36，角标跟 `--vx-badge-height-*`，下划线固定 24 / 32 / 40 × 2px。新增令牌 `--vx-tabs-indicator-sm/md/lg`，亮色、暗色各一份。
- 新增 `items[].badge`、`dot`、`disabled`：计数超过 `badgeMax`（默认 99）显示 `99+`；`dot` 优先于计数；禁用项不响应点击，文字转灰且保持不透明，角标单独降到 `--vx-opacity-disabled`；反色条上的未选中禁用项只降透明度。新增 `badgeType`，角标默认 `danger`。
- 有分割线时下划线下移 `--vx-tabs-indicator-out`（-1px）盖住底边；没有分割线时贴在行内。不认识的 `size` / `type` 落回 `md` / `default`。点击停在页签上。
- 新增 `type` 语义色，只染选中文字、下划线和浅底胶囊；`warning` 文字用 `warning-ink`，下划线用 `warning-pressed`。`divider` 控制底部 1px 分割线，`bgColor` / `color` 分别覆盖整条底色和未选中文字，都是字面值，传 `var(--vx-color-*)` 时才跟主题。
- 页签只切视图：不内置内容、路由、请求和插槽；一屏 2–5 个，不横向滚动；空数组不渲染，负数或越界索引不选中。
- DESIGN.md 补充标签页的尺寸、三种外观、角标、禁用、分割线、自定义颜色、状态色和可访问性规则；readme 新增 API、用法和 ThorUI `tui-tabs` 迁移说明。
- 演示页新增标签页实验室，含基础、三种外观、尺寸、角标、禁用与状态色、分割线、自定义颜色和页签与内容八组示例。
- 文档站新增标签页页面，中英文含基础、视觉变体、尺寸、角标、状态、分割线、自定义颜色、组合、设计规范、可访问性和 API；预览层接入真实组件。

## 0.23.0（2026-10-26）

- 新增 vx-datetime 日期时间选择器：底部弹层里的滚轮，`mode` 十种——`year`、`year-month`、`month-day`、`date`、`date-hour`、`datetime`（默认）、`datetime-second`、`time`、`time-second`、`minute-second`；列数从 1 到 6，只出现模式包含的列。
- 打开时按 `v-model` 定位：读不出来或超出年份区间时回落到当前时间 / 区间边界，分钟和秒按步长对齐；滚动只改草稿，点确定才写回，取消、遮罩和 `close()` 都不动已提交的值。`ref` 上暴露 `open()` / `close()`。
- 新增 `startYear` / `endYear`（收口到 1000–2999，倒序自动交换）、`minuteStep` / `secondStep`（1–30）、`unitPosition`（`inline` / `top`）、`format`、`maskClosable`、`maskColor` 和 `zIndex`（默认 90，和操作菜单同档）。
- 天数跟着年月走，闰年二月 29 天；换月或换年时选中的日超出当月会收口，并把日期列滚回去。打开期间收窄年份区间，选中的年也会夹回区间。
- 滚轮用 uni-app x 原生 `picker-view`：可视高度 220、每行 44（五行），指示器高度必须等于行高，列才按行对齐。原生蒙层写死了白色渐变，暗色下会在两端发白，组件用 `mask-class` 换成透明，选中行靠字重和颜色区分。六列时数值自动收一档字号。
- 新增 `libs/datetime.ts`：字段顺序、模式列、解析、格式化、闰年天数、步长对齐和年份列表。解析只认数字并按模式字段的位置取值，`date` 收到带时间的整串也取前三段。
- 新增令牌 `--vx-datetime-row`、`--vx-datetime-wheel`、`--vx-datetime-max-width`，亮色、暗色各一份；行高同时写在 `libs/datetime.ts` 的 `VX_DATETIME_ROW` 里，改一处要改两处。
- DESIGN.md 补充日期时间选择器的尺寸、模式、单位、格式化、遮罩、层级和可访问性规则；readme 新增 API、用法和 ThorUI `tui-datetime` 迁移说明（数字 `type` 换成语义化 `mode`）。
- 演示页新增日期选择实验室，含基础、日期模式、时间模式、默认值与年份区间、步长、单位置顶、自定义格式、标题与遮罩、方法与变更事件、表单组合十组示例。
- 文档站新增日期时间选择器页，中英文含基础、日期模式、时间模式、默认值与年份区间、步长、单位位置、自定义格式、标题与遮罩、方法、组合、设计规范、可访问性和 API；预览层新增 `picker-view` / `picker-view-column` 的近似实现，滚轮在文档里也能真的滚。

## 0.22.0（2026-10-26）

- 新增 vx-no-data 暂无数据：默认内置线稿插图、主文案和可选说明 / 动作；支持 `icon`、`image`、`icon` 插槽和 `default` / `extra` 插槽。
- 内置线稿按 96 / 128 / 160 三档缩放，不依赖图片，也不判断主题；`type` 只给纸边、加号和图标圆上色，文案保持正文色。
- 新增动作透传：`actionText` / `actionType` / `actionVariant` / `actionShape` / `actionSize` / `actionWidth` / `actionLoading` / `actionDisabled`，点击抛 `action`。
- 新增 `fill` 撑满父级并垂直居中；新增 `iconVariant` 和 `image`；extend 图标仍需引入 `icons-extend.css`。
- 新增令牌 `--vx-no-data-art-*`、`--vx-no-data-disc-*`、`--vx-no-data-glyph-*` 和 `--vx-no-data-copy-max`，亮色、暗色各一份。
- `VxButtonVariant` / `VxButtonShape` 移到 `libs/types/common.ts`，按钮和空状态共用同一组类型。
- DESIGN.md 补充空状态的尺寸、色板、动作、填充、插槽和可访问性规则；readme 新增 API、用法和 ThorUI 迁移说明。
- 演示页新增暂无数据实验室，含基础、插图、类型、尺寸、动作、状态、插槽和组合八组示例。
- 文档站新增暂无数据页，中英文含基础、插图、类型、尺寸、动作、状态、插槽、组合、设计规范、可访问性和 API；预览层同步接入。
- 打磨 vx-no-data：语义色改挂 class，纸边、加号、图标圆和字形各写各的，不再把 color 写到 view 上；字形补上和字号相同的宽高；长文案在 320 内折行；lg 不再重复挂一份 24 的内边距。readme 里自定义图片的方框改回 96 / 128 / 160。
- 打磨 vx-collapse / vx-collapse-item：按下态只留一份底色，箭头收成一层，点击停在面板上；平面分组不再挂空的修饰 class。

## 0.21.0（2026-10-26）

- 新增 vx-collapse 折叠面板与 vx-collapse-item 折叠项：容器用 `v-model` 绑展开面板的 `name` 数组，面板承载标题、说明、前缀图标、角标和内容。支持手风琴、三档尺寸、卡片 / 平面形态、整组或单项禁用、无箭头和固定高度滚动。
- 新增容器方法 `open(name)` / `close(name)` / `toggle(name)` 和 `change(name, open)` 事件；手风琴打开新项时自动收起上一项，收起当前项时清空名单。面板另抛 `change(open)`。
- 标题行沿用列表行最小高度 44 / 52 / 60；标题 13 / 15 / 17（20 / 22 / 24、500），说明固定 13 / 20，箭头沿用图标三档 14 / 18 / 22；水平内边距 12 / 16 / 16，垂直 8 / 12 / 16，内容左右与标题对齐。
- 分割线 1px，左右与标题内边距对齐，最后一项按实例挂载顺序自动不画；`divider=false` 去掉全部面板间分割线。`card` 用 `surface` 底、1px 描边和 `md` 圆角，`plain` 只保留 `surface` 底，两者都不加阴影。
- 展开用 `max-height` 加透明度和 8px 上移过渡，固定高度改用 `height` 过渡；第一帧不挂过渡，默认展开的面板不会滑进来。5.26 的 App 不支持 `max-height` 过渡时直接换高度，透明度仍然过渡。
- `contentHeight` 必须带单位，内容放进 `scroll-view` 内部滚动；自动高度最多 2000px。`prefix` 放图标或头像，`extra` 放标签、徽章、时间或状态；插槽内容自己带颜色和字号。
- 不新增令牌：标题行复用列表行高度，箭头复用图标三档，颜色和动效复用现有 `--vx-*`。
- DESIGN.md 补充折叠面板的尺寸、形态、展开名单、手风琴、分割线、禁用、无箭头、固定高度、方法、动效和可访问性规则；readme 新增两个组件的 API、用法和 ThorUI 迁移说明。
- 演示页新增折叠面板实验室，含基础、手风琴、卡片与平面、尺寸、禁用与无箭头、固定高度、前缀与角标、卡片组合和方法与事件九组示例。
- 文档站新增折叠面板和折叠项两页，中英文含基础、手风琴、视觉变体、尺寸、组合、禁用、无箭头、固定高度、插槽、设计规范、可访问性和 API；预览层同步接入真实组件。
- 打磨 vx-modal：内置动作从 `md` 收到 `sm` 档 32 / 13，左右内边距 12，并排仍等宽；默认动作更紧凑，不再压过标题和正文。自定义正文里的表单控件保持业务尺寸，示例仍用 `md`。
- vx-modal 新增 `closable`：右上角显示 44 × 44 关闭叉，图标 18，点击收起并抛 `cancel`；和取消、遮罩走同一个出口，不受 `maskClosable` / `closeOnAction` 影响。有标题时标题左右各让 24，没有标题时正文右侧让 24。新增令牌 `--vx-modal-close-size` 44px，亮色、暗色各一份。

## 0.20.0（2026-10-26）

- 新增 vx-modal 弹框：居中对话框，`title` / `content` 或默认插槽放正文，默认取消、确定两个动作；支持 `v-model:show`，`ref` 上暴露 `open()` / `close()`。
- 新增 `actions` 自定义动作，每项有 `text` / `type` / `variant` / `role` / `disabled` / `loading`；一个动作铺满、两个并排等宽、三个以上纵向，轮廓由 `actionShape` 统一。`role="cancel"` / `"confirm"` 走语义事件，没有 `role` 的动作抛 `action(index, action)`。
- 动作统一用 `md` 控件：40 高、14 / 22 / 500，左右内边距 16；自定义正文里的输入和按钮也按 `md` 对齐，不另造第四档尺寸。
- 默认取消是镂空 `default`，确定是实心 `primary`；`cancelType` / `confirmType` / `confirmText` / `confirmLoading` / `confirmDisabled` 只作用于默认动作。新增 `closeOnAction`，异步提交可以保持打开，完成后再调 `close()`。
- 新增 `showActions`、`maskClosable`、`titleColor`、`contentColor`、`maskColor` 和 `zIndex`；自定义正文用默认插槽 + `:show-actions="false"`，插槽不继承正文的颜色和字号。
- 新增 `size` 三档 280 / 320 / 400，只改面板最大宽度，字号固定；新增 `icon` / `iconType` 状态图标，圆 48、图标 22，圆用 `*-soft` 浅底，图标用 `*-pressed`。
- 新增令牌 `--vx-modal-max-width-sm/md/lg` 和 `--vx-modal-icon-size`，亮色、暗色各一份。
- 新增浮层层级 110：高于操作菜单 90 和消息提示 100，低于加载浮层 150 和轻提示 200；组件自带浮层改为七档。
- DESIGN.md 补充弹框的宽度、图标、动作、颜色、事件、遮罩、层级、自定义正文和可访问性规则；readme 新增 API、用法和 ThorUI 迁移说明。
- 演示页新增弹框实验室，含基础、提示文本样式、危险确认、单个按钮、多个按钮、圆角按钮、按钮颜色、尺寸、遮罩不可点、自定义内容、异步确认和方法十二组示例。
- 文档站新增弹框页，中英文含基础、危险确认、文本颜色、动作、动作颜色、图标、尺寸、遮罩、自定义内容、异步确认、方法、设计规范、可访问性和 API；预览层同步接入。
- 打磨 vx-actionsheet：选中勾固定在行右侧，文案保持居中；阴影和按下态圆角裁切分层，App 上阴影不会被 overflow 裁掉。动作色改由 class 表达，禁用写在最后盖过类型色。
- 打磨 vx-modal：定位层和面板打开 `overflow: visible`，App 上 `lg` 阴影不再被裁掉。图标下边距只在有标题时留 12，避免和正文上边距叠成 24。`iconType="default"` 的图标改为 `text`，与浅底按钮一致。并排长文案裁在自己的按钮里，不再盖住另一侧。

## 0.19.0（2026-10-26）

- 新增 vx-actionsheet 操作菜单：底部弹层，用 `items` 列动作，`title` / `description` 可选，默认带取消按钮。支持 `v-model:show`，`ref` 上暴露 `open()` / `close()`。
- 动作支持 `default` / `primary` / `danger` 三种类型，以及 `disabled` 和 `selected` 状态；点击默认收起并抛 `select(index, item)`，`closeOnSelect=false` 时保持打开。
- 点取消或可关闭的遮罩收起并抛 `cancel`；`maskClosable=false` 时只能点动作或取消退出；`close()` 只收起，不抛 `cancel`。
- 面板用 `surface` 底、顶部 `lg` 圆角、`lg` 阴影，最大宽度 480px，手机上铺满；遮罩用 `--vx-color-mask`，只压页面不压面板。底部安全区由面板内边距承担，取消与动作之间用 4px `default-soft` 间隔带，不画 border。
- 标题 17 / 24 / 600，说明 13 / 20 次要色，动作和取消 15 / 22 / 500，行高 52，左右内边距 24；动作默认 `text`，primary 用 `primary-pressed`，danger 用 `danger-pressed`，禁用用 `disabled-text`，按下用 `surface-pressed`。
- 新增 `titleColor` / `descriptionColor` / `maskColor` 三个字面值覆盖入口；新增令牌 `--vx-actionsheet-max-width` 480px，亮色、暗色各一份。
- 新增浮层层级 90：低于消息提示 100、加载浮层 150、轻提示 200，高于页面内容和吸顶条 10；组件自带浮层改为六档。
- Web 上用 `--vx-duration-normal` 淡入遮罩、从底部滑入面板；App 5.26 直接出现，关闭即移除，不做退场动画。
- DESIGN.md 补充操作菜单的尺寸、层级、颜色、状态、选中、遮罩、安全区和可访问性规则；readme 新增 API、用法和 ThorUI 迁移说明。
- 演示页新增操作菜单实验室，含基础、危险操作、提示文本样式、无提示、无取消按钮、遮罩不可关闭、选中状态和方法八组示例。
- 文档站新增操作菜单页，中英文含基础、标题与说明、类型、状态、自定义颜色、无取消、遮罩、组合、方法、设计规范、可访问性和 API；预览层同步接入。

## 0.18.0（2026-10-25）

- 新增 vx-steps 步骤条：用 `items` 按顺序渲染节点、连线和文字，`active` 是当前步骤索引，从 0 开始，`-1` 表示还没开始。负数按未开始处理，其余非整数四舍五入，超过末项收到最后一步。空数组不渲染，单条步骤不画连线。
- 当前步骤用勾标记，之前的步骤保留圆点或序号；当前步骤之前的连线用语义色，之后的连线保持待处理色。`variant="dot"` 用小圆点表示已完成和待处理，`variant="number"` 已完成和待处理都显示序号。
- 新增 `direction` 的 `horizontal` / `vertical`，`lineStyle` 的 `solid` / `dashed`，`clickable` 整步热区和 `click` 索引；组件不维护内部状态，父级用 `active` 和 `click` 同步。
- 连线固定 1px 并压在节点中心：四边宽度先归零，只留上 / 左 1px，避免默认 medium 把线撑成 4px；横向 / 纵向再用 50% 位移居中。`solid` / `dashed` 只换 `border-style`。
- 新增 `type` 的六种语义色，同时决定当前节点、当前标题和已完成连线；`warning` 的标题用 `warning-ink`、连线用 `warning-pressed`。已完成标题保持正文色，待处理标题转次要灰。
- 新增自定义图标节点：已完成 `*-soft` 浅底配语义色图标，当前实心底配 `on-*` 图标，待处理 `surface` 底加 `border` 描边配次要灰图标；`iconVariant` 切 regular / fill，扩展图标需要引入 `icons-extend.css`。
- 新增令牌 `--vx-steps-node-*` 20 / 24 / 28、`--vx-steps-dot-*` 6 / 8 / 10、`--vx-steps-font-*` 12 / 13 / 14、`--vx-steps-center-*` 10 / 12 / 14 和 `--vx-steps-line-out-*` -10 / -12 / -14，亮色、暗色各一份。纵向连线的 bottom 用 line-out，App 不能 calc，负值单独写字面量。
- 步骤名按 13 / 15 / 17（20 / 22 / 24、600），说明 `sm` 13 / 20、`md` / `lg` 15 / 22，时间固定 13 / 20；节点到内容 8 / 12 / 16，纵向步骤之间留 24。
- DESIGN.md 补充步骤条的尺寸、方向、状态、语义色、图标、虚线、点击和插槽规则；readme 新增 API、用法和 ThorUI 迁移说明。
- 演示页新增步骤条实验室，含水平、数字、垂直、自定义图标、尺寸、语义色、线条、可点击和卡片组合九组示例。
- 文档站新增步骤条页，中英文含基础、类型、方向、数字、尺寸、线条、图标、可点击、组合、设计规范、可访问性和 API；预览层同步接入。

## 0.17.0（2026-10-25）

- 新增 vx-countdown 倒计时：`time` 传剩余秒数，默认显示时 / 分 / 秒；`showDays` / `showHours` / `showMinutes` / `showSeconds` 控制可见单位。隐藏上层单位时由下一个可见单位接管余数，四段全关时回落到秒。
- 新增 `separator` 的 `colon` / `unit` 和 `unit` 的 `zh` / `en`：冒号，或天 / 时 / 分 / 秒、d / h / m / s。支持三档尺寸、`outline` / `soft` / `plain` 三种盒形和六种语义色。
- 新增 `showMilliseconds` 十分位：读数取自真实剩余时间，按 100ms 刷新，依附秒数；关闭时回到 1 秒一跳。
- 计时按截止时间重算，不在每次回调里递减计数；`tick` 在显示秒数变化时抛，`reset` 和改 `time` 会补抛一次新值，`end` 只在自然到 0 时抛一次。`time` 变化时按新值重置。
- 新增 `start()` / `pause()` / `reset(seconds?)` 方法和 `autoStart`；`start` 在结束后从 `time` 重来，`reset` 不传参回到 `time`。
- 新增令牌 `--vx-countdown-height-*` 24 / 32 / 40 和 `--vx-countdown-ms-width-*` 20 / 26 / 32，亮色、暗色各一份。
- 新增 `bgColor` / `color` / `unitColor` / `borderColor`：底色、数字、盒外分隔与单位、描边各改一处；默认按字面值使用，传 `var(--vx-color-*)` 时跟随主题。
- DESIGN.md 补充倒计时的尺寸、字号、圆角、颜色、计时语义、毫秒精度和自定义颜色规则；readme 新增 API、用法和 ThorUI 迁移说明。
- 演示页新增倒计时实验室，含基础、天数与单位、隐藏单位、毫秒、尺寸、形态、类型与颜色、方法与事件、组合九组示例。
- 文档站新增倒计时页，中英文含基础、单位、隐藏单位、毫秒、尺寸、形态、类型与颜色、方法与事件、组合、设计规范、可访问性和 API；预览层同步接入。

## 0.16.0（2026-10-25）

- 新增 vx-number-box 数字框：减号、数值输入、加号三段，`v-model` 绑定数值，支持范围、步长、三档尺寸、描边 / 浅底形态、聚焦、校验失败和禁用。
- 默认 `min=1`、`max=99`、`step=1`。到边界后对应按钮转灰并停止响应；`min` 大于 `max` 时按交换后的区间处理。非数字边界按 1 / 99。
- 输入中只同步范围内的有效值；失焦或确认时收口：空值回 `min`，非数字回到最近一次有效值，越界夹到边界。点加减时越界或空草稿先夹回边界再走一步。父级写入的越界值不回写，点加减或失焦只夹到边界。`change` 只在点加减、失焦和确认后值真的变化时抛一次。
- 精度按值、`step`、`min`、`max` 里最多的小数位收口，最多 6 位；`0.1 + 0.2` 不留浮点尾巴。`step` 只决定加减量，不对齐步长网格。
- 新增三档尺寸：控件高 32 / 40 / 48，数值区宽 44 / 52 / 60，图标 14 / 18 / 22，数值字号 13 / 14 / 16。新增令牌 `--vx-number-box-field-*`，亮色、暗色各一份。
- 新增 `variant` 的 `outline` / `soft`、`shape` 的 `rounded` / `pill` / `square`，以及 `bgColor` / `color` / `iconColor`。自定义颜色是字面值，禁用时不生效。描边盒按下铺 `surface-pressed`；浅底和自定义底色只让图标变淡。下限为负时数值区改用 `text`，否则 `digit` 键盘没有负号。
- 新增 `focus` / `blur` 事件和普通 `change` 数值；没有插槽和方法。整个数字框的点击停在本组件内。
- DESIGN.md 补充数字框的尺寸、范围、步长、精度、输入收口、状态和自定义颜色规则；readme 新增 API、用法和 ThorUI 迁移说明。
- 演示页新增数字框实验室，含基本用法、范围、步长、尺寸、形态、状态、自定义颜色和购物车组合八组示例。
- 文档站新增数字框页，中英文含基础、范围、步长、尺寸、形态与轮廓、状态、自定义颜色、组合、设计规范、可访问性和 API；预览层同步接入。

## 0.15.0（2026-10-25）

- 新增 vx-time-axis 时间轴：用 `items` 从上到下渲染节点、竖线、标题、说明和时间，不提供容器加子项的组合写法。空数组不渲染。
- 有 `title` 的是阶段，没有 `title` 的是同一阶段下的事件。阶段用图标节点，事件缩成圆点；当前条目下一条没有 `title` 时，底部留白从 24 收到 12，分组只由数组顺序表达。
- 节点三档 20 / 24 / 28，事件圆点 6 / 8 / 10；阶段名 13 / 15 / 17（20 / 22 / 24、600），说明 `sm` 13 / 20、`md` / `lg` 15 / 22，时间固定 13 / 20。新增令牌 `--vx-time-axis-node-*`、`--vx-time-axis-dot-*` 和 `--vx-time-axis-node-center-*`，亮色、暗色各一份。
- `type` 默认 `default`，用浅灰节点和次要灰图标；`primary` / `success` / `info` / `warning` / `danger` 用语义实心底和 `on-*` 图标。没有 `icon` 时用圆点，圆点也可以用 `type` 上色。
- 竖线 1px，两端收在第一个和最后一个节点中心，单条记录不画线；`lineColor` 只改线色，是字面值，不跟随主题。
- 新增 `vx-time-axis` 的 props、readme 与 DESIGN.md 规则；演示页新增订单物流、节点类型、尺寸、事件与竖线、订单卡片五组示例。
- 文档站新增时间轴页，中英文含基础、节点类型、尺寸、事件节点、自定义竖线、组合、设计规范、可访问性和 API；预览层同步接入。
- 从 ThorUI `tui-time-axis` / `tui-timeaxis-item` 迁移：`items` 取代容器加子项，`title` / `description` / `time` / `icon` 取代 `content`、`node` 插槽；`backgroundColor` 不再需要，节点会自动盖住竖线，节点颜色用 `type`，线色用 `lineColor`。

## 0.14.0（2026-10-25）

- 新增 vx-sticky 吸顶容器：用 `scrollTop` 驱动，在文档流和 `position: fixed` 之间切换，吸顶后补一个等高占位，下面的内容不跳。App 不支持 `position: sticky`，各端共用这一套行为。
- 吸顶条默认在文档流里透明，吸顶后铺 `surface` 底和底部 1px 分割线；`shadow` 改用 `--vx-shadow-md`，`bgColor` 可换品牌底色，未吸顶也生效。
- 新增 `offsetTop` 吸顶距离，单位 px，在顶部安全区之外再让出；Web 自动避让导航栏。`zIndex` 默认 10，压在页面内容和固定页脚上、低于消息提示。
- 新增 `suffix` 插槽：放吸顶条后面的内容，决定吸到哪里结束；容器底边滚到顶时把吸顶条推出去，下一段接着吸。不传 `suffix` 时吸到页面末尾。
- 新增 `change` 事件和 `refresh()` 方法：吸顶状态切换时抛布尔值；异步内容、图片字体加载或窗口尺寸变化后重新测量。
- 演示页新增吸顶实验室，含基础、吸顶距离、指定范围和阴影与底色四组示例；页面滚动值统一接到 `vx-sticky`。
- DESIGN.md 补充吸顶的层级、底色、分割线、范围、刷新和限制；组件库 readme 新增 API 与用法。
- 文档站新增吸顶容器页，中英文含基础、吸顶距离、指定范围、阴影、自定义底色、事件与刷新、设计规范、可访问性和 API；预览层同步接入，画布用 CSS sticky 示意页面级 fixed 的吸顶效果。

## 0.13.0（2026-10-25）

- 新增 vx-loading 加载中：转圈加可选文案，支持 `row` / `column` 两种排列、`sm | md | lg` 三档尺寸和 `primary | success | info | warning | danger | default` 六种语义色。
- 转圈提供 `ring`、`arc`、`bars` 三种形态，分别对应圆环、开口弧和十二瓣渐隐；十二瓣的延迟按 `--vx-duration-spin` 等分，像素常量在 `libs/motion.ts`。
- 新增 `overlay` 全屏浮层：默认带 `mask` 遮罩，面板居中，挡住页面点击；面板最小 120、最大 240，内边距 24，`md` 圆角和 `lg` 阴影，层级默认 150，压在消息提示上、轻提示下。
- `type` 只改转圈颜色，文案保持次要灰；浮层里默认转圈和文案改用正文色。`mask=false` 只去掉压暗，不放开点击；`maskColor` 自定义遮罩色。
- 新增 vx-loadmore 加载更多：和 vx-loading 共用转圈，默认文案「正在加载...」，上下留白 16，文案 13 / 20；不承载点击和重试。
- 新增 vx-nomore 没有更多：默认文案「没有更多了」加两侧 1px 细线，`dot` 换成 6px 圆点，`line=false` 去掉线；`color` / `lineColor` 分别覆盖文案圆点和线条。`size` 三档只改文案和标记高度，和同尺寸的 vx-loadmore 一样高。
- vx-loadmore 与 vx-nomore 共用同一套尾部节奏，切换时不跳高度；建议放在分组卡片外，加载结束再换成没有更多。两边同尺寸时高度完全一致。
- 新增令牌 `--vx-loading-min-width`、`--vx-loading-max-width` 和 `--vx-nomore-dot`，亮色、暗色各一份。
- DESIGN.md 补充加载、尾部状态、字号、间距、浮层层级和动效规则；演示页新增加载与尾部实验室，含行内、纵向、尺寸、类型、三种形态、浮层、加载更多、没有更多和列表尾部切换。
- 文档站新增加载中、加载更多和没有更多三页，中英文含基础、布局、尺寸、类型、形态、浮层、自定义颜色、列表尾部、设计规范和 API；预览层同步接入。
- 十二瓣收成单层节点，角度和延迟按 700ms 等分后一次算好。纵排或浮层没有文案时不再多留 8。浮层单独接住点击。加载更多关掉换行，避免长句把尾部撑得比没有更多高。

## 0.12.0（2026-10-25）

- 新增 vx-grid 宫格与 vx-grid-item 宫格项。容器负责 `surface` 底、外框、`md` 圆角和四角裁切；格子负责宽度、内部线、内容和点击。
- 列数写在格子上：`columns` 取 2–5，超出按 3，宽度按 50% / 33.33% / 25% / 20% 分。`index` 从 0 开始按行递增，第一行、第一列不画内部线。
- `divider` 默认打开，只画上、左两条 1px 内部线，线色用 `--vx-color-divider`；外框仍用 `--vx-color-border`。`divider=false` 去掉内部线，`variant="plain"` 去掉外框和圆角。
- 格子三档尺寸：最小高度 72 / 88 / 104，内边距 8 / 12 / 16，主文案 13 / 15 / 17，单行省略；说明固定 13 / 20。图标 18 / 22，图片 32 / 40 / 48；新增令牌 `--vx-grid-height-*` 与 `--vx-grid-media-*`，亮色、暗色各一份。
- 格子支持字体图标 `icon`、图片 `image` 和 `icon` 插槽，优先级为插槽 > 图片 > 字体图标。字体图标直接渲染，默认次要灰；`type` 改语义色，`iconVariant` 切 regular / fill。图片按 32 / 40 / 48 方框 `aspectFit` 展示，圆角由方框裁切。
- 新增 `bgColor` / `color`：分别覆盖格子和主文案、字体图标的颜色，字面值不随主题；有底色时按下改用整体透明度，不再换 `surface-pressed`。去外框用 `variant="plain"`，去内部线再传 `:divider="false"`，可以拼出参考里的纯色块和无边框宫格。
- `extra` 插槽贴右上角，放徽章、短标签或状态；不占内容高度。
- `clickable` 默认打开，按下用 `surface-pressed` 底并抛 `click`，点击停在格子上；静态格传 `:clickable="false"`，禁用格转灰且不抛 `click`。
- DESIGN.md 补充宫格的列数、内部线、尺寸、图标、底色和点击规则；演示页新增宫格实验室，含基础、列数、分隔线、形态、尺寸、图标、状态、组合、色底与无边框。
- 文档站新增宫格和宫格项两页，中英文含基础、列数、分隔线、视觉变体、尺寸、图标、自定义颜色、布局、插槽、状态、组合和 API；预览层同步接入。

## 0.11.0（2026-10-25）

- 新增 vx-card 卡片：头部、正文、底部三段。`title` / `meta` / `avatar` 组成头部，正文用默认插槽或 `content`，底部用 `footer` 或 `suffix`。
- 头部支持 `avatarShape`（rounded / circle）、`titleColor` / `metaColor`、`headerBg` 和 `headerDivider`；`prefix` 替换头像，`extra` 替换右侧 meta，插槽内容自己带颜色和字号。
- 新增三档尺寸：内边距 12 / 16 / 24，头像 32 / 40 / 48，标题 13 / 15 / 17；正文 `sm` 用 13，`md` / `lg` 用 15；meta 与 footer 固定 13。标题、正文和底部在剩余宽度内换行。
- `bodyPadded=false` 让封面图、图片网格和列表行贴边；`full` 去掉左右描边和圆角，用于通栏。默认 `surface` 底、1px 描边和 `md` 圆角，不加阴影。
- `clickable` 打开后整卡可点，按下变淡并抛 `click`，点击停在卡片上；默认关闭，卡片里不再嵌套入口。
- 圆角统一：`vx-card`、`vx-list-view` 的 `card` 分组和 `vx-toast` 改用 `md` 8px，和按钮、输入框一致；`lg` 令牌保留给页面级大容器，组件默认不用。
- 新增卡片令牌 `--vx-card-avatar-sm/md/lg` 与 `--vx-card-meta-max`，亮色、暗色各一份；`--vx-card-avatar-*` 只用于头部图片，`--vx-card-meta-max` 收口单行截断，App 不支持百分比 `max-width`。
- DESIGN.md 补充卡片的结构、尺寸、头部、正文贴边、通栏、点击和颜色规则；演示页新增卡片实验室，含默认、头部设置、尺寸、通栏、富内容、图文网格和可点击七组示例。
- 文档站新增卡片页，中英文含基础、头部、尺寸、通栏、富内容、图文网格、可点击和 API；预览层同步接入。
- vx-list-cell 分割线新增 `dividerColor` / `dividerOpacity`，可分别改颜色和深浅，0 隐藏；默认线色改用新的 `--vx-color-divider`，亮色比 `border` 浅一档，暗色保持和描边同深。文档和演示新增分割线示例。

## 0.10.0（2026-10-25）

- 新增 vx-list-view 列表分组：标题在卡片外，支持 `description` 和 `extra` 插槽；`variant="card"` 用 surface 底、1px 描边和 `lg` 圆角，`plain` 去掉描边和圆角。
- 新增 vx-list-cell 列表行：`title` / `description` / `value`，默认插槽替换文案区，`prefix` 放图标、头像或选择框，`extra` 放徽章、标签或时间。
- 行高与主文案分三档：`sm` 44（13 / 20）、`md` 52（15 / 22）、`lg` 60（17 / 24）；双行内容由内边距自然撑高。新增令牌 `--vx-list-height-sm/md/lg`，亮色、暗色各一份。
- `clickable` 默认打开：可点行按下用 `surface-pressed` 底并抛 `click`，点击停在行上；静态行传 `:clickable="false"`，禁用行转灰且不抛事件。主文案和说明在剩余宽度内换行。箭头固定用 `chevron-right`，按行档位取 14 / 18。
- 分割线在行内左右让出内边距；分组最后一行传 `:divider="false"`，避免和卡片底边叠线。
- 演示页新增列表实验室；文档站新增列表分组和列表行两页，含基础、标题、视觉变体、尺寸、多行、插槽、状态和组合；预览层同步接入。

## 0.9.0（2026-10-24）

- 新增 vx-toast 轻提示：全屏浮层、盒子居中，图标加一句短文案，默认 2000ms 后自动收起。`v-model:show` 回写状态，`ref` 上暴露 `open()` / `close()`。
- `type` 的六种语义只决定默认图标（success / danger / warning / info / default / primary），盒子固定用正文色的反相底，亮暗主题自动互换，正文对比度保持 4.5:1。
- 支持自定义字体图标 `icon`、图片地址 `image`、字重 `variant`、显示图标 `showIcon`、最大宽度 `maxWidth`、常驻 `duration="0"`、层级 `zIndex` 和自定义颜色 `bgColor` / `color`；图片优先于字体图标，固定 40 × 40 等比展示。
- 全屏层接住点击，提示期间页面不响应；点浮层可以提前收起，常驻提示也有出口。Web 上用 `--vx-duration-normal` 淡入，App 5.26 直接出现。
- 新增轻提示令牌：`--vx-toast-icon-size` 40px、`--vx-toast-min-width` 120px，亮色、暗色各一份。
- vx-toast 与 vx-tips 新增 `bgOpacity`：只调整底色透明度，文字和图标保持不透明；轻提示默认 0.9，消息提示默认 1，范围 0–1。
- 演示页新增轻提示实验室；文档站新增轻提示页，含基础、类型、无图标、多行文本、自定义图标、时长、自定义颜色、组合和方法；预览层新增 `image` 组件映射。

## 0.8.0（2026-10-24）

- 新增 vx-rate 评分：`v-model` 绑定分值，`count` 收敛到 1–10，`allowHalf` 半星，三档星形 20 / 24 / 28，间距固定 8。
- 选中层用核心图标字体的 `star` 字形按百分比裁出小数进度，`3.45`、`3.5`、`3.6` 都能如实显示；未选中默认浅灰实心，`hollow` 换成线性空心。
- 点按左右半区分别选半星和整星，支持横向滑动手势；纵向为主的移动按滚动处理，不误改分值。点按和滑动结束后补发的 click 会被短暂屏蔽。Web 上鼠标拖动和触摸同一套位移。
- `type` 默认 `warning`，支持六种语义色；warning 的选中星形取 `warning-pressed`，白底上才够 3:1。`activeColor` / `voidColor` 分别覆盖选中色和未选中色，字面值不随主题。`readonly` 保留颜色，`disabled` 转灰，两者都不响应点按。
- `showText` 显示一位小数，整数不补 `.0`；`text` 自定义文案优先。
- 新增评分令牌：`--vx-rate-size-sm/md/lg` 与 `--vx-rate-gap`，亮色、暗色各一份；`libs/rate.ts` 同步手势用的像素常量。
- 演示页新增评分实验室；文档站新增评分页，含基础、星星数、半星、类型、尺寸、自定义颜色、空心、分值、状态和组合。

## 0.7.0（2026-10-24）

- 新增 vx-tips 消息提示：`position` 三档 `top` / `center` / `bottom`。顶部是整条横幅，居中和底部是圆角浮层，`maxWidth` 默认 320。
- 六种语义色沿用实心底 + `on-*` 前景；`default` 用正文色的反相底，亮色、暗色主题自动互换。
- `duration` 默认 2000ms，`0` 常驻；自动关闭、点关闭和 `close()` 都抛 `close`，`v-model:show` 会同步回 `false`。
- 支持 `icon`、`closable`、`offset`、`bgColor` / `color` 和默认插槽；`ref` 上暴露 `open()` / `close()`，同一条提示重复触发时重新计时。
- 顶部横幅用 `--uni-safe-area-inset-top` 避让导航栏；底部浮层在安全区外再留 16，不铺满全屏挡点击。`zIndex` 默认 100。
- 演示页新增消息提示实验室；文档站新增提示页，含位置、类型、时长、长文案、插槽、图标、自定义颜色、组合和方法。

## 0.6.0（2026-10-24）

- 新增 vx-footer 页脚：版权、备案号和辅助链接。默认留在文档流，`fixed` 时贴住安全区底部。
- 链接用 `links` 数组，相邻项自动加竖分隔线，点击只抛 `click` 和链接对象；`value` 承载业务路由值，不内置跳转。
- 支持 `color` / `linkColor` / `borderColor` / `bgColor` 分别覆盖版权文字、链接、分隔线和底色；`color`、`linkColor` 是字面值，不跟随主题。
- 固定页脚用 `surface` 和顶部 1px 描边分层，不加阴影，并使用 `--uni-safe-area-inset-*` 避让手势条、tabBar。
- 默认插槽放在标准行上方，承载品牌或社交入口。演示页新增页脚实验室；文档站新增页脚页，含基础、链接、自定义颜色、固定底栏和插槽。

## 0.5.0（2026-10-24）

- 新增 vx-badge 徽章：计数、`max` 封顶、圆点、三档尺寸，solid / soft 两种形态，默认 `danger`，支持自定义颜色。
- 新增徽章令牌：`--vx-badge-height-*` 16 / 20 / 24、`--vx-badge-font-*` 12 / 13 / 14、`--vx-badge-dot-*` 6 / 8 / 10，亮色、暗色各一份。
- 徽章支持 `absolute` 叠加到默认插槽右上角，`offsetX` / `offsetY` 调偏移，`ring` 用页面底色描边；定位层不接收点击。圆心按徽章自身尺寸计算，宽胶囊同样压在角上。App 上 `absolute` 和 `ring` 打开 `overflow: visible`，避免角标和阴影被默认裁掉。
- 演示页新增徽章实验室；文档站新增徽章页，含数字、封顶、圆点、视觉变体、尺寸、自定义颜色、绝对定位和组合。

## 0.4.0（2026-10-23）

- 新增 vx-tag 标签：solid / soft / plain 三种形态，六种语义色，三档尺寸，rounded / pill / half / square 四种轮廓，支持自定义颜色和关闭。
- 控件高度统一为 28 / 32 / 36，按钮、输入框、标签共用；控件文案改用 `--vx-font-control-*`（13 / 14 / 16），按钮和表单标题 500、标签 400、内容和辅助文字 400。
- 演示页新增标签实验室；输入框清除态改为带值展示，自定义尺寸示例跟随新高度。
- vx-input 内部间距收紧：单位与内容留 8px，箭头补 4px，清除图标与箭头、后缀图标对齐右侧基线；预览里的同一组 `label-width` 统一。
- DESIGN.md 补充标签的形态、轮廓、颜色、关闭与自定义颜色规则。

## 0.3.0（2026-10-23）

- 首次发布。包含 vx-button、vx-input、vx-textarea、vx-icon。
- vx-icon 提供 core 112 与 extend 1000，regular / fill 两套。图标来自 Phosphor 2.1.2（MIT）。
- 设计令牌在 `libs/style/variables.css`，页面根节点使用 `vx-theme-light` 或 `vx-theme-dark`。
