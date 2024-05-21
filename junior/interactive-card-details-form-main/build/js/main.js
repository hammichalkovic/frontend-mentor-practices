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
    inputsArr = [cardholderNameInput, cardNumberInput, expMonthInput, expYearInput, cvcInput];

    function errFocusOut(item) {
            item.classList.add('border-light-grayish-violet-brd');
            item.classList.remove('border-err-red');
    }

    function okFocusOut(item) {
        item.classList.add('border-light-grayish-violet-brd');
        item.classList.remove('border-err-red');
    }

    cardholderNameInput.addEventListener('focusout', () => {
        if (cardholderNameInput.value == '') {
            cardholderNameInput.classList.add('border-err-red');
            cardholderNameInput.classList.remove('border-light-grayish-violet-brd');
        
        }
    })
