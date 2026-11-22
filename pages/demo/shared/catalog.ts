/* 组件目录：演示页元数据。新增演示页时在这里登记，同时补 pages.json 路由。 */

export type DemoComponent = {
	key: string
	name: string
	en: string
	icon: string
	category: string
	desc: string
}

export const DEMO_CATEGORIES: string[] = ['基础', '表单', '反馈', '布局', '导航与展示']

export const DEMO_COMPONENTS: DemoComponent[] = [
	{ key: 'button', name: '按钮', en: 'vx-button', icon: 'check-circle', category: '基础', desc: '一套按钮覆盖主操作、次操作、危险操作和纯文字链接，加载与禁用不改尺寸。' },
	{ key: 'icon', name: '图标', en: 'vx-icon', icon: 'star', category: '基础', desc: 'core 112 个默认加载，extend 1000 个按需引入；尺寸只有 14 / 18 / 22 三档。' },
	{ key: 'tag', name: '标签', en: 'vx-tag', icon: 'tag', category: '基础', desc: '标签只承载展示与关闭，没有点击态；自定义颜色分文字、底色和描边三处。' },
	{ key: 'badge', name: '徽章', en: 'vx-badge', icon: 'bell', category: '基础', desc: '默认危险色表达未读；计数封顶 99，圆点在计数前生效，叠图标时加一圈描边。' },
	{ key: 'input', name: '输入框', en: 'vx-input', icon: 'edit', category: '表单', desc: '描边盒与表单行两种形态，标题与内容同字号，靠字重和颜色分层。' },
	{ key: 'textarea', name: '多行输入框', en: 'vx-textarea', icon: 'file-text', category: '表单', desc: '和输入框共用一套令牌，标题顶端对齐，计数与扩展放在内容区底部。' },
	{ key: 'text', name: '文本', en: 'vx-text', icon: 'text-aa', category: '基础', desc: '正文、说明、金额和证件都用同一套字号、字重和语义色。内联按内容宽，block 铺满父级；截断、格式化和复制都在同一个组件上。' },
	{ key: 'link', name: '超链接', en: 'vx-link', icon: 'link', category: '基础', desc: '正文里的文字入口：Web 新开标签页，App 和小程序复制链接并提示；电话和邮箱按平台交给系统。' },
	{ key: 'number-box', name: '数字框', en: 'vx-number-box', icon: 'plus', category: '表单', desc: '减号、输入区和加号三段式，边界状态和浮点精度都由组件收口。' },
	{ key: 'radio', name: '单项选择器', en: 'vx-radio', icon: 'radio-button', category: '表单', desc: '一组只选一项。分组管排布、标记和语义色，单项管文案、说明和自己那一档颜色。' },
	{ key: 'checkbox', name: '多项选择器', en: 'vx-checkbox', icon: 'check-square', category: '表单', desc: '一组可选多项。分组管排布、标记、上限和全选，单项管文案、说明和部分选中。' },
	{ key: 'switch', name: '开关选择器', en: 'vx-switch', icon: 'toggle-right', category: '表单', desc: '布尔切换。v-model 立即写回；list 排布让整行可点，loading 期间拦下点击并保持当前状态；轨道文字随状态换边。' },
	{ key: 'rate', name: '评分', en: 'vx-rate', icon: 'star', category: '表单', desc: '星形三档尺寸，选中琥珀色；分值文字与滑动阈值都按像素对齐。' },
	{ key: 'datetime', name: '日期时间', en: 'vx-datetime', icon: 'calendar', category: '表单', desc: '底部滚轮只改草稿，点确定才写回 v-model；取消和遮罩都不动已选值。' },
	{ key: 'picker', name: '联动选择', en: 'vx-picker', icon: 'map-pin', category: '表单', desc: '树形数据按 children 逐级联动。滚动只改草稿，点确定才写回；分支提前结束时列数跟着少一列。' },
	{ key: 'calendar', name: '日历', en: 'vx-calendar', icon: 'calendar', category: '表单', desc: '42 格固定网格，五周和六周按当月收行；弹层点确定才写回模型。' },
	{ key: 'form', name: '表单', en: 'vx-form · vx-form-item', icon: 'list-checks', category: '表单', desc: '不托管数据，只按注册顺序串行校验；错误落在控件下方，必要时滚到第一项。' },
	{ key: 'tips', name: '消息提示', en: 'vx-tips', icon: 'info', category: '反馈', desc: '一条浮层覆盖六种语义和三种位置，浮层不占布局，默认两秒收起。' },
	{ key: 'toast', name: '轻提示', en: 'vx-toast', icon: 'check-circle', category: '反馈', desc: '图标加一句文案，点浮层可以提前关闭；默认半透明底，字和图标始终不透明。' },
	{ key: 'loading', name: '加载与尾部', en: 'vx-loading · vx-loadmore · vx-nomore', icon: 'loader-circle', category: '反馈', desc: '前两个共用一套转圈，后两个共用一套尾部节奏；浮层和行内都能用。' },
	{ key: 'no-data', name: '暂无数据', en: 'vx-no-data', icon: 'folder', category: '反馈', desc: '内置线稿、字体图标、自定义图片和插槽都能换，动作和文案一起收尾。' },
	{ key: 'actionsheet', name: '操作菜单', en: 'vx-actionsheet', icon: 'menu', category: '反馈', desc: '动作行沿用列表行高度，标题和说明分两档；取消与动作之间留一条间隔带。' },
	{ key: 'modal', name: '弹框', en: 'vx-modal', icon: 'message-square', category: '反馈', desc: '居中对话框，动作取紧凑高度；确认可异步、可禁用，遮罩和关闭方式都能配。' },
	{ key: 'drawer', name: '抽屉', en: 'vx-drawer', icon: 'menu', category: '反馈', desc: '贴着屏幕一条边，面板只圆朝向页面的两个角；长内容在面板内部滚动。' },
	{ key: 'bubble-popup', name: '气泡弹框', en: 'vx-bubble-popup', icon: 'message-square', category: '反馈', desc: '贴着触发元素打开的轻量菜单，也可以排成行内聊天气泡。打开时量一次触发区位置和面板尺寸，方向和间距由 placement、align 和 offset 落点。' },
	{ key: 'list-view', name: '列表', en: 'vx-list-view · vx-list-cell', icon: 'list', category: '布局', desc: '分组和行可以一起用，也可以各自独立；双行说明、箭头和按下态各就各位。' },
	{ key: 'card', name: '卡片', en: 'vx-card', icon: 'layout-dashboard', category: '布局', desc: '卡片只保留描边一种层级，标题、正文、meta 和 footer 按尺寸取档。' },
	{ key: 'section', name: '标题栏', en: 'vx-section', icon: 'layout-dashboard', category: '布局', desc: '一个区块的标题层：标题、说明、竖线、分割线和右侧短操作。' },
	{ key: 'white-space', name: '上下留白', en: 'vx-white-space', icon: 'arrow-down', category: '布局', desc: '只做纵向间隔：三档间距、自定义高度，和页面节奏一起排。' },
	{ key: 'wing-blank', name: '左右留白', en: 'vx-wing-blank', icon: 'align-left', category: '布局', desc: '只加左右内边距：三档间距、自定义宽度，页面边距只收一次。' },
	{ key: 'grid', name: '宫格', en: 'vx-grid · vx-grid-item', icon: 'grid-2x2', category: '布局', desc: '按列数均分宽度，格子高度三档；图片用 32 / 40 / 48 的方框按比例展示。' },
	{ key: 'row', name: '栅格布局', en: 'vx-row · vx-col', icon: 'rows', category: '布局', desc: '行管排列，列管占宽。24 份制，一份是行宽的 4.1667%；列间距一半铺在列两侧，行用等量负外边距抵掉外侧半格。' },
	{ key: 'col', name: '多端适配', en: 'vx-col', icon: 'columns', category: '布局', desc: '列管占宽：24 栅格跨度、左侧偏移、视觉位移和断点。蒸汽模式没有 @media，断点按窗口宽度在脚本里算。' },
	{ key: 'image-group', name: '图片组合', en: 'vx-image-group', icon: 'image', category: '布局', desc: '方框 40 / 64 / 88 三档，offset 控制贴边、留缝和堆叠；多行只走 wrap。' },
	{ key: 'qrcode', name: '二维码', en: 'vx-qrcode', icon: 'qr-code', category: '导航与展示', desc: '字节模式编码，自动选版本；模块按整数像素铺开，中心图标和纠错级别一起用。' },
	{ key: 'collapse', name: '折叠面板', en: 'vx-collapse · vx-collapse-item', icon: 'chevron-down', category: '布局', desc: '标题行沿用列表行高度，展开用 220ms 过渡；默认展开的面板不会滑进来。' },
	{ key: 'tabs', name: '标签页', en: 'vx-tabs', icon: 'layout-dashboard', category: '布局', desc: '一屏 2–5 个页签，不横向滚动；选中态靠字重、文字色和短线 / 胶囊分层。' },
	{ key: 'sticky', name: '吸顶容器', en: 'vx-sticky', icon: 'map-pin', category: '布局', desc: '吸顶前透明，贴顶后铺 surface 底加 1px 分割线；suffix 决定吸顶范围。' },
	{ key: 'navigation-bar', name: '导航栏', en: 'vx-navigation-bar', icon: 'compass', category: '导航与展示', desc: '标题居中单行省略，右侧动作和标题行下方各留插槽；固定实例自带占位。' },
	{ key: 'status-bar', name: '状态栏', en: 'vx-status-bar', icon: 'app-window', category: '导航与展示', desc: '只为系统状态栏留高和铺底色，时间、信号和电池仍由平台绘制。默认取安全区变量，Web 上高度是 0，示例都用 height 画出来。' },
	{ key: 'tabbar', name: '标签栏', en: 'vx-tabbar', icon: 'layout-dashboard', category: '导航与展示', desc: '自定义底部标签栏：图标与文案、计数角标、凸起主按钮；固定时贴住安全区，内容不被盖住。' },
	{ key: 'footer', name: '页脚', en: 'vx-footer', icon: 'link', category: '导航与展示', desc: '页脚只做收尾，不放主操作；固定时整块抬到安全区之上，避免盖住最后一段。' },
	{ key: 'swipe-action', name: '滑动菜单', en: 'vx-swipe-action', icon: 'arrow-left', category: '导航与展示', desc: '一次只展开一行，拖动超过一半或快速轻扫才展开；点内容只收起不触发行点击。' },
	{ key: 'time-axis', name: '时间轴', en: 'vx-time-axis', icon: 'clock', category: '导航与展示', desc: '阶段名和说明按尺寸取档，时间固定次要色；首尾竖线收在节点中心。' },
	{ key: 'steps', name: '步骤条', en: 'vx-steps', icon: 'list-checks', category: '导航与展示', desc: '节点固定正圆，连线 1px；待处理态只换描边和文字色，不提供形状选项。' },
	{ key: 'progress', name: '进度条', en: 'vx-progress', icon: 'battery', category: '导航与展示', desc: '只画比例和读数；标签、数值和业务状态留在同一行或外面的卡片里。' },
	{ key: 'countdown', name: '倒计时', en: 'vx-countdown', icon: 'clock', category: '导航与展示', desc: '只承载读数，不放标题和按钮；隐藏的上层单位会并入下一个可见单位。' },
	{ key: 'rolling-news', name: '滚动消息', en: 'vx-rolling-news', icon: 'volume-high', category: '导航与展示', desc: '纵向或横向轮播消息，间隔和暂停都可控；当前条滑出、下一条滑入，不往回滚。' },
	{ key: 'notice-bar', name: '通告栏', en: 'vx-notice-bar', icon: 'bell', category: '导航与展示', desc: '一条通告的展开方式：单行、换行、滚动、语义色和关闭；默认琥珀浅底，信息、成功和失败各走自己的语义色。' },
	{ key: 'popup', name: '弹出层', en: 'vx-popup', icon: 'files', category: '反馈', desc: '通用浮层：四向贴边或居中，只圆朝向页面的那一侧；安全区、滚动锁和进出场都走同一套底座。' },
	{ key: 'image', name: '图片', en: 'vx-image', icon: 'image', category: '布局', desc: '占位底色、失败回落、四档圆角和按比例排布；加载、失败和点击只抛事件。' },
	{ key: 'divider', name: '分割线', en: 'vx-divider', icon: 'rows', category: '布局', desc: '横竖两向、实线虚线、带文字的对齐，以及间距和颜色的覆盖方式。' },
	{ key: 'safe-area', name: '安全区', en: 'vx-safe-area', icon: 'app-window', category: '布局', desc: '顶部与底部安全区占位，替代各组件内部自己补 --uni-safe-area-inset-*；不管左右安全区。' },
	{ key: 'avatar', name: '头像', en: 'vx-avatar', icon: 'user', category: '导航与展示', desc: '图片、首字、图标三态回落；首字按 code point 取，2px 描边画在内侧。' },
]

