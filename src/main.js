import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './assets/scss/_main.scss'
import VueSelect from 'vue-select'
import VueDatePicker from '@vuepic/vue-datepicker'
import VueGallery from 'vue-gallery'
import YmapPlugin from 'vue-yandex-maps'


const settings = {
  apiKey: '85160a70-024d-405f-b7f4-d1b6974ae2cb',
  lang: 'en_US',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1'
}

const app = createApp(App)

app
  .use(router)
  .use(createPinia())
  .use(YmapPlugin, settings)
  .component('v-select', VueSelect)
  .component('VueDatePicker', VueDatePicker)
  .component('VGallery', VueGallery)
  .mount('#app')
