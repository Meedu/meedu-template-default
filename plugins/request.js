export default ({ app: { $axios } }, inject) => {
    let requestList = {}
    let methods = ['get', 'post', 'put', 'delete']
    methods.forEach(method => {
        let dataKey = method === 'get' ? 'params' : 'data'
        requestList[method] = function (url, data) {
            return $axios({
                method,
                url,
                [dataKey]: data
            }).catch(err => {
                return {
                    code: 500,
                    data: {},
                    message: err
                }
            })
        }
    })
    inject('request', requestList)
}