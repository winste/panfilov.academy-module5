import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './assets/scss/_main.scss'
import VueSelect from 'vue-select'
import VueDatePicker from '@vuepic/vue-datepicker'


const app = createApp(App)

app
  .use(router)
  .use(createPinia())
  .component('v-select', VueSelect)
  .component('VueDatePicker', VueDatePicker)
  .mount('#app')
