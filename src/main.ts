import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setStore } from '@/store/index'

// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'normalize.css'
import './assets/css/index.less'

import registerGloab from '@/global'
// import hYrequest from '@/service/indes'

const app = createApp(App)

// app.use(ElementPlus)
registerGloab(app)
setStore()
app.use(store)
app.use(router)
app.mount('#app')

// console.log(process.env.VUE_APP_BASE_URL)
// hYrequest.requset({
//   url: '/home/ul'
// })
