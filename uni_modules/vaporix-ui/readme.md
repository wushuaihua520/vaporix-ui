# 元汽UI

**uni-app x 蒸汽模式的高颜值、原生渲染组件库。60 个基础组件、1112 个图标、亮暗两套主题、五端同一套源码，MIT 免费商用。**

<p align="center">
	<img src="https://www.vaporix-ui.com/readme/showcase-catalog.png" width="200" alt="组件目录">
	<img src="https://www.vaporix-ui.com/readme/showcase-button.png" width="200" alt="按钮演示页">
	<img src="https://www.vaporix-ui.com/readme/showcase-card.png" width="200" alt="卡片演示页">
</p>

## 优势

**一个页面从零到上线，不用再引第二个组件库。**

- **原生渲染**：组件是 `.uvue`，蒸汽模式编译成原生视图。App 端不走 WebView，没有第三方运行时。
- **一套令牌**：颜色、字号、间距、圆角、高度全取 `--vx-*`。亮暗主题只换页面根节点一个 class。
- **五端同源**：Android、iOS、鸿蒙、Web、微信小程序共用一份代码，平台差异收在组件内部。
- **不缺件**：基础、表单、反馈、布局、导航五类共 60 件，缺一个控件就得换库的项目也够用。
- **复制即用**：放进 `uni_modules` 自动注册，不用写 `custom` 正则。
- **MIT**：个人和商业项目都能用，不要求署名，不限项目数量。

## 平台

| 端 | 支持 |
| --- | --- |
| Android / iOS / 鸿蒙 / Web / 微信小程序 | √ |
| 其他小程序、uni-app（vue2 / vue3）、nvue | — |

## 环境要求

| 项 | 要求 |
| --- | --- |
| HBuilderX | 5.26 及以上 |
| 项目 | uni-app x，蒸汽模式 |
| 样式隔离 | `manifest.json` 里开启 2.0 |
| App 动效 | `@keyframes` 要 5.31 起，更早版本加载圈不旋转 |

## 接入

1. 把 `vaporix-ui` 目录放到项目的 `uni_modules` 下。

2. 引入令牌。App 端写在 `App.uvue` 的 `<style>` 里：

```vue
<style>
	/* #ifndef WEB */
	@import "@/uni_modules/vaporix-ui/libs/style/variables.css";
	/* #endif */
</style>
```

Web 端在样式隔离 2.0 下改在 `main.uts`：

```ts
// #ifdef WEB
import "@/uni_modules/vaporix-ui/libs/style/variables.css"
// #endif
```

App 端图标字体不需要额外配置：`variables.css` 和 `icons-extend.css` 在 App 分支里内嵌 base64，字体随样式一起进包。Web 用包内 woff2，extend 分四段各带 `unicode-range`，页面只下载用到的段；小程序内嵌 base64。

3. 页面根节点加 `vx-theme-light` 或 `vx-theme-dark`。

4. 组件目录符合 easycom 规范，`autoscan` 会自动注册，不需要写 `custom` 正则：

```json
"easycom": {
	"autoscan": true
}
```

同时安装 `vaporix-ui-pro` 时也不要写一条 `^vx-(.*)`，否则所有 `vx-` 标签都会指向其中一个目录。

## 组件一览

一个组件一个 API 文件，放在包内 `api/` 目录，文件名就是标签名。下表的组件名链到文档站的同名页面。

### 基础

