<template>
  <div class="video-listing-container">
    <video-card v-for="video in getVideos"
                :key="video.id"
                :data-id="video.id"
                :video="video"
    />

  </div>
</template>

<script>
import {mapGetters} from "vuex";
import VideoCard from "../components/VideoCard";

export default {
  name: "VideoListingPage",
  components: {
    VideoCard
  },
  computed: {
    ...mapGetters(["getVideos"])
  }
}
</script>

<style scoped>


.video-listing-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>