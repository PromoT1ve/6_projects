'use strict';

document.addEventListener('DOMContentLoaded', () => {
    let counter = document.querySelector('h1'),
        minusBtn = document.querySelector('.minus'),
        plusBtn = document.querySelector('.plus');

    function changeCounter() {
        let cValue = 0;

        minusBtn.addEventListener('click', () => {
            cValue--;
            counter.innerHTML = cValue;
        })

        plusBtn.addEventListener('click', () => {
            cValue++;
            counter.innerHTML = cValue;
        })
    }
    
    changeCounter();
})