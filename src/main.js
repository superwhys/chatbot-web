import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "element-ui/lib/theme-chalk/display.css";

import { Aside, Container, Main } from "element-ui";
Vue.use(Aside);
Vue.use(Container);
Vue.use(Main);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
