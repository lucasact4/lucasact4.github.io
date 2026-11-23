export function setupProjects(reducedMotion) {
    for (const card of document.querySelectorAll('.project-card')) {
        const action = card.querySelector('.project-action');
        const details = card.querySelector('.collapse');
        let highlightTimer;

        card.addEventListener('click', () => {
            if (!action || reducedMotion.matches) return;
            action.classList.add('highlight-btn');
            clearTimeout(highlightTimer);
            highlightTimer = setTimeout(() => action.classList.remove('highlight-btn'), 300);
        });

        if (details) {
            details.addEventListener('show.bs.collapse', () => card.classList.add('is-expanded'));
            details.addEventListener('hide.bs.collapse', () => card.classList.remove('is-expanded'));
        }
    }
}
