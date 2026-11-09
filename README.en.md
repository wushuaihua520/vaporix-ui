# Vaporix UI

Native-rendered component library for uni-app x vapor mode. Free components live in this repository and are published as a `uni_modules` package.

- Chinese name: 元汽UI
- Prefix: `vx-`
- Tokens: `--vx-*`
- HBuilderX 5.26+. App `@keyframes` need 5.31+.

Basic components are MIT licensed, including button, icon, input, textarea, text, link, radio, checkbox, switch, number box, countdown, steps, progress, action sheet, bubble popup, drawer, popup, datetime, picker, calendar, tabs, tab bar, swipe action, tag, badge, footer, tips, toast, rate, list view, list cell, collapse, collapse item, card, section, image, avatar, divider, safe area, white space, wing blank, grid, grid item, row, col, image group, QR code, loading, load more, no more, no data, sticky, navigation bar, status bar, rolling news, notice bar and time axis. Icons come from Phosphor 2.1.2 (MIT), split into core 112 and extended 1000, each in regular and fill. Core ships by default; extended requires `libs/style/icons-extend.css`. The upstream license ships in `uni_modules/vaporix-ui/libs/icons/LICENSE`. Paid components belong to the private `vaporix-ui-pro` repository and are not included here.

Advanced components ship separately as `vaporix-ui-pro`; see the docs site Pro page for scope, pricing and licensing.

## Layout

The repository is itself a uni-app x playground. The library is `uni_modules/vaporix-ui`; the demo is a three-tab app:

- `pages/index/index.uvue` — component catalog (first tab), grouped by basic, form, feedback, layout and navigation.
- `pages/demo/<component>/<component>.uvue` — one page per component, opened from the catalog.
- `pages/api/api.uvue` and `pages/api-detail/api-detail.uvue` — JS API modules from `libs`, with runnable examples.
- `pages/mine/mine.uvue` — theme picker, docs and version (third tab).
- `pages/demo/shared/` — catalog data, persisted theme state and shared demo CSS.

Native tab bar icons live in `static/tabbar` and switch between light and dark sets with the theme. Design values are in `DESIGN.md` and `uni_modules/vaporix-ui/libs/style/variables.css`.

## Run

Open this directory in HBuilderX 5.26 or newer, enable vapor mode, then run to a browser or a device. The browser build uses VDOM and does not represent App vapor rendering. The first page is the component catalog; the bottom native tab bar switches between components, JS APIs and profile.

## Usage

Put `vx-theme-light` or `vx-theme-dark` on the page root. Component API is documented in `uni_modules/vaporix-ui/readme.md`.