| 组件 | 说明 |
| --- | --- |
| [vx-button](https://www.vaporix-ui.com/components/button) | 按钮，一屏一个实心主操作，支持渐变背景 |
| [vx-icon](https://www.vaporix-ui.com/components/icon) | 图标，core 112 + extend 1000 |
| [vx-text](https://www.vaporix-ui.com/components/text) | 文本，正文、金额、证件格式化 |
| [vx-link](https://www.vaporix-ui.com/components/link) | 超链接，Web 新开标签页，App 复制 |
| [vx-tag](https://www.vaporix-ui.com/components/tag) | 标签，状态和分类 |
| [vx-badge](https://www.vaporix-ui.com/components/badge) | 徽章，计数、短词和圆点 |

### 表单

| 组件 | 说明 |
| --- | --- |
| [vx-input](https://www.vaporix-ui.com/components/input) | 输入框，含搜索变体 |
| [vx-textarea](https://www.vaporix-ui.com/components/textarea) | 多行输入框，字数统计 |
| [vx-number-box](https://www.vaporix-ui.com/components/number-box) | 数字框，加减和输入 |
| [vx-radio-group](https://www.vaporix-ui.com/components/radio) / [vx-radio](https://www.vaporix-ui.com/components/radio) | 单项选择器 |
| [vx-checkbox-group](https://www.vaporix-ui.com/components/checkbox) / [vx-checkbox](https://www.vaporix-ui.com/components/checkbox) | 多项选择器 |
| [vx-switch](https://www.vaporix-ui.com/components/switch) | 开关，含轨道文字 |
| [vx-rate](https://www.vaporix-ui.com/components/rate) | 星级评分，半星和滑动 |
| [vx-datetime](https://www.vaporix-ui.com/components/datetime) | 日期时间滚轮，十种模式 |
| [vx-picker](https://www.vaporix-ui.com/components/picker) | 联动选择，多列滚轮 |
| [vx-calendar](https://www.vaporix-ui.com/components/calendar) | 日历，单日或区间 |
| [vx-form](https://www.vaporix-ui.com/components/form) / [vx-form-item](https://www.vaporix-ui.com/components/form-item) | 表单容器与表单项 |

### 反馈

| 组件 | 说明 |
| --- | --- |
| [vx-tips](https://www.vaporix-ui.com/components/tips) | 消息提示，横幅或浮层 |
| [vx-toast](https://www.vaporix-ui.com/components/toast) | 轻提示，居中短文案 |
| [vx-loading](https://www.vaporix-ui.com/components/loading) | 加载中，含全屏浮层 |
| [vx-loadmore](https://www.vaporix-ui.com/components/loadmore) / [vx-nomore](https://www.vaporix-ui.com/components/nomore) | 列表尾部状态 |
| [vx-no-data](https://www.vaporix-ui.com/components/no-data) | 空状态 |
| [vx-actionsheet](https://www.vaporix-ui.com/components/actionsheet) | 操作菜单 |
| [vx-modal](https://www.vaporix-ui.com/components/modal) | 弹框，可自定义动作 |
| [vx-drawer](https://www.vaporix-ui.com/components/drawer) | 抽屉，四向滑出 |
| [vx-bubble-popup](https://www.vaporix-ui.com/components/bubble-popup) | 气泡弹框，也能做聊天气泡 |
| [vx-popup](https://www.vaporix-ui.com/components/popup) | 弹出层底座 |

### 布局

| 组件 | 说明 |
| --- | --- |
| [vx-list-view](https://www.vaporix-ui.com/components/list-view) / [vx-list-cell](https://www.vaporix-ui.com/components/list-cell) | 列表分组与列表行 |
| [vx-card](https://www.vaporix-ui.com/components/card) | 卡片，头正文底三段 |
| [vx-section](https://www.vaporix-ui.com/components/section) | 区块标题栏 |
| [vx-grid](https://www.vaporix-ui.com/components/grid) / [vx-grid-item](https://www.vaporix-ui.com/components/grid-item) | 宫格 |
| [vx-row](https://www.vaporix-ui.com/components/row) / [vx-col](https://www.vaporix-ui.com/components/col) | 24 栅格，四档断点 |
| [vx-image](https://www.vaporix-ui.com/components/image) | 图片底座，三态回落 |
| [vx-image-group](https://www.vaporix-ui.com/components/image-group) | 图片组合，重叠和多行 |
| [vx-collapse](https://www.vaporix-ui.com/components/collapse) / [vx-collapse-item](https://www.vaporix-ui.com/components/collapse-item) | 折叠面板 |
| [vx-tabs](https://www.vaporix-ui.com/components/tabs) | 页签，含竖排 |
| [vx-sticky](https://www.vaporix-ui.com/components/sticky) | 吸顶容器 |
| [vx-divider](https://www.vaporix-ui.com/components/divider) | 分割线 |
| [vx-white-space](https://www.vaporix-ui.com/components/white-space) | 上下留白 |
| [vx-wing-blank](https://www.vaporix-ui.com/components/wing-blank) | 左右留白 |
| [vx-safe-area](https://www.vaporix-ui.com/components/safe-area) | 安全区占位 |

### 导航与展示

| 组件 | 说明 |
| --- | --- |
| [vx-navigation-bar](https://www.vaporix-ui.com/components/navigation-bar) | 自定义导航栏，滚动渐显 |
| [vx-status-bar](https://www.vaporix-ui.com/components/status-bar) | 状态栏占位 |
| [vx-tabbar](https://www.vaporix-ui.com/components/tabbar) | 底部标签栏，凸起主按钮 |
| [vx-footer](https://www.vaporix-ui.com/components/footer) | 页脚，版权和链接 |
| [vx-swipe-action](https://www.vaporix-ui.com/components/swipe-action) | 滑动菜单 |
| [vx-time-axis](https://www.vaporix-ui.com/components/time-axis) | 时间轴 |
| [vx-steps](https://www.vaporix-ui.com/components/steps) | 步骤条 |
| [vx-progress](https://www.vaporix-ui.com/components/progress) | 进度条 |
| [vx-countdown](https://www.vaporix-ui.com/components/countdown) | 倒计时 |
| [vx-rolling-news](https://www.vaporix-ui.com/components/rolling-news) | 滚动消息轮播 |
| [vx-notice-bar](https://www.vaporix-ui.com/components/notice-bar) | 通告栏 |
| [vx-avatar](https://www.vaporix-ui.com/components/avatar) | 头像，三态回落 |
| [vx-qrcode](https://www.vaporix-ui.com/components/qrcode) | 二维码，view 绘制 |

## API 文档

包内 `api/` 目录每个组件一个文件，顺序固定：示例 → 属性 → 事件 → 插槽 → 方法 → 说明，缺的部分不出现。文件名是 `api/vx-<name>.md`，例如 `api/vx-modal.md`。

- 只想知道有什么组件：上面的清单。
- 想知道某个组件的全部参数：打开 `api/` 下的同名文件，或看文档站的同名页面。
- 想知道多个组件共用的约定（尺寸档位、语义色、`v-model` 写法、弹层的 `cancel()`）：`api/README.md` 末尾有一节。

可交互预览、属性演示和平台差异：https://www.vaporix-ui.com/components

## 和 Pro 的关系

表格、虚拟列表、图片上传、富文本、级联选择、瀑布流等 31 个重型件在付费的 `vaporix-ui-pro`，共用同一套令牌和 `vx-` 前缀，两个模块并列放进 `uni_modules`。已免费的组件不会挪进 Pro。

范围和授权：https://www.vaporix-ui.com/docs/pro

## 约定

- `<script setup>`，不写 `lang`。5.26 按 uts2js 编译 TypeScript 写法，5.31 起默认就是 TypeScript。
- 公共类型在 `libs/types/common.ts`，组件 Props 在同目录 `props.ts`。
- 选择器只用单个 class，组合态写成一个，例如 `vx-button--plain-primary`。
- 颜色、字号、间距、圆角、高度从 `--vx-*` 取；令牌只在 `libs/style/variables.css` 维护一份。
- JS API 需要的色值和时长分别放在 `libs/theme.ts`、`libs/motion.ts`，与 `variables.css` 同步修改。

完整设计规范在源码仓库根目录的 `DESIGN.md`。

## 更新

版本记录见 [`changelog.md`](https://gitee.com/DonkeySmall/vaporix-ui/blob/master/uni_modules/vaporix-ui/changelog.md)，每次发版补一条，升级前先看对应版本。

## 授权

基础组件使用 MIT，全文见 [`license.md`](https://gitee.com/DonkeySmall/vaporix-ui/blob/master/uni_modules/vaporix-ui/license.md)。图标来自 Phosphor 2.1.2（MIT），许可证在 `libs/icons/LICENSE`。
