# vx-collapse-item

折叠面板的子项。标题行放标题、说明、前缀图标和角标，默认插槽放展开后的内容；禁用、无箭头和固定高度滚动都在这一层。

## 示例

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

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| name | string | `''` | 面板名，同一组内唯一；`v-model` 用它记录展开项 |
| index | number | — | `v-for` 的循环下标。同一组都传了才按最大 index 认最后一项；缺一项仍按挂载顺序。静态面板不用传 |
| title | string | `''` | 标题，可以换行；为空时不渲染标题文字 |
| description | string | `''` | 标题下方的说明，次要色，可以换行 |
| disabled | boolean | `false` | 禁用：不响应点击，标题、说明和箭头转灰 |
| arrow | boolean | `true` | 显示箭头；容器关掉箭头时这一项也会隐藏 |
| contentHeight | string | `''` | 固定内容区高度，必须带单位；传入后内容在内部滚动 |

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| change | 点击标题展开或收起后触发 | `open: boolean` |

## 插槽

| 插槽 | 说明 |
| --- | --- |
| default | 展开后的内容，自己带颜色、字号和行高 |
| prefix | 标题前，放图标、头像或图形 |
| extra | 标题右侧、箭头前，放标签、徽章、时间或状态 |

## 说明

- `name` 在同一组里唯一；不传时用实例 id 兜底，只适合不需要父级控制的场景。
- 标题 13 / 15 / 17 跟随容器 `size`，说明固定 13 / 20；标题行是唯一热区，点击停在面板上。
- `extra` 里的按钮和开关需要自己 `@click.stop`。
- `disabled` 只挡点击并把标题转灰，不抛 `change`；插槽内容不自动转灰。
- `arrow=false` 只去掉箭头，标题行仍可点；`contentHeight` 固定内容高度并在内部滚动，必须带单位。
- 插槽第一次展开才创建，之后保持挂载；收起时不渲染，不要指望此时校验里面的表单项。
- 面板不画外框、圆角和阴影，外轮廓和最后一项的分割线都由 `vx-collapse` 负责。
- 从 ThorUI `tui-collapse` 迁移：标题和内容换成 `title` / `description` 和默认插槽，`height` 换成 `contentHeight`；这里的 `index` 只表示列表位置。
