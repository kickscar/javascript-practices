import './assets/css/App.css';

export default function(){
    const app = document.createElement('h1');
    app.className = 'Header';
    app.textContent = 'Hello World';
    return app;
}