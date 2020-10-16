export const user = () => ({
    auth: false,
    user: null
})

export const mutations = {
    set(state, user) {
        state.user = user;
    },
    remove(state) {
        state.auth = false;
        state.user = null;
    }
}