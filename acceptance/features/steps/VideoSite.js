const {Given, When, Then} = require("cucumber");
const openUrl = require("../support/action/openUrl")
const checkElementExists = require("../support/check/checkElementExists")
const checkUrlContains = require("../support/check/checkUrlContains")
const assert = require("assert");
const {ElementHandle} = require("puppeteer");

Given(/^that User goes to Video Site Project's HomePage$/, async function () {
    await openUrl.call(this, "http://localhost:8080/")
    await checkElementExists.call(this, ".main-video-container", false)
});

When(/^page is loaded$/, async function () {
    await checkElementExists.call(this, ".main-video-container", false)
});

Then(/^User can see some of videos' title like$/, async function (videoTitles) {
    const selector = ".video-card .title"
    const textContentOfTitles = await this.page.$$eval(selector, items => items.map(item => item.textContent));
    for ([title] of videoTitles.rawTable) {
        if (textContentOfTitles.findIndex(content => content === title) === -1) {
            throw "exception"
        }
    }
});

When(/^User clicks "([^"]*)" video$/, async function (videoTitle) {
    const selector = ".video-card"
    const videoId = await this.page.$$eval(selector,
        (items, videoTitle) => {
            const card = items.find(item => item.querySelector(".title").textContent === videoTitle);
            card.querySelector(".video-image").click()
            const {id} = card.dataset
            return id
        },
        videoTitle)
    this.videoId = videoId
});

Then(/^User should see watch url correctly$/, async function () {
    // Navigation timeout of 30000 ms exceeded hatası verdiği için yoruma alındı
    // await this.page.waitForNavigation()
    await this.page.waitForTimeout(3000)
    await checkUrlContains.call(this, false, `/watch?id=${this.videoId}`)
});

When(/^User hovers "([^"]*)" video$/, async function (videoTitle) {
    const selector = ".video-card"
    const videoCards = await this.page.$$(selector)
    for (const video of videoCards) {
        const check = await video.$eval(".title",
            (title, videoTitle) => {
                return title.textContent === videoTitle
            },
            videoTitle
        )
        if (check) {
            this.videoCard = await video.$(".video-image")
        }
    }
});
Then(/^User should see hovered image$/, async function () {
    this.videoCard.hover()
    await this.page.waitForTimeout(5000)
});