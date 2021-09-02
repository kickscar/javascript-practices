import logo from './assets/images/logo.png'

export default function() {
    const app = document.createElement('div');
    app.innerHTML = `<img src=${logo} alt='logo' />`

    return app;
}