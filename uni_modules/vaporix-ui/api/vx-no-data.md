# vx-no-data

空状态。默认内置线稿插图加一句「暂无数据」，可以补说明和动作；也能换成字体图标、自定义图片或自己的插图。动作复用 `vx-button`，点击只抛 `action`。

## 示例

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

## 属性

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

## 事件

| 事件 | 说明 | 参数 |
| --- | --- | --- |
| action | 点击默认动作按钮时触发；`extra` 插槽里的操作自己处理点击 | 无 |

## 插槽

| 插槽 | 说明 |
| --- | --- |
| default | 替换主文案和说明，自己带颜色和字号；说明跟着主文案一起消失 |
| icon | 替换插图，优先于 `image` 和 `icon`；内容自己带尺寸和颜色 |
| extra | 替换动作按钮，可放多个操作；传了它就不再渲染默认按钮 |

## 说明

- 默认线稿画在 160 方框里，按 96 / 128 / 160 缩放，不依赖图片和第二套图标。
- 线稿线条用次要灰和禁用灰；`type` 只把纸边和加号换成语义色。
- `icon` 模式字形 32 / 40 / 48，比 `vx-icon` 三档大；`image` 按方框 96 / 128 / 160 等比展示，透明底最稳。
- 三档尺寸只改插图、图标圆、字号和留白：主文案 13 / 15 / 17，说明 13 / 13 / 15。
- `actionText` 为空且没有 `extra` 时不占动作位；动作的七个 `action*` 属性原样透传给 `vx-button`。
- `fill` 只是 `flex: 1`，父级不是纵向 flex 时没有效果。
- 空状态不画外框、底色和阴影，整块不响应点击；放进 `vx-card` 或 `vx-list-view` 时由外层提供边界。
- 从 ThorUI `tui-no-data` 迁移：`imgUrl` → `image`，`btnText` → `actionText`，`fixed` → `fill`；`imgWidth` / `btnWidth` 交给 `size` 和 `actionWidth`。
