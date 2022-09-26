import { createApp } from 'vue'
import App from './app.vue'
import VueEmotionPicker from '../src'

createApp(App)
  .use(VueEmotionPicker, {
    baseResUrl: 'https://raw.githubusercontent.com/BelinChung/api-mock/master/assets/emotions/'
  })
  .mount('#app')
