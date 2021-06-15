import * as buttonStyling from './buttonStyle.js';
import generateQuestion from './gettingData.js';
import styleHTML from './showupQuiz.js';
import shareOnTwitter from './shareOnTwitter.js';

const button1 = document.getElementById('answer1'),
    button2 = document.getElementById('answer2'),
    button3 = document.getElementById('answer3'),
    button4 = document.getElementById('answer4'),
    twitterShare = document.getElementById('twitter-share');


// Game info - progress and score
let progress = 1, playerScore = 0;


let gameProgressText = document.getElementById('gameProgress');
gameProgressText.innerHTML = `${progress} / 10`;

let playerScoreText = document.getElementById('points');
playerScoreText.innerHTML = `Your Points - ${playerScore}`;


export function incrementGameProgress() {
    progress += 1;
    gameProgressText.innerHTML = `${progress} / 10`;
}

function incrementPlayerScore() {
    playerScore += 10;
    playerScoreText.innerHTML = `Your Points - ${playerScore}`;
}


const quiz_container = document.getElementById('quiz-container'), 
    question_text = document.getElementById('question-text');

 
function endGame() { 
    quiz_container.style.visibility = 'hidden';
    question_text.style.visibility = 'hidden';
    document.getElementById('endgame-div').style.visibility = 'visible';
    document.getElementById('play-again-button').style.visibility = 'visible';
    document.getElementById('player-info').innerHTML = `Your score is - ${playerScore}!
    Want to play again?`;
    twitterShare.style.visibility = 'visible';
}


export default function isRightOrNot(question) {
    button1.onclick = () => {
        if(button1.firstChild.data === question.correct_answer) {
            incrementPlayerScore();
            buttonStyling.styleRightAnswer(button1);
            console.log("That's right!");
        } else {
            buttonStyling.styleWrongAnswer(button1);
            console.log("Wrong answer buddy"); 
        }
    }

    button2.onclick = () => {
        if(button2.firstChild.data === question.correct_answer) {
            incrementPlayerScore();
            buttonStyling.styleRightAnswer(button2);
            console.log("That's right!");
        } else {
            buttonStyling.styleWrongAnswer(button2);
            console.log("Wrong answer buddy"); 
        }
    }

    button3.onclick = () => {
        if(button3.firstChild.data === question.correct_answer) {
            incrementPlayerScore();
            buttonStyling.styleRightAnswer(button3);
            console.log("That's right!");
        } else {
            buttonStyling.styleWrongAnswer(button3);
            console.log("Wrong answer buddy"); 
        }
    }

    button4.onclick = () => {
        if(button4.firstChild.data === question.correct_answer) {
            incrementPlayerScore();
            buttonStyling.styleRightAnswer(button4);
            console.log("That's right!");
        } else {
            buttonStyling.styleWrongAnswer(button4);
            console.log("Wrong answer buddy"); 
        }
    }

    if(progress > 10) {
        endGame();
    }
}

document.getElementById('next_question').addEventListener('click', incrementGameProgress);

twitterShare.addEventListener('click', () => {
    shareOnTwitter(playerScore);
});

// Game reset button
document.getElementById('play-again-button').addEventListener('click', () => {
    styleHTML();
    progress = 1;
    playerScore = 0;
    gameProgressText.innerHTML = `${progress} / 10`;
    playerScoreText.innerHTML = `Your Points - ${playerScore}`;
    generateQuestion();
});