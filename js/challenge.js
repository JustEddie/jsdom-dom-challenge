// timer increment every second
//plus & minus buttons
// like - counter liked
//pause button : disable other buttons, changed to resume when pressed?


//counter

// const counter = document.getElementById('counter');

function timer() {
    return setInterval(function(){
        let a = document.getElementById('counter');
        let b = parseInt(a.innerText);
        a.innerText = b +1;
    },1000)

}
timer();


//declare first
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const like = document.getElementById('heart');
const pause = document.getElementById('pause');
//plus & minus button

plus.addEventListener('click',function(){
    let a = document.getElementById('counter');
        let b = parseInt(a.innerText);
        a.innerText = b +1;
})

minus.addEventListener('click',function(){
    let a = document.getElementById('counter');
        let b = parseInt(a.innerText);
        a.innerText = b -1;
})

//like
like.addEventListener('click',function(){
    const liker = document.createElement('li');
    const list = document.querySelector(".likes");
    list.appendChild(liker);
    let likeCounter = 0;
    liker.innerHTML = "you liked "+document.getElementById('counter').innerHTML
})

pause.addEventListener('click',function(){
    
})