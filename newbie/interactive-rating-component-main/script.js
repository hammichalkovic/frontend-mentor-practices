let marks = document.querySelectorAll('.mark'),
    submit = document.querySelector('.submit'),
    main = document.querySelector('.main'),
    thanks = document.querySelector('.thanks');



marks.forEach((mark, index) => {
    mark.addEventListener('mouseenter', (e) => {
        e.target.classList.add('onmouseover');
    });

    mark.addEventListener('mouseout', (e) => {
        mark.classList.remove('onmouseover');
    });

    mark.addEventListener('click', (e) => {
        mark.classList.toggle('markclicked');
    });

    
});

// function toUnmark(index1) {
//     marks.forEach((mark, index2) => {
//         if(index1 != index2) {
//             mark.classList.remove('markclicked');
//         };
//     });
// };

submit.addEventListener('click', (e) => {
    main.classList.add('nodisplay');
    thanks.classList.remove('nodisplay');  
})