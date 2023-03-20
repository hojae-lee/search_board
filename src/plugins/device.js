import Vue from 'vue'

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

export default {
  install(Vue) {
    Vue.prototype.$isMobile = isMobile
  }
}