import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/ui'
import './style/index.scss'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const app = createApp(App)

components.forEach(component => app.component(component.name,component))
library.add(faHeart)
app 
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
