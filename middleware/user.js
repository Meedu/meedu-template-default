export default function (context) {
    const { app, store } = context
    const cookiesToken = app.$cookies.get('token') || null;
    if (cookiesToken) {
        return app.$api.Member.Detail().then(res => {
            if (res.code === 0) {
                store.commit('auth/set', res.data);
            } else {
                // 删除cookie
                app.$cookies.remove('token');
            }
        })
    }

}