randomNumber1=Math.floor((Math.random())*6)+1;
randomNumber2=Math.floor((Math.random())*6)+1;
console.log(randomNumber1);
console.log(randomNumber2);

document.querySelector('.img1').setAttribute("src", "images/dice"+randomNumber1+".png")
document.querySelector('.img2').setAttribute("src", "images/dice"+randomNumber2+".png")

// set title to show winner
// selection
let titleText=document.querySelector('h1');


if (randomNumber1>randomNumber2){
  titleText.textContent="Player 1 Wins!";
} else if (randomNumber1==randomNumber2){
  titleText.textContent="Draw!"
}else {
  titleText.textContent="Player 2 Wins!";
}
