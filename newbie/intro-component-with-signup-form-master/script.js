let inputs = document.querySelectorAll('input'),
    firstName = document.getElementById('1'),
    lastName = document.getElementById('2'),
    email = document.getElementById('3'),
    password = document.getElementById('4'),
    submit = document.querySelector('.submit'),
    form = document.querySelector('.form'),
    spans = document.querySelectorAll('span'),
    fieldset = document.querySelector('fieldset'),
    validRegexEmail = '[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$';


window.addEventListener('click', e => {
    console.log(e.target.attributes);
})

submit.addEventListener('click', toValidate1);
submit.addEventListener('click', toValidate2);
submit.addEventListener('click', toValidate3);
submit.addEventListener('click', toValidate4);


function toValidate1(e) {
    
    let valid = true;

    if (!firstName.value) {
        e.preventDefault();
        form.classList.add('grow-tall-form');
        fieldset.classList.add('grow-tall-fieldset');
        fieldset.classList.add('fieldset-even');
        let errorNotification1 = document.getElementById('11');
         errorNotification1.classList.remove('nodisplay');
         errorNotification1.setAttribute('aria-hidden', false);
         errorNotification1.setAttribute('aria-invalid', true);
         setTimeout(refreshHeight, 2000);   
    } 
    
    return valid;
};    
    
function toValidate2(e) {

    let valid = true;

    if (!lastName.value) {
        e.preventDefault();
        form.classList.add('grow-tall-form');
        fieldset.classList.add('grow-tall-fieldset');
        fieldset.classList.add('fieldset-even');
        let errorNotification2 = document.getElementById('12');
        errorNotification2.classList.remove('nodisplay');
        errorNotification2.setAttribute('aria-hidden', false);
        errorNotification2.setAttribute('aria-invalid', true);
        setTimeout(refreshHeight, 2000);  
    };
};


function toValidate3(e) {

    let valid = true;

    if (!email.value || !email.value.match(validRegexEmail)) {
        e.preventDefault();
        form.classList.add('grow-tall-form');
        fieldset.classList.add('grow-tall-fieldset');
        fieldset.classList.add('fieldset-even');
        let errorNotification3 = document.getElementById('13');
        errorNotification3.classList.remove('nodisplay');
        errorNotification3.setAttribute('aria-hidden', false);
        errorNotification3.setAttribute('aria-invalid', true);
        setTimeout(refreshHeight, 2000);  
    };
};

function toValidate4(e) {

    let valid = true;

     if (!password.value) {
        e.preventDefault();
        form.classList.add('grow-tall-form');
        fieldset.classList.add('grow-tall-fieldset');
        fieldset.classList.add('fieldset-even');
        let errorNotification4 = document.getElementById('14');
        errorNotification4.classList.remove('nodisplay');
        errorNotification4.setAttribute('aria-hidden', false);
        errorNotification4.setAttribute('aria-invalid', true);
        setTimeout(refreshHeight, 2000);    
    }

    return valid;
};



spans.forEach(span => {
    submit.addEventListener('click', () => {
        if (span.getAttribute('aria-hidden') == 'false') {
        // span.classList.remove('nodisplay');
        setTimeout(refreshSpans, 2000); 
        setTimeout(refreshHeight, 2000);
        } 

    });
});

inputs.forEach(input => {

    function toSetPhFirstName() {
        input.setAttribute('placeholder', 'First Name');
    }

    submit.addEventListener('click', () => {
        if (!input.value) {
            input.style.cssText = 'background: no-repeat url(./images/icon-error.svg); background-position: 95% 50%;';
            // input.setAttribute('placeholder', '');
            input.classList.add('bounce');
            input.classList.add('error');
            input.removeAttribute('placeholder');
            setTimeout(refresh, 2000);    
            setTimeout(toSetPhFirstName, 2000);
        }; 
    });

    submit.addEventListener('click', () => {
        if (!email.value.match(validRegexEmail)) {
            email.style.borderColor = 'hsl(0, 100%, 74%)';
            email.style.color = 'hsl(0, 100%, 74%)';
            setTimeout(refreshEmailColors, 2000);
        }
    })

    function refresh() {
        input.classList.remove('bounce');
        input.style.cssText = 'background: none;';
        spans.classList.add('nodisplay');
    };

    function refreshEmailColors() {
        email.style.borderColor = 'hsla(246, 25%, 77%, 0.5)';
        email.style.color = 'hsl(249, 10%, 26%)';
    }
});

function refreshSpans() {
    spans.forEach(span => {
    span.classList.add('nodisplay');
    }
)};

function refreshHeight() {
    form.classList.remove('grow-tall-form');
    fieldset.classList.remove('grow-tall-fieldset');
    fieldset.classList.remove('fieldset-even');
};



