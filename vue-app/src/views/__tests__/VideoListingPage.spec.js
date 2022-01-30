import VideoListingPage from "@/views/VideoListingPage";
import VideoCard from "@/components/VideoCard";
import {shallowMount} from "@vue/test-utils";

jest.mock("@/api")

describe("VideoListingPage.vue", () => {

    it("VideoListingPage should exist", function () {
        const videos = [
            {
                "id": 1,
                "videoAddress": "https://www.youtube.com/watch?v=FXpIoQ_rT_c",
                "coverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-cover.webp",
                "hoverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-hover.webp",
                "title": "Vue.js Course for Beginners [2021 Tutorial]",
                "viewCount": 254,
                "publishDateInMonth": 4,
                "ownerImage": "https://yt3.ggpht.com/ytc/AKedOLTtJvQ1Vfew91vemeLaLdhjOwGx3tTBLlreK_QUyA=s68-c-k-c0x00ffffff-no-rj",
                "ownerName": "freeCodeCamp.org",
                "description": "Learn Vue 3 by in this full course. Vue.js is an open-source model–view–view model front end JavaScript framework for building user interfaces and single-page applications."
            }
        ]

        const wrapper = shallowMount(VideoListingPage,{
            mocks: {
                $store: {
                    getters: {
                        "getVideos": videos
                    }
                }
            }
        });
        expect(wrapper.exists()).toBeTruthy()
    });

    it("videos should render correctly", function () {
        const videos = [
            {
                "id": 1,
                "videoAddress": "https://www.youtube.com/watch?v=FXpIoQ_rT_c",
                "coverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-cover.webp",
                "hoverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-hover.webp",
                "title": "Vue.js Course for Beginners [2021 Tutorial]",
                "viewCount": 254,
                "publishDateInMonth": 4,
                "ownerImage": "https://yt3.ggpht.com/ytc/AKedOLTtJvQ1Vfew91vemeLaLdhjOwGx3tTBLlreK_QUyA=s68-c-k-c0x00ffffff-no-rj",
                "ownerName": "freeCodeCamp.org",
                "description": "Learn Vue 3 by in this full course. Vue.js is an open-source model–view–view model front end JavaScript framework for building user interfaces and single-page applications."
            }
        ]

        const wrapper = shallowMount(VideoListingPage, {
            mocks: {
                $store: {
                    getters: {
                        "getVideos": videos
                    }
                }
            }
        })

        const videoCards = wrapper.find(".video-listing-container").findAllComponents(VideoCard);
        expect(videoCards).toHaveLength(videos.length)
    });

})