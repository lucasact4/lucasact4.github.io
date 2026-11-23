import { setupTheme } from './theme.js';
import { setupCelebrations } from './celebrations.js';
import { setupProjects } from './projects.js';
import { setupAge } from './age.js';

document.addEventListener('DOMContentLoaded', () => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    setupTheme();
    setupAge();
    setupCelebrations(reducedMotion);
    setupProjects(reducedMotion);

    const Tooltip = window.bootstrap?.Tooltip;
    if (Tooltip) {
        for (const anchor of document.querySelectorAll('[data-bs-toggle="tooltip"]')) {
            new Tooltip(anchor, {
                delay: { show: 0, hide: 100 },
                customClass: 'custom-tooltip',
                offset: [0, 21]
            });
        }
    }
});
