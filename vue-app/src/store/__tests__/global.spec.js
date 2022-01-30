import {mutations, state, actions} from "@/store/index";
import API from "@/api"

jest.mock("@/api")

describe("mutations test", () => {
    it("fill video state", function () {
        const videos = [{
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
        }]

        mutations.setVideos(state, videos)
        expect(state.videos).toHaveLength(videos.length)
    });
})

describe("actions test", () => {
    it("pass to videos state from api", async function () {
        const videos = [{
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
        }]

        const context = {
            commit: jest.fn()
        }

        API.getVideoList.mockResolvedValue(videos)

        await actions.initVideos(context)
        expect(context.commit).toHaveBeenCalled()
        expect(context.commit).toHaveBeenCalledWith("setVideos", videos)
    });
})