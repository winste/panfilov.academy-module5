import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// import vueCountryRegionSelect from 'vue-country-region-select'
import './assets/scss/_main.scss'

const app = createApp(App)
app.use(router).use(createPinia()).mount('#app')
