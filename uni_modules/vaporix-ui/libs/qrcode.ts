/**
 * 二维码编码：把一段文本压成模块方阵，供 vx-qrcode 用 view 按深色块绘制。
 *
 * 只做字节模式（UTF-8）和版本 1–40 的自动选择。数字、字母数字模式的容量更大，
 * 但二维码在这里主要用于链接和验证码字符串，字节模式一条路径就够，解析也不用猜分段。
 *
 * 不依赖 canvas：App 上 canvas 是独立原生层，放进滚动区和浮层会多一层层级问题；
 * 模块方阵直接用 view 画，深浅两色默认取令牌，自定义时跟 props 走，Web 和原生端表现一致。
 *
 * 掩码按 ISO/IEC 18004 的四条罚分规则选最优；纠错分块表与标准一致，
 * 每组 [块数, 总码字, 数据码字] 是公开数据，不随实现变化。
 */

import { VxSize } from './types/common'

/** 纠错级别。L 约 7%、M 约 15%、Q 约 25%、H 约 30% 的码字可以丢失。 */
export type VxQrcodeLevel = 'L' | 'M' | 'Q' | 'H'

/** 编码结果。modules[y][x] 为 true 表示深色模块，不含空白边距。 */
export type VxQrcodeMatrix = {
	size: number
	version: number
	level: VxQrcodeLevel
	modules: Array<Array<boolean>>
}

/** 失败原因：empty 为空内容，overflow 为超出 40 版容量；空串表示成功。 */
export type VxQrcodeError = '' | 'empty' | 'overflow'

/**
 * matrix 为 null 时 error 说明原因，组件据此显示空状态或错误提示，
 * 不把失败当成一个空方阵画出来。
 */
export type VxQrcodeResult = {
	matrix: VxQrcodeMatrix | null
	error: VxQrcodeError
}

/**
 * 边长三档的像素值，和 variables.css 的 --vx-qrcode-size-* 手工保持一致。
 * 模块要按整数像素排，读不到 CSS 变量，只能在这里算一次。
 */
export const VX_QRCODE_SIZE: Record<VxSize, number> = {
	sm: 120,
	md: 160,
	lg: 200
}

/**
 * 空白边距允许的模块数。默认 2：组件通常放在白底卡片里，卡片本身再补一圈空白边距；
 * 印刷、独立放在有颜色的底上时传 4，和 ISO/IEC 18004 的要求一致。
 */
export const VX_QRCODE_MARGIN_DEFAULT = 2
export const VX_QRCODE_MARGIN_MIN = 0
export const VX_QRCODE_MARGIN_MAX = 8

/** 中心图标占方阵内容宽度的比例，太大就吃掉了纠错余量。 */
export const VX_QRCODE_LOGO_SCALE_DEFAULT = 0.22
export const VX_QRCODE_LOGO_SCALE_MIN = 0.12
export const VX_QRCODE_LOGO_SCALE_MAX = 0.3

const VX_QRCODE_LEVELS: Array<VxQrcodeLevel> = ['L', 'M', 'Q', 'H']

/** 纠错级别在格式信息里的两位编码，不是下标。 */
const VX_QRCODE_LEVEL_BITS: Record<VxQrcodeLevel, number> = {
	L: 1,
	M: 0,
	Q: 3,
	H: 2
}

/**
 * 纠错分块表，下标是 (版本 - 1) * 4 + 级别下标。
 * 每项是「块数, 总码字, 数据码字」，有的版本分长短两组，所以一项可能写六个数。
 */
