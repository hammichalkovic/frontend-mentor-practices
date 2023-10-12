let input = document.querySelector('input'),
    submit = document.querySelector('button'),
    validRegex = "[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$";

submit.addEventListener('click', (e) => {
    if (!input.value.match(validRegex)) {
        e.preventDefault();
        input.classList.add('border-[hsl(354, 100%, 66%)]');
        input.classList.remove('border-[hsl(223,100%,88%)]');
    }
});

