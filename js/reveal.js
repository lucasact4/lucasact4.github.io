export function setupReveal(reducedMotion) {
    if (reducedMotion.matches || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (!entry.isIntersecting) continue;

            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    }, { rootMargin: '0px 0px -24px 0px' });

    for (const element of document.querySelectorAll('[data-reveal]')) {
        observer.observe(element);
    }
}
