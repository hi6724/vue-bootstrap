import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Main from "./Main.vue";
import Detail from "./Detail.vue";
import Regist from "./Regist.vue";
import BootstrapVue from "bootstrap-vue";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "main",
      component: Main,
    },
    {
      path: "/detail/:no",
      name: "detail",
      component: Detail,
    },
    {
      path: "/regist",
      name: "regist",
      component: Regist,
    },
  ],
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
