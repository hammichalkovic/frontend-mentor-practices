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
    checksArr = [button1, button2, button3, button4, button5, button6],
    check1 = document.getElementById('check1'),
    check2 = document.getElementById('check2'),
    check3 = document.getElementById('check3'),
    check4 = document.getElementById('check4'),
    check5 = document.getElementById('check5'),
    check6 = document.getElementById('check6'),
    checkboxesArr = [check1, check2, check3, check4, check5, check6];







    questionTitles.forEach(question => {
        

        let paragraph = question.nextElementSibling,
            picture = question.lastElementChild;


        question.addEventListener('click', () => {

            

            question.firstElementChild.lastElementChild.previousElementSibling.click();
            question.firstElementChild.lastElementChild.click();
            // question.lastElementChild.click();

           
            

            for (let i = 0; i < questionTitles.length; i++) {
                if (!questionTitles[i].firstElementChild.lastElementChild.previousElementSibling.checked) {
                    questionTitles[i].classList.remove('weighted');
                    checkboxesArr[i].checked = false;
                } else if (questionTitles[i].firstElementChild.lastElementChild.previousElementSibling.checked) {
                    if (questionTitles[i].firstElementChild.lastElementChild.previousElementSibling.checked) {
                            questionTitles[i].classList.add('weighted');
                            // questionTitles[i].nextElementSibling.classList.add('collapse');
                            // questionTitles[i].lastElementChild.classList.add('pic_transform');
                    } 





                    
                    

                }
            }
            
        });

        question.addEventListener('click', () => {
            if (question.firstElementChild.lastElementChild.checked == false) {
                question.classList.remove('weighted');
                
            }
        })


            // question.addEventListener('click', () => {
            //     if (question)
            // })





        // question.addEventListener('click', (e) => {
        //     if (question.firstElementChild.lastElementChild.checked && question.click()) {
        //         button6.click();
        //     }
        // })
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
    check6.
    // checkboxesArr.forEach(item => item.checked = null)
    
    

     
    questionTitles.forEach(question => {
        question.classList.remove('weighted');
        // question.firstElementChild.lastElementChild.checked = undefined;
        
    });    
};

accordion.addEventListener('focusout', toCloseAll);

// questionTitles.forEach(item => {
//     item.addEventListener('focusout', () => {
        
//         if (item.firstChild.lastChild.checked == true) {
//             item.firstChild.lastChild.checked = null;
//         }

//         check6.checked = true;
//         arr
//     });
// })
