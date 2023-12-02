import {createApp} from "vue";
import App from "@/App.vue";
import "./assets/main.css";
import {createPinia} from "pinia";

// 创建应用实例
const app = createApp(App);
// 创建 Pinia 实例
const pinia = createPinia();
// 注册 Pinia 实例
app.use(pinia);


// 将应用实例挂载到页面
app.mount("#app");