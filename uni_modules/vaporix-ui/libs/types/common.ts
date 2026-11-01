/** 尺寸档位：交互控件对应 --vx-control-height-*，紧凑元素对应 --vx-compact-height-*。 */
export type VxSize = 'sm' | 'md' | 'lg'

/** 通用语义色。default 是中性表面，其余对应 --vx-color-*。 */
export type VxSemantic = 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'default'

/** 按钮视觉层级：实心、镂空、浅底、纯文字。 */
export type VxButtonVariant = 'solid' | 'plain' | 'soft' | 'link'

/** 按钮外轮廓：默认圆角、胶囊、平角。 */
export type VxButtonShape = 'rounded' | 'pill' | 'square'

/** 图标字重：regular 线性，fill 实心。 */
export type VxIconVariant = 'regular' | 'fill'

/** 加载指示器形态：圆环、开口弧、十二瓣。 */
export type VxLoadingVariant = 'ring' | 'arc' | 'bars'
