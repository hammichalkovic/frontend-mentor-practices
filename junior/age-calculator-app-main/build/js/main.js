// sm:tracking-[0.15em]   - for digits in result field in default state
// sm:-mr-6 - for digits in result field in default state

let desktopArrow = document.getElementById('arrow1'),
    mobileArrow = document.getElementById('arrow2'),
    dayVar = document.getElementById('day'),
    monthVar = document.getElementById('month'),
    yearVar = document.getElementById('year'),
    // daysDiv = document.getElementById('daysdiv'),
    // monthsDiv = document.getElementById('monthsdiv'),
    // yearsDiv = document.getElementById('yearsdiv'),
    daysLabel = document.getElementById('dayslabel'),
    monthsLabel = document.getElementById('monthslabel'),
    yearsLabel = document.getElementById('yearslabel'),
    resultYears = document.getElementById('result-years'),
    resultMonths = document.getElementById('result-months'),
    resultDays = document.getElementById('result-days'),
    fullCurrentDate = new Date(),
    currentDate = fullCurrentDate.getDate(),
    currentMonth = fullCurrentDate.getMonth() + 1,
    currentYear = fullCurrentDate.getFullYear(),
    submitBtn = document.getElementById('submit'),
    spans = document.querySelectorAll('span'),
    spanDaysErr = document.getElementById('dayserror'),
    spanMonthsErr = document.getElementById('monthserror'),
    spanYearsErr = document.getElementById('yearserror'),
    errorNotificationArr = [[daysLabel, dayVar, spanDaysErr], [monthsLabel, monthVar, spanMonthsErr], [yearsLabel, yearVar, spanYearsErr]];
    


if (window.matchMedia('(max-width: 450px)').matches) {
    desktopArrow.classList.remove('hidden');
} else {
    mobileArrow.classList.remove('hidden');
};

function toDisplayWhileInputsEmpty() {
    if (yearVar.value == '' || monthVar.value == '' || dayVar.value == '') {
        spans.forEach(span => {
            span.textContent == '--';
        })
    } else if (!yearVar.value == '' && !monthVar.value == '' && !dayVar.value == '') {
        resultDays.classList.remove('sm:tracking-[0.15em]');
        resultMonths.classList.remove('sm:tracking-[0.15em]');
        resultYears.classList.remove('sm:tracking-[0.15em]');
    }
}

function toCheckErrNotfArr() {
    for (i = 0; i < errorNotificationArr.length; i++) {
        if (errorNotificationArr[i][1].value == '') {
            errorNotificationArr[i][0].classList.remove('text-smokeygrey');
            errorNotificationArr[i][0].classList.add('text-lightred');
            errorNotificationArr[i][1].classList.remove('border-lightgrey');
            errorNotificationArr[i][1].classList.add('border-lightred');
            errorNotificationArr[i][2].textContent = 'This field is required';

            setTimeout(() => {
                errorNotificationArr[i][0].classList.remove('text-lightred');
                errorNotificationArr[i][0].classList.add('text-smokeygrey');
                errorNotificationArr[i][1].classList.remove('border-lightred');
                errorNotificationArr[i][1].classList.add('border-lightgrey');
                errorNotificationArr[i][2].textContent = '';
            }, 3000)
        }
    }
}

function toCheckMonthsNumber() {
    let checkMonthPromise = new Promise((resolve, reject) => {
        let monthVal = errorNotificationArr[1][1].value * 1;
    
        if (monthVal < 13 || typeof monthVal === typeof Number) {
            resolve('resolve!');
        } else {
            reject('reject!');
        }
    });
    
    checkMonthPromise.then(() => {
        toGetDates();
    })

    .catch(() => {
        errorNotificationArr[1][0].classList.remove('text-smokeygrey');
        errorNotificationArr[1][0].classList.add('text-lightred');
        errorNotificationArr[1][1].classList.remove('border-lightgrey');
        errorNotificationArr[1][1].classList.add('border-lightred');
        errorNotificationArr[1][2].textContent = 'Must be a valid month';
    })

    .finally(() => {
        setTimeout(() => {
            errorNotificationArr[1][0].classList.remove('text-lightred');
            errorNotificationArr[1][0].classList.add('text-smokeygrey');
            errorNotificationArr[1][1].classList.remove('border-lightred');
            errorNotificationArr[1][1].classList.add('border-lightgrey');
            errorNotificationArr[1][2].textContent = '';
        }, 3000)
    })
}

