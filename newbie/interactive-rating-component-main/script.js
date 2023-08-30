let marks = document.querySelectorAll('.mark'),
    submit = document.querySelector('.submit'),
    main = document.querySelector('.main'),
    thanks = document.querySelector('.thanks'),
    selection = document.querySelector('.selection'),
    result = '',
    id = 0,
    inputs = document.querySelectorAll('input'),
    input = document.querySelector('input');


let marksArr = Array.from(marks);




inputs.forEach((input) => {

    input.addEventListener('click', (e) => {
        console.log(e.target);

        for (let i = 1; i <= 5; i++) {

            if (i.toString() === e.target.id && document.getElementById(i.toString()).checked === true) {
                document.getElementById(i.toString()).checked = true;
                document.getElementById(i.toString() + i.toString()).classList.add('orange');
            } else {
                document.getElementById(i.toString()).checked = false;
                document.getElementById(i.toString() + i.toString()).classList.remove('orange');
            };

        };
    });
});




marks.forEach((mark, index) => {
    mark.addEventListener('mouseenter', (e) => {
        e.target.classList.add('onmouseover');
        
    });

    mark.addEventListener('mouseout', (e) => {
        mark.classList.remove('onmouseover');
    });

    mark.addEventListener('click', (e) => {
        // mark.classList.add('markclicked');
        result = e.target.id;

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


// let mediaQuery = window.matchMedia('(max-width: 420px)')

// if (mediaQuery.matches) {

//     submit.addEventListener('click', (e) => {
//         main.classList.add('nodisplay');
//         thanks.classList.remove('nodisplay');  
//         selection.textContent = `You selected ${result} out of 5`;
        
//     });

// }
