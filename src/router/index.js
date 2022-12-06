import { createRouter, createWebHistory } from "vue-router";
import UpcomingView from "../views/UpcomingView.vue";
import PopulaireView from "../views/PopulaireView.vue";
import ProfileView from "../views/ProfileView.vue";
import ContactView from "../views/ContactView.vue";
import MovieView from "../views/MovieView.vue";

const routes = [
  {
    path: "/",
    name: "Upcoming",
    component: UpcomingView,
  },
  {
    path: "/Populaire",
    name: "Populaire",
    component: PopulaireView,
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
  {
    path: "/Movie/:id",
    name: "Movie",
    component: MovieView,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
