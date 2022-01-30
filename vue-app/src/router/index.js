import Vue from 'vue'
import VueRouter from 'vue-router'
import VideoListingPage from "../views/VideoListingPage";
import watchPage from "../views/WatchPage";

Vue.use(VueRouter)

export const routes = [
  {path: "/", component: VideoListingPage},
  {path: "/watch", component: watchPage}
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