const VX_QR_RS_BLOCKS: Array<Array<number>> = [
	// 1
	[1, 26, 19],
	[1, 26, 16],
	[1, 26, 13],
	[1, 26, 9],
	// 2
	[1, 44, 34],
	[1, 44, 28],
	[1, 44, 22],
	[1, 44, 16],
	// 3
	[1, 70, 55],
	[1, 70, 44],
	[2, 35, 17],
	[2, 35, 13],
	// 4
	[1, 100, 80],
	[2, 50, 32],
	[2, 50, 24],
	[4, 25, 9],
	// 5
	[1, 134, 108],
	[2, 67, 43],
	[2, 33, 15, 2, 34, 16],
	[2, 33, 11, 2, 34, 12],
	// 6
	[2, 86, 68],
	[4, 43, 27],
	[4, 43, 19],
	[4, 43, 15],
	// 7
	[2, 98, 78],
	[4, 49, 31],
	[2, 32, 14, 4, 33, 15],
	[4, 39, 13, 1, 40, 14],
	// 8
	[2, 121, 97],
	[2, 60, 38, 2, 61, 39],
	[4, 40, 18, 2, 41, 19],
	[4, 40, 14, 2, 41, 15],
	// 9
	[2, 146, 116],
	[3, 58, 36, 2, 59, 37],
	[4, 36, 16, 4, 37, 17],
	[4, 36, 12, 4, 37, 13],
	// 10
	[2, 86, 68, 2, 87, 69],
	[4, 69, 43, 1, 70, 44],
	[6, 43, 19, 2, 44, 20],
	[6, 43, 15, 2, 44, 16],
	// 11
	[4, 101, 81],
	[1, 80, 50, 4, 81, 51],
	[4, 50, 22, 4, 51, 23],
	[3, 36, 12, 8, 37, 13],
	// 12
	[2, 116, 92, 2, 117, 93],
	[6, 58, 36, 2, 59, 37],
	[4, 46, 20, 6, 47, 21],
	[7, 42, 14, 4, 43, 15],
	// 13
	[4, 133, 107],
	[8, 59, 37, 1, 60, 38],
	[8, 44, 20, 4, 45, 21],
	[12, 33, 11, 4, 34, 12],
	// 14
	[3, 145, 115, 1, 146, 116],
	[4, 64, 40, 5, 65, 41],
	[11, 36, 16, 5, 37, 17],
	[11, 36, 12, 5, 37, 13],
	// 15
	[5, 109, 87, 1, 110, 88],
	[5, 65, 41, 5, 66, 42],
	[5, 54, 24, 7, 55, 25],
	[11, 36, 12, 7, 37, 13],
	// 16
	[5, 122, 98, 1, 123, 99],
	[7, 73, 45, 3, 74, 46],
	[15, 43, 19, 2, 44, 20],
	[3, 45, 15, 13, 46, 16],
	// 17
	[1, 135, 107, 5, 136, 108],
	[10, 74, 46, 1, 75, 47],
	[1, 50, 22, 15, 51, 23],
	[2, 42, 14, 17, 43, 15],
	// 18
	[5, 150, 120, 1, 151, 121],
	[9, 69, 43, 4, 70, 44],
	[17, 50, 22, 1, 51, 23],
	[2, 42, 14, 19, 43, 15],
	// 19
	[3, 141, 113, 4, 142, 114],
	[3, 70, 44, 11, 71, 45],
	[17, 47, 21, 4, 48, 22],
	[9, 39, 13, 16, 40, 14],
	// 20
	[3, 135, 107, 5, 136, 108],
	[3, 67, 41, 13, 68, 42],
	[15, 54, 24, 5, 55, 25],
	[15, 43, 15, 10, 44, 16],
	// 21
	[4, 144, 116, 4, 145, 117],
	[17, 68, 42],
	[17, 50, 22, 6, 51, 23],
	[19, 46, 16, 6, 47, 17],
	// 22
	[2, 139, 111, 7, 140, 112],
	[17, 74, 46],
	[7, 54, 24, 16, 55, 25],
	[34, 37, 13],
	// 23
	[4, 151, 121, 5, 152, 122],
	[4, 75, 47, 14, 76, 48],
	[11, 54, 24, 14, 55, 25],
	[16, 45, 15, 14, 46, 16],
	// 24
	[6, 147, 117, 4, 148, 118],
	[6, 73, 45, 14, 74, 46],
	[11, 54, 24, 16, 55, 25],
	[30, 46, 16, 2, 47, 17],
	// 25
	[8, 132, 106, 4, 133, 107],
	[8, 75, 47, 13, 76, 48],
	[7, 54, 24, 22, 55, 25],
	[22, 45, 15, 13, 46, 16],
	// 26
	[10, 142, 114, 2, 143, 115],
	[19, 74, 46, 4, 75, 47],
	[28, 50, 22, 6, 51, 23],
	[33, 46, 16, 4, 47, 17],
	// 27
	[8, 152, 122, 4, 153, 123],
	[22, 73, 45, 3, 74, 46],
	[8, 53, 23, 26, 54, 24],
	[12, 45, 15, 28, 46, 16],
	// 28
	[3, 147, 117, 10, 148, 118],
	[3, 73, 45, 23, 74, 46],
	[4, 54, 24, 31, 55, 25],
	[11, 45, 15, 31, 46, 16],
	// 29
	[7, 146, 116, 7, 147, 117],
	[21, 73, 45, 7, 74, 46],
	[1, 53, 23, 37, 54, 24],
	[19, 45, 15, 26, 46, 16],
	// 30
	[5, 145, 115, 10, 146, 116],
	[19, 75, 47, 10, 76, 48],
	[15, 54, 24, 25, 55, 25],
	[23, 45, 15, 25, 46, 16],
	// 31
	[13, 145, 115, 3, 146, 116],
	[2, 74, 46, 29, 75, 47],
	[42, 54, 24, 1, 55, 25],
	[23, 45, 15, 28, 46, 16],
	// 32
	[17, 145, 115],
	[10, 74, 46, 23, 75, 47],
	[10, 54, 24, 35, 55, 25],
	[19, 45, 15, 35, 46, 16],
	// 33
	[17, 145, 115, 1, 146, 116],
	[14, 74, 46, 21, 75, 47],
	[29, 54, 24, 19, 55, 25],
	[11, 45, 15, 46, 46, 16],
	// 34
	[13, 145, 115, 6, 146, 116],
	[14, 74, 46, 23, 75, 47],
	[44, 54, 24, 7, 55, 25],
	[59, 46, 16, 1, 47, 17],
	// 35
	[12, 151, 121, 7, 152, 122],
	[12, 75, 47, 26, 76, 48],
	[39, 54, 24, 14, 55, 25],
	[22, 45, 15, 41, 46, 16],
	// 36
	[6, 151, 121, 14, 152, 122],
	[6, 75, 47, 34, 76, 48],
	[46, 54, 24, 10, 55, 25],
	[2, 45, 15, 64, 46, 16],
	// 37
	[17, 152, 122, 4, 153, 123],
	[29, 74, 46, 14, 75, 47],
	[49, 54, 24, 10, 55, 25],
	[24, 45, 15, 46, 46, 16],
	// 38
	[4, 152, 122, 18, 153, 123],
	[13, 74, 46, 32, 75, 47],
	[48, 54, 24, 14, 55, 25],
	[42, 45, 15, 32, 46, 16],
	// 39
	[20, 147, 117, 4, 148, 118],
	[40, 75, 47, 7, 76, 48],
	[43, 54, 24, 22, 55, 25],
	[10, 45, 15, 67, 46, 16],
	// 40
	[19, 148, 118, 6, 149, 119],
	[18, 75, 47, 31, 76, 48],
	[34, 54, 24, 34, 55, 25],
	[20, 45, 15, 61, 46, 16]
]

