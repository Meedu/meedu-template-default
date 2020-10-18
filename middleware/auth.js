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
            store.commit('auth/set', res.data);
        }
    })
}