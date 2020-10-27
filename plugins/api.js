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
            AvatarChange(params) {
                return $request.post('/api/v2/member/detail/avatar', params);
            },
            MobileChange(params) {
                return $request.post('/api/v2/member/detail/mobile', params);
            },
            PasswordChange(params) {
                return $request.post('/api/v2/member/detail/password', params);
            },
            NicknameChange(params) {
                return $request.post('/api/v2/member/detail/nickname', params);
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
            },
            PromoCode() {
                return $request.get('/api/v2/member/promoCode');
            },
            PromoCodeCreate() {
                return $request.post('/api/v2/member/promoCode');
            },
            InviteUsers(params) {
                return $request.get('/api/v2/member/inviteUsers', params);
            },
            InviteBalanceRecords(params) {
                return $request.get('/api/v2/member/inviteBalanceRecords', params);
            },
            WithdrawRecords(params) {
                return $request.get('/api/v2/member/withdrawRecords', params);
            },
            Withdraw(params) {
                return $request.post('/api/v2/member/withdraw', params);
            },
            NotificationMarkAllAsRead() {
                return $request.get('/api/v2/member/notificationMarkAllAsRead');
            },
            NotificationMarkAsRead(id) {
                return $request.get('/api/v2/member/notificationMarkAsRead/' + id);
            },
            Credit1Records(params) {
                return $request.get('/api/v2/member/credit1Records', params);
            },
        },
        Role: {
            Index() {
                return $request.get('/api/v2/roles');
            }
        },
        Course: {
            Index(params) {
                return $request.get('/api/v2/courses', params);
            },
            Detail(id) {
                return $request.get('/api/v2/course/' + id);
            },
            Comments(id, params) {
                return $request.get('/api/v2/course/' + id + '/comments', params);
            },
            SubmitComment(id, params) {
                return $request.post('/api/v2/course/' + id + '/comment', params);
            },
            Like(id) {
                return $request.get('/api/v2/course/' + id + '/like');
            }
        }
    })
}