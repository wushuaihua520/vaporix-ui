<p align="center"><img src="static/logo.png" width="72" height="72" alt="元汽UI"></p>

# 元汽UI（Vaporix UI）

uni-app x 蒸汽模式的原生渲染组件库。基础组件开源，按 `uni_modules` 组织。

- 中文名：元汽UI
- 英文名：Vaporix UI
- 技术栈：Vue 3 组合式 API、TypeScript、uvue、蒸汽模式
- 平台：Android、iOS、鸿蒙、Web、小程序
- 组件前缀：`vx-`
- 设计令牌：`--vx-*`
- HBuilderX：5.26 及以上。App 端 `@keyframes` 要 5.31 起才支持，5.26 上加载圈可能不旋转。

## 授权

基础组件（按钮、图标、输入框、多行输入框、表单容器、表单项、文本、超链接、单项选择器、多项选择器、开关选择器、数字框、倒计时、步骤条、进度条、操作菜单、气泡弹框、抽屉、弹出层、弹框、日期时间选择器、标签页、标签栏、滑动菜单、标签、徽章、页脚、消息提示、轻提示、评分、列表分组、列表行、折叠面板、折叠项、卡片、标题栏、图片、头像、分割线、安全区、上下留白、左右留白、宫格、宫格项、栅格布局、多端适配、图片组合、二维码、加载中、加载更多、没有更多、暂无数据、吸顶容器、导航栏、状态栏、时间轴、滚动消息、通告栏，以及后续同类基础组件）使用 [MIT](./LICENSE)，个人和商业项目都可以用。

图标来自 Phosphor 2.1.2（MIT），分 core 112 / extend 1000 两档，每档都有 regular / fill；许可证全文随组件放在 `uni_modules/vaporix-ui/libs/icons/LICENSE`。core 默认加载，extend 按需引入 `libs/style/icons-extend.css`。

高级组件单独销售（`vaporix-ui-pro`），不包含在本仓库；范围、价格与授权见文档站的「Pro 组件」页。

## 目录

```
vaporix-ui/
├── DESIGN.md                          设计规范
├── App.uvue                           应用入口，非 Web 端引入令牌和演示样式
├── main.uts                           创建应用；Web 端引入令牌和演示样式
├── manifest.json                      蒸汽模式、样式隔离 2.0
├── pages.json                         路由、easycom 和原生 tabBar
├── pages/
│   ├── index/index.uvue               组件目录（第一个 tab）
│   ├── api/api.uvue                   接口目录（第二个 tab）
│   ├── api-detail/api-detail.uvue     JS 接口详情与可运行示例
│   ├── mine/mine.uvue                 我的（第三个 tab）：外观、文档和版本
│   └── demo/
│       ├── shared/                    目录数据、主题状态、演示页公共 CSS
│       ├── button/button.uvue         组件演示页，按组件一页
│       └── …                          其余 53 个组件演示页
├── static/
│   ├── tabbar/                        tabBar 图标（亮 / 暗 × 常规 / 选中）
│   └── demo/                          轻提示和卡片演示素材
└── uni_modules/vaporix-ui/
    ├── package.json
    ├── readme.md                      组件 API
    ├── libs/style/variables.css       设计令牌与 core 图标字体声明
    ├── libs/style/icons-extend.css    extend 图标字体声明（可选）
    ├── libs/types/common.ts           尺寸、语义色
    ├── libs/theme.ts                  JS API 用的主题色
    ├── libs/motion.ts                 按下态和加载旋转时长常量
    ├── libs/rate.ts                   评分手势用的像素常量
    ├── libs/swipe-action.ts           滑动菜单的像素常量和实例登记
    ├── libs/datetime.ts               日期时间的模式、解析、格式化和天数
    ├── libs/calendar.ts               公历网格、星期和翻月
    ├── libs/form.ts                   表单规则引擎与内置校验文案
    ├── libs/overlay.ts                弹层层级、时长、安全区和滚动锁常量
    ├── libs/lunar.ts                  公历转农历
    ├── libs/qrcode.ts                 二维码编码、分块、掩码与边长常量
    ├── libs/icons/codepoints.ts       图标名、码点与 core/extend tier
    ├── libs/icons/LICENSE             图标上游许可证
    ├── static/fonts/vx-icons.ttf      core regular
    ├── static/fonts/vx-icons-fill.ttf core fill
    ├── static/fonts/vx-icons-extend.ttf extend regular
    ├── static/fonts/vx-icons-extend-fill.ttf extend fill
    └── components/                    组件，一个目录一个组件
```

## 本地运行

