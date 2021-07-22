function generateNum1() {
    var randomNumber1 = (Math.floor(Math.random() * 6)) + 1;
    if (randomNumber1 === 1) {
        document.querySelector(".img1").setAttribute("src", "images/dice1.png");
    } else if (randomNumber1 === 2) {
        document.querySelector(".img1").setAttribute("src", "images/dice2.png");
    } else if (randomNumber1 === 3) {
        document.querySelector(".img1").setAttribute("src", "images/dice3.png");
    } else if (randomNumber1 === 4) {
        document.querySelector(".img1").setAttribute("src", "images/dice4.png");
    } else if (randomNumber1 === 5) {
        document.querySelector(".img1").setAttribute("src", "images/dice5.png");
    }
    return randomNumber1;
}

function generateNum2() {
    var randomNumber2 = (Math.floor(Math.random() * 6)) + 1;

    if (randomNumber2 === 1) {
        document.querySelector(".img2").setAttribute("src", "images/dice1.png");
    } else if (randomNumber2 === 2) {
        document.querySelector(".img2").setAttribute("src", "images/dice2.png");
    } else if (randomNumber2 === 3) {
        document.querySelector(".img2").setAttribute("src", "images/dice3.png");
    } else if (randomNumber2 === 4) {
        document.querySelector(".img2").setAttribute("src", "images/dice4.png");
    } else if (randomNumber2 === 5) {
        document.querySelector(".img2").setAttribute("src", "images/dice5.png");
    }
    return randomNumber2;
}

function decideWinner(num1,num2)
{
  if(num1>num2)
  {
      document.querySelector(".super-head").textContent = "	🚩 Player 1 Wins!";
  }

  else if(num1<num2)
  {
      document.querySelector(".super-head").textContent = " Player 2 Wins! 🚩";
  }

  else
  {
    document.querySelector(".super-head").textContent = " Draw!";
  }
}

var p1num = generateNum1();
var p2num = generateNum2();
decideWinner(p1num,p2num);

