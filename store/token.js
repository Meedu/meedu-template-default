export const token = () => ({
    token: ''
})

export const mutations = {
    set(state, token) {
        state.token = token;
    },
    empty(state) {
        state.token = ''
    }
}