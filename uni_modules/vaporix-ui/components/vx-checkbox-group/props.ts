import { VxSemantic, VxSize } from '../../../libs/types/common'

/** 选中的 value 集合，顺序按用户勾选的先后追加。 */
export type VxCheckboxValues = Array<string>

/** 选中标记：box 是圆角方框加对号，check 只画对号。 */
export type VxCheckboxVariant = 'box' | 'check'

/** 标记位置：start 在文案前，end 推到行尾。 */
export type VxCheckboxPlacement = 'start' | 'end'

/** 排布：inline 横排换行，list 一项一行。 */
export type VxCheckboxLayout = 'inline' | 'list'

export type VxCheckboxGroupProps = {
	/** 当前选中项的 value 集合，支持 v-model；空数组表示没有选中。 */
	modelValue?: VxCheckboxValues
	/** 标记和文案档位，默认 md。 */
	size?: VxSize
	/** 选中标记的语义色，默认 primary。 */
	type?: VxSemantic
	/** 标记样式，默认 box。 */
	variant?: VxCheckboxVariant
	/** 标记在文案前还是行尾，默认 start。 */
	placement?: VxCheckboxPlacement
	/** 排布，默认 inline。 */
	layout?: VxCheckboxLayout
	/** list 排布下每项之间的 1px 分割线，默认打开；最后一项不画。 */
	divider?: boolean
	/** list 排布下把整组收进 surface 卡片：1px 描边和 md 圆角；inline 不生效。 */
	card?: boolean
	/** 整组禁用：所有项都不响应点按，文字和标记转灰。 */
	disabled?: boolean
	/**
	 * 最多可选几项，默认 0 表示不限。
	 * 到上限后再点未选中项会被拦下并抛 exceed，已选项仍可取消。
	 */
	max?: number
}
