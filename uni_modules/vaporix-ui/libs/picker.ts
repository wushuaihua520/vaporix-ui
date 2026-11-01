/**
 * 联动选择的数据工具。组件只负责草稿和滚轮，树的规整、定位、取值都在这里。
 * 节点固定 text / value / children，业务字段不同时先映射，不做动态字段名。
 */

/** 一个可选节点。没有 children 的是叶子，整条路径到这里结束。 */
export type VxPickerOption = {
	/** 展示文本，同时作为 value 省略时的值。 */
	text: string
	/** 业务值；省略时用 text 匹配和回传。 */
	value?: string
	/** 子级，决定下一列；空数组和省略等价。 */
	children?: Array<VxPickerOption>
	/** 不可选：仍在滚轮里显示，停在这一行时不能确认。 */
	disabled?: boolean
}

/** 一次选择的结果，values、texts、indices 逐级对应。 */
export type VxPickerResult = {
	/** 每一级的值，value 省略时取 text。 */
	values: Array<string>
	/** 每一级的展示文本。 */
	texts: Array<string>
	/** 每一级停在列表里的下标。 */
	indices: Array<number>
	/** texts 按分隔符拼起来的展示文本。 */
	text: string
}

/**
 * 滚轮行高，和 variables.css 的 --vx-picker-row 同值。
 * picker-view 的 indicator-style 只认行内样式字符串，读不到 CSS 变量，高度要用这个字面量。
 */
export const VX_PICKER_ROW = 44

/** 节点的值：value 非空用 value，否则退回 text。 */
export function vxPickerValueOf(option: VxPickerOption): string {
	return option.value != null && option.value.length > 0 ? option.value : option.text
}

/** 规整后的树。depth 和节点同一次遍历算出来，打开时不用再扫一遍。 */
export type VxPickerTree = {
	options: Array<VxPickerOption>
	depth: number
}

type PickerDepth = {
	depth: number
}

const normalizeNodes = (options: Array<VxPickerOption>, level: number, state: PickerDepth): Array<VxPickerOption> => {
	if (options.length > 0 && level > state.depth) state.depth = level
	const list: Array<VxPickerOption> = []
	const childLevel = level + 1
	for (let index = 0; index < options.length; index++) {
		const option = options[index]
		const rawChildren = option.children
		const children = rawChildren == null ? [] : normalizeNodes(rawChildren, childLevel, state)
		list.push({
			text: option.text,
			value: option.value == null ? '' : option.value,
			children: children,
			disabled: option.disabled === true
		})
	}
	return list
}

/**
 * 复制一份规整后的树：补空 children 和 disabled，丢掉调用方后续对原数组的改动影响。
 * 每次打开都重算，业务直接改 options 内部对象也能跟上，不依赖深度监听。
 */
export function vxPickerNormalize(options: Array<VxPickerOption>): Array<VxPickerOption> {
	return normalizeNodes(options, 1, { depth: 0 })
}

/** 规整树并带上最大层级。组件打开时用这一次遍历，不再单独调用 vxPickerDepth。 */
export function vxPickerTree(options: Array<VxPickerOption>): VxPickerTree {
	const state: PickerDepth = { depth: 0 }
	return { options: normalizeNodes(options, 1, state), depth: state.depth }
}

/** 树的最大层级，空数组是 0；只用来准备每列的行版本号。 */
export function vxPickerDepth(options: Array<VxPickerOption>): number {
	let depth = 0
	for (let index = 0; index < options.length; index++) {
		const children = options[index].children
		const childDepth = children == null ? 0 : vxPickerDepth(children)
		if (childDepth > depth) depth = childDepth
	}
	return options.length > 0 ? depth + 1 : 0
}

/** 第一项可选项的下标，全部不可选时返回 -1。 */
export function vxPickerFirstEnabled(options: Array<VxPickerOption>): number {
	for (let index = 0; index < options.length; index++) {
		if (!options[index].disabled) return index
	}
	return -1
}

