<template>
  <div class="video-card">
    <button @click="goToDetail" class="video-router">
    <img :src="getVideoImage" class="video-image"
         @mouseover="setCoverImage" @mouseleave="setHoverImage" alt=""/>
    </button>
    <div class="general-information">
      <img :src="video.ownerImage" class="owner-image" alt=""/>
      <div class="information-details">
        <div class="title">{{ video.title }}</div>
        <div class="owner-name"> {{ video.ownerName }}</div>
        <div class="display-info">
          <div class="view-count"> {{ video.viewCount }}</div>
          <div class="publish-date-in-month">{{ video.publishDateInMonth }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoCard",
  props: {
    video: Object
  },
  data() {
    return {
      isMouseOver: false
    }
  },
  methods: {
    setCoverImage() {
      this.isMouseOver = true;
    },
    setHoverImage() {
      this.isMouseOver = false;
    },
    goToDetail() {
      this.$router.push({path: "/watch", query:{ id : this.video.id}})
    }
  },
  computed: {
    getVideoImage() {
      if (this.isMouseOver) {
        return this.video.hoverImage
      } else {
        return this.video.coverImage
      }
    }
  }
}
</script>

<style scoped>
.video-card {
  background-color: #ffffff;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  width: 360px;
}

.video-image {
  width: 100%;
  height: 200px;
}

.video-router {
  border : none;
}

.general-information {
  width: 100%;
  display: flex;
  margin: 10px 10px 0 0;
}

.owner-image {
  width: 36px;
  height: 36px;
  border-radius: 50px;
  margin-right: 10px;
}

.title {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}

.owner-name {
  display: flex;
  justify-content: flex-start;
}

.display-info {
  display: flex;
  justify-content: flex-start;
}

.information-details {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
}

.owner-information > * {
  margin-bottom: 3px;
}

.publish-date-in-month {
  margin-left: 10px;
}
</style>