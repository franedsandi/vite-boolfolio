import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Contacts from "./pages/Contacts.vue";
import Projects from "./pages/Projects.vue";
import ProjectDetails from "./pages/ProjectDetails.vue";
import Error404 from "./pages/Error404.vue";

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: ' active',

  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/About",
      name: "About",
      component: About
    },
    {
      path: "/Contacts",
      name: "Contacts",
      component: Contacts
    },
    {
      path: "/Projects",
      name: "Projects",
      component: Projects
    },
    {
      path: "/Projects/:slug",
      name: "ProjectDetails",
      component: ProjectDetails
    },






    {
      path: "/:pathmatch(.*)*",
      name: 'Error-404',
      component: Error404
    }
  ]
});

export { router };