let headerLinks = document.getElementById('header_link_list'),
    interactionButton = document.getElementById('sidebar_interaction'),
    brightFutureImgDesktop = document.getElementById('bf_img_desktop'),
    brightFutureImgMobile = document.getElementById('bf_img_mobile'),
    footer = document.getElementById('footer');


if (!window.matchMedia('(max-width: 450px)').matches) {
    interactionButton.classList.add('hidden');
    headerLinks.classList.remove('hidden');
    brightFutureImgMobile.classList.add('hidden');
    brightFutureImgDesktop.classList.remove('hidden');
    footer.classList.remove('hidden');


} 