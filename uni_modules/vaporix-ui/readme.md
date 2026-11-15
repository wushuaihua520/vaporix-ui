# 元汽UI

uni-app x 蒸汽模式原生渲染组件库，按 `uni_modules` 规范组织。基础组件使用 MIT，全文见 `license.md`。

令牌实现以 `libs/style/variables.css` 为准。完整设计规范在源码仓库根目录的 DESIGN.md。

## 接入

1. 把 `vaporix-ui` 目录放到项目的 `uni_modules` 下。
2. 在 `App.uvue` 的 `<style>` 中引入令牌：

```vue
<style>
	/* #ifndef WEB */
	@import "@/uni_modules/vaporix-ui/libs/style/variables.css";
	/* #endif */
</style>
```

Web 端在样式隔离 2.0 下改为 `main.uts` 引入：

```js
// #ifdef WEB
import "@/uni_modules/vaporix-ui/libs/style/variables.css"
// #endif
```

App 端图标字体不需要额外配置：`variables.css` 和 `icons-extend.css` 在 App 分支里内嵌 base64，字体随样式一起进包，不依赖 `uni_modules` 下 static 目录的同步。Web 用包内 ttf，小程序内嵌 base64。

3. 页面根节点加 `vx-theme-light` 或 `vx-theme-dark`。
4. 组件目录符合 easycom 规范，`autoscan` 会自动注册，不需要写 `custom` 正则。同时安装 `vaporix-ui-pro` 时也不要写一条 `^vx-(.*)`，否则所有 `vx-` 标签都会指向其中一个目录。

```json
"easycom": {
	"autoscan": true
}
```

弹层开着时，页面在 `onBackPress` 里调当前这个实例的 `cancel()` 并返回 `true`；没开着就不拦截返回。组件不做「谁在最上层」的栈，业务自己判断当前实例。

```ts
onBackPress(() => {
	if (drawerVisible.value !== true) return false
	drawerRef.value?.cancel?.()
	return true
})
```

## vx-button

按钮的视觉层级用 `variant` 表达，形状用 `shape` 表达。`plain`、`round` 是旧写法，保留兼容；新代码不要与 `variant` / `shape` 混用。

```vue
<vx-button text="页面主操作" type="primary" />
<vx-button text="页面辅助操作" type="danger" variant="plain" />
<vx-button text="页面辅助操作" type="success" variant="soft" />
<vx-button text="查看说明" type="info" variant="soft" />
<vx-button text="页面辅助操作" type="primary" variant="link" />
<vx-button text="胶囊按钮" type="primary" shape="pill" />
<vx-button text="强调按钮" type="primary" shadow />
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `default` | 语义类型 |
| variant | `solid` \| `plain` \| `soft` \| `link` | `solid` | 实心、镂空、浅底、纯文字 |
| shape | `rounded` \| `pill` \| `square` | `rounded` | 默认圆角、胶囊、平角 |
| size | `sm` \| `md` \| `lg` | `md` | 尺寸，对应 `--vx-control-height-*` |
| text | string | `''` | 按钮文案，也可用默认插槽 |
| plain | boolean | `false` | 兼容旧写法，等价于 `variant="plain"` |
| round | boolean | `false` | 兼容旧写法，等价于 `shape="pill"` |
| shadow | boolean | `false` | 显式强调阴影，只作用于实心与浅底按钮 |
| block | boolean | `false` | 占满整行；优先于 `width` |
| width | string | `''` | 自定义宽度，需带单位，如 `160px`、`100%` |
| height | string | `''` | 自定义高度，需带单位，如 `64px` |
| disabled | boolean | `false` | 禁用 |
| loading | boolean | `false` | 加载中，不触发 click，不渲染默认插槽 |

| 事件 | 说明 |
| --- | --- |
| click | 可点击时触发，不带参数 |

- 一屏一个实心 `primary`。
- `info` 只表示提示。
- `plain` / `soft` 给次要操作，可以多个。
- `link` 只留文字。导航用链接。
- `shadow` 只加在实心和浅底上。镂空、纯文字、禁用没有。
- `width` / `height` 只给特殊布局。常规页面用 `sm | md | lg`。

## vx-input

支持 `v-model`。尺寸、圆角、描边和字号与 `vx-button` 共用同一套令牌；控件高度取 `32 / 40 / 48px`。

```vue
<vx-input v-model="name" label="姓名" label-width="80px" required placeholder="请输入姓名" />
<vx-input v-model="keyword" placeholder="请输入关键词" clearable />
<vx-input v-model="ratio" label="百分比" label-width="80px" align="right" unit="%" type="digit" />
<vx-input v-model="region" label="地区" label-width="80px" readonly arrow @click="pickRegion" />

<vx-input v-model="query" variant="search" clearable placeholder="搜索商品、品牌或订单"
	@search="onSearch" @cancel="onSearchCancel" />
<vx-input v-model="query" variant="search" size="lg" clearable placeholder="大号搜索框" />
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | string | `''` | 输入值，支持 `v-model` |
| type | `text` \| `number` \| `digit` \| `tel` \| `idcard` | `text` | 键盘类型 |
| size | `sm` \| `md` \| `lg` | `md` | 控件尺寸，对应 `--vx-control-height-*` |
| variant | `outline` \| `line` \| `search` | `outline` | 描边盒、只保留底部分割线的表单行，或浅底胶囊搜索框 |
| shape | `rounded` \| `pill` \| `square` | `rounded` | 外轮廓，`line` 形态不参与 |
| placeholder | string | `''` | 占位文案 |
| password | boolean | `false` | 密码输入 |
| clearable | boolean | `false` | 有值时显示清除 |
| disabled | boolean | `false` | 禁用 |
| readonly | boolean | `false` | 只读展示，不唤起键盘，常用于选择器行 |
| maxlength | number | `-1` | 最大长度，`-1` 不限制 |
| invalid | boolean | `false` | 校验失败，只改描边 |
| confirmType | `done` \| `send` \| `search` \| `next` \| `go` | 按变体 | 键盘确认键；不传时 `search` 用 `search`，其余变体用 `done` |
| label | string | `''` | 输入区左侧标题 |
| labelWidth | string | `''` | 标题宽度，需带单位，如 `80px`；不传时按文字自适应 |
| required | boolean | `false` | 标题前显示必填星号 |
| align | `left` \| `right` | `left` | 输入内容与只读值的对齐方向 |
| unit | string | `''` | 右侧单位，如 `%`、`元`，不参与取值 |
| arrow | boolean | `false` | 右侧选择箭头，常与 `readonly` 搭配 |

| 事件 | 说明 |
| --- | --- |
| input | 输入中，参数为当前字符串；点清除时也会收到空串 |
| change | 失焦或确认，参数为当前字符串 |
| confirm | 点击确认键，参数为当前字符串 |
| search | 点击确认键，参数为当前字符串；只在 `variant="search"` 下抛 |
| cancel | 点击取消，无参数；`variant="search"` 下先清空并收起键盘再抛 |
| clear | 点击清除，无参数；点清除同时抛 `input('')`，不抛 `change` |
| focus / blur | 焦点变化，无参数 |
| click | 点击整行时触发，只读选择行用它打开选择器 |

| 插槽 | 说明 |
| --- | --- |
| prefix | 输入区左侧，可放区号或图标 |
| suffix | 输入区右侧，可放按钮或说明 |

- `clearable` 只在有值、未禁用且未只读时出现，与是否聚焦无关。
- `readonly` 不渲染原生 input，避免误唤起键盘；点击整行通过 `click` 事件处理。
- 清除和选择箭头使用 `vx-icon` 的 `close` / `chevron-right`，尺寸随输入框档位。
- 清除、箭头和后缀图标对齐右侧基线；单位与内容留 8px，箭头再补 4px 抵掉字形留白。
- `shape` 只作用于 `variant="outline"`；`line` 只保留下边框，适合成组的表单行。
- `variant="search"` 是输入框的搜索语义：浅底 `default-soft`、胶囊圆角、不画可见描边，前置 `search` 图标，左右内边距 12 / 16 / 16。默认不画描边，聚焦补 1px `primary`、`invalid` 补 1px `danger`，1px 透明边框让状态切换不跳行高。
- 搜索变体不渲染 `label` / `required` / `unit`，同时传了会在开发环境提示一次；搜索框没有标题位，标题和单位放到外面。`disabled` / `readonly` 照常生效。
- 搜索变体的键盘确认键默认是 `search`（放大镜 /「搜索」字样），点它照常抛 `confirm` 和 `search`，值正确；显式传 `confirmType` 时以传入值为准，`outline` / `line` 不传仍是 `done`。变体从 `search` 切回 `outline` / `line` 时键面跟着回到「完成」，不会残留。
- 搜索变体的取消按钮固定在右侧，`--vx-font-control-*`、`--vx-color-text-secondary`，有值或聚焦时出现，其余时候不占位；`disabled` 时仍显示但点不动，`readonly` 不出现。「取消」会清空 `v-model`、收起键盘后抛 `cancel`。
- 搜索变体的清除图标仍在取消左侧，`clearable` 打开且有值时出现。搜索图标沿用 `vx-icon` 的 `sm` / `md` 两档（14 / 18），`lg` 与 `md` 同档，不新增第四种图标尺寸；前置图标由组件画，不要再传 `prefix`。
- 同一屏的表单行建议统一 `label-width`，让输入起点对齐。
- `unit` 只作为展示，实际值仍是 `modelValue`；需要校验单位时在业务侧处理。

## vx-textarea

多行输入框，支持 `v-model`、标题与必填、固定高度、字数统计，并透传原生 textarea 的常用键盘与光标属性。字号、内边距和圆角与 `vx-input` 共用同一套令牌。

```vue
<vx-textarea v-model="intro" label="简介" label-width="72px" required placeholder="请输入简介" />
<vx-textarea v-model="intro" height="64px" placeholder="固定高度" />
<vx-textarea v-model="intro" counter :maxlength="140" placeholder="请输入简介" />
<vx-textarea v-model="intro" auto-height min-height="66px" placeholder="随内容增高" />
<vx-textarea v-model="intro" variant="plain" border-color="var(--vx-color-warning)" placeholder="无边框 + 自定义描边" />
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | string | `''` | 输入值，支持 `v-model` |
| size | `sm` \| `md` \| `lg` | `md` | 字号、内边距、圆角与内容区高度档位 |
| variant | `outline` \| `plain` \| `line` | `outline` | 描边盒、无边框段落、只保留下边框的表单行 |
| shape | `rounded` \| `square` | `rounded` | 外轮廓，`line` 形态不参与 |
| placeholder | string | `''` | 占位文案 |
| label | string | `''` | 内容区左侧标题 |
| labelWidth | string | `''` | 标题宽度，需带单位，如 `72px`；不传时按文字自适应 |
| required | boolean | `false` | 标题前显示必填星号 |
| disabled | boolean | `false` | 禁用，不可输入 |
| invalid | boolean | `false` | 校验失败，只改描边 |
| maxlength | number | `-1` | 最大长度，`-1` 不限制 |
| counter | boolean | `false` | 右下角显示字数统计 |
| height | string | `''` | 固定内容区高度，需带单位；`autoHeight` 时忽略 |
| minHeight | string | `''` | 内容区最小高度，需带单位 |
| autoHeight | boolean | `false` | 内容自适应增高 |
| borderColor | string | `''` | 默认态描边颜色，`focused` / `invalid` / `disabled` 优先 |
| focus | boolean | `false` | 获取焦点 |
| confirmType | `return` \| `send` \| `search` \| `next` \| `go` \| `done` | `return` | 键盘右下角按钮文案 |
| cursorSpacing | number | `0` | 光标与键盘的距离，单位 px |
| showConfirmBar | boolean | `true` | 显示键盘上方的完成栏 |
| adjustPosition | boolean | `true` | 键盘弹起时自动上推页面 |
| holdKeyboard | boolean | `false` | 聚焦时点击页面不收起键盘 |
| fixed | boolean | `false` | 位于 `position: fixed` 区域时使用 |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| input | 输入中触发 | 当前字符串 |
| focus / blur | 焦点变化 | 无 |
| confirm | 点击键盘确认键 | 当前字符串 |
| linechange | 行数变化 | 行数 |
| keyboardheightchange | 键盘高度变化 | 键盘高度 |

| 插槽 | 说明 |
| --- | --- |
| extra | 内容区底部左侧，计数或辅助操作的位置 |

- 不传 `height` 时，内容区默认高度由 `size` 决定：`sm` 60、`md` 66、`lg` 72，即三行文本。
- 组件固定关闭 iOS 默认内边距，内边距由 `size` 控制。
- `counter` 在设置 `maxlength` 时显示 `当前/上限`，达到上限后变为危险色；不限制时只显示当前字数。
- `borderColor` 只改默认态。错误用 `invalid`。
- `autoHeight` 由原生 textarea 撑高，`height` 不生效；需要下限时用 `minHeight`。
- 不提供 `readonly`：只读展示用 `text` 组件，不可编辑的表单值用 `disabled`，不要用禁用态冒充只读。

## vx-text

文本。正文、说明、金额、手机号和证件都用同一套字号、字重和语义色；支持内联和块级、三档尺寸、四种字重、对齐、装饰、截断、格式化、可选中和长按复制。

```vue
<template>
	<view class="page vx-theme-light">
		<vx-text text="订单已提交，我们会尽快为你发货。" />
		<vx-text block type="secondary" text="收货地址：深圳市南山区科技园" />
		<view class="row">
			<view class="row__label">
				<vx-text text="手机号：" />
			</view>
			<vx-text format="phone" text="15123452222" />
		</view>
		<vx-text block size="lg" weight="bold" format="amount" text="5201314" />
		<vx-text copyable text="订单号：VX202610300001" @copy="onCopy" />
		<vx-text disabled text="已停用，不响应点击和复制" />
	</view>
</template>

<script setup>
	const onCopy = (text: string) => {
		// text 是格式化后的完整文本；提示和埋点放这里
	}
</script>
```

```css
.row {
	flex-direction: row;
	align-items: center;
}

.row__label {
	margin-right: 8px;
}
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | string \| number | `''` | 文本内容；数字转字符串，空串不渲染 |
| type | `default` \| `secondary` \| `primary` \| `success` \| `info` \| `warning` \| `danger` | `default` | 文本颜色；secondary 是次要灰，其余按语义表达状态 |
| size | `sm` \| `md` \| `lg` | `md` | 字号和行高，13 / 15 / 17 与 20 / 22 / 24 |
| weight | `regular` \| `medium` \| `semibold` \| `bold` | `regular` | 字重 400 / 500 / 600 / 700 |
| color | string | `''` | 自定义颜色，字面值；优先于 type，disabled 时不生效 |
| align | `left` \| `center` \| `right` | `left` | 对齐；block 或确定宽度下生效 |
| decoration | `none` \| `underline` \| `line-through` | `none` | 装饰线 |
| block | boolean | `false` | 独占一行，宽度铺满父级 |
| maxLines | number | `0` | 最多显示几行；0 不限，1 单行省略，2 以上多行截断 |
| copyable | boolean | `false` | 长按复制，成功抛 copy |
| selectable | boolean | `false` | 文本可选中；App 弹出复制菜单，Web 可选择。与 copyable 同时打开时不生效 |
| clickable | boolean | `false` | 可点击：按下变淡并抛 click |
| disabled | boolean | `false` | 停用：转 disabled-text，不抛 click 和 copy |
| format | `none` \| `phone` \| `amount` \| `bank-card` \| `id-card` | `none` | 格式化方式；先格式化再显示 |
| currency | string | `'¥'` | 金额前缀；只在 format="amount" 时生效 |
| decimals | number | `2` | 金额小数位 0–6；只在 format="amount" 时生效 |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| click | 可点击文本被点击时触发；disabled 不抛，静态文本不拦事件 | 格式化后的完整文本 string |
| copy | 长按复制成功时触发；组件不调用轻提示（系统提示除外） | 格式化后的完整文本 string |

没有插槽，也没有方法。同一行多段文字各用一个实例，父级用 `flex-direction: row; flex-wrap: wrap`，间距由父级留白给。

- 默认按内容宽度排，`block` 铺满父级；组件不加外边距、内边距、底色、描边、圆角和阴影。
- `type` 只有 `default` 和 `secondary` 是正文层级，其余语义色只表达状态；warning 文本用 `warning-ink`。
- `size` 是正文档位，不借控件字号；页面级 28 / 34 的展示标题仍用页面自己的 text。
- `maxLines` 只影响显示，`copy` 和 `click` 拿完整文本；多行截断在 App 5.21+、Web、微信小程序可用。
- `format` 只接数值本身：phone 只处理 1 开头的 11 位（国际号码不要用 phone），amount 默认 ¥ 和两位小数，bank-card 每四位分组，id-card 保留前 6 后 4；带标签的整串原样返回。
- `copyable` 按下同样压到 0.8，长按才复制；普通点击不触发复制。
- `copyable` 和 `selectable` 只选一个；同时打开时按复制，不再打开系统选择。Web 桌面端没有长按，要另给可见的复制按钮。
- `clickable` 按下压到 0.8 并抛 `click(text)`，拦下这一笔事件；可点击文本不是按钮，键盘入口由外层提供。
- `disabled` 同时关掉点击、复制和选择，文字转 `disabled-text`，原因写在外层说明里。
- 从 ThorUI `tui-text` 迁移：`type` 的 gray / black 换成 `secondary` / `default`；`size` / `unit` 换成 `sm` / `md` / `lg`；`fontWeight` 的 400 / 500 / 600 / 700 换成 `regular` / `medium` / `semibold` / `bold`；`textType` 加 `format` 合成 `phone` / `amount`，另加 `bank-card` / `id-card`；`selectable` / `userSelect` 合成 `selectable`；`highlight` 改名 `clickable`；`disable` 改名 `disabled`；`call` 在 `click` 里调 `uni.makePhoneCall`；`lineHeight` / `padding` / `unShrink` 和 `right` 插槽不再提供。

## vx-link

超链接。指向外部网页、帮助文档或协议条款的文字入口：Web 新开标签页，App 和小程序复制链接并提示。支持下划线、七种文字色、三档字号、四种字重、电话和邮箱，以及 `prefix` / `suffix` 插槽。

```vue
<template>
	<view class="page vx-theme-light">
		<vx-link href="https://gitee.com/DonkeySmall/vaporix-ui" text="查看仓库" />
		<vx-link href="https://gitee.com/DonkeySmall/vaporix-ui" text="服务协议" underline />
		<vx-link href="tel:10086" text="联系客服" type="secondary" />
		<view class="row">
			<vx-link href="https://gitee.com/DonkeySmall/vaporix-ui" text="复制链接" action="copy" @copy="onCopy" />
			<vx-link href="https://gitee.com/DonkeySmall/vaporix-ui" text="新窗口打开">
				<template #suffix>
					<vx-icon name="external-link" size="sm" color="var(--vx-color-primary)" />
				</template>
			</vx-link>
		</view>
	</view>
</template>

<script setup>
	const onCopy = (value: string) => {
		// value 是实际复制的链接、号码或邮箱；提示已经由组件弹出
	}
</script>
```

```css
.row {
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
}

.row__gap {
	margin-right: 16px;
}
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| href | string | `''` | 目标地址：http(s)、站内路径、`tel:` 或 `mailto:`；空串、空号码和空邮箱只展示 |
| text | string | `''` | 显示文案；不传时显示 `href`，默认插槽优先 |
| type | `default` \| `secondary` \| `primary` \| `success` \| `info` \| `warning` \| `danger` | `primary` | 文字颜色；secondary 是次要灰，其余按语义表达状态 |
| size | `sm` \| `md` \| `lg` | `md` | 字号和行高，13 / 15 / 17 与 20 / 22 / 24 |
| weight | `regular` \| `medium` \| `semibold` \| `bold` | `medium` | 字重 400 / 500 / 600 / 700 |
| color | string | `''` | 自定义颜色，字面值；优先 type，disabled 时不生效 |
| underline | boolean | `false` | 下划线，跟随文字色 |
| action | `auto` \| `copy` \| `none` | `auto` | 点按行为：按平台处理、只复制、只抛 click |
| tips | string | `''` | 复制后的提示；留空时按地址类型给默认文案 |
| disabled | boolean | `false` | 停用：转 disabled-text，不响应点按 |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| click | 点按时触发；disabled 和空 `href` 不抛 | 原始 `href` string |
| copy | 写入剪贴板成功后触发；`none` 不抛 | 实际复制的链接、号码或邮箱 string |

| 插槽 | 说明 |
| --- | --- |
| 默认插槽 | 替换 `text` 和 `href`；内容自己带颜色和字号，点按仍由根节点处理 |
| prefix | 文案前的图标或标记，与文案留 4px |
| suffix | 文案后的外链图标或箭头，与文案留 4px |

没有方法。打开、复制和提示都在组件内完成；需要自定义行为时用 `action="none"` 在 `click` 里处理。

- 链接是正文级元素：默认按内容宽度排，不加内外边距、底色、描边和圆角；同一行的多段链接放进父级 `flex-direction: row; flex-wrap: wrap`，间距由父级给。
- `href` 支持 http(s)、站内路径、`tel:` 和 `mailto:`；空串、空号码和空邮箱只展示，不挂指针，也不抛 `click`。
- Web 用临时 `a` 标签打开：http(s) 和站内路径新开标签页并带 `noopener noreferrer`，`tel:` / `mailto:` 交给系统；不用 `window.open`，避免被当成没有用户手势的弹窗。
- App 和小程序不能直接打开外部网页：默认复制链接并弹提示。需要在 App 内直接打开浏览器或内置 webview 时，用 `action="none"` 接自己的 openSchema 插件或页面。
- `action="copy"` 在所有端都复制，电话也复制号码；要拨号就用默认 `auto`，拨号失败时才回落到复制。
- `tel:` 在 App 和小程序调起拨号，失败回落到复制号码；Web 交给系统。`mailto:` 在 Web 交给系统，App 和小程序复制邮箱，去掉 `mailto:` 和 `?subject=` 参数。
- 复制成功后抛 `copy(value)`。提示默认按地址类型给「链接已复制」「号码已复制」「邮箱已复制」；传 `tips` 整句替换，传 `action="none"` 完全不弹。
- `type` 默认 `primary`；`secondary` 只用于正文里不该抢眼的内联入口；`warning` 用 `warning-ink`。`color` 是字面值，优先 `type`，`disabled` 时两者都不生效。
- `size` 三档 13 / 15 / 17（20 / 22 / 24），`weight` 四档 400 / 500 / 600 / 700，默认 `medium`；链接是正文，不借 `--vx-font-control-*`。
- `underline` 默认关闭，下划线跟随文字色；同一段文字只加一种装饰线，不另外加粗。
- 按下压到 `--vx-opacity-pressed` 0.8，不做缩放、位移和颜色过渡；`disabled` 转 `disabled-text`，不抛 `click`。
- `disabled` 只灰化组件渲染的文案；默认插槽和 `prefix` / `suffix` 的内容自己带颜色，禁用态也要自己处理。
- `prefix` / `suffix` 与文案之间留 4px；插槽内容自己带颜色和尺寸，图标用 `vx-icon`，需要外链暗示时用 `external-link`。
- 可点时点按停在链接上，不触发外层列表行或卡片；静态链接和禁用链接不拦点击。
- Web 端是 `view` 组合，不进入 Tab 顺序；需要键盘访问时由外层按钮或链接承载同一动作。
- 不截断链接文案：长链接用短文案，完整地址放在 `href` 里。
- 从 ThorUI `tui-link` 迁移：`copyTips` 改名 `tips`；`size` 从 rpx 换成 `sm` / `md` / `lg`；`color` 保留，语义色改用 `type`；`download` 由业务自己做（Web 用 `a` 标签，App 用 `uni.downloadFile` 加 `uni.openDocument`）；App 打开外部浏览器不再用 `plus.runtime.openURL`，需要时 `action="none"` 接 openSchema 插件；`tel:` / `mailto:`、`prefix` / `suffix` 插槽和 `click` / `copy` 是新增能力。

## vx-icon

单色图标，当前 1112 个：**core 112 + extend 1000**，来自 Phosphor 2.1.2，每档都有 regular / fill。core 随 `variables.css` 默认加载；extend 默认不加载，用到时引入 `libs/style/icons-extend.css`。

```vue
<vx-icon name="search" />
<vx-icon name="close" size="sm" />
<vx-icon name="check" type="success" />
<vx-icon name="info" type="info" />
<vx-icon name="heart" variant="fill" />
<vx-icon name="trash" color="var(--vx-color-danger)" />
<vx-button type="primary" text="继续">
	<vx-icon name="chevron-right" color="var(--vx-color-on-primary)" />
</vx-button>
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| name | `VxIconName` | — | 图标名，见下表；类型由 `libs/icons/codepoints.ts` 生成 |
| size | `sm` \| `md` \| `lg` | `md` | 14 / 18 / 22，对应 `--vx-icon-*` |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `default` | 语义色；warning 使用 `warning-ink` |
| variant | `regular` \| `fill` | `regular` | 线性 / 实心；两套共用同一组 name 和码点 |
| color | string | `''` | 局部颜色，接受 CSS 值，通常传 `var(--vx-color-*)` |

**core / extend**：core 112 个默认加载；extend 1000 个需要额外引入扩展字体样式，`vx-icon` 会按名字自动选字体：

```ts
import '@/uni_modules/vaporix-ui/libs/style/icons-extend.css'
```

`VX_ICON_CORE_NAMES`、`VX_ICON_EXTEND_NAMES`、`VX_ICON_TIER` 可用来做筛选或构建期检查。core 112 与 extend 1000 共用同一组名字和码点；下表列 core 的 10 类，extend 只列数量。

### Core 112

| 分类 | 数量 | 图标 |
| --- | ---: | --- |
| 导航 | 14 | `chevron-right`、`chevron-down`、`arrow-left`、`arrow-right`、`arrow-up`、`arrow-down`、`chevron-left`、`chevron-up`、`home`、`map-pin`、`globe`、`compass`、`locate`、`map` |
| 动作 | 25 | `close`、`check`、`plus`、`minus`、`search`、`settings`、`trash`、`copy`、`download`、`upload`、`share`、`refresh`、`filter`、`more-horizontal`、`more-vertical`、`external-link`、`link`、`send`、`zoom-in`、`zoom-out`、`qr-code`、`save`、`power`、`log-in`、`log-out` |
| 编辑 | 7 | `edit`、`bold`、`italic`、`underline`、`align-left`、`align-center`、`align-right` |
| 状态 | 12 | `info`、`alert-circle`、`alert-triangle`、`check-circle`、`close-circle`、`help-circle`、`clock`、`loader-circle`、`battery`、`wifi`、`sun`、`moon` |
| 对象 | 18 | `eye`、`calendar`、`user`、`lock`、`unlock`、`eye-off`、`star`、`heart`、`bookmark`、`shield`、`key`、`users`、`contact`、`building`、`briefcase`、`smartphone`、`laptop`、`id-card` |
| 通信 | 8 | `bell`、`mail`、`phone`、`inbox`、`message-circle`、`message-square`、`phone-call`、`mic` |
| 媒体 | 8 | `play`、`pause`、`volume-high`、`volume-mute`、`audio-lines`、`video`、`camera`、`headphones` |
| 文件 | 6 | `image`、`file`、`folder`、`file-text`、`files`、`paperclip` |
| 布局 | 6 | `list`、`list-checks`、`layout-dashboard`、`grid-2x2`、`menu`、`table` |
| 商务 | 8 | `shopping-cart`、`wallet`、`package`、`gift`、`receipt`、`credit-card`、`truck`、`tag` |

### Extend 1000

| 分类 | 数量 |
| --- | ---: |
| 导航 | 110 |
| 动作 | 114 |
| 编辑 | 64 |
| 状态 | 107 |
| 对象 | 350 |
| 通信 | 55 |
| 媒体 | 59 |
| 文件 | 58 |
| 布局 | 42 |
| 商务 | 41 |
| **合计** | **1000** |

完整扩展名单以 `VX_ICON_EXTEND_NAMES` 和文档站为准；不在 readme 重复 1000 行。码点以 [`libs/icons/codepoints.ts`](libs/icons/codepoints.ts) 为准。

- 图标是展示件，不触发 `click`。可点击图标由业务包一层不小于 44×44 的热区，或用带文案的按钮承载。
- `type="default"` 使用 `text`；容器反白、次要灰和禁用色通过 `color` 传对应的 `--vx-color-*`，组件内部不写死反白色。
- `sm` 只放简单轮廓；`fill` 更重，齿轮、日历这类复杂图形优先 `md` 或 `lg`。
- `regular` 线性，`fill` 实心，名字和码点同一套。`fill` 给选中、强调、小尺寸。同一组不要混用，除非实心表示选中。
- `core` 只放高频常用图标，长尾/专业图标进 `extend`；不要为了少引入一个 CSS 把 core 撑大。
- 用到 `extend` 图标必须引入 `icons-extend.css`，否则扩展字形不会加载；core 组件（如 `vx-input` 的 close / chevron）不依赖它。
- 图标名与码点是公开契约：只追加、不改名、不复用。新增图标由维护者构建后随版本发布，不改运行时字体路径。
- 四套字体随组件库分发：App 端在样式里内嵌 base64，随代码一起进包，不依赖 static 目录；H5 用包内 ttf 的相对路径，小程序内嵌 base64；都不依赖网络字体。
- 图标来源 Phosphor 2.1.2（MIT），core / extend 各 regular / fill；许可证全文在 `libs/icons/LICENSE`。

## vx-badge

徽章用于计数、短词和圆点，也能叠在图标、头像的右上角。盒子比控件小一档，不参与点击。

```vue
<vx-badge :value="12" />
<vx-badge :value="88" type="default" />
<vx-badge :value="128" />
<vx-badge :value="12" :max="9" />
<vx-badge text="NEW" type="success" />
<vx-badge :value="6" variant="soft" type="warning" />
<vx-badge type="danger" dot />
<vx-badge size="lg" :value="5" />

<vx-badge absolute ring :value="9" type="danger" size="sm">
	<vx-icon name="bell" size="lg" />
</vx-badge>
<vx-badge absolute ring dot type="danger">
	<vx-icon name="home" size="lg" />
</vx-badge>
<vx-badge absolute ring :value="9" bg-color="#ffffff" color="#d92d20" size="sm" :offset-x="4" :offset-y="-4">
	<vx-icon name="message-square" size="lg" />
</vx-badge>
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value | number | `0` | 计数；小于 1 不显示，超过 `max` 显示 `max+` |
| text | string | `''` | 自定义短文案，优先于 `value`；要显示 0 时传 `"0"` |
| max | number | `99` | 计数封顶值，超过显示 `max+` |
| dot | boolean | `false` | 只显示圆点，优先于 `text` / `value` |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `danger` | 语义色 |
| variant | `solid` \| `soft` | `solid` | 实心、浅底 |
| size | `sm` \| `md` \| `lg` | `md` | 徽章尺寸，对应 `--vx-badge-height-*` |
| absolute | boolean | `false` | 定位到默认插槽的右上角 |
| offsetX | number | `0` | 在默认位置上的水平微调，单位 px；正值向右 |
| offsetY | number | `0` | 在默认位置上的垂直微调，单位 px；正值向下 |
| ring | boolean | `false` | 叠在内容上时加一圈页面底色描边和浮层阴影 |
| bgColor | string | `''` | 自定义底色，只覆盖背景 |
| color | string | `''` | 自定义文字色，只覆盖文字 |

| 插槽 | 说明 |
| --- | --- |
| default | `absolute` 时作为被叠加的内容，如 `vx-icon`；其他情况不渲染 |

- 盒子只有三档：`sm` 16、`md` 20、`lg` 24；字号 12 / 13 / 14；圆点直径 6 / 8 / 10。
- 单字符计数是正圆，多字符按内容撑宽；轮廓固定胶囊，不提供方形。
- `type` 默认 `danger`，表达未读、待处理这类需要立刻看到的状态；普通计数传 `default`，其余状态用对应语义色。
- 实心 `default` 是深色中性底，配 `text-inverse`；浅底 `default` 是浅灰底的中性计数，文字用 `text`。warning 实心配 `on-warning`，浅底配 `warning-ink`。
- `value` 小于 1 不渲染，业务不用再写 `v-if`；要显示 0 用 `text="0"`。`text` 同时用来放 `NEW`、`VIP` 这类短词。
- `absolute` 把圆心放在插槽内容的右上角，按徽章自身边框盒算，宽胶囊和圆点同一条。`offsetX` / `offsetY` 是在这个位置上的微调，单位 px，正值向右、向下。叠在 18 / 22 的图标上时用 `size="sm"`，只压住一角。定位层不接收点击。
- 角标和 `ring` 的阴影会伸出盒子。外层写了 `overflow: hidden` 时，伸出的部分会被裁掉。
- `ring` 用 `surface` 作描边并带一层浮层阴影，亮色、暗色各自跟随；只在叠图标、头像、图片时打开，行末独立计数不用。`ring` 在胶囊外再加 2px，`size` 仍按胶囊算。
- `color` / `bgColor` 是字面值，不跟随 `vx-theme-light` / `vx-theme-dark`；要跟随主题用 `type`。自定义底色时文字对比度由业务保证。
- 徽章没有点击、禁用、加载态；入口的点击由外层按钮、列表行或页签承载。

## vx-footer

页脚承载版权、备案号和辅助链接。默认留在文档流里，`fixed` 时才贴住安全区底部。组件不内置跳转，链接点击只抛 `click`。

```vue
<vx-footer copyright="© 2026 Vaporix UI. All rights reserved." />

<vx-footer :links="footerLinks" copyright="© 2026 Vaporix UI · MIT" @click="onFooterLink" />

<vx-footer fixed :links="footerLinks" copyright="© 2026 Vaporix UI · MIT" @click="onFooterLink" />

<vx-footer bg-color="#142033" color="#c8d3e3" link-color="#8ab4ff" border-color="#2b3b55"
	:links="footerLinks" copyright="© 2026 Vaporix UI" @click="onFooterLink" />

<vx-footer copyright="© 2026 Vaporix UI · MIT">
	<view class="footer-brand">
		<text class="footer-brand__name">元汽UI</text>
		<text class="footer-brand__meta">原生渲染组件库</text>
	</view>
</vx-footer>
```

```ts
type FooterLink = {
	text: string
	value?: string
	color?: string
}

const footerLinks: FooterLink[] = [
	{ text: '返回首页', value: 'home' },
	{ text: '个人中心', value: 'profile' },
	{ text: '帮助', value: 'help' }
]

const onFooterLink = (link: FooterLink) => {
	if (link.value === 'home') uni.switchTab({ url: '/pages/index/index' })
	if (link.value === 'profile') uni.navigateTo({ url: '/pages/profile/profile' })
	if (link.value === 'help') uni.navigateTo({ url: '/pages/help/help' })
}
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| copyright | string | `''` | 版权、备案号等底部说明 |
| links | `Array<VxFooterLink>` | `[]` | 链接导航，相邻项自动加竖分隔线 |
| fixed | boolean | `false` | 固定在页面底部；默认留在文档流 |
| color | string | `''` | 版权文字色，字面值 |
| linkColor | string | `''` | 链接默认文字色，字面值；链接单项的 `color` 优先 |
| borderColor | string | `''` | 分隔线与固定底栏顶部描边的颜色，字面值 |
| bgColor | string | `''` | 页脚底色，字面值；固定模式不传时用 `surface` |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| click | 点击链接时触发 | 该链接对象 `VxFooterLink` |

`links` 的每一项是 `VxFooterLink`：

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | 链接文案 |
| value | string | 否 | 业务值，随 `click` 原样抛出 |
| color | string | 否 | 单个链接的文字色，优先于 `linkColor` |

| 插槽 | 说明 |
| --- | --- |
| default | 标准行上方的自定义内容，可放品牌、社交入口或补充说明 |

- 版权用 `--vx-font-sm` / `--vx-line-sm`，链接用 `--vx-font-md` / `--vx-line-md` 和 `medium`；页脚不属于控件，不借用 `--vx-font-control-*`。
- 相邻链接之间自动画 1px 竖线，首尾不加。链接文案不换行，一行建议不超过四个；窄屏时整项换行。
- 组件不内置路由。链接的 `value` 随 `click` 抛出，登录校验、埋点和 `uni.navigateTo` / `uni.switchTab` 都放在事件里。
- 固定页脚使用 `--uni-safe-area-inset-*` 把整块抬到安全区外，并用 `surface` 加顶部 1px 描边、不加阴影。页面底部要留出页脚高度，再加 `--uni-safe-area-inset-bottom`。
- `color`、`linkColor`、`borderColor`、`bgColor` 是字面值，不跟随亮色 / 暗色主题。`links[i].color` 只覆盖单个链接，对比度由业务保证。`borderColor` 同时作用于分隔线和固定底栏的顶部描边。
- 默认插槽只放补充内容，版权和标准链接继续用 props，不在插槽里重复一份。

## vx-tag

标签用于状态、分类和筛选结果。实心、浅底、空心三种形态。高度、字号和内边距用 `--vx-tag-*`，不跟按钮共用。

