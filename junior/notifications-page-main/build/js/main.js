let footer = document.getElementById('footer'),
    main = document.getElementById('mainmain'),
    usernames = document.querySelectorAll('.username'),
    groups = document.querySelectorAll('.group'),
    posts = document.querySelectorAll('.posts'),
    readAll = document.getElementById('read-all');



if (!window.matchMedia('(max-height: 950px)').matches && !window.matchMedia('(max-width: 450px)').matches) {
  
    footer.classList.remove('hidden');
} else {
    main.classList.remove('sm:mt-auto');
}

if (!window.matchMedia('(min-width: 640px)').matches) {

    function toChangeColor(item, textDefault, textNew) {
        item.classList.remove(textDefault);
        item.classList.add(textNew);

        
           
    }

    function toReturnColor(item, textDefault, colorNew) {
        item.classList.add(colorDefault);
        item.classList.remove(colorNew);
    }

    usernames.forEach(username => {
        username.addEventListener('click', () => {
            toChangeColor(username, 'text-very-dark-blue', 'text-custom-blue');

            setTimeout(() => {
                toChangeColor(username, 'text-custom-blue',  'text-very-dark-blue');
            }, 600)

        })
    })
}