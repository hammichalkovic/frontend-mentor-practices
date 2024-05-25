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
    inputsArr = [cardholderNameInput, cardNumberInput, expMonthInput, expYearInput, cvcInput],
    errNotifNumberFormatArr = [numberErrNotif, expErrNotif, cvcErrNotif];

    function errFocusOut(item) {
        item.classList.remove('border-light-grayish-violet-brd');
        item.classList.add('border-err-red');
        console.log('Focus Out!');
    }

    function okFocusOut(item) {
        item.classList.remove('border-err-red');
        item.classList.add('border-light-grayish-violet-brd');
        
    }

    for (let i = 0; i < inputsArr.length; i++) {

        inputsArr[i].addEventListener('focusout', () => {
            if (!inputsArr[i].value == '') {
                okFocusOut(inputsArr[i]);
            } else {
                errFocusOut(inputsArr[i]);
            }
        })            

    }

    cardNumberInput.addEventListener('focusout', () => {
        if (!isNaN(cardNumberInput.value)) {
            okFocusOut(cardNumberInput);
        } else if (cardNumberInput.value == ''){
            errFocusOut(cardNumberInput);
        } else {
            errFocusOut(cardNumberInput);
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

  