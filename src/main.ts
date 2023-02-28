import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'normalize.css'
import './style.css'
import '@/assets/css/reset.css'

import router from './router'

const app = createApp(App)
app.use(router).mount('#app')
