export function learnMoreAnimation(btn, image) {
    if(btn.style.height != `${image.height}px`) {
        btn.style.height = `${image.height}px`;
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