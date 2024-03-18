let headerLinks = document.getElementById('header_link_list'),
    linkButton = document.getElementById('bright_future_button'),
    interactionButton = document.getElementById('sidebar_interaction'),
    brightFutureImgDesktop = document.getElementById('bf_img_desktop'),
    brightFutureImgMobile = document.getElementById('bf_img_mobile'),
    footer = document.getElementById('footer');


if (!window.matchMedia('(max-width: 450px)').matches) {
    interactionButton.classList.add('hidden');
    headerLinks.classList.remove('hidden');
    brightFutureImgMobile.classList.add('hidden');
    brightFutureImgDesktop.classList.remove('hidden');
    ;
} 

if(!window.matchMedia('(max-height: 1000px)').matches && !window.matchMedia('(max-width: 450px)').matches) {
    footer.classList.remove('hidden')
}


linkButton.addEventListener('click', () => {
    linkButton.classList.add('bg-very-dark-blue');
    linkButton.classList.remove('bg-soft-red');
    setTimeout(() => {
        linkButton.classList.add('bg-soft-red');
        linkButton.classList.remove('bg-very-dark-blue');
    }, 100)
}) 
