import logo from './logo.svg';
import './App.scss';

export default function() {
    console.log(logo);

    const app = document.createElement('div');
    app.className = 'App';
    app.innerHTML =
        `<header class="App-header">
            <img src=${logo} class="App-logo" alt="logo"/>
            <p>Hello World</p>
        </header>`;
    return app;
}