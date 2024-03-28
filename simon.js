let gameseq = [];
let userseq = [];

let btns = ["yellow","red","green","purple"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false)
    {
        console.log("game started");

    }
    started = true;
    levelup();
})

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
            btn.classList.remove("flash");
    }, 250);

}
function userbtnflash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
            btn.classList.remove("flash");
    }, 250);

}

function levelup()
{
    userseq = [];
    level++;
    h2.innerText = `Level${level}`;
    let randidx = Math.floor(Math.random() * 3);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    btnflash(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq);
}

function checkans(idx)
{
    
    if(userseq[idx] === gameseq[idx])
    {
        if(userseq.length == gameseq.length)
        {
            setTimeout(
                levelup()
            , 1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br>Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function()
        {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
   
}

function btnpress()
{
    let btn = this;
    userbtnflash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);
    }

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns)
{
    btn.addEventListener("click",btnpress);
}

function reset()
{
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}