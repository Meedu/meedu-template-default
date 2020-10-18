export default function (context) {
    const { app, redirect } = context
    const cookiesToken = app.$cookies.get('token') || null;
    if (cookiesToken) {
        redirect('/')
    }
}