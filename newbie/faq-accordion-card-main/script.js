let questionTitles = document.querySelectorAll('button'),
    paragraphsList = document.querySelectorAll('p'),
    qAndAList = document.querySelectorAll('.question'),
    accordion = document.querySelector('.faqacordion'),
    arrows = document.querySelectorAll('.pic');


questionTitles.forEach((question) => { 

    question.addEventListener('click', () => {
        question.classList.toggle('weighted');
    })

    question.addEventListener('blur', () => {
        question.classList.remove('weighted'); 
    })
});


qAndAList.forEach((question, index) => {
    let button = question.querySelector('button'),
        paragraph = question.querySelector('p'),
        picture = question.querySelector('.pic');

    

    button.addEventListener('click', (num1) => {
        paragraph.classList.toggle('collapse');
        picture.classList.toggle('pic_transform');
    
    removeOpen(index);  //calling function and return number of clicked item
    
    });

});

function removeOpen(index1) {
    qAndAList.forEach((item, index2) => {
        let paragraph = item.querySelector('p');

        if (index1 != index2) {
            paragraph.classList.add('collapse');
        }
    })
};


function toCloseAll() {
    paragraphsList.forEach((paragraph) => {
        paragraph.classList.add('collapse');
    });

    arrows.forEach((arrow) => {
        arrow.classList.remove('pic_transform');
    });
};

accordion.addEventListener('focusout', toCloseAll);
