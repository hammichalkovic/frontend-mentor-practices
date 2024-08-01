let questionTitles = document.querySelectorAll('button'),
    paragraphsList = document.querySelectorAll('p'),
    qAndAList = document.querySelectorAll('.question'),
    accordion = document.querySelector('.faqacordion'),
    arrows = document.querySelectorAll('.pic'),
    button1 = document.getElementById('button1'),
    button2 = document.getElementById('button2'),
    button3 = document.getElementById('button3'),
    button4 = document.getElementById('button4'),
    button5 = document.getElementById('button5'),
    button6 = document.getElementById('button6'),
    checksArr = [button1, button2, button3, button4, button5, button6];



    qAndAList.forEach(question => {

        let radio = question.firstElementChild.firstElementChild.firstElementChild.lastChild;    

        

        question.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log(radio);
            radio.click();

            if (radio.checked == 1) {
                question.classList.toggle('weighted');
                
                // if (question.)
            } });
    });

// questionTitles.forEach((question) => { 

//     question.addEventListener('click', () => {
//         question.classList.add('weighted');
//     })

//     question.addEventListener('blur', () => {
//         question.classList.remove('weighted'); 
//     })
// });


// qAndAList.forEach((question, index) => {
//     let button = question.querySelector('button'),
//         paragraph = question.querySelector('p'),
//         picture = question.querySelector('.pic');

    

//     button.addEventListener('click', (num1) => {
//         paragraph.classList.toggle('collapse');
//         picture.classList.toggle('pic_transform');
    
//     removeOpen(index);  //calling function and return number of clicked item
    
//     });

// });

// function removeOpen(index1) {
//     qAndAList.forEach((item, index2) => {
//         let paragraph = item.querySelector('p');

//         if (index1 != index2) {
//             paragraph.classList.add('collapse');
//         }
//     })
// };


function toCloseAll() {
    paragraphsList.forEach((paragraph) => {
        paragraph.classList.add('collapse');
    });

    arrows.forEach((arrow) => {
        arrow.classList.remove('pic_transform');
    });

    button6.checked = 'true';
};

accordion.addEventListener('focusout', toCloseAll);
