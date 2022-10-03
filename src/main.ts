import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

import { createRouter, createWebHistory } from 'vue-router'
import DashboardVue from "./views/Dashboard.vue";
import ShowDetailsVue from "./views/ShowDetails.vue";
import NotFoundVue from "./views/NotFound.vue";
import SearchVue from "./views/Search.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: DashboardVue
    },
    {
        path: '/search/:query',
        name: 'Search',
        component: SearchVue
    },
    {
      path: '/shows/:id',
      name: 'ShowDetails',
      component: ShowDetailsVue
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: NotFoundVue 
    },
]

const router = createRouter({ history: createWebHistory(), routes });

createApp(App).use(router).mount("#app");
