/**
 * 表单校验规则引擎。
 *
 * 只做「值 + 规则 → 一句文案」的纯计算，不依赖组件、页面和主题；vx-form-item 调它，
 * 后续 Pro 的复杂表单也能直接复用。返回值统一：通过是空串，失败是一句可以直接显示的文案。
 */

/** 表单值。业务仍用各控件自己的 v-model，这里只接一份用于校验的快照。 */
export type VxFormValue = string | number | boolean | Array<string>

/** 内置格式规则：手机号、邮箱、身份证号、链接、数字。 */
export type VxFormRuleType = 'phone' | 'email' | 'idcard' | 'url' | 'number'

/**
 * 一条校验规则。字段可以组合：例如同时写 required、len 和 message，
 * 按「必填 → 长度 → 范围 → 格式 → 正则 → 自定义」的顺序命中第一条失败。
 *
 * 不放 trigger：实时校验由业务在控件的 change / blur 里调 validateField，写在类型里会让业务以为它生效。
 */
export type VxFormRule = {
	/** 必填。空值只跑这一项，不再继续跑格式规则。 */
	required?: boolean
	/** 下限：字符串按长度、数字按数值、数组按元素个数。 */
	min?: number
	/** 上限：字符串按长度、数字按数值、数组按元素个数。 */
	max?: number
	/** 定长：字符串按长度、数字按数值相等、数组按元素个数。 */
	len?: number
	/** 字符串正则，内部走 new RegExp；不直接传 RegExp 实例，跨端更稳。 */
	pattern?: string
	/** 内置格式。 */
	type?: VxFormRuleType
	/** 失败文案；不传时用内置中文文案。 */
	message?: string
	/** 自定义校验：返回 '' 通过，返回文案即失败；抛异常按失败处理。 */
	validator?: (value: VxFormValue) => string | Promise<string>
}

// 内置正则写死，和设计规范一致；业务自己的格式用 pattern。
const VX_PHONE_PATTERN = '^1[3-9]\\d{9}$'
const VX_EMAIL_PATTERN = '^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'
const VX_IDCARD_PATTERN = '^\\d{17}[\\dXx]$'
const VX_URL_PATTERN = '^https?:\\/\\/\\S+$'

/** 空值：''、null、undefined、false（未勾选）、空数组、NaN。0 是有效数值，不算空。 */
function isFormValueEmpty(value: VxFormValue): boolean {
	if (value == null) return true
	if (typeof value === 'string') return value.length === 0
	if (typeof value === 'boolean') return value === false
	if (Array.isArray(value)) return value.length === 0
	if (typeof value === 'number') {
		// NaN 和任何值比较都是 false：不拦住它会绕过 required，还会绕过 min / max。
		return value !== value
	}
	return false
}

/** 参与长度 / 范围比较的值。布尔没有长度概念，由调用方先跳过。 */
function formValueSize(value: VxFormValue): number {
	if (typeof value === 'string') return value.length
	if (typeof value === 'number') return value
	if (Array.isArray(value)) return value.length
	return 0
}

function hasFormValueSize(value: VxFormValue): boolean {
	return typeof value === 'string' || typeof value === 'number' || Array.isArray(value)
}

/** 把数字和布尔转成字符串；数组没有可比较的文本形式，交给格式规则判失败。 */
function formValueText(value: VxFormValue): string {
	if (typeof value === 'string') return value
	if (typeof value === 'number') return `${value}`
	if (typeof value === 'boolean') return value ? 'true' : 'false'
	return ''
}

/** 规则自带的文案优先；没有就用内置文案。 */
function ruleMessage(rule: VxFormRule, fallback: string): string {
	const message = rule.message
	if (message != null && message.length > 0) return message
	return fallback
}

/** 长度 / 范围的默认文案，按值的类型换措辞。 */
function sizeMessage(value: VxFormValue, kind: string, limit: number): string {
	if (typeof value === 'string') {
		if (kind === 'len') return `长度需为 ${limit} 个字符`
		if (kind === 'min') return `不能少于 ${limit} 个字符`
		return `不能超过 ${limit} 个字符`
	}
	if (Array.isArray(value)) {
		if (kind === 'len') return `需选择 ${limit} 项`
		if (kind === 'min') return `至少选择 ${limit} 项`
		return `至多选择 ${limit} 项`
	}
	if (kind === 'len') return `需等于 ${limit}`
	if (kind === 'min') return `不能小于 ${limit}`
	return `不能大于 ${limit}`
}

function regexTest(pattern: string, text: string): boolean {
	return new RegExp(pattern).test(text)
}

/**
 * 整串必须是一个十进制数：parseFloat 认得出来还不够，"12px"、"1e3" 都要判失败。
 * 允许开头一个正负号、一个小数点，其余只能是数字。
 */
