import content from './hello.txt';

export default function(){
    const app = document.createElement('h1');
    app.textContent = content.text;

    return app;
}