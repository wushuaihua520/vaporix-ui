import { VxSize } from '../../libs/types/common'

export type VxNomoreProps = {
	/** 收尾文案；传空串只保留线条或圆点。 */
	text?: string
	/** 用圆点代替文案。 */
	dot?: boolean
	/** 尺寸。sm 与 md 同为 13 / 20，lg 为 15 / 22；上下留白固定 16。 */
	size?: VxSize
	/** 两侧画 1px 细线；关掉只留文案或圆点。 */
	line?: boolean
	/** 文案和圆点颜色，字面值；不传时文案次要灰、圆点禁用灰。 */
	color?: string
	/** 两侧细线颜色，字面值；不传时用 --vx-color-divider。 */
	lineColor?: string
}
