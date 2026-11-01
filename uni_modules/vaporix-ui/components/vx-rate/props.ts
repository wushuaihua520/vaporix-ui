import { VxSemantic, VxSize } from '../../libs/types/common'

export type VxRateProps = {
	/** 星星总数，1–10，默认 5。 */
	count?: number
	/** 星形尺寸，对应 --vx-rate-size-*。 */
	size?: VxSize
	/** 选中星形的语义色，默认 warning。 */
	type?: VxSemantic
	/** 允许半星：点按和滑动都按 0.5 递增。 */
	allowHalf?: boolean
	/** 未选中的星形用空心描边，默认是浅灰实心。 */
	hollow?: boolean
	/** 右侧显示当前分值。 */
	showText?: boolean
	/** 右侧自定义短文案，优先于 showText。 */
	text?: string
	/** 选中星形的自定义颜色，字面值，不跟随主题。 */
	activeColor?: string
	/** 未选中星形的自定义颜色，字面值，不跟随主题。 */
	voidColor?: string
	/** 只读展示：保留颜色，不响应点按和滑动。 */
	readonly?: boolean
	/** 禁用：颜色转灰，不响应点按和滑动。 */
	disabled?: boolean
}
