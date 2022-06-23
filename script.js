'use strict';
let  number = Math.trunc(Math.random()*20) +1;
let score = 20;
let highScore = 0;
const displayMessage = function (message){
    document.querySelector('.message').textContent = message
}
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number (document.querySelector('.guess').value);
    //console.log(guess);

    if (!guess){
       document.querySelector('.message').textContent = "No Number!"
    } else if ( guess === number){
        //document.querySelector('.message').textContent  = " Correct Score!"
        displayMessage(" Correct Score!");
        document.querySelector('.number').textContent = number;
        document.querySelector('body').style.backgroundColor = "#60b347"
       // document.querySelector('number').style.width = '30rem'


        if ((score > highScore)){
           highScore = score;
           console.log(highScore);
           document.querySelector('.highscore').textContent = highScore;
        } 

    }else if (guess !== number){
        if (score > 1){
            //document.querySelector('.message').textContent   = guess > number ? " Too High!" : " Too Low!"
            displayMessage(guess > number ? " Too High!" : " Too Low!")
        score--;
       document.querySelector('.score').textContent = score;
        } else {
            //document.querySelector('.message').textContent  = " You lost the Game!"
            displayMessage("You lost the Game!");
            document.querySelector('.score').textContent = 0;
        }
    }
    // }  else if (guess < number ){
    //     if (score > 1){
    //         document.querySelector('.message').textContent  = " Too Low!"
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent  = " You lost the Game!"
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
    //  else if (guess > number ){
    //     if (score > 1){
    //         document.querySelector('.message').textContent   = " Too High!"
    //     score--;
    //    document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent  = " You lost the Game!"
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }  else if (guess < number ){
    //     if (score > 1){
    //         document.querySelector('.message').textContent  = " Too Low!"
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent  = " You lost the Game!"
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
})

document.querySelector('.again').addEventListener('click', function () {
    //location.reload();
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent  = "? "
    number = Math.trunc(Math.random()*20) +1;
    //document.querySelector('.message').textContent  = "Start Guessing... "
    displayMessage("Start Guessing... ");
    document.querySelector('.guess').value = " "
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('number').style.width = '15rem'
})