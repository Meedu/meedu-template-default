export const token = () => ({
    token: ''
})

export const mutations = {
    set(state, token) {
        state.token = token;
    },
    remove(state) {
        state.token = ''
    }
}