import { createApp } from 'vue'
import TopLevelComponent from "./TopLevelComponent.vue"
import router from './router'

const app = createApp(TopLevelComponent)

app.use(router)

window.app = app
console.log("about to mount")
app.mount('#app')
console.log("Mounting")
