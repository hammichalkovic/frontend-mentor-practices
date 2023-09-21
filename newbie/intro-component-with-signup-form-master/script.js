let inputs = document.querySelectorAll('input'),
    firstName = document.getElementById('firstname'),
    lastName = document.getElementById('lastname'),
    email = document.getElementById('email'),
    password = document.getElementById('password'),
    submit = document.querySelector('.submit');


window.addEventListener('click', e => {
    console.log(e.target.attributes);
})

submit.addEventListener('click', toValidate);

function toValidate(e) {
    e.preventDefault();

    let valid = true;
};

inputs.forEach(input => {

    submit.addEventListener('click', () => {
        if (input.value == '') {
            input.style.cssText = 'background: no-repeat url(./images/icon-error.svg); background-position: 95% 50%;';
            // input.setAttribute('placeholder', '');
            input.classList.add('bounce');
            input.classList.add('error');
            input.removeAttribute('placeholder');
            setTimeout(refresh, 1000);    
        };
    });

    function refresh() {s
        input.classList.remove('bounce');
        input.style.cssText = 'background: none;';
    };
});





