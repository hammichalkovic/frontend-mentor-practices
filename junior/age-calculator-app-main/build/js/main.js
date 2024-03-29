// sm:tracking-[0.15em]   - for digits in result field in default state
// sm:-mr-2 - for digits in result field in default state

let mainSection = document.getElementById('interactive-section'),
    desktopArrow = document.getElementById('arrow1'),
    mobileArrow = document.getElementById('arrow2'),
    dayVar = document.getElementById('day'),
    monthVar = document.getElementById('month'),
    yearVar = document.getElementById('year'),
    daysDiv = document.getElementById('daysdiv'),
    monthsDiv = document.getElementById('monthsdiv'),
    yearsDiv = document.getElementById('yearsdiv'),
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
    errorNotificationArr = [[daysLabel, dayVar, spanDaysErr], [monthsLabel, monthVar, spanMonthsErr], [yearsLabel, yearVar, spanYearsErr]],
    lettersBanRegex = '[0-9]',
    horizontalRule = document.getElementById('horizontal_rule'),
    resultSection = document.getElementById('result_sect'),
    footer = document.getElementById('footer');
    


if (window.matchMedia('(max-width: 450px)').matches) {
    desktopArrow.classList.remove('hidden');
    footer.classList.add('hidden');
} else {
    mobileArrow.classList.remove('hidden');
    
};

function toAddTracking() {
    resultDays.classList.add('sm:tracking-[0.15em]');
    resultMonths.classList.add('sm:tracking-[0.15em]');
    resultYears.classList.add('sm:tracking-[0.15em]');
}

function toExtendMainSection() {
    mainSection.classList.add('h-[498px]');
    mainSection.classList.remove('h-[486px]');
    mainSection.classList.remove('sm:h-[650px]');
    mainSection.classList.add('sm:h-[681px]');
    submitBtn.classList.add('sm:top-[168px]');
    submitBtn.classList.remove('sm:top-[150px]');
    horizontalRule.classList.add('sm:top-[77px]');
    horizontalRule.classList.remove('sm:top-[66px]');
    resultSection.classList.add('sm:top-[75px]');
    resultSection.classList.remove('sm:top-[65px]');
    
}

function toShrinkMainSection() {
    mainSection.classList.add('h-[486px]');
    mainSection.classList.remove('h-[498px]');
    mainSection.classList.remove('sm:h-[681px]');
    mainSection.classList.add('sm:h-[650px]');
    submitBtn.classList.add('sm:top-[150px]');
    submitBtn.classList.remove('sm:top-[168px]');
    horizontalRule.classList.add('sm:top-[66px]');
    horizontalRule.classList.remove('sm:top-[77px]');
    resultSection.classList.add('sm:top-[65px]');
    resultSection.classList.remove('sm:top-[75px]');
}

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

function toClearVars() {
    resultDays.textContent = '--';
    resultMonths.textContent = '--';
    resultYears.textContent = '--';
    spans.forEach(span => {
        span.classList.remove('sm:-mr-2');
        span.classList.add('sm:-mr-[22px]');
        resultDays.classList.add('sm:tracking-[0.15em]');
        resultMonths.classList.add('sm:tracking-[0.15em]');
        resultYears.classList.add('sm:tracking-[0.15em]');
    });
}

function toSetDefaultTracking() {
    if (resultDays.value == '--' || resultMonths.value == '--' || resultYears.value == '--') {
       toClearVars(); 
    }
}

function toNotifyError(inputPlace, errorText) {
    errorNotificationArr[inputPlace][0].classList.remove('text-smokeygrey');
    errorNotificationArr[inputPlace][0].classList.add('text-lightred');
    errorNotificationArr[inputPlace][1].classList.remove('border-lightgrey', 'focus-within:border-borderpurple');
    errorNotificationArr[inputPlace][1].classList.add('border-lightred', 'focus-within:border-lightred');
    errorNotificationArr[inputPlace][2].textContent = errorText;
    toExtendMainSection();
}

