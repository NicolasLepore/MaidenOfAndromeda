import { readMoreAnimation } from './app/animations.js';

const readMoreBtns = document.querySelectorAll('[data-secreadmore]');
const image = document.querySelector('[data-container-img]');
const form = document.querySelector('#form');
const submitBtn = document.querySelector('#form-submit');

readMoreBtns.forEach((btn, i) => {

    btn.style.width = `${image.width}px`;

    if(i == 1) {
        btn.style.left = `calc(50% - ${image.width}px / 2)`;
    } 

    if(i == 2) {
        btn.style.left = `calc(100% - ${image.width}px)`;
    }
    
    btn.addEventListener('click', () => {
        readMoreAnimation(btn, image);
    })
});

submitBtn.addEventListener('click', (e) => {
    localStorage.setItem('Msg', JSON.stringify(e.target.parentNode.childNodes[1].value))
})