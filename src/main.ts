import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter } from "./router";
import { setupStore } from "./store";

const bootstrap = () => {
    const app = createApp(App);

    // 配置路由
    setupRouter(app);

    // 配置store
    setupStore(app);

    app.mount("#app");
};

bootstrap();
