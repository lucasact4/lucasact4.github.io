import { setupTheme } from './theme.js';
import { setupCelebrations } from './celebrations.js';
import { setupProjects } from './projects.js';
import { setupAge } from './age.js';
import { setupReveal } from './reveal.js';

document.addEventListener('DOMContentLoaded', () => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    setupTheme();
    setupAge();
    setupCelebrations(reducedMotion);
    setupProjects(reducedMotion);
    setupReveal(reducedMotion);
});
