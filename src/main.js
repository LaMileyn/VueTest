import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.scss'
import money from 'v-money'


createApp(App).use(money,{precision: 4}).mount('#app')
