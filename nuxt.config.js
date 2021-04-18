export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "movue.it",
		htmlAttrs: {
			lang: "en"
		},
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: "" }
		],
		link: [
			[
				{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
				{ rel: "preconnect", href: "https://fonts.gstatic.com" },
				{
					rel: "dns-prefetch",
					href: "https://fonts.gstatic.com",
					crossorigin: true
				},
				{
					rel: "preload",
					as: "style",
					href:
						"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Play:wght@400&display=swap"
				}
			]
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["@/assets/css/global.css", "@/assets/css/components.css"],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: [{ path: "@/components", pathPrefix: false }],

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		"@nuxt/typescript-build",
		"@nuxtjs/tailwindcss",
		"@nuxtjs/google-fonts"
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [["cookie-universal-nuxt", { alias: "cookiz" }]],

	tailwindcss: {
		jit: true,
		viewer: false
	},

	googleFonts: {
		display: "swap",
		families: {
			Inter: {
				wght: [400, 500, 600]
			},
			Play: {
				wght: [400]
			}
		},
		prefetch: true,
		preload: true
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {}
};
