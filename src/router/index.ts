import Home from "../Views/Home.vue";
import Profile from "../Views/Profile.vue";

export const routes = [
  { path: '/', component: Home },
  { path: '/profile/:id', component: Profile }
]
