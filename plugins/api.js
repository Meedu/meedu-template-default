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
                return $request.post('/api/v2/login/mobile', params);
            },
            RegisterSms(params) {
                return $request.post('/api/v2/register/sms', params);
            },
            PasswordReset(params) {
                return $request.post('/api/v2/password/reset', params);
            }
        },
        Member: {
            Detail() {
                return $request.get('/api/v2/member/detail');
            },
            Courses(params) {
                return $request.get('/api/v2/member/courses', params);
            },
            LikeCourses(params) {
                return $request.get('/api/v2/member/courses/like', params);
            },
            HistoryCourses(params) {
                return $request.get('/api/v2/member/courses/history', params);
            },
            Videos(params) {
                return $request.get('/api/v2/member/videos', params);
            },
            Orders(params) {
                return $request.get('/api/v2/member/orders', params);
            },
            Roles(params) {
                return $request.get('/api/v2/member/roles', params);
            },
            Notifications(params) {
                return $request.get('/api/v2/member/messages', params);
            }
        }
    })
}