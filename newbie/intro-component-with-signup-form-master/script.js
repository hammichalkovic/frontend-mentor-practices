let inputs = document.querySelectorAll('input'),
    firstName = document.getElementById('1'),
    lastName = document.getElementById('2'),
    email = document.getElementById('3'),
    password = document.getElementById('4'),
    submit = document.querySelector('.submit'),
    form = document.querySelector('.form'),
    spans = document.querySelectorAll('span'),
    fieldset = document.querySelector('fieldset');


window.addEventListener('click', e => {
    console.log(e.target.attributes);
})

submit.addEventListener('click', toValidate);

function toValidate(e) {
    

    let valid = true;

    if (!firstName.value) {
        e.preventDefault();
        form.classList.add('grow-tall-form');
        fieldset.classList.add('grow-tall-fieldset');
        let errorNotification1 = document.getElementById('11');
        errorNotification1.classList.remove('nodisplay');
        errorNotification1.setAttribute('aria-hidden', false);
        errorNotification1.setAttribute('aria-invalid', true);
        setTimeout(refreshHeight, 2000);   
    } else if (!lastName.value) {
        e.preventDefault();
        let errorNotification2 = document.getElementById('22');
        errorNotification2.classList.remove('nodisplay');
        errorNotification2.setAttribute('aria-hidden', false);
        errorNotification2.setAttribute('aria-invalid', true);
        setTimeout(refreshHeight, 2000);  
    } else if (!email.value) {
        e.preventDefault();
        let errorNotification3 = document.getElementById('33');
        errorNotification3.classList.remove('nodisplay');
        errorNotification3.setAttribute('aria-hidden', false);
        errorNotification3.setAttribute('aria-invalid', true);
        setTimeout(refreshHeight, 2000);  
    } else if (!password.value) {
        e.preventDefault();
        let errorNotification4 = document.getElementById('44');
        errorNotification4.classList.remove('nodisplay');
        errorNotification4.setAttribute('aria-hidden', false);
        errorNotification4.setAttribute('aria-invalid', true);
        setTimeout(refreshHeight, 2000);
         
    }

    return valid;
};

spans.forEach(span => {
    submit.addEventListener('click', () => {
        if (span.getAttribute('aria-hidden') == 'true') {
        span.classList.remove('nodisplay');
        setTimeout(refreshSpans, 2000); 
        } 

    });
});

inputs.forEach(input => {

    submit.addEventListener('click', () => {
        if (!input.value) {
            input.style.cssText = 'background: no-repeat url(./images/icon-error.svg); background-position: 95% 50%;';
            // input.setAttribute('placeholder', '');
            input.classList.add('bounce');
            input.classList.add('error');
            input.removeAttribute('placeholder');
            setTimeout(refresh, 2000);    
        };
    });

    function refresh() {
        input.classList.remove('bounce');
        input.style.cssText = 'background: none;';
        spans.classList.add('nodisplay');
    };
});

function refreshSpans() {
    spans.forEach(span => {
    span.classList.add('nodisplay');
    }
)};

function refreshHeight() {
    form.classList.remove('grow-tall-form');
    fieldset.classList.remove('grow-tall-fieldset');
};



