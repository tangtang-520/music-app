import { createSSRApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
const pinia = createPinia();
import uviewPlus from "@/uni_modules/uview-plus";

import pageHead from "@/components/pageHead";
import setUserPopup from "@/components/setUserPopup";



export function createApp() {
  const app = createSSRApp(App);
  app.use(pinia);
  app.use(uviewPlus);

  app.component('pageHead', pageHead)
  app.component('setUserPopup', setUserPopup)
  return {
    app,
  };
}