/** 分块表的一行拆成实际块。长短两组各按块数展开，交错时按顺序取。 */
type VxQrBlock = {
	total: number
	data: number
}

function vxQrBlocks(version: number, level: VxQrcodeLevel): Array<VxQrBlock> {
	const row = VX_QR_RS_BLOCKS[(version - 1) * 4 + VX_QRCODE_LEVELS.indexOf(level)]
	const blocks: Array<VxQrBlock> = []
	for (let index = 0; index < row.length; index += 3) {
		const count = row[index]
		const total = row[index + 1]
		const data = row[index + 2]
		for (let repeat = 0; repeat < count; repeat++) {
			blocks.push({ total: total, data: data })
		}
	}
	return blocks
}

/** 一个版本 + 级别能放下的数据码字总数。 */
function vxQrDataCodewords(blocks: Array<VxQrBlock>): number {
	let total = 0
	for (let index = 0; index < blocks.length; index++) {
		total += blocks[index].data
	}
	return total
}

/** 文本按 UTF-8 转字节。App 上没有 TextEncoder，手写一遍，代理对按四字节处理。 */
function vxQrUtf8(text: string): Array<number> {
	const bytes: Array<number> = []
	for (let index = 0; index < text.length; index++) {
		const code = text.charCodeAt(index)
		if (code < 0x80) {
			bytes.push(code)
		} else if (code < 0x800) {
			bytes.push(0xc0 | (code >> 6))
			bytes.push(0x80 | (code & 0x3f))
		} else if (code >= 0xd800 && code <= 0xdbff) {
			const next = index + 1 < text.length ? text.charCodeAt(index + 1) : 0
			if (next >= 0xdc00 && next <= 0xdfff) {
				const point = 0x10000 + ((code - 0xd800) << 10) + (next - 0xdc00)
				bytes.push(0xf0 | (point >> 18))
				bytes.push(0x80 | ((point >> 12) & 0x3f))
				bytes.push(0x80 | ((point >> 6) & 0x3f))
				bytes.push(0x80 | (point & 0x3f))
				index++
			} else {
				// 落单的代理项写成 U+FFFD，和浏览器编码结果一致，不抛错。
				bytes.push(0xef)
				bytes.push(0xbf)
				bytes.push(0xbd)
			}
		} else if (code >= 0xdc00 && code <= 0xdfff) {
			bytes.push(0xef)
			bytes.push(0xbf)
			bytes.push(0xbd)
		} else {
			bytes.push(0xe0 | (code >> 12))
			bytes.push(0x80 | ((code >> 6) & 0x3f))
			bytes.push(0x80 | (code & 0x3f))
		}
	}
	return bytes
}