function isWholeNumber(text: string): boolean {
	if (text.length === 0) return false
	const parsed = parseFloat(text)
	if (!isFinite(parsed)) return false
	let dots = 0
	let digits = 0
	for (let index = 0; index < text.length; index++) {
		const code = text.charCodeAt(index)
		if (code >= 48 && code <= 57) {
			digits++
			continue
		}
		if (code === 46) {
			dots++
			if (dots > 1) return false
			continue
		}
		if ((code === 43 || code === 45) && index === 0) continue
		return false
	}
	return digits > 0
}

/** 内置格式检查。返回空串表示通过，否则是一句默认文案。 */
function typeMessage(value: VxFormValue, type: VxFormRuleType): string {
	const text = formValueText(value)
	if (type === 'phone') return regexTest(VX_PHONE_PATTERN, text) ? '' : '手机号格式不正确'
	if (type === 'email') return regexTest(VX_EMAIL_PATTERN, text) ? '' : '邮箱格式不正确'
	if (type === 'idcard') return regexTest(VX_IDCARD_PATTERN, text) ? '' : '身份证号格式不正确'
	if (type === 'url') return regexTest(VX_URL_PATTERN, text) ? '' : '链接格式不正确'
	return isWholeNumber(text) ? '' : '请输入数字'
}

/** 异常的 message 优先；拿不到就用默认文案，异常内容不直接展示给用户。 */
function errorMessage(error: any): string {
	if (typeof error === 'string') return error.length > 0 ? error : '校验未通过'
	if (error != null) {
		try {
			const message = error.message
			if (message != null) {
				const text = `${message}`
				if (text.length > 0 && text !== 'undefined') return text
			}
		} catch (ignored) {
			// 不是 Error 结构：按默认文案处理。
		}
	}
	return '校验未通过'
}

/**
 * 跑一组规则。按注册顺序执行，第一个失败立即返回。
 *
 * 判定顺序写死：空值只看 required；非空依次跑 len → min / max → type → pattern → validator。
 * 空值且非必填直接通过，避免空字段报「格式不对」。
 */
export async function runFormRules(value: VxFormValue, rules: Array<VxFormRule>): Promise<string> {
	if (isFormValueEmpty(value)) {
		for (let index = 0; index < rules.length; index++) {
			const rule = rules[index]
			if (rule.required === true) return ruleMessage(rule, '请填写')
		}
		return ''
	}

	const sized = hasFormValueSize(value)

	// 定长、下限、上限分三段跑：规则数组的书写顺序不影响这三类的优先级。
	if (sized) {
		const size = formValueSize(value)
		for (let index = 0; index < rules.length; index++) {
			const rule = rules[index]
			const limit = rule.len
			if (limit == null) continue
			if (size !== limit) return ruleMessage(rule, sizeMessage(value, 'len', limit))
		}
		for (let index = 0; index < rules.length; index++) {
			const rule = rules[index]
			const limit = rule.min
			if (limit == null) continue
			if (size < limit) return ruleMessage(rule, sizeMessage(value, 'min', limit))
		}
		for (let index = 0; index < rules.length; index++) {
			const rule = rules[index]
			const limit = rule.max
			if (limit == null) continue
			if (size > limit) return ruleMessage(rule, sizeMessage(value, 'max', limit))
		}
	}

	for (let index = 0; index < rules.length; index++) {
		const rule = rules[index]
		const ruleType = rule.type
		if (ruleType == null) continue
		const message = typeMessage(value, ruleType)
		if (message.length > 0) return ruleMessage(rule, message)
	}

	for (let index = 0; index < rules.length; index++) {
		const rule = rules[index]
		const pattern = rule.pattern
		if (pattern == null || pattern.length === 0) continue
		let passed = false
		try {
			passed = regexTest(pattern, formValueText(value))
		} catch (error) {
			// 正则写错按失败处理：不把配置错误抛给页面，也不静默放行。
			passed = false
		}
		if (!passed) return ruleMessage(rule, '格式不正确')
	}

	for (let index = 0; index < rules.length; index++) {
		const rule = rules[index]
		const validator = rule.validator
		if (validator == null) continue
		let message = ''
		let pending: Promise<string> | null = null
		try {
			const result = validator(value)
			if (typeof result === 'string') message = result
			else pending = result
		} catch (error) {
			// 异常按失败处理；文案优先用异常自带的 message，不再被规则 message 盖住。
			return errorMessage(error)
		}
		if (pending != null) {
			try {
				message = await pending
				// 与同步分支一致：非 string（含 undefined）按通过，收成空串；异常仍走 catch。
				if (typeof message !== 'string') message = ''
			} catch (error) {
				return errorMessage(error)
			}
		}
		if (message.length > 0) return message
	}

	return ''
}
