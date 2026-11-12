/**
 * vx-page 向里面的表单提供滚动。
 * 免费库不能引用 Pro 组件，所以只约定这一条注入键：页面有滚动区时提供，没有就不提供。
 */
export const VX_PAGE_SCROLL = 'vx-page-scroll'

/**
 * 把视口坐标上的一条横线滚到滚动区顶部。
 * 返回 true 表示这次由页面容器接手；false 表示容器没有滚动区，调用方再试页面滚动。
 */
export type VxPageScroll = (viewportTop: number) => boolean
