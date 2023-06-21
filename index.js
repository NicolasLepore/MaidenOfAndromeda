import { learnMoreAnimation } from './app/animations.js';

const learnMoreBtns = document.querySelectorAll('[data-seclearnmore]');
const image = document.querySelector('[data-container-img]');
const form = document.querySelector('#form');
const submitBtn = document.querySelector('#form-submit');

learnMoreBtns.forEach((btn, i) => {

    btn.style.width = `${image.width}px`;

    if(i == 1) {
        btn.style.left = `calc(50% - ${image.width}px / 2)`;
    } 

    if(i == 2) {
        btn.style.left = `calc(100% - ${image.width}px)`;
    }
    
    btn.addEventListener('click', () => {
        learnMoreAnimation(btn, image);
    })
});

submitBtn.addEventListener('click', (e) => {
    localStorage.setItem('Msg', JSON.stringify(e.target.parentNode.childNodes[1].value))
})