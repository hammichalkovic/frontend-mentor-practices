let cardholderNameInput = document.getElementById('cardholder'),
    cardNumberInput = document.getElementById('number'),
    expMonthInput = document.getElementById('month'),
    expYearInput = document.getElementById('year'),
    cvcInput = document.getElementById('cvc'),
    confirmBtn = document.getElementById('submit'),
    cardholderNameDisp = document.getElementsByClassName('cardholder_name_place'),
    cardNumberDisp = document.getElementsByClassName('number_place'),
    expMonthDisp = document.getElementById('exp_month_place'),
    expYearDisp = document.getElementById('exp_year_place'),
    cvcDisp = document.getElementById('cvc_place'),
    cardholderErrNotif = document.getElementById('cardholder_err'),
    numberErrNotif = document.getElementById('number_err'),
    expErrNotif = document.getElementById('exp_err'),
    cvcErrNotif = document.getElementById('cvc_err'),
    whitespacePattern = ' ',
    cardNumberString = '',
    inputsArr = [cardholderNameInput, cardNumberInput, expMonthInput, expYearInput, cvcInput],
    errNotifNumberFormatArr = [numberErrNotif, expErrNotif, cvcErrNotif];

    function errFocusOut(item) {
        item.classList.remove('border-light-grayish-violet-brd');
        item.classList.add('border-err-red');
        console.log('Err Focus Out!');
    }

    function okFocusOut(item) {
        item.classList.remove('border-err-red');
        item.classList.add('border-light-grayish-violet-brd');
        console.log('OK Focus Out!');
        
    }

    // for (let i = 0; i < inputsArr.length; i++) {

    //     inputsArr[i].addEventListener('focusout', () => {
    //         if (!inputsArr[i].value == '') {
    //             okFocusOut(inputsArr[i]);
    //         } else {
    //             errFocusOut(inputsArr[i]);
    //         }
    //     })            

    // }





    cardNumberInput.addEventListener('input', () => {

        cardNumberString = cardNumberInput.value;
        cardNumberString = cardNumberString.split(' ');
        cardNumberString = cardNumberString.join('');
        console.log(cardNumberString);



        if ( cardNumberInput.value.length == 4 ||
             cardNumberInput.value.length == 9 ||
             cardNumberInput.value.length == 14 ) {
                cardNumberInput.value = cardNumberInput.value + ' ';
            }

        
    })

    cardNumberInput.addEventListener('keydown', (e) => {
        if (e.key == 'Space') {
            return false;


        } else if (e.key === 'Backspace' && cardNumberInput.value.length == 15 ||
           e.key === 'Backspace' && cardNumberInput.value.length == 10 ||
           e.key === 'Backspace' && cardNumberInput.value.length == 5
        ) {
            cardNumberInput.value = cardNumberInput.value.slice(0, -1);
        }
    })






    cardNumberInput.addEventListener('focusout', () => {
        if ( cardNumberInput.value == '' ) {
            errFocusOut(cardNumberInput);
            console.log("Can't be blank");
        } else if ( isNaN(cardNumberString) === true || cardNumberString.match(' ')) {
            errFocusOut(cardNumberInput);
            console.log("Wrong format, numbers only");
        } else if (!isNaN(cardNumberString)) {
            if (cardNumberString.length > 16) {
                errFocusOut(cardNumberInput);
                console.log('Number has more than 16 digits');
            } else if (cardNumberString.length < 16) {
                errFocusOut(cardNumberInput);
                console.log('Number has less than 16 digits');
            } else if (cardNumberString.length == 16) {
                okFocusOut(cardNumberInput);
                console.log('Card number is right!')
            }
        }
    })

    // for (let j = 1; j < inputsArr.length; j++) {
    //     inputsArr[j].addEventListener('focusout', () => {
    //         let blackBox = 0;

    //         if (!Number.isNaN(inputsArr[j].value) && inputsArr[j].value != '') {
    //             errFocusOut(inputsArr[j]);
    //             errNotifNumberFormatArr[j].innerHTML += 'Wrong format, numbers only';
    //         } else {
    //             okFocusOut(inputsArr[j]);

    //         }
    //     })
    // }

  