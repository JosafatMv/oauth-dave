import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'

const googleClientId = '604573273292-pphb7lflf2a91vfr1cl50qk83gjf3dmb.apps.googleusercontent.com'

const app = createApp(App)
app.use(vue3GoogleLogin, {clientId: googleClientId})
app.use(router)

app.mount('#app')
