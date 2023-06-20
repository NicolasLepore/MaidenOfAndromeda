export function learnMoreAnimation(btn) {
    if(btn.style.height != '466px') {
        btn.style.height = '466px';
        btn.style.backgroundPosition = 'top';

        setTimeout(() => {
            const ul = btn.childNodes[1];
            ul.style.display = 'flex';

        }, 200);

        return;
    }

    btn.style.height = '100px';
    btn.style.backgroundPosition = 'center';
    const ul = btn.childNodes[1];
    ul.style.display = 'none';
}