function toCheckYearsNumber() {
    let checkYearPromise = new Promise((resolve,reject) => {
        let yearVal = errorNotificationArr[2][1].value * 1;

        if (yearVal < currentYear + 1 || typeof yearVal === typeof Number) {
            resolve('resolve!');
        } else {
            reject('reject!');
        }   
    });

    checkYearPromise.then(() => {
        toGetDates();
    })

    .catch(() => {
        errorNotificationArr[2][0].classList.remove('text-smokeygrey');
        errorNotificationArr[2][0].classList.add('text-lightred');
        errorNotificationArr[2][1].classList.remove('border-lightgrey');
        errorNotificationArr[2][1].classList.add('border-lightred');
        errorNotificationArr[2][2].textContent = 'Must be in the past';
        errorNotificationArr[2][2].classList.remove('hidden');
    })

    .finally(() => {
        setTimeout(() => {
            errorNotificationArr[2][0].classList.remove('text-lightred');
            errorNotificationArr[2][0].classList.add('text-smokeygrey');
            errorNotificationArr[2][1].classList.remove('border-lightred');
            errorNotificationArr[2][1].classList.add('border-lightgrey');
            errorNotificationArr[2][2].textContent = '';
        }, 3000)
    })
}





submitBtn.addEventListener('click', () => {
    toDisplayWhileInputsEmpty();
    toCheckErrNotfArr();
    toCheckMonthsNumber();
    toCheckYearsNumber();
})



let toGetDates = (localFullCurrentDate, typedDateOfBirth) => {
   
    
    localFullCurrentDate = new Date(),
    typedDateOfBirth = new Date();
 
    typedDateOfBirth.setDate(dayVar.value * 1);
    typedDateOfBirth.setMonth(monthVar.value * 1 - 1);
    typedDateOfBirth.setFullYear(yearVar.value * 1);
    typedDateOfBirth = typedDateOfBirth.toDateString();
    localFullCurrentDate = localFullCurrentDate.toDateString();

    let currDateArr = localFullCurrentDate.split(' '),
    typedDateArr = typedDateOfBirth.split(' ');


        switch (currDateArr[1]) {
            case 'Jan':
            currDateArr[1] = 1;
            break;
            
            case 'Feb':
            currDateArr[1] = 2;
            break;

            case 'Mar':
            currDateArr[1] = 3;
            break;

            case 'Apr':
            currDateArr[1] = 4;
            break;

            case 'May':
            currDateArr[1] = 5;
            break;

            case 'Jun':
            currDateArr[1] = 6;
            break;

            case 'Jul':
            currDateArr[1] = 7;
            break;

            case 'Aug':
            currDateArr[1] = 8;
            break;

            case 'Sep':
            currDateArr[1] = 9;
            break;

            case 'Oct':
            currDateArr[1] = 10;
            break;

            case 'Nov':
            currDateArr[1] = 11;
            break;

            case 'Dec':
            currDateArr[1] = 12;
            break;
        };

        switch (typedDateArr[1]) {
            case 'Jan':
            typedDateArr[1] = 1;
            break;
            
            case 'Feb':
            typedDateArr[1] = 2;
            break;

            case 'Mar':
            typedDateArr[1] = 3;
            break;

            case 'Apr':
            typedDateArr[1] = 4;
            break;

            case 'May':
            typedDateArr[1] = 5;
            break;

            case 'Jun':
            typedDateArr[1] = 6;
            break;

            case 'Jul':
            typedDateArr[1] = 7;
            break;

            case 'Aug':
            typedDateArr[1] = 8;
            break;

            case 'Sep':
            typedDateArr[1] = 9;
            break;

            case 'Oct':
            typedDateArr[1] = 10;
            break;

            case 'Nov':
            typedDateArr[1] = 11;
            break;

            case 'Dec':
            typedDateArr[1] = 12;
            break;
        }


    resultYears.textContent = currDateArr[3] - typedDateArr[3];
    resultMonths.textContent = currDateArr[1] - typedDateArr[1];
    resultDays.textContent = currDateArr[2] - typedDateArr[2];


    if (yearVar.value == '' || monthVar.value == '' || yearVar.value == '') {
        resultDays.textContent = '--';
        resultMonths.textContent = '--';
        resultYears.textContent = '--';
    }

    console.log(typedDateArr, currDateArr);

};

// submitBtn.addEventListener('click', toGetDates);


