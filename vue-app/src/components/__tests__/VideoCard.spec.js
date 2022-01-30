import {shallowMount} from "@vue/test-utils";
import VideoCard from "@/components/VideoCard";

describe("VideoCard.vue", () => {
    let wrapper
    let video
    beforeEach(() => {
        video = {
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
        wrapper = shallowMount(VideoCard, {
            propsData: {
                video
            }
        })
    })

    it("should video card exists", function () {
        expect(wrapper.exists()).toBeTruthy()
    });

    it("should video card properties set correctly", function () {

        const videoCard = wrapper.find(".video-card");
        const videoImage = wrapper.find(".video-card .video-image");
        const ownerUImage = wrapper.find(".video-card .general-information .owner-image");
        const informationDetails = wrapper.find(".video-card .general-information .information-details");
        const title = wrapper.find(".information-details .title");
        const ownerName = wrapper.find(".information-details .owner-name");
        const displayInfo = wrapper.find(".information-details .display-info");
        const viewCount = wrapper.find(".information-details .display-info .view-count");
        const publishDateInMonth = wrapper.find(".information-details .display-info .publish-date-in-month");

        expect(videoCard.exists()).toBeTruthy()

        expect(videoImage.exists()).toBeTruthy()
        expect(videoImage.attributes().src).toStrictEqual(video.coverImage)

        expect(ownerUImage.exists()).toBeTruthy()
        expect(ownerUImage.attributes().src).toStrictEqual(video.ownerImage)

        expect(informationDetails.exists()).toBeTruthy()

        expect(title.exists()).toBeTruthy()
        expect(title.text()).toStrictEqual(video.title)

        expect(ownerName.exists()).toBeTruthy()
        expect(ownerName.text()).toStrictEqual(video.ownerName)

        expect(displayInfo.exists()).toBeTruthy()

        expect(viewCount.exists()).toBeTruthy()
        expect(Number(viewCount.text())).toStrictEqual(video.viewCount)

        expect(publishDateInMonth.exists()).toBeTruthy()
        expect(Number(publishDateInMonth.text())).toStrictEqual(video.publishDateInMonth)
    });

    it("should ", function () {
        const localThis = {
            isMouseOver: false,
            video
        }
        const coverImage = VideoCard.computed.getVideoImage.call(localThis);
        expect(coverImage).toStrictEqual(video.coverImage)

        localThis.isMouseOver = !localThis.isMouseOver;
        const hoverImage = VideoCard.computed.getVideoImage.call(localThis);
        expect(hoverImage).toStrictEqual(video.hoverImage)

    });

    it("should navigate to detail page", async function () {
        const videoRouterLink = wrapper.find(".video-router");

        const goToDetail = jest.fn()
        wrapper.setMethods({"goToDetail": goToDetail})

        await videoRouterLink.trigger("click")

        expect(goToDetail).toHaveBeenCalled()
    });

    it("should change video image state", function () {

        const localThis = {
            isMouseOver: false
        }

        VideoCard.methods.setHoverImage.call(localThis)
        expect(localThis.isMouseOver).toBeFalsy()

        VideoCard.methods.setCoverImage.call(localThis)
        expect(localThis.isMouseOver).toBeTruthy()
    });

    it("should change video image when mouse on over the video", async function () {
        const setCoverImage = jest.spyOn(VideoCard.methods, "setCoverImage")
        const setHoverImage = jest.spyOn(VideoCard.methods, "setHoverImage")

        video = {
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
        wrapper = shallowMount(VideoCard, {
            propsData: {
                video
            }
        })

        const videoImage = wrapper.find(".video-card .video-image");
        await videoImage.trigger("mouseover")
        await videoImage.trigger("mouseleave")

        expect(setCoverImage).toHaveBeenCalled()
        expect(setHoverImage).toHaveBeenCalled()
    });
})