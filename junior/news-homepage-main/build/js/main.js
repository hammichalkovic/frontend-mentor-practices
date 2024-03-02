let headerLinks = document.getElementById('header_link_list'),
    interactionButton = document.getElementById('sidebar_interaction');


if (!window.matchMedia('(max-width: 450px)').matches) {
    interactionButton.classList.add('hidden');
    headerLinks.classList.remove('hidden');
} 