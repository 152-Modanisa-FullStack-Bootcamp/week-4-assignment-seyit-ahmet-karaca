import {shallowMount} from "@vue/test-utils";
import App from "@/App"

jest.mock("@/api")

describe("App.vue", () => {
    it("should App.vue render correctly", function () {
        const mockInit = jest.fn()

        const wrapper = shallowMount(App, {
            methods: {
                initVideos : mockInit
            }
        })

        expect(wrapper.exists()).toBeTruthy()

        const videoContainer = wrapper.findAll("#app > .main-video-container");
        expect(videoContainer.exists()).toBeTruthy()
        expect(mockInit).toHaveBeenCalled()
    });
})