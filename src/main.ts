import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vuetify from '@/plugin/vuetify'
import 'vuetify/styles'
// router
import router from "./router/index";


const app = createApp(App)

app.use(vuetify)
app.use(router)


app.mount('#app')
