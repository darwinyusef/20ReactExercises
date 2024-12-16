class Heading {
    constructor(content) {
        this.content = content;
    }

    generateHTML() {
        return `<h1>${this.content} Pepito Clavo un clavito</h1>`;
    }
}

export default Heading;