function vxQrPushBits(bits: Array<number>, value: number, length: number) {
	for (let index = length - 1; index >= 0; index--) {
		bits.push((value >>> index) & 1)
	}
}

/**
 * 数据位流：字节模式标识 0100、字符数、内容，补终止符和字节对齐，
 * 然后按 0xEC / 0x11 交替填满数据码字。
 */
function vxQrDataBytes(bytes: Array<number>, version: number, dataCodewords: number): Array<number> {
	const capacity = dataCodewords * 8
	const bits: Array<number> = []
	vxQrPushBits(bits, 0x4, 4)
	vxQrPushBits(bits, bytes.length, version <= 9 ? 8 : 16)
	for (let index = 0; index < bytes.length; index++) {
		vxQrPushBits(bits, bytes[index], 8)
	}

	let terminator = 4
	while (terminator > 0 && bits.length < capacity) {
		bits.push(0)
		terminator--
	}
	while (bits.length % 8 !== 0) {
		bits.push(0)
	}

	let pad = 0xec
	while (bits.length < capacity) {
		vxQrPushBits(bits, pad, 8)
		pad = pad === 0xec ? 0x11 : 0xec
	}

	const data: Array<number> = []
	for (let index = 0; index < bits.length; index += 8) {
		let value = 0
		for (let offset = 0; offset < 8; offset++) {
			value = (value << 1) | bits[index + offset]
		}
		data.push(value)
	}
	return data
}

// GF(256) 的指数和对数表，生成多项式用 0x11D，和二维码标准一致。
const VX_QR_GF_EXP: Array<number> = []
const VX_QR_GF_LOG: Array<number> = []
for (let index = 0, value = 1; index < 255; index++) {
	VX_QR_GF_EXP.push(value)
	VX_QR_GF_LOG[value] = index
	value = value << 1
	if ((value & 0x100) !== 0) value ^= 0x11d
}
for (let index = 255; index < 512; index++) {
	VX_QR_GF_EXP.push(VX_QR_GF_EXP[index - 255])
}

function vxQrGfMultiply(left: number, right: number): number {
	if (left === 0 || right === 0) return 0
	return VX_QR_GF_EXP[VX_QR_GF_LOG[left] + VX_QR_GF_LOG[right]]
}

/** 生成多项式 g(x) = (x - α^0)(x - α^1)…，系数从最高次到常数项。 */
function vxQrGenerator(eccCount: number): Array<number> {
	let polynomial: Array<number> = [1]
	for (let index = 0; index < eccCount; index++) {
		const next: Array<number> = []
		for (let position = 0; position < polynomial.length + 1; position++) {
			next.push(0)
		}
		for (let position = 0; position < polynomial.length; position++) {
			next[position] ^= polynomial[position]
			next[position + 1] ^= vxQrGfMultiply(polynomial[position], VX_QR_GF_EXP[index])
		}
		polynomial = next
	}
	return polynomial
}

/** 一个块的纠错码字。生成多项式由调用方按纠错长度算一次，同一版的块共用。 */
function vxQrEcc(data: Array<number>, generator: Array<number>): Array<number> {
	const eccCount = generator.length - 1
	const remainder: Array<number> = []
	for (let index = 0; index < eccCount; index++) {
		remainder.push(0)
	}
	for (let index = 0; index < data.length; index++) {
		const factor = data[index] ^ remainder[0]
		for (let shift = 0; shift < eccCount - 1; shift++) {
			remainder[shift] = remainder[shift + 1]
		}
		remainder[eccCount - 1] = 0
		if (factor === 0) continue
		for (let position = 0; position < eccCount; position++) {
			remainder[position] ^= vxQrGfMultiply(generator[position + 1], factor)
		}
	}
	return remainder
}

/** 按标准交错：先逐列取各块的数据码字，再逐列取各块的纠错码字。 */
function vxQrInterleave(data: Array<number>, blocks: Array<VxQrBlock>): Array<number> {
	const dataBlocks: Array<Array<number>> = []
	const eccBlocks: Array<Array<number>> = []
	const eccCount = blocks[0].total - blocks[0].data
	const generator = vxQrGenerator(eccCount)
	let offset = 0
	let maxData = 0
	for (let index = 0; index < blocks.length; index++) {
		const blockData = data.slice(offset, offset + blocks[index].data)
		offset += blocks[index].data
		dataBlocks.push(blockData)
		eccBlocks.push(vxQrEcc(blockData, generator))
		if (blockData.length > maxData) maxData = blockData.length
	}

	const codewords: Array<number> = []
	for (let position = 0; position < maxData; position++) {
		for (let index = 0; index < dataBlocks.length; index++) {
			if (position < dataBlocks[index].length) codewords.push(dataBlocks[index][position])
		}
	}
	for (let position = 0; position < eccCount; position++) {
		for (let index = 0; index < eccBlocks.length; index++) {
			codewords.push(eccBlocks[index][position])
		}
	}
	return codewords
}

