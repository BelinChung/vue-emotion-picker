import VueEmotionPicker from './picker.vue'
import { parseEmotion } from './utils'
import { setGlobalOptions } from './options'

// Declare install function executed by Vue.use()
function install(Vue, opts = {}) {
  if (install.installed) return
  install.installed = true
  setGlobalOptions(opts)
  Vue.component('VueEmotionPicker', VueEmotionPicker)
}

VueEmotionPicker.install = install

// Create module definition for Vue.use()
const plugin = {
  install
}

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

export default VueEmotionPicker

export { VueEmotionPicker, parseEmotion }
