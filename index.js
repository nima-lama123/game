const squares = document.querySelectorAll(".square");

const mole = document.querySelector(".mole");

const timeLeft = document.querySelector("#time-left");

const btns = document.querySelector(".btns")


const score = document.querySelector("#score");

const box = document.querySelector(".all")


box.style.visibility="hidden"

const yo = document.querySelector(".yo")

yo.onclick=function(){

yo.style.visibility="hidden"

box.style.visibility="visible"

    let result = 0;

let hitPoint ;

let currentTime = 1;

let timerId = null;

let name = prompt("enter your name: ")

let gameOver = false;

function randomSquare(){

    squares.forEach(square =>{

        square.classList.remove("mole");

    })

    

     let randomSquare = squares[Math.floor(Math.random() * 9)]

randomSquare.classList.add("mole");

  hitPoint = randomSquare.id;

}



  squares.forEach(square =>{

  square.addEventListener("click", () =>{

    if (square.id === hitPoint){

        result++

        score.textContent = result;

        hitPoint = null;

    }

})

   })

   function moveMole(){

       

      timerId= setInterval(randomSquare,500);


   }

   moveMole();


  function countDown(){

       currentTime--;

       timeLeft.textContent = currentTime;


if(currentTime <= 10){

    timeLeft.style.color = "red";

}

if(currentTime == 0){

    clearInterval(countDownTimerId )

;


    clearInterval(timerId);

    alert(`GAME OVER \n ${name} your Final Score Is: ${ result} .`);

  gameOver=true;

  if(gameOver){

      box.style.visibility = "hidden"

      btns.style.visibility = "visible"

  }else{

      box.style.visibility = "visible"

  }

  

}

   }

   

  let countDownTimerId = setInterval(countDown, 1000);


btns.onclick=function(){

gameOver = false;

box.style.visibility = "visible"

btns.style.visibility = "hidden"

currentTime=5;

    moveMole()

    countDownTimerId = setInterval(countDown, 1000)



    

}


}


