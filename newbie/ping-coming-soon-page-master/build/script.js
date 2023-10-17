let input = document.querySelector('input'),
    submit = document.querySelector('button'),
    validRegex = "[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$",
    alert = document.getElementById('alert'),
    form = document.querySelector('form'),
    subscribe = document.getElementById('subscribe'),
    signBox = document.querySelector('.signbox'),
    illustration = document.querySelector('.illustration'),
    title = document.querySelector('h1');

submit.addEventListener('click', (e) => {
    if (!input.value.match(validRegex)) {
        e.preventDefault();
        input.classList.add('border-light-red');
        input.classList.add('animate-bounce');
        input.classList.add('bounce');
        alert.classList.remove('hidden');
        submit.classList.add('relative');
        submit.classList.add('top-[30px]');
       
       
       
    }
});


// subscribe = mt=[10px]
// form = mt-[30px]
// button = mt[40px]