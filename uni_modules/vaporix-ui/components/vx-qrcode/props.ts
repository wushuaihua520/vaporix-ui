import { VxQrcodeLevel } from '../../libs/qrcode'
import { VxSize } from '../../libs/types/common'

export type VxQrcodeProps = {
	/** 二维码内容，按 UTF-8 编码；为空时显示空状态。 */
	text?: string
	/** 边长档位，默认 md；width 传了有效像素值时以 width 为准。 */
	size?: VxSize
	/** 自定义边长，需带 px，如 '220px'；其他单位忽略，回落到 size。 */
	width?: string
	/** 纠错级别，默认 M；中心放图标时用 H。 */
	level?: VxQrcodeLevel
	/** 深色模块颜色，字面值；默认 #1a1d26。 */
	color?: string
	/** 底色和空白边距的颜色，字面值；默认 #ffffff。 */
	bgColor?: string
	/** 空白边距，按模块数算，默认 2，收敛到 0–8；印刷或独立放在彩色底上用 4。 */
	margin?: number
	/** 中心图片地址；加载失败时隐藏图标层，方阵保持完整。 */
	logo?: string
	/** 中心图片占方阵内容宽度的比例，默认 0.22，收敛到 0.12–0.3。 */
	logoSize?: number
	/** 内容为空时的提示文案。 */
	emptyText?: string
	/** 内容超出 40 版容量时的提示文案。 */
	errorText?: string
}
