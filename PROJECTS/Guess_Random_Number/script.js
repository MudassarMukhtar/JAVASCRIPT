let Random = parseInt(Math.random() * 100 + 1);
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playgame = true;

if (playgame) {
    addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('please eneter a valid number')
    } else if (guess < 1) {
        alert('Please enter a number greater than 1')
    } else if (guess > 100) {
        alert('Please enter a number less than 100')
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`GameOver . Random number was ${randomNumber}`);
            endgame()
        }else{
            displayGuess(guess)
            checkGuess()
        }
    }

    function checkGuess(guess) {
           if(guess===randomNumber){
             displayMessage(`You guessed it right`)
             endgame()
           }else if(guess<randomNumber){
            displayMessage(`number is Too low`)
           }else if(guess>randomNumber){
            displayMessage(`number is Too high`)
           }
    }

    function displayGuess(guess) {
            userInput.value='';
            guessSlot.value+=`${guess} , `;
            numGuess++;
            remaining.innerHTML=`${11-numGuess}`;

    }
    function displayMessage(message) {
            lowOrhi.innerHTML=`<h2>${message}</h2>`;

    }
    function endgame() {
           userInput.value='';
           userInput.setAttribute(`disable`,'')
           p.classlist.add('button');
           p.innerHTML='<h2 id="newGame">Strat New Game</h2>';
           startOver.appendChild(p);
           playgame=false;
           newGame()
    }
    function newgame() {
       
        const newGameButton=document.querySelector('newGame')
        newGameButton.addEventListener('click',function(e){

            let Random = parseInt(Math.random() * 100 + 1);
            prevGuess=[]
            numGuess=1;
            guessSlot.innerHTML=''
            remaining.innerHTML=`${11-numGuess}`;
            userInput.removeAttribute('disable');
            startOver.removeChild(p);

            playgame=true
        })
       

    }