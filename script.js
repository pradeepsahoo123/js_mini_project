let gameSeq=[];
let userSeq=[];

let btns=["yellow" , "red" , "purple" , "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;

        levelUp();
    }
  
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout( function () {
        btn.classList.remove("flash");
    } ,300);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${Level}`;

   let rendIdx = Math.floor(Math.random() * 3);
   let randColor = btns[randIdx];
   let randBtn = document.querySelector(`,${randColor}`);
  //  console.log(randBtn);
  //  console.log(randIdx);
  //  console.log(randColor);
  gameSeq.push(randColor);
  console.log(gameSeq);
   btnFlash(randBtn);
}

function checkAns() {
  // console.log("curr level :", level);
  let idx = level-1;

  if (userSeq [idx] == gameSeq[idx]) {
    console.log("same velue");
    if (userSeq.length == gameSeq.length) {
      levelUp();
    }
  } else {
    h2.innerText = `Game over! press any key to start `;
  }
}



function btnPress() {
  console.log(this);
  let btn = this;
  btnFlash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  
  checkAns();
}

let allBtns = document.querySelectorAll(".btn");
for ( btn of allBtns) {
  btn.addEventListener("click", btnPress);
}


