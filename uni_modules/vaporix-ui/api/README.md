# 元汽UI API

每个组件一个文件，文件名就是标签名。查属性、事件、插槽和方法只看这一份；接入步骤和设计规范在上一层 [`readme.md`](../readme.md)。

| 想查什么 | 去哪 |
| --- | --- |
| 某个组件有哪些属性、事件、插槽、方法 | 下表的同名链接，或直接打开 `vx-<name>.md` |
| 组件长什么样、能做什么 | 文档站 https://www.vaporix-ui.com/components |
| 怎么把库放进项目 | [`readme.md`](../readme.md) 的「快速开始」 |
| 为什么这个尺寸、这个间距 | 仓库根目录 `DESIGN.md` |
| 这一版改了什么 | [`changelog.md`](../changelog.md) |

## 文件结构

每个 `vx-*.md` 都按同一个顺序写，缺的部分不出现：

```
# vx-xxx            一句话说明这个组件是什么、什么时候用
## 示例             能直接抄的 vue 片段，含必要的事件和 ref 调用
## 属性             表格：属性 | 类型 | 默认值 | 说明
## 事件             表格：事件 | 说明 | 参数
## 插槽             表格：插槽 | 说明
## 方法             表格：方法 | 说明，只在组件暴露 ref 方法时出现
## 说明             使用边界、平台差异、迁移说明
```

表格里的类型写成联合类型，例如 `sm | md | lg`、`primary | success | info | warning | danger | default`；默认值用反引号包住原值；参数写实际回传的东西。

## 全组件清单

### 基础

| 组件 | 说明 |
| --- | --- |
| [vx-button](./vx-button.md) | 按钮，一屏一个实心主操作 |
| [vx-icon](./vx-icon.md) | 图标，core 112 + extend 1000 |
| [vx-text](./vx-text.md) | 文本，正文、金额、证件格式化 |
| [vx-link](./vx-link.md) | 超链接，Web 新开标签页，App 复制 |
| [vx-tag](./vx-tag.md) | 标签，状态和分类 |
| [vx-badge](./vx-badge.md) | 徽章，计数、短词和圆点 |

### 表单

| 组件 | 说明 |
| --- | --- |
| [vx-input](./vx-input.md) | 输入框，含搜索变体 |
| [vx-textarea](./vx-textarea.md) | 多行输入框，字数统计 |
| [vx-number-box](./vx-number-box.md) | 数字框，加减和输入 |
| [vx-radio-group](./vx-radio-group.md) | 单项选择器分组 |
| [vx-radio](./vx-radio.md) | 单项 |
| [vx-checkbox-group](./vx-checkbox-group.md) | 多项选择器分组，可选上限 |
| [vx-checkbox](./vx-checkbox.md) | 多项中的一项，支持部分选中 |
| [vx-switch](./vx-switch.md) | 开关，含轨道文字 |
| [vx-rate](./vx-rate.md) | 星级评分，半星和滑动 |
| [vx-datetime](./vx-datetime.md) | 日期时间滚轮，十种模式 |
| [vx-picker](./vx-picker.md) | 联动选择，多列滚轮 |
| [vx-calendar](./vx-calendar.md) | 日历，单日或区间 |
| [vx-form](./vx-form.md) | 表单容器，串行校验 |
| [vx-form-item](./vx-form-item.md) | 表单项，标题和错误行 |

### 反馈

| 组件 | 说明 |
| --- | --- |
| [vx-tips](./vx-tips.md) | 消息提示，横幅或浮层 |
| [vx-toast](./vx-toast.md) | 轻提示，居中短文案 |
| [vx-loading](./vx-loading.md) | 加载中，含全屏浮层 |
| [vx-loadmore](./vx-loadmore.md) | 列表尾部加载中 |
| [vx-nomore](./vx-nomore.md) | 列表到底 |
| [vx-no-data](./vx-no-data.md) | 空状态 |
| [vx-actionsheet](./vx-actionsheet.md) | 操作菜单 |
| [vx-modal](./vx-modal.md) | 弹框，可自定义动作 |
| [vx-drawer](./vx-drawer.md) | 抽屉，四向滑出 |
| [vx-bubble-popup](./vx-bubble-popup.md) | 气泡弹框，也能做聊天气泡 |
| [vx-popup](./vx-popup.md) | 弹出层底座 |

### 布局

