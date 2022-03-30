import { createRouter, createWebHistory } from "vue-router";
import Department from "../views/DepartmentView.vue";

const routes = [
  {
    path: "/department/:name",
    name: "department",
    component: Department,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
