export type VxCollapseItemProps = {
	/** 面板名，同一组内唯一；v-model 用它记录展开项。不传时用生成的实例 id，只影响受控绑定。 */
	name?: string
	/** 标题，单行或换行都可以；为空时不渲染标题文字。 */
	title?: string
	/** 标题下方的说明，次要色，可以换行。 */
	description?: string
	/** 禁用：不响应点击，标题、说明和箭头转灰。 */
	disabled?: boolean
	/** 显示箭头；容器上关掉箭头时，这一项也会隐藏，默认打开。 */
	arrow?: boolean
	/** 内容区固定高度，必须带单位（px / rpx）；传了之后内容在内部滚动。 */
	contentHeight?: string
}
