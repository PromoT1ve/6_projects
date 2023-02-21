'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.querySelector('.open-modal-btn'),
          overlay = document.querySelector('.overlay'),
          closeModalBtn = overlay.querySelector('svg');

    openModalBtn.addEventListener('click', () => {
        overlay.style.display = 'block';
    })

    closeModalBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
    })

});


