import { VxSize } from './types/common'

/**
 * 评分的手势和点击按像素换算档位，读不到 CSS 变量，这里与 variables.css 手工保持一致：
 * VX_RATE_SIZE 对齐 --vx-rate-size-*，VX_RATE_GAP 对齐 --vx-rate-gap。
 */
export const VX_RATE_SIZE: Record<VxSize, number> = {
	sm: 20,
	md: 24,
	lg: 28
}

export const VX_RATE_GAP = 8

/** 横向移动超过这个像素才按滑动处理，避免纵向滚动时误改分值。 */
export const VX_RATE_DRAG_THRESHOLD = 4

/** 点按或滑动结束后浏览器可能补发一次 click，这段时间内不响应。 */
export const VX_RATE_CLICK_GUARD = 300
