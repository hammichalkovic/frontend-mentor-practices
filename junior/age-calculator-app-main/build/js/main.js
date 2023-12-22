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
    currentYear = fullCurrentDate.getFullYear();
    


if (window.matchMedia('(max-width: 450px)').matches) {
    desktopArrow.classList.remove('hidden');
} else {
    mobileArrow.classList.remove('hidden');
}

function toGetBirthFullDate() {
    let localFullCurrentDate = new Date();
    localFullCurrentDate.setDate(dayVar.value * 1);
    localFullCurrentDate.setMonth(monthVar.value * 1 - 1);
    localFullCurrentDate.setFullYear(yearVar.value * 1);
    localFullCurrentDate = localFullCurrentDate.toDateString();
    console.log(localFullCurrentDate);
    //to rewrite the function in promise-style
}