// 一张卡片的 en 可能写多个标签，用「 · 」隔开。数量在这里算一次，目录页不再拆字符串。
export function countDemoGroupNames(items: DemoComponent[]): number {
	// 同一张卡片可以写多个标签；跨卡片同名的组件只算一次（vx-col 同时出现在 row 和 col）。
	const names: string[] = []
	for (let index = 0; index < items.length; index++) {
		const parts = items[index].en.split(' · ')
		for (let partIndex = 0; partIndex < parts.length; partIndex++) {
			const name = parts[partIndex].trim()
			if (name !== '' && names.indexOf(name) < 0) names.push(name)
		}
	}
	return names.length
}

function countNamedComponents(): number {
	const names: string[] = []
	for (let index = 0; index < DEMO_COMPONENTS.length; index++) {
		const parts = DEMO_COMPONENTS[index].en.split(' · ')
		for (let partIndex = 0; partIndex < parts.length; partIndex++) {
			const name = parts[partIndex].trim()
			if (name !== '' && names.indexOf(name) < 0) names.push(name)
		}
	}
	return names.length
}

export const DEMO_PAGE_COUNT = DEMO_COMPONENTS.length
export const DEMO_COMPONENT_COUNT = countNamedComponents()
// core 112 + extend 1000。不要从 codepoints 再引一份，否则组件 tab 会带上整张图标表。
export const DEMO_ICON_COUNT = 1112

export function demoPagePath(key: string): string {
	return '/pages/demo/' + key + '/' + key
}
