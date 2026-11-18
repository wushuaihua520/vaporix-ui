/* 组件目录：演示页元数据。新增演示页时在这里登记，同时补 pages.json 路由。 */

export type DemoComponent = {
	key: string
	name: string
	en: string
	icon: string
	category: string
	desc: string
	sections: number
}

export const DEMO_CATEGORIES: string[] = ['基础', '表单', '反馈', '布局', '导航与展示']

export const DEMO_COMPONENTS: DemoComponent[] = [
	{
		key: 'button',
		name: '按钮',
		en: 'vx-button',
		icon: 'check-circle',
		category: '基础',
		desc: '实心、镂空、浅底、纯文字。',
		sections: 10
	},
	{
		key: 'icon',
		name: '图标',
		en: 'vx-icon',
		icon: 'star',
		category: '基础',
		desc: '1112 个图标，线性与实心。',
		sections: 4
	},
	{
		key: 'tag',
		name: '标签',
		en: 'vx-tag',
		icon: 'tag',
		category: '基础',
		desc: '实心、浅底、空心，四种轮廓。',
		sections: 6
	},
	{
		key: 'badge',
		name: '徽章',
		en: 'vx-badge',
		icon: 'bell',
		category: '基础',
		desc: '计数、封顶、圆点与角标。',
		sections: 7
	},
	{
		key: 'input',
		name: '输入框',
		en: 'vx-input',
		icon: 'edit',
		category: '表单',
		desc: '标题、必填、清除、单位、前后缀和搜索变体。',
		sections: 9
	},
	{
		key: 'textarea',
		name: '多行输入框',
		en: 'vx-textarea',
		icon: 'file-text',
		category: '表单',
		desc: '固定高度、自适应和字数统计。',
		sections: 7
	},
	{
		key: 'text',
		name: '文本',
		en: 'vx-text',
		icon: 'text-aa',
		category: '基础',
		desc: '类型、尺寸、截断、格式化和复制。',
		sections: 9
	},
	{
		key: 'link',
		name: '超链接',
		en: 'vx-link',
		icon: 'link',
		category: '基础',
		desc: '平台差异、下划线、插槽和状态。',
		sections: 7
	},
	{
		key: 'number-box',
		name: '数字框',
		en: 'vx-number-box',
		icon: 'plus',
		category: '表单',
		desc: '范围、步长、浅底和胶囊。',
		sections: 8
	},
	{
		key: 'radio',
		name: '单项选择器',
		en: 'vx-radio',
		icon: 'radio-button',
		category: '表单',
		desc: '横排或列表、标记位置、圆圈与对号。',
		sections: 7
	},
	{
		key: 'checkbox',
		name: '多项选择器',
		en: 'vx-checkbox',
		icon: 'check-square',
		category: '表单',
		desc: '可选上限、全选、部分选中和颜色。',
		sections: 8
	},
	{
		key: 'switch',
		name: '开关选择器',
		en: 'vx-switch',
		icon: 'toggle-right',
		category: '表单',
		desc: '轨道文字、整行切换、加载中、尺寸和自定义颜色。',
		sections: 8
	},
	{
		key: 'rate',
		name: '评分',
		en: 'vx-rate',
		icon: 'star',
		category: '表单',
		desc: '点按或拖动打分，支持半星。',
		sections: 9
	},
	{
		key: 'datetime',
		name: '日期时间',
		en: 'vx-datetime',
		icon: 'calendar',
		category: '表单',
		desc: '十种模式、步长和自定义格式。',
		sections: 10
	},
	{
		key: 'picker',
		name: '联动选择',
		en: 'vx-picker',
		icon: 'map-pin',
		category: '表单',
		desc: '树形数据逐级联动，底部滚轮。',
		sections: 10
	},
	{
		key: 'calendar',
		name: '日历',
		en: 'vx-calendar',
		icon: 'calendar',
		category: '表单',
		desc: '单日、区间、农历与标记。',
		sections: 10
	},
	{
		key: 'form',
		name: '表单',
		en: 'vx-form · vx-form-item',
		icon: 'list-checks',
		category: '表单',
		desc: '校验、错误定位、标签与说明。',
		sections: 11
	},
	{
		key: 'tips',
		name: '消息提示',
		en: 'vx-tips',
		icon: 'info',
		category: '反馈',
		desc: '顶部、居中、底部三种位置。',
		sections: 8
	},
	{
		key: 'toast',
		name: '轻提示',
		en: 'vx-toast',
		icon: 'check-circle',
		category: '反馈',
		desc: '图标、图片、透明度和时长。',
		sections: 8
	},
	{
		key: 'loading',
		name: '加载与尾部',
		en: 'vx-loading · vx-loadmore · vx-nomore',
		icon: 'loader-circle',
		category: '反馈',
		desc: '转圈、加载更多、没有更多。',
		sections: 10
	},
	{
		key: 'no-data',
		name: '暂无数据',
		en: 'vx-no-data',
		icon: 'folder',
		category: '反馈',
		desc: '空列表、无结果、加载失败。',
		sections: 8
	},
	{
		key: 'actionsheet',
		name: '操作菜单',
		en: 'vx-actionsheet',
		icon: 'menu',
		category: '反馈',
		desc: '底部弹层、危险操作与选中态。',
		sections: 8
	},
	{
		key: 'modal',
		name: '弹框',
		en: 'vx-modal',
		icon: 'message-square',
		category: '反馈',
		desc: '状态图标、多个动作和自定义正文。',
		sections: 13
	},
	{
		key: 'drawer',
		name: '抽屉',
		en: 'vx-drawer',
		icon: 'menu',
		category: '反馈',
		desc: '四条边滑出，宽度、高度和底栏。',
		sections: 10
	},
	{
		key: 'bubble-popup',
		name: '气泡弹框',
		en: 'vx-bubble-popup',
		icon: 'message-square',
		category: '反馈',
		desc: '贴着触发元素的菜单，也能做聊天气泡。',
		sections: 11
	},
	{
		key: 'list-view',
		name: '列表',
		en: 'vx-list-view · vx-list-cell',
		icon: 'list',
		category: '布局',
		desc: '分组、行、图标、头像和徽章。',
		sections: 9
	},
	{
		key: 'card',
		name: '卡片',
		en: 'vx-card',
		icon: 'layout-dashboard',
		category: '布局',
		desc: '头像、封面、图片网格和通栏。',
		sections: 7
	},
	{
		key: 'section',
		name: '标题栏',
		en: 'vx-section',
		icon: 'layout-dashboard',
		category: '布局',
		desc: '标题、说明、竖线、分割线和右侧短操作。',
		sections: 8
	},
	{
		key: 'white-space',
		name: '上下留白',
		en: 'vx-white-space',
		icon: 'arrow-down',
		category: '布局',
		desc: '纵向间隔，三档尺寸、自定义高度和背景色。',
		sections: 6
	},
	{
		key: 'wing-blank',
		name: '左右留白',
		en: 'vx-wing-blank',
		icon: 'align-left',
		category: '布局',
		desc: '横向内边距，三档尺寸和自定义间距。',
		sections: 5
	},
	{
		key: 'grid',
		name: '宫格',
		en: 'vx-grid · vx-grid-item',
		icon: 'grid-2x2',
		category: '布局',
		desc: '2 到 5 列、图标角标与色底。',
		sections: 8
	},
	{
		key: 'row',
		name: '栅格布局',
		en: 'vx-row · vx-col',
		icon: 'rows',
		category: '布局',
		desc: '24 栅格、列间距、对齐与嵌套。',
		sections: 8
	},
	{
		key: 'col',
		name: '多端适配',
		en: 'vx-col',
		icon: 'columns',
		category: '布局',
		desc: '跨度、偏移、位移和断点。',
		sections: 6
	},
	{
		key: 'image-group',
		name: '图片组合',
		en: 'vx-image-group',
		icon: 'image',
		category: '布局',
		desc: '单张、头像堆叠、行列与多行。',
		sections: 8
	},
	{
		key: 'qrcode',
		name: '二维码',
		en: 'vx-qrcode',
		icon: 'qr-code',
		category: '导航与展示',
		desc: '三档边长、纠错级别和中心图标。',
		sections: 7
	},
	{
		key: 'collapse',
		name: '折叠面板',
		en: 'vx-collapse · vx-collapse-item',
		icon: 'chevron-down',
		category: '布局',
		desc: '手风琴、卡片与平面、固定高度。',
		sections: 9
	},
	{
		key: 'tabs',
		name: '标签页',
		en: 'vx-tabs',
		icon: 'layout-dashboard',
		category: '布局',
		desc: 'line、soft、inverse 外观与竖向标签。',
		sections: 9
	},
	{
		key: 'sticky',
		name: '吸顶容器',
		en: 'vx-sticky',
		icon: 'map-pin',
		category: '布局',
		desc: '吸顶距离、指定范围和阴影。',
		sections: 4
	},
	{
		key: 'navigation-bar',
		name: '导航栏',
		en: 'vx-navigation-bar',
		icon: 'compass',
		category: '导航与展示',
		desc: '返回、搜索、透明渐变和固定。',
		sections: 8
	},
	{
		key: 'status-bar',
		name: '状态栏',
		en: 'vx-status-bar',
		icon: 'app-window',
		category: '导航与展示',
		desc: '留高、底色、透明和滚动渐显。',
		sections: 8
	},
	{
		key: 'tabbar',
		name: '标签栏',
		en: 'vx-tabbar',
		icon: 'layout-dashboard',
		category: '导航与展示',
		desc: '自定义底部标签栏，图标、角标和凸起按钮。',
		sections: 11
	},
	{
		key: 'footer',
		name: '页脚',
		en: 'vx-footer',
		icon: 'link',
		category: '导航与展示',
		desc: '版权、辅助链接和固定底栏。',
		sections: 5
	},
	{
		key: 'swipe-action',
		name: '滑动菜单',
		en: 'vx-swipe-action',
		icon: 'arrow-left',
		category: '导航与展示',
		desc: '左滑露出动作，内容跟手移动。',
		sections: 9
	},
	{
		key: 'time-axis',
		name: '时间轴',
		en: 'vx-time-axis',
		icon: 'clock',
		category: '导航与展示',
		desc: '节点类型、尺寸、事件和竖线。',
		sections: 5
	},
	{
		key: 'steps',
		name: '步骤条',
		en: 'vx-steps',
		icon: 'list-checks',
		category: '导航与展示',
		desc: '横向、纵向、序号、图标和进度。',
		sections: 9
	},
	{
		key: 'progress',
		name: '进度条',
		en: 'vx-progress',
		icon: 'battery',
		category: '导航与展示',
		desc: '比例、标签、数值、语义色和过渡。',
		sections: 8
	},
	{
		key: 'countdown',
		name: '倒计时',
		en: 'vx-countdown',
		icon: 'clock',
		category: '导航与展示',
		desc: '天时分秒、单位、盒形和十分位。',
		sections: 9
	},
	{
		key: 'rolling-news',
		name: '滚动消息',
		en: 'vx-rolling-news',
		icon: 'volume-high',
		category: '导航与展示',
		desc: '纵向或横向轮播，间隔、暂停与插槽。',
		sections: 8
	},
	{
		key: 'notice-bar',
		name: '通告栏',
		en: 'vx-notice-bar',
		icon: 'bell',
		category: '导航与展示',
		desc: '单行、换行与滚动，语义色、关闭和插槽。',
		sections: 11
	},
	{
		key: 'popup',
		name: '弹出层',
		en: 'vx-popup',
		icon: 'files',
		category: '反馈',
		desc: '四向贴边或居中，圆角、安全区与进出场。',
		sections: 8
	},
	{
		key: 'image',
		name: '图片',
		en: 'vx-image',
		icon: 'image',
		category: '布局',
		desc: '占位、失败回落、圆角与按比例。',
		sections: 7
	},
	{
		key: 'divider',
		name: '分割线',
		en: 'vx-divider',
		icon: 'rows',
		category: '布局',
		desc: '横竖两向，虚线与带文字。',
		sections: 5
	},
	{
		key: 'safe-area',
		name: '安全区',
		en: 'vx-safe-area',
		icon: 'app-window',
		category: '布局',
		desc: '顶部与底部安全区占位。',
		sections: 4
	},
	{
		key: 'avatar',
		name: '头像',
		en: 'vx-avatar',
		icon: 'user',
		category: '导航与展示',
		desc: '图片、首字、图标三态回落。',
		sections: 7
	},
]

// 一张卡片的 en 可能写多个标签，用「 · 」隔开。数量在这里算一次，目录页不再拆字符串。
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

