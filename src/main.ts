import App from './App.vue';
import {createApp} from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import router from "./router/index.ts";
import store from "./store";
import "./global.less";
import IconSvg from "@/components/IconSvg.vue";
import 'virtual:svg-icons-register';

const app = createApp(App)
app.use(router)
app.use(Antd)
app.use(store)
app.component('svg-icon', IconSvg)
app.mount('#app')
