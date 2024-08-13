// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-07-30",
	// Nuxt 4 directory structure and features
	// https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
	future: { compatibilityVersion: 4 },
	// Nuxt Modules
	// https://nuxt.com/modules
	modules: ["@nuxthub/core", "@nuxt/eslint"],
	hub: {
		database: true,
		kv: true,
		// 不使用blob 不想开通 配置银行卡很麻烦
		blob: false,
		cache: true,
		projectKey: "starter-by-nuxt-h4a5",
		// FIXME: 为什么这个配置不生效？
		// remote: true,
	},
	nitro: {
		/** 该配置实际上无意义 这是预设的 */
		preset: "cloudflare-pages",
		experimental: {
			// Enable Server API documentation within NuxtHub
			openAPI: true,

			/**
			 * @see https://hub.nuxt.com/docs/recipes/drizzle#seed-the-database-optional
			 */
			tasks: true,
		},
	},
	// Development
	devtools: { enabled: true },

	eslint: {
		config: {
			standalone: false,
		},
	},
});