function toHideErrorNotify(inputPlace, textToWrite) {
    errorNotificationArr[inputPlace][0].classList.remove('text-lightred');
    errorNotificationArr[inputPlace][0].classList.add('text-smokeygrey');
    errorNotificationArr[inputPlace][1].classList.remove('border-lightred', 'focus-within:border-lightred');
    errorNotificationArr[inputPlace][1].classList.add('border-lightgrey', 'focus-within:border-borderpurple');
    errorNotificationArr[inputPlace][2].textContent = textToWrite;
    toShrinkMainSection();
}

function toCheckErrNotfArr() {
    for (i = 0; i < errorNotificationArr.length; i++) {
        if (errorNotificationArr[i][1].value == '') {
        
            toNotifyError(i, 'This field is required');
            setTimeout(() => {
                toHideErrorNotify(0, '');
            }, 3000)
        }
    }
    
}

function toCheckMonthsNumber() {
    let checkMonthPromise = new Promise((resolve, reject) => {
        let monthVal = errorNotificationArr[1][1].value * 1;
    
        if ( 0 < monthVal && monthVal < 13 || typeof monthVal === typeof Number ) {
            resolve('resolve!');
        } else {
            reject('reject!');
        }
    });
    
    checkMonthPromise.then(() => {
        // toGetDates();
    })

    .catch(() => {
        let monthVal = errorNotificationArr[1][1].value * 1;

        if (monthVal == 0 ) {
                toNotifyError(1, 'This field is required');
                toClearVars();
            } else  {
                toNotifyError(1, 'Must be a valid month');
                toClearVars();
            }
    })

    .finally(() => {
        setTimeout(() => {

            toHideErrorNotify(1, '');

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
        // toGetDates();
    })

    .catch(() => {
        let yearVal = errorNotificationArr[2][1].value * 1;

        if (yearVal != 0 ) {
                toNotifyError(2, 'Must be in the past');
                toClearVars();
            } else if (yearVal == 0) {
                toNotifyError(2, 'This field is required');  
                toClearVars();
            }

        // toNotifyError(2, 'Must be in the past')
    })

    .finally(() => {
        setTimeout(() => {

            toHideErrorNotify(2, '');

        }, 3000)
    })
}

function getLastDayOfMonth(year, month) {
    year = yearVar.value * 1;
    month = monthVar.value * 1;
    let lastDay = new Date(year, month, 0);
    
    lastDay = lastDay.toDateString();
    lastDay = lastDay.split(' ');
    lastDay = lastDay[2] * 1;
    return lastDay;
    
}

function toCheckDaysNumber() {

    if (dayVar.value == '') {
        toNotifyError(0, 'This field is required');
        setTimeout(() => {
            toHideErrorNotify(0, '');
        },3000)
    } else {
        let checkDayPromise = new Promise((resolve, reject) => {
            let dayVal = errorNotificationArr[0][1].value * 1,
                parsed = dayVar.value;
    
            let lastDayTheMonth = getLastDayOfMonth();
    
            // to rewrite the condition
            if (dayVal > 31 || dayVal < 1 || !parsed.match(lettersBanRegex)) {
                reject('rejected!');
    
            } else if (dayVal > lastDayTheMonth) {
                resolve('resolved!');
                console.log(dayVal);
    
            }
        }); 
    
        checkDayPromise.then(() => {
            toNotifyError(1, '');
            toNotifyError(2, '');
            toNotifyError(0, 'Must be a valid date');
            toClearVars();
        })
    
        .catch(() => {
            toNotifyError(0, 'Must be a valid day');
            toClearVars();
        })
    
        .finally(() => {
            setTimeout(() => {
                toHideErrorNotify(0, '');
                toHideErrorNotify(1, '');
                toHideErrorNotify(2, '');
            }, 3000)
        })
    }

  
}

function toFire() {
    lastDayTheMonth = getLastDayOfMonth();

    // toClearVars();
    toDisplayWhileInputsEmpty();
    toCheckErrNotfArr();
    toCheckMonthsNumber();
    toCheckYearsNumber();
    toCheckDaysNumber();
    submitBtn.classList.add('bg-offblack');
    submitBtn.classList.remove('bg-purple');

    if (dayVar.value == 29 && monthVar.value == 2 && yearVar.value > 1900 && yearVar.value % 4 != 0 || dayVar.value > lastDayTheMonth || monthVar.value > 12 || monthVar.value < 1 || yearVar.value > currentYear) {
        toClearVars();
        toAddTracking();
        setTimeout(() => {
            submitBtn.classList.add('bg-purple');
            submitBtn.classList.remove('bg-offblack');
        }, 3000)
    } else {
        for (let i = 0; i < 3; i++) {
            
            if (errorNotificationArr[i][2] != '' && yearVar.value * 1 < currentYear + 1) {
                toGetDates();
                setTimeout(() => {
                    submitBtn.classList.add('bg-purple');
                    submitBtn.classList.remove('bg-offblack');
                }, 3000)
            } else {
                toClearVars();
                setTimeout(() => {
                    submitBtn.classList.add('bg-purple');
                    submitBtn.classList.remove('bg-offblack');
                }, 3000)  
            }
        }
    }
    
}

window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        toFire();
    }
});

