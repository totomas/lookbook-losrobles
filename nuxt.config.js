export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "lookbook-losrobles",
        htmlAttrs: {
            lang: "en"
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "" }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],
    router: {
        base: process.env.NODE_ENV === "development" ? process.env.BASE_URL : "/losrobles/"
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [{
        src: "~plugins/vue-scrollmagic.js",
        ssr: false
    }],

    pwa: {
        manifest: {
            name: 'Edificio Los Robles',
            short_name: 'Edificio Los Robles',
            lang: 'es',
            display: 'standalone',
        },
    },

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
};