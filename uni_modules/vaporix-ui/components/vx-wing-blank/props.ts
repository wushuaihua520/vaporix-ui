import { VxSize } from '../../libs/types/common'

export type VxWingBlankProps = {
	/** 左右内边距档位，默认 md：sm 8、md 12、lg 16，对应 --vx-space-*。 */
	size?: VxSize
	/** 自定义左右内边距，需带单位，如 24px、64rpx、10%；传了盖过 size。 */
	gap?: string
}
