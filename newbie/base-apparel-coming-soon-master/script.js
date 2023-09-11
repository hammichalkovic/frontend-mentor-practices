let button = document.querySelector('button'),
    input = document.querySelector('input'),
    error = document.querySelector('.errornotification'),
    validRegex = "[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$";


// function toNotifyError(e) {
//     input.style.borderColor = 'hsl(0, 93%, 68%)';
// }



button.addEventListener('click', (event) => {
        if (!input.value.match(validRegex)) {
        event.preventDefault();
        input.classList.add('bounce');
        error.classList.remove('nodisplay');
        setTimeout(refresh, 1000);
        };
});

function refresh() {
    input.classList.remove('bounce');
    error.classList.add('nodisplay');
};

window.addEventListener('click', (e) => {
    console.log(e.target.attributes);
})