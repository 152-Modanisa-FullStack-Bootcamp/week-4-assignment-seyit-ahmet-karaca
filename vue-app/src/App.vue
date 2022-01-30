<template>
  <div id="app">
    <div class="main-video-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex"
import VideoListingPage from "./views/VideoListingPage";

export default {
  name: "App",
  components: {
    VideoListingPage
  },
  methods: {
    ...mapActions(['initVideos'])
  },
  created() {
    this.initVideos()
  }
}
</script>

<style>
#app {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}

.main-video-container {
  display: flex;
  width: 1540px;
  flex-direction: column;
}

</style>
