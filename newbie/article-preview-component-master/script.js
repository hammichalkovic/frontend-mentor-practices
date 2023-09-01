let button = document.querySelector('.share'),
    buttonicon = button.querySelector('img'),
    shareoptions = document.querySelector('.shareoptions');

button.addEventListener('click', (e) => {
    button.classList.toggle('buttonactive');
    toChangeArrowColor();
    shareoptions.classList.toggle('nodisplay');

});

function toChangeArrowColor() {
    if(button.classList.contains('buttonactive') === true) {
        buttonicon.src = './images/icon-share-white.svg'; 
    } else if (button.classList.contains('buttonactive') === false) {
        buttonicon.src = './images/icon-share.svg';
    };
};