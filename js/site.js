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
});
