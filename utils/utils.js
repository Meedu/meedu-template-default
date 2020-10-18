
export default {
    loginHandler(ctx, token) {
        let $cookies, $store;
        if (process.client) {
            $cookies = ctx.$cookies;
            $store = ctx.$store;
        } else if (process.server) {
            $cookies = ctx.app.$cookies;
            $store = ctx.store;
        }
        if ($cookies && $store) {
            // cookie token
            $cookies.set('token', token, { maxAge: 60 * 60 * 24 * 7, path: '/' })
            $store.commit('auth/comein');
        }
    },
    logout(ctx) {
        let $cookies, $store;
        if (process.client) {
            $cookies = ctx.$cookies;
            $store = ctx.$store;
        } else if (process.server) {
            $cookies = ctx.app.$cookies;
            $store = ctx.store;
        }
        if ($cookies && $store) {
            $cookies.remove('token');
            $store.commit('auth/comeout');
            window.location.href = '/';
        }
    }
}