/** BCH 码的多项式位数，用来把余数收到 10 / 12 位。 */
function vxQrBitLength(value: number): number {
	let length = 0
	while (value !== 0) {
		length++
		value >>>= 1
	}
	return length
}

/** 15 位格式信息：级别 2 位 + 掩码 3 位，加 BCH 校验后异或掩码常量。 */
function vxQrFormatBits(level: VxQrcodeLevel, mask: number): number {
	const data = (VX_QRCODE_LEVEL_BITS[level] << 3) | mask
	let remainder = data << 10
	while (vxQrBitLength(remainder) - vxQrBitLength(0x537) >= 0) {
		remainder ^= 0x537 << (vxQrBitLength(remainder) - vxQrBitLength(0x537))
	}
	return ((data << 10) | remainder) ^ 0x5412
}

/** 18 位版本信息，版本 7 起才写。 */
function vxQrVersionBits(version: number): number {
	let remainder = version << 12
	while (vxQrBitLength(remainder) - vxQrBitLength(0x1f25) >= 0) {
		remainder ^= 0x1f25 << (vxQrBitLength(remainder) - vxQrBitLength(0x1f25))
	}
	return (version << 12) | remainder
}

/** 功能图形先占位，数据只往 null 里填。 */
function vxQrEmptyMatrix(size: number): Array<Array<boolean | null>> {
	const modules: Array<Array<boolean | null>> = []
	for (let row = 0; row < size; row++) {
		const line: Array<boolean | null> = []
		for (let col = 0; col < size; col++) {
			line.push(null)
		}
		modules.push(line)
	}
	return modules
}

/** 三个定位图形和分隔带：外圈 7×7 方框、内圈 3×3 实心，外沿留一圈浅色。 */
function vxQrPlaceFinder(modules: Array<Array<boolean | null>>, row: number, col: number) {
	for (let offsetRow = -1; offsetRow <= 7; offsetRow++) {
		for (let offsetCol = -1; offsetCol <= 7; offsetCol++) {
			const targetRow = row + offsetRow
			const targetCol = col + offsetCol
			if (targetRow < 0 || targetRow >= modules.length) continue
			if (targetCol < 0 || targetCol >= modules.length) continue
			// 分隔带那一圈（-1 和 7）不能算进外框，否则定位图形会宽出一格。
			const inBox = offsetRow >= 0 && offsetRow <= 6 && offsetCol >= 0 && offsetCol <= 6
			const onOuter =
				inBox && (offsetRow === 0 || offsetRow === 6 || offsetCol === 0 || offsetCol === 6)
			const onInner = offsetRow >= 2 && offsetRow <= 4 && offsetCol >= 2 && offsetCol <= 4
			modules[targetRow][targetCol] = onOuter || onInner ? true : false
		}
	}
}

/** 对齐图形的位置：从右下往上按步长排，6 固定留在最前。 */
function vxQrAlignmentPositions(version: number, size: number): Array<number> {
	if (version === 1) return []
	const count = Math.floor(version / 7) + 2
	const step = Math.floor((version * 8 + count * 3 + 5) / (count * 4 - 4)) * 2
	const positions: Array<number> = [6]
	for (let position = size - 7; positions.length < count; position -= step) {
		positions.splice(1, 0, position)
	}
	return positions
}

function vxQrPlaceAlignment(modules: Array<Array<boolean | null>>, version: number) {
	const size = modules.length
	const positions = vxQrAlignmentPositions(version, size)
	for (let rowIndex = 0; rowIndex < positions.length; rowIndex++) {
		for (let colIndex = 0; colIndex < positions.length; colIndex++) {
			const centerRow = positions[rowIndex]
			const centerCol = positions[colIndex]
			// 落在定位图形上的对齐图形没有意义，中心已被占位时跳过。
			if (modules[centerRow][centerCol] !== null) continue
			for (let offsetRow = -2; offsetRow <= 2; offsetRow++) {
				for (let offsetCol = -2; offsetCol <= 2; offsetCol++) {
					const distance = Math.max(Math.abs(offsetRow), Math.abs(offsetCol))
					modules[centerRow + offsetRow][centerCol + offsetCol] = distance !== 1
				}
			}
		}
	}
}

