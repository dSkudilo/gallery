import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/ui'
import './style/index.scss'

const app = createApp(App)

components.forEach(component => app.component(component.name,component))

app 
    .mount('#app')
