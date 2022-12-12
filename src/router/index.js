import { createRouter, createWebHistory } from "vue-router";
import UpcomingView from "../views/UpcomingView.vue";
import PopulaireView from "../views/PopulaireView.vue";
import WatchlistView from "../views/WatchlistView.vue";
import ContactView from "../views/ContactView.vue";
import AboutView from "../views/AboutView.vue";
import MovieUpcomingView from "../views/MovieUpcomingView.vue";
import MoviePopulaireView from "../views/MoviePopulaireView.vue";

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
    path: "/Watchlist",
    name: "Watchlist",
    component: WatchlistView,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: ContactView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/MovieUpcoming/:id",
    name: "MovieUpcoming",
    component: MovieUpcomingView,
  },
  {
    path: "/MoviePopulaire/:id",
    name: "MoviePopulaire",
    component: MoviePopulaireView,
  },
  
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;