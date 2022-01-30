const {Given} = require("cucumber");
const openUrl = require("../support/action/openUrl")

Given(/^Sanity$/,async function () {
    await openUrl.call(this,"https://www.google.com")
    console.log("selam")
});