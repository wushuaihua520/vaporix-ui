/**
 * 扩展图标（extend 1000 个）在 Web 上的垂直校正。
 *
 * 背景：Web 把 extend 字体按 unicode-range 切成 4 个 `@font-face` 分片（见 `libs/style/icons-extend.css`）。
 * 字体文件本身两档完全一致（upm 1000、hhea / OS/2 / win 都是 ascent 1000、descent 0），
 * 但 Chrome 对带 `unicode-range` 的分片 face 算出的字体度量偏大（100px 下实测 ascent 106 / descent 34，
 * 正确值 100 / 0），行盒因此上移，字形整体偏高约 0.14em（22px 约 3px）。WebKit 没有这个偏差。
 *
 * 所以不写死 px：extend 字形首次渲染时调一次 `ensureExtendGlyphShift()`，
 * 按当前浏览器实测的度量把需要下移的量写进根节点的 `--vx-extend-glyph-shift`（em），
 * 组件样式用 `transform: translateY(var(--vx-extend-glyph-shift, 0em))` 取用；
 * 没有偏差的引擎写入 0em，等于不补。App / 小程序用整份 TTF，函数体在编译时移除。
 */
export const VX_EXTEND_GLYPH_SHIFT_VAR = '--vx-extend-glyph-shift'

let started = false

const measureShift = (family: string): number => {
	// #ifdef WEB
	try {
		const canvas = document.createElement('canvas')
		const ctx = canvas.getContext('2d')
		if (ctx == null) return 0
		ctx.font = `100px ${family}`
		const metrics = ctx.measureText('\ueb0b')
		const ascent = metrics.fontBoundingBoxAscent
		const descent = metrics.fontBoundingBoxDescent
		if (!Number.isFinite(ascent) || !Number.isFinite(descent)) return 0
		// 行盒把 (ascent + descent) 居中，基线下移量 = 上升差 − 总高差的一半。
		const offset = (ascent - 100) - (ascent + descent - 100) / 2
		return Math.abs(offset) < 0.2 ? 0 : -offset / 100
	} catch (error) {
		return 0
	}
	// #endif
	return 0
}

const applyShift = () => {
	// #ifdef WEB
	if (typeof document === 'undefined') return
	// 只量 regular 家族：Chrome 对两档分片 face 的偏差一致，WebKit 下 fill 家族的量法不稳定
	// （同一份 CSS 在 canvas 里会给出 90 / 25，单独的 @font-face 又是 100 / 0），不拿它当依据。
	const shift = measureShift('VaporixIconsExtend')
	try {
		document.documentElement.style.setProperty(VX_EXTEND_GLYPH_SHIFT_VAR, `${shift.toFixed(3)}em`)
	} catch (error) {
		// 根节点不可写时保持默认 0em。
	}
	// #endif
}

// WebKit 的 fonts.load 偶尔在字形真正可用之前就 resolve，量到的是回退字体。
// 字体就绪后补量几次，最后一次为准；量到同一个值时写回是幂等的。
const applyShiftWhenSettled = () => {
	// #ifdef WEB
	applyShift()
	setTimeout(applyShift, 120)
	setTimeout(applyShift, 400)
	// #endif
}

/** 组件渲染 extend 字形时调用；模块内只跑一次，字体就绪后再实测并写入变量。 */
export const ensureExtendGlyphShift = () => {
	if (started) return
	started = true
	// #ifdef WEB
	if (typeof document === 'undefined') return
	const fonts = document.fonts
	if (fonts == null) {
		applyShiftWhenSettled()
		return
	}
	try {
		// 字体没登记时 load 会 resolve 空数组，这时量到的是回退字体，不能拿来算。
		fonts.load('100px VaporixIconsExtend', '\ueb0b').then((list) => {
			if (list == null || list.length === 0) return
			return fonts.ready.then(() => applyShiftWhenSettled())
		}).catch(() => applyShiftWhenSettled())
	} catch (error) {
		applyShiftWhenSettled()
		return
	}
	// #endif
}
