import { createApp } from 'vue'
import {createRouter,createWebHistory} from 'vue-router'
import {createPinia} from 'pinia'
import './index.css'
import App from './App.vue'

import Home from './views/Home.vue'
import About from './views/About.vue'


const pinia = createPinia()
const router = createRouter({
    history: createWebHistory(),    
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
    ]})

createApp(App).use(router).use(pinia).mount('body')
