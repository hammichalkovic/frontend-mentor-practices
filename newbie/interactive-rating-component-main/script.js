let marks = document.querySelectorAll('.mark'),
    submit = document.querySelector('.submit'),
    main = document.querySelector('.main'),
    thanks = document.querySelector('.thanks'),
    selection = document.querySelector('.selection'),
    result = '',
    siblings = [];


    siblings = Array.from(marks);
    
    function toRemoveClickMarks(e) { 

    e.classList.remove('markclicked');

    };


marks.forEach((mark, index) => {
    mark.addEventListener('mouseenter', (e) => {
        e.target.classList.add('onmouseover');
        
    });

    mark.addEventListener('mouseout', (e) => {
        mark.classList.remove('onmouseover');
    });

    mark.addEventListener('click', (e) => {
        // mark.classList.add('markclicked');
        result = e.target.textContent;

        if (mark.textContent === result) {
            mark.classList.add('markclicked');
        } 
            mark.classList.remove('markclicked');
        

    });

});


submit.addEventListener('click', (e) => {
    main.classList.add('nodisplay');
    thanks.classList.remove('nodisplay');  
    selection.textContent = `You selected ${result} out of 5`;
    
});

// ІДЭАЛЬНЫ СКРЫПТ ДЛЯ МАБІЛЬНАЙ ВЕРСІІ

// marks.forEach((mark, index) => {
//     mark.addEventListener('mouseenter', (e) => {
//         e.target.classList.add('onmouseover');
//         e.target.classList.add('markclicked');
//     });

//     mark.addEventListener('mouseout', (e) => {
//         mark.classList.remove('onmouseover');
//         mark.classList.remove('markclicked');
//     });

//     mark.addEventListener('click', (e) => {
//         result = e.target.textContent;
//     });

// });

