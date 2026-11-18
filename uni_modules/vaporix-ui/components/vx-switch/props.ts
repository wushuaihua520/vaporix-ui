import { VxSemantic, VxSize } from '../../libs/types/common'

/** 排布：inline 单行，list 整行。 */
export type VxSwitchLayout = 'inline' | 'list'

/** 轨道位置：start 在文案前，end 推到行尾。 */
export type VxSwitchPlacement = 'start' | 'end'

export type VxSwitchProps = {
	/** 开关状态，支持 v-model；默认关闭。 */
	modelValue?: boolean
	/** 轨道、滑块、加载圈、行高和文案档位，默认 md。 */
	size?: VxSize
	/** 打开状态的语义色，默认 primary。 */
	type?: VxSemantic
	/** 主文案；用默认插槽时忽略。 */
	label?: string
	/** 主文案下的说明，和主文案之间留 4；用默认插槽时忽略。 */
	description?: string
	/** 排布，默认 inline；list 一项一行并让整行可点。 */
	layout?: VxSwitchLayout
	/** 轨道相对文案的位置，默认 end。 */
	placement?: VxSwitchPlacement
	/** list 排布下画当前行底部的 1px 分割线；同一张卡片的最后一行不要打开。 */
	divider?: boolean
	/** 停用整只开关：文字和轨道转灰，不响应点按，也不抛 change。 */
	disabled?: boolean
	/** 请求进行中：滑块里显示缺口圆环并拦下点击，轨道保持当前状态。 */
	loading?: boolean
	/** 打开时轨道另一侧的文字，建议 1 个汉字或 2~3 个英文字母；on 插槽优先。 */
	onText?: string
	/** 关闭时轨道另一侧的文字；off 插槽优先。 */
	offText?: string
	/** 自定义打开轨道色，字面值；滑块仍按 type 取 on-*。 */
	color?: string
	/** 自定义关闭轨道色，字面值。 */
	trackColor?: string
	/** 自定义滑块底色，字面值；两种状态都生效，打开时描边一起收掉。 */
	thumbColor?: string
	/** 自定义关闭滑块的描边色，字面值；打开时不生效。 */
	borderColor?: string
}