/** 定时图形：第 6 行和第 6 列交替深浅，已占位的地方不覆盖。 */
function vxQrPlaceTiming(modules: Array<Array<boolean | null>>) {
	const size = modules.length
	for (let index = 8; index < size - 8; index++) {
		if (modules[6][index] === null) modules[6][index] = index % 2 === 0
		if (modules[index][6] === null) modules[index][6] = index % 2 === 0
	}
}

/** 格式信息写两遍：左下竖排和右上横排，版本 7 起再补两处版本信息。 */
function vxQrPlaceFormat(modules: Array<Array<boolean | null>>, level: VxQrcodeLevel, mask: number) {
	const size = modules.length
	const bits = vxQrFormatBits(level, mask)
	for (let index = 0; index < 15; index++) {
		const dark = ((bits >>> index) & 1) === 1
		if (index < 6) {
			modules[index][8] = dark
		} else if (index < 8) {
			modules[index + 1][8] = dark
		} else {
			modules[size - 15 + index][8] = dark
		}

		if (index < 8) {
			modules[8][size - 1 - index] = dark
		} else if (index === 8) {
			modules[8][7] = dark
		} else {
			modules[8][14 - index] = dark
		}
	}
}

function vxQrPlaceVersion(modules: Array<Array<boolean | null>>, version: number) {
	if (version < 7) return
	const size = modules.length
	const bits = vxQrVersionBits(version)
	for (let index = 0; index < 18; index++) {
		const dark = ((bits >>> index) & 1) === 1
		modules[Math.floor(index / 3)][(index % 3) + size - 11] = dark
		modules[(index % 3) + size - 11][Math.floor(index / 3)] = dark
	}
}

/** 八种掩码，1 表示该位置取反。 */
function vxQrMasked(mask: number, row: number, col: number): boolean {
	if (mask === 0) return (row + col) % 2 === 0
	if (mask === 1) return row % 2 === 0
	if (mask === 2) return col % 3 === 0
	if (mask === 3) return (row + col) % 3 === 0
	if (mask === 4) return (Math.floor(row / 2) + Math.floor(col / 3)) % 2 === 0
	if (mask === 5) return ((row * col) % 2) + ((row * col) % 3) === 0
	if (mask === 6) return (((row * col) % 2) + ((row * col) % 3)) % 2 === 0
	return (((row * col) % 3) + ((row + col) % 2)) % 2 === 0
}

/** 从右下角起按两列一组蛇形填数据，第 6 列是定时图形，整列跳过。 */
function vxQrPlaceData(modules: Array<Array<boolean | null>>, codewords: Array<number>, mask: number) {
	const size = modules.length
	let direction = -1
	let row = size - 1
	let bitIndex = 7
	let byteIndex = 0
	for (let col = size - 1; col > 0; col -= 2) {
		if (col === 6) col--
		for (;;) {
			for (let offset = 0; offset < 2; offset++) {
				const targetRow = row
				const targetCol = col - offset
				if (modules[targetRow][targetCol] !== null) continue
				let dark = false
				if (byteIndex < codewords.length) {
					dark = ((codewords[byteIndex] >>> bitIndex) & 1) === 1
				}
				if (vxQrMasked(mask, targetRow, targetCol)) dark = !dark
				modules[targetRow][targetCol] = dark
				bitIndex--
				if (bitIndex < 0) {
					byteIndex++
					bitIndex = 7
				}
			}
			row += direction
			if (row < 0 || row >= size) {
				row -= direction
				direction = -direction
				break
			}
		}
	}
}

/** 罚分规则一：一行或一列里连续五格以上同色。 */
function vxQrPenaltyRuns(modules: Array<Array<boolean | null>>): number {
	const size = modules.length
	let score = 0
	for (let line = 0; line < size; line++) {
		const horizontal = modules[line]
		for (let axis = 0; axis < 2; axis++) {
			let run = 1
			let previous = axis === 0 ? horizontal[0] === true : modules[0][line] === true
			for (let position = 1; position < size; position++) {
				const current = axis === 0 ? horizontal[position] === true : modules[position][line] === true
				if (current === previous) {
					run++
				} else {
					if (run >= 5) score += 3 + (run - 5)
					run = 1
					previous = current
				}
			}
			if (run >= 5) score += 3 + (run - 5)
		}
	}
	return score
}

