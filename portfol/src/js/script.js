const cookieEl = document.querySelector('.privacy');


let cookies = () => {
    if (!Cookies.get('hide-cookie')) {
        setTimeout(() => {
            cookieEl.style.display = 'block';

        }, 100);
    }

    Cookies.set('hide-cookie', 'true', {
        expires: 30
    });
};

console.log( document.cookie );

cookies();
