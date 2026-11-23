function originAt(element, verticalOffset = 0) {
    const bounds = element.getBoundingClientRect();
    return {
        x: (bounds.left + bounds.width / 2) / window.innerWidth,
        y: (bounds.top + bounds.width * verticalOffset) / window.innerHeight
    };
}

export function setupCelebrations(reducedMotion) {
    const confetti = window.confetti;
    if (typeof confetti !== 'function') return;

    const launch = options => confetti({ ...options, disableForReducedMotion: true });
    for (const skill of document.querySelectorAll('.sectiontwo__icon-container')) {
        skill.addEventListener('click', () => {
            if (reducedMotion.matches) return;

            const origin = originAt(skill);
            launch({ particleCount: 10, spread: 100, startVelocity: 25, origin });
            if (!skill.querySelector('.with-heart')) return;

            const scalar = 1.5;
            const heart = confetti.shapeFromText({ text: '❤️', scalar, font: 'bold 28px Arial' });
            for (const delay of [0, 300, 600, 900]) {
                setTimeout(() => launch({
                    particleCount: 2, spread: 120, ticks: 100,
                    gravity: -0.2, decay: 0.95, startVelocity: 5,
                    shapes: [heart], scalar, origin
                }), delay);
            }
        });
    }

    const photo = document.querySelector('.glass-shine-effect-profile');
    if (!photo) return;

    const updatePhoto = () => { photo.disabled = reducedMotion.matches; };
    updatePhoto();
    reducedMotion.addEventListener('change', updatePhoto);
    photo.addEventListener('click', () => {
        if (reducedMotion.matches) return;

        const scalar = 2;
        const symbol = confetti.shapeFromText({
            text: '</>', scalar, font: 'bold 32px Arial', color: 'black',
            shadow: { color: 'black', blur: 10, offsetX: 2, offsetY: 2 }
        });
        const burst = {
            spread: 360, ticks: 60, gravity: 0, decay: 0.96, startVelocity: 20,
            shapes: [symbol], scalar, origin: originAt(photo, 0.5)
        };
        launch({ ...burst, particleCount: 5, flat: true });
        launch({ ...burst, particleCount: 15, shapes: ['circle'], scalar: 1 });
        for (const delay of [0, 100, 200]) {
            setTimeout(() => launch({ ...burst, particleCount: 30 }), delay);
        }
    });
}