/** 罚分规则二：2×2 同色块。 */
function vxQrPenaltyBlocks(modules: Array<Array<boolean | null>>): number {
	const size = modules.length
	let score = 0
	for (let row = 0; row < size - 1; row++) {
		const line = modules[row]
		const next = modules[row + 1]
		for (let col = 0; col < size - 1; col++) {
			const dark = line[col] === true
			if (
				(line[col + 1] === true) === dark &&
				(next[col] === true) === dark &&
				(next[col + 1] === true) === dark
			) {
				score += 3
			}
		}
	}
	return score
}

// 0x5d0 = 10111010000，0x5d = 00001011101。按位比对，不把整行拼成字符串。
const VX_QR_FINDER_A = 0x5d0
const VX_QR_FINDER_B = 0x5d

function vxQrFinderWindow(
	modules: Array<Array<boolean | null>>,
	row: number,
	col: number,
	horizontal: boolean
): boolean {
	let pattern = 0
	for (let offset = 0; offset < 11; offset++) {
		const dark = horizontal ? modules[row][col + offset] === true : modules[row + offset][col] === true
		if (dark) pattern |= 1 << (10 - offset)
	}
	return pattern === VX_QR_FINDER_A || pattern === VX_QR_FINDER_B
}

function vxQrPenaltyFinder(modules: Array<Array<boolean | null>>): number {
	const size = modules.length
	if (size < 11) return 0
	let score = 0
	const last = size - 11
	for (let line = 0; line < size; line++) {
		for (let start = 0; start <= last; start++) {
			if (vxQrFinderWindow(modules, line, start, true)) score += 40
			if (vxQrFinderWindow(modules, start, line, false)) score += 40
		}
	}
	return score
}

/** 罚分规则四：深色比例偏离一半的程度，每 5% 记 10 分。 */
function vxQrPenaltyBalance(modules: Array<Array<boolean | null>>): number {
	const size = modules.length
	let dark = 0
	for (let row = 0; row < size; row++) {
		const line = modules[row]
		for (let col = 0; col < size; col++) {
			if (line[col] === true) dark++
		}
	}
	const total = size * size
	const percent = (dark * 100) / total
	return Math.floor(Math.abs(percent - 50) / 5) * 10
}

// limit < 0 时四条都算完。已经不比当前最优更好时提前停，掩码结果和算完一样。
function vxQrPenalty(modules: Array<Array<boolean | null>>, limit: number): number {
	let score = vxQrPenaltyRuns(modules)
	if (limit >= 0 && score >= limit) return score
	score += vxQrPenaltyBlocks(modules)
	if (limit >= 0 && score >= limit) return score
	score += vxQrPenaltyFinder(modules)
	if (limit >= 0 && score >= limit) return score
	return score + vxQrPenaltyBalance(modules)
}

/** 功能图形只画一次，后面八个掩码各复制一份。 */
function vxQrBase(version: number): Array<Array<boolean | null>> {
	const size = version * 4 + 17
	const modules = vxQrEmptyMatrix(size)
	vxQrPlaceFinder(modules, 0, 0)
	vxQrPlaceFinder(modules, size - 7, 0)
	vxQrPlaceFinder(modules, 0, size - 7)
	vxQrPlaceAlignment(modules, version)
	vxQrPlaceTiming(modules)
	// 固定深色模块，位置在左下角、格式信息上方。
	modules[size - 8][8] = true

	// 格式信息的 30 个位置先占住，数据不会写进来；具体位值按掩码再写。
	for (let index = 0; index < 9; index++) {
		if (modules[index][8] === null) modules[index][8] = false
		if (modules[8][index] === null) modules[8][index] = false
	}
	for (let index = 0; index < 8; index++) {
		if (modules[size - 1 - index][8] === null) modules[size - 1 - index][8] = false
		if (modules[8][size - 1 - index] === null) modules[8][size - 1 - index] = false
	}
	if (version >= 7) {
		for (let index = 0; index < 18; index++) {
			const row = Math.floor(index / 3)
			const col = (index % 3) + size - 11
			modules[row][col] = false
			modules[col][row] = false
		}
	}
	return modules
}

// 克隆时保留 null：数据只能往还是 null 的格子里写，先转成 false 就再也填不进去了。
function vxQrCloneMatrix(modules: Array<Array<boolean | null>>): Array<Array<boolean | null>> {
	const clone: Array<Array<boolean | null>> = []
	for (let row = 0; row < modules.length; row++) {
		const line: Array<boolean | null> = []
		for (let col = 0; col < modules.length; col++) {
			line.push(modules[row][col])
		}
		clone.push(line)
	}
	return clone
}

