# vx-actionsheet

操作菜单。底部弹层，用 `items` 列动作；可选的标题、说明和取消按钮，支持主操作、危险操作、禁用和选中态。

## 示例

```vue
<vx-actionsheet v-model:show="sheetVisible" :items="sheetItems" description="确认清空搜索历史吗？"
	@select="onSheetSelect" @cancel="onSheetCancel" />

<vx-actionsheet v-model:show="sheetVisible" title="选择您的性别" :items="genderItems" />
```

`items` 是 `{ text, type?, disabled?, selected? }` 数组，选中状态由业务维护。

## 属性

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
| liquidGlass | boolean | — | 液态玻璃面板：传 `true` 强制玻璃，不传或 `false` 跟随全局控件风格；磨砂分平台（iOS 用系统材质，Android / 鸿蒙 / Web 用 backdrop-filter，小程序半透明实底） |
| zIndex | number | `1000` | 浮层层级 |

`items` 的每一项：

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | string | — | 动作文案，建议 2–6 个字 |
| type | `default` \| `primary` \| `danger` | `default` | 默认色、主色、危险色 |
| disabled | boolean | `false` | 禁用，没有按下态，也不抛 `select` |
| selected | boolean | `false` | 选中态：主色文案加右侧勾；danger 动作保留危险色 |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| select | 点击可用动作时触发；默认先收起再抛 | 索引 `number`、动作对象 `VxActionSheetItem` |
| cancel | 点取消或可关闭的遮罩时触发 | 无 |
| update:show | `v-model:show` 同步，收起时回传 `false` | boolean |

## 方法

| 方法 | 说明 |
| --- | --- |
| open() | 打开面板 |
| close() | 立刻收起，不抛 `cancel` |

## 说明

- 面板贴底、只圆上两角；最大宽度 480px，手机上铺满，平板和 Web 上收成居中浮层；遮罩只压页面。
- `liquidGlass` 接全局控件风格（`libs/global-style`，应用调 `vxSetStyle('liquid-glass')` 后默认玻璃化）：传 `true` 强制玻璃（全局关闭时也生效），不传或 `false` 跟随全局风格。玻璃面铺满整张面板（含底部安全区），带发丝描边和分层浮起阴影，取消块换半透白；遮罩保持实色不玻璃化，`maskColor` 照常生效。磨砂分平台：iOS 用 `glass-effect-view` 出系统液态玻璃（iOS 26+；15~25 降级为系统毛玻璃），材质跟随系统外观；Android / 鸿蒙蒸汽与 Web 用 `backdrop-filter: blur`；小程序没有模糊，玻璃底不透明度给足。
- 标题 17 / 24 / 600，说明 13 / 20 次要色，动作和取消 15 / 22 / 500，行高 48。
- 动作默认正文色，`primary` / `danger` 用对应 pressed 色，禁用转灰；分割线用 `divider` 通栏，最后一条不画。
- `selected` 由业务维护，组件不保存选中值；`closeOnSelect=false` 时不自动收起，适合单选和多选。
- 取消与动作之间用 4px 浅底间隔带分开；`showCancel=false` 时末条动作下面仍留安全区。
- `maskClosable=false` 时只能点动作或取消退出，取消按钮要保留。
- 挂在页面根节点，层级 1000，同一屏只开一个，动作控制在 2–6 条。
- 进场淡入遮罩、从底部滑入面板，关闭时反向播放；退场期间照常接住点击，重复操作由退场判断挡掉。
- 从 ThorUI `tui-actionsheet` 迁移：`itemList` → `items`，`isCancel` → `showCancel`，`tips` → `title` / `description`；`textField` 不再需要，`click` 换成 `select(index, item)`。
