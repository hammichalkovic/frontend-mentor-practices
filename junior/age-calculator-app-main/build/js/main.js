// sm:tracking-[0.15em]   - for digits in result field in default state
// sm:-mr-6 - for digits in result field in default state

let desktopArrow = document.getElementById('arrow1'),
    mobileArrow = document.getElementById('arrow2'),
    dayVar = document.getElementById('day'),
    monthVar = document.getElementById('month'),
    yearVar = document.getElementById('year'),
    resultYears = document.getElementById('result-years'),
    resultMonths = document.getElementById('result-months'),
    resultDays = document.getElementById('result-days'),
    fullCurrentDate = new Date(),
    currentDate = fullCurrentDate.getDate(),
    currentMonth = fullCurrentDate.getMonth() + 1,
    currentYear = fullCurrentDate.getFullYear(),
    submitBtn = document.getElementById('submit'),
    spans = document.querySelectorAll('span');
    
   
    


if (window.matchMedia('(max-width: 450px)').matches) {
    desktopArrow.classList.remove('hidden');
} else {
    mobileArrow.classList.remove('hidden');
};

submitBtn.addEventListener('click', () => {
   

    function toIndicateError() {
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

    toIndicateError();
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

submitBtn.addEventListener('click', toGetDates);


