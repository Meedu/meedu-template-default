export default function (context) {
    const { app, store, redirect } = context
    const cookiesToken = app.$cookies.get('token') || null;
    if (!cookiesToken) {
        redirect('/auth/login');
    }
    return app.$api.Member.Detail().then(res => {
        if (res.code !== 0) {
            app.$utils.logout(context);
            redirect('/auth/login');
        } else {
            // 删除cookie
            // app.$cookies.remove('token');
            // 登出
            store.commit('auth/set', res.data);
        }
    })
}