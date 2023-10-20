const head = document.querySelector('#head');
const tail = document.querySelector('#tail');

const coin = document.querySelector('#coin');
const choice = document.querySelector('#choice');
const result = document.querySelector('#result');
const message = document.querySelector('#message');



head.addEventListener('click', function () {
    let num = Math.round(Math.random());

    if (num === 1) {
        coin.innerHTML = '<img id="coin-image" src="./assets/head.png" alt="coin-image">'
        choice.innerHTML = 'You chose "Head".'
        result.style.color = 'blue'
        result.innerHTML = 'You Win The Toss!'
        message.innerHTML = 'Refresh the page before the next toss.'
    }
    else {
        coin.innerHTML = '<img id="coin-image" src="./assets/tail.png" alt="coin-image">'
        choice.innerHTML = 'You chose "Head".'
        result.style.color = 'red'
        result.innerHTML = 'You Loss The Toss!'
        message.innerHTML = 'Refresh the page before the next toss.'
    }
});


tail.addEventListener('click', function () {
    let num = Math.round(Math.random());

    if (num === 0) {
        coin.innerHTML = '<img id="coin-image" src="./assets/tail.png" alt="coin-image">'
        choice.innerHTML = 'You chose "Tail".'
        result.style.color = 'blue'
        result.innerHTML = 'You Win The Toss!'
        message.innerHTML = 'Refresh the page before the next toss.'
    }
    else {
        coin.innerHTML = '<img id="coin-image" src="./assets/head.png" alt="coin-image">'
        choice.innerHTML = 'You chose "Tail".'
        result.style.color = 'red'
        result.innerHTML = 'You Loss The Toss!'
        message.innerHTML = 'Refresh the page before the next toss.'
    }
});












