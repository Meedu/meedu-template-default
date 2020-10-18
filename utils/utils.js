
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
            let expiredAt = new Date(Date.now() + 8.64e7 * 365 * 10);
            $cookies.set('token', token, { expiredAt })
            // store
            $store.commit('token/set', token);
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
            // store
            $store.commit('token/remove');
        }
    }
}