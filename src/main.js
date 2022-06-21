import { createApp } from 'vue'
import TopLevelComponent from "./TopLevelComponent.vue"
import router from './router'

const app = createApp(TopLevelComponent)

app.use(router)

app.mount('#app')
