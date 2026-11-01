import { VxButtonShape, VxButtonVariant, VxIconVariant, VxSemantic, VxSize } from '../../libs/types/common'
import { VxIconName } from '../../libs/icons/codepoints'

export type VxNoDataProps = {
	/** 主文案；传默认插槽时忽略。 */
	text?: string
	/** 主文案下的辅助说明；传默认插槽时忽略。 */
	description?: string
	/** 尺寸，同时决定插图、图标圆、字号和留白。 */
	size?: VxSize
	/** 语义色，只给插图和图标上色，文案保持正文色。 */
	type?: VxSemantic
	/** 字体图标名；传入后替换默认线稿插图。取值见 libs/icons/codepoints.ts。 */
	icon?: VxIconName
	/** 字体图标字重；image 和默认线稿不受影响。 */
	iconVariant?: VxIconVariant
	/** 自定义插图地址，优先于 icon；按方框等比展示。 */
	image?: string
	/** 撑满父级高度并垂直居中；父级需要是纵向 flex。 */
	fill?: boolean
	/** 动作按钮文案；为空且没有 extra 插槽时不渲染默认按钮。 */
	actionText?: string
	/** 动作按钮语义色，默认主色。 */
	actionType?: VxSemantic
	/** 动作按钮视觉层级，和 vx-button 共用。 */
	actionVariant?: VxButtonVariant
	/** 动作按钮轮廓，和 vx-button 共用。 */
	actionShape?: VxButtonShape
	/** 动作按钮尺寸，默认 md。 */
	actionSize?: VxSize
	/** 动作按钮宽度，需带单位；不传时按文案自适应。 */
	actionWidth?: string
	/** 动作按钮加载中。 */
	actionLoading?: boolean
	/** 动作按钮禁用。 */
	actionDisabled?: boolean
}
