export class Button {
    private element: HTMLButtonElement;

    constructor(label: string, onClick: () => void) {
        this.element = document.createElement('button');
        this.element.textContent = label;
        this.element.addEventListener('click', () => this.handleClick(onClick));
    }

    private handleClick(onClick: () => void) {
        onClick(); 
    }

    public render(): HTMLButtonElement {
        return this.element;
    }

    public setLabel(label: string): void {
        this.element.textContent = label;
    }
}