import "./bootstrap";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Drawer, List, Menu, Button, message } from "ant-design-vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "ant-design-vue/dist/reset.css";

const app = createApp(App);
app.use(router);
app.use(Menu);
app.use(List);
app.use(Button);
app.use(Drawer);
app.mount("#app");

app.config.globalProperties.$message = message;
