import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import YmapPlugin from 'vue-yandex-maps'
import { createMetaManager } from 'vue-meta'
import 'vue-universal-modal/dist/index.css'
import VueUniversalModal from 'vue-universal-modal'
import './assets/scss/main.scss'

const settings = {
  apiKey: '85160a70-024d-405f-b7f4-d1b6974ae2cb',
  lang: 'en_US',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1',
}

createApp(App)
  .use(router)
  .use(createPinia())
  .use(YmapPlugin, settings)
  .use(createMetaManager())
  .use(VueUniversalModal, {
    teleportTarget: '#modals',
  })
  .mount('#app')

// слушатель для закрытия бургера при клике вне навигации
document.body.addEventListener('mouseup', (e) => {
  const clickTarget = e.target.classList
  const classNames = ['burger__item', 'navbar']

  if (!classNames.some((className) => clickTarget.contains(className))) {
    Array.from(document.querySelectorAll('.open')).forEach((item) =>
      item.classList.remove('open')
    )
  }
})
