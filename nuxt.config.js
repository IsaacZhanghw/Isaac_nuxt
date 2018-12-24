module.exports = {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: '张洪伍',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'keywords', name: 'keywords', content: '博阅,柠檬悦读,柠檬阅读,深圳市小柠檬教育科技有限公司,阅读,学生阅读,分级阅读,让阅读成为一种习惯,K12教育,小柠檬教育科技,让孩子爱上阅读' },
            { hid: 'description', name: 'description', content: '柠檬悦读，中小学智能分级阅读解决方案。孩子、家长、老师通过跨屏联动，实现提升阅读能力与高效教学。产品功能全面围绕激发孩子的阅读兴趣、培养阅读习惯、提升阅读能力以及助力老师高效教学而设计。分级阅读体系涵盖：阅读能力测评、自适应学习系统、精选分级书城。' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },

    /*
     ** Global CSS
     */
    css: [{ src: "swiper/dist/css/swiper.css" }, { src: "~/assets/base.less" }, ],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [{ src: "~/plugins/vue-swiper.js", ssr: false }, ],

    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/axios',
        // Doc: https://bootstrap-vue.js.org/docs/
        'bootstrap-vue/nuxt'
    ],
    /*
     ** Axios module configuration
     */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {

        }
    },
    transition: {
        name: 'page',
        mode: 'out-in',
    },
    router: {
        extendRoutes(routes, resolve) {
            routes.push({
                path: '/',
                name: '',
                component: 'pages/index.vue'
                    // component: resolve(__dirname, 'pages/index.vue')
                    // component: resolve => require(['@/pages/index'], resolve)
            }, {
                path: '/index',
                name: 'index',
                component: 'pages/index.vue'
                    // component: resolve(__dirname, 'pages/index.vue')
                    // component: resolve => require(['@/pages/index'], resolve)
            }, {
                path: '/blog',
                name: 'blog',
                component: 'pages/blog.vue'
                    // component: resolve(__dirname, 'pages/blog.vue')
                    // component: resolve => require(['@/pages/blog'], resolve)
            }, {
                path: '/about',
                name: '/about',
                component: 'pages/about.vue'
                    // component: resolve(__dirname, 'pages/about.vue')
                    // component: resolve => require(['@/pages/about'], resolve)
            }, {
                path: '/link',
                name: '/link',
                component: 'pages/link.vue'
                    // component: resolve(__dirname, 'pages/link.vue')
                    // component: resolve => require(['@/pages/link'], resolve)
            }, )
        }
    }
}