/** 数据填完后不应该再有 null；返回前收成布尔，浅色和没写到的格子都是 false。 */
function vxQrResolveMatrix(modules: Array<Array<boolean | null>>): Array<Array<boolean>> {
	const resolved: Array<Array<boolean>> = []
	for (let row = 0; row < modules.length; row++) {
		const line: Array<boolean> = []
		for (let col = 0; col < modules.length; col++) {
			line.push(modules[row][col] === true)
		}
		resolved.push(line)
	}
	return resolved
}

/**
 * 生成二维码。内容为空或超出 40 版容量时 matrix 为 null，
 * 其余情况返回不含边距的方阵。
 */
export function vxQrcodeEncode(text: string, level: VxQrcodeLevel): VxQrcodeResult {
	if (text.length === 0) return { matrix: null, error: 'empty' }

	// 业务传进来的级别可能是旧代码里的字符串，认不出来时按 M 处理，不让分块表读到 undefined。
	const resolvedLevel = VX_QRCODE_LEVELS.indexOf(level) >= 0 ? level : 'M'
	const bytes = vxQrUtf8(text)
	let version = 0
	let blocks: Array<VxQrBlock> = []
	for (let candidate = 1; candidate <= 40; candidate++) {
		const candidateBlocks = vxQrBlocks(candidate, resolvedLevel)
		const dataBits = vxQrDataCodewords(candidateBlocks) * 8
		const countBits = candidate <= 9 ? 8 : 16
		if (4 + countBits + bytes.length * 8 <= dataBits) {
			version = candidate
			blocks = candidateBlocks
			break
		}
	}
	if (version === 0) return { matrix: null, error: 'overflow' }

	const data = vxQrDataBytes(bytes, version, vxQrDataCodewords(blocks))
	const codewords = vxQrInterleave(data, blocks)
	const base = vxQrBase(version)

	// 八个掩码各算一次罚分，取分数最低的；同分取靠前的，和标准一致。
	// 只把选中的那份收成布尔方阵，其余七份算完就丢掉。
	let best: Array<Array<boolean | null>> = []
	let bestScore = 0
	for (let mask = 0; mask < 8; mask++) {
		const modules = vxQrCloneMatrix(base)
		vxQrPlaceData(modules, codewords, mask)
		vxQrPlaceFormat(modules, resolvedLevel, mask)
		vxQrPlaceVersion(modules, version)
		const score = vxQrPenalty(modules, mask === 0 ? -1 : bestScore)
		if (mask === 0 || score < bestScore) {
			best = modules
			bestScore = score
		}
	}

	const resolved = vxQrResolveMatrix(best)
	return {
		matrix: {
			size: resolved.length,
			version: version,
			level: resolvedLevel,
			modules: resolved
		},
		error: ''
	}
}

/** 一块连续深色模块。左上角是 row/col，宽高按模块数，不含浅色和空白边距。 */
export type VxQrcodeRun = {
	row: number
	col: number
	rows: number
	cols: number
}

/**
 * 把深色模块收成矩形块，供组件少建 view。
 * 先按行合成连续段，再把下一行同起点、同宽度的段叠高；对不齐就另起一块。
 */
export function vxQrcodeRuns(modules: Array<Array<boolean>>): Array<VxQrcodeRun> {
	const runs: Array<VxQrcodeRun> = []
	const size = modules.length
	let open: Array<VxQrcodeRun> = []
	for (let row = 0; row < size; row++) {
		const line = modules[row]
		const current: Array<VxQrcodeRun> = []
		let col = 0
		while (col < size) {
			while (col < size && !line[col]) col++
			if (col >= size) break
			const start = col
			while (col < size && line[col]) col++
			current.push({
				row: row,
				col: start,
				rows: 1,
				cols: col - start
			})
		}

		const next: Array<VxQrcodeRun> = []
		let openIndex = 0
		let currentIndex = 0
		while (openIndex < open.length && currentIndex < current.length) {
			const previous = open[openIndex]
			const run = current[currentIndex]
			if (previous.col === run.col && previous.cols === run.cols) {
				previous.rows += 1
				next.push(previous)
				openIndex++
				currentIndex++
				continue
			}
			if (previous.col + previous.cols <= run.col) {
				runs.push(previous)
				openIndex++
				continue
			}
			if (run.col + run.cols <= previous.col) {
				next.push(run)
				currentIndex++
				continue
			}
			runs.push(previous)
			openIndex++
		}
		while (openIndex < open.length) {
			runs.push(open[openIndex])
			openIndex++
		}
		while (currentIndex < current.length) {
			next.push(current[currentIndex])
			currentIndex++
		}
		open = next
	}
	for (let index = 0; index < open.length; index++) {
		runs.push(open[index])
	}
	return runs
}
