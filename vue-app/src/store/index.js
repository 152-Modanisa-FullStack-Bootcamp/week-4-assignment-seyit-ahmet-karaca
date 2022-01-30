import Vue from 'vue'
import Vuex from 'vuex'
import API from "../api";

Vue.use(Vuex)

export const state = {
  videos : []
}

export const getters = {
  getVideos : function (state) {
    return state.videos
  }
}


export const mutations = {
  setVideos(state, payload){
    state.videos.push(...payload);
  }
}

export const actions = {
  async initVideos(context) {
    const videos = await API.getVideoList();
    context.commit('setVideos', videos);
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