1. 用 HBuilderX 5.26+ 打开本目录。当前工程按 5.26 编写。
2. 在 `manifest.json` 可视化界面确认已勾选蒸汽模式。换机器后点「重新获取」生成自己的 appid。
3. 运行到浏览器做快速查看，或连接真机运行到 Android / iOS。浏览器走 VDOM，不能代表 App 蒸汽模式。
4. 首页是「组件」目录；底部原生 tabBar 切换组件 / 接口 / 我的。

## 示例项目

示例本体是一个三 tab 的 uni-app x 应用：

- **组件**：54 个组件演示页，按基础 / 表单 / 反馈 / 布局 / 导航与展示分类。点分类下的组件进入独立页面，首屏不再一次性渲染全部区块。
- **接口**：libs 里 6 个可独立引用的 JS 模块，另有表单规则引擎 `libs/form.ts`；配有可运行的取值、图标搜索、日期格式化、日历和农历示例。
- **我的**：亮色 / 暗色外观、文档路径和版本信息。

主题状态在 `pages/demo/shared/theme.ts`，内存和本地缓存双写，同时同步原生导航栏、窗口底色和原生 tabBar（含亮 / 暗两套图标）。页面根节点仍只用 `vx-theme-light` / `vx-theme-dark` 切令牌。

新增组件演示页：

1. 在 `pages/demo/<name>/<name>.uvue` 写页面。
2. 在 `pages.json` 注册路由。
3. 在 `pages/demo/shared/catalog.ts` 的 `DEMO_COMPONENTS` 里登记分类、图标、说明和示例数量。

## App 端已知警告

HBuilderX 5.26 的 App 蒸汽模式还不支持 CSS `@keyframes`，`vx-button` 和 `vx-loading` 的加载头会静态显示，编译日志会出现 `animation-*` 与 `@keyframes` 不受支持的提示。升级到 5.31 及以上即可恢复动画并消除这些提示。

其余 Web 专用样式（`cursor`、百分比 `max-width`、`@font-face` 的 `font-weight` / `font-style` / `font-display`、`aria-hidden`）已经移除或用条件编译隔离，App 端不再报相关提示。

## 使用

