let summaries = document.querySelectorAll('summary'),
    detailsList = document.querySelectorAll('details'),
    paragraphs = document.querySelectorAll('details').querySelectorAll('p');



summaries.forEach((summary) => {
    summary.addEventListener('click', () => {
        summary.classList.toggle('weighted');
    })

    summary.addEventListener('blur', () => {
        summary.classList.remove('weighted');
    })
});


detailsList.forEach((details) => {
    details.addEventListener('click', () => {
        console.log(details.attributes);
    })
});

paragraphs.forEach((paragraph) => {
    paragraph.addEventListener('blur', () => {
        paragraph.classList.add('collapse');
    })
})