submitBtn.addEventListener('click', () => {
    toFire();
    // lastDayTheMonth = getLastDayOfMonth();

    // // toClearVars();
    // toDisplayWhileInputsEmpty();
    // toCheckErrNotfArr();
    // toCheckMonthsNumber();
    // toCheckYearsNumber();
    // toCheckDaysNumber();
    // submitBtn.classList.add('bg-offblack');
    // submitBtn.classList.remove('bg-purple');

    // if (dayVar.value == 29 && monthVar.value == 2 && yearVar.value > 1900 && yearVar.value % 4 != 0 || dayVar.value > lastDayTheMonth || monthVar.value > 12 || monthVar.value < 1 || yearVar.value > currentYear) {
    //     toClearVars();
    //     toAddTracking();
    //     setTimeout(() => {
    //         submitBtn.classList.add('bg-purple');
    //         submitBtn.classList.remove('bg-offblack');
    //     }, 3000)
    // } else {
    //     for (let i = 0; i < 3; i++) {
            
    //         if (errorNotificationArr[i][2] != '' && yearVar.value * 1 < currentYear + 1) {
    //             toGetDates();
    //             setTimeout(() => {
    //                 submitBtn.classList.add('bg-purple');
    //                 submitBtn.classList.remove('bg-offblack');
    //             }, 3000)
    //         } else {
    //             toClearVars();
    //             setTimeout(() => {
    //                 submitBtn.classList.add('bg-purple');
    //                 submitBtn.classList.remove('bg-offblack');
    //             }, 3000)  
    //         }
    //     }
    // }
    
    // for (let i = 0; i < 3; i++) {
    //     if (errorNotificationArr[i][2] != '') {
    //         toGetDates();
    //     } else {
    //         toClearVars();
    //     }
    // }
})

 function getLastDayOfPrevMonth(year, month) {
                
    let lastDay = new Date(year, month, 0);
    
    lastDay = lastDay.toDateString();
    lastDay = lastDay.split(' ');
    lastDay = lastDay[2] * 1;
    return lastDay;
                
}

// let localFullCurrentDate = new Date();
//     localFullCurrentDate = localFullCurrentDate.toDateString();
// let currDateArr = localFullCurrentDate.split(' ');

