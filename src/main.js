import { createApp, provide, h } from "vue"
import { ApolloClients } from "@vue/apollo-composable"
import { createMetaManager } from "vue-meta"
import { apollo } from "@/apollo"
import { createPinia } from "pinia"

/** Analytics */
import VueGtag from "vue-gtag"
import amplitude from "amplitude-js"
amplitude.getInstance().init("a515d3d1969a8f25c340476842b19836")

import "@/services/tools"
import App from "./App.vue"
import router from "./router"

const app = createApp({
    setup() {
        provide(ApolloClients, {
            default: apollo,
        })
    },

    render: () => h(App),
})

/**
 * Use
 */
app.use(router)
app.use(createPinia())
app.use(createMetaManager())
app.use(VueGtag, { config: { id: "G-58LD5WNLR4" } })

/**
 * Provide
 */
app.provide("amplitude", amplitude.getInstance())

/**
 * Global components
 */
import Icon from "@/components/icons/Icon"
app.component("Icon", Icon)

app.mount("#app")
