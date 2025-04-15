export const languages = {
    en: 'English',
    es: 'Español',
    fr: 'Français',
};

export const defaultLang = 'en';

export const ui = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.twitter': 'Twitter',
        'principal.button': 'Click me',
        'blog.title': `Blog in ${languages.en}`,
        'blog.subtitle': `This is the subtitle in ${languages.en}`,
        'blog.text': `This is the text in ${languages.en}`,
    },
    es: {
        'nav.home': 'Inicio',
        'nav.about': 'Acerca de',
        'nav.twitter': 'Twitter',
        'principal.button': 'Hazme click',
        'blog.title': `Blog en ${languages.es}`,
        'blog.subtitle': `Este es el subtitulo en ${languages.en}`,
        'blog.text': `Este es el texto en ${languages.en}`,
    },
    fr: {
        'nav.home': 'Accueil',
        'nav.about': 'A propos',
        'nav.twitter': 'Twitter',
        'principal.button': 'Cliquez-moi',
        'blog.title': `Blog en ${languages.fr}`,
        'blog.subtitle': `Ceci est le sous-titre en ${languages.fr}`,
        'blog.text': `Ceci est le texte en ${languages.fr}`,
    }
} as const;