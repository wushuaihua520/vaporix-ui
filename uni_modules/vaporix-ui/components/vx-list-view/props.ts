/** 列表分组形态：描边卡片，或不带描边和圆角的平面分组。 */
export type VxListViewVariant = 'card' | 'plain'

export type VxListViewProps = {
	/** 分组标题，显示在卡片外。 */
	title?: string
	/** 标题下的补充说明。 */
	description?: string
	/** 分组形态，默认 card。 */
	variant?: VxListViewVariant
}
