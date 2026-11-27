<p align="center">
	<img src="https://www.vaporix-ui.com/logo-tile.png" width="88" height="88" alt="元汽UI">
</p>

<h1 align="center">元汽UI · Vaporix UI</h1>

<p align="center">
	uni-app x 蒸汽模式的高颜值、原生渲染组件库<br>
</p>

<p align="center">
	60+ 个组件 · 1112 个图标 · 亮暗两套令牌 · 免费层 MIT
</p>

<p align="center">
	<a href="https://www.vaporix-ui.com">文档</a> ·
	<a href="https://www.vaporix-ui.com/components">组件</a> ·
	<a href="https://www.vaporix-ui.com/docs/install">安装</a> ·
	<a href="https://ext.dcloud.net.cn/plugin?name=vaporix-ui">插件市场</a> ·
	<a href="https://www.vaporix-ui.com/docs/pro">Pro 组件</a> ·
	<a href="./changelog.md">更新日志</a>
</p>

<p align="center">
	<a href="https://www.vaporix-ui.com/docs/install"><img src="https://img.shields.io/badge/uni--app%20x-%E8%92%B8%E6%B1%BD%E6%A8%A1%E5%BC%8F-2b6be0?style=flat-square" alt="uni-app x 蒸汽模式"></a>
	<a href="https://www.vaporix-ui.com/docs/install"><img src="https://img.shields.io/badge/HBuilderX-5.26%2B-6b7280?style=flat-square" alt="HBuilderX 5.26 及以上"></a>
	<a href="https://www.vaporix-ui.com/components"><img src="https://img.shields.io/badge/%E7%BB%84%E4%BB%B6-60-2b6be0?style=flat-square" alt="60+ 个组件"></a>
	<a href="https://www.vaporix-ui.com/components/icon"><img src="https://img.shields.io/badge/%E5%9B%BE%E6%A0%87-1112-0b7c46?style=flat-square" alt="1112 个图标"></a>
	<a href="./license.md"><img src="https://img.shields.io/badge/license-MIT-1a1d26?style=flat-square" alt="MIT 许可"></a>
</p>

<p align="center">
	官网链接：<a href="https://www.vaporix-ui.com">https://www.vaporix-ui.com</a>
</p>

<p align="center">
	<img src="https://gitee.com/DonkeySmall/vaporix-ui/raw/master/static/readme/vaporix-ui_cover.jpg" alt="一套组件，多端原生运行">
</p>

## 设计概念

冷色、低饱和、细描边。层级靠留白和 1px 描边，阴影只给浮层。

| 项 | 取值 |
| --- | --- |
| 令牌 | 颜色、字号、间距、圆角、高度全取 `--vx-*`，亮暗各一份 |
| 字号 | 页面品牌 28、区块标题 17、正文 15、辅助 13 |
| 控件 | 高度 32 / 40 / 48，文案 14 / 16 / 18 |
| 圆角 | 控件 6 / 8 / 10，容器 8，贴边面板 12 |
| 动效 | 按下 120ms，过渡 220ms，加载旋转 700ms |

## 截图

<p align="center">
	<img src="https://www.vaporix-ui.com/readme/showcase-catalog.png" width="200" alt="组件目录">
	<img src="https://www.vaporix-ui.com/readme/showcase-button.png" width="200" alt="按钮演示页">
	<img src="https://www.vaporix-ui.com/readme/showcase-card.png" width="200" alt="卡片演示页">
</p>

<p align="center">
	<sub>组件目录 · 按钮 · 卡片（Web 演示，App 为原生渲染）</sub>
</p>

## 为什么用元汽UI

| 能力 | 说明 |
| --- | --- |
| **原生渲染** | 蒸汽模式把 uvue 编译成原生视图，App 端不走 WebView。 |
| **免费层不缺件** | 60 个组件够空项目走到上线，Pro 只补高配版和重型件。 |
| **复制即用** | 放进 `uni_modules`，easycom 自动扫描。引令牌、开蒸汽模式即可。 |
| **图标够用** | Phosphor 2.1.2，core 112 默认加载，extend 1000 按需引入。 |

## 平台

| 端 | 支持 |
| --- | --- |
| Android / iOS / 鸿蒙 / Web / 微信小程序 | √ |
| 其他小程序、uni-app（vue2 / vue3）、nvue | — |

## 快速开始

| 项 | 要求 |
| --- | --- |
| HBuilderX | 5.26 及以上 |
| 项目 | uni-app x，蒸汽模式 |
| 样式隔离 | `manifest.json` 里开启 2.0 |
| App 动效 | `@keyframes` 要 5.31 起，更早版本加载圈不旋转 |

**1. 放入模块**

