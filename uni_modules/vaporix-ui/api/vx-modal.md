# vx-modal

弹框。居中对话框，标题、正文和默认取消、确定两个按钮；也可以用 `actions` 换成一到多个自定义动作，或用默认插槽放输入框、表单等自定义正文。`closable` 打开后右上角有 44×44 的关闭叉。支持 `v-model:show`，`ref` 上暴露 `open()` / `close()`。

## 示例

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
const actions = [
	{ text: '微信', type: 'success', variant: 'plain' },
	{ text: '支付宝', type: 'primary', variant: 'plain' }
]
```

## 属性

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

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| confirm | 默认确定或 `role="confirm"` 的动作被点击；`closeOnAction` 时先收起 | 无 |
| cancel | 默认取消、`role="cancel"` 的动作、关闭叉或可关闭遮罩被点击；始终收起 | 无 |
| action | 没有 `role` 的自定义动作被点击；`closeOnAction` 时先收起 | 索引 `number`、动作对象 `VxModalAction` |
| update:show | `v-model:show` 同步，收起时回传 `false` | boolean |

## 插槽

| 插槽 | 说明 |
| --- | --- |
| default | 自定义正文，替换 `content`；不继承正文的颜色和字号 |

## 方法

| 方法 | 说明 |
| --- | --- |
| open() | 打开弹框 |
| close() | 立刻收起，不抛 `cancel` |

## 说明

- 面板用 `surface` 底、`lg` 圆角加阴影，不加描边；`size` 只改最大宽度 280 / 320 / 400，字号不变。
- 标题 17 / 24 / 600，正文 15 / 22 次要色，动作沿用 `sm` 控件的 14 / 20 / 500；内边距固定 24。
- 动作一个铺满、两个并排、三个以上纵向；并排文案控制在 2–4 个字。删除、退出这类不可逆操作至少把确定改成 `danger`。
- `actions` 非空时整组替换默认按钮，`showCancel` / `confirmText` / `confirmType` / `confirmLoading` 只在默认动作里生效。
- `role="cancel"` 的动作、关闭叉和可关闭遮罩始终收起并抛 `cancel`；`role="confirm"` 抛 `confirm`；没有 `role` 的抛 `action(index, action)`。
- `closeOnAction=false` 时确定和普通动作保持打开，适合异步提交，完成后自己调 `close()`。
- `maskClosable=false` 时至少保留一个出口：动作、关闭叉（`closable`）或 `close()`。
- `icon` 是可选状态图标，圆 48、图标 22，圆用 `*-soft` 浅底；不传时头部只剩标题。
- 自定义正文用默认插槽并关掉内置动作（`:show-actions="false"`）；插槽内容自己带颜色、字号和按钮。
- 挂在页面根节点，层级默认 1020；同一屏只开一个，不和操作菜单叠加。
- 第一次打开后根节点常驻，关闭只切 `display: none`；要完全释放时用 `v-if` 包住整个弹框。
- 弹框不内置滚动，只承载一件短内容；长表单和多步流程改用页面区块。
- 从 ThorUI `tui-modal` 迁移：`button` → `actions`，`shape="circle"` → `actionShape="pill"`，`custom` → 默认插槽，`color` → `contentColor`；`click({ index })` 拆成 `confirm` / `cancel` / `action(index, action)`。
