import { createSSRApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
const pinia = createPinia();
import uviewPlus from "@/uni_modules/uview-plus";

export function createApp() {
  const app = createSSRApp(App);
  app.use(pinia);
  app.use(uviewPlus);
  return {
    app,
  };
}
