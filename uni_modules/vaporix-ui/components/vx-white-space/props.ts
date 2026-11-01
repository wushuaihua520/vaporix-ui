import { VxSize } from '../../libs/types/common'

export type VxWhiteSpaceProps = {
	/** 间距档位，默认 md：sm 8、md 12、lg 16，对应 --vx-space-*。 */
	size?: VxSize
	/** 自定义高度，需带单位，如 24px、64rpx、var(--vx-space-xl)；传了盖过 size。 */
	height?: string
	/** 自定义底色，字面值；默认透明。 */
	bgColor?: string
}
