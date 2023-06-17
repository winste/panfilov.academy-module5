import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import YmapPlugin from 'vue-yandex-maps'
import './assets/scss/_main.scss'
import { createMetaManager } from 'vue-meta'

const settings = {
  apiKey: '85160a70-024d-405f-b7f4-d1b6974ae2cb',
  lang: 'en_US',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1'
}

createApp(App)
  .use(router)
  .use(createPinia())
  .use(YmapPlugin, settings)
  .use(createMetaManager())
  .mount('#app')
