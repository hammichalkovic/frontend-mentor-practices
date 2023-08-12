let summaries = document.querySelectorAll('summary'),
    detailsList = document.querySelectorAll('details'),
    paragraphs = document.querySelectorAll('details');



summaries.forEach((summary) => {
    summary.addEventListener('click', () => {
        summary.classList.toggle('weighted');
    })

    summary.addEventListener('collapse', () => {
        summary.classList.remove('weighted');
    })
});

summaries.forEach((summary) => {
    summary.addEventListener('focusout', () => {
        summary.classList.remove('weighted');
    })
});

// detailsList.forEach((detail) => detail.addEventListener('focus', () => {
//     detail.setAttribute('open');
// }));

detailsList.forEach((detail) => detail.addEventListener('focusout', () => {
        detail.removeAttribute('open');
}));


detailsList.forEach((detail) => detail.addEventListener('focuson', () => {
    detail.setAttribute('open');
}));

