

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('fist');
const scissors_div = document.getElementById('scissors');
const palm_div = document.getElementById('palm');
var user_label = document.getElementById('user-label');
function  GetcomputerChoice() {
    const choices = ['fist', 'scissors','palm' ];
  const randomNumber = (Math.floor( Math.random()*3 ));
  return choices[randomNumber];
  
  }


  //  timeout example setTimeout( function()  { console.log("hello"); }  , 2000);







function switchTheWord(word){
  if(word === "fist") return "STONE";
  if(word === "palm") return "LEAF";
  if(word === "scissors") return "SCISSORS";

};


function win(userChoice, computerChoice ){
  
  const smallUserWord = "user".fontsize(3).sup(1).fontcolor('34DA08');
  const smallcomputerWord = "comp".fontsize(3).sup(1).fontcolor('#f21818');
var usr = document.getElementById(userChoice);
var usr_label = document.getElementById('user-label');

userScore++; 
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;

result_p.innerHTML = `${switchTheWord(userChoice)} ${smallUserWord}   &nbsp; &nbsp;  <img src="img/nuke1.png" alt="">   &nbsp; &nbsp; 
 ${switchTheWord(computerChoice)}  ${smallcomputerWord} <br> <p> You Win </p>`;
 
 //green glow effect
usr.classList.add('green-glow');//add a class from css
setTimeout(() => usr.classList.remove('green-glow') , 320);   //remove class from css

user_label.classList.add('board-shake');
setTimeout(() => user_label.classList.remove('board-shake') , 301);



 
}
        function loose(userChoice, computerChoice){
        
          const smallUserWord = "user".fontsize(3).sup(1).fontcolor('34DA08');
          const smallcomputerWord = "comp".fontsize(3).sup(1).fontcolor('#f21818');
          var usr = document.getElementById(userChoice);
          
              computerScore++; 
              userScore_span.innerHTML = userScore;
              computerScore_span.innerHTML = computerScore;

          result_p.innerHTML = `${switchTheWord(userChoice)} ${smallUserWord}   &nbsp; &nbsp;  Defeated by  &nbsp; &nbsp;  
          ${switchTheWord(computerChoice)}  ${smallcomputerWord} &nbsp; <br> You Lost`;
          

          usr.classList.add('red-glow');//add a class from css
        setTimeout(() => usr.classList.remove('red-glow') , 320);   //remove class from css
          }
          
  function draw(userChoice, computerChoice){
     
    
    const smallUserWord = "user".fontsize(3).sup(1).fontcolor('34DA08');
    const smallcomputerWord = "comp".fontsize(3).sup(1).fontcolor('#f21818');
    var usr = document.getElementById(userChoice);

    result_p.innerHTML = `${switchTheWord(userChoice)} ${smallUserWord}   &nbsp; &nbsp;  Draw  &nbsp; &nbsp;  
     ${switchTheWord(computerChoice)}  ${smallcomputerWord}`;
    

      
     usr.classList.add('grey-glow');//add a class from css
     setTimeout(() => usr.classList.remove('grey-glow') , 320);   //remove class from css

    }
      





function game(userChoice){
const computerChoice = GetcomputerChoice();
switch (userChoice + computerChoice){
case "fistscissors":
case "palmfist":
case "scissorspalm":
win(userChoice, computerChoice);
break;

  case "fistpalm":
  case "palmscissors":
  case "scissorsfist":
   loose(userChoice, computerChoice);
break;
        case"fistfist":
        case"palmpalm":
        case"scissorsscissors":
        draw(userChoice, computerChoice);
        break;
}//switch
}//FU games(userChoice)

function main(){

rock_div.addEventListener('click',() => game('fist'));

scissors_div.addEventListener('click',() => game('scissors')); 

    palm_div.addEventListener('click',() =>game('palm'));

      
    }
        main();


      