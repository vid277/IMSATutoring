import { createApp } from 'vue'
import TopLevelComponent from "./TopLevelComponent.vue"
import router from './router'
import { createStore } from 'vuex'

const app = createApp(TopLevelComponent)

import gAuthPlugin from 'vue3-google-oauth2'
let gAuthClientId = '896522057121-fr6klg7rnpp85su6cgisa46pvn8rfvh6.apps.googleusercontent.com'

app.use(router)
app.use(gAuthPlugin, {
  clientId: gAuthClientId,
  scope: 'email',
  prompt: 'consent',
})

window.app = app
app.mount('#app')

