import * as buttonStyling from './buttonStyle.js';
import categories from './gettingData.js';
import styleHTML from './showupQuiz.js';

const button1 = document.getElementById('answer1');
const button2 = document.getElementById('answer2');
const button3 = document.getElementById('answer3');
const button4 = document.getElementById('answer4');


// Game info - progress and score
let progress = 1;
let playerScore = 0;


let gameProgressText = document.getElementById('gameProgress');
gameProgressText.innerHTML = `${progress} / 10`;

let playerScoreText = document.getElementById('points');
playerScoreText.innerHTML = `Your Points - ${playerScore}`;


function incrementGameProgress() {
    progress += 1;
    gameProgressText.innerHTML = `${progress} / 10`;
}

function incrementPlayerScore() {
    playerScore += 10;
    playerScoreText.innerHTML = `Your Points - ${playerScore}`;
}

// 

const quiz_container = document.getElementById('quiz-container');
const question_text = document.getElementById('question-text');

function endGame() {
    quiz_container.style.visibility = 'hidden';
    question_text.style.visibility = 'hidden';
    document.getElementById('endgame-div').style.visibility = 'visible';
    document.getElementById('play-again-button').style.visibility = 'visible';
    document.getElementById('player-info').innerHTML = `Your score is - ${playerScore}!
Want to play again?`;

}


export default function isRightOrNot(question) {
    button1.onclick = () => {
        if(button1.firstChild.data === question.correct_answer) {
            incrementPlayerScore();
            buttonStyling.styleRightAnswerForButton1();
            console.log("That's right!");
        } else {
            buttonStyling.styleWrongAnswerForButton1();
            console.log("Wrong answer buddy"); 
        }
    }

    button2.onclick = () => {
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
        if(button4.firstChild.data === question.correct_answer) {
            incrementPlayerScore();
            buttonStyling.styleRightAnswerForButton4();
            console.log("That's right!");
        } else {
            buttonStyling.styleWrongAnswerForButton4();
            console.log("Wrong answer buddy"); 
        }
    }

    if(progress > 10) {
        endGame();
    }
}

document.getElementById('next_question').addEventListener('click', incrementGameProgress);

// Game reset button
document.getElementById('play-again-button').addEventListener('click', () => {
    styleHTML();
    progress = 1;
    playerScore = 0;
    gameProgressText.innerHTML = `${progress} / 10`;
    playerScoreText.innerHTML = `Your Points - ${playerScore}`;
    categories();
});