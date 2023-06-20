import { learnMoreAnimation } from './app/animations.js';

const learnMoreBtns = document.querySelectorAll('[data-seclearnmore]');
const form = document.querySelector('#form');
const submitBtn = document.querySelector('#form-submit');

learnMoreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        learnMoreAnimation(btn);
    })
});

submitBtn.addEventListener('click', (e) => {
    localStorage.setItem('Msg', JSON.stringify(e.target.parentNode.childNodes[1].value))
})