| 组件 | 说明 |
| --- | --- |
| [vx-list-view](./vx-list-view.md) | 列表分组 |
| [vx-list-cell](./vx-list-cell.md) | 列表行 |
| [vx-card](./vx-card.md) | 卡片，头正文底三段 |
| [vx-section](./vx-section.md) | 区块标题栏 |
| [vx-grid](./vx-grid.md) | 宫格容器 |
| [vx-grid-item](./vx-grid-item.md) | 宫格项 |
| [vx-row](./vx-row.md) | 栅格行 |
| [vx-col](./vx-col.md) | 栅格列，四档断点 |
| [vx-image](./vx-image.md) | 图片底座，三态回落 |
| [vx-image-group](./vx-image-group.md) | 图片组合，重叠和多行 |
| [vx-collapse](./vx-collapse.md) | 折叠面板容器 |
| [vx-collapse-item](./vx-collapse-item.md) | 折叠项 |
| [vx-tabs](./vx-tabs.md) | 页签，含竖排 |
| [vx-sticky](./vx-sticky.md) | 吸顶容器 |
| [vx-divider](./vx-divider.md) | 分割线 |
| [vx-white-space](./vx-white-space.md) | 上下留白 |
| [vx-wing-blank](./vx-wing-blank.md) | 左右留白 |
| [vx-safe-area](./vx-safe-area.md) | 安全区占位 |

### 导航与展示

| 组件 | 说明 |
| --- | --- |
| [vx-navigation-bar](./vx-navigation-bar.md) | 自定义导航栏，滚动渐显 |
| [vx-status-bar](./vx-status-bar.md) | 状态栏占位 |
| [vx-tabbar](./vx-tabbar.md) | 底部标签栏，凸起主按钮 |
| [vx-footer](./vx-footer.md) | 页脚，版权和链接 |
| [vx-swipe-action](./vx-swipe-action.md) | 滑动菜单 |
| [vx-time-axis](./vx-time-axis.md) | 时间轴 |
| [vx-steps](./vx-steps.md) | 步骤条 |
| [vx-progress](./vx-progress.md) | 进度条 |
| [vx-countdown](./vx-countdown.md) | 倒计时 |
| [vx-rolling-news](./vx-rolling-news.md) | 滚动消息轮播 |
| [vx-notice-bar](./vx-notice-bar.md) | 通告栏 |
| [vx-avatar](./vx-avatar.md) | 头像，三态回落 |
| [vx-qrcode](./vx-qrcode.md) | 二维码，view 绘制 |

## 所有组件共用的约定

- **尺寸**：`size` 只有 `sm | md | lg`，默认 `md`。控件高度 32 / 40 / 48，正文 13 / 15 / 17（行高 20 / 22 / 24），控件文案 14 / 16 / 18。个别组件按自己的令牌分档，写在对应文件里。
- **语义色**：`type` 六种 —— `primary`、`success`、`info`、`warning`、`danger`、`default`。语义色只表达状态，分类和导航用 `default` / `primary`。
- **自定义颜色**：`color`、`bgColor`、`borderColor` 这类 props 是字面值，不跟随亮暗主题；要跟主题时传 `var(--vx-color-*)`。
- **双向绑定**：单个值用 `v-model`，显隐用 `v-model:show`，展开态用 `v-model:open`，区间用 `v-model:start` / `v-model:end`。
- **弹层组件**：`vx-popup`、`vx-modal`、`vx-drawer`、`vx-picker`、`vx-calendar`、`vx-actionsheet`、`vx-bubble-popup`、`vx-tips`、`vx-toast`、`vx-loading` 都挂在页面根节点，和滚动容器平级。打开后用 `ref` 上的 `close()` 收起；返回键用 `cancel()` 收起并抛 `close`：

```ts
onBackPress(() => {
	if (drawerVisible.value !== true) return false
	drawerRef.value?.cancel?.()
	return true
})
```

- **ref 方法**：实例类型按组件名生成（如 `VxCountdownComponentPublicInstance`），和 easycom 组件一样直接用，不需要 import。
- **点击边界**：组件内部可点的元素停在组件上，不冒泡到外层卡片或列表行；插槽里需要独立操作的控件自己 `@click.stop`。
- **选择器**：组件内部只用单个 class，组合态写成一个，例如 `vx-button--plain-primary`。业务覆盖样式时也按这个粒度写。
