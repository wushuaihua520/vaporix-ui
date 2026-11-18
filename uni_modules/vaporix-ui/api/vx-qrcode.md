# vx-qrcode

二维码展示件。`text` 是内容，内部按 UTF-8 字节编码，自动选版本 1–40 和最优掩码；连续深色模块收成块后用 `view` 绘制，不依赖 canvas，也不铺原生层。支持三档边长、自定义像素边长、四种纠错级别、自定义深浅色和中心图标；内容为空和超出容量各有自己的提示。

## 示例

```vue
<vx-qrcode text="xyz0900100200" />

<vx-qrcode text="xyz0900100200" size="lg" />

<vx-qrcode text="https://www.vaporix-ui.com/components/qrcode" level="Q" />

<vx-qrcode text="xyz0900100200" width="224px" />

<vx-qrcode text="xyz0900100200" color="#0b7c46" bg-color="#f4fbf7" />

<vx-qrcode text="xyz0900100200" level="H" logo="/static/logo.png" :logo-size="0.22" />

<vx-qrcode :text="emptyText" empty-text="二维码内容为空" />

<vx-qrcode :text="tooLongText" level="H" error-text="内容过长，无法生成二维码" />
```

## 属性

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

## 说明

- 只做字节模式（UTF-8），不优化数字和字母数字模式的容量；一个汉字 3 字节，emoji 4 字节。40 版上限：`L` 2953、`M` 2331、`Q` 1663、`H` 1273 字节。
- 版本和掩码自动选；UI 里的二维码建议控制在 10 版以内，长文换短链接。
- 默认深码浅底，不跟随亮暗主题：反色二维码很多扫码器认不出来。`color` / `bgColor` 是不透明字面值。
- 模块边长向下取整到整数像素，多出的收进空白边距；`width` 过小时退成小数像素，只保证能看。
- `margin` 默认 2，独立放在彩色底上时传 4，和标准一致。
- 中心图标建议同时把 `level` 提到 `H`；图标加载失败时隐藏整层，方阵保持完整。
- 内容为空和超出容量各显示自己的提示，都不渲染空白方阵。
- 二维码是展示件，不提供点击、禁用和加载态；点按放大、长按保存由业务实现。
- 从 ThorUI `tui-qrcode` 迁移：不再需要 canvas 和 `weapp-qrcode.js`；`width` / `height` 合并成 `width`，`colorDark` → `color`，`colorLight` → `bgColor`，`correctLevel` → `level`（取值改成字符串 `H`）。
