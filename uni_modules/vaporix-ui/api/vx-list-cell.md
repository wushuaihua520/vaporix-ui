# vx-list-cell

列表行。三档行高、主副文案、右侧短值和箭头；前缀放图标或头像，后缀放徽章、标签或时间。默认 `clickable`，按下有底色并抛 `click`，点击停在行上；静态展示行传 `:clickable="false"`。主文案和说明在剩余宽度内换行。

## 示例

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

## 属性

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

## 事件

| 事件 | 说明 |
| --- | --- |
| click | 可点击行被点按时触发；静态行和禁用行不触发，不带参数 |

## 插槽

| 插槽 | 说明 |
| --- | --- |
| default | 替换 `title` / `description` 的内容区，值、后缀和箭头仍按 props 渲染 |
| prefix | 左侧图标、头像或选择框；尺寸和颜色自己带 |
| extra | 右侧徽章、标签或时间；传了它就不再渲染 `value` |

## 说明

- 行高是下限：单行居中，双行由内边距自然撑高；`sm` 44 已满足可点热区。
- 主文案用 `--vx-font-*`，说明和值用 `--vx-font-sm` 次要色。
- `clickable` 默认打开，按下用 `surface-pressed` 底并抛 `click`；静态行传 `false`，既没有按下态也不抛事件。
- `disabled` 只灰化组件渲染的文字和箭头，插槽内容要自己处理禁用样式；不要用它冒充静态展示。
- 分割线默认 `--vx-color-divider`，比卡片描边浅一档；`dividerColor` 改线色、`dividerOpacity` 改深浅（0 隐藏），都是字面值。
- `prefix` / `extra` 插槽不继承字号和颜色；行本身不画描边、圆角和底色，边界交给外层。
- 长文案在内容区换行，右侧值不换行；行是 `view`，Web 端不进 Tab 顺序。
- 箭头固定 `chevron-right`，`sm` / `md` 取 14，`lg` 取 18。
