let gameseq = [];
let userseq = [];

let btns = ["one", "two", "three", "four"];

let started = false;
let level = 0;
let h2 = document.querySelector('h2');

//step 1
document.addEventListener('keypress',function() {
    if(started == false){
        console.log("Game is started");
        started = true;

        levelUp();
    }
});

//step 2
function levelUp(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    //random button choose
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randBtn);
}

function gameFlash(btn){
    btn.classList.add("flash");

    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

//step 3
function userFlash(btn){
    btn.classList.add("userflash");

    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}

function btnPress() {
    console.log(this);   //btn flash
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userseq.push(userColor);  //add color in userseq

    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener("click", btnPress)
}

//step 4
function checkAns(idx){
    // console.log(`current level: ${level}`);  //current level value is equal to userSeq and game Seq

    if(userseq[idx] == gameseq[idx]){
        // console.log("Same value");
        if(userseq.length == gameseq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b><br> Press any key to start game again.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}
function reset(){   //initialization of all value
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}