import { VxLoadingVariant, VxSemantic, VxSize } from '../../libs/types/common'

export type VxLoadmoreProps = {
	/** 加载文案；传空串只显示转圈。 */
	text?: string
	/** 转圈颜色，不改文案颜色。 */
	type?: VxSemantic
	/** 转圈和文案尺寸；文案 sm / md 用 13，lg 用 15。 */
	size?: VxSize
	/** 转圈形态，和 vx-loading 共用。 */
	variant?: VxLoadingVariant
}
