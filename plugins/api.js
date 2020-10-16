export default ({ app: { $request } }, inject) => {
    inject('api', {
        Base: {
            Config() {
                return $request.get('/api/v2/other/config');
            },
            CaptchaImage() {
                return $request.get('/api/v2/captcha/image');
            }
        }
    })
}