```vue
<template>
	<view class="vx-theme-light">
		<vx-icon name="search" />
		<vx-icon name="check" type="success" />
		<vx-icon name="info" type="info" />
		<vx-icon name="heart" variant="fill" />
		<vx-input v-model="keyword" placeholder="Keyword" clearable />
		<vx-number-box v-model="quantity" :min="1" :max="99" />
		<vx-countdown :time="967" type="danger" />
		<vx-countdown :time="239953" show-days separator="unit" variant="soft" />
		<vx-steps :items="checkoutSteps" :active="1" />
		<vx-steps :items="checkoutSteps" :active="1" variant="number" />
		<vx-steps direction="vertical" :items="checkoutSteps" :active="1" type="success" />
		<vx-steps :items="checkoutSteps" :active="1" line-style="dashed" />
		<vx-tabs v-model="tabActive" :items="tabs" />
		<vx-tabs v-model="tabActive" :items="tabs" variant="soft" />
		<vx-tabs v-model="tabActive" :items="tabs" variant="inverse" />
		<vx-tabbar v-model="tabbarActive" :items="tabbarTabs" />
		<vx-tabbar v-model="tabbarActive" :items="tabbarTabs" :fixed="false" />
		<vx-tabbar v-model="tabbarActive" :items="tabbarRaised" :fixed="false" />
		<vx-swipe-action :name="order.id" :actions="swipeActions">
			<vx-list-cell title="Swipe left for actions" :divider="false" />
		</vx-swipe-action>
		<vx-textarea v-model="intro" label="Bio" label-width="72px" required counter :maxlength="140" />
		<vx-tag type="primary" text="Tag" />
		<vx-tag type="success" variant="soft" text="Done" />
		<vx-tag type="warning" variant="plain" size="sm" text="Pending" />
		<vx-tag type="danger" shape="half" closable text="Expired" @close="removeTag" />
		<vx-button text="OK" type="primary" size="lg" />
		<vx-button text="Continue" type="primary">
			<vx-icon name="chevron-right" color="var(--vx-color-on-primary)" />
		</vx-button>
		<vx-button text="Remove" type="danger" variant="plain" />
		<vx-button text="Later" type="default" variant="soft" shape="pill" />
		<vx-button text="Learn more" type="info" variant="soft" />
		<vx-badge :value="12" />
		<vx-badge :value="88" type="default" />
		<vx-badge type="danger" dot />
		<vx-badge absolute ring :value="9" type="danger" size="sm">
			<vx-icon name="bell" size="lg" />
		</vx-badge>
		<vx-no-data text="No orders" description="Pull to refresh, or try again later" action-text="Browse" />
		<vx-collapse v-model="openPanels">
			<vx-collapse-item name="ship" title="Shipping and delivery">
				<text>Free shipping over 99.</text>
			</vx-collapse-item>
			<vx-collapse-item name="return" title="Returns and exchanges">
				<text>Return within 7 days of delivery.</text>
			</vx-collapse-item>
		</vx-collapse>
		<vx-footer :links="footerLinks" copyright="© 2026 Vaporix UI · MIT" @click="onFooterLink" />
		<vx-tips v-model:show="tipsVisible" text="Saved" type="success" />
		<vx-tips v-model:show="tipsVisible" position="top" type="warning" text="Connection lost" />
		<vx-toast v-model:show="toastVisible" text="Saved" type="success" />
		<vx-toast v-model:show="toastVisible" text="Something went wrong" type="danger" />
		<vx-toast v-model:show="toastVisible" type="success" icon="heart" text="Added to favorites" />
		<vx-actionsheet v-model:show="sheetVisible" description="Sign out of this account?"
			:items="sheetItems" />
		<vx-drawer v-model:show="drawerVisible" title="Filters" closable>
			<vx-tag type="primary" variant="soft" text="Free shipping" />
		</vx-drawer>
		<vx-drawer v-model:show="shareVisible" position="bottom" height="42%">
			<text>Share sheet</text>
		</vx-drawer>
		<vx-actionsheet v-model:show="sheetVisible" title="Select your gender" :items="genderItems"
			@select="onGenderSelect" />
		<vx-modal v-model:show="modalVisible" title="Notice" content="Submit these changes?"
			@confirm="onConfirm" />
		<vx-datetime v-model="bookDate" v-model:show="dateVisible" mode="date" title="Pick a date" />
		<vx-datetime v-model="bookTime" v-model:show="timeVisible" mode="time" format="HH:mm" />
		<vx-rate v-model="score" show-text />
		<vx-rate v-model="score" allow-half show-text />
		<vx-rate :model-value="3.45" readonly />
		<vx-list-view title="Account and orders">
			<vx-list-cell title="My wallet" value="¥128.00" arrow @click="openWallet" />
			<vx-list-cell title="Shipping address" value="Pudong, Shanghai" arrow :divider="false" />
		</vx-list-view>
		<vx-list-view title="Notifications" variant="plain">
			<vx-list-cell title="System notifications" value="On" arrow :divider="false" />
		</vx-list-view>
		<vx-card title="CSDN Cloud" meta="1h ago" avatar="/static/demo/card/avatar-cs.png"
			content="Card body" footer="Source · Vaporix UI" />
		<vx-section title="Today's picks" description="Updated from your browsing history." marker />
		<vx-section title="Account security" description="Updated in the last 30 days" variant="soft" marker />
		<vx-white-space size="md" />
		<vx-wing-blank size="lg">
			<vx-card title="Inset card" content="Horizontal padding only; background, radius and border stay with the wrapper." />
		</vx-wing-blank>
		<vx-white-space height="24px" />
		<vx-grid>
			<vx-grid-item :columns="3" :index="0" icon="wallet" title="Wallet" />
			<vx-grid-item :columns="3" :index="1" icon="receipt" title="Orders" />
			<vx-grid-item :columns="3" :index="2" icon="settings" title="Settings" />
		</vx-grid>
		<vx-bubble-popup v-model:show="menuVisible" placement="bottom" align="end" :items="menuItems">
			<vx-button text="More" @click="menuVisible = !menuVisible" />
		</vx-bubble-popup>
	</view>
</template>
```

Core 112 ships by default. The extended 1000 require importing `@/uni_modules/vaporix-ui/libs/style/icons-extend.css` in the app's global styles; otherwise extended glyphs are not loaded.

## Conventions

- `<script setup>` only. Do not set `lang`. On 5.26 the script is compiled with uts2js; from 5.31 an omitted `lang` defaults to TypeScript.
- Do not write UTS in components. Native plugins go under `utssdk/`.
- `size` is `sm | md | lg`, default `md`. Interactive controls use 32 / 40 / 48 heights with 12 / 16 / 24 horizontal padding and control text sizes 13 / 14 / 16; tags keep compact heights 28 / 32 / 36. List rows use their own minimum heights 44 / 52 / 60 with titles at 13 / 15 / 17. Card headers reuse those list row heights; images and avatars have their own sizes. Button types are `primary | success | info | warning | danger | default`; variants are `solid | plain | soft | link`; shapes are `rounded | pill | square`. Tag variants are `solid | soft | plain`; tag shapes add `half` (pill on the left, square on the right). Rate stars have their own sizes 20 / 24 / 28 and a fixed 8px gap. Toast has its own 40px icon and a 120px minimum box, blocks the page while visible and sits at layer 200, above Tips at 100. The action sheet sits at layer 90, below Tips 100, Loading 150 and Toast 200; it blocks the page, keeps 2–6 short actions and has no internal scroll. Icon `type` uses the same six values. Footer links emit `click` with the link object; the component never routes on its own. List views own the group heading and surface; list cells own the rows, arrows and clicks. Turn off the last divider in each group and turn `clickable` off for static rows. Cards are bordered containers with optional header, body and footer; they use their own padding and avatar sizes, never a shadow, and `bodyPadded=false` lets images and list rows reach the edges. Grids own only the surface and frame; columns, size and content live on grid items, and `index` keeps the first row and column free of inner lines. Loading uses the icon sizes 14 / 18 / 22 for its spinner and body-small 13 / 20 for copy; `type` only colors the spinner. The overlay mode is fixed, centered, masked, blocks the page and sits at layer 150, between Tips and Toast. Load more and no more share one 16px footer rhythm, so switching between them does not shift the layout.
- Selectors are single classes. Combined states use one class, such as `vx-button--plain-primary`.
