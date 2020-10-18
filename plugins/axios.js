import config from '../config';

export default function ({ app: { $axios, $cookies } }) {
    $axios.defaults.baseURL = config.url
    $axios.defaults.timeout = 30000
    $axios.interceptors.request.use(config => {
        let token = $cookies.get('token') || '';
        config.headers['Authorization'] = 'Bearer ' + token
        config.headers['meedu-platform'] = 'PC';
        return config
    })
    $axios.interceptors.response.use(response => {
        if (/^[4|5]/.test(response.status)) {
            return Promise.reject(response.statusText)
        }
        return response.data
    })
}