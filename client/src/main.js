import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import axios from "axios";

const pinia = createPinia();

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

createApp(App).use(pinia).use(router).mount("#app");
