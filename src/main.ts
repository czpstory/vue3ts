import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import registerGloab from '@/global'
// import hYrequest from '@/service/indes'

const app = createApp(App)
// app.use(ElementPlus)
registerGloab(app)
app.use(store)
app.use(router)
app.mount('#app')

// console.log(process.env.VUE_APP_BASE_URL)
// hYrequest.requset({
//   url: '/home/ul'
// })
