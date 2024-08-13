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
    check1 = 0,
    check2 = 0,
    check3 = 0,
    check4 = 0,
    check5 = 0,
    check6 = 0,
    questionTitles = document.querySelectorAll('button'),
    main = document.querySelector('.faq'),
    binaryCheckers = document.querySelectorAll('.binary_checkers'),
    faqImage = document.querySelector('.faqimage'),
    unfocusClickArea = document.getElementById('unfocus_click_area');




    qAndAList.forEach(item => {
        item.addEventListener('click', () => {
        item.firstElementChild.firstElementChild.click();
        })

    });

    questionTitles.forEach(question => {
        

        
           
        question.addEventListener('click', () => {
            
            let currentRadioButton = question.firstElementChild.lastElementChild.previousElementSibling,
            currentBinary = question.firstElementChild.lastElementChild;

            currentRadioButton.click();
            
            if (currentBinary.textContent == '') {
                currentBinary.textContent = 1;
            } else if (currentBinary.textContent == 1) {
                currentBinary.textContent = '';
            }
           
          


            for (let i = 0; i < questionTitles.length; i++) {
                if (currentRadioButton.checked == true && currentBinary.textContent == 1) {
                    questionTitles.forEach(item => {
                        item.classList.remove('weighted')
                        item.firstElementChild.lastElementChild.textContent = '';
                        item.nextElementSibling.classList.add('collapse');
                        item.lastElementChild.classList.remove('pic_transform');
                    });
                    
                    question.classList.add('weighted');
                    question.nextElementSibling.classList.remove('collapse');
                    question.lastElementChild.classList.add('pic_transform');
                    currentBinary.textContent += 1;
                
                    // questionTitles[i].nextElementSibling.classList.add('collapse');
                    // questionTitles[i].lastElementChild.classList.add('pic_transform');
                } else {
                    question.classList.remove('weighted');
                    question.nextElementSibling.classList.add('collapse');
                    question.lastElementChild.classList.remove('pic_transform');
                    currentBinary.textContent = '';
                    
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





// main.addEventListener('click', () => {
//     questionTitles[0].click()

// })


function toCloseAll() {
    // paragraphsList.forEach((paragraph) => {
    //     paragraph.classList.add('collapse');
    // });

    // arrows.forEach((arrow) => {
    //     arrow.classList.remove('pic_transform');
    // });

    // button6.checked = 'true';
    // // checkboxesArr.forEach(item => item.checked = null)
    // // questionTitles[0].click()
    
    // questionTitles.forEach(item => {
    //     item.classList.remove('weighted');
    //     // item.firstElementChild.lastElementChild.textContent = '';
    //     // questionTitles[0]

        
       
    // });

     document.refresh();
    
};



unfocusClickArea.addEventListener('click', () => {
    window.location.reload()
});

// main.addEventListener('click', () => {
//     window.location.reload()
// });


