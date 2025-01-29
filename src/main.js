import './assets/main.css'
import '../src/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './stores/index.js'
// import './assets/css/tailwind.css'
// import './assets/css/carousel.css'
import ApiService from './services/api.services'
ApiService.init('http://203.161.63.214:8000', store) // Veuillez vous assurez que sur cette ligne vous récuperer bien l'adresse du service bon host bon port
// await store.dispatch("AuthenticationModule/login", {login: 'richo2002.44@gmail.com', hashed_password: 'damien@doevi'})
createApp(App).use(store).use(router).mount('#app')
