import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ActorsView from "../views/ActorsView.vue";
import ProfileView from "../views/ProfileView.vue";
import ContactView from "../views/ContactView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/Actors",
    name: "Actors",
    component: ActorsView,
  },
  {
    path: "/Profile",
    name: "Profile",
    component: ProfileView,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: ContactView,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
