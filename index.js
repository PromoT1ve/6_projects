'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.querySelector('.open-modal-btn'),
          overlay = document.querySelector('.overlay'),
          closeModalBtn = overlay.querySelector('svg');

    openModalBtn.addEventListener('click', () => {
        overlay.classList.add('show');
    })

    closeModalBtn.addEventListener('click', () => {
        overlay.classList.remove('show');
    })
});



