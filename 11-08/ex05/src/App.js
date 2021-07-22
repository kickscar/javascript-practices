import './assets/scss/App.scss';

export default function(){
    const app = document.createElement('h1');
    app.className = 'Header';
    app.textContent = 'Hello World';
    return app;
}