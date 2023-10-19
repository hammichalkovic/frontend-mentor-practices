let input = document.querySelector('input'),
    submit = document.querySelector('button'),
    validRegex = "[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$",
    alert = document.getElementById('alert'),
    alertForDT = document.getElementById('alert2'),
    form = document.querySelector('form'),
    subscribe = document.getElementById('subscribe'),
    signBox = document.querySelector('.signbox'),
    illustration = document.querySelector('.illustration'),
    title = document.querySelector('h1'),
    windowBreakpoint = document.documentElement.clientWidth || window.innerWidth;

submit.addEventListener('click', (e) => {
    if (!input.value.match(validRegex)) {
        e.preventDefault();
        input.classList.add('animate-bounce');
        input.classList.add('bounce'); 
    };
});

submit.addEventListener('click', (e) => {
    if (windowBreakpoint <= 640 && !input.value.match(validRegex)) {
        form.classList.remove('h-[90px]');
        form.classList.add('h-[120px]');
        form.classList.add('bottom-[25px]');
        alert.classList.remove('hidden'); 
        setTimeout(toRefresh, 3000);
    } else if (windowBreakpoint > 640 && !input.value.match(validRegex)) {
        form.classList.add('sm:h-[120px]');
        alertForDT.classList.remove('hidden');  
        setTimeout(toRefresh, 3000);
    };
});

function toRefresh() {
    input.classList.remove('animate-bounce');
    input.classList.remove('bounce');
    alert.classList.add('hidden');
    alertForDT.classList.add('hidden');
    form.classList.add('h-[90px]');
    form.classList.remove('h-[120px]');
    form.classList.remove('bottom-[25px]');

};