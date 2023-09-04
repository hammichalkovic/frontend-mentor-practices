let button = document.querySelector('.share'),
    buttonicon = button.querySelector('img'),
    shareoptions = document.querySelector('.shareoptions'),
    buttonOffMobile = document.querySelector('.share_mobile_active');

button.addEventListener('click', (e) => {
    button.classList.toggle('buttonactive');
    toChangeArrowColor();
    shareoptions.classList.toggle('nodisplay');

});

buttonOffMobile.addEventListener('click', (e) => {
    shareoptions.classList.toggle('nodisplay');
    if(buttonOffMobile.classList.contains('nodisplay')) {
        buttonicon.src = './images/icon-share.svg';
    }
});

function toChangeArrowColor() {
    if(button.classList.contains('buttonactive') === true) {
        buttonicon.src = './images/icon-share-white.svg'; 
    } else if (button.classList.contains('buttonactive') === false) {
        buttonicon.src = './images/icon-share.svg';
    };
};