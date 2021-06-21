import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Over from "../views/PageOver.vue";
import Task from "../views/PageTask.vue";


Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/task",
    name: "Task",
    component: Task,
  },
  {
    path: '/over',
    name: "Over",
    component: Over,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