从 [DCloud 插件市场](https://ext.dcloud.net.cn/plugin?name=vaporix-ui) 导入，或把本目录复制到项目的 `uni_modules` 下。

**2. 引入令牌**

App 端在 `App.uvue`：

```vue
<style>
	/* #ifndef WEB */
	@import "@/uni_modules/vaporix-ui/libs/style/variables.css";
	/* #endif */
</style>
```

Web 端在 `main.uts`：

```ts
// #ifdef WEB
import "@/uni_modules/vaporix-ui/libs/style/variables.css"
// #endif
```

App 端图标字体随样式进包：`variables.css` 和 `icons-extend.css` 在 App 分支里内嵌 base64。Web 用包内 woff2，extend 分四段，各带 `unicode-range`，页面只下载用到的段。小程序内嵌 base64。

**3. 开蒸汽模式，挂主题**

`manifest.json`：

```json
{
	"uni-app-x": {
		"vapor": true,
		"styleIsolationVersion": "2",
		"vapor-render-target": "bytecode"
	}
}
```

页面根节点挂 `vx-theme-light` 或 `vx-theme-dark`：

```vue
<template>
	<view class="vx-theme-light">
		<vx-input v-model="keyword" placeholder="请输入关键词" clearable />
		<vx-tag type="success" variant="soft" text="已完成" />
		<vx-button text="确定" type="primary" size="lg" />
	</view>
</template>
```

easycom 自动扫描，组件直接使用。同时安装 `vaporix-ui-pro` 时也保持自动扫描。写了 `^vx-(.*)` 的话，所有 `vx-` 标签都会指到其中一个目录。

属性表在包内 `api/vx-<name>.md`，也可看[组件文档](https://www.vaporix-ui.com/components)。

## 组件一览

| 分类 | 数量 | 组件 |
| --- | :---: | --- |
| 基础 | 6 | [按钮](https://www.vaporix-ui.com/components/button) · [图标](https://www.vaporix-ui.com/components/icon) · [标签](https://www.vaporix-ui.com/components/tag) · [徽章](https://www.vaporix-ui.com/components/badge) · [文本](https://www.vaporix-ui.com/components/text) · [超链接](https://www.vaporix-ui.com/components/link) |
| 表单 | 12 | [输入框](https://www.vaporix-ui.com/components/input) · [多行输入框](https://www.vaporix-ui.com/components/textarea) · [数字框](https://www.vaporix-ui.com/components/number-box) · [单项选择器](https://www.vaporix-ui.com/components/radio) · [多项选择器](https://www.vaporix-ui.com/components/checkbox) · [开关选择器](https://www.vaporix-ui.com/components/switch) · [评分](https://www.vaporix-ui.com/components/rate) · [日期时间](https://www.vaporix-ui.com/components/datetime) · [联动选择](https://www.vaporix-ui.com/components/picker) · [日历](https://www.vaporix-ui.com/components/calendar) · [表单](https://www.vaporix-ui.com/components/form) · [表单项](https://www.vaporix-ui.com/components/form-item) |
| 反馈 | 11 | [消息提示](https://www.vaporix-ui.com/components/tips) · [轻提示](https://www.vaporix-ui.com/components/toast) · [加载中](https://www.vaporix-ui.com/components/loading) · [加载更多](https://www.vaporix-ui.com/components/loadmore) · [没有更多](https://www.vaporix-ui.com/components/nomore) · [暂无数据](https://www.vaporix-ui.com/components/no-data) · [操作菜单](https://www.vaporix-ui.com/components/actionsheet) · [弹框](https://www.vaporix-ui.com/components/modal) · [抽屉](https://www.vaporix-ui.com/components/drawer) · [气泡弹框](https://www.vaporix-ui.com/components/bubble-popup) · [弹出层](https://www.vaporix-ui.com/components/popup) |
| 布局 | 18 | [列表分组](https://www.vaporix-ui.com/components/list-view) · [列表行](https://www.vaporix-ui.com/components/list-cell) · [卡片](https://www.vaporix-ui.com/components/card) · [标题栏](https://www.vaporix-ui.com/components/section) · [上下留白](https://www.vaporix-ui.com/components/white-space) · [左右留白](https://www.vaporix-ui.com/components/wing-blank) · [宫格](https://www.vaporix-ui.com/components/grid) · [宫格项](https://www.vaporix-ui.com/components/grid-item) · [栅格布局](https://www.vaporix-ui.com/components/row) · [多端适配](https://www.vaporix-ui.com/components/col) · [图片组合](https://www.vaporix-ui.com/components/image-group) · [折叠面板](https://www.vaporix-ui.com/components/collapse) · [折叠项](https://www.vaporix-ui.com/components/collapse-item) · [标签页](https://www.vaporix-ui.com/components/tabs) · [吸顶容器](https://www.vaporix-ui.com/components/sticky) · [图片](https://www.vaporix-ui.com/components/image) · [分割线](https://www.vaporix-ui.com/components/divider) · [安全区](https://www.vaporix-ui.com/components/safe-area) |
| 导航与展示 | 13 | [二维码](https://www.vaporix-ui.com/components/qrcode) · [导航栏](https://www.vaporix-ui.com/components/navigation-bar) · [状态栏](https://www.vaporix-ui.com/components/status-bar) · [标签栏](https://www.vaporix-ui.com/components/tabbar) · [页脚](https://www.vaporix-ui.com/components/footer) · [滑动菜单](https://www.vaporix-ui.com/components/swipe-action) · [时间轴](https://www.vaporix-ui.com/components/time-axis) · [步骤条](https://www.vaporix-ui.com/components/steps) · [进度条](https://www.vaporix-ui.com/components/progress) · [倒计时](https://www.vaporix-ui.com/components/countdown) · [滚动消息](https://www.vaporix-ui.com/components/rolling-news) · [通告栏](https://www.vaporix-ui.com/components/notice-bar) · [头像](https://www.vaporix-ui.com/components/avatar) |

上表是免费层，Pro 见下一节。

## Pro 组件

31 个组件，与免费层共用一套 `--vx-*` 令牌和 `vx-` 前缀，并列放在 `uni_modules`，easycom 一起扫描。免费层已有的组件继续留在免费层。

| 类型 | 组件 |
| --- | --- |
| 重型件 | [表格](https://www.vaporix-ui.com/components/table) · [虚拟列表](https://www.vaporix-ui.com/components/virtual-list) · [图片上传](https://www.vaporix-ui.com/components/upload) · [富文本](https://www.vaporix-ui.com/components/rich-text) · [拖拽排序](https://www.vaporix-ui.com/components/drag-list) |
| 组合件 | [页面容器](https://www.vaporix-ui.com/components/page)：导航栏、下拉刷新、触底加载收成一件 |
| 选择与输入 | [选择框](https://www.vaporix-ui.com/components/select) · [级联选择](https://www.vaporix-ui.com/components/cascader) · [树型菜单](https://www.vaporix-ui.com/components/tree-view) · [滑动选择](https://www.vaporix-ui.com/components/slider) · [分段器](https://www.vaporix-ui.com/components/segmented-control) · [数据选择器](https://www.vaporix-ui.com/components/data-checkbox) · [验证码输入框](https://www.vaporix-ui.com/components/code-input) · [数字键盘](https://www.vaporix-ui.com/components/keyboard) · [数字键盘输入框](https://www.vaporix-ui.com/components/keyboard-input) |
| 展示与动效 | [图片预览](https://www.vaporix-ui.com/components/gallery) · [轮播图](https://www.vaporix-ui.com/components/swiper) · [瀑布流](https://www.vaporix-ui.com/components/waterfall) · [滚动列表](https://www.vaporix-ui.com/components/scroll-list) · [索引列表](https://www.vaporix-ui.com/components/index-list) · [分隔列表](https://www.vaporix-ui.com/components/divide-list) · [分页器](https://www.vaporix-ui.com/components/pagination) · [筛选栏](https://www.vaporix-ui.com/components/dropdown) · [环形进度条](https://www.vaporix-ui.com/components/circular-progress) · [数字动画](https://www.vaporix-ui.com/components/count-to) · [骨架屏](https://www.vaporix-ui.com/components/skeleton) · [加载动画](https://www.vaporix-ui.com/components/loader) · [提示页](https://www.vaporix-ui.com/components/msg) · [压屏窗](https://www.vaporix-ui.com/components/landscape) · [新手引导](https://www.vaporix-ui.com/components/guide) · [返回顶部](https://www.vaporix-ui.com/components/back-top) |

详见 [Pro 组件](https://www.vaporix-ui.com/docs/pro)。

## API

包内 `api/` 每个组件一个文件，文件名是 `api/vx-<name>.md`。顺序固定：示例、属性、事件、插槽、方法、说明，缺的部分不出现。多个组件共用的约定在 [`api/README.md`](./api/README.md) 末尾。

## 约定

- `<script setup>`，不写 `lang`。5.26 按 uts2js 编译，5.31 起默认 TypeScript。
- `size` 只有 `sm | md | lg`，默认 `md`。
- 样式只用单个 class，组合态写成一个，例如 `vx-button--plain-primary`。
- 颜色、字号、间距、圆角、高度从 `--vx-*` 取，只在 `libs/style/variables.css` 维护一份。脚本里用到的色值和时长在 `libs/theme.ts`、`libs/motion.ts`，改令牌时一起改。

数值以源码仓库根目录的 [DESIGN.md](https://gitee.com/DonkeySmall/vaporix-ui/blob/master/DESIGN.md) 为准。

## 更新

版本记录见 [changelog.md](./changelog.md)。升级前先看对应版本。

## 授权

| 范围 | 内容 | 许可 |
| --- | --- | --- |
| 免费层 | 60 个组件、1112 个图标、设计令牌 | [MIT](./license.md)，个人和商业项目都能用 |
| 高级层 `vaporix-ui-pro` | 表格、虚拟列表、图片预览等 31 个组件 | 单独销售，见 [Pro 组件](https://www.vaporix-ui.com/docs/pro) |

图标来自 Phosphor 2.1.2（MIT），许可全文在 `libs/icons/LICENSE`。
