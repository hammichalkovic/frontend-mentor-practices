let summaryTitles = document.querySelectorAll('h3'),
    arrows = document.querySelectorAll('details');

let toChangeSummaryWeight = (e) => {
        summaryTitles.forEach((title) => {
            title.classList.toggle('weighted');
        });
    };

arrows.forEach(arrow => arrow.addEventListener('click', toChangeSummaryWeight));