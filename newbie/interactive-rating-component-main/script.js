let marks = document.querySelectorAll('.mark'),
    submit = document.querySelector('.submit'),
    main = document.querySelector('.main'),
    thanks = document.querySelector('.thanks'),
    selection = document.querySelector('.selection'),
    result = '';



marks.forEach((mark, index) => {
    mark.addEventListener('mouseenter', (e) => {
        e.target.classList.add('onmouseover');
        
    });

    mark.addEventListener('mouseout', (e) => {
        mark.classList.remove('onmouseover');
    });

    mark.addEventListener('click', () => {
        document.querySelector('.markclicked')?.classList.remove('mark');
        mark.classList.add('markclicked');
        
        result = e.target.textContent;

    });

});

// marks.forEach((mark) => {
//     mark.addEventListener('clickout', () => {
//         mark.classList.remove('markclicked');
//     })
// });


// https://www.youtube.com/watch?v=RBB2N341tr0  ПАСПРАБАВАЦЬ ЗРАБІЦЬ ПРАЗ МАСІЎ ПА ГЭТАЙ СПАСЫЛЦЫ


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