```vue
<vx-tag text="默认标签" />
<vx-tag type="primary" text="主色" />
<vx-tag type="success" text="已完成" />
<vx-tag type="warning" variant="soft" text="待处理" />
<vx-tag type="danger" variant="plain" text="已过期" />
<vx-tag type="info" size="sm" text="小号" />
<vx-tag type="primary" size="lg" shape="pill" text="胶囊" />
<vx-tag type="primary" shape="half" text="半圆角" />
<vx-tag type="default" closable text="可关闭" @close="removeTag" />
<vx-tag bg-color="#2ba471" border-color="#2ba471" color="#ffffff" text="自定义颜色" />
<vx-tag type="success" variant="soft" text="已完成">
	<template #prefix>
		<vx-icon name="check" size="sm" color="var(--vx-color-success-pressed)" />
	</template>
</vx-tag>
<vx-tag type="danger" variant="soft" text="未读">
	<text style="color: var(--vx-color-danger-pressed);">12</text>
</vx-tag>
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | string | `''` | 标签主文案；只放图标时可留空 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `default` | 语义色 |
| variant | `solid` \| `soft` \| `plain` | `solid` | 实心、浅底、空心 |
| size | `sm` \| `md` \| `lg` | `md` | 尺寸，对应 `--vx-tag-height-*` |
| shape | `rounded` \| `pill` \| `half` \| `square` | `rounded` | 小圆角、胶囊、半圆角（左圆右直）、平角 |
| color | string | `''` | 自定义文字色，同时作用于关闭图标 |
| bgColor | string | `''` | 自定义背景色，只覆盖底色 |
| borderColor | string | `''` | 自定义描边色，只覆盖描边 |
| closable | boolean | `false` | 显示关闭图标，点击抛 `close` |

| 事件 | 说明 |
| --- | --- |
| close | 点击关闭图标时触发，无参数 |

| 插槽 | 说明 |
| --- | --- |
| prefix | 文案前的前缀内容，可放图标或圆点；颜色自己带 |
| default | 文案右侧的补充内容，可放计数或后缀图标；颜色自己带 |

- 标签高度 `sm` 20、`md` 24、`lg` 28，左右内边距 6 / 8 / 10，圆角 6，描边 1。不借用紧凑高度和控件字号。
- `type` 表达状态；纯分类用 `default` 或 `primary`，不要用警告、失败色区分类别。
- `color` / `bgColor` / `borderColor` 分别只覆盖一处，没传的继续跟 `type`。实心标签同时传 `bgColor` 和 `color`，对比度由业务保证。
- 自定义颜色是字面值，不跟随 `vx-theme-light` / `vx-theme-dark` 切换；需要跟随主题时用 `type`。
- `shape="half"` 是左边胶囊、右边平角，贴边排列时用。
- `closable` 只表示可以移除，组件不删数据；在 `close` 里修改业务数组。
- 插槽内容不继承 `color`，图标颜色用 `vx-icon` 的 `color` 或 `type` 传；前缀图标用 `prefix`，右侧补充内容用默认插槽。
- 标签是短文案，不换行；长内容用列表或卡片。
- 标签文案用 `--vx-weight-regular`，比按钮的 `medium` 轻一档。

## vx-tips

消息提示是浮层，不占布局。顶部是整条横幅，居中和底部是圆角浮层；`duration` 到点自动收起，也可以常驻后手动关闭。

```vue
<vx-tips v-model:show="tipsVisible" text="操作成功" type="success" />

<vx-tips v-model:show="tipsVisible" position="top" type="warning" text="网络连接已断开" />

<vx-tips v-model:show="tipsVisible" position="bottom" icon="check-circle" text="已保存到草稿" />

<vx-tips v-model:show="tipsVisible" text="点一下关闭" :duration="0" closable />

<vx-tips v-model:show="tipsVisible" bg-color="#142033" color="#c8d3e3" text="自定义颜色" />

<vx-tips v-model:show="tipsVisible" type="success">
	<view class="tips-rich">
		<text class="tips-rich__title">文件已上传</text>
		<text class="tips-rich__meta">3 个文件 · 12.4 MB</text>
	</view>
</vx-tips>
```

```ts
// 组件实例类型按组件名生成，和 easycom 组件一样直接用，不需要 import。
const tipsRef = ref<VxTipsComponentPublicInstance | null>(null)
const tipsText = ref('')

const onSave = () => {
	tipsText.value = '已保存'
	tipsRef.value?.open?.()
}
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| show | boolean | `false` | 显示提示，支持 `v-model:show`；自动关闭会同步回 `false` |
| text | string | `''` | 提示文案；传默认插槽时忽略 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `default` | 语义色 |
| position | `top` \| `center` \| `bottom` | `center` | 顶部横幅、垂直居中、底部浮层 |
| duration | number | `2000` | 自动关闭时间，单位毫秒；`0` 常驻 |
| offset | number | `0` | 贴边微调，单位 px；`top` 往下、`bottom` 往上 |
| maxWidth | string | `'320px'` | 浮层最大宽度，需带单位；`top` 忽略 |
| icon | `VxIconName` | — | 文案前的图标，取值见 `libs/icons/codepoints.ts` |
| closable | boolean | `false` | 显示关闭图标，点整条关闭并抛 `close` |
| zIndex | number | `1010` | 浮层层级 |
| bgColor | string | `''` | 自定义底色，字面值 |
| bgOpacity | number | `1` | 底色不透明度，0–1；只作用在底色上 |
| color | string | `''` | 自定义文字和图标色，字面值 |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| close | 自动关闭、点关闭或调 `close()` 时触发 | 无 |
| update:show | `v-model:show` 同步，自动关闭时回传 `false` | boolean |

| 插槽 | 说明 |
| --- | --- |
| default | 消息正文，替换 `text`；颜色和字号自己带 |

| 方法 | 说明 |
| --- | --- |
| open() | 显示并重新计时；同一条提示重复触发用它 |
| close() | 立刻收起并抛 `close` |

- 提示是浮层，挂在页面根节点，和滚动容器平级；放进 `scroll-view` 会被滚动带走或裁掉。
- `top` 铺满整条、直角，贴在导航栏下方；`center`、`bottom` 是 `md` 圆角的盒子，默认最大宽度 320，左右至少留 24。
- `type` 是实心底色，前景用对应的 `on-*`；`default` 用正文色的反相底，亮暗主题自动互换。
- `duration` 到点自动关，`0` 常驻；自动关闭、手动关闭都抛 `close`，父组件改 `show` 不回抛。
- `bottom` 在 `--uni-safe-area-inset-bottom` 之外再多留 16，不贴屏幕边缘；自定义底栏用 `offset` 抬高。
- 文案超出一行时在 `maxWidth` 内换行，浮层跟着长高；长文案要加 `duration` 或常驻。
- `icon` 固定 `md`，颜色跟前景；`closable` 打开后点整条关闭，关闭图标贴右，顶部横幅的正文仍按整条居中。
- `bgColor` / `bgOpacity` 只改底色，`color` 改文字和图标；都是字面值，不跟随主题。只传一项时，其余项继续跟 `type`；透明度默认 1，不把文字一起淡掉。
- 默认插槽替换 `text`，用于两行内容；插槽内容不继承前景色。
- 重复触发同一条提示时先改 props 再调 `open()`，计时会重新开始，不用叠两个实例。

## vx-toast

轻提示。全屏浮层、盒子居中，图标加一句短文案；默认 2000ms 自动收起。提示期间整层接住点击，点浮层可以提前关闭。

```vue
<vx-toast v-model:show="toastVisible" text="操作成功" type="success" />

<vx-toast v-model:show="toastVisible" text="操作失败" type="danger" />

<vx-toast v-model:show="toastVisible" text="提示信息，无icon" type="info" :show-icon="false" />

<vx-toast v-model:show="toastVisible" type="success" icon="heart" text="已加入收藏" />

<vx-toast v-model:show="toastVisible" type="success" image="https://cdn.example.com/icon.png" text="已加入收藏" />

<vx-toast v-model:show="toastVisible" :duration="0" text="常驻提示，点一下关闭" />

<vx-toast v-model:show="toastVisible" bg-color="#142033" color="#c8d3e3" text="自定义底色和文字色" />
```

```ts
// 组件实例类型按组件名生成，和 easycom 组件一样直接用，不需要 import。
const toastRef = ref<VxToastComponentPublicInstance | null>(null)
const toastText = ref('')

const onSave = () => {
	toastText.value = '已保存'
	toastRef.value?.open?.()
}
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| show | boolean | `false` | 显示提示，支持 `v-model:show`；自动关闭会同步回 `false` |
| text | string | `''` | 提示文案；超过最大宽度时换行 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `default` | 语义类型，只决定默认图标 |
| duration | number | `2000` | 自动关闭时间，单位毫秒；`0` 常驻 |
| maxWidth | string | `'240px'` | 盒子最大宽度，需带单位 |
| icon | `VxIconName` | — | 自定义字体图标；不传时跟 `type` |
| image | string | `''` | 自定义图标图片地址，优先于 `icon` |
| variant | `regular` \| `fill` | `regular` | 字体图标字重；`image` 不受影响 |
| showIcon | boolean | `true` | 显示图标；关掉后是纯文字提示 |
| zIndex | number | `1100` | 浮层层级 |
| bgColor | string | `''` | 自定义底色，字面值 |
| bgOpacity | number | `0.9` | 底色不透明度，0–1；只作用在底色上 |
| color | string | `''` | 自定义文字和字体图标色，字面值 |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| close | 自动关闭、点浮层或调 `close()` 时触发 | 无 |
| update:show | `v-model:show` 同步，自动关闭时回传 `false` | boolean |

| 方法 | 说明 |
| --- | --- |
| open() | 显示并重新计时；重复触发同一条时用它 |
| close() | 立刻收起并抛 `close` |

- 轻提示挂在页面根节点，和滚动容器平级；放进 `scroll-view` 会被滚动带走或裁掉。
- 盒子最小宽度 120，最大宽度默认 240，内边距 24，圆角 `md`；图标 40，和文案间距 12；文案用 `body`（15 / 22 / 400）。
- `type` 只决定默认图标：success 圆形勾、danger 圆形叉、warning 圆形感叹号、info 信息圆、default 消息气泡、primary 同 info；盒子用正文色的反相底，默认 0.9 不透明度，亮暗主题自动互换。
- `duration` 到点自动关，`0` 常驻；自动关闭、点浮层和 `close()` 都抛 `close`，父组件改 `show` 不回抛。
- 点浮层任意位置都能提前收起；常驻提示也有出口，不会把页面永久挡住。
- `icon` 取 `libs/icons/codepoints.ts` 里的名字，extend 图标要先引入 `icons-extend.css`；`image` 支持网络地址和本地路径，固定 40 × 40 等比展示。
- `image` 优先于 `icon`；`color` 只改文案和字体图标，不影响图片。
- `bgColor` / `bgOpacity` 只改底色，`color` 改文案和字体图标；都是字面值，不跟随主题。默认 0.9，文字和图标始终不透明；只传一项时，其余项继续用默认反相底或前景。
- 层级默认 1100，高于加载浮层（1050）、弹框（1020）、消息提示（1010）和固定页脚（1）。同一屏只放一条，重复触发先改 props 再调 `open()`。

## vx-rate

星级评分。`v-model` 绑定分值，支持半星、横向滑动手势、三档星形、空心、分值文字和只读 / 禁用。

```vue
<vx-rate v-model="score" />
<vx-rate v-model="score" show-text />
<vx-rate v-model="score" allow-half show-text />
<vx-rate v-model="score" :count="7" />
<vx-rate v-model="score" size="lg" show-text />
<vx-rate v-model="score" type="primary" />
<vx-rate v-model="score" active-color="#e5484d" void-color="#f4c7c9" />
<vx-rate v-model="score" hollow />
<vx-rate :model-value="3.45" readonly />
<vx-rate :model-value="4.5" disabled show-text />
<vx-rate :model-value="4.2" text="很好" readonly />
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | number | `0` | 当前分值，支持 `v-model`；0 表示未评分，可带小数用于只读展示 |
| count | number | `5` | 星星总数，收敛到 1–10 |
| size | `sm` \| `md` \| `lg` | `md` | 星形 20 / 24 / 28 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `warning` | 选中星形的语义色 |
| allowHalf | boolean | `false` | 允许半星，点按和滑动按 0.5 递增 |
| hollow | boolean | `false` | 未选中的星形用空心描边 |
| showText | boolean | `false` | 右侧显示当前分值 |
| text | string | `''` | 右侧自定义短文案，优先于 `showText` |
| activeColor | string | `''` | 选中星形的自定义颜色，字面值 |
| voidColor | string | `''` | 未选中星形的自定义颜色，字面值 |
| readonly | boolean | `false` | 只读展示，不响应点按和滑动 |
| disabled | boolean | `false` | 禁用，颜色转灰 |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| change | 分值变化时触发，点按和滑动都算；滑动中按档位连续触发 | 新分值 |
| update:modelValue | `v-model` 同步 | 新分值 |

- 星形三档 20 / 24 / 28，间距固定 8，来自 `--vx-rate-size-*` / `--vx-rate-gap`；星形不并入图标三档。
- 选中层按分值裁出小数进度：满星 100%、半星 50%，只读的 `3.45`、`3.5`、`3.6` 都能如实显示。
- `count` 收敛到 1–10；`allowHalf` 打开后左半区给半星、右半区给整星，滑动按 0.5 递增。
- 手势按横向位移判断；纵向为主的移动按滚动处理，不改分值，也不在抬起时提交。点按和滑动结束后补发的 click 会被短暂屏蔽，避免抬起到另一半区时改写分值。Web 上鼠标拖动和触摸同一套位移。
- 需要清空评分时，由业务把分值改回 `0`；组件不内置清空手势。
- `readonly` 保留颜色，`disabled` 转灰且自定义颜色不生效；两者都不响应点按，也不抛 `change`。
- `activeColor` / `voidColor` 都是字面值，不跟随主题；只传一项时，另一项继续跟 `type` / 默认未选中色。`type="warning"` 的选中星形取 `warning-pressed`，白底上才够 3:1。
- `showText` 显示一位小数，整数不补 `.0`；`text` 自定义文案优先。分值是辅助说明，字号用 `--vx-font-sm`，`lg` 用 `--vx-font-md`。
- 评分只承载打分和分值文字；标题、说明和提交入口由外面的表单行、卡片承载。

## vx-list-view

列表分组。标题在卡片外，右侧可放「查看全部」；行由 `vx-list-cell` 提供。`variant="plain"` 去掉描边和圆角，适合直接落在页面底色上。

```vue
<vx-list-view title="账户与订单" description="今天有 2 笔待付款">
	<vx-list-cell title="我的钱包" value="¥128.00" arrow @click="openWallet" />
	<vx-list-cell title="待付款订单" value="2 笔" arrow @click="openOrders" />
	<vx-list-cell title="收货地址" value="上海市浦东新区" arrow :divider="false" @click="openAddress" />
</vx-list-view>

<vx-list-view title="通知设置" variant="plain">
	<vx-list-cell title="系统通知" value="已开启" arrow @click="toggleSystem" />
	<vx-list-cell title="营销推送" value="已关闭" arrow :divider="false" @click="toggleMarketing" />
</vx-list-view>

<vx-list-view title="最近消息">
	<template #extra>
		<view class="list-action" @click="openMessages">
			<text class="list-action__text">查看全部</text>
		</view>
	</template>
	<vx-list-cell title="呼噜猪" description="上线打游戏了！" :divider="false">
		<template #prefix>
			<vx-icon name="message-circle" size="lg" type="primary" />
		</template>
	</vx-list-cell>
</vx-list-view>
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | string | `''` | 分组标题，显示在卡片外 |
| description | string | `''` | 标题下的补充说明 |
| size | `sm` \| `md` \| `lg` | `md` | 标题区左右内边距。默认和 `lg` 为 16，`sm` 为 12，和同档列表行对齐。不传给里面的行 |
| variant | `card` \| `plain` | `card` | 描边卡片，或不带描边和圆角的平面分组 |

| 插槽 | 说明 |
| --- | --- |
| default | 分组内容，通常放 `vx-list-cell` |
| extra | 标题右侧的操作，颜色和字号自己带 |

- 分组只提供标题与外观，不负责行的内容和点击；行用 `vx-list-cell`。
- `card` 用 `surface` 底、1px 描边和 `md` 圆角；`plain` 去掉描边和圆角，只保留 `surface` 底。
- 标题用 15 / 22 / 500（`--vx-font-md` / `--vx-line-md` / `--vx-weight-medium`），说明用 `body-small`（13 / 20 / 400）次要色；两者都可选。
- 标题在卡片外。默认和 `lg` 左右各缩进 16，`size="sm"` 为 12，和同档列表行对齐；行的档位仍由每个 `vx-list-cell` 的 `size` 决定。多个分组之间留 24。
- 分组最后一行传 `:divider="false"`，避免行内分割线和卡片底边叠成两条。
- 分组不管外部间距；多个分组之间的距离由页面用 `--vx-space-xl` 决定。
- 分组不承载按钮、表单和长说明；这些用页面区块或表单行。
- 卡片分组会裁掉溢出，行里不要放需要越出卡片的浮层；选择器和弹层挂页面根节点。

## vx-list-cell

列表行。三档行高、主副文案、右侧短值和箭头；前缀放图标或头像，后缀放徽章、标签或时间。默认 `clickable`，按下有底色并抛 `click`，点击停在行上；静态展示行传 `:clickable="false"`。主文案和说明在剩余宽度内换行。

```vue
<vx-list-cell title="我的钱包" value="¥128.00" arrow @click="openWallet" />
<vx-list-cell title="账号" value="vaporix@example.com" :clickable="false" />
<vx-list-cell title="实名认证" value="审核中" arrow disabled />
<vx-list-cell title="大号行" description="17 / 24，设置页和强调入口" size="lg" :clickable="false" />
<vx-list-cell title="我的店铺" value="进入店铺" arrow @click="openStore">
	<template #prefix>
		<vx-icon name="shopping-cart" size="lg" type="danger" />
	</template>
</vx-list-cell>
<vx-list-cell title="客服助手" description="点击查看沟通记录" @click="openSupport">
	<template #prefix>
		<view class="avatar">客</view>
	</template>
	<template #extra>
		<vx-badge :value="2" />
	</template>
</vx-list-cell>
<vx-list-cell :clickable="false" :divider="false" value="0.22.0">
	<text class="custom-line">默认插槽替换 title / description，值、后缀和箭头仍按 props 渲染。</text>
</vx-list-cell>
<vx-list-cell title="更浅的分割线" value="dividerOpacity 0.5" :clickable="false" :divider-opacity="0.5" />
<vx-list-cell title="自定义分割线" value="#cbd5e1 · 0.6" :clickable="false" divider-color="#cbd5e1"
	:divider-opacity="0.6" :divider="false" />
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | string | `''` | 主文案；传默认插槽时忽略 |
| description | string | `''` | 主文案下的辅助说明 |
| value | string | `''` | 右侧短文本；传 extra 插槽时忽略 |
| size | `sm` \| `md` \| `lg` | `md` | 行高 44 / 48 / 52，主文案 13 / 15 / 17 |
| arrow | boolean | `false` | 显示右侧 `chevron-right` 箭头 |
| clickable | boolean | `true` | 按下有底色，点击抛 `click`；静态行传 `false` |
| disabled | boolean | `false` | 组件文字和箭头转灰，不抛 `click`；插槽内容自己处理 |
| divider | boolean | `true` | 底部分割线，默认用 `--vx-color-divider`；分组最后一行传 `false` |
| dividerColor | string | `''` | 自定义分割线颜色，字面值；不传时跟主题 |
| dividerOpacity | number | `1` | 分割线不透明度，0–1；0 隐藏 |

| 事件 | 说明 |
| --- | --- |
| click | 可点击行被点按时触发；静态行和禁用行不触发，不带参数 |

| 插槽 | 说明 |
| --- | --- |
| default | 替换 `title` / `description` 的内容区，值、后缀和箭头仍按 props 渲染 |
| prefix | 左侧图标、头像或选择框；尺寸和颜色自己带 |
| extra | 右侧徽章、标签或时间；传了它就不再渲染 `value` |

- 行高是下限：单行居中，双行由内边距自然撑高；`sm` 44 已经满足可点热区。
- 主文案用 `--vx-font-*`，说明和值用 `--vx-font-sm` 次要色；`lg` 的值跟到 15。
- `clickable` 默认打开：按下用 `surface-pressed` 底，点击抛 `click`。静态行关掉后没有按下态，也不抛事件。
- `disabled` 只把组件渲染的主文案、说明、值和箭头转灰，并停掉点击；`prefix` / `extra` / 默认插槽内容不自动转灰，自己处理禁用样式。不要用它冒充静态展示。
- 箭头固定用 `chevron-right`，`sm` / `md` 取 14，`lg` 取 18；静态行不要放箭头。
- 分割线默认用 `--vx-color-divider`，比卡片描边浅一档；`dividerColor` 只改线色，`dividerOpacity` 0–1 只改深浅，0 隐藏。两者都是线自己的样式，不碰行内容；最后一行仍用 `:divider="false"`。
- 自定义线色是字面值，不跟随亮色 / 暗色主题；外框仍用 `--vx-color-border`，不要把两者调成一样的深浅。
- `prefix` / `extra` 插槽内容不继承字号和颜色，自己带；图标用 `vx-icon`，标签用 `vx-tag`，徽章用 `vx-badge`。
- 行本身不画描边、圆角和底色，边界交给 `vx-list-view` 或外层卡片；独立使用时放进自己的容器。
- 长文案在内容区换行，右侧值保持短文本不换行；需要整段说明时用页面区块，不要硬塞进行内。
- 行是 `view`，Web 端不进入 Tab 顺序；需要键盘入口时，由外层按钮或链接承载同一操作。

## vx-card

卡片承载一组相关内容：头部、正文、底部。默认 `surface` 底、1px 描边和 `md` 圆角，不加阴影；头部可放头像、标题和右侧时间，正文用默认插槽，底部用 `footer` 或 `suffix` 插槽。

```vue
<vx-card title="CSDN云计算" meta="1小时前" avatar="/static/demo/card/avatar-cs.png"
	content="默认卡片内容部分 slot=>body" footer="默认卡片底部 slot=>footer" />

<vx-card title="标题文本" meta="1小时前" avatar="/static/demo/card/avatar-js.png"
	avatar-shape="circle" title-color="var(--vx-color-warning-ink)"
	meta-color="var(--vx-color-warning-ink)" content="头像换成圆形，标题和时间用同一个语义色。"
	footer="颜色是字面值，不跟随主题。" />

<vx-card title="CSDN云计算" meta="1小时前" avatar="/static/demo/card/avatar-cs.png"
	header-bg="var(--vx-color-default-soft)" :header-divider="false"
	meta-color="var(--vx-color-text)" content="头部底色单独设置，分割线可以关掉。" />

<vx-card size="lg" title="大号卡片" meta="lg" avatar="/static/demo/card/avatar-cs.png"
	content="正文仍是 15 / 22，内边距 24。" footer="头像 48 · 标题 17" />

<vx-card full title="通栏卡片" meta="full" avatar="/static/demo/card/avatar-cs.png"
	header-bg="var(--vx-color-default-soft)" :header-divider="false"
	content="通栏卡片贴住内容区两侧。" footer="上下描边保留。" />

<vx-card title="Vaporix UI">
	<template #prefix>
		<view class="card-icon">
			<vx-icon name="grid-2x2" size="lg" type="primary" />
		</view>
	</template>
	<template #extra>
		<vx-icon name="more-horizontal" size="sm" color="var(--vx-color-text-secondary)" />
	</template>
	<text class="card-copy">prefix 替换头像，extra 替换 meta；默认插槽放正文。</text>
</vx-card>

<vx-card clickable title="可点击卡片" avatar="/static/demo/card/avatar-cs.png"
	content="整卡可点时按下变淡，点击抛 click。" footer="卡片里不要再放入口和按钮。"
	@click="openCard" />
```

