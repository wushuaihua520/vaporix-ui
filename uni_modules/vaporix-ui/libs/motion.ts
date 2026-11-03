/**
 * 按下态停留时长，单位毫秒。
 * hover-stay-time 只接受数字，读不到 CSS 变量，所以这里与
 * variables.css 的 --vx-duration-fast 手工保持一致。
 */
export const VX_PRESSED_STAY_TIME = 120

/**
 * 加载旋转一圈的时长，单位毫秒。
 * 十二瓣的延迟按这个值等分，和 variables.css 的 --vx-duration-spin 手工保持一致。
 */
export const VX_SPIN_DURATION = 700

/**
 * 滚动消息默认间隔，单位毫秒。
 * 与 props 的默认值一致；小于等于 0 时回到这个值。走一格的时长包含在这段间隔里。
 */
export const VX_ROLLING_NEWS_INTERVAL = 3000

/**
 * 滚动消息走一格的时长，单位毫秒。
 * 换条要等两层对调完成，和 variables.css 的 --vx-duration-normal 手工保持一致。
 */
export const VX_ROLLING_NEWS_DURATION = 220

/**
 * 滚动消息落位后留的一帧，单位毫秒。
 * 滑出的一层先回到视口外，再允许下一格开始；这段时间里过渡是摘掉的。
 */
export const VX_ROLLING_NEWS_SETTLE = 50

/**
 * 进度条默认过渡时长，单位毫秒。
 * 行内 transition-duration 和 end 计时共用这个数，和 variables.css 的 --vx-duration-normal 手工保持一致。
 * 0 表示直接落位；读不出来的值回到这里。
 */
export const VX_PROGRESS_DURATION = 220

/**
 * 环形进度默认补间时长，单位毫秒。
 * 弧线由脚本按帧推进，不走 CSS 过渡；0 表示直接落位，读不出来的值回到这里。
 */
export const VX_CIRCULAR_PROGRESS_DURATION = 600

/**
 * 数字键盘输入框校验失败的抖动时长，单位毫秒。
 * 抖动本身是 CSS 关键帧，5.26 的 App 没有关键帧，停在原位；这个数只负责摘掉 class。
 */
export const VX_KEYBOARD_SHAKE_TIME = 320

/**
 * 通告栏滚动速度，单位 px/s。
 * 与 props 的默认值一致；文字宽度和视口宽度都读实际测量值。
 */
export const VX_NOTICE_BAR_SPEED = 100

/** 通告栏滚动速度的上下限，单位 px/s；读不出来的值回到默认值。 */
export const VX_NOTICE_BAR_SPEED_MIN = 20
export const VX_NOTICE_BAR_SPEED_MAX = 600

/**
 * 通告栏每轮开始前留的一帧，单位毫秒。
 * 复位和起跑分两帧，过渡才会从新的起点重新开始；结束后也留这么久再复位。
 */
export const VX_NOTICE_BAR_SETTLE = 50

/** 测量文字宽度失败时的重试间隔，单位毫秒。 */
export const VX_NOTICE_BAR_MEASURE_DELAY = 50
