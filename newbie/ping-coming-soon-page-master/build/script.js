let input = document.querySelector('input'),
    submit = document.querySelector('button'),
    validRegex = "[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$",
    alert = document.getElementById('alert');

submit.addEventListener('click', (e) => {
    if (!input.value.match(validRegex)) {
        e.preventDefault();
        input.classList.add('border-light-red');
        input.classList.add('animate-bounce');
        input.classList.add('bounce');
        alert.classList.remove('hidden');
        submit.classList.add
    }
});

// subscribe = mt=[10px]
// form = mt-[30px]
// button = mt[40px]