let questionTitles = document.querySelectorAll('button'),
    paragraphsList = document.querySelectorAll('p'),
    qAndAList = document.querySelectorAll('.question');



questionTitles.forEach((question) => {
    question.addEventListener('click', () => {
        question.classList.toggle('weighted');
    })

    question.addEventListener('blur', () => {
        question.classList.remove('weighted');
    })
});


qAndAList.forEach((qAndA) => {
    qAndA.addEventListener('click', () => {
        qAndA.querySelector('p').remove('collapse');
    })
});


