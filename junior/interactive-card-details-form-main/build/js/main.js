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
    cardholderArr = '',
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

    cardNumberInput.addEventListener('input', () => {

        cardNumberString = cardNumberInput.value;
        cardNumberString = cardNumberString.split(' ');
        cardNumberString = cardNumberString.join('');
        console.log(cardNumberString);

        // if ( cardNumberInput.value.length == 4 ||
        //      cardNumberInput.value.length == 9 ||
        //      cardNumberInput.value.length == 14 ) {
        //         cardNumberInput.value = cardNumberInput.value + ' ';
        //     }
    })

    cardholderNameInput.addEventListener('input', () => {
        cardholderArr = cardholderNameInput.value;
        cardholderArr = cardholderArr.split(' ');
        console.log(cardholderArr);
    });

    cardholderNameInput.addEventListener('keydown', (e) => {
        if (e.key  === ' ' && cardholderNameInput.value == '') {
            e.preventDefault();
        }
    })

    cardNumberInput.addEventListener('keydown', (e) => {
        if (e.key  === ' ' ) {
            e.preventDefault();

        // } else if (e.key === 'Backspace' && cardNumberInput.value.length == 15 ||
        //    e.key === 'Backspace' && cardNumberInput.value.length == 10 ||
        //    e.key === 'Backspace' && cardNumberInput.value.length == 5
        // ) {
        //     cardNumberInput.value = cardNumberInput.value.slice(0, -1);
        // }
    }
});




    cardholderNameInput.addEventListener('focusout', () => {
        if (cardholderNameInput.value == '' ) {
            errFocusOut(cardholderNameInput);
            console.log("Can't be blank");
        } else if (cardholderNameInput.value.match('[0-9]')) {
            errFocusOut(cardholderNameInput);
            console.log("Wrong format, letters only");
        } else if (!cardholderNameInput.value.match(' ') ||
                    cardholderNameInput.value.match(' ') && cardholderArr[1] == '') {
            errFocusOut(cardholderNameInput);
            console.log('Last name is required');
        } else if (cardholderArr[1] != '' && cardholderNameInput.value.length > 26) {
            errFocusOut(cardholderNameInput);
            console.log('The maximum length of this field is 26 characters');
        } else if (cardholderArr[1] != '' && cardholderNameInput.value.length <= 26 ) {
                okFocusOut(cardholderNameInput);
                console.log('Cardholder name is right!')
        }
    });
         

    cardNumberInput.addEventListener('focusout', () => {

        // if (cardNumberString.length < 5) {
        //     cardNumberInput.value = cardNumberString;
        // } else if (4 < cardNumberString.length &&
        //                cardNumberString.length < 9) {
        //     cardNumberInput.value = cardNumberString.slice(0, 4) + ' ' + cardNumberString.slice(4);
        // } else if ( 8 < cardNumberString.length &&
        //                 cardNumberString.length < 13
        // ) {
        //     cardNumberInput.value = cardNumberString.slice(0, 4) + ' ' + cardNumberString.slice(4, 8) + ' ' + cardNumberString.slice(8);
        // } else if (cardNumberString.length > 12) {
        //     cardNumberInput.value = cardNumberString.slice(0, 4) + ' ' + cardNumberString.slice(4, 8) + ' ' + cardNumberString.slice(8, 12) + ' ' + cardNumberString.slice(12);
        // };
        

        if ( cardNumberString == '') {
            errFocusOut(cardNumberInput);
            console.log("Can't be blank");
        } else if ( isNaN(cardNumberString) === true || cardNumberString.match(' ')) {
            errFocusOut(cardNumberInput);
            console.log("Wrong format, numbers only");
        } else if (!isNaN(cardNumberString) && cardNumberString.value != '') {
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
    });

 
    expMonthInput.addEventListener('focusout', () => {
        if ( expMonthInput.value == '' ) {
            errFocusOut(expMonthInput);
            console.log("Can't be blank");
        }
    })
  