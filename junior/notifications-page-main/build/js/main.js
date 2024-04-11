

let body = document.getElementById('body'),
    footer = document.getElementById('footer'),
    main = document.getElementById('mainmain'),
    usernames = document.querySelectorAll('.username'),
    groups = document.querySelectorAll('.group'),
    posts = document.querySelectorAll('.post'),
    readAll = document.getElementById('read-all'),
    message = document.querySelector('.message'),
    user1 = document.querySelector('.user1'),
    user2 = document.querySelector('.user2'),
    user3 = document.querySelector('.user3'),
    usersArr = [user1, user2, user3],
    unreadMarkers = document.querySelectorAll('.unread-mark');


if (!window.matchMedia('(max-height: 950px)').matches && !window.matchMedia('(max-width: 450px)').matches) {
  
    footer.classList.remove('hidden');
} else {
    main.classList.remove('sm:mt-auto');
}

if (!window.matchMedia('(min-width: 640px)').matches) {

    function toChangeColor(item, textColorDefault, textColorNew) {
        item.classList.remove(textColorDefault);
        item.classList.add(textColorNew);      
    };

    function toSetBGColor(item, colorClass) {
        item.classList.add(colorClass);
        setTimeout(() => {
            item.classList.remove(colorClass);
        }, 1000);
    };

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

    readAll.addEventListener('click', () => {
        toChangeColor(readAll, 'text-dark-grayish-blue', 'text-custom-blue');
        setTimeout(() => {
            toChangeColor(readAll, 'text-custom-blue', 'text-dark-grayish-blue');
        }, 600)
    });

    readAll.addEventListener('click', () => {
        toChangeColor(readAll, 'text-dark-grayish-blue', 'text-custom-blue');
        setTimeout(() => {
            toChangeColor(readAll, 'text-custom-blue', 'text-dark-grayish-blue');
        }, 600)
    });

    
    message.addEventListener('click', () => {
        toSetBGColor(message, 'bg-lg-blue-1');
    });

    usersArr.forEach(user => {
        user.addEventListener('click', () => {
            user.classList.remove('bg-vlg-blue','unread-mark');
            
        });
    });
    
    unreadMarkers.forEach(marker => {
        marker.parentElement.parentElement.addEventListener('click', () => {
            marker.classList.remove('unread-mark');
        })
    })
}

usersArr.forEach(user => {
    user.addEventListener('mouseover', () => {
        user.classList.remove('bg-vlg-blue');
        
    });
});

unreadMarkers.forEach(marker => {
    marker.parentElement.parentElement.addEventListener('mouseover', () => {
        marker.classList.remove('unread-mark');
    })
})

readAll.addEventListener('click', () => {
  usersArr.forEach(user => {
    user.classList.remove('bg-vlg-blue');
  });
  unreadMarkers.forEach(marker => {
    marker.classList.remove('unread-mark');
  })
});