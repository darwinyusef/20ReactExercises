import { Button } from '../components/button.js'; // Importa la clase Button

export default class Home {
    public static render(): HTMLElement {
        const div = document.createElement('div');
        div.innerHTML = `
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <a href="/about">Go to About Page</a>
    `;

        // Crea una instancia de Button
        const alertButton = new Button('Show Alert', () => {
            alert('¡Botón de alerta presionado!');
        });

        div.appendChild(alertButton.render()); // Añade el botón al div
        return div;
    }
}