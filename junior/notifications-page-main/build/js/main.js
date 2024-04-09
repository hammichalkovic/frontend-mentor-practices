let footer = document.getElementById('footer'),
    main = document.getElementById('mainmain'),
    usernames = document.querySelectorAll('.username'),
    groups = document.querySelectorAll('.group'),
    posts = document.querySelectorAll('.post'),
    readAll = document.getElementById('read-all');



if (!window.matchMedia('(max-height: 950px)').matches && !window.matchMedia('(max-width: 450px)').matches) {
  
    footer.classList.remove('hidden');
} else {
    main.classList.remove('sm:mt-auto');
}

if (!window.matchMedia('(min-width: 640px)').matches) {

    function toChangeColor(item, textColorDefault, textColorNew) {
        item.classList.remove(textColorDefault);
        item.classList.add(textColorNew);      
    }

    usernames.forEach(username => {
        username.addEventListener('click', () => {
            toChangeColor(username, 'text-very-dark-blue', 'text-custom-blue');
            setTimeout(() => {
                toChangeColor(username, 'text-custom-blue',  'text-very-dark-blue');
            }, 600)

        })
    });

    groups.forEach(group => {
        group.addEventListener('click', () => {
            toChangeColor(group, 'text-dark-grayish-blue', 'text-custom-blue');
            setTimeout(() => {
                toChangeColor(group, 'text-custom-blue',  'text-dark-grayish-blue');
            }, 600)

        })
    });

    posts.forEach(post => {
        post.addEventListener('click', () => {
            toChangeColor(post, 'text-dark-grayish-blue', 'text-custom-blue');
            setTimeout(() => {
                toChangeColor(post, 'text-custom-blue',  'text-dark-grayish-blue');
            }, 600)

        })
    });
}

