let qtit1 = document.querySelector('.qtit1'),
    qtit2 = document.querySelector('.qtit2'),
    qtit3 = document.querySelector('.qtit3'),
    qtit4 = document.querySelector('.qtit4'),
    qtit5 = document.querySelector('.qtit5'),
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
    check1 = 0,
    check2 = 0,
    check3 = 0,
    check4 = 0,
    check5 = 0,
    check6 = 0,
    questionTitles = document.querySelectorAll('button'),
    main = document.querySelector('.faq');








    questionTitles.forEach(question => {
        

        
           
        question.addEventListener('click', () => {
            
            let currentRadioButton = question.firstElementChild.lastElementChild.previousElementSibling,
            currentBinary = question.firstElementChild.lastElementChild;

            currentRadioButton.click();
            
            if (currentBinary.textContent == 0) {
                currentBinary.textContent = 1;
            } else if (currentBinary.textContent == 1) {
                currentBinary.textContent = 0;
            }
           
          


            for (let i = 0; i < questionTitles.length; i++) {
                if (currentRadioButton.checked == true && currentBinary.textContent == 1) {
                    questionTitles.forEach(item => {
                        item.classList.remove('weighted')
                        item.firstElementChild.lastElementChild.textContent = 0;
                    });
                    
                    question.classList.add('weighted');
                    currentBinary.textContent = 1
                
                    // questionTitles[i].nextElementSibling.classList.add('collapse');
                    // questionTitles[i].lastElementChild.classList.add('pic_transform');
                } else {
                    question.classList.remove('weighted');
                    currentBinary.textContent = 0;
                    
                    // console.log(checksArr[i][1]);
                }  
            }
            
        });

        
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



function toCloseAll() {
    paragraphsList.forEach((paragraph) => {
        paragraph.classList.add('collapse');
    });

    arrows.forEach((arrow) => {
        arrow.classList.remove('pic_transform');
    });

    button6.checked = 'true';
    // checkboxesArr.forEach(item => item.checked = null)
    
    

     
    
};



accordion.addEventListener('blur', toCloseAll);
main.stopPropagation();
main.addEventListener('click', toCloseAll)

// questionTitles.forEach(item => {
//     item.addEventListener('focusout', () => {
        
//         if (item.firstChild.lastChild.checked == true) {
//             item.firstChild.lastChild.checked = null;
//         }

//         check6.checked = true;
//         arr
//     });
// })
