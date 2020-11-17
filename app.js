'use-Strict';

let userScore=0;
let  computerScore=0;

const user_span=document.getElementById("user-score");
const computer_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result >p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

rock_div.addEventListener('click',() => game("r"));
paper_div.addEventListener('click',() => game("p"));
scissor_div.addEventListener('click',() => game("s"));

function game (user_Choice){
    const computer_Choice=getComputerChoice();
     switch(user_Choice+computer_Choice){
         case 'rs':
             case 'pr':
                 case 'sp':
                     wins(user_Choice,computer_Choice);
                     break;
         case 'rp':
             case 'ps':
                 case 'sr':
                     lose(user_Choice,computer_Choice);
                     break;
         case 'rr':
             case 'ss':
                 case 'pp':
                     draw(user_Choice,computer_Choice);
                     break;
     }
}

function wins(userChoice,computerChoice){
    userScore++;
    user_span.innerHTML =userScore;
    computer_span.innerHTML =computerScore;
    const userWord='user'.fontsize(3).sup();
    const compWord='comp'.fontsize(3).sup();
    result_p.innerHTML =`${convertToWord(userChoice)}${userWord} beats 
    ${convertToWord(computerChoice)}${compWord}. You Wins.`;
} 

function lose(userChoice,computerChoice){
    computerScore++;
    user_span.innerHTML =userScore;
    computer_span.innerHTML =computerScore;
    const userWord='user'.fontsize(3).sup();
    const compWord='comp'.fontsize(3).sup();
    result_p.innerHTML =`${convertToWord(userChoice)}${userWord} loses to 
    ${convertToWord(computerChoice)}${compWord}. You Lost.`;
}

function draw(userChoice,computerChoice){
    const userWord='user'.fontsize(3).sup();
    const compWord='comp'.fontsize(3).sup();
    result_p.innerHTML =`${convertToWord(userChoice)}${userWord} draw 
    ${convertToWord(computerChoice)}${compWord}. It's a draw.`;
}

function convertToWord(letter){
    if(letter === 'r') return "Rock";
    if(letter === 'p') return "Paper";
    return "Scissor";
}

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber= Math.floor(Math.random() * 3);
    return choices[randomNumber];
}