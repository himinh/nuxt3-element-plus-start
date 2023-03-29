export default defineNuxtConfig({
  // dir
  srcDir: 'src/',

  // imports
  imports: {
    dirs: ['stores/**/*'],
  },

  // build modules
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@element-plus/nuxt',
  ],

  // runtime config
  runtimeConfig: {
    // apiSecret: "token",
    app: {
      // baseURL: 'http://localhost:3000',
    },
    public: {
      apiBase: process.env.API_BASE_URL,
    },
  },

  // css
  css: ['~/assets/scss/index.scss'],

  // ts
  typescript: {
    strict: true,
    shim: false,
  },

  // unocss config
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    attributify: true, // enabled `@unocss/preset-attributify`,
    // icons: true, // enabled `@unocss/preset-icons`,

    // core options
    shortcuts: [],
    rules: [],
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
        },
      },
    },
  },

  // pinia config
  pinia: {
    autoImports: ['defineStore'],
  },

  elementPlus: {
    icon: 'ElIcon',
    importStyle: 'scss',
  },

  // localization - i18n config
})