/** 离目标最近的可选项：先往后找，再往前找；全部不可选时返回 -1。 */
export function vxPickerNearestEnabled(options: Array<VxPickerOption>, index: number): number {
	if (options.length === 0) return -1
	let position = Math.round(index)
	if (!isFinite(position) || position < 0) position = 0
	if (position > options.length - 1) position = options.length - 1
	if (!options[position].disabled) return position
	for (let next = position + 1; next < options.length; next++) {
		if (!options[next].disabled) return next
	}
	for (let prev = position - 1; prev >= 0; prev--) {
		if (!options[prev].disabled) return prev
	}
	return -1
}

/**
 * 把已选值定位成每一列的下标。值按 value 匹配，没有 value 的节点按 text 匹配；
 * 命中不可选项时挪到最近的可选项，找不到时从第一项可选项开始。
 * 下级只收到上一级的值，整条路径对齐后再交给滚轮。
 */
export function vxPickerAlign(options: Array<VxPickerOption>, values: Array<string>): Array<number> {
	const indices: Array<number> = []
	let level = options
	let depth = 0
	while (level.length > 0) {
		let target = -1
		if (depth < values.length) {
			const wanted = values[depth]
			for (let index = 0; index < level.length; index++) {
				if (vxPickerValueOf(level[index]) !== wanted) continue
				target = index
				break
			}
		}

		let position = -1
		if (target >= 0) position = vxPickerNearestEnabled(level, target)
		else position = vxPickerFirstEnabled(level)
		// 整列都不可选时仍停在第一项，滚轮有内容可看；确认由组件挡住。
		if (position < 0) position = 0

		indices.push(position)
		const children = level[position].children
		level = children == null ? [] : children
		depth++
	}
	return indices
}

/** 按当前下标取出每一列的节点列表；分支提前结束时就少一列。 */
export function vxPickerColumns(
	options: Array<VxPickerOption>,
	indices: Array<number>
): Array<Array<VxPickerOption>> {
	const columns: Array<Array<VxPickerOption>> = []
	let level = options
	let depth = 0
	while (level.length > 0) {
		columns.push(level)
		let position = depth < indices.length ? Math.round(indices[depth]) : 0
		if (!isFinite(position) || position < 0) position = 0
		if (position > level.length - 1) position = level.length - 1
		const children = level[position].children
		level = children == null ? [] : children
		depth++
	}
	return columns
}

/** 当前路径是否每一级都停在可选项上；空树和整列不可选都返回 false。 */
export function vxPickerSelectable(options: Array<VxPickerOption>, indices: Array<number>): boolean {
	const columns = vxPickerColumns(options, indices)
	if (columns.length === 0) return false
	for (let depth = 0; depth < columns.length; depth++) {
		const column = columns[depth]
		let position = depth < indices.length ? Math.round(indices[depth]) : 0
		if (!isFinite(position) || position < 0) position = 0
		if (position > column.length - 1) position = column.length - 1
		if (column[position].disabled) return false
	}
	return true
}

/** 由下标生成结果；下标越界时夹到列表内，不抛错。 */
export function vxPickerResult(
	options: Array<VxPickerOption>,
	indices: Array<number>,
	separator: string
): VxPickerResult {
	const columns = vxPickerColumns(options, indices)
	const values: Array<string> = []
	const texts: Array<string> = []
	const positions: Array<number> = []
	for (let depth = 0; depth < columns.length; depth++) {
		const column = columns[depth]
		let position = depth < indices.length ? Math.round(indices[depth]) : 0
		if (!isFinite(position) || position < 0) position = 0
		if (position > column.length - 1) position = column.length - 1
		const option = column[position]
		values.push(vxPickerValueOf(option))
		texts.push(option.text)
		positions.push(position)
	}
	return { values: values, texts: texts, indices: positions, text: texts.join(separator) }
}

/** 只取展示文本，业务在触发入口上显示已选路径时用。 */
export function vxPickerText(
	options: Array<VxPickerOption>,
	values: Array<string>,
	separator: string
): string {
	return vxPickerResult(options, vxPickerAlign(options, values), separator).text
}

/** 两个值数组是否逐项相同，提交前用它避免重复回写 v-model。 */
export function vxPickerSame(left: Array<string>, right: Array<string>): boolean {
	if (left.length !== right.length) return false
	for (let index = 0; index < left.length; index++) {
		if (left[index] !== right[index]) return false
	}
	return true
}
