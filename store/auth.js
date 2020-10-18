export const state = () => ({
    auth: false,
    user: null
})

export const mutations = {
    comein(state) {
        state.auth = true;
    },
    comeout() {
        state.auth = false;
    },
    set(state, user) {
        state.user = user;
        state.auth = true;
    },
    remove(state) {
        state.auth = false;
        state.user = null;
    }
}