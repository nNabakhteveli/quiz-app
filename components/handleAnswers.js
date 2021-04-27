import * as buttonStyling from './buttonStyle.js';

const button1 = document.getElementById('answer1');
const button2 = document.getElementById('answer2');
const button3 = document.getElementById('answer3');
const button4 = document.getElementById('answer4');

let progress = 0;
let playerScore = 0;

document.getElementById('gameProgress').innerHTML = `${progress} / 10`;
document.getElementById('points').innerHTML = `Your Points - ${playerScore}`;


function incrementGameProgress() {
    progress += 1;
    document.getElementById('gameProgress').innerHTML = `${progress} / 10`;
}

function incrementPlayerScore() {
    playerScore += 10;
    document.getElementById('points').innerHTML = `Your Points - ${playerScore}`;
}


function endGame() {
    quiz_container.style.visibility = 'hidden';
    question_text.style.visibility = 'hidden';
    document.getElementById('endgame-div').style.visibility = 'visible';
    document.getElementById('play-again-button').style.visibility = 'visible';
    document.getElementById('player-info').innerHTML = `Your score is - ${isRightOrNot.playerScore}!
Want to play again?`;
}

export default function isRightOrNot(question) {
    button1.onclick = () => {
        if(button1.firstChild.data === question.correct_answer) {
            incrementGameProgress();
            incrementPlayerScore();
            buttonStyling.styleRightAnswerForButton1();
            console.log("That's right!");
        } else {
            incrementGameProgress();
            buttonStyling.styleWrongAnswerForButton1();
            console.log("Wrong answer buddy"); 
        }
    }

    button2.onclick = () => {
        incrementGameProgress();
        if(button2.firstChild.data === question.correct_answer) {
            incrementPlayerScore();
            buttonStyling.styleRightAnswerForButton2();
            console.log("That's right!");
        } else {
            buttonStyling.styleWrongAnswerForButton2();
            console.log("Wrong answer buddy"); 
        }
    }

    button3.onclick = () => {
        incrementGameProgress();
        if(button3.firstChild.data === question.correct_answer) {
            incrementPlayerScore();
            buttonStyling.styleRightAnswerForButton3();
            console.log("That's right!");
        } else {
            buttonStyling.styleWrongAnswerForButton3();
            console.log("Wrong answer buddy"); 
        }
    }

    button4.onclick = () => {
        incrementGameProgress();
        if(button4.firstChild.data === question.correct_answer) {
            incrementPlayerScore();
            buttonStyling.styleRightAnswerForButton4();
            console.log("That's right!");
        } else {
            buttonStyling.styleWrongAnswerForButton4();
            console.log("Wrong answer buddy"); 
        }
    }
}

if(progress >= 10) {
    endGame();
}