import { metaMap, titleMap } from '../components/metatags.js';


export default class App {
  private routes: { [key: string]: () => Promise<HTMLElement> };

  constructor() {
    this.routes = {
      '/': () => import('./home.js').then(module => module.default.render()),
      '/about': () => import('./about.js').then(module => module.default.render()),
    };

  }

  private async navigate(path: string) {
    const route = this.routes[path];

    if (route) {
      const page = await route();
      const content = document.getElementById('content');
      if (content) {
        content.innerHTML = ''; // Limpia el contenido anterior
        content.appendChild(page); // Añade el nuevo contenido

        this.updateMetaAndTitle(path); // Actualiza el título y los meta tags
      }
    } else {
      console.error('Ruta no encontrada');
    }
  }

  private updateMetaAndTitle(path: string) {
    // Actualiza el título
    document.title = titleMap[path] || 'Mi Aplicación';

    // Actualiza los meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');

    if (metaDescription) {
      metaDescription.setAttribute('content', metaMap[path]?.description ?? 'Descripción por defecto.'); // Usa el valor predeterminado
    }

    if (metaKeywords) {
      metaKeywords.setAttribute('content', metaMap[path]?.keywords ?? 'palabras, clave, por, defecto.'); // Usa el valor predeterminado
    }
  }

  public start() {
    document.addEventListener('DOMContentLoaded', () => {
      this.navigate(window.location.pathname);

      document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.tagName === 'A') {
          event.preventDefault();
          const path = target.getAttribute('href') || '';
          window.history.pushState({}, '', path);
          this.navigate(path);
        }
      });

      window.addEventListener('popstate', () => {
        this.navigate(window.location.pathname); // Maneja el retroceso del navegador
      });
    });
  }
}
