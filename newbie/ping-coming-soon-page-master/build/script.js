let input = document.querySelector('input'),
    submit = document.querySelector('button'),
    validRegex = "[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$",
    alert = document.getElementById('alert'),
    form = document.querySelector('form'),
    subscribe = document.getElementById('subscribe'),
    signBox = document.querySelector('.signbox'),
    illustration = document.querySelector('.illustration');

submit.addEventListener('click', (e) => {
    if (!input.value.match(validRegex)) {
        e.preventDefault();
        input.classList.add('border-light-red');
        input.classList.add('animate-bounce');
        input.classList.add('bounce');
        alert.classList.remove('hidden');
        submit.classList.add('mt-[50px]');
        submit.classList.add('mb-[10px]');
        form.classList.add('mt-[20px]');
        input.classList.add('mt-[10px]');
        subscribe.classList.add('mt-[10px]');
        subscribe.classList.add('mb-[30px]');
        signBox.classList.add('mt-[40px]');
    }
});


// subscribe = mt=[10px]
// form = mt-[30px]
// button = mt[40px]