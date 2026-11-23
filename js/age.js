export function setupAge(today = new Date()) {
    for (const element of document.querySelectorAll('[data-birthdate]')) {
        const [year, month, day] = element.dataset.birthdate.split('-').map(Number);
        if (!year || !month || !day) continue;

        let age = today.getFullYear() - year;
        const beforeBirthday = today.getMonth() + 1 < month
            || (today.getMonth() + 1 === month && today.getDate() < day);
        if (beforeBirthday) age -= 1;

        element.textContent = `${age} anos`;
    }
}
