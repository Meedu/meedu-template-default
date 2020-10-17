export default ({ app: { $request } }, inject) => {
    inject('api', {
        Base: {
            Config() {
                return $request.get('/api/v2/other/config');
            },
            CaptchaImage() {
                return $request.get('/api/v2/captcha/image');
            },
            SendSms(params) {
                return $request.post('/api/v2/captcha/sms', params);
            }
        },
        Auth: {
            LoginPassword(params) {
                return $request.post('/api/v2/login/password', params);
            },
            LoginSms(params) {
                return $request.post('/api/v2/login/sms', params);
            }
        }
    })
}