let headerLinks = document.getElementById('header_link_list'),
    linkButton = document.getElementById('bright_future_button'),
    interactionButton = document.getElementById('sidebar_interaction'),
    brightFutureImgDesktop = document.getElementById('bf_img_desktop'),
    brightFutureImgMobile = document.getElementById('bf_img_mobile'),
    footer = document.getElementById('footer'),
    openButton = document.getElementById('sidebar_interaction'),
    closeButton = document.getElementById('sidebar_close'),
    sidebar = document.getElementById('sidebar'),
    sidebarNav = document.getElementById('sidebar_navigation'),
    sidebarItems = document.querySelectorAll('.sidebar_item'),
    bgColorFilter = document.getElementById('body_bg_color_filter');


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

openButton.addEventListener('click', () => {
    sidebar.classList.remove('w-0');
    sidebar.classList.add('w-[68.3%]');
    sidebarNav.classList.remove('hidden');
    bgColorFilter.classList.remove('h-0', 'w-0', 'bg-transparent');
    bgColorFilter.classList.add('h-[1872px]', 'w-[100%]', 'bg-very-dark-blue');
})

closeButton.addEventListener('click', () => {
    sidebar.classList.remove('w-[68.3%]');
    sidebar.classList.add('w-0');
    sidebarNav.classList.add('hidden');
    bgColorFilter.classList.remove('h-[1872px]', 'w-[100%]', 'bg-very-dark-blue');
    bgColorFilter.classList.add('h-0', 'w-0', 'bg-transparent');
})

sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
        sidebar.classList.remove('w-[68.3%]');
        sidebar.classList.add('w-0');
        sidebarNav.classList.add('hidden');
        bgColorFilter.classList.remove('h-[1872px]', 'w-[100%]', 'bg-very-dark-blue');
        bgColorFilter.classList.add('h-0', 'w-0', 'bg-transparent');
    })
})
