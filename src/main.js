import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import PageOne from "./PageOne.vue";
import PageTwo from "./PageTwo.vue";
import PageThree from "./PageThree.vue";
import PageFour from "./PageFour.vue";
import BootstrapVue from "bootstrap-vue";
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
    },
    {
      path: "/pageone",
      name: "pageone",
      component: PageOne,
    },
    {
      path: "/pagetwo",
      name: "pagetwo",
      component: PageTwo,
    },
    {
      path: "/pagethree",
      name: "pagethree",
      component: PageThree,
    },
    {
      path: "/pagefour",
      name: "pagefour",
      component: PageFour,
    },
  ],
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
