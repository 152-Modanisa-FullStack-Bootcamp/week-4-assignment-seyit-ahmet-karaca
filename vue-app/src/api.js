import axios from 'axios';
import adapter from "axios/lib/adapters/http"

axios.defaults.adapter = adapter;

export class API {
    constructor(url) {
        if (url === undefined || url === "") {
            url = process.env.VUE_APP_BASE_API_URL;
        }

        if (url.endsWith("/")) {
            url = url.substr(0, url.length - 1)
        }
        this.url = url
    }

    withPath(path) {
        if (!path.startsWith("/")) {
            path = "/" + path
        }
        return `${this.url}${path}`
    }

    async getVideoList() {
        return axios.get(this.withPath('/videos'))
            .then(data => data.data);
    }
}

export default new API(process.env.VUE_APP_BASE_API_URL);
