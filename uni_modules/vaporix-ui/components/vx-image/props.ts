import { VxIconName } from '../../libs/icons/codepoints'

/** 图片缩放模式，透传给原生 image；只开放常用的四档。 */
export type VxImageMode = 'aspectFill' | 'aspectFit' | 'scaleToFill' | 'center'

/** 外框圆角：none 直角，sm / md / lg 取 --vx-radius-*，circle 是胶囊。 */
export type VxImageRadius = 'none' | 'sm' | 'md' | 'lg' | 'circle'

export type VxImageProps = {
	/** 图片地址；空串直接走失败态。 */
	src?: string
	/** 缩放模式，默认 aspectFill；只接受原生 image 支持的四档。 */
	mode?: VxImageMode
	/** 宽度，需带单位，默认 100%。 */
	width?: string
	/** 高度，需带单位；传了盖过 ratio，空串时按 ratio 或父级高度。 */
	height?: string
	/** 宽高比（宽 / 高），例如 1.78；只在 width 是 px 或 rpx 时生效。 */
	ratio?: number
	/** 外框圆角，默认 none；图片一起裁切。 */
	radius?: VxImageRadius
	/** 加载中是否铺占位底色，默认打开；失败态始终铺。 */
	placeholder?: boolean
	/** 失败态图标，取 codepoints 里已有的名字，默认 image。 */
	errorIcon?: VxIconName
	/** 失败态文案，空串只显示图标。 */
	errorText?: string
	/** 占位与失败态的底色，字面值；传了盖过 --vx-color-default-soft。 */
	bgColor?: string
	/** 懒加载，仅 Web 和小程序生效，App 端由平台决定。 */
	lazyLoad?: boolean
	/** 加载完成后 200ms 淡入，默认打开；关闭后直接出现。 */
	fade?: boolean
}
