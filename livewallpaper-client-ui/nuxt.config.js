export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  generate: {
    dir: "../LiveWallpaper.LocalServer/wwwroot/offline"
  },

  env: {
    expectedClientVersion: process.env.expectedClientVersion,
  },

  router: {
    base: '/offline/'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'livewallpaper-client-ui',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/local.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  components: [
    '~/components/layout',
    '~/components/wallpaper',
    '~/components/wallpaper/common',
  ],
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome',
  ],
  fontawesome: {
    icons: {
      solid: ['faUndo', 'faSyncAlt', 'faFileImage', 'faGlobe', 'faCaretUp',
        'faListAlt', 'faUser', 'faEye', 'faFolderOpen', 'faTags', 'faEdit',
        'faTrashAlt', 'faChevronLeft', 'faChevronRight', 'faFighterJet',
        'faQuestionCircle', 'faCaretDown', 'faCog', 'faSignOutAlt', 'faSignInAlt',
        'faUpload', 'faTimesCircle', 'faCheck', 'faBan', 'faVolumeUp', 'faVolumeMute',
        'faDesktop', 'faClock','faLayerGroup'],
      // regular: [],
      // light: [],
      // duotone: [],
      brands: ['faGithub', 'faWeixin', 'faCreativeCommonsNcJp', 'faCloudversify']
    },
  },

  buefy: {
    css: true,
    materialDesignIcons: false,
    defaultIconPack: 'fas',
    defaultIconComponent: 'font-awesome-icon'
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-i18n',
  ],

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: "English" },
      { code: 'ru', iso: 'ru', file: 'ru.json', name: "Русский" },
      { code: 'zh', iso: 'zh-CN', file: 'zh.json', name: "中文" }
    ],
    langDir: "livewallpaper_i18n/",
    defaultLocale: 'zh',
    lazy: 'true',
    vueI18n: {
      fallbackLocale: 'zh',
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}