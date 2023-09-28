const head = document.querySelector('#head');
const tail = document.querySelector('#tail');
const choice = document.querySelector('#choice');
const result = document.querySelector('#result');
const message = document.querySelector('#message');


const num = Math.round(Math.random());


head.addEventListener('click' , function () {
    if (num === 1) {
        choice.innerHTML = 'You chose "Head".'
        result.innerHTML = 'You Win The Toss!'
        message.innerHTML = 'Refresh the page before the next toss.'
    } 
    else{
        choice.innerHTML = 'You chose "Head".'
        result.innerHTML = 'You Loss The Toss!'
        message.innerHTML = 'Refresh the page before the next toss.'
    }
})

tail.addEventListener('click' , function () {
    if (num === 0) {
        choice.innerHTML = 'You chose "Tail".'
        result.innerHTML = 'You Loss The Toss!'
        message.innerHTML = 'Refresh the page before the next toss.'
    } 
    else{
        choice.innerHTML = 'You chose "Tail".'
        result.innerHTML = 'You Win The Toss!'
        message.innerHTML = 'Refresh the page before the next toss.'
    }
})