```vue
<template>
	<view class="vx-theme-light">
		<vx-icon name="search" />
		<vx-icon name="check" type="success" />
		<vx-icon name="info" type="info" />
		<vx-icon name="heart" variant="fill" />
		<vx-input v-model="keyword" placeholder="请输入关键词" clearable />
		<vx-number-box v-model="quantity" :min="1" :max="99" />
		<vx-countdown :time="967" type="danger" />
		<vx-countdown :time="239953" show-days separator="unit" variant="soft" />
		<vx-steps :items="checkoutSteps" :active="1" />
		<vx-steps :items="checkoutSteps" :active="1" variant="number" />
		<vx-steps direction="vertical" :items="checkoutSteps" :active="1" type="success" />
		<vx-steps :items="checkoutSteps" :active="1" line-style="dashed" />
		<vx-tabs v-model="tabActive" :items="tabs" />
		<vx-tabs v-model="tabActive" :items="tabs" variant="soft" />
		<vx-tabs v-model="tabActive" :items="tabs" variant="inverse" />
		<vx-tabbar v-model="tabbarActive" :items="tabbarTabs" />
		<vx-tabbar v-model="tabbarActive" :items="tabbarTabs" :fixed="false" />
		<vx-tabbar v-model="tabbarActive" :items="tabbarRaised" :fixed="false" />
		<vx-swipe-action :name="order.id" :actions="swipeActions">
			<vx-list-cell title="向左滑查看操作" :divider="false" />
		</vx-swipe-action>
		<vx-collapse v-model="openPanels">
			<vx-collapse-item name="ship" title="配送与运费">
				<text>满 99 元包邮，偏远地区加收 10 元运费。</text>
			</vx-collapse-item>
			<vx-collapse-item name="return" title="退换货政策">
				<text>签收后 7 天内支持无理由退货。</text>
			</vx-collapse-item>
		</vx-collapse>
		<vx-textarea v-model="intro" label="简介" label-width="72px" required counter :maxlength="140" />
		<vx-tag type="primary" text="标签" />
		<vx-tag type="success" variant="soft" text="已完成" />
		<vx-tag type="warning" variant="plain" size="sm" text="待处理" />
		<vx-tag type="danger" shape="half" closable text="已过期" @close="removeTag" />
		<vx-button text="确定" type="primary" size="lg" />
		<vx-button text="继续" type="primary">
			<vx-icon name="chevron-right" color="var(--vx-color-on-primary)" />
		</vx-button>
		<vx-button text="删除" type="danger" variant="plain" />
		<vx-button text="稍后处理" type="default" variant="soft" shape="pill" />
		<vx-button text="查看说明" type="info" variant="soft" />
		<vx-button text="查看详情" type="primary" variant="link" />
		<vx-button text="加载中" type="primary" :loading="true" />
		<vx-badge :value="12" />
		<vx-badge :value="88" type="default" />
		<vx-badge type="danger" dot />
		<vx-badge absolute ring :value="9" type="danger" size="sm">
			<vx-icon name="bell" size="lg" />
		</vx-badge>
		<vx-footer :links="footerLinks" copyright="© 2026 Vaporix UI · MIT" @click="onFooterLink" />
		<vx-tips v-model:show="tipsVisible" text="已保存" type="success" />
		<vx-tips v-model:show="tipsVisible" position="top" type="warning" text="网络已断开" />
		<vx-toast v-model:show="toastVisible" text="操作成功" type="success" />
		<vx-toast v-model:show="toastVisible" text="操作失败" type="danger" />
		<vx-toast v-model:show="toastVisible" type="success" icon="heart" text="已加入收藏" />
		<vx-actionsheet v-model:show="sheetVisible" description="确认退出登录吗？" :items="sheetItems" />
		<vx-drawer v-model:show="drawerVisible" title="筛选" closable>
			<vx-tag type="primary" variant="soft" text="包邮" />
		</vx-drawer>
		<vx-drawer v-model:show="shareVisible" position="bottom" height="42%">
			<text>分享面板</text>
		</vx-drawer>
		<vx-actionsheet v-model:show="sheetVisible" title="选择您的性别" :items="genderItems"
			@select="onGenderSelect" />
		<vx-modal v-model:show="modalVisible" title="提示" content="确认提交本次修改吗？"
			@confirm="onConfirm" />
		<vx-datetime v-model="bookDate" v-model:show="dateVisible" mode="date" title="选择预约日期" />
		<vx-datetime v-model="bookTime" v-model:show="timeVisible" mode="time" format="HH:mm" />
		<vx-rate v-model="score" show-text />
		<vx-rate v-model="score" allow-half show-text />
		<vx-rate :model-value="3.45" readonly />
		<vx-list-view title="账户与订单">
			<vx-list-cell title="我的钱包" value="¥128.00" arrow @click="openWallet" />
			<vx-list-cell title="收货地址" value="上海市浦东新区" arrow :divider="false" />
		</vx-list-view>
		<vx-list-view title="通知设置" variant="plain">
			<vx-list-cell title="系统通知" value="已开启" arrow :divider="false" />
		</vx-list-view>
		<vx-card title="CSDN云计算" meta="1小时前" avatar="/static/demo/card/avatar-cs.png"
			content="卡片正文" footer="来源 · Vaporix UI" />
		<vx-section title="今日推荐" description="根据你的浏览记录更新。" marker />
		<vx-section title="账户安全" description="最近 30 天内更新" variant="soft" marker />
		<vx-grid>
			<vx-grid-item :columns="3" :index="0" icon="wallet" title="钱包" />
			<vx-grid-item :columns="3" :index="1" icon="receipt" title="订单" />
			<vx-grid-item :columns="3" :index="2" icon="settings" title="设置" />
		</vx-grid>
		<vx-bubble-popup v-model:show="menuVisible" placement="bottom" align="end" :items="menuItems">
			<vx-button text="更多" @click="menuVisible = !menuVisible" />
		</vx-bubble-popup>
	</view>
</template>
```

core 112 个图标默认可用；extend 1000 个需要在 `App.uvue` 的全局样式里额外引入 `@/uni_modules/vaporix-ui/libs/style/icons-extend.css`，否则扩展字形不会加载。

主题来自页面根节点的 `vx-theme-light` / `vx-theme-dark`。

接入步骤和属性表见 [`uni_modules/vaporix-ui/readme.md`](./uni_modules/vaporix-ui/readme.md)。设计数值见 [`DESIGN.md`](./DESIGN.md)。

## 开发约定

1. 组件使用 `<script setup>`，不写 `lang`。5.26 会按 uts2js 编译 TypeScript 写法；5.31 起默认就是 TypeScript，仍然不要补 `lang`。
2. 组件实现不写 UTS。原生插件才放 `utssdk/`。
3. `size` 只有 `sm`、`md`、`lg`，默认 `md`。
4. 样式只用单个 class 选择器。组合态写成一个 class，例如 `vx-button--plain-primary`。
5. 新增组件要补独立演示页，在 `pages/demo/shared/catalog.ts`、`pages.json` 和组件库 readme 登记。新增令牌要同时改亮色、暗色和 `DESIGN.md`。

## 参与贡献

1. Fork 本仓库
2. 新建 `feat/组件名` 分支
3. 提交代码
4. 新建 Pull Request
