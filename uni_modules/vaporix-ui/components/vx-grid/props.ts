/** 宫格外层形态：描边卡片，或只保留 surface 底的平面宫格。 */
export type VxGridVariant = 'card' | 'plain'

export type VxGridProps = {
	/** 形态，默认 card。 */
	variant?: VxGridVariant
}
