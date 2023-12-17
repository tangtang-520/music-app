import { createSSRApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
const pinia = createPinia();
import uviewPlus from "@/uni_modules/uview-plus";

import pageHead from "@/components/pageHead/pageHead";
import setUserPopup from "@/components/setUserPopup/setUserPopup";
import miniPlay from "@/components/miniPlay/miniPlay";
// import hdCircle from "@/uni_modules/hd-circle/components/hd-circle/hd-circle";
import musicList from "@/components/musicList/musicList";


export function createApp() {
  const app = createSSRApp(App);
  app.use(pinia);
  app.use(uviewPlus);

  app.component("pageHead", pageHead);
  app.component("setUserPopup", setUserPopup);
  app.component("miniPlay", miniPlay);
  // app.component("hd-circle", hdCircle);
  app.component("musicList", musicList);
  return {
    app,
  };
}
