// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  devtools: true,
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    'nuxt-svgo',
    '@nuxt/image',
    'nuxt-swiper',
    '@nuxt/image',
  ],
  googleFonts: {
    families: {
      Roboto: true,
      download: true,
    },
  },
  svgo: {
    autoImportPath: './assets/icons/',
    componentPrefix: 'Ic',
    svgoConfig: {
      multipass: true,
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              // or disable plugins
              removeDoctype: false,
              removeViewBox: false,
            },
          },
        },
      ],
    },
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  css: ['@/assets/style/global.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/style/variables.scss";
            @import "@/assets/style/mixins.scss";
            @import "@/assets/style/smart-grid.scss";
          `,
        },
      },
    },
  },
  swiper: {
    styleLang: 'scss',
  },
  image: {
    format: ['webp', 'jpg', 'png'],
    dir: './assets/img',
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: 'NUXT_PUBLIC_API_BASE_URL',
    },
  },
});
