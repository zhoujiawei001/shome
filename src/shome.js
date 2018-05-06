import {shBar} from './lib/shBar'
import {shButton} from './lib/shButton'

const install = function (Vue) {
  Vue.component(shBar.name, shBar)
  Vue.component(shButton.name, shButton)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
