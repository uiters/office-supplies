import axios from 'axios'

export default function apiService(method, url, data) {
    return axios({
        method: method,
        url: url,
        data: data,
    }).catch(console.log)
}
