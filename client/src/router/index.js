import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from "../components/DefaultLayout.vue";
import Creation from "../views/Creation.vue";
import EditTask from "../views/EditTask.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "creation",
        component: Creation,
      },
      {
        path: "/editTask:id",
        name: "editTask",
        component: EditTask,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
