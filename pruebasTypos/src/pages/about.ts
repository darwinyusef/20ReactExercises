export default class About {
    public static render(): HTMLElement {
        const div = document.createElement('div');
        div.innerHTML = `<h1>About Page</h1>
                       <p>This is the About Page!</p>
                       <a href="/">Go to Home Page</a>`;
        return div;
    }
}
