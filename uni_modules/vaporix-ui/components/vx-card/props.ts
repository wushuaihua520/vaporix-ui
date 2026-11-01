import { VxSize } from '../../libs/types/common'

/** 卡片头部图片的轮廓：小圆角适合频道和品牌，圆形适合个人头像。 */
export type VxCardAvatarShape = 'rounded' | 'circle'

export type VxCardProps = {
	/** 头部标题。 */
	title?: string
	/** 头部右侧短文本，放时间、状态或分类；传 extra 插槽时忽略。 */
	meta?: string
	/** 头部左侧图片地址；prefix 插槽会替换它。 */
	avatar?: string
	/** 头部图片轮廓，默认 rounded。 */
	avatarShape?: VxCardAvatarShape
	/** 卡片尺寸，决定内边距、头像和标题档位。 */
	size?: VxSize
	/** 正文文案快捷入口；传默认插槽时忽略。 */
	content?: string
	/** 底部文案；传 suffix 插槽时忽略。 */
	footer?: string
	/** 头部底色，字面值；要跟随主题就传 var(--vx-color-*)。 */
	headerBg?: string
	/** 头部底部分割线。 */
	headerDivider?: boolean
	/** 正文保留四边内边距；图片、图片网格和列表行贴边时传 false。 */
	bodyPadded?: boolean
	/** 通栏：去掉左右描边和圆角，上下描边保留。 */
	full?: boolean
	/** 整张卡片可点：按下变淡，点击抛 click。 */
	clickable?: boolean
	/** 标题自定义颜色，字面值。 */
	titleColor?: string
	/** 头部右侧文字自定义颜色，字面值。 */
	metaColor?: string
}
