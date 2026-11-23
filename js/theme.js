export function setupTheme() {
    const button = document.querySelector('[data-theme-toggle]');
    if (!button) return;

    const root = document.documentElement;
    button.setAttribute('aria-pressed', String(root.dataset.theme === 'light'));

    button.addEventListener('click', () => {
        const theme = root.dataset.theme === 'light' ? 'dark' : 'light';
        root.dataset.theme = theme;
        button.setAttribute('aria-pressed', String(theme === 'light'));
        try {
            localStorage.setItem('portfolio-theme', theme);
        } catch {}
    });
}
