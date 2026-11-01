import { VxSemantic, VxSize } from '../../libs/types/common'

/** 选中标记：circle 是圆圈加对号，check 只画对号。 */
export type VxRadioVariant = 'circle' | 'check'

/** 标记位置：start 在文案前，end 推到行尾。 */
export type VxRadioPlacement = 'start' | 'end'

/** 排布：inline 横排换行，list 一项一行。 */
export type VxRadioLayout = 'inline' | 'list'

export type VxRadioGroupProps = {
	/** 标记和文案档位，默认 md。 */
	size?: VxSize
	/** 选中标记的语义色，默认 primary。 */
	type?: VxSemantic
	/** 标记样式，默认 circle。 */
	variant?: VxRadioVariant
	/** 标记在文案前还是行尾，默认 start。 */
	placement?: VxRadioPlacement
	/** 排布，默认 inline。 */
	layout?: VxRadioLayout
	/** list 排布下每项之间的 1px 分割线，默认打开；最后一项不画。 */
	divider?: boolean
	/** list 排布下把整组收进 surface 卡片：1px 描边和 md 圆角；inline 不生效。 */
	card?: boolean
	/** 整组禁用：所有项都不响应点按，文字和标记转灰。 */
	disabled?: boolean
}
