let button = document.querySelector('button'),
    input = document.querySelector('input'),
    error = document.querySelector('.errornotification');

// function toNotifyError(e) {
//     input.style.borderColor = 'hsl(0, 93%, 68%)';
// }

button.addEventListener('click', () => {
    input.classList.add('bounce');
    error.classList.remove('nodisplay');
    setTimeout(refresh, 1000);
});

function refresh() {
    input.classList.remove('bounce');
    error.classList.add('nodisplay');
};