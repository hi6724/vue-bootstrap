import Vue from "vue";
import VueRouter from "vue-router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import App from "@/App.vue";
import Main from "@/pages/Main.vue";
import Detail from "@/pages/Detail.vue";
import Regist from "@/pages/Regist.vue";
import UserLogin from "@/pages/UserLogin.vue";
import UserSignUp from "@/pages/UserSignUp.vue";

import store from "@/store";

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
    {
      path: "/login",
      name: "login",
      component: UserLogin,
    },
    {
      path: "/signup",
      name: "signup",
      component: UserSignUp,
    },
  ],
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
