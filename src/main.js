import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'vue-search-input/dist/styles.css'

library.add(faMagnifyingGlass)

const app = createApp(App)

app.use(VueAxios, axios);
app.component(
    'font-awesome-icon', FontAwesomeIcon)
.mount('#app')
