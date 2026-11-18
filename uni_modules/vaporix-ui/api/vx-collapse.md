# vx-collapse

折叠面板容器。用 `v-model` 绑展开面板的 `name` 数组，支持手风琴、卡片 / 平面形态、三档尺寸、整组禁用、无箭头和程序化方法；每个面板由 `vx-collapse-item` 提供。

## 示例

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

容器方法 `open(name)` / `close(name)` / `toggle(name)`，完整展开名单以 `v-model` 为准。

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | Array&lt;string&gt; | `[]` | 展开面板的 name 数组，支持 `v-model` |
| accordion | boolean | `false` | 手风琴，同一时间只展开一项 |
| variant | `card` \| `plain` | `card` | 描边卡片，或只保留 `surface` 底的平面分组 |
| size | `sm` \| `md` \| `lg` | `md` | 标题行、标题和箭头档位；说明固定 13 / 20 |
| divider | boolean | `true` | 面板之间画 1px 分割线，最后一项不画 |
| arrow | boolean | `true` | 整组显示箭头；面板上的 `arrow` 只能再关掉 |
| disabled | boolean | `false` | 整组禁用，所有面板不响应点击并转灰 |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| update:modelValue | `v-model` 同步新的 name 数组 | `Array<string>` |
| change | 点击或方法改变面板展开状态后触发 | `name: string`、`open: boolean` |

## 插槽

| 插槽 | 说明 |
| --- | --- |
| default | 面板，通常放一组 `vx-collapse-item` |

## 方法

| 方法 | 说明 |
| --- | --- |
| open(name) | 展开指定面板；手风琴会收起其他面板 |
| close(name) | 收起指定面板；手风琴直接清空 |
| toggle(name) | 切换指定面板 |

## 说明

- `card` 用 `surface` 底、1px 描边和 `md` 圆角，`plain` 只保留底色；放进卡片时用 `plain`。
- 标题行沿用列表行 44 / 48 / 52；标题 13 / 15 / 17 加 500 字重，说明固定 13 / 20，箭头 14 / 18 / 22。
- 分割线左右与标题内边距对齐，最后一项自动不画；动态列表要给每项传 `index`。
- 展开用高度和透明度过渡，第一帧不加过渡，默认展开的面板不会滑进来。
- 方法不受 `disabled` 限制，禁用只挡标题行的点击；手风琴收起上一项时不为旧项再抛 `change`。
- 从 ThorUI `tui-collapse` 迁移：`current` + `index` 换成容器的 `v-model` 和面板的 `name`，`@click` 换成 `change(name, open)`；`bgColor` 系列不再需要。
