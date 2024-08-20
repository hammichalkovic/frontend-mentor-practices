let button = document.querySelector('.share'),
    buttonicon = button.querySelector('img'),
    shareoptions = document.querySelector('.shareoptions'),
    buttonOffMobile = document.querySelector('.share_mobile_active'),
    shareTitle = document.getElementById('share_title'),
    shareOptionsArrow = document.querySelector('.share_mobile_active::before');

button.addEventListener('click', (e) => {
    button.classList.toggle('buttonactive');
    toChangeArrowColor();
    // shareoptions.classList.toggle('nodisplay');
    // shareoptions.classList.toggle('animate');

    if (shareoptions.classList.contains('nodisplay') == false) {
        shareoptions.classList.remove('animate');
        shareoptions.classList.add('animation_two');
        setTimeout(() => {
            shareoptions.classList.add('nodisplay');
        }, 80);

    } else if (shareoptions.classList.contains('nodisplay') == true) {
        shareoptions.classList.remove('animation_two');
        shareoptions.classList.add('animate');
        // shareoptions.classList.toggle('nodisplay');
        setTimeout(() => {
            shareoptions.classList.remove('nodisplay');
        }, 80);
    }
    // shareTitle.style.cssText = 'display: inline';
    // shareOptionsArrow.classList.toggle('nodisplay');

    // setTimeout(shareoptions.classList.toggle('nodisplay')
    // , 100);

});

buttonOffMobile.addEventListener('click', (e) => {
    // shareoptions.classList.toggle('nodisplay');
    // shareoptions.classList.remove('nodisplay');
    shareoptions.classList.remove('animate');
        shareoptions.classList.add('animation_two');
        setTimeout(() => {
            shareoptions.classList.add('nodisplay');
        }, 80);

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