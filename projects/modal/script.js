let button = document.querySelector('.openModelBtn');
let modalContainer = document.querySelector('.modalContainer');
let closeBtn = document.querySelector('.closeBtn');

button.addEventListener('click', () => {
     modalContainer.style.display = 'flex';
})

closeBtn.addEventListener('click', () => {
    modalContainer.style.display = 'none';
})

modalContainer.addEventListener('click', (event) => {   
    if (event.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
});