```vue
<!-- 富内容：封面和列表贴边用 bodyPadded=false，底部操作放 suffix。 -->
<vx-card title="JavaScript" meta="昨天" avatar="/static/demo/card/avatar-js.png" :body-padded="false">
	<image class="card-cover" src="/static/demo/card/cover.jpg" mode="aspectFill" />
	<vx-list-cell title=".NET Core 使用 Exceptionless 分布式日志收集" description="后端 · 8 分钟阅读">
		<template #prefix>
			<view class="card-thumb">
				<image class="card-thumb__image" src="/static/demo/card/thumb-2.jpg" mode="aspectFill" />
			</view>
		</template>
	</vx-list-cell>
	<template #suffix>
		<view class="card-more">
			<text class="card-more__text">余下 3 篇</text>
			<vx-icon name="chevron-down" size="sm" color="var(--vx-color-text-secondary)" />
		</view>
	</template>
</vx-card>
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | string | `''` | 头部标题 |
| meta | string | `''` | 头部右侧短文本，放时间、状态或分类；传 `extra` 插槽时忽略 |
| avatar | string | `''` | 头部左侧图片地址；传 `prefix` 插槽时忽略 |
| avatarShape | `rounded` \| `circle` | `rounded` | 头部图片轮廓 |
| size | `sm` \| `md` \| `lg` | `md` | 内边距、头像和标题档位 |
| content | string | `''` | 正文文案快捷入口；传默认插槽时忽略 |
| footer | string | `''` | 底部文案；传 `suffix` 插槽时忽略 |
| headerBg | string | `''` | 头部底色，字面值；要跟随主题传 `var(--vx-color-*)` |
| headerDivider | boolean | `true` | 头部底部分割线 |
| bodyPadded | boolean | `true` | 正文保留四边内边距；图片和列表贴边时传 `false` |
| full | boolean | `false` | 通栏：去掉左右描边和圆角，上下描边保留 |
| clickable | boolean | `false` | 整卡可点：按下变淡，点击抛 `click` |
| titleColor | string | `''` | 标题自定义颜色，字面值 |
| metaColor | string | `''` | 头部右侧文字自定义颜色，字面值 |

| 事件 | 说明 |
| --- | --- |
| click | `clickable` 时点击整卡触发，不带参数 |

| 插槽 | 说明 |
| --- | --- |
| default | 正文，替换 `content` |
| prefix | 头部左侧自定义内容，替换 `avatar` |
| extra | 头部右侧内容，替换 `meta`；标签、时间、操作都放这里 |
| suffix | 底部内容，替换 `footer`；放展开、查看全部这类补充操作 |

- 三档尺寸只改内边距、头像和标题：正文四边 12 / 16 / 24，头部上下 8 / 12 / 12、左右 12 / 16 / 24；头像 32 / 40 / 48。头部高度下限沿用列表行 44 / 48 / 52，有头像时由头像撑高。
- 标题 13 / 15 / 17、字重 600；正文 `sm` 用 13 / 20，`md` / `lg` 用 15 / 22；`meta` 和 `footer` 固定 13 / 20 次要色。标题、正文和底部在剩余宽度内换行，`meta` 保持单行。
- 卡片默认用 1px `border` 描边，不提供阴影；`full` 只去掉左右描边和圆角，页面左右边距仍由外层控制。
- `headerBg` 只改头部底色，标题、`meta` 和插槽颜色仍按各自来源；对比度由业务保证。`titleColor` / `metaColor` 也是字面值，不跟随亮色、暗色主题。
- `bodyPadded=false` 时正文四边内边距为 0，适合封面图、图片网格和列表行；内容自己补左右留白。
- `clickable` 默认关闭。打开后整卡按下用 `--vx-opacity-pressed`，点击抛 `click`，并且停在卡片上；卡片里不要再放按钮、输入框和链接。Web 端整卡是 `view`，需要键盘入口时由外层按钮或链接承载。
- 卡片不加外部间距，宽度跟随父级；页面左右边距用 `lg`，卡片之间用 `xl`。卡片不嵌套卡片。
- 头像只是标识，标题或名称要同时给出；不要用图片单独承担信息。
- 示例里的 `/static/demo/card/*` 来自演示工程，接入时换成自己的静态资源或网络地址。

## vx-section

区块标题栏。标题、说明、竖线和右侧短操作组成一个标题层，不包内容。`title` / `description` 是文案快捷入口，默认插槽替换标题，`suffix` 替换说明。

```vue
<vx-section title="今日推荐" description="根据你的浏览记录更新，每天 6:00 刷新。" />

<vx-section title="前端工程化" description="构建、规范和发布流程。" marker />

<vx-section title="设计系统" description="令牌、组件和文档。" marker marker-color="#7c3aed" />

<vx-section title="账户安全" description="最近 30 天内更新" variant="soft" marker>
	<template #prefix>
		<vx-icon name="shield" size="md" type="primary" />
	</template>
	<template #extra>
		<view class="section-action" @click="openSecurity">
			<text class="section-action__text">查看全部</text>
			<vx-icon name="chevron-right" size="sm" color="var(--vx-color-primary-pressed)" />
		</view>
	</template>
</vx-section>

<vx-section title="发布状态" marker>
	<template #suffix>
		<view class="section-tags">
			<vx-tag size="sm" type="success" variant="soft" text="已发布" />
			<vx-tag size="sm" type="default" variant="soft" text="自动同步" />
		</view>
	</template>
</vx-section>

<vx-section size="lg" title="第一章 · 起点" description="2026 年 10 月 27 日" marker divider />

<vx-section clickable title="查看全部订单" description="整条可点，点击更新状态。" @click="openOrders" />
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | string | `''` | 标题；传默认插槽时忽略 |
| description | string | `''` | 标题下的补充说明；传 `suffix` 插槽时忽略 |
| size | `sm` \| `md` \| `lg` | `md` | 标题、说明、竖线和留白档位 |
| variant | `plain` \| `soft` | `plain` | 透明底，或带浅底和 `md` 圆角的标题条 |
| marker | boolean | `false` | 标题前的 3px 竖线 |
| divider | boolean | `false` | 标题内容下方的 1px 分割线 |
| clickable | boolean | `false` | 整条可点：按下变淡并抛 `click` |
| titleColor | string | `''` | 标题自定义颜色，字面值 |
| descriptionColor | string | `''` | 说明自定义颜色，字面值 |
| markerColor | string | `''` | 竖线自定义颜色，字面值 |
| dividerColor | string | `''` | 分割线自定义颜色，字面值 |

| 事件 | 说明 |
| --- | --- |
| click | `clickable` 时点击整条触发，不带参数 |

| 插槽 | 说明 |
| --- | --- |
| default | 标题，替换 `title`；内容自己带字号和颜色 |
| prefix | 标题左侧图标、编号或品牌标记；和 `marker` 可以同时使用 |
| extra | 标题行右侧短操作，如「查看全部」；不冒泡到整条 |
| suffix | 说明区，替换 `description`；放标签、时间或自定义富文本 |

- 标题 15 / 17 / 20，行高 22 / 24 / 28，字重 600；说明 `sm` / `md` 用 13 / 20，`lg` 用 15 / 22。标题栏不是控件，不借 `--vx-font-control-*`。
- `plain` 上下各留 4，不加左右内边距和外部间距；`soft` 用 `default-soft` 浅底、`md` 圆角，内边距 `sm` 8 / 12、`md` 12 / 16、`lg` 16 / 24（上下 / 左右）。`soft` 浅底上的说明亮色改用正文色、暗色仍用次要灰（`--vx-section-soft-desc`），保证 4.5:1。
- `marker` 3px 宽，高 14 / 16 / 20，固定胶囊圆头；和标题首行居中，不跟着说明拉长。竖线只作区块标记，不用 `success` / `info` / `warning` / `danger` 装饰。
- `divider` 在标题内容下方 8 / 8 / 12 处画 1px 线，默认 `border`；`dividerColor` 只改这一条线。`soft` 已有浅底和圆角，通常不再加；两者同时打开时线画在浅底内部。分割线不替代区块之间的 24 留白。
- `extra` 里的操作是独立目标，不冒泡到整条；需要整条可点时用 `clickable`，高度下限 44，静态标题栏不拦点击，点击继续落到外层卡片或列表行，也不要加箭头暗示可点。
- `titleColor` / `descriptionColor` / `markerColor` / `dividerColor` 是字面值，不跟随亮色、暗色主题；要跟主题就传 `var(--vx-color-*)`。
- 标题和说明可以换行，`extra` 保持自身宽度不换行；文案太长时先缩短，不靠缩小字号硬塞。
- 标题栏不包内容、不加外部间距；内容紧跟其后，页面左右边距用 `lg`，区块之间用 `xl`。
- Web 端是 `view`，`clickable` 不进入 Tab 顺序；需要键盘入口时由外层按钮或链接承载同一操作。
- ThorUI `tui-section` 迁移：`descr` → `description`，`isLine` → `marker`，`lineColor` → `markerColor`，`color` → `titleColor`，`descrColor` → `descriptionColor`；`size` 由 rpx 数字改为 `sm | md | lg`，`descrSize` 跟随 `size`，`fontWeight` 固定 600（需要其他字重时用默认插槽），`background` 用 `variant="soft"` 或外层容器，`padding` / `margin` 交给页面；`left` 插槽 → `prefix`，标题右侧内容 → `extra`，`descr` 插槽 → `suffix`，点击用 `clickable` + `click`。`descrTop` 固定 4；`lineWidth` / `lineCap` / `lineRight` / `lineGap` 不再暴露，固定 3px、胶囊、8 和 4。

## vx-white-space

上下留白。只占纵向空间，不放内容、不接点击、不画外框；宽度跟随父级，高度取间距令牌或自定义值。

```vue
<vx-white-space />
<vx-white-space size="lg" />
<vx-white-space height="24px" />
<vx-white-space height="64rpx" />
<vx-white-space height="var(--vx-space-xl)" />
<vx-white-space size="sm" height="32px" />
<vx-white-space height="8px" bg-color="var(--vx-color-primary-soft)" />
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| size | `sm` \| `md` \| `lg` | `md` | 8 / 12 / 16，对应 `--vx-space-sm/md/lg` |
| height | string | `''` | 自定义高度，需带单位；传了盖过 `size` |
| bgColor | string | `''` | 自定义底色，字面值；默认透明 |

- `size` 三档直接取间距令牌：`sm` 8、`md` 12、`lg` 16；需要 24 / 32 时用 `height` 传值，不要叠两个 `md`。
- `height` 接受 px、rpx、百分比和 `var()`；单位和值由业务保证。单位缺失时声明被丢掉，回落到 `size` 的档位。
- 固定间距用 px；只有确实要随屏宽变化时才用 rpx。百分比高度要求父级有确定高度，留白场景一般不使用。
- `bgColor` 只在确实需要一条色带时传，是字面值，只写进 `background-color`，不接受渐变和图片；跟主题时传 `var(--vx-color-*)`。字面值不跟随主题，亮暗两套的可见性由业务保证；它不表达状态，也不要拿来当分割线、骨架屏或可点击区域。
- 组件没有默认插槽、具名插槽和事件；需要上下留白包住内容时，在内容前后各放一个，或由页面容器自己补 `padding`。
- 放在纵向布局里；父级是横向 flex 时它会占满一行宽度，不适合夹在并排元素之间。左右留白用 `vx-wing-blank`。
- 从 ThorUI `tui-white-space` 迁移：`size` 的 `small` / `default` / `large` 换成 `sm` / `md` / `lg`；`height` 保留，值要带单位（ThorUI 的 `64` 写成 `64rpx`）；`background` 换成 `bgColor`。默认插槽和 `click` 不再提供，点击交给外层内容。

## vx-wing-blank

左右留白。给默认插槽加左右内边距；宽度跟随父级，高度由内容撑开。不画外框、不加外部间距，外轮廓交给外层容器。

```vue
<vx-wing-blank>
	<view class="block">
		<text class="block__text">左右各留 12</text>
	</view>
</vx-wing-blank>

<vx-wing-blank size="sm">
	<view class="block">
		<text class="block__text">左右各留 8</text>
	</view>
</vx-wing-blank>

<vx-wing-blank size="lg">
	<view class="block">
		<text class="block__text">左右各留 16</text>
	</view>
</vx-wing-blank>

<vx-wing-blank gap="24px">
	<view class="block">
		<text class="block__text">左右各留 24</text>
	</view>
</vx-wing-blank>

<vx-wing-blank gap="64rpx">
	<view class="block">
		<text class="block__text">随屏宽留白</text>
	</view>
</vx-wing-blank>
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| size | `sm` \| `md` \| `lg` | `md` | 8 / 12 / 16，对应 `--vx-space-sm/md/lg` |
| gap | string | `''` | 自定义左右内边距，需带单位；传了盖过 `size` |

| 插槽 | 说明 |
| --- | --- |
| default | 内容，宽度在左右留白之内 |

- `size` 三档直接取间距令牌：`sm` 8、`md` 12、`lg` 16；`lg` 和页面左右边距同值。
- `gap` 是左右内边距，不是子项间距；接受 px、rpx、百分比和 `var()`，传了盖过 `size`。单位和值由业务保证，单位缺失时回落到档位。
- 百分比按父级宽度计算，左右都要给内容留足宽度；不要用负值。
- 宽度固定 100%，并已按 `border-box` 计算；高度由内容决定，纵向不收缩。没有默认插槽时不留节点。不铺底色，不加描边、圆角、阴影和外部间距。
- 组件没有具名插槽和事件；点击由插槽里的按钮、列表行或链接提供。需要背景、圆角或描边时，在外层包 `view` 或直接用 `vx-card`。
- 页面边距只留一次：页面已经有 16 时，再套 `lg` 就是 32；通栏区块可以用它把内容拉回页面边距。
- 从 ThorUI `tui-wing-blank` 迁移：`size` 的 `small` / `default` / `large` 换成 `sm` / `md` / `lg`；`gap` 保留，值要带单位（ThorUI 的 `64` 写成 `64rpx`）。`background` / `radius` 交给外层容器，`marginTop` / `marginBottom` 交给 `vx-white-space` 或页面布局，`click` 交给插槽里的内容。

## vx-divider

分割线。横向占满宽度，纵向由父级 flex 排布；支持虚线、中间文字和自定义间距。没有插槽、箭头、图标和点击态——它就是一条线。

```vue
<vx-divider />

<vx-divider text="分组标题" />

<vx-divider text="最近更新" align="left" />

<vx-divider dashed />

<vx-divider dashed text="更多内容" />

<vx-divider :spacing="0" />

<vx-divider spacing="24px" />

<vx-divider text="品牌分隔" color="var(--vx-color-primary)" />

<view class="stat-row">
	<view class="stat-row__item">...</view>
	<vx-divider direction="vertical" />
	<view class="stat-row__item">...</view>
</view>
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| direction | `horizontal` \| `vertical` | `horizontal` | 方向；纵向由父级 flex 排布 |
| text | string | `''` | 横线中间的文字；空串就是一条线 |
| align | `left` \| `center` \| `right` | `center` | 有文字时的位置；不认识的值按 `center` 处理 |
| dashed | boolean | `false` | 1px 虚线 |
| spacing | string \| number | `''` | 间距：数字按 px，字符串需带单位；横向是上下外边距，纵向是左右外边距；空串横向 12、纵向 16 |
| color | string | `''` | 字面值，覆盖线色与文字色 |
| height | string | `''` | 纵向线高度，需带单位；空串时撑满父级 |

- 横线 1px，默认 `--vx-color-border`；不用 `divider` 令牌，那个只给列表行内的分割线。
- 带文字时两侧各画一段等宽线（各占一半剩余宽度），`align` 决定文字位置：`left` 只画右侧线，`right` 只画左侧线，`center` 两侧都画。文字 13 / 20 / 400 次要灰，和线之间各留 12。
- 虚线只换 `border-style: dashed`，不画背景渐变；1px 虚线的实线部分比实线淡，重要分隔用实线或换 `color`，不要加粗到 2px。
- 竖线宽 1px，`align-self: stretch` 撑满父级那一行；`height` 传了才固定高度。组件不自动水平居中，父级怎么排就怎么落。
- `spacing` 数字按 px；字符串原样透传，必须带单位。数字 0 会写成 `0px`，负值按外边距规则处理。
- `color` 是字面值，同时改线色和文字色，不跟随主题；跟主题时传 `var(--vx-color-*)`。它不表达状态，状态由文案和周围内容表达。
- 没有插槽、图标、箭头和点击态；需要图标或点击时用 `vx-list-cell`、`vx-section` 或业务自己的一行，不要往分割线里塞内容。
- 外边距会叠加在相邻元素之后，页面节奏仍由 `vx-white-space` 或外层间距决定；不要用分割线代替区块留白。
- 纵向线放进横向 flex 行；父级高度由内容撑开时它跟着撑满，父级 `align-items: center` 时也照样撑满。父级被压成固定高度时才需要传 `height`。

## vx-safe-area

安全区占位。顶部让开状态栏与刘海，底部让开手势条；不传 `height` 时读 `--uni-safe-area-inset-top` / `--uni-safe-area-inset-bottom`，传了就直接写高度。只做纵向，左右安全区由页面自己处理。

```vue
<view class="page">
	<view class="page__body">...</view>
	<view class="page__bar">...</view>
	<vx-safe-area />
</view>

<vx-safe-area edge="top" bg-color="var(--vx-color-primary-soft)" />

<vx-safe-area height="24px" bg-color="var(--vx-color-default-soft)" />

<vx-safe-area edge="bottom" fixed height="44px" bg-color="var(--vx-color-surface)" />
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| edge | `top` \| `bottom` | `bottom` | 贴哪一边；不认识的边按 `bottom` 处理 |
| height | string | `''` | 带单位；传了就不再读系统安全区 |
| bgColor | string | `''` | 字面值，默认透明 |
| fixed | boolean | `false` | 固定到窗口对应边，层级 1，与固定页脚同层 |

- 不传 `height` 时，整条高度由 `padding-top` / `padding-bottom` 读 `var(--uni-safe-area-inset-top, 0px)` / `var(--uni-safe-area-inset-bottom, 0px)`。App 为状态栏 / 手势条高度；Web 上这两个变量取页面相对窗口的留白——有原生导航栏时顶部等于导航栏高度，有原生 tabBar 时底部等于 tabBar 高度，两者都没有时才为 0。已经让开原生导航栏或 tabBar 的页面不要再叠对应方向。
- 传了 `height` 就直接写高度，不再读系统值；单位和值由业务保证。`height` 和 padding 不会叠加。
- `fixed` 时贴住对应边，`z-index: 1`，与固定页脚同层；不加分割线、不做毛玻璃、不做渐变，也不放内容。
- 固定条不占文档流：页面底部要自己留出高度，否则最后一段内容会被盖住。放在页面根节点，和滚动容器平级，不要放进 `scroll-view`。
- `bgColor` 是字面值，默认透明；跟主题时传 `var(--vx-color-*)`。它只铺这一条，不表达状态，也不改系统状态栏的前景。
- 不管左右安全区：横屏的左右刘海由页面或 `vx-navigation-bar` / `vx-status-bar` 的横屏留白处理。
- 状态栏和导航栏页面仍用 `vx-navigation-bar` 的 `statusBar` 或 `vx-status-bar`，不要在最上面再叠一条安全区；这条只给普通页面做占位。
- 组件没有插槽、事件、圆角、描边和阴影；需要底栏时把底栏放在它前面，不要让它兼任底栏。

### 平台支持

| 平台 | 系统安全区 | fixed |
| --- | --- | --- |
| Web | 自定义导航且无 tabBar 时 0；有原生导航栏 / tabBar 时等于对应高度 | 固定定位；不拦点击（`pointer-events: none`） |
| App（Android / iOS / 鸿蒙） | 状态栏 / 刘海和手势条高度 | 固定定位，层级 1 |
| 微信小程序 | 由宿主注入；变量为 0 时这条不占高度 | 固定定位，层级 1 |

## vx-avatar

头像。`src` 有值时先加载图片，失败后按 `text` 首字 → `icon` → `user` 图标逐级回落；`src` 变化会重新尝试。首字按 code point 取，emoji 不会被截成半个。描边画在外框内侧，不改变 32 / 40 / 48 的外框尺寸。

```vue
<vx-avatar src="/static/demo/card/avatar-cs.png" />

<vx-avatar text="汽" />

<vx-avatar icon="camera" type="primary" />

<vx-avatar text="😀" size="lg" ring type="primary" />

<vx-avatar shape="square" type="success" text="元" />

<vx-avatar :src="avatarUrl" text="汽" clickable @error="onAvatarError" @click="openProfile" />

<vx-avatar text="元" bg-color="#1f2a44" color="#ffffff" />
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| src | string | `''` | 图片地址；空串直接走首字，不经过图片节点 |
| text | string | `''` | 首字，先 `trim` 再按 code point 取第一个字符 |
| icon | string | `''` | 字体图标名，取 `libs/icons/codepoints.ts` 里已有的名字；空值回落到 `user` |
| size | `sm` \| `md` \| `lg` | `md` | 外框 32 / 40 / 48 |
| shape | `circle` \| `rounded` \| `square` | `circle` | 圆形 / 小圆角 / 直角 |
| type | `default` \| `primary` \| `success` \| `warning` \| `danger` \| `info` | `default` | 首字与图标的浅底和前景 |
| ring | boolean | `false` | 2px 内描边，画在外框内侧，不改变外框尺寸 |
| bgColor | string | `''` | 字面值，覆盖 `type` 的底色；图片态也铺 |
| color | string | `''` | 字面值，覆盖首字和图标的前景色 |
| mode | `aspectFill` \| `aspectFit` | `aspectFill` | 透传给原生 `image` 的填充方式 |
| clickable | boolean | `false` | 可点击：按下变淡并抛 click；只写 `@click` 不传也算可点 |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| error | 图片加载失败时触发一次；`src` 为空不抛事件 | 无 |
| click | 有 `@click` 监听或 `clickable` 为 true 时触发；显式 `clickable=false` 和静态头像不拦外层点击 | 无 |

- 回落链：`src` → `text` 首字 → `icon` → `user`。图片失败只记一次，不重试、不节流；`src` 变化后复位，重新走一遍图片。
- 首字先 `trim`，取第一个 code unit；如果它是 `0xD800`–`0xDBFF` 的高位代理，连取两个 code unit。`😀` 这类 emoji 和中文首字都不会乱码。
- 尺寸：外框 32 / 40 / 48，首字 12 / 14 / 16，图标 14 / 16 / 18；图标不走 `vx-icon` 的 14 / 18 / 22 三档。
- 形状：`circle` 用 `--vx-radius-pill`；`rounded` 按档取 `--vx-control-radius-*` 6 / 8 / 10；`square` 为 0。图片由外框 `overflow: hidden` 裁切，不在 `<image>` 上加圆角。
- 配色：底色取对应的 `*-soft`，前景取 `*-pressed`，`warning` 取 `warning-ink`，`default` 取正文色。图片态不铺底色，除非传了 `bgColor`。
- `ring` 是绝对定位的内层 2px 描边，颜色固定 `surface`，半径跟外框一致；外框不加 `border`，32 / 40 / 48 不会变成 34 / 42 / 50。
- `clickable` 默认 `false`。只写 `@click` 或显式打开 `clickable` 时，按下压到 `--vx-opacity-pressed` 0.8，点击停在头像上并抛 `click`；显式 `clickable=false` 时不淡、不拦外层点击；既没监听也没打开时不挂 `hover-class`，点击继续冒泡。
- 图片绝对定位铺满，`mode` 原样透传；加载中不显示占位动画，占位和骨架分别属于 `vx-image` 与 Pro 的骨架屏。
- 没有 `badge`、在线状态点和 `disabled`：徽章用 `vx-badge` 的 `absolute` 包一层，状态点由业务用绝对定位的小圆点加；不做头像组、裁剪上传、点击放大和长按保存。
- Web 端首字和图标设置了 `user-select: none`，拖选时不会把首字选走。

## vx-grid

宫格容器。负责排列、外框和四角裁切，列数、尺寸、内容和点击都在 `vx-grid-item` 上。`variant="card"` 是默认的描边卡片；`plain` 只保留 `surface` 底，适合放进已有卡片或浅色区块。

```vue
<vx-grid>
	<vx-grid-item v-for="(entry, index) in entries" :key="entry.title" :columns="3" :index="index"
		:icon="entry.icon" :title="entry.title" @click="open(entry.title)" />
</vx-grid>

<vx-grid>
	<vx-grid-item :columns="3" :index="0" icon="wallet" title="钱包" />
	<vx-grid-item :columns="3" :index="1" icon="receipt" title="订单" />
	<vx-grid-item :columns="3" :index="2" icon="truck" title="物流" />
	<vx-grid-item :columns="3" :index="3" icon="headphones" title="客服" />
	<vx-grid-item :columns="3" :index="4" icon="heart" title="收藏" />
	<vx-grid-item :columns="3" :index="5" icon="settings" title="设置" />
</vx-grid>

<vx-grid variant="plain">
	<vx-grid-item :columns="2" :index="0" icon="grid-2x2" title="工作台" description="审批、日程和待办" />
	<vx-grid-item :columns="2" :index="1" icon="users" title="通讯录" description="同事和外部联系人" />
</vx-grid>
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| variant | `card` \| `plain` | `card` | 描边卡片，或只保留 surface 底的平面宫格 |

| 插槽 | 说明 |
| --- | --- |
| default | 格子，通常放 `vx-grid-item` |

- 容器只负责排列和外观；列数、尺寸和内容写在格子上，不重复声明，避免两处不同步。
- `card` 用 `surface` 底、1px `border` 描边和 `md` 圆角，并裁掉四角；`plain` 去掉描边和圆角。
- 宫格不加阴影、渐变和外部间距；页面左右边距用 `lg`，宫格之间用 `xl`。
- 最后一行没排满时留白，剩余格子不拉伸。

## vx-grid-item

宫格项。按 `columns` 占宽，画图标、主文案、说明和角标；`index` 从 0 开始按行递增，决定第一行、第一列的内部线。整格默认可点，按下用 `surface-pressed` 底并抛 `click`；传了 `bgColor` 时改用整体透明度。

```vue
<vx-grid>
	<vx-grid-item :columns="3" :index="0" icon="wallet" title="钱包" description="余额与账单"
	 @click="openWallet" />
	<vx-grid-item :columns="3" :index="1" icon="receipt" title="订单" description="待付款和售后"
	 @click="openOrders" />
	<vx-grid-item :columns="3" :index="2" icon="headphones" title="客服" description="在线咨询"
	 @click="openSupport" />
</vx-grid>

<vx-grid>
	<vx-grid-item :columns="4" :index="0" icon="wallet" title="钱包" icon-variant="fill" />
	<vx-grid-item :columns="4" :index="1" image="/static/demo/card/grid-1.jpg" title="相册" />
	<vx-grid-item :columns="4" :index="2" title="会员">
		<template #icon>
			<view class="grid-tile">
				<vx-icon name="star" size="lg" type="primary" />
			</view>
		</template>
	</vx-grid-item>
	<vx-grid-item :columns="4" :index="3" icon="bell" title="消息">
		<template #extra>
			<vx-badge :value="8" />
		</template>
	</vx-grid-item>
	<vx-grid-item :columns="4" :index="4" icon="check-circle" title="可点击" />
	<vx-grid-item :columns="4" :index="5" icon="eye" title="静态格" :clickable="false" />
	<vx-grid-item :columns="4" :index="6" icon="lock" title="禁用格" disabled />
	<vx-grid-item :columns="4" :index="7" icon="more-horizontal" title="更多" />
</vx-grid>

<vx-grid variant="plain">
	<vx-grid-item :columns="5" :index="0" size="sm" icon="camera" title="拍照" color="#8a2b33"
		icon-variant="fill" bg-color="#fdeaea" :divider="false" />
	<vx-grid-item :columns="5" :index="1" size="sm" icon="image" title="相册" color="#8a2b33"
		icon-variant="fill" bg-color="#fdeaea" :divider="false" />
	<vx-grid-item :columns="5" :index="2" size="sm" icon="video" title="视频" color="#8a2b33"
		icon-variant="fill" bg-color="#fdeaea" :divider="false" />
	<vx-grid-item :columns="5" :index="3" size="sm" icon="mic" title="录音" color="#8a2b33"
		icon-variant="fill" bg-color="#fdeaea" :divider="false" />
	<vx-grid-item :columns="5" :index="4" size="sm" icon="file" title="文件" color="#8a2b33"
		icon-variant="fill" bg-color="#fdeaea" :divider="false" />
</vx-grid>
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| columns | number | `3` | 这一组的列数，2–5，超出按 3；同一组保持一致 |
| index | number | `0` | 格子序号，从 0 开始按行递增；决定第一行、第一列的内部线 |
| title | string | `''` | 主文案，单行省略 |
| description | string | `''` | 主文案下的说明，可以换行 |
| icon | VxIconName | — | 字体图标；传了 `image` 或 `icon` 插槽时忽略 |
| iconVariant | `regular` \| `fill` | `regular` | 字体图标字重；图片和 icon 插槽不受影响 |
| image | string | `''` | 图片地址，优先于字体图标；`icon` 插槽优先于两者 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `default` | 字体图标的语义色；default 显示为次要灰 |
| size | `sm` \| `md` \| `lg` | `md` | 最小高度、内边距、图标、图片和文案档位 |
| divider | boolean | `true` | 画上、左内部线；第一行、第一列不画 |
| clickable | boolean | `true` | 按下有底色并抛 `click`；静态格传 `false` |
| disabled | boolean | `false` | 组件内容转灰，不抛 `click` |
| bgColor | string | `''` | 格子底色，字面值；设置后按下改用整体透明度 |
| color | string | `''` | 主文案和字体图标的颜色，字面值；传了就不看 type |

| 事件 | 说明 |
| --- | --- |
| click | 可点击格被点按时触发；静态格和禁用格不触发，不带参数 |

| 插槽 | 说明 |
| --- | --- |
| default | 替换图标、主文案和说明；宽度、内边距和点击仍由格子负责 |
| icon | 替换图标；主文案和说明仍按 props 渲染 |
| extra | 右上角角标；放徽章、短标签或状态 |

- 列宽 50 / 33.33 / 25 / 20%，含 1px 内部线；不另加列间距。
- 第一行不画上边线，第一列不画左边线；序号跳号会让线算错。
- 最小高度 72 / 88 / 104，内边距 8 / 12 / 16；主文案 13 / 15 / 17，单行省略；说明固定 13 / 20。
- 字体图标 18 / 22，不套底色；默认 `text-secondary`，`type` 改语义色，`iconVariant` 切 regular / fill。普通入口不传 `type`，只有状态才上语义色。
- 图片用 32 / 40 / 48 方框按 `aspectFit` 展示，圆角由方框裁切，跟 `size` 取 6 / 8 / 10；`icon` 插槽内容自己定尺寸和颜色。
- `type` 只作用于字体图标；图片和插槽内容不跟着变色。禁用时图标转灰，图片压到 0.4。
- 有 `bgColor` 时按下用 `--vx-opacity-pressed`，不再换 `surface-pressed`；`color` 同时改主文案和字体图标，说明仍用次要灰；底色和分割线的对比度由业务保证。
- 色底只铺在格子上；最后一行不足时，空位保留网格底色，色块要铺满整行。
- 不需要外框时容器写 `variant="plain"`；连内部线也去掉时每个格子写 `:divider="false"`。
- `clickable` 默认打开；静态格关掉后没有按下态，也不抛 `click`。点击停在格子上。
- 可点击格子里不要再放按钮、输入框和链接；格内单独操作自己 `@click.stop`。
- `extra` 贴右上角，不占内容高度；角标不替代主文案。
- 格子是 `view`，Web 端不进入 Tab 顺序；需要键盘入口时由外层按钮或链接承载。

## vx-row

栅格行。只管排列：列间距、行间距、水平排列、垂直对齐和换行；不画底色、描边和圆角，外观由列里的内容决定。

```vue
<vx-row :gutter="12" :line-gutter="12">
	<vx-col v-for="card in cards" :key="card.title" :span="12" :md="8" :lg="6">
		<view class="card">{{ card.title }}</view>
	</vx-col>
</vx-row>

<vx-row justify="center" align="center" :gutter="12">
	<vx-col :span="6">
		<view class="tile">6</view>
	</vx-col>
	<vx-col :span="6">
		<view class="tile">6</view>
	</vx-col>
</vx-row>
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| gutter | number | `0` | 列间距，单位 px；一半铺在列的两侧，行抵掉外侧半格 |
| lineGutter | number | `0` | 行间距，单位 px；落在换行后每一列的上方，行抵掉第一行 |
| justify | `'start'` \| `'center'` \| `'end'` \| `'between'` \| `'around'` \| `'evenly'` | `'start'` | 一行没占满时的水平排列方式 |
| align | `'start'` \| `'center'` \| `'end'` \| `'stretch'` | `'stretch'` | 同一行里各列的垂直对齐方式 |
| wrap | boolean | `true` | 放不下时换行；关掉后一行按比例压缩 |

| 插槽 | 说明 |
| --- | --- |
| default | 一个或多个 `vx-col`；整行没有内容时用 `v-if` 去掉行 |

- `gutter` 的一半铺在列的左右内边距上，行用等量负外边距抵掉外侧半格；第一列和最后一列的内容仍贴住父级内边距。数值四舍五入，0 和负数不铺，超过 48 按 48。
- `lineGutter` 落在换行后每一列的上外边距上，行抵掉第一行；多行网格要和 `gutter` 一起传。
- 行不写宽度，靠 `align-self: stretch` 撑满纵向容器；放进横向 flex 容器时按内容宽度排。
- 默认 `align="stretch"`，同一行的列等高；列里的卡片要一起撑满还得自己写 `flex: 1`。行本身不加圆角、底色、描边和阴影。
- 从 ThorUI `tui-row` 迁移：`justify` 的 `space-around` / `space-between` 改为 `around` / `between`，另加 `evenly`；`align` 的 `top` / `middle` / `bottom` 改为 `start` / `center` / `end`，另加默认的 `stretch`；`isFlex`、`marginTop` / `marginBottom` 不再提供。

## vx-col

栅格列。只管占宽：24 栅格跨度、左侧偏移、视觉位移和四档断点；底色、描边、圆角和内容由插槽自己带。

```vue
<vx-row :gutter="12" :line-gutter="12">
	<vx-col :span="24" :sm="12" :md="8" :lg="6">
		<view class="card">积分兑换</view>
	</vx-col>
	<vx-col :span="24" :sm="12" :md="8" :lg="6">
		<view class="card">优惠券</view>
	</vx-col>
</vx-row>

<vx-row :gutter="12">
	<vx-col :span="8" :offset="4">
		<view class="card">8 · 空出四列</view>
	</vx-col>
	<vx-col :span="8" :push="4">
		<view class="card">8 · 右移四列</view>
	</vx-col>
</vx-row>
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| span | number | `24` | 占几列，1–24；`0` 表示当前宽度下不显示 |
| offset | number | `0` | 左侧空出几列，上限 `24 - span` |
| push | number | `0` | 视觉右移几列，不改变占位 |
| pull | number | `0` | 视觉左移几列，不改变占位 |
| sm | number | `-1` | 窗口宽度 ≥ 576 时的跨度；`-1` 不覆盖 |
| md | number | `-1` | 窗口宽度 ≥ 768 时的跨度；`-1` 不覆盖 |
| lg | number | `-1` | 窗口宽度 ≥ 992 时的跨度；`-1` 不覆盖 |
| xl | number | `-1` | 窗口宽度 ≥ 1200 时的跨度；`-1` 不覆盖 |

- 24 份制：一份是行宽的 4.1667%，列宽向下取到 6 位小数，24 个 1 加起来不超过 100%，最后一列不会被挤到下一行。
- `span` 取 1–24 的整数，0 表示这一档不显示，负数按 0，超过 24 按整行；`offset` 和跨度一起收口，写超了按 `24 - span` 算。
- `push` / `pull` 只改视觉位置、不改变占位，同时传时取净值（`push` 向右、`pull` 向左）。位移用 `left` 实现，列会变成 `position: relative`。
- 断点按窗口宽度判断，不按父级宽度。蒸汽模式没有 `@media`：列所在的 `vx-row` 用 `uni.getWindowInfo()` 量一次，写了断点的列才读，`onResize` 时重算；单独使用的列自己量。
- 断点只覆盖 `span`，`offset` / `push` / `pull` 在所有宽度上同一个值；没传（`-1`）的那一档保持上一档。
- 列不写固定高度，行高由内容决定；嵌套只建议一层，内层的 24 份按外层列宽算。
- Web 端是 `view` 组合，不进入 Tab 顺序；`push` / `pull` 改位置时视觉顺序和读屏顺序不一致，关键内容不要靠位移调顺序。
- 从 ThorUI `tui-col` 迁移：`pushLeft` / `pullRight` 改名 `push` / `pull`；`gutter` 从 rpx 换成 px；断点从 max-width 改成 min-width 往上覆盖，手机的跨度用 `span` 写，不再有 `xs`；`xs` 传 `{ span, offset }` 对象的写法不再支持。

## vx-image-group

图片组合。用 `items` 按顺序排缩略图，支持三档方框、三种形状、横向 / 纵向和重叠 / 留缝；多行在 row 下打开 `wrap`。整张图默认可点，点击抛 `click(index, item)`，图片失败时换成占位图并抛 `error(index, item)`。

```vue
<vx-image-group :items="photos" @click="preview" />

<vx-image-group :items="photos" size="sm" shape="circle" :offset="-12" ring />

<vx-image-group :items="photos" :offset="8" wrap />

<vx-image-group :items="photos" direction="column" :offset="8" />

<vx-image-group :items="photos" mode="aspectFit" shape="square" :clickable="false" />
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | VxImageGroupItem[] | `[]` | `{ src, id? }`；空数组不渲染 |
| size | `sm` \| `md` \| `lg` | `md` | 方框 40 / 64 / 88 |
| shape | `rounded` \| `circle` \| `square` | `rounded` | 形状；circle 用于头像 |
| mode | `aspectFill` \| `aspectFit` \| `scaleToFill` | `aspectFill` | 图片填充方式 |
| direction | `row` \| `column` | `row` | 横向一行或纵向一列 |
| offset | number | `0` | 相邻偏移，单位 px；负值重叠，正值留缝 |
| wrap | boolean | `false` | row 下多行；负 offset 按 0 处理 |
| ring | boolean | `false` | 每张图加 2px 内描边，重叠时分开 |
| ringColor | string | `''` | 描边颜色，字面值；默认 surface |
| clickable | boolean | `true` | 按下变淡并抛 `click`；静态展示传 `false`，不抛事件也不拦点击 |

| 事件 | 说明 |
| --- | --- |
| click | 可点图被点按时触发，回传 `index` 和该项 `item` |
| error | 图片加载失败时触发一次，回传 `index` 和该项 `item`；`src` 为空只显示占位图，不抛事件 |

- 方框固定正方形，不跟父级宽度缩放；同一组只用一档 `size`。圆角跟 `size` 取 6 / 8 / 10。`sm` 40 适合堆叠和列表前缀，独立图片入口用 `md` / `lg` 并留出外层间距。
- `offset` 单位是 px，取整；行内只在后一张加左侧外边距，纵向只在后一张加上方外边距。重叠量建议控制在方框的三分之一以内。
- `wrap` 只在 `direction="row"` 时生效，父级要有宽度边界，横向和纵向留缝都取 `offset`；最后一行和最后一列用负外边距收回尾巴。横排父级需要 `flex: 1`，负外边距才收得回最后一列。负 `offset` 按 0 处理，`column` 忽略 `wrap`。
- `ring` 是方框内侧的 2px 描边，默认用 `surface`；放在页面底色上时传 `ring-color="var(--vx-color-bg)"`。圆环挤占图片内容区，不改变方框边长。
- 图片加载失败或 `src` 为空时显示 `default-soft` 底色和 `image` 占位图标，图标用 `disabled-text`；加载失败抛 `error`，空地址只占位不抛事件。父级整组换图时清掉失败记录重新加载，同一个地址在清掉失败记录前只抛一次 `error`。
- `clickable` 默认打开；可点时点击停在单张图上，不冒泡到外层。静态展示传 `:clickable="false"`，不抛 `click`，也不拦点击，放进可点击行时点缩略图等同于点行。图片组里不要再放按钮和链接。
- 组件不加外框、底色、阴影和外部间距；单行不写死宽度，图片靠左排，多行时铺满父级。页面左右边距和组间距由外层负责。
- 只承载缩略图和点击，不放标题、数量、说明和主操作；标题、「查看全部」和删除等操作由外面的卡片、列表行或页面区块承担。
- 从 ThorUI `tui-image-group` 迁移：`imageList` → `items`，`width` / `height` → `size`（只保留正方形三档），`radius` → `shape`（三档），`distance` → `offset`（px），`multiLine` → `wrap`，`borderWidth` / `borderColor` → `ring` / `ringColor`（固定 2px）。`isGroup` 不再需要，组件本身就是组合；`lazyLoad`、`fadeShow`、`webp`、`longpress` 和默认插槽不提供，这些平台属性和图内装饰由业务按需包一层；`@errorEvent` → `@error`，`@loaded` 不再提供，`@click` 回传 `index` 和完整 `item`。

## vx-image

图片底座。加载中铺占位底色，成功后 200ms 淡入，失败只回落一次；圆角只作用于外框，图片一起裁切。点击、加载和失败都只抛事件，预览、长按保存和裁剪不属于这一件。

```vue
<vx-image src="/static/demo/card/cover.jpg" width="240px" :ratio="1.78" radius="md" />

<vx-image src="/static/demo/card/thumb-1.jpg" width="120px" height="80px" radius="sm" />

<vx-image src="/static/demo/card/avatar-cs.png" width="64px" height="64px" radius="circle" />

<vx-image src="/static/demo/card/missing.jpg" height="120px" error-text="图片加载失败"
	@error="onImageError" />

<vx-image :src="cover" height="180px" :fade="false" lazy-load @load="onImageLoad" @click="openGallery" />
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| src | string | `''` | 图片地址；空串直接走失败态 |
| mode | `aspectFill` \| `aspectFit` \| `scaleToFill` \| `center` | `aspectFill` | 透传给原生 `image` 的 `mode`，其它值回落到 `aspectFill` |
| width | string | `'100%'` | 宽度，需带单位 |
| height | string | `''` | 高度，需带单位；空串时由 `ratio` 或父级高度决定 |
| ratio | number | `0` | 宽 / 高，例如 `1.78`；`0` 表示不按比例，只在 `width` 是 px 或 rpx 时生效 |
| radius | `none` \| `sm` \| `md` \| `lg` \| `circle` | `none` | 外框圆角；`circle` 取 `--vx-radius-pill` |
| placeholder | boolean | `true` | 加载中铺占位底色；失败态始终铺 |
| errorIcon | string | `'image'` | 失败态图标，取 `libs/icons/codepoints.ts` 里已有的名字；extend 图标要先引入 `icons-extend.css` |
| errorText | string | `''` | 失败态文案；空串只显示图标 |
| bgColor | string | `''` | 占位与失败态的底色，字面值；传了盖过 `--vx-color-default-soft`；成功态也留在外框上，`aspectFit` 的留白落在它上面 |
| lazyLoad | boolean | `false` | 懒加载，仅 Web 和小程序生效；App 端由平台决定 |
| fade | boolean | `true` | 加载完成后 200ms 淡入；关闭后直接出现 |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| load | 图片加载完成时触发一次 | 无 |
| error | 地址读不到时触发一次；`src` 为空直接显示失败态，不抛事件 | 无 |
| click | 点击图片时触发，失败态也触发 | 无 |

- 三态：加载中只铺占位底色（`placeholder=false` 时透明），成功显示图片并按 `fade` 淡入，失败显示 `errorIcon` 和 `errorText`，图标在上、文案在下，整组在框内垂直居中。
- 占位底色优先级：`bgColor` → `--vx-color-default-soft`；失败态同色。不读骨架屏令牌，占位只表达「还没加载完」。
- 尺寸优先级：`height` → `ratio` 换算 → `100%`。前两者都没有时高度由父级决定，父级必须有确定高度，否则盒子高度为 0。
- `ratio` 只在 `width` 是 px 或 rpx 时生效：px 直接算，rpx 按 750 基准用 `uni.getSystemInfoSync().windowWidth` 换算成 px 再算。`width` 是百分比、`auto` 或 `var()` 时忽略并回落到父级高度，只 `console.warn` 一次。
- `ratio` 在渲染时算好，不写 `createSelectorQuery` 量父级宽度，第一帧不会跳。横竖屏切换后改 `ratio` / `width` 或换 `:key` 才会重算。
- `radius` 只写在外框上，外框 `overflow: hidden`，图片一起裁切；`circle` 取 `--vx-radius-pill`，其余取 `--vx-radius-sm` / `md` / `lg`。
- `src` 变化会重置成加载中，旧图的淡入态一起清掉；同一个地址重新赋值不会重挂节点，也就不会触发新的 `load`，需要重播时换 `:key`。
- 失败只回落一次：不重试、不加节流、不自动清空 `src`。重试由业务换 `src`（改值或换 `:key` 都行）。
- `fade` 只作用在图片上，占位底色始终不透明；不支持过渡的平台直接落位，不会停在透明状态。
- `errorText` 用 `--vx-font-sm` / `--vx-color-text`（`default-soft` 上的次要灰不到 4.5:1）；图标用 `disabled-text`。空间不够时由外框裁掉，不要把长说明塞进小图。
- `bgColor` 是字面值，失败态的图标和文案不跟着变色，对比度由业务保证；跟主题时传 `var(--vx-color-*)`。
- 只承载图片本身：不提供 `preview`、长按保存、裁剪、骨架扫光和占位插槽。点击预览由业务跳 Pro 的 `vx-gallery`，需要骨架时用 Pro 的 `vx-skeleton`。
- `vx-card` / `vx-image-group` / `vx-upload` / `vx-waterfall` 里的裸 `<image>` 本版不迁移，它们是行为改动，另开一版处理。

### 平台支持

| 平台 | ratio | lazyLoad | fade |
| --- | --- | --- | --- |
| Web | `width` 为 px / rpx 时按脚本换算；百分比和 auto 不生效 | 生效 | `opacity` 过渡 200ms |
| App（Android / iOS / 鸿蒙） | 同上 | 由平台处理，安卓默认懒加载 | 支持过渡时淡入，否则直接落位 |
| 微信小程序 | 同上 | 生效 | `opacity` 过渡 200ms |

## vx-loading

加载中。转圈加可选文案，横排或纵排，三种转圈形态；`overlay` 打开后铺满页面居中显示，并挡住页面点击。

```vue
<vx-loading />
<vx-loading text="保存中" type="primary" />
<vx-loading text="正在加载..." layout="column" size="lg" />
<vx-loading text="正在加载..." variant="arc" type="info" />
<vx-loading text="正在加载..." variant="bars" type="success" />
<vx-loading v-if="saving" overlay text="正在保存..." />
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | string | `'加载中'` | 转圈旁的文案；传空串只显示转圈 |
| wrap | boolean | `true` | 文案换行；关掉后保持单行 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `default` | 转圈颜色，不改变文案颜色 |
| size | `sm` \| `md` \| `lg` | `md` | 转圈 14 / 18 / 22，文案 13 / 13 / 15 |
| variant | `ring` \| `arc` \| `bars` | `ring` | 圆环、开口弧、十二瓣 |
| layout | `row` \| `column` | `row` | 横排或纵排；`overlay` 固定纵排 |
| overlay | boolean | `false` | 全屏浮层，面板居中，挡住页面点击 |
| mask | boolean | `true` | 浮层带遮罩；关掉后仍挡住点击，只是不压暗页面 |
| maskColor | string | `''` | 自定义遮罩色，字面值；不传时用 `--vx-color-mask` |
| zIndex | number | `1050` | 浮层层级，压在消息提示上、轻提示下 |

没有事件和插槽。

- 行内默认横排，`layout="column"` 时转圈在上、文案在下；尺寸只改转圈和文案，不额外加外层间距。
- `type` 只改转圈：warning 取 `warning-ink`，default 行内用次要灰；文案在行内保持次要灰，浮层里默认转圈和文案一起用正文色。
- `overlay` 是 `position: fixed` 的整页浮层，用 `v-if` 控制显隐。面板最小 120、最大 240，内边距 24，`md` 圆角、`lg` 阴影，压在页面内容上。
- 浮层默认带 `mask`，遮罩使用 `--vx-color-mask`；`mask=false` 只去掉压暗，整层仍然接住点击。
- 层级默认 1050；消息提示是 1010，弹框是 1020，轻提示是 1100。浮层加载不要再叠消息提示和轻提示。
- 三种形态共用 700ms 线性节奏。`bars` 是十二瓣轮流渐隐，比另外两种重，适合更大的展示位；同一页只用一种。
- 5.26 的 App 端没有 CSS 关键帧，转圈可能不旋转；文案要能独立说明正在等什么。5.31 起恢复正常。
- 加载中不是骨架屏、进度条或百分比。需要占位用骨架屏，需要进度用进度条，需要弹窗确认用对话框。
- 全屏浮层挂在页面根节点，不要放进 `scroll-view` 或卡片；等待结束及时把 `overlay` 收回。

## vx-loadmore

列表尾部正在加载下一页。转圈加一句文案，和 `vx-nomore` 共用同一套上下留白，替换时不跳高度。

```vue
<vx-loadmore />
<vx-loadmore text="上拉加载更多..." />
<vx-loadmore type="primary" size="lg" />
<vx-loadmore variant="arc" text="正在加载更多..." />
<vx-loadmore variant="bars" text="正在加载更多..." />
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | string | `'正在加载...'` | 加载文案；传空串只显示转圈 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `default` | 转圈颜色，不改变文案颜色 |
| size | `sm` \| `md` \| `lg` | `md` | 转圈 14 / 18 / 22，文案 13 / 13 / 15 |
| variant | `ring` \| `arc` \| `bars` | `ring` | 转圈形态，和 `vx-loading` 共用 |

没有事件和插槽。

- 只表示列表正在加载，不承载点击、重试和空状态；需要「加载更多」按钮时用按钮，不要把 `vx-loadmore` 做成按钮。
- 上下留白 16，文案 sm / md 用 13 / 20、lg 用 15 / 22，并且保持单行；转圈和文案居中，宽度跟随父级。长句不换行，避免和没有更多切换时跳高。
- 和 `vx-nomore` 放在同一个位置：加载中用 `vx-loadmore`，加载结束换成 `vx-nomore`，不要同时渲染。
- 放在分组卡片外，和卡片之间留 16；放进卡片会继承卡片的描边和底色，看起来像行内容。
- 转圈颜色默认次要灰；需要主色时传 `type="primary"`，文案仍保持次要灰。

## vx-nomore

列表到底的收尾标记。默认一句「没有更多了」加两侧细线，也可以只留圆点或去掉线。

```vue
<vx-nomore />
<vx-nomore text="我是有底线的" />
<vx-nomore text="NO MORE" size="lg" />
<vx-nomore dot />
<vx-nomore :line="false" text="没有更多了" />
<vx-nomore text="NO MORE" color="#a12f3b" line-color="#f0d3d8" />
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | string | `'没有更多了'` | 收尾文案，单行；传空串只保留线条或圆点 |
| dot | boolean | `false` | 用 6px 圆点代替文案 |
| size | `sm` \| `md` \| `lg` | `md` | 只改文案字号和标记高度，不改 16 的上下留白 |
| line | boolean | `true` | 两侧画 1px 细线 |
| color | string | `''` | 文案和圆点颜色，字面值；不传时文案次要灰、圆点禁用灰 |
| lineColor | string | `''` | 两侧细线颜色，字面值；不传时用 `--vx-color-divider` |

没有事件和插槽。

- 上下留白 16，文案 13 / 20，`size="lg"` 时 15 / 22；和同尺寸的 `vx-loadmore` 一样高，替换时不跳。
- 默认线用 `--vx-color-divider`，比卡片描边浅一档；两侧线各占一半，中间给文案留 12。
- `dot` 优先于 `text`；`line=false` 只留文案或圆点。`text=""` 且 `dot=false` 时两条线接成一条；线也关掉时高度为 0。
- `color` 只改文案和圆点，`lineColor` 只改线；两者都是字面值，不跟随亮色、暗色主题。跟随主题时不要传。自定义颜色只作品牌收尾，不表达成功、失败或警告。
- 收尾文案保持单行，建议两到六个字；`NO MORE` 这类品牌收尾可以，但要保持同一个含义。
- 只表示列表到底，不放按钮、链接和长说明；需要推荐内容时用页面区块。

## vx-no-data

空状态。默认内置线稿插图加一句「暂无数据」，可以补说明和动作；也能换成字体图标、自定义图片或自己的插图。动作复用 `vx-button`，点击只抛 `action`。

```vue
<vx-no-data />
<vx-no-data text="暂无订单" description="下拉刷新，或稍后再试" />
<vx-no-data text="您还没有购买任何商品~" action-text="去逛逛" @action="goShopping" />
<vx-no-data icon="search" type="primary" text="没有找到相关商品" description="换个关键词试试" />
<vx-no-data icon="alert-circle" icon-variant="fill" type="danger" text="加载失败"
	description="检查网络后重试" action-text="重新加载" action-variant="soft" />
<vx-no-data image="/static/demo/toast-custom.png" size="sm" text="暂无收藏" />
<vx-no-data fill text="暂无数据" action-text="刷新" @action="refresh" />
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | string | `'暂无数据'` | 主文案；传默认插槽时忽略 |
| description | string | `''` | 主文案下的辅助说明；传默认插槽时忽略 |
| size | `sm` \| `md` \| `lg` | `md` | 插图、图标圆、字号和留白档位 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `default` | 只给插图和图标上色，文案保持正文色 |
| icon | `VxIconName` | — | 字体图标名，替换默认线稿；取值见 `libs/icons/codepoints.ts` |
| iconVariant | `regular` \| `fill` | `regular` | 字体图标字重；`image` 和默认线稿不受影响 |
| image | string | `''` | 自定义插图地址，优先于 `icon`；按方框等比展示 |
| fill | boolean | `false` | 撑满父级并垂直居中；父级需要是纵向 flex |
| actionText | string | `''` | 动作文案；为空且没有 `extra` 插槽时不渲染默认按钮 |
| actionType | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `primary` | 动作按钮语义色 |
| actionVariant | `solid` \| `plain` \| `soft` \| `link` | `solid` | 动作按钮视觉层级 |
| actionShape | `rounded` \| `pill` \| `square` | `rounded` | 动作按钮轮廓，和页面按钮保持一致 |
| actionSize | `sm` \| `md` \| `lg` | `md` | 动作按钮尺寸 |
| actionWidth | string | `''` | 动作按钮宽度，需带单位；不传时按文案自适应 |
| actionLoading | boolean | `false` | 动作按钮加载中 |
| actionDisabled | boolean | `false` | 动作按钮禁用 |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| action | 点击默认动作按钮时触发；`extra` 插槽里的操作自己处理点击 | 无 |

| 插槽 | 说明 |
| --- | --- |
| default | 替换主文案和说明，自己带颜色和字号；说明跟着主文案一起消失 |
| icon | 替换插图，优先于 `image` 和 `icon`；内容自己带尺寸和颜色 |
| extra | 替换动作按钮，可放多个操作；传了它就不再渲染默认按钮 |

- 默认线稿画在 160 方框里：两层纸、内容线和三道波浪，按 96 / 128 / 160 缩放，不依赖图片、第二套图标或主题判断。
- 线稿主线条用 `text-secondary`，内容线和加号用 `disabled-text`；`type` 只把纸边和加号换成语义色，warning 取 `warning-ink`。
- `icon` 模式直接取图标字体，字形 32 / 40 / 48，比图标三档大，不走 `vx-icon`；`iconVariant="fill"` 换实心字体，extend 图标要先引入 `icons-extend.css`。
- `image` 按线稿方框 96 / 128 / 160 等比展示；`icon` 用 64 / 80 / 96 的圆。图片底色由业务自己带，透明底最稳。示例里的 `/static/demo/toast-custom.png` 是演示素材，接入时换成自己的地址。
- 三档尺寸只改插图、图标圆、字号和留白：主文案 13 / 15 / 17，说明 13 / 13 / 15；插图到文案 16，`lg` 24；内边距 `sm` 16，`md` / `lg` 24。
- `actionText` 为空且没有 `extra` 插槽时不占动作位，插图、文案之后不再留空白；`actionWidth` 必须带单位，常规页面用 `actionSize` 就够。
- `actionType` / `actionVariant` / `actionShape` / `actionSize` / `actionWidth` / `actionLoading` / `actionDisabled` 原样透传给 `vx-button`；`actionShape` 只改默认按钮的轮廓，和页面其他按钮保持一致。
- `fill` 只是 `flex: 1`，父级不是纵向 flex 时没有效果；放进卡片、面板或固定高度区块时用它把内容压到中间。
- 默认插槽替换文案区，`extra` 替换动作区；插槽内容不继承 `text` / `description` 的字号和颜色，自己带。`extra` 里的操作自己处理点击，只有默认按钮抛 `action`。
- 空状态不画外框、底色和阴影；放进 `vx-card`、`vx-list-view` 或表单时由外层提供边界。整块不响应点击，只有动作区域可点。
- 从 ThorUI [`tui-no-data`](https://www.thorui.cn/doc/docs/thorui/tui-no-data.html) 迁移：`imgUrl` 换成 `image`，`imgWidth` / `imgHeight` 交给 `size` 或 `icon` 插槽；`btnText` 换成 `actionText`，`btnWidth` / `btnHeight` 换成 `actionWidth` / `actionSize`，`backgroundColor` / `radius` 交给 `actionType` / `actionShape`；`fixed` 换成 `fill`，`marginTop` 交给外层间距。

## vx-sticky

吸顶容器。用 `scrollTop` 驱动：未吸顶时留在文档流里，吸顶后改为 `position: fixed` 并补一个等高占位。`suffix` 插槽决定吸到哪里结束。

```vue
<view class="page vx-theme-light">
	<scroll-view class="page-scroll" direction="vertical" @scroll="onScroll">
		<vx-sticky :scroll-top="scrollTop" @change="onStickyChange">
			<view class="sticky-bar">
				<text class="sticky-bar__title">商品详情</text>
			</view>
			<template #suffix>
				<vx-list-cell title="订单 20261024001" value="待付款" :clickable="false" />
				<vx-list-cell title="订单 20261024002" value="待付款" :clickable="false" :divider="false" />
			</template>
		</vx-sticky>
	</scroll-view>
</view>
```

```ts
const scrollTop = ref(0)

const onScroll = (event: UniScrollEvent) => {
	scrollTop.value = event.detail.scrollTop
}

const onStickyChange = (stuck: boolean) => {
	console.log('吸顶状态：', stuck)
}
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| scrollTop | number | `0` | 滚动容器的滚动距离，绑定 scroll-view 的 `@scroll`；不绑定就不会吸顶 |
| offsetTop | number | `0` | 吸顶时距顶部安全区的额外距离，单位 px；负数按 0 处理 |
| zIndex | number | `10` | 吸顶时的浮层层级 |
| shadow | boolean | `false` | 吸顶时用 `--vx-shadow-md` 代替底部分割线 |
| bgColor | string | `''` | 吸顶条底色，字面值；不传时未吸顶透明、吸顶后 `surface` |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| change | 吸顶状态切换时触发 | `boolean`，`true` 表示已吸顶 |

| 插槽 | 说明 |
| --- | --- |
| default | 吸顶条内容 |
| suffix | 吸顶条后面的内容；传了就只在「吸顶条 + 这段内容」范围内吸顶 |

| 方法 | 说明 |
| --- | --- |
| refresh() | 重新测量位置和尺寸；内容变高或窗口尺寸变化后由业务调用，占位高度才会更新 |

```vue
<vx-sticky ref="stickyRef" :scroll-top="scrollTop">
	<view class="sticky-bar">
		<text class="sticky-bar__title">商品详情</text>
	</view>
</vx-sticky>
```

```ts
const stickyRef = ref<VxStickyComponentPublicInstance | null>(null)

// 折叠、图片加载完或窗口尺寸变化后调用一次，占位高度才会更新。
const refreshSticky = () => {
	stickyRef.value?.refresh?.()
}
```

- App 不支持 `position: sticky`。组件用 `scrollTop` 在文档流和 `fixed` 之间切换，吸顶后补等高占位；各端行为一致，吸顶前后下面的内容不跳。
- 吸顶条贴住页面内容区顶部：Web 用 `--uni-safe-area-inset-top` 自动避开导航栏，`offsetTop` 在这个安全区之外再让出。这里不是滚动容器自己的 `top`，嵌套的局部滚动区不要用它做吸顶。
- `scrollTop` 绑定页面主 `scroll-view` 的滚动距离。页面用 `scroll-view` 滚动时不要把组件挂到会一起滚动的容器外。
- 未吸顶时条透明、不加内边距，外观由默认插槽的内容决定；吸顶后才铺 `surface` 底和 1px 分割线。`shadow` 换成 `--vx-shadow-md` 的浮层阴影；`bgColor` 未吸顶也生效。
- 吸顶时保持原来的横向位置和宽度，放进卡片或带缩进的区块时和未吸顶一致。
- `suffix` 里的内容参与文档流，滚到末尾时用容器底边把吸顶条顶出去，下一段接着吸；不传或传空 `suffix` 时一直吸到页面末尾。
- `change` 只在状态变化时触发；挂载时已经吸顶也会触发一次 `true`。
- 挂载时测量。容器当时隐藏、三次都量不到时，第一次滚动再补测一轮；已经量成功后，滚动不再改吸顶线。
- 内容变高（折叠、图片加载完）后由业务调 `refresh()`，占位高度才会更新。
- `offsetTop` 变化时组件自己重测。自定义导航栏 `ready` 之后把导航栏高度写进 `offsetTop`，吸顶线跟着下移，不钻到导航栏底下。
- 吸顶条只放标题、页签和状态。输入框、按钮和主操作放在 `suffix` 里，吸顶后的位置变化会打断输入。
- 不要放进 `position: fixed` 浮层、带 `transform` 的容器或原生 `list-view` 的 sticky 结构里；这些会改掉 `fixed` 的坐标原点。
- 同一屏不要叠两个不带 `suffix` 的吸顶条；分段吸顶时每段各用一个并带上 `suffix`。
- 层级默认 10，压在页面内容和固定页脚上，低于消息提示（1010）。组件不抛 `click`，条内内容的点击由内容自己处理。
- 从 ThorUI `tui-sticky` 迁移：`stickyTop` 换成 `offsetTop`，`container` + `content` 插槽换成 `suffix`，`recalc` 换成 `refresh()`，`sticky` 事件换成 `change`；`isNativeHeader` 由安全区自动处理，占位高度自动测量。

## vx-time-axis

时间轴，按 `items` 从上到下画节点、竖线、标题、说明和时间。有 `title` 的是阶段，没有 `title` 的是同一阶段下的事件：事件缩成圆点，并和上一条贴得更近。不提供容器加子项的组合写法。

```vue
<view class="page vx-theme-light">
	<vx-time-axis :items="logistics" />
</view>
```

```ts
const logistics = [
	{
		title: '已签收',
		description: '您的订单已由本人签收。感谢您在商城购物，欢迎再次光临。',
		time: '2019-05-01 18:48:26',
		icon: 'check',
		type: 'primary'
	},
	{
		title: '运输中',
		description: '您的订单已到达 XX【北京 XX 营业部】',
		time: '2019-05-01 16:17:32',
		icon: 'truck'
	},
	{ description: '您的订单已在 XX【北京 XX 营业部】收货完成', time: '2019-05-01 08:40:32' },
	{ description: '您的订单由 XXXX 送往 XX【北京 XX 营业部】', time: '2019-05-01 08:17:32' }
]
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | Array&lt;VxTimeAxisItem&gt; | `[]` | 记录，按从上到下的顺序排列；空数组不渲染 |
| size | `sm` \| `md` \| `lg` | `md` | 节点和文案档位 |
| lineColor | string | `''` | 竖线颜色，字面值；不传时用 `--vx-color-border` |

`items` 的每一项：

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | string | `''` | 阶段标题；不传时按事件渲染，和上一条贴得更近 |
| description | string | `''` | 说明文案，可以换行 |
| time | string | `''` | 时间或补充文案，组件不解析内容 |
| icon | VxIconName | — | 节点图标；不传时用圆点 |
| iconVariant | `regular` \| `fill` | `regular` | 图标字重 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `default` | 节点语义色 |

没有事件、插槽和方法。

- 节点三档 20 / 24 / 28，事件圆点 6 / 8 / 10；阶段名 13 / 15 / 17（行高 20 / 22 / 24、字重 600），说明 `sm` 用 13 / 20、`md` / `lg` 用 15 / 22，时间固定 13 / 20。时间轴不是控件，不借 `--vx-font-control-*`。
- 节点和内容的间距 `sm` / `md` / `lg` 为 8 / 12 / 16；阶段之间留 24，事件之间留 12。下一条没有 `title` 时，当前条目的底部留白自动收紧，分组只由数组顺序表达。
- `type` 只表达状态：默认 `default` 是浅灰节点和次要灰图标，`primary` / `success` / `info` / `warning` / `danger` 用语义实心底和 `on-*` 图标。没有 `icon` 时缩成圆点，圆点也可以用 `type` 上色。图标字重默认 `regular`，需要实心时在记录里传 `iconVariant: 'fill'`。
- 竖线 1px，两端收在第一个和最后一个节点中心；单条记录不画线。`lineColor` 只改这条线，是字面值，不跟随亮色、暗色主题。
- 时间轴只承载阶段、事件和说明，不放按钮、表单、主操作和第二条时间轴；需要点击或展开时由外面的列表行、卡片承载。组件不提供点击、禁用态和横向时间轴。
- 从 ThorUI `tui-time-axis` / `tui-timeaxis-item` 迁移：容器加子项换成 `items` 数据；`content`、`node` 插槽换成 `title` / `description` / `time` / `icon`；`backgroundColor` 不再需要，节点会自动盖住竖线，节点颜色改用 `type`，线色改用 `lineColor`。

## vx-number-box

数字框。`v-model` 绑定数值，左右减号、加号微调，中间可以直接输入。支持范围、步长、三档尺寸、描边 / 浅底形态和自定义颜色；标题、单位和说明放在组件外。

```vue
<vx-number-box v-model="quantity" :min="1" :max="99" />
<vx-number-box v-model="weight" :min="0" :max="10" :step="0.1" />
<vx-number-box v-model="count" variant="soft" :min="0" />
<vx-number-box v-model="count" size="lg" shape="pill" />
<vx-number-box v-model="count" invalid />
<vx-number-box v-model="count" disabled />
<vx-number-box v-model="count" variant="soft" bg-color="#fff5e5" color="#8a4b00" icon-color="#8a4b00" />
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | number | `1` | 当前数值，支持 `v-model` |
| min | number | `1` | 最小值；大于 `max` 时自动交换 |
| max | number | `99` | 最大值 |
| step | number | `1` | 加减步长，支持小数；只决定增减量，不做网格对齐 |
| size | `sm` \| `md` \| `lg` | `md` | 控件高度、字号和图标档位 |
| variant | `outline` \| `soft` | `outline` | 描边盒，或浅底无框 |
| shape | `rounded` \| `pill` \| `square` | `rounded` | 整组外轮廓 |
| disabled | boolean | `false` | 禁用，停止输入和加减 |
| invalid | boolean | `false` | 校验失败，只改描边 |
| bgColor | string | `''` | 整组底色，字面值 |
| color | string | `''` | 数值颜色，字面值 |
| iconColor | string | `''` | 加减图标颜色，字面值；到达边界或禁用时仍用禁用色 |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| change | 点加减、失焦或确认后值真的变化时触发 | 新数值 number |
| update:modelValue | `v-model` 同步 | 新数值 number |
| focus / blur | 数值输入区焦点变化 | — |

没有插槽和方法。

- 三档高度沿用控件 32 / 40 / 48；中间数值区宽 44 / 52 / 60（`--vx-number-box-field-*`），按钮宽度等于控件高度，图标 14 / 18 / 22，数值用 `--vx-font-control-*`。
- 到边界后对应按钮转灰并停止响应；`disabled` 才让整组停下并转灰。`invalid` 只改描边，错误说明放在外面。
- 输入过程中只把范围内的有效值同步到 `v-model`；失焦或确认时收口：空值回 `min`，非数字回到最近一次有效值，越界夹到边界。收口后的值变化时才抛 `change`，不在每次按键时抛。
- 输入越界值或空值后点加减，会先按边界收口，再走一步；和先失焦再点按钮的结果一致。父级写入的越界值不回写，点加减或失焦只夹到边界。
- 精度按参与运算的值、`step`、`min`、`max` 里最多的小数位收口，最多保留 6 位，避免 `0.1 + 0.2` 的浮点尾巴。`step` 不强制整数，也不把值对齐到步长网格。
- 下限不小于 0 时用 `digit` 键盘；下限为负时用 `text`，否则负号打不出来。
- `outline` 给独立表单，`soft` 给列表行和购物车；`shape` 只改圆角。描边盒按下铺 `surface-pressed`，由根节点裁出圆角；浅底和自定义底色只让图标变淡。不额外加阴影。
- `bgColor` / `color` / `iconColor` 是字面值，不跟随亮色、暗色主题；禁用时都不生效，到达边界的一侧图标仍用禁用色。
- 整个数字框的点击停在本组件，放进列表行或卡片时不会触发外层点击。
- 从 ThorUI `tui-numberbox` 迁移：`value` 换成 `v-model`，`change` 只抛数值；`index` / `custom` 由业务在事件外自己带；`iconBgColor`、`width`、`height`、`radius`、`iconSize` 不再需要，改用 `variant`、`shape`、`size`、`bgColor`、`iconColor`。

## vx-radio-group

单项选择器的分组容器。包一组 `vx-radio`，`v-model` 绑选中的 value；横排或列表两种排布，圆圈标记或只画对号，三档尺寸和六种语义色。

```vue
<template>
	<view class="page vx-theme-light">
		<vx-radio-group v-model="city" layout="list" card>
			<vx-radio value="cn" label="中国" description="支持次日达" />
			<vx-radio value="us" label="美国" />
			<vx-radio value="ru" label="俄罗斯" />
		</vx-radio-group>
		<vx-radio-group v-model="channel" type="success">
			<vx-radio value="sms" label="短信" />
			<vx-radio value="mail" label="邮件" />
			<vx-radio value="none" label="不通知" disabled />
		</vx-radio-group>
	</view>
</template>

<script setup>
	const city = ref('cn')
	const channel = ref('sms')
</script>
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | string | `''` | 选中项的 value，支持 `v-model`；空串表示未选中 |
| size | `'sm'` \| `'md'` \| `'lg'` | `'md'` | 标记、行高和文案档位 |
| type | `'primary'` \| `'success'` \| `'info'` \| `'warning'` \| `'danger'` \| `'default'` | `'primary'` | 选中标记的语义色 |
| variant | `'circle'` \| `'check'` | `'circle'` | 圆圈加对号，或只画对号 |
| placement | `'start'` \| `'end'` | `'start'` | 标记在文案前还是行尾 |
| layout | `'inline'` \| `'list'` | `'inline'` | 横排换行，或一项一行 |
| divider | boolean | `true` | 列表项之间的 1px 分割线；横排忽略 |
| card | boolean | `false` | 列表收进 `surface` 卡片；横排忽略 |
| disabled | boolean | `false` | 整组禁用，所有项不响应点按 |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| change | 用户选中另一项时触发；点已选中项不抛 | 新 value string |
| update:modelValue | `v-model` 同步 | 新 value string |

| 插槽 | 说明 |
| --- | --- |
| 默认插槽 | `vx-radio` 列表；为空时不渲染 |

没有方法。选中值由 `v-model` 维护，程序化修改直接改绑定值。

- `v-model` 是字符串，数字 id 先转成字符串；点击已选中项不重复抛 `change`。同一组里 `value` 唯一，空 `value` 在分组里没有选中键，点击会被忽略。
- 横排项高 32 / 40 / 48，列表最小行高 44 / 48 / 52；标记 16 / 18 / 20，比文案大 2px，对号用旋转边框画。
- 横排文案 14 / 16 / 18，列表文案 13 / 15 / 17，说明固定 13 / 20；两组档位不互相换算。
- 未选中圆圈用 `text-secondary` 描边；选中填充取 `type` 语义色，`warning` 用 `warning-pressed`，对号取对应的 `on-*`。
- 列表最后一项自动不画分割线；`card` 只对列表生效，横排仍由外层容器提供边界。动态列表要给每项传 `index`。
- 按下态：列表铺 `surface-pressed`，横排只压 `--vx-opacity-pressed`；没有缩放和选中动画。
- 整组 `disabled` 停下全部；没有 `readonly`，展示已有结果用 `disabled` 并补说明。
- 从 ThorUI `tui-radio-group` 迁移：分组和选项拆成 `vx-radio-group` + `vx-radio`；`name`、`tui-form-field` 不再提供（自绘控件不进原生表单，提交由业务取值）；选项上的 `checked` 并入分组的 `v-model`；`change` 直接给 value；`isCheckMark` 换成 `variant="check"`，`checkMarkColor` 换成 `checkColor`；`scaleRatio` 换成 `size`；`tui-label` + `tui-list-cell` 换成 `layout="list"` + `card`。

## vx-radio

单项。放在 `vx-radio-group` 里管自己的 value、文案、说明和颜色；单独使用时是布尔 `v-model`，外观固定 `md` / `primary` / `circle` / `start`。

```vue
<vx-radio-group v-model="plan" layout="list" card>
	<vx-radio value="basic" label="基础版" description="个人使用" />
	<vx-radio value="pro" label="专业版">
		<template #extra>
			<vx-tag type="warning" variant="soft" size="sm" text="推荐" />
		</template>
	</vx-radio>
	<vx-radio value="team" label="团队版" disabled />
</vx-radio-group>
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value | string | `''` | 选中时回传给分组的 value；分组里不能为空 |
| index | number | — | `v-for` 的循环下标。同一组都传了才按最大 index 认最后一项；缺一项仍按挂载顺序。静态项不用传 |
| label | string | `''` | 主文案；用默认插槽时忽略 |
| description | string | `''` | 主文案下的说明；用默认插槽时忽略 |
| modelValue | boolean | `false` | 单独使用时的选中状态；在分组里由分组接管 |
| disabled | boolean | `false` | 只停这一项 |
| color | string | `''` | 自定义选中色，字面值；圆圈改填充，对号样式直接改对号 |
| borderColor | string | `''` | 自定义未选中圆圈描边，字面值；对号样式不生效 |
| checkColor | string | `''` | 自定义对号色，字面值；优先于 `color` |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| change | 这一项被选中时触发，分组内也会抛 | `true` boolean |
| update:modelValue | 单独使用时 `v-model` 同步 | 新值 boolean |

| 插槽 | 说明 |
| --- | --- |
| 默认插槽 | 替换 `label` / `description`，用于富文案 |
| extra | 文案后方的补充内容；标记在行尾时正好在文案和标记之间，自己带颜色和字号 |

- 单独用 `vx-radio` 时是布尔 `v-model`；要换档位或颜色仍要包一个分组。
- 单项 `disabled` 只停这一项，文字和圆圈转 `disabled-text`；圆圈模式的对号用 `surface`，只画对号时对号用 `disabled-text`。
- `color` / `borderColor` / `checkColor` 都是字面值，禁用时都不生效，对比度由业务保证。
- 单选是 `view` 组合，Web 端不进入 Tab 顺序；需要键盘完整操作时由外层提供入口或改用原生表单控件。

## vx-checkbox-group

多项选择器的分组容器。包一组 `vx-checkbox`，`v-model` 绑选中的 value 数组；方框或只画对号，横排或列表，三档尺寸、六种语义色，支持可选上限。

```vue
<template>
	<view class="page vx-theme-light">
		<vx-checkbox-group v-model="cities" layout="list" card :max="3">
			<vx-checkbox value="cn" label="中国" description="支持次日达" />
			<vx-checkbox value="us" label="美国" />
			<vx-checkbox value="ru" label="俄罗斯" />
		</vx-checkbox-group>
		<vx-checkbox-group v-model="channels" variant="check" placement="end" layout="list" card>
			<vx-checkbox value="sms" label="短信" />
			<vx-checkbox value="mail" label="邮件" />
			<vx-checkbox value="none" label="不通知" disabled />
		</vx-checkbox-group>
	</view>
</template>

<script setup>
	const cities = ref<string[]>(['cn'])
	const channels = ref<string[]>(['sms', 'mail'])
</script>
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | `string[]` | `[]` | 选中项的 value 集合，支持 `v-model`；空数组表示未选中 |
| size | `'sm'` \| `'md'` \| `'lg'` | `'md'` | 标记、行高和文案档位 |
| type | `'primary'` \| `'success'` \| `'info'` \| `'warning'` \| `'danger'` \| `'default'` | `'primary'` | 选中标记的语义色 |
| variant | `'box'` \| `'check'` | `'box'` | 圆角方框加对号，或只画对号 |
| placement | `'start'` \| `'end'` | `'start'` | 标记在文案前还是行尾 |
| layout | `'inline'` \| `'list'` | `'inline'` | 横排换行，或一项一行 |
| divider | boolean | `true` | 列表项之间的 1px 分割线；横排忽略 |
| card | boolean | `false` | 列表收进 `surface` 卡片；横排忽略 |
| disabled | boolean | `false` | 整组禁用，所有项不响应点按 |
| max | number | `0` | 最多可选几项；`0` 不限，到上限后点未选项只抛 `exceed` |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| change | 勾选或取消一项后触发 | 新 value 数组 `string[]` |
| exceed | 到达 `max` 后点未选中项时触发，选中集合不变 | 上限 number |
| update:modelValue | `v-model` 同步 | 新 value 数组 |

| 插槽 | 说明 |
| --- | --- |
| 默认插槽 | `vx-checkbox` 列表；为空时不渲染 |

没有方法。选中集合由 `v-model` 维护，全选、反选和提交都由业务改数组。

- `v-model` 是字符串数组，顺序按用户勾选的先后追加；数字 id 先转成字符串。同一组里 `value` 唯一，空 `value` 会被忽略。
- 点已勾选项取消，点未勾选项追加；两种都会抛 `change`，拿到的始终是新数组。
- `max` 只拦新增勾选，取消勾选不受限；父级传入的数组超过 `max` 时照常显示，不再追加。到上限后未选项不转灰，仍可点击，由 `exceed` 弹提示。
- 方框固定小圆角方形，和单选的正圆区分；三档 16 / 18 / 20，圆角 4 / 5 / 6，比文案大 2px。对号用旋转的右边框和下边框画，`md` / `lg` 2px、`sm` 1.5px。
- 横排项高 32 / 40 / 48，列表最小行高 44 / 48 / 52；列表最后一项自动不画分割线，`card` 只对列表生效。动态列表要给每项传 `index`。
- 未选中方框用 `text-secondary` 描边；选中填充取 `type` 语义色，`warning` 用 `warning-pressed`，对号取对应的 `on-*`。
- 按下态：列表铺 `surface-pressed`，横排只压 `--vx-opacity-pressed`；不做缩放、位移和选中动画。
- 分组 `disabled` 停下全部，不抛 `change`；文字和方框转 `disabled-text`，选中填充用 `disabled-text`、对号用 `surface`。
- 从 ThorUI `tui-checkbox-group` 迁移：`change` 直接给新数组；选项上的 `checked` 并入分组的 `v-model`；`triggerGroup`、`name` 不再提供；`tui-data-checkbox` 改用 `vx-data-checkbox`。

## vx-checkbox

多项中的一项。放在 `vx-checkbox-group` 里管 value、文案、说明和颜色；单独使用时是布尔 `v-model`，并支持部分选中。

```vue
<vx-checkbox-group v-model="services" layout="list" card>
	<vx-checkbox value="photo" label="相册" description="已授权" />
	<vx-checkbox value="camera" label="相机" description="系统未授权" disabled />
	<vx-checkbox value="location" label="位置">
		<template #extra>
			<vx-tag type="primary" variant="soft" size="sm" text="推荐" />
		</template>
	</vx-checkbox>
</vx-checkbox-group>

<vx-checkbox :model-value="allPicked" :indeterminate="partialPicked" label="全选" @change="onToggleAll" />
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value | string | `''` | 勾选时回传给分组的 value；分组里不能为空 |
| index | number | — | `v-for` 的循环下标。同一组都传了才按最大 index 认最后一项；缺一项仍按挂载顺序。静态项不用传 |
| label | string | `''` | 主文案；用默认插槽时忽略 |
| description | string | `''` | 主文案下的说明；用默认插槽时忽略 |
| modelValue | boolean | `false` | 单独使用时的选中状态；在分组里由分组接管 |
| disabled | boolean | `false` | 只停这一项 |
| indeterminate | boolean | `false` | 部分选中：方框填充并画横线；只在单独使用、未选中且为 box 样式时生效 |
| color | string | `''` | 自定义选中色，字面值；方框改填充，对号样式直接改对号 |
| borderColor | string | `''` | 自定义未选中方框描边，字面值；对号样式不生效 |
| checkColor | string | `''` | 自定义对号和横线色，字面值；优先于 `color` |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| change | 这一项勾选状态变化时触发，分组内也会抛；被上限拦下不抛 | 新状态 boolean |
| update:modelValue | 单独使用时 `v-model` 同步 | 新值 boolean |

| 插槽 | 说明 |
| --- | --- |
| 默认插槽 | 替换 `label` / `description`，用于富文案 |
| extra | 文案后方的补充内容；标记在行尾时正好在文案和标记之间，自己带颜色和字号 |

- `indeterminate` 只用于单独使用的「全选」类开关：父级根据已选数量算出 `checked` 和 `indeterminate`，在 `change` 里全选或清空。分组里的每个 value 非勾即否，不读该属性。
- 单项 `disabled` 只停这一项；文字和方框转 `disabled-text`，选中填充用 `disabled-text`、对号用 `surface`，只画对号时对号用 `disabled-text`。
- 方框模式里 `color` 只改填充，对号仍按 `type` 取 `on-*`，需要一起改时同时传 `checkColor`；三者都是字面值，禁用时都不生效。
- 自绘 `view` 不进入原生表单，Web 端也不进 Tab 顺序；提交和键盘入口由外层表单负责。

## vx-switch

开关选择器。`v-model` 绑布尔值，点按立刻回写并抛 `change`；支持三档尺寸、六种语义色、单行或整行、整行点击、加载、禁用和四个自定义颜色。开关默认在文案后，没有文案时是一只独立开关。

```vue
<template>
	<view class="page vx-theme-light">
		<vx-switch v-model="notify" label="消息通知" @change="onNotify" />
		<vx-card :body-padded="false">
			<vx-switch v-model="renew" layout="list" label="自动续费" description="到期前 3 天自动扣款" divider />
			<vx-switch v-model="quiet" layout="list" label="免打扰" description="22:00 至次日 8:00 不推送" divider>
				<template #extra>
					<vx-tag type="primary" variant="soft" size="sm" text="推荐" />
				</template>
			</vx-switch>
			<vx-switch v-model="sync" layout="list" label="同步通讯录" />
		</vx-card>
	</view>
</template>

<script setup>
	const notify = ref(true)
	const renew = ref(true)
	const quiet = ref(false)
	const sync = ref(false)
	const onNotify = (value: boolean) => {
		// value 是切换后的布尔值
	}
</script>
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | boolean | `false` | 开关状态，支持 `v-model` |
| size | `'sm'` \| `'md'` \| `'lg'` | `'md'` | 轨道、滑块、加载圈、行高和文案档位 |
| type | `'primary'` \| `'success'` \| `'info'` \| `'warning'` \| `'danger'` \| `'default'` | `'primary'` | 打开状态的语义色 |
| label | string | `''` | 主文案；用默认插槽时忽略 |
| description | string | `''` | 主文案下的说明；用默认插槽时忽略 |
| layout | `'inline'` \| `'list'` | `'inline'` | 单行，或一项一行并让整行可点 |
| placement | `'start'` \| `'end'` | `'end'` | 轨道在文案前还是行尾 |
| divider | boolean | `false` | `list` 下画当前行底部的 1px 分割线；最后一行不要打开 |
| disabled | boolean | `false` | 停用整只开关，不响应点按，也不抛 `change` |
| loading | boolean | `false` | 请求进行中：滑块里显示缺口圆环并拦下点击 |
| color | string | `''` | 自定义打开轨道色，字面值；滑块仍按 `type` 取 `on-*` |
| trackColor | string | `''` | 自定义关闭轨道色，字面值 |
| thumbColor | string | `''` | 自定义滑块底色，字面值；两种状态都生效 |
| borderColor | string | `''` | 自定义关闭滑块的描边色，字面值；打开时不生效 |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| change | 用户切换后触发；加载和禁用时不抛 | 新状态 boolean |
| update:modelValue | `v-model` 同步 | 新状态 boolean |

| 插槽 | 说明 |
| --- | --- |
| 默认插槽 | 替换 `label` / `description`，用于带图标或两行排版的富文案 |
| extra | 文案后方的补充内容；轨道在行尾时正好在文案和轨道之间，自己带颜色和字号 |

没有方法。状态由 `v-model` 维护，程序化修改直接改绑定值。

- `v-model` 是布尔值，点按后立刻写回并抛 `change(value)`；组件不保存第二份状态。加载和禁用都不抛 `change`。
- `layout="list"` 一行一项，最小行高 44 / 48 / 52，左右内边距 12 / 16 / 16、上下 8 / 12 / 12，整行可点；`divider` 控制当前行底部的 1px 分割线，最后一行关掉。卡片边界用 `vx-card` 或 `vx-list-view`，开关行本身透明。
- 单行高度 32 / 40 / 48，文案 14 / 16 / 18；列表文案 13 / 15 / 17，说明固定 13 / 20。`size` 同时决定轨道档位和文案档位，单行和列表各取各的档位。没有文案、默认插槽和 `extra` 时不留间距。
- 轨道 36 × 20 / 44 × 24 / 52 × 28，滑块 16 / 20 / 24，四周留 2；位移等于轨道宽减滑块再减 4。关闭轨道用 `default-soft`，滑块是 `surface` 加 `text-secondary` 1px 描边；打开轨道用语义色，`warning` 用 `warning-pressed`，滑块取 `on-*`，`default` 用正文色轨道配 `text-inverse` 滑块。
- `loading` 在滑块里画 8 / 10 / 12 的半圈缺口，加 1.5px 描边；700ms 线性旋转，5.26 的 App 没有关键帧时停在静态圆环。加载期间不写模型、不抛 `change`，`disabled` 同时为真时按禁用处理。
- `disabled` 把文字、轨道、滑块和描边一起转灰：关闭用 `disabled-bg` / `disabled-text`，打开轨道用 `disabled-text`、滑块和描边用 `surface`。没有 `readonly`，展示已有结果用 `disabled` 并补说明。
- 按下态：列表整行铺 `surface-pressed`，单行只压 `--vx-opacity-pressed`；滑块位移和颜色过渡 220ms，不做缩放、回弹和轨道拉伸。
- `color` / `trackColor` / `thumbColor` / `borderColor` 都是字面值，禁用时都不生效；`color` 同时改加载圈，`trackColor` 不改。自定义颜色的对比度由业务保证。
- `extra` 排在文案后方；轨道在行尾时正好在文案和轨道之间。内容自己带颜色和字号；点它会触发整行切换，需要独立操作时加 `@click.stop`。
- Web 端是 `view` 组合，不进入 Tab 顺序；需要键盘完整操作时由外层提供可聚焦入口或改用原生表单控件。
- 从 ThorUI `tui-switch` 迁移：`checked` 换成 `modelValue`；`name` 不再提供；`type="checkbox"` 改用 `vx-checkbox`；`borderColor` 拆成 `trackColor`（关闭轨道）和 `borderColor`（关闭滑块描边）；`checkMarkColor` 不再提供；`scaleRatio` 换成 `size`；`change(e)` 改成 `change(value)`；`tui-label` 和标签点击换成 `layout="list"`。

## vx-countdown

倒计时。`time` 传剩余秒数，默认显示时、分、秒。支持天数、毫秒位、冒号或单位文字、三档尺寸、描边 / 浅底 / 无盒和语义色；自然到 0 抛 `end`，也可以用 `start()` / `pause()` / `reset()` 控制。

```vue
<vx-countdown :time="967" />
<vx-countdown :time="967" show-milliseconds />
<vx-countdown :time="239953" show-days separator="unit" />
<vx-countdown :time="239953" show-days separator="unit" unit="en" />
<vx-countdown :time="967" size="lg" type="danger" />
<vx-countdown :time="967" variant="soft" />
<vx-countdown :time="967" variant="plain" separator="unit" />
<vx-countdown :time="967" bg-color="#d92d20" color="#ffffff"
	unit-color="var(--vx-color-danger-pressed)" border-color="#d92d20" />
<vx-countdown ref="countdownRef" :time="60" :auto-start="false" @tick="onTick" @end="onEnd" />
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| time | number | `0` | 剩余秒数，支持小数；变化时按新值重新开始 |
| showDays | boolean | `false` | 显示天数；打开后小时不再累计超过 24 |
| showHours | boolean | `true` | 显示小时 |
| showMinutes | boolean | `true` | 显示分钟 |
| showSeconds | boolean | `true` | 显示秒数；四段全关时回落到秒 |
| showMilliseconds | boolean | `false` | 显示毫秒位（十分位）；依附秒数，按 100ms 刷新 |
| size | `sm` \| `md` \| `lg` | `md` | 数字盒高度、字号和十分位盒宽度 |
| variant | `outline` \| `soft` \| `plain` | `outline` | 描边盒、浅底盒、无盒 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `default` | 数字和描边的语义色 |
| separator | `colon` \| `unit` | `colon` | 冒号分隔，或每段后面的单位文字 |
| unit | `zh` \| `en` | `zh` | 单位语言；`en` 为 d / h / m / s |
| autoStart | boolean | `true` | 挂载后自动开始；关闭后用 `start()` 启动 |
| bgColor | string | `''` | 数字盒底色，字面值或主题令牌；outline / soft 生效 |
| color | string | `''` | 数字和十分位颜色，字面值或主题令牌 |
| unitColor | string | `''` | 分隔符号和单位颜色，字面值或主题令牌；不传时跟随 type 或次要灰 |
| borderColor | string | `''` | 数字盒描边颜色，字面值或主题令牌；outline 生效 |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| tick | 显示秒数变化时触发 | 剩余秒数 number |
| end | 自然到 0 时触发一次 | — |

| 方法 | 说明 |
| --- | --- |
| start() | 开始或继续；已经结束时从 `time` 重来 |
| pause() | 暂停，保留当前剩余时间 |
| reset(seconds?) | 重置并立即开始；不传秒数回到 `time` |

用 `ref` 拿实例调用方法：

```ts
const countdownRef = ref<VxCountdownComponentPublicInstance | null>(null)
const restart = () => countdownRef.value?.reset?.(60)
```

`reset(seconds)` 的自定义值只用于这一次；自然结束后再 `start()` 仍从 `time` 重来。

没有插槽，也不抛点击。

- 可见单位由 `showDays` / `showHours` / `showMinutes` / `showSeconds` 控制。被隐藏的上层单位并入下一个可见单位：去掉小时时，分钟可以超过 59；只留秒时，秒数可以超过 59。四段全关时只显示秒。
- 秒数按剩余时间向上取整，最后一秒仍显示 1；毫秒位按 100ms 取整到十分位，如 `04.9`。`showMilliseconds` 依附秒数，`showSeconds=false` 时一起隐藏。
- 计时按截止时间重算，不靠每秒递减；App 退到后台再回来不会越走越慢。`tick` 在显示秒数变化时抛；`reset` 和改 `time` 也会按新显示值补抛一次。`end` 只在自然到 0 时抛一次；暂停、重置和外部改 `time` 都不抛 `end`。
- `time` 变化时按新值重置；`autoStart` 为 `true` 则自动重新开始，为 `false` 时停在新的起点。`autoStart` 只在挂载和改 `time` 时参与，之后由方法控制。
- `start()` 在暂停后从剩余时间继续，在结束后从 `time` 重来；`reset()` 不传参回到 `time`，传 `0` 则停在 0。`pause()` 保留当前读数。
- 三档数字盒高度 24 / 32 / 40，最小宽度等于高度，十分位盒宽 20 / 26 / 32；数字 13 / 15 / 17（行高 20 / 22 / 24、字重 600），十分位、单位和冒号 13 / 15。倒计时不是控件，不借 `--vx-font-control-*`。
- `outline` 是默认的 `surface` 底加 1px `border` 描边；`soft` 用 `default-soft` 浅底、不画描边；`plain` 去掉底色和描边，宽度收到文字。`bgColor` / `borderColor` 只在 outline / soft 生效；把 `borderColor` 设为 `transparent` 只去描边、保留盒底，连盒底一起去掉时用 `plain`。
- `type` 默认不染色；`primary` / `success` / `info` / `warning` / `danger` 同时改数字、描边、单位和冒号。warning 用 `warning-ink`，浅底的文字用对应的 `*-pressed`，亮暗主题自动换色。
- `color`、`unitColor`、`bgColor`、`borderColor` 默认按字面值使用，不跟随主题；传 `var(--vx-color-*)` 时跟随主题。红底白字时只把数字传白，`unitColor` 单独给盒外的冒号和单位，避免它们一起刷白；对比度由业务保证。
- 倒计时只承载读数，不放标题、说明、按钮、链接和表单；这些放在外面的卡片、列表行或页面区块。组件不抛点击，整段也不是热区。
- 一行放不下时会在父级宽度内换行，优先降一档尺寸或隐藏次要单位；一屏不要放多个带十分位的倒计时。
- 从 ThorUI `tui-countdown` 迁移：`days` / `hours` / `minutes` / `seconds` 换成 `showDays` / `showHours` / `showMinutes` / `showSeconds`；`isColon=false` 换成 `separator="unit"`；`unitEn` 换成 `unit="en"`，现在作用于所有单位。
- `isMs` 换成 `showMilliseconds`，读数取自真实剩余时间，按 100ms 刷新，不是 CSS 假动画；`returnTime` 换成始终可用的 `tick`；`endOfTime` 用 `pause()` 或 `reset(0)` 代替。
- `width` / `height` / `size` / `msWidth` / `msSize` / `colonSize` / `scale` 不再需要，改用 `size` 和设计令牌；`backgroundColor` 换成 `bgColor`；`colonColor` / `msColor` 合并到 `unitColor` / `color`。`end` 不再带空对象参数。

## vx-steps

步骤条。用 `items` 按顺序画节点、连线和文字；`active` 是当前步骤，当前用勾（带 icon 时用图标），之前的步骤保留圆点或序号。支持横向 / 纵向、圆点 / 序号 / 图标节点、语义色、虚线和可点击步骤。

```vue
<vx-steps :items="steps" :active="1" />
<vx-steps :items="steps" :active="1" variant="number" />
<vx-steps direction="vertical" :items="steps" :active="1" type="success" />
<vx-steps :items="steps" :active="1" line-style="dashed" />
<vx-steps :items="steps" :active="step" clickable @click="step = $event" />
```

```ts
const steps = [
	{ title: '提交订单', time: '10-25 09:12' },
	{ title: '支付订单', time: '10-25 09:20' },
	{ title: '商家发货', time: '10-26 14:30' },
	{ title: '确认收货', time: '10-28 18:00' }
]
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | Array&lt;VxStepItem&gt; | `[]` | 步骤，按顺序排列；空数组不渲染 |
| active | number | `0` | 当前步骤索引，从 0 开始；负数按未开始处理，其余非整数四舍五入，超过末项收到最后一步 |
| direction | `horizontal` \| `vertical` | `horizontal` | 排列方向 |
| variant | `dot` \| `number` | `dot` | 节点外观；带 icon 的记录不受影响 |
| size | `sm` \| `md` \| `lg` | `md` | 节点、文字和间距档位 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `primary` | 当前进度的语义色 |
| lineStyle | `solid` \| `dashed` | `solid` | 连线样式 |
| clickable | boolean | `false` | 整步可点，点击抛 click |

`items` 的每一项：

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | string | `''` | 步骤名，横向时建议 2–4 个字 |
| description | string | `''` | 补充说明，可以换行 |
| time | string | `''` | 时间或日期，展示文本，组件不解析格式 |
| icon | VxIconName | — | 自定义节点图标；传了之后不再画圆点或序号 |
| iconVariant | `regular` \| `fill` | `regular` | 图标字重 |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| click | 打开 clickable 后点击整步触发 | 索引 number |

- `active` 从 0 开始，`-1` 表示还没开始，负数按未开始处理，其余非整数四舍五入，超过末项收到最后一步。组件不维护内部状态，也不提供 `v-model`。
- 当前步骤用勾标记（带 icon 时用图标），之前的步骤保留圆点或序号；当前步骤之前的连线用语义色，之后的连线保持待处理色。
- `variant="dot"` 用 6 / 8 / 10 的小圆点表示已完成和待处理，当前步骤换成完整节点；`variant="number"` 已完成和待处理都显示 1 起的序号，当前步骤仍用勾。
- 节点 20 / 24 / 28，序号 12 / 13 / 14；标题 13 / 15 / 17（20 / 22 / 24、600），说明 `sm` 13 / 20、`md` / `lg` 15 / 22，时间固定 13 / 20。步骤条不是控件，不借 `--vx-font-control-*`。
- `type` 默认 `primary`，同时决定当前节点、当前标题和已完成连线；已完成标题保持正文色，待处理标题转次要灰，说明和时间始终是次要色。`warning` 的标题用 `warning-ink`，连线用 `warning-pressed`。
- 带 `icon` 的记录用图标节点：已完成 `*-soft` 浅底配语义色图标，当前实心底配 `on-*` 图标（`default` 用 `text-inverse`），待处理 `surface` 底加 `border` 描边配次要灰图标。扩展图标要先引入 `icons-extend.css`。
- `lineStyle` 只改 1px 连线；横向从节点中心铺到下一个节点中心，纵向同理，下一节点会盖住线头。纵向伸出底边的距离是 `--vx-steps-line-out-*`。虚线适合草稿、待确认的流程。
- `clickable` 默认关闭；打开后整步铺透明热区，按下用 `--vx-opacity-pressed`，点击停在步骤上并抛索引。不可点击时不挂热区，点击继续落到外层。
- 横向每步等宽，适合 2–5 个短步骤；文案长、步骤多时改纵向。步骤条只承载进度、标题、说明和时间，不放表单、按钮、主操作和长段落。
- 没有插槽、禁用态和加载态。需要自定义节点内容时用 `icon`，需要操作时由外面的卡片或页面区块承载。
- 从 ThorUI `tui-steps` 迁移：`direction` 的 `row` / `column` 换成 `horizontal` / `vertical`；`type` 的 `1` / `2` 换成 `variant="dot"` / `"number"`；`activeSteps` 换成 `active`；`activeColor` / `deactiveColor` 换成 `type` 和主题令牌。
- `backgroundColor`、`titleSize`、`descSize`、`bold`、`spacing`、`titleField`、`descrField` 不再需要；`name` / `icon` / `activeIcon` 换成 `icon` 和 `iconVariant`，图片图标不再支持；`lineStyle` 保留 `solid` / `dashed`，挂到组件上。

## vx-progress

进度条。`percent` 传 0–100 的比例，可选左侧 `label` 和右侧百分比；支持语义色、三档尺寸、平角 / 小圆角 / 胶囊、自定义填充、轨道和数值颜色，以及宽度过渡和 `end` 事件。

```vue
<vx-progress :percent="60" show-text />
<vx-progress label="上传进度" :percent="64" show-text />
<vx-progress label="同步队列" :percent="42" text="处理中" />
<vx-progress :percent="80" type="success" shape="pill" show-text />
<vx-progress :percent="60" bg-color="#7c3aed" track-color="#ede9fe" show-text />
<vx-progress :percent="60" bg-color="var(--vx-color-warning-pressed)"
	track-color="var(--vx-color-warning-soft)" color="var(--vx-color-warning-ink)" show-text />
<vx-progress :percent="100" :duration="0" show-text @end="onProgressEnd" />
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| percent | number | `0` | 进度百分比，0–100；越界收敛，非数字按 0 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `primary` | 填充的语义色 |
| size | `sm` \| `md` \| `lg` | `md` | 轨道高度和文字档位 |
| shape | `square` \| `rounded` \| `pill` | `square` | 外轮廓 |
| showText | boolean | `false` | 右侧显示百分比 |
| label | string | `''` | 左侧标签，单行省略 |
| text | string | `''` | 右侧自定义短文案，优先于 showText |
| color | string | `''` | 数值颜色，字面值或主题令牌 |
| bgColor | string | `''` | 填充颜色或渐变，字面值或主题令牌 |
| trackColor | string | `''` | 轨道颜色，字面值或主题令牌 |
| height | string | `''` | 轨道自定义高度，需带单位；覆盖 size |
| duration | number | `220` | 过渡时长，单位毫秒；0 直接落位 |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| end | percent 变化后的过渡计时结束时触发，连续改值只按最后一次 | 最终百分比 number |

- `percent` 只控制显示，组件不维护内部状态，也没有 `v-model`。负数和 0 按未开始，超过 100 按完成，非数字按 0。
- 默认百分比最多保留一位小数：`60` 显示 `60%`，`94.5` 显示 `94.5%`。`showText` 打开后显示右侧数值；`text` 非空时优先显示 `text`（短文案）。`label` 是左侧短标签，单行省略。
- 一行三段：标签、轨道、数值；标签和轨道、轨道和数值之间留 8 / 12 / 16，数值最小宽度按档位 40 / 44 / 52（`--vx-progress-value-min-*`），多行进度条的百分比右对齐。
- `size` 三档：轨道 4 / 6 / 8（`--vx-progress-height-*`），标签和数值 13 / 15 / 17（20 / 22 / 24）。`height` 传带单位的值只覆盖轨道高度，标签和数值仍按 `size`。
- `shape` 默认 `square` 平角；`rounded` 用 `--vx-radius-sm` 6，`pill` 用 999。圆角同时作用于轨道和填充，轨道用 `overflow: hidden` 裁切；细轨道上 `rounded` 和 `pill` 看起来接近。
- `type` 只改填充：`warning` 用 `warning-pressed`，`default` 用正文色。标签保持次要色，数值保持正文色；状态不能只靠填充色表达。
- `bgColor` / `trackColor` / `color` 分别只改填充、轨道和数值，默认按字面值使用，不跟随主题；跟主题时传 `var(--vx-color-*)`。`bgColor` 可以接渐变，但只用于品牌强调，一屏最多一处，不用来表达成功或失败。
- 填充用 `width` 过渡，默认 220ms（`--vx-duration-normal`），`duration=0` 直接落位；不支持过渡的平台也直接落位，`end` 仍按计时触发。不用 `transform`，渐变和两端圆角才会跟着可见宽度走。首次渲染不播放入场动画。
- `end` 在过渡计时结束时抛最终值；连续改值只按最后一次，卸载不补抛。它只用于接力或收尾，不要当业务提交。
- 进度条只占父级宽度，不加外部间距；放进卡片时由卡片内边距收口，多行之间留 12 / 16。频繁更新的上传进度把 `duration` 控制在 300 以内。
- 没有插槽、点击、禁用、加载和方法；标签、数值和操作分别用 props 和外层卡片、列表行承载。进度条不是步骤条、评分或加载中的替代。
- 进度条是 `view` / `text` 组合，Web 端不进入 Tab 顺序；需要读屏时在 `label` 或旁边给出文字说明，`0%` 和 `100%` 也显示数值。
- 从 ThorUI `tui-progress` 迁移：`showInfo` → `showText`，`activeColor` → `bgColor`，`backgroundColor` → `trackColor`，`width` → `size` / `height`，`radius` → `shape`；`duration` 从「每 1% 毫秒」改为「整段毫秒」，`activeend` → `end`。`percentWidth` 由 `--vx-progress-value-min-*` 接管，`size` / `color` 保留但分别改为尺寸档位和数值颜色。

## vx-popup

弹出层。遮罩铺满页面，面板按 `placement` 从一条边滑出或悬在中间；只圆朝向页面的那一侧，进出场只改位移和透明度。内容由业务给，组件不带标题栏、动作列表和滚动容器。

```vue
<vx-popup v-model:show="bottomVisible" closable>
	<view class="popup-panel">
		<text class="popup-panel__title">筛选</text>
		<vx-checkbox-group v-model="filters" layout="list">...</vx-checkbox-group>
	</view>
</vx-popup>

<vx-popup v-model:show="menuVisible" placement="left" width="86%" closable>
	<vx-list-view title="全部菜单">...</vx-list-view>
</vx-popup>

<vx-popup v-model:show="shareVisible" placement="top" height="280px">
	<view class="popup-panel">分享</view>
</vx-popup>

<vx-popup ref="popupRef" v-model:show="confirmVisible" placement="center" :mask-closable="false">
	<view class="popup-panel">
		<text class="popup-panel__title">删除这条记录？</text>
		<vx-button block type="danger" text="删除" @click="onDelete" />
	</view>
</vx-popup>
```

```ts
const bottomVisible = ref(false)
const menuVisible = ref(false)
const shareVisible = ref(false)
const confirmVisible = ref(false)
const filters = ref<string[]>([])

// 组件实例类型按组件名生成，和 easycom 组件一样直接用，不需要 import。
const popupRef = ref<VxPopupComponentPublicInstance | null>(null)

const openConfirm = () => {
	popupRef.value?.open?.()
}

// 返回键按用户关闭处理：收起、抛 close，并拦住页面返回。
onBackPress(() => {
	if (confirmVisible.value !== true) return false
	popupRef.value?.cancel?.()
	return true
})
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| show | boolean | `false` | 显示弹出层，支持 `v-model:show`；点可关闭的遮罩或关闭叉回写 `false` |
| placement | `top` \| `bottom` \| `left` \| `right` \| `center` | `bottom` | 弹出方向 |
| width | string | `''` | 左右贴边和居中的宽度，需带单位，如 `320px`、`86%`；不传时左右用 `--vx-popup-width`，居中按内容并收在 `--vx-popup-max-width` 内 |
| height | string | `''` | 上下贴边的高度，需带单位，如 `320px`、`60%`；不传时按内容高度排 |
| maxWidth | string | `''` | 上下贴边时面板最大宽，需带单位，如 `480px`；不传时仍是 100% 宽。左右和居中不读 |
| round | `none` \| `sm` \| `md` \| `lg` | `lg` | 圆角档位；只圆朝向页面的那一侧，贴边那条边保持直角，居中四角全圆 |
| closable | boolean | `false` | 内容上方显示一行关闭叉，点击收起并抛 `close` |
| maskClosable | boolean | `true` | 点击遮罩收起并抛 `close`；关掉后点遮罩只抛 `click-mask` |
| maskColor | string | `''` | 自定义遮罩色，字面值 |
| safeArea | boolean | `true` | 上下贴边时由面板内边距让开顶部或底部安全区；左右和居中的侧边安全区始终让开 |
| zIndex | number | `1000` | 浮层层级 |
| duration | number | `220` | 进出场时长，单位毫秒；`0` 直接切换，Web 上跟随系统的减少动效 |
| lockScroll | boolean | `true` | 打开时锁住页面滚动；只在 Web 生效，见「平台支持」 |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| open | 面板开始入场时触发，`v-model:show` 改 `true` 和调 `open()` 都算；首次渲染就显示时不触发 | 无 |
| close | 用户点可关闭的遮罩、关闭叉，或页面调 `cancel()` 时触发；默认先收起 | 无 |
| click-mask | 点遮罩总是触发；`maskClosable=false` 时只触发它，不关闭 | 无 |
| update:show | `v-model:show` 同步，收起时回传 `false` | boolean |

| 插槽 | 说明 |
| --- | --- |
| default | 面板内容；组件不内置内边距、标题栏、动作区和滚动容器 |

| 方法 | 说明 |
| --- | --- |
| open() | 打开弹出层 |
| close() | 立刻收起，不抛 `close` |
| cancel() | 收起并抛 `close`，给页面 `onBackPress` 用 |
| toggle() | 打开或收起 |

- 上下贴边默认占满宽度，高度由内容或 `height` 决定；`maxWidth` 把面板收到指定宽并居中，不传时仍是 100%。左右贴边占满高度、宽 280（`--vx-popup-width`），`width` 必须带单位；居中按内容宽度排、最宽 480（`--vx-popup-max-width`），四周留 24。
- 贴住屏幕的一侧不圆角，朝向页面的两角取 `round`；居中四角全圆。`round` 只改外轮廓，内容不跟着裁圆角。
- 面板用 `surface` 底，不加阴影；遮罩用 `--vx-color-mask`，只压页面。居中面板四周加 1px `border`，从遮罩里分出边界。
- 面板不预留内容内边距：内容自己留 16；上下贴边由面板内边距让开顶部或底部安全区，左右面板两头都让，横屏的左右安全区每档都让。
- 关闭叉在内容上方单占一行，行高沿用列表行 44、图标 18；贴顶时不会钻进状态栏，也不会压住业务内容。
- 点可关闭的遮罩收起并抛 `close`；`maskClosable=false` 时点遮罩只抛 `click-mask`，要保留关闭叉或内容里的关闭按钮。`close()` 只收起，不抛 `close`。`cancel()` 收起并抛 `close`；页面 `onBackPress` 里调用并返回 `true`，面板收起、页面不退。
- 只过渡 `transform` 和 `opacity`：贴边面板从所在边滑入，居中面板只淡入。`duration` 默认 220，`0` 直接切换；Web 上系统打开「减少动效」时按 0 处理。
- 关闭动画走完（`duration` 加一帧）只加隐藏 class；第一次打开后根节点常驻，关闭只切 `display: none`，原生子组件不销毁。真机上 `fixed` + `v-if` 反复创建 `scroll-view` 会连遮罩和面板一起不画。关闭过程中再打开会从当前位置回到终点，不会叠出第二个面板，也不会卡在中间态。
- 关闭后节点仍留在页面里，插槽里的 `scroll-view` 也还活着；需要完全释放时用 `v-if` 包住整个弹出层。
- 内容超过一屏时先给 `height`，再在内容里放 `scroll-view` 接管滚动；组件不内置滚动容器，也不接管焦点。
- 层级默认 1000，和抽屉、操作菜单同档；低于数字键盘 1005、消息提示 1010、弹框 1020、加载浮层 1050 和轻提示 1100。组件不自动叠加，嵌套两个时由业务自己传 `zIndex`。
- 挂在页面根节点，和滚动容器平级；不要放进 `scroll-view`、卡片或 `fixed` 容器。同一屏只开一个。
- Web 端遮罩标 `aria-hidden`，关闭叉带可读标签；内容区不抢焦点，键盘出口由业务提供。
- 弹出层只承载内容，不做动作列表、标题栏、跟手拖动和路由；这些用操作菜单、抽屉和弹框。

### 平台支持

| 平台 | 滚动锁 | 进出场 | 说明 |
| --- | --- | --- | --- |
| Web | 打开时给页面根节点加 `.vx-scroll-lock`（`overflow: hidden`），收起后移除 | `transform` 和 `opacity` 过渡 | 系统打开「减少动效」时按 `duration=0` 处理 |
| App | 不锁页面滚动 | 同一段过渡；不支持过渡时直接落位 | 需要整页固定时，页面用 `scroll-view` 包内容，再用 `v-if` 控制页面结构 |
| 微信小程序 | 只拦遮罩上的手势 | 同一段过渡 | 页面根节点拿不到；整页锁定要页面自己用 `page-meta` 或滚动容器处理 |

## vx-actionsheet

操作菜单。底部弹层，用 `items` 列动作；可选的标题、说明和取消按钮，支持主操作、危险操作、禁用和选中态。

```vue
<vx-actionsheet v-model:show="sheetVisible" :items="sheetItems" description="确认清空搜索历史吗？"
	@select="onSheetSelect" @cancel="onSheetCancel" />

<vx-actionsheet v-model:show="sheetVisible" title="选择您的性别" :items="genderItems" />

<vx-actionsheet v-model:show="sheetVisible" :items="sheetItems" :mask-closable="false" />
```

```ts
const sheetVisible = ref(false)
const sheetItems = [
	{ text: '确定' },
	{ text: '退出登录', type: 'danger' }
]
const genderItems = [
	{ text: '男', selected: true },
	{ text: '女' },
	{ text: '不公开' }
]
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| show | boolean | `false` | 显示操作菜单，支持 `v-model:show`；动作、取消和遮罩都会同步回 `false` |
| items | Array&lt;VxActionSheetItem&gt; | `[]` | 动作列表；空数组不渲染，也不铺遮罩 |
| title | string | `''` | 面板标题，可选 |
| description | string | `''` | 标题下方的说明，可选，用次要色 |
| showCancel | boolean | `true` | 显示取消按钮 |
| cancelText | string | `'取消'` | 取消按钮文案 |
| maskClosable | boolean | `true` | 点击遮罩关闭并抛 `cancel` |
| closeOnSelect | boolean | `true` | 点击动作后自动收起 |
| maskColor | string | `''` | 自定义遮罩色，字面值 |
| titleColor | string | `''` | 自定义标题色，字面值 |
| descriptionColor | string | `''` | 自定义说明色，字面值 |
| zIndex | number | `1000` | 浮层层级 |

`items` 的每一项：

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | string | — | 动作文案，建议 2–6 个字 |
| type | `default` \| `primary` \| `danger` | `default` | 默认色、主色、危险色 |
| disabled | boolean | `false` | 禁用，没有按下态，也不抛 `select` |
| selected | boolean | `false` | 选中态：主色文案加右侧勾；danger 动作保留危险色 |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| select | 点击可用动作时触发；默认先收起再抛 | 索引 `number`、动作对象 `VxActionSheetItem` |
| cancel | 点取消或可关闭的遮罩时触发 | 无 |
| update:show | `v-model:show` 同步，收起时回传 `false` | boolean |

| 方法 | 说明 |
| --- | --- |
| open() | 打开面板 |
| close() | 立刻收起，不抛 `cancel` |

- 面板贴底、只圆上两角；最大宽度 480px，手机上铺满，平板和 Web 上收成一张居中的浮层。遮罩用 `--vx-color-mask`，只压页面，不压面板。
- 标题用 `title`（17 / 24 / 600），说明用 13 / 20 次要色；动作和取消文案用 `body`（15 / 22 / 500）。行高 52，左右内边距 24。
- 动作行默认 `text`，`primary` 用 `primary-pressed`，`danger` 用 `danger-pressed`，禁用用 `disabled-text`；按下铺 `surface-pressed`，分割线用 `divider` 通栏，最后一条不画。
- 选中态用主色加右侧 `check`，`selected` 由业务维护；danger 动作保留危险色。组件不保存选中值，点击只抛 `select`。
- 取消与动作之间用 4px `default-soft` 间隔带分开，不画 border；底部安全区由面板内边距承担。`showCancel=false` 时末条动作下面仍留安全区。
- `closeOnSelect=false` 时不自动收起，适合单选、多选；在 `select` 里更新 `items` 的 `selected`。
- `maskClosable=false` 时只能点动作或取消退出，取消按钮要保留。
- 操作菜单挂在页面根节点，和滚动容器平级；层级默认 1000，低于消息提示（1010）、弹框（1020）、加载浮层（1050）和轻提示（1100）。同一屏只开一个，动作控制在 2–6 条。
- 从 ThorUI `tui-actionsheet` 迁移：`itemList` 换成 `items`，文案固定读 `text`，`textField` 不再需要；`isCancel` 换成 `showCancel`；`tips` 换成 `title` / `description`；`color` / `size` 换成 `titleColor` / `descriptionColor` 和设计令牌。
- `textColor` / `textSize` / `cancelColor` / `radius` 不再需要：动作色由每项的 `type` 控制，字号和圆角走令牌；`zIndex` 保留，默认改为 1000。`click` 换成 `select(index, item)`，不再把动作对象展开成事件参数。

## vx-modal

弹框。居中对话框，标题、正文和默认取消、确定两个按钮；也可以用 `actions` 换成一到多个自定义动作，或用默认插槽放输入框、表单等自定义正文。`closable` 打开后右上角有 44×44 的关闭叉。支持 `v-model:show`，`ref` 上暴露 `open()` / `close()`。

```vue
<vx-modal v-model:show="modalVisible" title="提示" content="确认提交本次修改吗？"
	confirm-text="提交" @confirm="onConfirm" @cancel="onCancel" />

<vx-modal v-model:show="dangerVisible" title="删除项目" content="删除后无法恢复，确认删除吗？"
	confirm-text="删除" confirm-type="danger" cancel-type="danger" @confirm="onDelete" />

<vx-modal v-model:show="successVisible" title="提交成功" content="申请已提交，我们会在 2 个工作日内联系你。"
	icon="check-circle" icon-type="success" :show-cancel="false" confirm-text="知道了" />

<vx-modal v-model:show="closableVisible" title="提示" content="右上角关闭叉，点击直接收起。" closable />

<vx-modal v-model:show="actionsVisible" :actions="actions" content="请选择支付方式" @action="onAction" />

<vx-modal v-model:show="formVisible" title="邮箱" :show-actions="false">
	<vx-input v-model="email" placeholder="请输入邮箱" />
	<vx-button block type="primary" shape="pill" text="立即提交" @click="onSubmit" />
</vx-modal>
```

```ts
const modalVisible = ref(false)
const dangerVisible = ref(false)
const successVisible = ref(false)
const closableVisible = ref(false)
const actionsVisible = ref(false)
const formVisible = ref(false)
const email = ref('')

const actions = [
	{ text: '微信', type: 'success', variant: 'plain' },
	{ text: '支付宝', type: 'primary', variant: 'plain' },
	{ text: '银行卡', type: 'danger', variant: 'plain' }
]
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| show | boolean | `false` | 显示弹框，支持 `v-model:show`；取消、关闭叉、遮罩和可自动收起动作会回写 `false` |
| title | string | `''` | 标题，可选；和 `icon` 都不传时不渲染头部 |
| content | string | `''` | 正文，可选；传了默认插槽时以插槽为准 |
| size | `sm` \| `md` \| `lg` | `md` | 面板最大宽度 280 / 320 / 400；字号不随尺寸变化 |
| icon | `VxIconName` | — | 头部状态图标，可选；不传时不渲染图标圆 |
| iconType | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `primary` | 只改图标圆和图标本身 |
| actions | Array&lt;VxModalAction&gt; | `[]` | 自定义动作；非空时替换默认取消、确定 |
| showActions | boolean | `true` | 是否渲染底部动作区；自定义正文自带按钮时关掉 |
| showCancel | boolean | `true` | 默认动作里显示取消按钮；只在没有传 `actions` 时生效 |
| cancelText | string | `'取消'` | 默认取消文案 |
| confirmText | string | `'确定'` | 默认确定文案 |
| cancelType | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `default` | 默认取消的语义色，按钮是镂空样式 |
| confirmType | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `primary` | 默认确定的语义色，按钮是实心样式 |
| confirmLoading | boolean | `false` | 默认确定按钮加载中；只在没有传 `actions` 时生效 |
| confirmDisabled | boolean | `false` | 默认确定按钮禁用；只在没有传 `actions` 时生效 |
| actionShape | `rounded` \| `pill` \| `square` | `rounded` | 动作外轮廓，整组共用 |
| maskClosable | boolean | `true` | 点击遮罩关闭并抛 `cancel`；关掉后仍可用动作、关闭叉（`closable` 打开时）或 `close()` 退出 |
| closable | boolean | `false` | 右上角显示关闭叉，点击收起并抛 `cancel`；不受 `maskClosable` / `closeOnAction` 影响 |
| closeOnAction | boolean | `true` | 点确定或普通动作后自动收起；取消按钮和关闭叉始终收起 |
| titleColor | string | `''` | 自定义标题色，字面值 |
| contentColor | string | `''` | 自定义正文色，字面值；只改 `content`，不改插槽 |
| maskColor | string | `''` | 自定义遮罩色，字面值 |
| zIndex | number | `1020` | 浮层层级，低于加载浮层 1050 和轻提示 1100 |

`actions` 的每一项：

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | string | — | 动作文案，建议 2–6 个字 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `default` | 语义色 |
| variant | `solid` \| `plain` \| `soft` \| `link` | `solid` | 视觉层级，与按钮相同 |
| role | `cancel` \| `confirm` | — | 语义出口；不传时点击抛 `action` |
| disabled | boolean | `false` | 禁用，不响应点击，也不收起 |
| loading | boolean | `false` | 加载中，不响应点击；异步动作自己调 `close()` |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| confirm | 默认确定或 `role="confirm"` 的动作被点击；`closeOnAction` 时先收起 | 无 |
| cancel | 默认取消、`role="cancel"` 的动作、关闭叉或可关闭遮罩被点击；始终收起 | 无 |
| action | 没有 `role` 的自定义动作被点击；`closeOnAction` 时先收起 | 索引 `number`、动作对象 `VxModalAction` |
| update:show | `v-model:show` 同步，收起时回传 `false` | boolean |

| 插槽 | 说明 |
| --- | --- |
| default | 自定义正文，替换 `content`；不继承正文的颜色和字号 |

| 方法 | 说明 |
| --- | --- |
| open() | 打开弹框 |
| close() | 立刻收起，不抛 `cancel` |

- 面板用 `surface` 底、`lg` 圆角、`--vx-shadow-lg`，不加描边；遮罩用 `--vx-color-mask`，只压页面，不压面板。
- 标题固定 17 / 24 / 600，正文 15 / 22 / 400 次要色，都居中；动作沿用 `sm` 控件的 14 / 20 / 500。`size` 只改最大宽度，不改字号。
- 面板最大宽度 280 / 320 / 400，手机上由定位层左右 24 的内边距收窄；内边距固定 24，标题和正文之间 12，正文和动作之间 24。
- 动作高度 32；一个动作铺满，两个并排等宽（取消左、确定右），三个以上纵向排列，纵向间距 8。并排文案控制在 2–4 个字；更长改成单个动作，或把选择拆到操作菜单，长文案不会把按钮撑高。
- 默认取消是镂空 `default`，确定是实心 `primary`；`cancelType` / `confirmType` 分别改两者语义色。删除、退出这类不可逆操作至少把确定改成 `danger`。
- `actions` 非空时整组替换默认按钮；`showCancel`、`confirmText`、`confirmType` 和 `confirmLoading` 只在默认动作里生效。
- `role="cancel"` 的动作、关闭叉和可关闭遮罩始终收起并抛 `cancel`；`role="confirm"` 的动作在 `closeOnAction` 下收起并抛 `confirm`；没有 `role` 的动作在 `closeOnAction` 下收起并抛 `action(index, action)`。
- `closeOnAction=false` 时确定和普通动作保持打开，适合异步提交；完成后由业务调 `close()`。取消按钮和关闭叉始终收起。
- `maskClosable=false` 时仍可用动作、关闭叉（`closable` 打开时）或 `close()` 退出，至少保留一个出口；遮罩会接住页面点击和触摸。
- `closable=true` 时右上角显示关闭叉：热区 44、图标 18，点击收起并抛 `cancel`，和取消走同一个出口，不受 `maskClosable` / `closeOnAction` 影响。有标题时标题左右各让 24，没有标题时正文右侧让 24；`close()` 仍然只收起，不新增事件。
- `icon` 是可选状态图标，圆 48、图标 22；`iconType` 圆用 `*-soft` 浅底，图标用 `*-pressed`，warning 用 `warning-ink`，default 用 `text`。不传时头部只剩标题。图标和标题之间留 12；没有标题时，这段间距由正文上边距单独留，不叠成 24。
- 自定义正文用默认插槽，并用 `:show-actions="false"` 关掉内置动作；插槽内容自己带颜色、字号和按钮。
- 插槽里的输入和按钮属于表单内容，按业务需要选尺寸，不跟随动作区的 `sm` 档收小；示例用默认 `md`。
- `titleColor` / `contentColor` / `maskColor` 各改一处，字面值不跟随主题；`contentColor` 只作用于 `content`。
- 弹框挂在页面根节点，和滚动容器平级；层级默认 1020，高于操作菜单 1000 和消息提示 1010，低于加载浮层 1050 和轻提示 1100。同一屏只开一个弹框，不和操作菜单叠加。
- 弹框不内置滚动，只承载一件短内容；长表单、多步流程和整页内容改用页面区块。Web 上遮罩淡入、面板从 0.96 放大到 1；App 5.26 直接出现，不做退场。第一次打开后根节点常驻，关闭只切 `display: none`，原生子组件不销毁；原生层在 App 上反复创建会整层不画。
- 关闭后节点仍留在页面里，插槽里的原生控件也还活着；需要完全释放时用 `v-if` 包住整个弹框。
- 从 ThorUI `tui-modal` 迁移：`button` 换成 `actions`，每项 `plain` 换成 `variant="plain"`；`shape="circle"` 换成 `actionShape="pill"`；`custom` 换成默认插槽 + `:show-actions="false"`；`color` 换成 `contentColor`；`width` / `padding` / `radius` / `backgroundColor` 换成 `size` 和主题令牌。
- `click({ index })` 拆成 `confirm` / `cancel` / `action(index, action)`，由动作的 `role` 决定；`cancel` 仍表示遮罩、关闭叉或取消。`fadeIn` 不再需要，Web 端已带淡入；`maskZIndex` 移除，遮罩和面板共用 `zIndex`。

## vx-collapse

折叠面板容器。用 `v-model` 绑展开面板的 `name` 数组，支持手风琴、卡片 / 平面形态、三档尺寸、整组禁用、无箭头和程序化方法；每个面板由 `vx-collapse-item` 提供。

```vue
<vx-collapse v-model="open">
	<vx-collapse-item v-for="(item, index) in faq" :key="item.name" :index="index" :name="item.name" :title="item.title">
		<text class="faq__body">{{ item.body }}</text>
	</vx-collapse-item>
</vx-collapse>

<vx-collapse v-model="open" accordion>
	<vx-collapse-item name="security" title="账户安全">...</vx-collapse-item>
</vx-collapse>

<vx-collapse v-model="open" variant="plain" size="lg" :divider="false" :arrow="false">
	<vx-collapse-item name="privacy" title="隐私设置">...</vx-collapse-item>
</vx-collapse>

<vx-collapse ref="collapseRef" v-model="open" @change="onCollapseChange">...</vx-collapse>
```

```ts
const open = ref(['ship'])
const collapseRef = ref()

const onCollapseChange = (name: string, open: boolean) => {
	console.log(name, open)
}

collapseRef.value?.open('ship')
collapseRef.value?.close('ship')
collapseRef.value?.toggle('return')
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | Array&lt;string&gt; | `[]` | 展开面板的 name 数组，支持 `v-model` |
| accordion | boolean | `false` | 手风琴，同一时间只展开一项 |
| variant | `card` \| `plain` | `card` | 描边卡片，或只保留 `surface` 底的平面分组 |
| size | `sm` \| `md` \| `lg` | `md` | 标题行、标题和箭头档位；说明固定 13 / 20 |
| divider | boolean | `true` | 面板之间画 1px 分割线，最后一项不画 |
| arrow | boolean | `true` | 整组显示箭头；面板上的 `arrow` 只能再关掉 |
| disabled | boolean | `false` | 整组禁用，所有面板不响应点击并转灰 |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| update:modelValue | `v-model` 同步新的 name 数组 | `Array<string>` |
| change | 点击或方法改变面板展开状态后触发 | `name: string`、`open: boolean` |

| 插槽 | 说明 |
| --- | --- |
| default | 面板，通常放一组 `vx-collapse-item` |

| 方法 | 说明 |
| --- | --- |
| open(name) | 展开指定面板；手风琴会收起其他面板 |
| close(name) | 收起指定面板；手风琴直接清空 |
| toggle(name) | 切换指定面板 |

- `variant="card"` 是 `surface` 底、1px `border` 描边、`md` 圆角；`variant="plain"` 只保留 `surface` 底，放进卡片时用 `plain`。
- 标题行沿用列表行 44 / 48 / 52；标题 13 / 15 / 17（20 / 22 / 24、500），说明固定 13 / 20，箭头 14 / 18 / 22。水平内边距 12 / 16 / 16，垂直 8 / 12 / 12。
- 分割线 1px，左右与标题内边距对齐，最后一项自动不画；`divider=false` 去掉全部面板间分割线。动态列表要给每项传 `index`。
- 展开用 `max-height` 加透明度和 8px 上移过渡，固定高度改用 `height` 过渡；第一帧不加过渡，默认展开的面板不会滑进来。
- 方法只改 `v-model` 并抛 `change`，不受 `disabled` 限制；禁用态只挡住标题行的点击。手风琴自动收起上一项时不会为旧项再抛一次 `change`，完整名单以 `v-model` / `update:modelValue` 为准。
- 从 ThorUI `tui-collapse` 迁移：`current` + `index` 换成容器的 `v-model` 和面板的 `name`；`@click` 换成容器的 `change(name, open)`；`bgColor` / `hdBgColor` / `bdBgColor` 不再需要，底色由 `surface` 和主题令牌提供。
- `arrowColor` 换成主题的 `text-secondary` / `disabled-text`；`arrow` 保留为布尔，`disabled` 保留，`height` 换成面板的 `contentHeight`。

## vx-collapse-item

折叠面板的子项。标题行放标题、说明、前缀图标和角标，默认插槽放展开后的内容；禁用、无箭头和固定高度滚动都在这一层。

```vue
<vx-collapse-item name="address" title="收货地址" description="默认地址，结算时优先使用">
	<text class="item__body">上海市徐汇区虹桥路 1 号 8 层。</text>
</vx-collapse-item>

<vx-collapse-item name="disabled" title="禁用项" disabled>...</vx-collapse-item>

<vx-collapse-item name="quiet" title="无箭头面板" :arrow="false">...</vx-collapse-item>

<vx-collapse-item name="terms" title="服务条款" content-height="96px">
	<view class="terms">...</view>
</vx-collapse-item>

<vx-collapse-item name="notice" title="消息通知">
	<template #prefix>
		<view class="item__icon">
			<vx-icon name="bell" size="sm" color="var(--vx-color-text-secondary)" />
		</view>
	</template>
	<template #extra>
		<vx-tag size="sm" type="success" variant="soft" text="已开启" />
	</template>
	<text class="item__body">订单、物流和售后进度会通过推送提醒。</text>
</vx-collapse-item>
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| name | string | `''` | 面板名，同一组内唯一；`v-model` 用它记录展开项 |
| index | number | — | `v-for` 的循环下标。同一组都传了才按最大 index 认最后一项；缺一项仍按挂载顺序。静态面板不用传 |
| title | string | `''` | 标题，可以换行；为空时不渲染标题文字 |
| description | string | `''` | 标题下方的说明，次要色，可以换行 |
| disabled | boolean | `false` | 禁用：不响应点击，标题、说明和箭头转灰 |
| arrow | boolean | `true` | 显示箭头；容器关掉箭头时这一项也会隐藏 |
| contentHeight | string | `''` | 固定内容区高度，必须带单位；传入后内容在内部滚动 |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| change | 点击标题展开或收起后触发 | `open: boolean` |

| 插槽 | 说明 |
| --- | --- |
| default | 展开后的内容，自己带颜色、字号和行高 |
| prefix | 标题前，放图标、头像或图形 |
| extra | 标题右侧、箭头前，放标签、徽章、时间或状态 |

- `name` 在同一组里唯一；不传时用生成的实例 id 兜底，只适合不需要父级控制的场景。
- 标题 13 / 15 / 17 跟随容器 `size`，说明固定 13 / 20；标题行水平内边距 sm 12、md / lg 16，垂直 8 / 12 / 12。
- 标题行是唯一热区，按下铺 `surface-pressed`；点击停在面板上，内容区不切换展开。`extra` 里的按钮和开关需要自己 `@click.stop`。
- `disabled` 只挡点击，标题、说明和箭头转 `disabled-text`，不抛 `change`；插槽内容不自动转灰。
- `arrow=false` 只去掉箭头，标题行仍整行可点；容器上的 `arrow` 可以一次关掉整组。
- `contentHeight` 固定内容区高度并在内部滚动，必须带单位；不传时由内容自然撑高，最多 2000px。
- 插槽内容第一次展开才创建，之后保持挂载；收起状态下插槽不渲染，不要指望在收起时通过 `validate` 校验里面的表单项。
- 面板不画外框、圆角和阴影，外轮廓只由 `vx-collapse` 负责；最后一项的分割线也由容器判断。
- 从 ThorUI `tui-collapse` 迁移：标题和内容插槽换成 `title` / `description` 和默认插槽；展开用的 `current` 不再需要。这里的 `index` 只表示列表位置，`v-for` 要传入。`height` 换成 `contentHeight`，`bgColor` / `hdBgColor` / `bdBgColor` / `arrowColor` 不再需要。

## vx-datetime

日期时间选择器。底部弹层里的滚轮，`mode` 决定出现哪几列（年、月、日、时、分、秒），默认年月日加时分。打开时停在已选值，滚动只改草稿，点确定才写回 `v-model`。支持年份区间、分钟 / 秒步长、单位置顶和自定义输出格式。`ref` 上暴露 `open()` / `close()`。

```vue
<vx-datetime v-model="bookDate" v-model:show="dateVisible" mode="date" title="选择预约日期" />

<vx-datetime v-model="bookTime" v-model:show="timeVisible" mode="time" format="HH:mm" />

<vx-datetime v-model="birthday" v-model:show="birthdayVisible" mode="date" :start-year="1950"
	:end-year="2026" />

<vx-datetime v-model="remindAt" v-model:show="remindVisible" :minute-step="5" unit-position="top" />
```

```ts
const bookDate = ref('')
const bookTime = ref('')
const birthday = ref('1998-06-12')
const remindAt = ref('2026-10-26 11:30')
const dateVisible = ref(false)
const timeVisible = ref(false)
const birthdayVisible = ref(false)
const remindVisible = ref(false)
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | string | `''` | 已确定的值，支持 `v-model`；写法按 `mode` |
| show | boolean | `false` | 显示面板，支持 `v-model:show` |
| mode | `VxDatetimeMode` | `datetime` | 选择模式，决定出现哪几列 |
| title | string | `''` | 头部标题，可选 |
| cancelText | string | `'取消'` | 取消按钮文案 |
| confirmText | string | `'确定'` | 确定按钮文案 |
| startYear | number | `1980` | 年份下限，收口到 1000–2999 |
| endYear | number | `2050` | 年份上限 |
| minuteStep | number | `1` | 分钟步长，1–30 |
| secondStep | number | `1` | 秒步长，1–30 |
| unitPosition | `inline` \| `top` | `inline` | 单位跟数值后面，或单独一行 |
| format | string | `''` | 输出格式，不传按 `mode` |
| maskClosable | boolean | `true` | 点遮罩关闭并抛 `cancel` |
| maskColor | string | `''` | 自定义遮罩色，字面值 |
| zIndex | number | `1000` | 浮层层级 |

`mode` 的取值和默认格式：

| 值 | 列 | 默认格式 |
| --- | --- | --- |
| `year` | 年 | `YYYY` |
| `year-month` | 年、月 | `YYYY-MM` |
| `month-day` | 月、日 | `MM-DD` |
| `date` | 年、月、日 | `YYYY-MM-DD` |
| `date-hour` | 年、月、日、时 | `YYYY-MM-DD HH` |
| `datetime` | 年、月、日、时、分 | `YYYY-MM-DD HH:mm` |
| `datetime-second` | 年、月、日、时、分、秒 | `YYYY-MM-DD HH:mm:ss` |
| `time` | 时、分 | `HH:mm` |
| `time-second` | 时、分、秒 | `HH:mm:ss` |
| `minute-second` | 分、秒 | `mm:ss` |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| confirm | 点确定时触发，面板同时收起 | 格式化后的 string |
| cancel | 点取消或可关闭的遮罩时触发 | 无 |
| change | 滚动停止、值真的变化时触发 | 格式化后的 string |
| update:show | `v-model:show` 同步，收起时回传 `false` | boolean |
| update:modelValue | `v-model` 同步，只在确定时回传 | string |

| 方法 | 说明 |
| --- | --- |
| open() | 打开面板 |
| close() | 立刻收起，不抛 `cancel`，不改 `v-model` |

- 面板贴底、只圆上两角，最大宽度 480px；遮罩用 `--vx-color-mask`，只压页面。底部安全区由面板内边距承担。
- 头部高 52（`--vx-list-height-md`）：取消用次要色、确定用 `primary-pressed`，都是 15 / 22 / 500；标题 17 / 24 / 600 居中，太长单行省略。
- 滚轮可视高度 220（`--vx-datetime-wheel`），每行 44（`--vx-datetime-row`），正好五行；指示器高度必须等于行高。行文字 15 / 22，未选中 `text-secondary` 400，选中 `text` 600；六列时收一档到 13 / 20。行高不随字号变，字号越小上下留白越大。
- 原生蒙层写死了白色渐变，暗色主题下会在两端发白，组件用 `mask-class` 把它换成透明，选中行靠字重和颜色区分。
- 打开时把 `v-model` 解析成草稿：读不出来或超出年份区间时回落到当前时间 / 区间边界；分钟、秒按步长对齐。
- 滚动只改草稿，点确定才写回 `v-model`；取消、遮罩和 `close()` 都不动已提交的值，下次打开还在上一次确定的位置。
- 天数跟着年月走，闰年二月 29 天；换月或换年时选中的日超出当月会收口，并把日期列滚回去。
- `format` 认 `YYYY` / `MM` / `DD` / `HH` / `mm` / `ss`，其余字符原样保留；只改输出文本，不改哪些列可以选。输出永远按本机时间，不做时区换算。
- 选择器挂在页面根节点，和滚动容器平级；层级默认 1000，和操作菜单同档，低于弹框（1020）和提示（1010 / 1100）。同一屏只开一个。
- 从 ThorUI `tui-datetime` 迁移：数字 `type` 换成语义化的 `mode`——`0` → `year`，`1` → `datetime`，`2` → `date`，`3` → `year-month`，`4` → `time`，`5` → `time-second`，`6` → `minute-second`，`7` → `datetime-second`，`8` → `date-hour`。
- `setDateTime` 换成 `v-model`，`startYear` / `endYear` 保留；`hoursData` / `minutesData` / `secondsData` 换成 `minuteStep` / `secondStep`。`unitTop` 换成 `unit-position="top"`，`radius` 不再需要（面板固定顶部圆角）。
- `titleSize` / `titleColor` / `cancelColor` / `color` / `headerBackground` / `bodyBackground` / `unitBackground` / `height` 不再需要：字号、颜色和高度都走令牌，遮罩色需要时用 `maskColor`。`confirm` 只抛格式化后的字符串，不再抛年月日对象。

## vx-picker

联动选择。底部弹层里的多列滚轮，`options` 用树形数据表达层级，列数由 `children` 的深度决定。`v-model` 存每一级的值，打开时停在保存过的路径；滚动只改草稿，点确定才写回。支持禁用选项、空状态、自定义分隔符、遮罩和 `open()` / `close()`。

```vue
<vx-input :model-value="regionText" label="所在地区" label-width="88px" readonly arrow
	placeholder="请选择地区" @click="regionVisible = true" />

<vx-picker v-model="regionValues" v-model:show="regionVisible" :options="regions" title="选择地区"
	@confirm="onRegionConfirm" />

<vx-picker v-model="roomValues" v-model:show="roomVisible" :options="buildings" title="选择房间" />

<vx-picker v-model="regionValues" v-model:show="regionVisible" :options="regions" separator=" · "
	mask-color="rgba(43, 107, 224, 0.28)" />
```

```ts
import { VxPickerOption, VxPickerResult, vxPickerText } from '@/uni_modules/vaporix-ui/libs/picker'

const regions: VxPickerOption[] = [
	{
		text: '广东省',
		value: '440000',
		children: [
			{
				text: '深圳市',
				value: '440300',
				children: [{ text: '南山区', value: '440305' }]
			}
		]
	}
]
const regionValues = ref<string[]>([])
const regionVisible = ref(false)
const regionText = computed(() => regionValues.value.length > 0
	? vxPickerText(regions, regionValues.value, ' / ')
	: '')

const onRegionConfirm = (result: VxPickerResult) => {
	console.log(result.text) // 广东省 / 深圳市 / 南山区
	console.log(result.values) // ['440000', '440300', '440305']
}
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | `string[]` | `[]` | 每一级已确定的值，支持 `v-model` |
| show | boolean | `false` | 显示面板，支持 `v-model:show` |
| options | `VxPickerOption[]` | `[]` | 树形选项，`children` 决定下一列 |
| title | string | `''` | 头部标题，可选；不可选时换成 `invalidText` |
| cancelText | string | `'取消'` | 取消按钮文案 |
| confirmText | string | `'确定'` | 确定按钮文案 |
| separator | string | `' / '` | `result.text` 的分隔符 |
| emptyText | string | `'暂无可选项'` | 空数据提示 |
| invalidText | string | `'该选项不可选'` | 当前路径含不可选项时的头部提示 |
| maskClosable | boolean | `true` | 点遮罩关闭并抛 `cancel` |
| maskColor | string | `''` | 自定义遮罩色，字面值 |
| zIndex | number | `1000` | 浮层层级 |

`options` 的节点是 `VxPickerOption`：

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | 展示文本；`value` 省略时也用它做值 |
| value | string | 否 | 业务值，省略时用 `text` |
| children | `VxPickerOption[]` | 否 | 下一列；空数组和省略等价 |
| disabled | boolean | 否 | 不可选；仍显示，停上去不能确认 |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| confirm | 点确定时触发，面板同时收起 | `VxPickerResult` |
| cancel | 点取消或可关闭的遮罩时触发 | 无 |
| change | 滚动停下或 options 重新对齐后，路径可选且真的变化时触发 | `VxPickerResult` |
| update:show | `v-model:show` 同步，收起时回传 `false` | boolean |
| update:modelValue | `v-model` 同步，只在确定时回传 | `string[]` |

`VxPickerResult` 有 `values` / `texts` / `indices` / `text` 四个字段：前三个逐级对应，`text` 按 `separator` 拼好。

| 方法 | 说明 |
| --- | --- |
| open() | 打开面板 |
| close() | 立刻收起，不抛 `cancel`，不改 `v-model` |

- 节点固定 `text` / `value` / `children` / `disabled`。业务字段不同时先映射一份，组件不做 `textField` / `valueField` 动态键。
- 值统一用字符串；数字 id 先在业务侧转成字符串，回传的 `values` 也按字符串比较。
- 列数等于当前路径的深度：分支提前结束时少一列，不补空列；一般 2–4 级，4 级起文字收一档到 13 / 20。
- 打开时按 value 逐级定位，命中不可选项时挪到最近的可选项；读不出来时从第一项可选项开始。
- 打开期间父级改 `v-model` 不跟，避免把正在滚的轮子拽走；要换位置先 `close()`，改完再 `open()`。
- 滚动只改草稿，点确定才写回 `v-model` 并抛 `confirm`；取消、可关闭的遮罩和 `close()` 都不动已提交的值。
- `change` 只在路径可选且真的变化时抛一次；不可选项的草稿不抛，业务拿到的始终是能提交的值。
- `options` 换数组才触发重新规整；异步补下一级时按当前路径重新对齐，必要时补抛一次 `change`。
- 不可选项留在滚轮里转灰；停上去时头部换成 `invalidText`（默认「该选项不可选」），确定置灰，取消和遮罩仍可退出。
- `options` 为空时留一块和滚轮等高的空状态，面板高度不跳；确定置灰，取消仍能退出。
- 头部高 52（`--vx-list-height-md`），滚轮可视高度 220、每行 44，正好五行；指示器高度必须等于行高。行文字 15 / 22，未选中 `text-secondary` 400，选中 `text` 600。
- 面板 `surface` 底、顶部 `lg` 圆角、`--vx-shadow-lg`，最大宽度 480；遮罩用 `--vx-color-mask`，只压页面。原生蒙层写死了白色渐变，组件用 `mask-class` 换成透明。
- 新增令牌 `--vx-picker-row`、`--vx-picker-wheel`、`--vx-picker-max-width`，亮色、暗色各一份；行高同时写在 `libs/picker.ts` 的 `VX_PICKER_ROW` 里。
- 选择器挂在页面根节点，和滚动容器平级；层级默认 1000，和操作菜单、日期时间选择器同档。同一屏只开一个；两个值用两个实例，选项不同时各传一份 `options`。
- 从 ThorUI `tui-picker` 迁移：`pickerData` → `options`，`layer` → 由树深度决定；`value` 文本数组可以直接继续用，`valueField` / `textField` / `childrenField` 改为固定的 `value` / `text` / `children`。
- `@change` 参数从对象改成 `{ values, texts, indices, text }`，`@hide` → `@cancel`，`picker` 事件 → `@confirm`。`radius` / `titleSize` / `titleColor` / `cancelColor` / `bold` / `size` / `color` / `height` / `params` 不再提供：字号、颜色和高度走令牌，业务参数自己带回。
- `pickstart` / `pickend` 不再提供；需要在滚动时做提示或埋点用 `change`，它只在路径可选且真的变化时抛。

## vx-calendar

日历。按周排布的月历，`mode="single"` 选一个日期，`mode="range"` 点两下选一段区间。弹层模式贴在屏幕底部，不写 `popup` 就平铺在页面里。支持农历、可选范围、翻月方式、区间文字、日期标记和语义色。`ref` 上暴露 `open()` / `close()` / `confirm()`。

```vue
<vx-calendar v-model="checkIn" v-model:show="stayVisible" popup title="选择入住日期" />

<vx-calendar v-model="birthday" v-model:show="birthdayVisible" popup show-lunar
	min-date="1950-01-01" max-date="2026-12-31" />

<vx-calendar v-model:start="tripStart" v-model:end="tripEnd" v-model:show="tripVisible" popup
	mode="range" title="选择行程日期" start-text="出发" end-text="返程" />

<vx-calendar v-model="value" :marks="marks" show-lunar />
```

```ts
const checkIn = ref('')
const birthday = ref('1998-06-12')
const tripStart = ref('')
const tripEnd = ref('')
const value = ref('2026-10-26')
const stayVisible = ref(false)
const birthdayVisible = ref(false)
const tripVisible = ref(false)
const marks = ref([
	{ date: '2026-10-01', bgColor: 'var(--vx-color-warning)', color: 'var(--vx-color-on-warning)' },
	{ date: '2026-10-22', text: '休息', color: 'var(--vx-color-text-secondary)' },
	{ date: '2026-10-26', bgColor: 'var(--vx-color-success)', color: 'var(--vx-color-on-success)', done: true }
])
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | string | `''` | 单个日期，支持 `v-model`；区间模式不读不写 |
| start | string | `''` | 区间起点，支持 `v-model:start` |
| end | string | `''` | 区间终点，支持 `v-model:end` |
| show | boolean | `false` | 弹层显隐，支持 `v-model:show`；平铺模式忽略 |
| mode | `single` \| `range` | `single` | 单个日期或日期区间 |
| popup | boolean | `false` | 以底部弹层展示；否则平铺在页面里 |
| title | string | `'日期选择'` | 弹层头部标题 |
| confirmText | string | `'确定'` | 确定按钮文案 |
| startText | string | `'开始'` | 区间起点的下方文字 |
| endText | string | `'结束'` | 区间终点的下方文字 |
| placeholder | string | `'请选择日期'` | 结果行的占位文字 |
| minDate | string | `''` | 可选的最早日期，空串不限 |
| maxDate | string | `''` | 可选的最晚日期，空串不限 |
| showLunar | boolean | `false` | 在日期下方显示农历日 |
| showYearArrow | boolean | `true` | 显示年份切换箭头；关掉只能按月翻 |
| showConfirm | boolean | `true` | 显示弹层底部的结果行和确定按钮；关掉后用 `confirm()` 提交 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `primary` | 选中、区间和确定按钮的语义色 |
| marks | `VxCalendarMark[]` | `[]` | 日期标记，按 date 匹配 |
| maskClosable | boolean | `true` | 点遮罩关闭并抛 `cancel` |
| maskColor | string | `''` | 自定义遮罩色，字面值 |
| zIndex | number | `1000` | 浮层层级 |

`VxCalendarMark`：

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| date | string | `''` | 日期，`YYYY-MM-DD`；不补零的写法也认，按日期匹配 |
| text | string | `''` | 日期下方文案，覆盖农历，建议 2 个字以内 |
| bgColor | string | `''` | 圆形底色，字面值或 `var(--vx-color-*)` |
| color | string | `''` | 日期文字色，字面值或 `var(--vx-color-*)` |
| done | boolean | `false` | 把下方文案换成对勾 |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| confirm | 点确定时触发，弹层同时收起 | 无 |
| cancel | 点关闭叉或可关闭的遮罩时触发 | 无 |
| change | 点选、草稿真的变化时触发 | 无 |
| monthChange | 翻月或翻年成功之后触发 | year: number, month: number |
| update:show | `v-model:show` 同步，收起时回传 `false` | boolean |
| update:modelValue | `v-model` 同步；平铺每次点选，弹层只在确定时回传 | string |
| update:start / update:end | 区间两端同步，规则同上 | string |

| 方法 | 说明 |
| --- | --- |
| open() | 打开弹层；平铺模式不做任何事 |
| close() | 立刻收起，不抛 `cancel`，不改模型；平铺模式不做任何事 |
| confirm() | 把草稿写回模型并抛 `confirm`；弹层同时收起。没选完时直接返回。平铺模式值已经写回，再调一次只补事件 |

- 弹层贴底、只圆上两角，最大宽度 480px（`--vx-calendar-max-width`）；遮罩用 `--vx-color-mask`，只压页面。头部高 52：标题 15 / 22 / 500 次要色居中，关闭叉 44×44。底部结果行 13 / 16（`--vx-calendar-line-result`）次要色、上下各留 8，确定按钮铺满整行、高 40、胶囊形。
- 每格 42 高（`--vx-calendar-cell`）、宽 `14.28%`，按当月占几周排 5 或 6 行，周日排第一列；五周的月份不留空的第六行。每天是一个 36 的等大方块（`--vx-calendar-tile`，圆角 10），四边都留缝；选中和区间两端实心、区间中间铺浅底，标记画成正圆。
- 日期 15 / 20（`--vx-calendar-line-day`），选中取 `on-*`，区间内和今天取语义色，不可选取 `disabled-text`；农历和「开始 / 结束」10 / 12（`--vx-calendar-font-sub` / `--vx-calendar-line-sub`）贴着方块底边，小字槽不占布局，整行数字对齐。
- 弹层模式点选先落在草稿上，点确定才写回模型；关闭叉、遮罩和 `close()` 都不动已提交的值。平铺模式没有确定这一步，点选当场写回。
- 区间用两个模型：`v-model:start` / `v-model:end`。点到起点之前会重新起头，再点一次起点得到一天的区间，两端都定好后再点一格从那一格重来。父级把起点写在终点后面时，浅底仍按日期先后铺开，两端文字留在各自的模型上，组件不把两个值对调。
- `minDate` / `maxDate` 之外的日子转灰不可选，目标月一天都选不了时箭头自动禁用；起止写反时整天不可选，箭头也全部停住。范围默认收到 1900-01-01 到 2100-12-31，也是农历表的边界。已选值优先：有值时显示月跟着它走，没有已选值时收窄范围才把显示月收到边界月。
- `showYearArrow` 关掉后外侧的双箭头消失，只剩按月翻，和「只能切换月份」等价。
- `marks` 按日期补底色、文案或对勾；选中和区间优先于标记，不可选的日子也不显示标记颜色。标记是正圆，和选中方块同为 36。
- `type` 同时作用于选中底色、区间浅底、文字色和确定按钮；warning 的琥珀底配深色字，区间文字用 `warning-ink`。
- 选择器挂在页面根节点，和滚动容器平级；层级默认 1000，和操作菜单、日期时间选择器同档，低于弹框（1020）和提示（1010 / 1100）。同一屏只开一个。
- 从 ThorUI `tui-calendar` 迁移：`type`（1 / 2）换成 `mode`（`single` / `range`），`isFixed` 换成 `popup`，`arrowType`（2 表示只能切换月份）换成 `showYearArrow=false`。
- `minYear` / `maxYear` 不再单独传：年份范围由 `minDate` / `maxDate` 推出，再用 1900–2100 收口。`initStartDate` / `initEndDate` 换成 `v-model` 和 `v-model:start` / `v-model:end`，`startText` / `endText` 保留。
- `fixedHeight` 不再需要：行数按当月占几周算，网格不按屏幕宽度算高度。`isActiveCurrent` 固定打开（今天只换数字颜色），`isChange` 改成独立的 `monthChange`。
- `radius` / `color` / `activeColor` / `rangeColor` / `monthArrowColor` / `yearArrowColor` / `btnBgColor` 不再需要：字号、颜色和圆角都走令牌，换品牌色用 `type` 的语义色。`status` 换成按日期匹配的 `marks`，`tui-iconfont` 换成 `vx-icon`。

## vx-form

表单容器。把一组 `vx-form-item` 收进来，按注册顺序串行校验；`validate()` 失败时可以把页面滚到第一个错误项。组件不托管数据，也不内置提交按钮：业务的值仍在各控件的 `v-model` 上，提交由页面调 `validate()` 后自己处理。

```vue
<template>
	<view class="page vx-theme-light">
		<vx-form ref="formRef" label-width="72px" label-position="left" size="md" :scroll-to-error="true">
			<vx-form-item prop="phone" :value="model.phone" :rules="phoneRules">
				<template #default="{ invalid }">
					<vx-input v-model="model.phone" label="手机号" label-width="72px" type="number"
						:invalid="invalid" required clearable placeholder="请输入手机号" />
				</template>
			</vx-form-item>
			<vx-form-item prop="notify" label="接收通知" :value="model.notify" :rules="notifyRules">
				<vx-switch v-model="model.notify" />
			</vx-form-item>
		</vx-form>
		<vx-button block type="primary" text="提交" @click="onSubmit" />
	</view>
</template>

<script setup>
	import { VxFormRule } from '@/uni_modules/vaporix-ui/libs/form'

	const formRef = ref(null)
	const model = ref({ phone: '', notify: false })
	const phoneRules: Array<VxFormRule> = [
		{ required: true, message: '请输入手机号' },
		{ type: 'phone' }
	]
	const notifyRules: Array<VxFormRule> = [{ required: true, message: '请先开启通知' }]

	const onSubmit = async () => {
		const form = formRef.value
		if (form == null) return
		const passed = await form.validate()
		if (!passed) return
		// 校验通过，业务自己发请求、跳转或埋点。
	}
</script>
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| labelWidth | string | `''` | 整组标签宽。不传时左侧宽取 `--vx-form-label-width`（80px），不写行内、不警告；传了带单位的值才写行内盖过。纯数字在开发阶段提示一次。只影响 `labelPosition="left"` 且有 `label` 的项 |
| labelPosition | `left` \| `top` | `left` | 标签在左还是在上；`top` 时标签独占一行 |
| size | `sm` \| `md` \| `lg` | `md` | 标签的字号和行距档位，下发给每个 `vx-form-item` |
| disabled | boolean | `false` | 整组禁用：校验跳过，星号仍显示；控件自己的禁用态由业务传给控件 |
| scrollToError | boolean | `true` | 校验失败后滚到第一个错误项；量不到位置时静默跳过 |

| 方法 | 说明 |
| --- | --- |
| validate() | 按注册顺序串行校验，遇到第一个失败立即停止并返回 `false`；`scrollToError` 打开时滚过去 |
| validateField(prop) | 只校验一项，返回 `Promise<boolean>`；不自动滚动，适合输入框的 `change` / `blur`；prop 没有匹配项时开发阶段提示一次，仍返回 `true` |
| clearValidate(prop?) | 不传清全部，只清错误态，不碰业务数据；受控 `error` 仍由父级改 prop 收起 |

- 不提供 `@submit` / `@fail`：表单不含提交按钮，事件没有触发源，只留方法。
- 不接收 `model`：`vx-form-item` 只认 `value`，值仍在各控件的 `v-model` 上。
- 项在 `onMounted` 向容器注册 `{ prop, order, validate, clearValidate }`，在 `onUnmounted` 摘除；`prop` 为空只做布局。同一个 `prop` 只认先注册者，控制台提示一次。
- `validate()` 串行、不并发：前一项失败时不启动后一项，错误定位也不会被后面的项抢走。
- 整组 `disabled` 时，该项跳过校验（禁用的字段不该挡住提交），星号仍显示；字段单独不可编辑时，业务不要给它 `rules`，或把它从校验里去掉。
- 容器不画底色、描边、圆角和外部间距；项与项之间的距离由页面、卡片或 `vx-white-space` 决定。

### 平台支持

- Web：错误文案另有一层隐藏的 `aria-live="polite"` 播报层；`scrollToError` 先由失败项交回矩形，外层是 `vx-page` 时滚它的滚动区，没有才补页面滚动量后调 `uni.pageScrollTo`。
- Android / iOS / 鸿蒙：没有 aria 属性；失败项在自己的作用域里量根节点，小程序和 App 里父级选择器进不了子组件，定位靠这条回传的矩形，不靠 form 往下查。接手的是 `vx-page` 滚动区或页面滚动。
- 微信小程序：`pageScrollTo` 支持 `scrollTop`；`aria-live` 不生效。
- 除 Web 的 `aria-live` 外没有平台专属属性和选择器；选择器只用一个 class 和标签名，蒸汽模式可以编译。

## vx-form-item

表单项。只负责标题、必填星号、常驻说明和错误行；控件放进默认插槽，插槽暴露 `{ invalid, error }`，把 `invalid` 传给控件的同名属性即可。校验规则由 `libs/form.ts` 的 `runFormRules` 执行。

```vue
<!-- 输入类控件：标题在控件内部，form-item 不再传 label，只接错误行 -->
<vx-form-item prop="email" :value="email" :rules="emailRules" help="用于接收发货通知">
	<template #default="{ invalid }">
		<vx-input v-model="email" label="邮箱" label-width="72px" :invalid="invalid" required
			placeholder="name@example.com" />
	</template>
</vx-form-item>

<!-- 非输入类控件：没有标题位，label 交给 form-item，星号也由它画 -->
<vx-form-item prop="notify" label="接收通知" :value="notify" :rules="notifyRules">
	<vx-switch v-model="notify" />
</vx-form-item>

<!-- 受控错误：服务端回包后写 error，清空后回到本地校验结果 -->
<vx-form-item prop="phone" :value="phone" :rules="phoneRules" :error="serverError" help="示例：13800138000">
	<template #default="{ invalid }">
		<vx-input v-model="phone" label="手机号" label-width="72px" :invalid="invalid" required />
	</template>
</vx-form-item>
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| prop | string | `''` | 字段键，同组唯一；为空时只做布局，不参与校验 |
| value | string \| number \| boolean \| string[] | `''` | 要校验的值，和控件的 `v-model` 绑同一份数据 |
| rules | VxFormRule[] | `[]` | 见下方规则表；空数组表示只做布局 |
| label | string | `''` | 只有非输入类控件才传；输入类控件的标题在控件内部 |
| required | boolean \| null | `null` | 不传时按 `rules` 里有没有 `required: true` 推断；显式 `false` 可关掉星号 |
| help | string | `''` | 常驻说明，次要色；出现错误时被错误文案替换 |
| error | string | `''` | 受控错误文案，非空时以它为准，忽略本地校验结果 |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| validate | 单项校验结束就抛一次，用于埋点和联动 | `(ok: boolean, message: string)` |

| 插槽 | 说明 |
| --- | --- |
| 默认插槽 | 控件内容，作用域 `{ invalid, error }`；把 `invalid` 传给控件的 `invalid` |

### rules

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| required | boolean | 必填。空值只跑这一项，不再继续跑格式规则 |
| min | number | 下限：字符串按长度、数字按数值、数组按元素个数 |
| max | number | 上限：同上 |
| len | number | 定长：字符串按长度、数字按数值相等、数组按元素个数 |
| pattern | string | 字符串正则，内部走 `new RegExp`；不直接传 RegExp 实例 |
| type | `phone` \| `email` \| `idcard` \| `url` \| `number` | 内置格式 |
| message | string | 失败文案；不传时用内置中文文案 |
| validator | `(value) => string \| Promise<string>` | 返回 `''` 通过，返回文案即失败；抛异常按失败处理 |

| 内置 type | 判定 |
| --- | --- |
| phone | `^1[3-9]\d{9}$`，默认「手机号格式不正确」 |
| email | `^[^\s@]+@[^\s@]+\.[^\s@]{2,}$`，默认「邮箱格式不正确」 |
| idcard | `^\d{17}[\dXx]$`，默认「身份证号格式不正确」 |
| url | `^https?:\/\/\S+$`，默认「链接格式不正确」 |
| number | `parseFloat` 后 `isFinite`，且整串必须是数字；默认「请输入数字」 |

- 空值：`''`、`null`、`undefined`、`false`（未勾选的开关 / 协议）、空数组和 `NaN`；`0` 是有效数值，不算空。空值只看 `required`，非必填直接通过，避免空字段报「格式不对」。
- 非空值依次跑 `len` → `min` / `max` → `type` → `pattern` → `validator`，第一个失败即返回。`min` / `max` / `len` 对不同类型分别按长度、数值大小和元素个数计算。
- `pattern` 写错（`new RegExp` 抛异常）按失败处理，用 `message` 或「格式不正确」，不把配置错误抛给页面。
- `validator` 可以同步返回字符串，也可以返回 Promise；抛异常时用异常的 `message`，拿不到就用「校验未通过」。
- 受控 `error` 非空时跳过本地规则，直接显示它，`validate()` 返回 `false`；父级把 `error` 清成空串后，本地错误一起收掉。
- 标题归属只有一条规则：有标题位的控件（`vx-input`、`vx-textarea`，以及 `vx-picker` / `vx-datetime` 的只读触发行）标题在控件内部，表单项**不传** `label`；`vx-switch`、`vx-checkbox-group`、`vx-radio-group`、`vx-rate`、`vx-number-box`、上传、图片这类没有标题位的控件**传** `label`，由表单项画标题行并吃 `labelWidth`。两个都出现时以表单项为准，标题在文档里约定，不在运行时重复。
- `labelPosition="top"` 时标签独占一行、`labelWidth` 不生效；左侧标签的最小高度等于控件高度，单行标题和控件垂直居中。
- 星号在标题末尾，颜色 `--vx-color-danger`；项没有 `label` 时不画星号，交给控件自己的 `required`。
- `help` 和错误共用一行：有错误显示错误，错误消失后说明回来；两者都没有时不占高度，不预留空行。错误行固定 13 / 20，单行省略，上间距 4。
- `size` 改标题的字号、行距和左侧标签的最小高度；错误行固定 `--vx-font-control-sm`，不跟着放大。
- 禁用的项跳过校验，`@validate` 仍抛一次 `true`；控件自己的禁用态由业务传给控件。
- 默认插槽内容自己带尺寸和颜色；插槽里需要独立操作的控件自己 `@click.stop`。

## vx-tabs

页签切换。同一屏放 2–5 个等宽页签，选中项加字重，再用短线、浅底胶囊或反色条标出位置。`v-model` 是当前索引，`items` 按顺序渲染。

```vue
<vx-tabs v-model="active" :items="tabs" @change="onTabChange" />

<vx-tabs v-model="active" :items="tabs" variant="soft" />
<vx-tabs v-model="active" :items="tabs" variant="inverse" />
<vx-tabs v-model="active" :items="tabs" size="lg" />
<vx-tabs v-model="active" :items="tabs" type="warning" />
<vx-tabs v-model="active" :items="tabs" bg-color="var(--vx-color-primary)"
	color="var(--vx-color-on-primary)" variant="inverse" />
<vx-tabs v-model="active" :items="tabs" :divider="false" />

<!-- 竖排：每项一整行，右侧内容由业务按 active 渲染 -->
<view class="side">
	<vx-tabs v-model="active" :items="sections" direction="vertical" />
	<view class="side__body">…</view>
</view>
<vx-tabs v-model="active" :items="sections" direction="vertical" variant="soft" :vertical-width="120" />
<vx-tabs v-model="active" :items="sections" direction="vertical" :vertical-width="0" />
```

```ts
const active = ref(0)
const tabs = [
	{ text: '正在疯抢', badge: 2 },
	{ text: '即将开始', dot: true },
	{ text: '明日预告' },
	{ text: '禁用状态', disabled: true }
]
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | `VxTabItem[]` | `[]` | 页签，按顺序等宽排列；空数组不渲染 |
| modelValue | number | `0` | 当前索引，支持 `v-model`；负数或越界不选中，非整数四舍五入 |
| variant | `line` \| `soft` \| `inverse` | `line` | 下划线、浅底胶囊、反色条；竖排不支持 `inverse` |
| direction | `horizontal` \| `vertical` | `horizontal` | 横向等宽页签，或纵向整行的侧边导航 |
| verticalWidth | number | `96` | 竖排宽度，单位 px；小于等于 0 时跟随容器撑满 |
| size | `sm` \| `md` \| `lg` | `md` | 高度、字号和角标档位 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `primary` | 选中文字、下划线和浅底胶囊的语义色 |
| divider | boolean | `true` | 底部 1px 分割线；`inverse` 始终不画 |
| bgColor | string | `''` | 整条底色，字面值或主题令牌 |
| color | string | `''` | 未选中文字色，字面值或主题令牌 |
| badgeMax | number | `99` | 计数角标封顶值 |
| badgeType | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `danger` | 角标语义色 |

`VxTabItem`：

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | string | `''` | 页签文案，建议 2–4 个字 |
| badge | number | `0` | 计数角标，小于 1 不显示 |
| dot | boolean | `false` | 只显示圆点，优先于 `badge` |
| disabled | boolean | `false` | 禁用后不响应点击，文字转灰 |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| change | 点击未选中且未禁用的页签时触发 | 索引 number |
| update:modelValue | `v-model` 同步当前索引 | 索引 number |

- 高度沿用列表行 44 / 48 / 52；选中胶囊 28 / 32 / 36；下划线固定 24 / 32 / 40 × 2px，有分割线时下移 1px 盖住底边（`--vx-tabs-indicator-out`）；导航行左右各留 12px。令牌 `--vx-tabs-indicator-*` 亮色、暗色各一份。
- `direction="vertical"` 是页签的另一种排布，不是新组件：每项占一整行，行高仍是 44 / 48 / 52，宽度默认 96px（`verticalWidth`，传 0 跟随容器）。竖排把底部下划线换成左侧 2px 竖条，高度取行高的 60%、垂直居中，颜色仍跟 `type`；选中项整行铺 `default-soft` 浅底（`soft` 外观铺对应的 `*-soft`），文字取 `*-pressed` 并加到 600 字重。
- 竖排的角标改成行内排布：文案和角标排在同一行，角标跟在文案后面、垂直居中，右侧留在 12px 内边距内侧，不再绝对定位、不压上一行的分割线；文案占满剩余宽度并单行省略，角标完整保留，`verticalWidth=96` 时四字文案省略也不会盖住文字。`badge` 超过 `badgeMax` 显示 `max+`、`dot` 优先于计数的规则与横向一致，仍由 `vx-badge` 处理。
- 竖排的 `divider` 从底部一条通栏底线变成项与项之间的 1px 横线，最后一项不画，右侧也不画竖线；竖排不支持 `variant="inverse"`，传了会按 `soft` 渲染并在开发环境提示一次。竖排不含内容区，右侧内容由业务按 `active` 自己放，`v-model` 和 `change` 语义与横向完全一致。
- `line` 只换文字和短线；`soft` 用 `*-soft` 浅底，选中文字取对应的 `*-pressed`；`inverse` 用正文色铺满整条，选中项浮一个 `surface` 胶囊，且不画分割线。`inverse` 一屏最多一条，只给顶层入口。
- `type` 表达状态，普通导航保持 `primary`；`warning` 选中文字用 `warning-ink`，下划线用 `warning-pressed`；`soft` 的选中文字用对应的 `*-pressed`。
- `items[].disabled` 只停该页签的点击：文字转灰且保持不透明，角标单独降透明度，仍占位；反色条上的未选中禁用项只降透明度，保留反色文字。点击停在页签上。不要把当前项设为禁用；禁用不要用来掩盖权限问题。
- `badge` 超过 `badgeMax` 显示 `max+`；`dot` 优先于计数。角标默认 `danger`，不参与布局，点击仍落在整格上。
- `bgColor` / `color` 是字面值，不跟随亮暗主题；传 `var(--vx-color-*)` 时才跟主题。自定义反色条时同时传 `color`，否则未选中文字在换主题后可能看不清。
- 页签只抛索引，不内置内容、路由、请求和插槽；放进卡片时关掉 `divider`，需要吸顶时放进 `vx-sticky` 并关掉页签自己的 `divider`，线交给吸顶条。
- 一屏 2–5 个，不横向滚动；更多入口改用宫格或列表。点击当前项不抛 `change`，越界索引不选中。
- 从 ThorUI `tui-tabs` 迁移：`tabs` → `items`，`field` 固定读 `text`，`badgeField` → `badge`，`isDot` → `dot`，`item.disabled` 保留。`currentTab` 的父级同步换 `v-model`，`change` 只给索引。
- `unlined` → `:divider="false"`；`backgroundColor` → `bgColor`；`color` 保留为未选中文字色；`selectedColor` 改用 `type` 的语义色；`badgeColor` / `badgeBgColor` 改用 `badgeType` 的语义色，不再接受任意字面值。`sliderWidth` / `sliderHeight` / `sliderBgColor` / `sliderRadius` / `bottom` / `scale` / `bold` / `padding` / `height` / `itemWidth` 不再需要，宽度、线宽、胶囊和字号都走令牌；`width` 由父级布局决定，组件固定占满父级。
- `isFixed` / `top` / `zIndex` 不再由页签承担：吸顶放进 `vx-sticky`，层级由页面框架决定。ThorUI 的彩色顶栏用 `variant="inverse"` 加 `bgColor` / `color` 实现，不提供渐变和横向滚动。

## vx-tabbar

自定义底部标签栏。`items` 按顺序等宽排列，`v-model` 是当前索引。字体图标跟选中色，图片图标成对传 `activeImage`；中间项可以凸起成主按钮，`action` 项只抛点击、不参与选中。

```vue
<vx-tabbar v-model="active" :items="tabs" @change="onTabChange" @click="onTabClick" />

<vx-tabbar v-model="active" :items="tabs" :fixed="false" />
<vx-tabbar v-model="active" :items="imageTabs" :fixed="false" />
<vx-tabbar v-model="active" :items="raisedTabs" :fixed="false" />
<vx-tabbar v-model="active" :items="tabs" type="success" />
<vx-tabbar v-model="active" :items="tabs" bg-color="var(--vx-color-primary-soft)" />
```

```ts
const active = ref(0)
const tabs = [
	{ text: '首页', icon: 'home' },
	{ text: '分类', icon: 'grid-2x2' },
	{ text: '消息', icon: 'bell', badge: 2 },
	{ text: '我的', icon: 'user' }
]
const imageTabs = [
	{ text: '组件', image: '/static/tabbar/components.png', activeImage: '/static/tabbar/components-active.png' },
	{ text: '接口', image: '/static/tabbar/api.png', activeImage: '/static/tabbar/api-active.png' },
	{ text: '我的', image: '/static/tabbar/mine.png', activeImage: '/static/tabbar/mine-active.png' }
]
const raisedTabs = [
	{ text: '首页', icon: 'home' },
	{ text: '发布', icon: 'plus', raised: true, action: true },
	{ text: '我的', icon: 'user' }
]
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | `VxTabbarItem[]` | `[]` | 标签栏项，一屏 3–5 个；空数组不渲染 |
| modelValue | number | `0` | 当前索引，支持 `v-model`；负数或越界不选中，非整数四舍五入 |
| size | `sm` \| `md` \| `lg` | `md` | 栏高、图标位、凸起圆钮和角标档位 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `primary` | 选中文字、字体图标和凸起圆钮的语义色 |
| fixed | boolean | `true` | 固定在页面底部；关闭后留在文档流里 |
| placeholder | boolean | `true` | 固定时补一个等高占位；只在标签栏放在页面末尾时生效 |
| safeArea | boolean | `true` | 为底部手势条留白，栏底色一直铺到屏幕底边 |
| divider | boolean | `true` | 顶部 1px 分割线 |
| bgColor | string | `''` | 整条底色，字面值或主题令牌；不传时用 `surface` |
| color | string | `''` | 未选中文字和字体图标的颜色；图片不受影响 |
| badgeMax | number | `99` | 计数角标封顶值 |
| badgeType | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `danger` | 角标语义色 |
| iconVariant | `regular` \| `fill` | `regular` | 未选中字体图标的字重；图片不受影响 |
| activeIconVariant | `regular` \| `fill` | `regular` | 选中字体图标的字重；做线性转实心时传 `fill` |
| zIndex | number | `1` | 固定时的层级，和固定页脚同档 |

`VxTabbarItem`：

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | string | `''` | 文案，建议 2–4 个字，单行省略 |
| icon | `VxIconName` | — | 字体图标名；有 `image` 时用图片 |
| activeIcon | `VxIconName` | — | 选中时的字体图标名；不传时沿用 `icon` |
| image | string | `''` | 图标图片地址，优先于字体图标；成对传 `activeImage` |
| activeImage | string | `''` | 选中时的图片地址；不传时沿用 `image` |
| badge | number | `0` | 计数角标，小于 1 不显示；超过 `badgeMax` 显示 `max+` |
| dot | boolean | `false` | 只显示圆点，优先于 `badge` |
| disabled | boolean | `false` | 禁用后不响应点击，图标、文字和角标一起转灰 |
| raised | boolean | `false` | 凸起成圆钮，浮在标签栏上沿；一个标签栏最多一个，多传时只认第一个 |
| action | boolean | `false` | 只做按钮：点击不写 `v-model`，只抛 `click`；通常和 `raised` 一起用 |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| change | 点击未选中且未禁用的普通项时触发 | 索引 number |
| click | 点击任意可用项时触发，包括当前项和 `action` 项 | 索引 number、项 `VxTabbarItem` |
| update:modelValue | `v-model` 同步当前索引 | 索引 number |

- 一屏 3–5 个，等宽排列，不横向滚动；文案 2–4 个字，放不下时先缩短文案。空数组不渲染。
- 标签栏是页面骨架，不是内容区：只切视图和抛事件，不内置路由、请求、权限和插槽。切换后的内容由业务按索引渲染。
- 栏高 48 / 56 / 64（`--vx-tabbar-height-*`），图标位 20 / 24 / 28（`--vx-tabbar-media-*`），凸起圆钮 44 / 52 / 60（`--vx-tabbar-raise-size-*`）。文案 `sm` / `md` 13 / 20，`lg` 14 / 22（`--vx-tabbar-font-*` / `--vx-tabbar-line-*`），图标和文案间距 2 / 2 / 4（`--vx-tabbar-gap-*`），不借控件字号和页面留白。
- 有凸起项时栏顶让出 22 / 24 / 26（`--vx-tabbar-raise-lift-*`），整行高 70 / 80 / 90（`--vx-tabbar-row-raised-*`）。每一列都按伸出段下移，标签仍落在同一条线上；只有圆钮是热区，透明带把点击让给页面。
- 一个标签栏最多一个凸起项，多传时只认第一个；`raised` 只是外观，`action` 才决定不参与选中。凸起项也占一列，左右项按列数等分。凸起项要带 `icon` 或 `image`，圆钮里才有内容。
- 凸起圆钮用 `type` 的实心色：`warning` 取 `warning-pressed`，图标取对应的 `on-*`，`default` 用正文色底配 `text-inverse`。圆钮不跟选中态，禁用时换成 `disabled-bg` / `disabled-text`。
- 选中态同时换文字色和字重；字体图标取 `type` 的语义色，`warning` 用 `warning-ink`。图片图标不能染色，选中态靠 `activeImage`。`activeIconVariant="fill"` 可以做线性转实心。
- `fixed` 默认打开，`placeholder` 默认打开：组件放在页面根节点的末尾，占位补出栏高和安全区，滚动区不会被压在标签栏下面。页面用 `scroll-view` + 底栏的列布局时改 `:fixed="false"`，标签栏留在文档流里。
- `safeArea` 默认打开：安全区算在栏内，底色铺到屏幕底边，图标和文案仍落在手势条之上。放进卡片、画布或已经有底部安全区的容器时关掉，避免多出一截。
- `color` / `bgColor` 是字面值，不跟随亮暗主题；传 `var(--vx-color-*)` 时跟主题。选中态仍跟 `type`，对比度由业务保证。
- `badge` 超过 `badgeMax` 显示 `max+`，`dot` 优先于计数；角标默认 `danger`，叠在图标右上角，不参与布局，点击仍落在这项的热区上。角标跟图标走：项没有 `icon` / `image` 时不渲染角标；纯文字标签栏不放角标。
- `disabled` 只停这一项：文字和字体图标转 `disabled-text`，图片压到 0.4，角标单独降透明度；不抛 `change` 和 `click`。当前项不要设成禁用。
- 点击 `click` 停在标签栏上，外层卡片不会再收到同一次点击。点击当前项不抛 `change`，只抛 `click`，可以拿来做「再点一次回顶」。
- 使用本组件时不要再配置 `pages.json` 的 `tabBar`，否则两条底栏会叠在一起；同一屏也只有一个底部导航。需要浮层时按 DESIGN.md 的层级排，标签栏固定层级 1，低于吸顶条 10 和导航栏 20。
- 标签栏是 `view` 组合，Web 端不进入 Tab 顺序；需要键盘和读屏支持时，由页面另给链接或原生入口。
- 从 ThorUI `tui-tabbar` 迁移：`tabBar` → `items`，`current` 的父级同步换 `v-model`；`text` 保留；`name` / `activeName` → `icon` / `activeIcon`，`iconPath` / `selectedIconPath` → `image` / `activeImage`；`num` → `badge`，`isDot` → `dot`，`hump` → `raised`；`verify` / `pagePath` 去掉，登录校验和路由在 `click` 里做；`click` 的回调对象改成 `(index, item)`。
- `color` 保留为未选中文字色，`selectedColor` 改用 `type` 的语义色；`backgroundColor` → `bgColor`；`badgeColor` / `badgeBgColor` 改用 `badgeType`。`iconSize` 不再逐项传，交给 `size`；`isFixed` → `fixed`，新增 `placeholder` 和 `safeArea`；`unlined` → `:divider="false"`；`backdropFilter` 去掉，栏底就是 `surface`；`zIndex` 保留。

## vx-drawer

抽屉。从屏幕的一条边滑出，左右默认宽 280、上下默认高 45%；遮罩铺满页面，点遮罩或关闭叉收起。正文、固定底栏和头部都可以按需组合，长内容在正文里滚动。

```vue
<vx-drawer v-model:show="drawerVisible">
	<view class="drawer-basic">
		<vx-button block type="danger" shape="pill" text="关闭抽屉" @click="drawerVisible = false" />
	</view>
</vx-drawer>

<vx-drawer v-model:show="filterVisible" title="筛选" closable :body-padded="false">
	<vx-tag v-for="item in filters" :key="item.text" :text="item.text" />
	<template #suffix>
		<vx-button block type="primary" text="查看 128 件商品" />
	</template>
</vx-drawer>

<vx-drawer v-model:show="shareVisible" position="bottom" height="42%">
	<view class="drawer-share">分享面板</view>
</vx-drawer>

<vx-drawer v-model:show="navVisible" position="left" width="86%" title="全部菜单">
	<vx-list-view title="订单" variant="plain">...</vx-list-view>
</vx-drawer>
```

```ts
const drawerVisible = ref(false)
const filterVisible = ref(false)
const shareVisible = ref(false)
const navVisible = ref(false)
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| show | boolean | `false` | 显示抽屉，支持 `v-model:show`；点遮罩或关闭叉回写 `false` |
| position | `left` \| `right` \| `top` \| `bottom` | `right` | 滑出方向 |
| width | string | `''` | 左右抽屉宽度，需带单位，如 `320px`、`86%`；不传用 `--vx-drawer-width`，上下抽屉忽略 |
| height | string | `''` | 上下抽屉高度，需带单位，如 `320px`、`42%`；不传用 `--vx-drawer-height`，左右抽屉忽略 |
| title | string | `''` | 头部标题；和 `closable`、`prefix`、`extra` 都没有时不渲染头部 |
| closable | boolean | `false` | 头部右侧显示关闭叉，点击收起并抛 `close` |
| bodyPadded | boolean | `true` | 正文保留四边内边距 16；列表、图片贴边时传 `false` |
| maskClosable | boolean | `true` | 点击遮罩收起并抛 `close` |
| maskColor | string | `''` | 自定义遮罩色，字面值 |
| bgColor | string | `''` | 自定义面板底色，字面值 |
| zIndex | number | `1000` | 浮层层级 |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| close | 用户点可关闭的遮罩、关闭叉，或页面调 `cancel()` 时触发；默认先收起 | 无 |
| update:show | `v-model:show` 同步，收起时回传 `false` | boolean |

| 插槽 | 说明 |
| --- | --- |
| default | 正文，超过面板高度时在内部滚动 |
| prefix | 头部左侧，标题前的图标或标识；颜色和尺寸自己带 |
| extra | 头部右侧，标题后的标签或状态；关闭叉仍在更右侧 |
| suffix | 固定底栏，放 1–2 个动作；不参与正文滚动 |

| 方法 | 说明 |
| --- | --- |
| open() | 打开抽屉 |
| close() | 立刻收起，不抛 `close` |
| cancel() | 收起并抛 `close`，给页面 `onBackPress` 用 |

- 左右抽屉占满高度、宽 280（`--vx-drawer-width`）；上下抽屉占满宽度、高 45%（`--vx-drawer-height`）。面板最大不超出整屏；`width` / `height` 必须带单位，App 上也不要写 `calc`。
- 面板贴住屏幕的一侧不圆角，朝向页面的两角用 `lg` 12；`surface` 底、`--vx-shadow-lg`，不加描边。遮罩用 `--vx-color-mask`，只压页面。
- 头部高 52（沿用列表行 `md`）：标题 17 / 24 / 600、单行省略；`prefix` 在标题前，`extra` 在标题后；关闭叉热区 44、图标 18，点击和遮罩走同一个 `close`。
- 正文是唯一的滚动区（`scroll-view`），头部和底栏固定；默认四边内边距 16，`bodyPadded=false` 让列表、图片贴边。
- `suffix` 上边一条 1px `divider`，内边距 12 / 16；底栏放 1–2 个动作，不做主导航、长表单和页面级流程。
- 点可关闭的遮罩收起并抛 `close`；`maskClosable=false` 时点遮罩不关闭也不抛 `close`，要保留 `closable` 或内容里的关闭按钮。`close()` 只收起，不抛 `close`。
- 四个方向的安全区都由面板内边距承担：左右抽屉让开顶部、所在边的侧边距和底部手势条，上下抽屉让开顶部或底部。
- 抽屉挂在页面根节点，和滚动容器平级；不要放进 `scroll-view`、卡片或 `fixed` 容器。同一屏只开一个，不要和对话框、操作菜单叠加。
- 层级默认 1000，和操作菜单、日期时间选择器、日历弹层同档；低于消息提示 1010、弹框 1020、加载浮层 1050、轻提示 1100。Web 上遮罩淡入、面板从所在边滑入；App 5.26 直接出现，不做退场。第一次打开后根节点常驻，关闭只切 `display: none`，原生子组件不销毁；原生层在 App 上反复创建会整层不画。
- 关闭后节点仍留在页面里，正文的 `scroll-view` 也还活着；需要完全释放时用 `v-if` 包住整个抽屉。
- 从 ThorUI `tui-drawer` 迁移：`visible` 换成 `v-model:show` / `show`，`mode` 换成 `position`，`backgroundColor` 换成 `bgColor`。`mask` 不再提供，抽屉始终带遮罩；需要常驻侧栏时用页面布局。
- ThorUI 的 `maskZIndex` 并进 `zIndex`，遮罩和面板共用一档；`zIndex` 默认从 990 改为 1000。宽度和高度不再靠插槽内容撑开，改用 `width` / `height`；关闭仍抛 `close`，`close()` 方法不抛。
- 自定义宽度不要再用外层 `style` 写死：左右传 `width`，上下传 `height`；内容长时保持正文滚动，不要给面板加第三层滚动。

## vx-swipe-action

滑动菜单。列表行向左滑，右侧露出两三条动作；内容由默认插槽决定，点内容、点动作或滑回来都能收起。

```vue
<vx-swipe-action v-for="order in orders" :key="order.id" :name="order.id" :actions="actions"
	@select="onSelect">
	<vx-list-cell :title="order.title" :description="order.meta" :value="order.status" :divider="false" />
</vx-swipe-action>

<vx-swipe-action v-model:open="open" :actions="actions" :close-on-select="false" />
<vx-swipe-action multiple :actions="actions" />
<vx-swipe-action :extra-width="132">
	<vx-list-cell title="自定义菜单" :divider="false" />
	<template #extra>
		<view class="custom-menu">
			<view class="custom-menu__btn" @click="onFavorite"><vx-icon name="star" /></view>
			<view class="custom-menu__btn" @click="onDelete"><vx-icon name="trash" /></view>
		</view>
	</template>
</vx-swipe-action>
```

```ts
const actions = [
	{ text: '删除', type: 'danger' },
	{ text: '修改', type: 'primary' },
	{ text: '收藏', type: 'default' }
]

const onSelect = (index: number, item: VxSwipeActionItem, name: string) => {
	console.log(name, index, item.text)
}
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| name | string | `''` | 这一行的业务标识，原样带回 `select` / `change` |
| actions | `VxSwipeActionItem[]` | `[]` | 右侧动作，1–3 条；空数组时改用 `extra` 插槽 |
| open | boolean | `false` | 是否展开，支持 `v-model:open` |
| swipeable | boolean | `true` | 手势滑出菜单；`false` 只停手势，程序控制仍可用 |
| closeOnSelect | boolean | `true` | 点动作后收起；`false` 时保持展开 |
| multiple | boolean | `false` | 允许同组同时展开多行；默认展开一行时收起同组其他行 |
| group | string | `''` | 互斥分组，默认按页面：不传时同页面的行共用一个组；一个页面上多个列表要各管各的，传不同的值 |
| extraWidth | number | `80` | `extra` 插槽的露出宽度，单位 px；没有 actions 且插槽存在时生效 |

`VxSwipeActionItem`：

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | string | — | 动作文案，建议 2–3 个字，单行省略 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `default` | 语义色；default 用浅灰底和正文色 |
| icon | `VxIconName` | — | 可选字体图标，排在文案上方 |
| iconVariant | `regular` \| `fill` | `regular` | 图标字重；扩展图标要先引入 `icons-extend.css` |
| width | number | `72` | 这一项的宽度，单位 px；小于等于 0 时按默认值 |
| disabled | boolean | `false` | 禁用，不响应点击，不抛 `select` |
| bgColor | string | `''` | 自定义底色，字面值 |
| color | string | `''` | 自定义文字和图标颜色，字面值；禁用时不生效 |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| select | 点击可用的动作时触发，默认先收起 | 索引 number、动作项、`name` string |
| change | 组件内展开状态变化时触发；外部改模型不回抛 | `open` boolean、`name` string |
| update:open | `v-model:open` 同步 | `open` boolean |

| 插槽 | 说明 |
| --- | --- |
| default | 行内容，高度决定整行高度；通常放 `vx-list-cell` 或自己的行布局 |
| extra | 自定义操作菜单，`actions` 为空时使用；宽度由 `extraWidth` 决定，点击默认收起 |

| 方法 | 说明 |
| --- | --- |
| open() | 展开菜单，不受 `swipeable` 限制 |
| close() | 收起菜单；已收起时不重复抛 `change` |
| toggle() | 在展开和收起之间切换 |

- 动作宽 72（`VX_SWIPE_ACTION_ITEM_WIDTH`），`extra` 宽 80（`VX_SWIPE_ACTION_EXTRA_WIDTH`）；手势常量在 `libs/swipe-action.ts`，和本文件、DESIGN.md 一起改。
- 菜单固定在右侧、压在内容下面，内容单独平移；不要把菜单放进被平移的内容容器，uni-app x Web 的 view 默认 `overflow: hidden` 会把它裁掉。
- 左滑超过动作总宽的一半、或 24px / 250ms 内的快速轻扫展开；拖动过程不挂过渡，松手用 `--vx-duration-normal`。横向超过 8px 且大于纵向后才接管，并拦住这一笔外层滚动；纵向先超过 8px 则整段手势交还给页面。
- 展开期间一行只保留一个透明保护层，点内容只收起，不触发下层行点击；滑动结束补 300ms 点击保护。
- 默认只展开一行，同组内生效：不传 `group` 时按页面分组，同页的普通列表共用一个组，导航栈下层的页面和别的页面不受影响；一个页面上多个列表要各管各的，各传一个 `group`。横向接管、`open()` 或把 `v-model:open` 写成 true 时，同组其他已展开的行收起并抛 `change(false, name)`。`multiple=true` 只影响当前行展开时是否收起同组的其他行，不另开组。
- 没有 `actions` 也没有 `extra` 时不渲染菜单，手势不移动内容。
- `swipeable=false` 只停手势；`v-model:open`、`open()` 仍能展开，点内容仍能收起。
- 删除等不可逆动作先收起菜单，再由业务用 `vx-modal` 确认；组件只抛 `select`，不碰数据、路由和请求。
- 从 ThorUI `tui-swipe-action` 迁移：`@click` → `@select`（参数 `index, item, name`），`actions[].name` → `text`，`background` → `bgColor`，`fontsize` 不再需要（固定 15 / 22 / 500），`icon` 改成字体图标名（不再接受图片地址），`width` 保留（px）。
- `closable` → `closeOnSelect`（含义相同）；`forbid` → `swipeable`（取反）；`open` 改成 `v-model:open` 或 `open()`；`params` → `name`；`operateWidth` → `extraWidth`。
- `showMask` 不再提供：默认同组只展开一行，靠内部登记收起其他行，不铺全屏透明遮罩；需要多行同时展开时传 `multiple`（对应 ThorUI `showMask=false`）。
- `nameField` / `iconField` / `backgroundColor` 不再提供：字段固定为 `text` / `icon`，行底色固定 `surface`，外观由外层列表或卡片负责；`actions` 为空时用 `extra` 插槽自定义菜单。

## vx-navigation-bar

自定义导航栏。标题居中，内置返回，左右和标题行下面都留插槽；固定时默认在文档流里占高，背景可透明、可渐变，也可以跟着滚动渐显。

页面在 `pages.json` 里关掉原生导航栏，导航栏放在页面根节点，和 `scroll-view` 平级：

```json
{
	"path": "pages/order/detail",
	"style": {
		"navigationStyle": "custom"
	}
}
```

```vue
<template>
	<view class="page vx-theme-light">
		<vx-navigation-bar title="订单详情" back divider @back="goBack">
			<template #suffix>
				<view class="nav-action" @click="openMessage">
					<vx-icon name="bell" size="lg" />
				</view>
			</template>
		</vx-navigation-bar>

		<scroll-view class="page__body" direction="vertical" @scroll="onScroll">
			<vx-list-cell title="收货地址" description="上海市浦东新区" value="已确认" :clickable="false" />
		</scroll-view>
	</view>
</template>

<script setup>
	const goBack = () => {
		uni.navigateBack()
	}

	const onScroll = (event: UniScrollEvent) => {
		console.log(event.detail.scrollTop)
	}
</script>
```

头图压在导航栏下面时关掉占位，背景用 `transparent`：

```vue
<vx-navigation-bar title="城市漫游" back transparent color="#ffffff" :placeholder="false" />
<image class="hero" src="/static/city.jpg" mode="aspectFill" />
```

搜索框放在 `extra`，标题行保持 44：

```vue
<vx-navigation-bar title="鲜果商城" back>
	<template #suffix>
		<vx-badge absolute :value="3" :offset-y="-4">
			<view class="nav-action">
				<vx-icon name="message-square" size="lg" />
			</view>
		</vx-badge>
	</template>
	<template #extra>
		<view class="nav-search">
			<vx-input v-model="keyword" placeholder="搜索商品" shape="pill" clearable>
				<template #prefix>
					<vx-icon name="search" size="sm" color="var(--vx-color-text-secondary)" />
				</template>
			</vx-input>
		</view>
	</template>
</vx-navigation-bar>
```

滚动渐显：`fade` 打开后，背景从 0 增到 `maxOpacity`，`change` 回传 0–1。标题颜色按透明度自己切：

```vue
<vx-navigation-bar title="商品详情" back fade :placeholder="false" :scroll-top="scrollTop"
	:color="navColor" @change="onNavChange" />

<script setup>
	const scrollTop = ref(0)
	const navOpacity = ref(0)
	const navColor = computed((): string => {
		return navOpacity.value > 0.6 ? 'var(--vx-color-text)' : '#ffffff'
	})

	const onScroll = (event: UniScrollEvent) => {
		scrollTop.value = event.detail.scrollTop
	}

	const onNavChange = (opacity: number) => {
		navOpacity.value = opacity
	}
</script>
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | string | `''` | 标题，单行省略；默认插槽有内容时不渲染 |
| color | string | `''` | 标题和内置返回的颜色，字面值或主题令牌 |
| bgColor | string | `''` | 背景色或渐变，字面值或主题令牌；不传时用 `surface` |
| divider | boolean | `false` | 底部 1px 分割线；透明和渐显未到 0.85 时不画 |
| dividerColor | string | `''` | 分割线颜色，字面值或主题令牌 |
| shadow | boolean | `false` | 用 `--vx-shadow-md` 代替分割线 |
| fixed | boolean | `true` | 固定在页面顶部；关闭后按文档流排在页面里 |
| placeholder | boolean | `true` | 固定时在文档流里占同高；头图场景关掉 |
| statusBar | boolean | `true` | 顶部为状态栏留白；非沉浸式或嵌在原生导航下面时关掉 |
| back | boolean | `false` | 显示内置返回箭头；`prefix` 插槽有内容时不渲染 |
| transparent | boolean | `false` | 背景始终透明，忽略 `fade` / `maxOpacity`、分割线和阴影 |
| fade | boolean | `false` | 背景透明度跟随 `scrollTop` |
| scrollTop | number | `0` | 滚动距离，绑定 `scroll-view` 的 `@scroll` |
| scrollRatio | number | `0.3` | 滚过导航栏宽度 × 该值时达到 `maxOpacity` |
| maxOpacity | number | `1` | 渐显上限 0–1 |
| zIndex | number | `20` | 固定时的层级，高于吸顶条、低于消息提示 |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| back | 点击内置返回箭头 | 无 |
| ready | 首次测量完成 | `VxNavigationBarInfo` |
| change | 渐显透明度变化 | `opacity` number，0–1 |

`VxNavigationBarInfo`：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| width | number | 导航栏宽度 |
| height | number | 导航栏总高度，含状态栏留白和第二行 |
| statusBarHeight | number | 状态栏留白高度 |
| opacity | number | 测量时的背景透明度 |
| windowWidth / windowHeight | number | 窗口宽高 |

| 插槽 | 说明 |
| --- | --- |
| default | 替换标题，适合搜索框或分段控件；窄屏单行省略由内容自己处理 |
| prefix | 替换返回区，放头像或自定义返回按钮 |
| suffix | 右侧动作，建议只放一个；自己带 44 热区，小程序上要为胶囊让出宽度 |
| extra | 标题行下面的第二行，放搜索、筛选或页签 |

| 方法 | 说明 |
| --- | --- |
| refresh() | 重新测量高度和宽度；`extra` 异步变高、窗口尺寸变化后调用 |

- `fixed` 打开时页面根节点下直接放导航栏，默认占位会把下面内容推到安全区之外；不要放进 `scroll-view`，否则占位会跟着滚动走。
- 状态栏留白取 `--uni-safe-area-inset-top`；Web 上没有状态栏，变量为 0。页面要使用 `navigationStyle: custom`，否则原生导航栏仍在，组件会排在它下面。
- 分割线和阴影只在背景透明度到 0.85 以上时出现；`shadow` 打开后不再画分割线。透明和渐显初期保持安静。
- 渐显只改背景层，标题、图标和插槽始终不透明；`change` 在透明度真的变化时抛一次，不跟着每次滚动重复抛同一个值。
- 头图压在导航栏下面时同时关掉 `placeholder`，滚动内容才会从屏幕顶部开始；否则占位会把头图推下去。关掉后头图里的标题和按钮自己补顶部留白，高度可以从 `ready` 取。
- 小程序右上角的胶囊由组件让出，`suffix` 可用宽度会变窄；更多动作放进 `extra`，不要缩小字号硬塞。
- 头图、品牌底色和渐变用 `bgColor` / `transparent`；自定义颜色是字面值，亮暗主题和对比度由业务保证。
- 从 ThorUI `tui-navigation-bar` 迁移：`isOpacity` → `fade`（默认关闭），`isImmersive` → `statusBar`，`isFixed` → `fixed`，`splitLine` → `divider`，`backgroundColor` → `bgColor`，`isCustom` → 默认插槽 / `extra`。
- `@init` → `@ready`，`@change` 参数从对象改成 opacity 数字；`backdropFilter` 和 `dropDownHide` 不再提供。
- `zIndex` 默认从 996 改成 20；内置返回的热区由组件补足 44，`suffix` 里的动作自己包一层 44 热区，不再需要写 `margin-top` 或固定层。

## vx-status-bar

状态栏。为系统状态栏留高并铺底色，系统时间和信号仍由平台绘制。默认跟随 `--uni-safe-area-inset-top`，也可以用 `height` 覆盖；支持固定占位、透明、滚动渐显、横屏安全区和默认插槽，`ready` 回传实测高度。

```vue
<template>
	<view class="page vx-theme-light">
		<vx-status-bar fixed @ready="onReady" />

		<view class="page__head">
			<text class="page__title">订单详情</text>
		</view>

		<scroll-view class="page__body" direction="vertical">
			<vx-list-cell title="收货地址" description="上海市浦东新区" :clickable="false" />
		</scroll-view>
	</view>
</template>

<script setup>
	import { VxStatusBarInfo } from '@/uni_modules/vaporix-ui/components/vx-status-bar/props'

	const onReady = (info: VxStatusBarInfo) => {
		// info.height 是实际高度，含 height 覆盖；给固定内容补间距时用它
	}
</script>
```

```vue
<!-- 头图从屏幕顶部铺下来，状态栏只留高度。 -->
<view class="hero">
	<vx-status-bar transparent />
	<view class="hero__head">
		<text class="hero__title">山谷里的清晨</text>
	</view>
</view>
```

```vue
<!-- 固定并随滚动渐显；scrollTop 绑定 scroll-view 的 @scroll。 -->
<vx-status-bar fixed fade :scroll-top="scrollTop" :scroll-ratio="0.3" :max-opacity="1" />
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| height | number | `0` | 固定高度，单位 px；`0` 跟随系统状态栏，超过 200 按 200 |
| bgColor | string | `''` | 底色，字面值、渐变或主题令牌；不传用 `surface` |
| transparent | boolean | `false` | 背景始终透明，忽略 `fade` / `maxOpacity`；适合头图 |
| fixed | boolean | `false` | 固定在页面顶部 |
| placeholder | boolean | `true` | 固定时在文档流里占同高；头图场景关掉 |
| zIndex | number | `20` | 固定时的浮层层级，和导航栏同档 |
| safeArea | boolean | `true` | 插槽内容让开左右安全区 |
| align | `'start'` \| `'center'` \| `'end'` | `'center'` | 插槽内容的水平对齐 |
| fade | boolean | `false` | 背景透明度跟随 `scrollTop` |
| scrollTop | number | `0` | 滚动距离，绑定 `scroll-view` 的 `@scroll` |
| scrollRatio | number | `0.3` | 滚过条宽 × 该值时达到 `maxOpacity` |
| maxOpacity | number | `1` | 渐显上限 0–1 |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| ready | 挂载后抛一次；调 `refresh()` 或改 `height` 后重测再抛 | `VxStatusBarInfo` |

`VxStatusBarInfo`：`height` 实际高度（含 `height` 覆盖）、`statusBarHeight` 系统上报值（Web 为 0）、`windowWidth`、`windowHeight`，都是 number。

| 插槽 | 说明 |
| --- | --- |
| 默认插槽 | 自定义顶带。App 上会被系统状态栏盖住，只用于 Web 和隐藏系统状态栏的页面 |

| 方法 | 说明 |
| --- | --- |
| refresh() | 重新读窗口信息、测量并再抛 `ready`；旋转、分屏和异步布局后调用 |

- 默认高度取 `--uni-safe-area-inset-top`：App 为状态栏与刘海高度，Web 为 0，小程序看自定义导航。`height` 是整条高度，不和系统高度相加。
- 默认底色 `surface`，页面根节点要加 `vx-theme-light` 或 `vx-theme-dark`。`bgColor` 是字面值，接收颜色、渐变和 `var(--vx-color-*)`。
- 系统时间、信号和电池由平台绘制，组件只管底色和留白。系统前景颜色在 `pages.json` 的 `navigationBarTextStyle` 或系统配置里设置，组件不改这一层。
- `fixed` 时默认补占位，滚动内容从占位下方开始；`:placeholder="false"` 让条压在内容上，首屏内容用 `ready` 的高度自己补间距。
- `transparent` 只去掉底色，高度和安全区照旧。非固定时它作为头图里的第一段占位；固定时配合 `placeholder=false` 盖在头图上。
- `fade` 按 `scrollTop / (条宽 × scrollRatio)` 算透明度，默认 0.3。背景单独一层，插槽内容不跟着淡；`transparent` 打开时 `fade` 和 `maxOpacity` 都不生效。
- 插槽左右各留 16，横屏再让开左右安全区。`align` 默认居中；插槽里的整条横幅可以用 `width: 100%` 铺到两端。App 上不要把主操作和信息放在这里。
- 同一屏只放一只状态栏：导航栏页面用 `vx-navigation-bar` 的 `statusBar`，不要再叠；底部安全区归 tabBar、页脚和弹层。
- 固定条挂在页面根节点，和滚动容器平级；不放进 `scroll-view`、卡片或带 `transform` 的容器。旋转、分屏后调 `refresh()`。
- 不加圆角、描边、阴影和动画；渐显跟手，不加过渡。Web 端是 `view` 组合，不进入 Tab 顺序，也没有点击。
- 从 ThorUI `tui-status-bar` 迁移：`background` 改成 `bgColor`，默认从透明改为 `surface`；`isFixed` 改成 `fixed`；`zIndex` 默认从 998 收到 20；`init` 改成 `ready`，参数换成 `VxStatusBarInfo`；新增 `height`、`transparent`、`placeholder`、`safeArea`、`align`、`fade` / `scrollTop` / `scrollRatio` / `maxOpacity` 和 `refresh()`。

## vx-rolling-news

滚动消息。一条一条轮播新闻、热词和通告，纵向往上或横向往左；当前条滑出、下一条滑入，走到头从第一条接着走。默认 3 秒一条，按下暂停，两侧插槽可以放标签、图标和短操作。

```vue
<vx-rolling-news :items="news" icon="volume-high" arrow @click="openNews" />

<vx-rolling-news :items="news" direction="horizontal" icon="volume-high" />
<vx-rolling-news :items="news" variant="soft" icon="volume-high" />
<vx-rolling-news :items="news" variant="plain" size="sm" :clickable="false" />
<vx-rolling-news :items="news" shape="pill" :interval="1200" :autoplay="false" />

<vx-rolling-news :items="hotSearch" variant="soft" shape="pill" icon="search">
	<template #prefix>
		<vx-tag type="danger" variant="soft" size="sm" text="热" />
	</template>
	<template #suffix>
		<view class="more" @click="refresh">
			<text class="more__text">换一批</text>
		</view>
	</template>
</vx-rolling-news>
```

```ts
const news = [
	{ id: 'n1', text: '致力发展负责任的人工智能 中国发布八大治理原则' },
	{ id: 'n2', text: '格兰仕暗示拜访拼多多后遭天猫打压，拼多多高层赞其有勇气' },
	{ id: 'n3', text: '阿里计划将每股普通股拆为 8 股，增加筹资灵活性' }
]
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | `VxRollingNewsItem[]` | `[]` | 消息列表，按顺序轮播；空数组不渲染 |
| direction | `vertical` \| `horizontal` | `vertical` | 纵向往上走一格，横向往左走一格 |
| variant | `card` \| `soft` \| `plain` | `card` | 描边卡片、浅底、透明 |
| shape | `rounded` \| `pill` \| `square` | `rounded` | 外轮廓；描边占位不随形状变化 |
| size | `sm` \| `md` \| `lg` | `md` | 行高 32 / 40 / 48，字号 13 / 15 / 17 |
| icon | `VxIconName` | — | 左侧图标；不传时左侧留空 |
| iconColor | string | `''` | 左侧图标颜色，默认 `primary` |
| bgColor | string | `''` | 底色，字面值或主题令牌 |
| color | string | `''` | 文案颜色，字面值或主题令牌 |
| interval | number | `3000` | 两次切换的间隔，单位毫秒 |
| autoplay | boolean | `true` | 自动轮播；关掉后停在第一条 |
| arrow | boolean | `false` | 右侧箭头；传 `suffix` 时以插槽为准 |
| clickable | boolean | `true` | 整条可点；静态展示传 `false` |

`VxRollingNewsItem`：

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | string | `''` | 文案，单行省略 |
| id | string | — | 业务标识，原样带回 `click` |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| click | 点击整条时触发，`clickable=false` 不抛 | 索引 number、消息对象 `VxRollingNewsItem` |

| 插槽 | 说明 |
| --- | --- |
| prefix | 替换左侧图标，放标签、头像或自定义图形 |
| suffix | 替换右侧箭头，放短操作、标签或关闭按钮 |

- 行高走 `--vx-rolling-news-height-*`（32 / 40 / 48），和控件三档同值但不并入；1px 描边含在这档里，滑层和热区用 `--vx-rolling-news-inner-*`（30 / 38 / 46）。字号取 `--vx-font-*`，左右内边距 12 / 16，图标 14 / 18 / 22 跟档位。
- 两层用 `transform` 位移：当前条滑出、下一条滑入，落位后两层在视口外对调，不往回滚；过渡 220ms，和 `--vx-duration-normal` 对齐，常量在 `libs/motion.ts`。
- 间隔从这一格开始算，`interval` 就是两次切换之间的时间，220ms 过渡包含在内；小于等于 0 按 3000 处理；改间隔只重新计时，换方向从第一条重来。
- 只有一条时不轮播，也不铺第二层；空数组不渲染。换成新数组或改某一条文案会回到第一条。
- 按下整条时暂停，松手后重新计时；Web 上的鼠标点按不触发这条逻辑。
- `prefix` / `suffix` 是独立目标，点它们不触发整条的 `click`；传了插槽就不再渲染内置图标或箭头。
- `card` 给页面上的独立通告条，`soft` 给工具条和搜索框，`plain` 放进卡片且不再补左右内边距。
- `icon` 是唯一的强调色，默认 `primary`；表达状态时用 `iconColor` 换成对应的 `*-ink` 或 `*-pressed`，扩展图标要先引入 `icons-extend.css`。
- `bgColor` / `color` / `iconColor` 是字面值，对比度由业务保证；跟主题时传 `var(--vx-color-*)`。
- 组件只承载轮播、点击和两侧插槽，不做详情、路由、请求和关闭逻辑；需要关闭或刷新时把按钮放进 `suffix`。
- 从 ThorUI `tui-roll-news` 迁移：`list` → `items`，`prop` 去掉，节点固定读 `text`（字段不同时先映射），`vertical` → `direction`，`height` / `width` / `size` / `padding` / `radius` / `background` 都去掉，改由 `size`、`shape`、`variant` 和 `bgColor` 表达；`lines` 不再支持，文案固定单行省略。
- `bold` 与自定义字号不再开放，文案固定 400；`leftClick` / `rightClick` 去掉，`prefix` / `suffix` 里的内容自己处理点击。`click` 参数从 `{ index, item }` 改成 `(index, item)`，和图片组合、滑动菜单一致。

## vx-notice-bar

通告栏。一条公告的展开方式：默认单行省略，`wrap` 换行，`scrollable` 在文字超出视口时横向滚动。默认 `warning` 琥珀浅底，普通公告换 `info`，中性说明换 `default`；支持语义实心、透明、自定义颜色、图标、关闭和两侧插槽。

```vue
<vx-notice-bar :text="notice" icon="volume-high" closable @click="openNotice" @close="dismiss" />

<vx-notice-bar :text="notice" wrap />
<vx-notice-bar :text="notice" type="info" variant="solid" shape="rounded" />
<vx-notice-bar :text="longNotice" scrollable :speed="80" icon="volume-high" />

<vx-notice-bar v-model:show="visible" :text="notice" type="danger" icon="alert-triangle" closable
	active-mode="forwards" @click="openNotice" />

<vx-notice-bar :text="notice" type="primary">
	<template #prefix>
		<vx-tag type="primary" variant="soft" size="sm" text="公告" />
	</template>
	<template #suffix>
		<view class="more" @click.stop="openNotice">
			<text class="more__text">查看</text>
		</view>
	</template>
</vx-notice-bar>
```

```ts
const notice = '受台风影响，明天部分线路停运，出行前请查询最新时刻。'
const longNotice = '激发人才创新活力 携手全球合作共赢——第十九届中国国际人才交流大会在深圳隆重举行！'
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | string | `''` | 通告文案；传了默认插槽时以插槽为准，滚动模式只读这一项 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `warning` | 语义色 |
| variant | `soft` \| `solid` \| `plain` | `soft` | 语义浅底、语义实心、透明 |
| size | `sm` \| `md` \| `lg` | `md` | 高度 32 / 40 / 48，文案 13 / 15 / 17，图标 14 / 18 / 22 |
| shape | `rounded` \| `pill` \| `square` | `square` | 外轮廓；默认平角通栏 |
| icon | `VxIconName` | — | 左侧图标；传了 prefix 插槽时以插槽为准 |
| iconColor | string | `''` | 左侧图标和关闭叉颜色；默认跟随文案前景 |
| wrap | boolean | `false` | 允许换行；`scrollable` 打开时忽略 |
| scrollable | boolean | `false` | 文字超出视口时横向滚动；只对 text 生效 |
| speed | number | `100` | 滚动速度，单位 px/s；0 和负数回到 100，其余收在 20–600 |
| activeMode | `backwards` \| `forwards` | `backwards` | 第一轮从右侧入场，或直接从左侧起点开始 |
| closable | boolean | `false` | 显示关闭叉；点击收起并发 close |
| bgColor | string | `''` | 底色，字面值或主题令牌 |
| color | string | `''` | 文案颜色，字面值或主题令牌；不传 iconColor 时图标一起跟随 |
| clickable | boolean | `true` | 整条可点；静态展示传 false |
| show | boolean | `true` | 显隐，支持 `v-model:show` |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| click | 点击整条时触发，`clickable=false` 不抛 | — |
| close | 点关闭叉或调 `close()` 时触发；父级改 `show` 不抛 | — |

| 插槽 | 说明 |
| --- | --- |
| default | 替换 text，用来放自定义静态内容；不参与滚动 |
| prefix | 替换左侧图标，放标签、头像或自定义图形 |
| suffix | 关闭叉前面的右侧内容，放「查看」、标签或刷新 |

| 方法 | 说明 |
| --- | --- |
| open() | 显示；已经显示时重新测量滚动宽度 |
| close() | 收起并发 close |
| refresh() | 重新测量文字和视口；字体异步落定、容器宽度变化后调用 |

- 通告栏只显示一条消息。多条消息轮播用 `vx-rolling-news`，不要用两个组件拼在一起。
- 单行默认省略；`wrap` 打开后高度由内容撑开，最小高度仍取当前档位。`scrollable` 优先于 `wrap`，滚动固定单行。
- 滚动只读 `text`：文字宽度和视口宽度都要能测。传了默认插槽时保持静态，不参与位移。文字放得下时停在原位，不空转。
- 滚动用 `transition` 的 `transform` 匀速位移，5.26 的 App 端不依赖关键帧。时长按 `(视口宽 + 文字宽) / speed` 计算；第一轮 `forwards` 少走一个视口宽。一轮走完在两端都看不见的位置复位，再从右侧进入。
- 宽度测量失败会重试三次，仍失败就按静态展示。容器宽度变化、字体异步落定后调 `refresh()`；改 `text`、`size`、`icon`、`closable` 会自动重测，改 `speed` / `activeMode` 从第一轮重来。
- `soft` 用对应的 `*-soft` 底，文案和图标取 `*-pressed`，warning 用 `warning-ink`；`solid` 用语义实心底配 `on-*`，warning 配 `on-warning`；`default` 实心是正文色反相底配反色字；`plain` 透明且不收左右内边距。
- 自定义 `bgColor` 只改底色，`color` 改文案并作为图标默认色，`iconColor` 只改图标和关闭叉；组件不做明暗推导。跟主题时传 `var(--vx-color-*)`，字面值由业务保证对比度。
- `closable` 的关闭叉宽度等于行高，图标比文案小一档：`sm` / `md` 用 14，`lg` 用 18。`v-model:show` 管显隐，`close` 只表示组件内收起；父级把 `show` 改回 true 不回抛。
- `prefix` / `suffix` 是独立目标，点它们不触发整条 `click`；默认插槽内容仍在整条热区里，带自己的操作时传 `clickable=false` 或把操作放进 suffix。
- `clickable=false` 时既不按下变淡，也不拦点击，点击继续落到外层卡片或列表行。组件是 `view` 组合，Web 端不进入 Tab 顺序。
- 通告栏默认留在文档流，不加阴影、不做 fixed。需要吸顶时放进 `vx-sticky`，需要固定时由页面用 fixed 容器承载。
- 从 ThorUI `tui-notice-bar` 迁移：`content` → `text`；ThorUI 默认多行，这里默认单行，需要多行时加 `wrap`；`scrollable` / `speed` / `activeMode` 同名保留；`backgroundColor` → `bgColor`，`color` 保留；`size`（字号）/ `height` / `padding` / `bold` 去掉，改用档位 `size`，文案固定 400；`isLeft` / `isRight` 去掉，按是否传 `prefix` / `suffix` 渲染；`isFixed` / `top` 去掉，改用 `vx-sticky` 或页面固定容器；`params` 去掉，`click` 不再带参数；`leftClick` / `rightClick` 去掉，插槽内容自己处理点击。
- 默认底色从 ThorUI 的 `#fff8d5` / `#ff7900` 换成 `warning-soft` / `warning-ink`，亮暗主题各一套；品牌底色用 `bgColor` 显式传。

## vx-bubble-popup

贴着触发元素的轻量浮层：默认是菜单，也能做行内聊天气泡。`show` 控制显隐，`items` 是菜单，`content` 是单段文案，`extra` 放自定义面板。打开时量一次触发区和面板，气泡用 `position: fixed` 落位；一侧放不下、对面放得下时自动翻转，贴到屏幕边时在气泡内收口箭头。

```vue
<vx-bubble-popup v-model:show="menuVisible" placement="bottom" align="end" :items="items"
	@select="onSelect" @close="onClose">
	<vx-button text="更多" @click="menuVisible = !menuVisible" />
</vx-bubble-popup>

<vx-bubble-popup v-model:show="menuVisible" placement="top" align="center" :items="items" divider>
	<vx-button text="打开菜单" @click="menuVisible = !menuVisible" />
</vx-bubble-popup>

<vx-bubble-popup v-model:show="menuVisible" placement="bottom" align="start" :items="items" mask>
	<vx-button type="primary" text="带遮罩打开" @click="menuVisible = !menuVisible" />
</vx-bubble-popup>

<vx-bubble-popup v-model:show="menuVisible" placement="bottom" align="start">
	<vx-button text="账户信息" @click="menuVisible = !menuVisible" />
	<template #extra>
		<view class="account">
			<text class="account__name">Jerry</text>
			<text class="account__meta">jerry@vaporix.dev</text>
		</view>
	</template>
</vx-bubble-popup>

<!-- 行内聊天气泡：不渲染触发区，默认插槽或 content 是内容 -->
<vx-bubble-popup inline placement="right" align="start" variant="solid" type="warning" content="各位下午好">
	<template #prefix>
		<view class="chat-avatar"><text class="chat-avatar__text">M</text></view>
	</template>
</vx-bubble-popup>
```

```ts
// 菜单项：text 必填，其余可选
const items = [
	{ text: '首页', icon: 'home' },
	{ text: '收藏', icon: 'star' },
	{ text: '发布', icon: 'upload', type: 'primary', value: '⌘K' },
	{ text: '删除', icon: 'trash', type: 'danger' }
]

// select 带回下标和原对象；close 只代表用户点了外部、滚动或 Esc
const onSelect = (index, item) => {
	console.log('select', index, item.text)
}

const onClose = () => {
	console.log('tapped outside')
}
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| show | boolean | `false` | 显隐，支持 `v-model:show`；点外部、滚动、Esc 回写 `false` |
| inline | boolean | `false` | 行内聊天气泡；不渲染触发区，`show` 和方法不生效 |
| placement | `top` \| `bottom` \| `left` \| `right` | `bottom` | 气泡相对触发区的方向；inline 下决定箭头贴哪条边 |
| align | `start` \| `center` \| `end` | `start` | 交叉轴对齐；inline 下把整行推到左、中、右 |
| variant | `surface` \| `solid` | `surface` | 浅浮层面板或语义实心气泡 |
| type | `primary` \| `success` \| `info` \| `warning` \| `danger` \| `default` | `primary` | `solid` 的语义色；`surface` 不用 |
| offset | number | `8` | 气泡与触发区的间距，单位 px |
| arrow | boolean | `true` | 显示箭头 |
| arrowOffset | number | `0` | 箭头沿气泡边缘的微调，单位 px；正值向右或向下 |
| width | string | `''` | 固定宽度，需带单位，如 `132px` |
| maxWidth | string | `''` | 最大宽度，需带单位；不传时菜单 280、聊天 260；App 只接受 px |
| items | `Array<VxBubblePopupItem>` | `[]` | 菜单项；非空时不再渲染 `content` 和默认插槽 |
| content | string | `''` | 单段文案，用于提示或聊天气泡 |
| divider | boolean | `false` | 菜单项之间画 1px 分割线 |
| closeOnSelect | boolean | `true` | 点菜单项后收起；关掉后保持打开 |
| mask | boolean | `false` | 铺遮罩压暗页面，只压页面不压气泡 |
| outsideClosable | boolean | `true` | 点遮罩或外部收起并抛 `close` |
| maskColor | string | `''` | 自定义遮罩色，字面值 |
| zIndex | number | `1000` | 浮层层级 |

`items` 每项：

| 字段 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | 动作文案，建议 2–6 个字，单行省略 |
| value | string | 否 | 右侧短值，如快捷键、数量或状态 |
| icon | `VxIconName` | 否 | 文案前的图标，取值见 `libs/icons/codepoints.ts` |
| type | `default` \| `primary` \| `danger` | 否 | 语义色，只在 `surface` 下生效 |
| disabled | boolean | 否 | 禁用，不抛 `select` |
| selected | boolean | 否 | 选中，显示勾和主色；选中值由业务维护 |

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| select | 点击可用菜单项时触发；默认先收起 | `index: number`、`item: VxBubblePopupItem` |
| close | 点外部、滚动、Esc，或页面调 `cancel()` 收起时触发；`close()` 不触发 | — |
| update:show | `v-model:show` 同步，收起时回传 `false` | boolean |

| 插槽 | 说明 |
| --- | --- |
| default | popover 下是触发区；inline 下是气泡内容，替换 `content` |
| prefix | inline 下气泡左侧内容，放头像；popover 下不渲染 |
| suffix | inline 下气泡右侧内容，放头像；popover 下不渲染 |
| extra | 自定义面板内容，排在 `items` / `content` 之后；内容自己带颜色和字号 |

| 方法 | 说明 |
| --- | --- |
| open() | 打开气泡；inline 下无效 |
| close() | 立刻收起，不抛 `close`；inline 下无效 |
| cancel() | 收起并抛 `close`，给页面 `onBackPress` 用；未打开或 inline 下直接返回 |
| toggle() | 按当前状态切换；inline 下无效 |
| refresh() | 重新测量触发区和面板；异步内容落定后调用 |

- 默认插槽只放触发区，组件不自动绑定触发区的点击；`show` 由页面控制，重复打开不会叠第二个面板。触发区保持自身宽度，不要用 `block` 按钮铺满整行；要靠右或居中，用外层 flex 容器排触发区。
- 气泡用 `position: fixed` 落到页面层，卡片和 `scroll-view` 的 `overflow: hidden` 裁不到它；祖先带 `transform` 时 fixed 的坐标原点会变，要避开。
- 一侧放不下、对面放得下时自动翻到对面；两侧都放不下时夹在屏幕内，离边 8，箭头跟着触发区中心在气泡里收口。
- `surface` 面板用 `surface` 底、1px `border`、`md` 圆角和 `--vx-shadow-md`，尾巴用旋转方块加 1px 描边，底部再补 13×1 同色接缝（左右各压 0.5px），面板描边不会横穿；`solid` 用语义实心底配 `on-*`，不加描边；inline 去阴影。`maxWidth` 在 App 上只接受 px，不要传百分比。
- 菜单项 44 高、左右内边距 12，图标 18、文案 15 / 22 / 500、右侧短值 13 / 20 次要色、勾 14；菜单面板四周留 4。
- `surface` 下 `primary` / `danger` 只改对应文字和图标；`solid` 不按项染字。禁用项在 `surface` 用 `disabled-text`，`solid` 整行降到 50% 不透明度。
- 换 `items` 数组或改数量会自动重测；只在原数组里原地改文案或换 `extra` 内容时，由业务调 `refresh()`。
- 遮罩默认关闭，点击层始终接住外部点击；`outsideClosable=false` 时保留触发区、菜单项或 `close()` 作为出口。关掉且不铺遮罩时页面还能操作，滚动后气泡不会跟随触发区，需要时调 `refresh()` 或先收起。
- 页面滚动、Web 上的 Esc 和点外部都抛 `close`；`close()` 只收起，不抛事件。
- 层级默认 1000，和操作菜单、抽屉同档，低于消息提示 1010、弹框 1020、加载浮层 1050、轻提示 1100。
- Web 上量完位置后淡入、面板从 0.96 放大到 1；5.26 的 App 直接出现，关闭即移除，不做退场。
- 从 ThorUI `tui-bubble-popup` 迁移：默认插槽从「内容」改成「触发区」，菜单改用 `items`，单段内容用 `content`，自定义面板用 `extra`；`direction` → `placement`（表示气泡在锚点的哪一侧，不是箭头指向）；`left` / `right` / `top` / `bottom` / `translateX` / `translateY` / `triangleLeft` / `triangleRight` / `triangleTop` / `triangleBottom` 去掉，改由触发区自动测量，配合 `align` / `offset` / `arrowOffset` 落位；`width` 保留，需带单位；`radius` / `borderWidth` 去掉，圆角和箭头固定走令牌；`backgroundColor` / `color` 改成 `variant` + `type`，前景由 `on-*` 决定；`maskBgColor` → `maskColor`；`mask` 同名保留；`position` / `flexEnd` 去掉，行内消息用 `inline`，对齐用 `align` 和外层布局。

## vx-qrcode

二维码展示件。`text` 是内容，内部按 UTF-8 字节编码，自动选版本 1–40 和最优掩码；连续深色模块收成块后用 `view` 绘制，不依赖 canvas，也不铺原生层。支持三档边长、自定义像素边长、四种纠错级别、自定义深浅色和中心图标；内容为空和超出容量各有自己的提示。

```vue
<vx-qrcode text="xyz0900100200" />

<vx-qrcode text="xyz0900100200" size="lg" />

<vx-qrcode text="https://vaporix.dev/components/qrcode" level="Q" />

<vx-qrcode text="xyz0900100200" width="224px" />

<vx-qrcode text="xyz0900100200" color="#0b7c46" bg-color="#f4fbf7" />

<vx-qrcode text="xyz0900100200" level="H" logo="/static/logo.png" :logo-size="0.22" />

<vx-qrcode :text="emptyText" empty-text="二维码内容为空" />

<vx-qrcode :text="tooLongText" level="H" error-text="内容过长，无法生成二维码" />
```

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | string | `''` | 二维码内容，按 UTF-8 编码；为空时显示空状态 |
| size | `sm` \| `md` \| `lg` | `md` | 边长 120 / 160 / 200，对应 `--vx-qrcode-size-*` |
| width | string | `''` | 自定义边长，需带 px，如 `224px`；其他单位忽略 |
| level | `L` \| `M` \| `Q` \| `H` | `M` | 纠错级别，大约能补回 7% / 15% / 25% / 30% 的码字 |
| color | string | `''` | 深色模块颜色，字面值；默认 `#1a1d26` |
| bgColor | string | `''` | 底色和空白边距颜色，字面值；默认 `#ffffff` |
| margin | number | `2` | 空白边距，按模块数算，收敛到 0–8 |
| logo | string | `''` | 中心图片地址 |
| logoSize | number | `0.22` | 中心图片占方阵内容宽度的比例，收敛到 0.12–0.3 |
| emptyText | string | `暂无二维码内容` | `text` 为空时的提示文案 |
| errorText | string | `内容超出容量` | 超出 40 版容量时的提示文案 |

无事件、插槽和方法：二维码只负责编码和展示，点击、刷新、保存和详情跳转由外面的按钮、列表行或卡片承载。

- 只做字节模式（UTF-8），不做数字和字母数字模式的容量优化；一个汉字占 3 字节，一个 emoji 占 4 字节。40 版上限：`L` 2953、`M` 2331、`Q` 1663、`H` 1273 字节。
- 版本和掩码自动选，不需要传；内容越长版本越大，模块也越多。UI 里的二维码建议控制在 10 版以内（57 × 57）；整段长文不要塞进二维码，换成短链接。
- 默认深码浅底（`--vx-qrcode-dark` / `--vx-qrcode-light`），不跟随 `vx-theme-light` / `vx-theme-dark`：反色二维码很多扫码器认不出来。`color` / `bgColor` 是字面值，传不透明的颜色，对比度由业务保证。
- 模块边长向下取整到整数像素，多出来的收进空白边距，相邻行之间不会透缝。`width` 小于「模块数 + 边距」时退成小数像素，此时二维码只保证能看，不保证能扫。
- `margin` 默认 2：组件通常放在白底卡片里，卡片再补一圈空白边距；印刷或独立放在彩色底上时传 4，和标准要求一致。
- 中心图标建议同时把 `level` 提到 `H`；`logoSize` 越大，纠错余量越小。图标盒子四周留 `--vx-qrcode-logo-pad` 的挖空，垫色取 `bgColor`。图标加载失败时隐藏整层，方阵保持完整；换 `logo` 地址后会重新尝试。
- 内容为空显示空状态，超出 40 版容量显示错误提示，两种情况都不渲染空白方阵。`emptyText` / `errorText` 可替换文案。
- 二维码是展示件，不是控件：不提供点击、禁用、加载态和尺寸动画。需要点按放大、长按保存时，在业务层用 `createSelectorQuery` 或截图 API 另外实现。
- 组件把连续深色模块收成块再画 `view`，一个普通表单验证码大约 80–300 条；4 版以内足够轻。超长内容会带来上千条 `view`，不要在列表里批量放长内容二维码。
- 从 ThorUI `tui-qrcode` 迁移：不再需要在页面里放 `<canvas>` 和引入 `weapp-qrcode.js`，直接用组件；`text` 同名保留，成为唯一内容入口，为空时显示空状态；`width` / `height` 两个参数合并成 `width`（需带 px），常规尺寸直接用 `size`；`colorDark` → `color`，`colorLight` → `bgColor`；`correctLevel` → `level`，取值从 `qrCode.CorrectLevel.H` 改成字符串 `H`；ThorUI 示例里的 `canvas-id`、`qrcode_w` 和 `onReady` 里的 `new qrCode(...)` 都可以删掉。

## 约定

- `<script setup>`，不写 `lang`。5.26 按 uts2js 编译 TypeScript 写法；5.31 起默认就是 TypeScript。
- 公共类型在 `libs/types/common.ts`，组件 Props 在同目录 `props.ts`。
- 选择器只用单个 class。组合态写成一个 class，例如 `vx-button--plain-primary`。
- 颜色、字号、间距、圆角、高度从 `--vx-*` 取。
- 控件文案用 `--vx-font-control-*`（14 / 16 / 18），正文用 `--vx-font-*`（13 / 15 / 17）；按钮和表单标题 500，标签 400，内容和辅助文字 400。
- JS API 需要的色值和时长分别放在 `libs/theme.ts`、`libs/motion.ts`，与 `variables.css` 同步修改。导航栏前景只使用 `#000000` 和 `#ffffff`。
- 新组件同时交付：`vx-<name>.uvue`、`props.ts`、`pages/demo/<name>/<name>.uvue` 独立演示页、`pages/demo/shared/catalog.ts` 登记、`pages.json` 路由和本文件登记。

| 组件 | 说明 | 状态 |
| --- | --- | --- |
| vx-button | 按钮 | 0.1.0 |
| vx-icon | 图标 | 0.3.0 |
| vx-input | 输入框 | 0.1.0 |
| vx-textarea | 多行输入框 | 0.1.0 |
| vx-tag | 标签 | 0.4.0 |
| vx-badge | 徽章 | 0.5.0 |
| vx-footer | 页脚 | 0.6.0 |
| vx-tips | 消息提示 | 0.7.0 |
| vx-rate | 评分 | 0.8.0 |
| vx-toast | 轻提示 | 0.9.0 |
| vx-list-view | 列表分组 | 0.10.0 |
| vx-list-cell | 列表行 | 0.10.0 |
| vx-collapse | 折叠面板 | 0.21.0 |
| vx-collapse-item | 折叠项 | 0.21.0 |
| vx-card | 卡片 | 0.11.0 |
| vx-section | 标题栏 | 0.31.0 |
| vx-grid | 宫格 | 0.12.0 |
| vx-grid-item | 宫格项 | 0.12.0 |
| vx-image-group | 图片组合 | 0.29.0 |
| vx-loading | 加载中 | 0.13.0 |
| vx-loadmore | 加载更多 | 0.13.0 |
| vx-nomore | 没有更多 | 0.13.0 |
| vx-sticky | 吸顶容器 | 0.14.0 |
| vx-time-axis | 时间轴 | 0.15.0 |
| vx-number-box | 数字框 | 0.16.0 |
| vx-countdown | 倒计时 | 0.17.0 |
| vx-steps | 步骤条 | 0.18.0 |
| vx-actionsheet | 操作菜单 | 0.19.0 |
| vx-modal | 弹框 | 0.20.0 |
| vx-drawer | 抽屉 | 0.26.0 |
| vx-datetime | 日期时间选择器 | 0.23.0 |
| vx-picker | 联动选择 | 0.30.0 |
| vx-calendar | 日历 | 0.25.0 |
| vx-tabs | 标签页 | 0.24.0 |
| vx-tabbar | 标签栏 | 0.43.0 |
| vx-no-data | 暂无数据 | 0.22.0 |
| vx-swipe-action | 滑动菜单 | 0.27.0 |
| vx-navigation-bar | 导航栏 | 0.28.0 |
| vx-rolling-news | 滚动消息 | 0.32.0 |
| vx-notice-bar | 通告栏 | 0.33.0 |
| vx-bubble-popup | 气泡弹框 | 0.34.0 |
| vx-qrcode | 二维码 | 0.35.0 |
| vx-white-space | 上下留白 | 0.36.0 |
| vx-wing-blank | 左右留白 | 0.36.0 |
| vx-progress | 进度条 | 0.37.0 |
| vx-row | 栅格布局 | 0.56.0 |
| vx-col | 多端适配 | 0.56.0 |
| vx-status-bar | 状态栏 | 0.56.0 |
| vx-text | 文本 | 0.57.0 |
| vx-link | 超链接 | 0.57.0 |
| vx-radio-group | 单项选择器分组 | 0.58.0 |
| vx-radio | 单项选择器 | 0.58.0 |
| vx-checkbox-group | 多项选择器分组 | 0.58.0 |
| vx-checkbox | 多项选择器 | 0.58.0 |
| vx-switch | 开关选择器 | 0.58.0 |
| vx-form | 表单容器 | 0.62.0 |
| vx-form-item | 表单项 | 0.62.0 |
| vx-popup | 弹出层 | 0.63.0 |
| vx-image | 图片 | 0.64.0 |
| vx-divider | 分割线 | 0.64.0 |
| vx-safe-area | 安全区 | 0.64.0 |
| vx-avatar | 头像 | 0.65.0 |

付费组件在 `vaporix-ui-pro`。当前提供 `vx-gallery` 图片预览（1.0.0）、`vx-loader` 加载动画（1.1.0）、`vx-index-list` 索引列表（1.5.0）、`vx-circular-progress` 环形进度条（1.6.0）、`vx-msg` 提示页（1.7.0）、`vx-slider` 滑动选择器（1.8.0）、`vx-segmented-control` 分段器（1.10.0）、`vx-divide-list` 分隔列表（1.11.0）、`vx-select` 选择框（1.12.0）、`vx-data-checkbox` 数据选择器（1.15.0）、`vx-code-input` 验证码输入框（1.16.0）、`vx-upload` 图片上传（1.21.0）、`vx-skeleton` 骨架屏（1.22.0）、`vx-landscape` 压屏窗（1.23.0）、`vx-pagination` 分页器（1.24.0）、`vx-waterfall` 瀑布流（1.25.0）、`vx-keyboard` 数字键盘（1.26.0）、`vx-keyboard-input` 数字键盘输入框（1.26.0）、`vx-tree-view` 树型菜单（1.27.0），用法和 API 见该模块的 `readme.md` 与文档站；`vx-gallery` 用免费库 0.37.1 起的 `--vx-gallery-*` / `--vx-color-viewer-*` 令牌，`vx-loader` 用 0.38.0 起的 `--vx-loader-*` 令牌，`vx-index-list` 用 0.42.0 起的 `--vx-index-*` 令牌，`vx-circular-progress` 的尺寸与 0.44.0 起的 `--vx-circular-progress-*` 令牌同值，`vx-msg` 用 0.45.0 起的 `--vx-msg-*` 令牌，`vx-slider` 用 0.46.0 起的 `--vx-slider-*` 令牌，`vx-segmented-control` / `vx-data-checkbox` 也不新增令牌，`vx-divide-list` 用 0.49.0 起的令牌，`vx-select` 用 0.50.0 起的令牌，`vx-code-input` 用 0.54.0 起的 `--vx-code-*` 令牌，`vx-skeleton` 用 0.59.0 起的 `--vx-skeleton-*` 令牌，`vx-keyboard` / `vx-keyboard-input` 用 0.60.0 起的 `--vx-keyboard-*` 令牌，`vx-tree-view` 用 0.61.0 起的 `--vx-tree-*` 令牌，`vx-landscape` / `vx-pagination` / `vx-waterfall` 也不新增令牌。0.56.0 起 `vx-row`、`vx-col`、`vx-status-bar`，0.57.0 起 `vx-text`、`vx-link`，0.58.0 起 `vx-radio`、`vx-radio-group`、`vx-checkbox`、`vx-checkbox-group`、`vx-switch` 已迁入免费库，不再依赖付费模块。