let toGetDates = (localFullCurrentDate, typedDateOfBirth) => {
    spans.forEach(span => {
        span.classList.remove('sm:-mr-[22px]');
        span.classList.add('sm:-mr-2');
    })
    
    localFullCurrentDate = new Date(),
    typedDateOfBirth = new Date();
 
    typedDateOfBirth.setDate(dayVar.value * 1);
    typedDateOfBirth.setMonth(monthVar.value * 1 - 1);
    typedDateOfBirth.setFullYear(yearVar.value * 1);
    typedDateOfBirth = typedDateOfBirth.toDateString();
    localFullCurrentDate = localFullCurrentDate.toDateString();

    let currDateArr = localFullCurrentDate.split(' '),
        typedDateArr = typedDateOfBirth.split(' ');

    let resultDaysCalc = 0,
        resultMonthsCalc = 0,
        resultYearsCalc = 0; 

        // console.log(typedDateArr);

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

        currDateArr = currDateArr.map(item => item * 1);
        typedDateArr = typedDateArr.map(item => item * 1);

        // console.log(currDateArr);
        // console.log(typedDateArr);

        if (dayVar.value == '' || monthVar.value == '' || yearVar.value == ''
         || !dayVar.value.match(lettersBanRegex) || !monthVar.value.match(lettersBanRegex) || !yearVar.value.match(lettersBanRegex) ) {
            toClearVars();
            toAddTracking();

        } else {
            let calcDaysPromise = new Promise((resolve, reject) => {
            
                if (typedDateArr[2] > currDateArr[2]) {
                    resolve('resolved!');
                    
                } else {
                    reject('rejected!');
                    
                }
            });
    
            calcDaysPromise.then(() => {
                let daysToAdd = 0,
                    daysToSubtractFrom = 0;
    
                    daysToAdd = getLastDayOfPrevMonth(currDateArr[3], currDateArr[1] - 1) * 1;
                    daysToSubtractFrom = daysToAdd + currDateArr[2];
                    resultDaysCalc = daysToSubtractFrom - typedDateArr[2];
                    currDateArr[1] -= 1;
                    // console.log(daysToAdd);
                    // console.log(daysToSubtractFrom);
                    console.log(resultDaysCalc);
            })


            
            .then(() => {
                let calcMonthsPromise = new Promise((resolve, reject) => {
                    if (typedDateArr[1] > currDateArr[1]) {
                        resolve('resolved!');
                    } else if (typedDateArr[1] <= currDateArr[1]) {
                        reject('rejected!');
                    }
                });
    
                calcMonthsPromise.then(() => {
                    currDateArr[1] += 12;
                    currDateArr[3] -= 1;
                    resultMonthsCalc = currDateArr[1] - typedDateArr[1];
                    resultYearsCalc = currDateArr[3] - typedDateArr[3];
                    // console.log(resultMonthsCalc);
                    // console.log(resultYearsCalc);
    
                    resultDays.textContent = resultDaysCalc;
                    resultMonths.textContent = resultMonthsCalc;
                    resultYears.textContent = resultYearsCalc;
                })

                .catch(() => {
                    resultMonthsCalc = currDateArr[1] - typedDateArr[1];
                    resultYearsCalc = currDateArr[3] - typedDateArr[3];
                    // console.log(resultMonthsCalc);
                    // console.log(resultYearsCalc);
    
                    resultDays.textContent = resultDaysCalc;
                    resultMonths.textContent = resultMonthsCalc;
                    resultYears.textContent = resultYearsCalc;
                })
            }) 
    
            .catch(() => {
                resultDaysCalc = currDateArr[2] - typedDateArr[2];
    
                let altCalcMonthsPromise = new Promise((resolve, reject) => {
                     if (typedDateArr[1] > currDateArr[1]) {
                        resolve('resolved!');
                    } else {
                        reject('rejected!');
                    }
                })
    
                altCalcMonthsPromise.then(() => {
                    currDateArr[1] += 12;
                    currDateArr[3] -= 1;
                    resultMonthsCalc = currDateArr[1] - typedDateArr[1];
                    resultYearsCalc = currDateArr[3] - typedDateArr[3];
                    // console.log(resultMonthsCalc);
                    // console.log(resultYearsCalc);
    
                    resultDays.textContent = resultDaysCalc;
                    resultMonths.textContent = resultMonthsCalc;
                    resultYears.textContent = resultYearsCalc;
                })
    
                .catch(() => {
                    resultMonthsCalc = currDateArr[1] - typedDateArr[1];
                    resultYearsCalc = currDateArr[3] - typedDateArr[3];
    
                    resultDays.textContent = resultDaysCalc;
                    resultMonths.textContent = resultMonthsCalc;
                    resultYears.textContent = resultYearsCalc;
                })
            })
    
    
    
        // if (yearVar.value == '' || monthVar.value == '' || yearVar.value == '') {
        //     resultDays.textContent = '--';
        //     resultMonths.textContent = '--';
        //     resultYears.textContent = '--';
        // }
    
        // console.log(typedDateArr, currDateArr);
        // console.log(resultDaysCalc);
        // console.log(resultDaysCalc);
        // console.log(resultMonthsCalc);
        // console.log(resultYearsCalc);

        toSetDefaultTracking();
        }

    //     let calcDaysPromise = new Promise((resolve, reject) => {
            
    //         if (typedDateArr[2] > currDateArr[2]) {
    //             resolve('resolved!');
                
    //         } else {
    //             reject('rejected!');
                
    //         }
    //     });

    //     calcDaysPromise.then(() => {
    //         let daysToAdd = 0,
    //             daysToSubtractFrom = 0;

    //             daysToAdd = getLastDayOfMonth() * 1;
    //             daysToSubtractFrom = daysToAdd + currDateArr[2];
    //             resultDaysCalc = daysToSubtractFrom - typedDateArr[2];
    //             currDateArr[1] -= 1;
    //             // console.log(daysToAdd);
    //             // console.log(daysToSubtractFrom);
    //             // console.log(resultDaysCalc);
    //     })
        
    //     .then(() => {
    //         let calcMonthsPromise = new Promise((resolve, reject) => {
    //             if (typedDateArr[1] > currDateArr[1]) {
    //                 resolve('resolved!');
    //             } else {
    //                 reject('rejected!');
    //             }
    //         });

    //         calcMonthsPromise.then(() => {
    //             currDateArr[1] += 12;
    //             currDateArr[3] -= 1;
    //             resultMonthsCalc = currDateArr[1] - typedDateArr[1];
    //             resultYearsCalc = currDateArr[3] - typedDateArr[3];
    //             console.log(resultMonthsCalc);
    //             console.log(resultYearsCalc);

    //             resultDays.textContent = resultDaysCalc;
    //             resultMonths.textContent = resultMonthsCalc;
    //             resultYears.textContent = resultYearsCalc;
    //         })
    //     }) 

    //     .catch(() => {
    //         resultDaysCalc = currDateArr[2] - typedDateArr[2];

    //         let altCalcMonthsPromise = new Promise((resolve, reject) => {
    //              if (typedDateArr[1] > currDateArr[1]) {
    //                 resolve('resolved!');
    //             } else {
    //                 reject('rejected!');
    //             }
    //         })

    //         altCalcMonthsPromise.then(() => {
    //             currDateArr[1] += 12;
    //             currDateArr[3] -= 1;
    //             resultMonthsCalc = currDateArr[1] - typedDateArr[1];
    //             resultYearsCalc = currDateArr[3] - typedDateArr[3];
    //             console.log(resultMonthsCalc);
    //             console.log(resultYearsCalc);

    //             resultDays.textContent = resultDaysCalc;
    //             resultMonths.textContent = resultMonthsCalc;
    //             resultYears.textContent = resultYearsCalc;
    //         })

    //         .catch(() => {
    //             resultMonthsCalc = currDateArr[1] - typedDateArr[1];
    //             resultYearsCalc = currDateArr[3] - typedDateArr[3];

    //             resultDays.textContent = resultDaysCalc;
    //             resultMonths.textContent = resultMonthsCalc;
    //             resultYears.textContent = resultYearsCalc;
    //         })
    //     })



    if (yearVar.value == '' || monthVar.value == '' || yearVar.value == '') {
        resultDays.textContent = '--';
        resultMonths.textContent = '--';
        resultYears.textContent = '--';
    }

    // console.log(typedDateArr, currDateArr);
    // console.log(resultDaysCalc);
    // console.log(resultDaysCalc);
    // console.log(resultMonthsCalc);
    // console.log(resultYearsCalc);

};

// submitBtn.addEventListener('click', toGetDates);


