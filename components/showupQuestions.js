import isRightOrNot from './handleAnswers.js';

const quiz_container = document.getElementById('quiz-container');
const input_container = document.getElementById('input-container');
let question_text = document.getElementById('question-text');


function endGame() {
    quiz_container.style.visibility = 'hidden';
    question_text.style.visibility = 'hidden';
    document.getElementById('endgame-div').style.visibility = 'visible';
    document.getElementById('play-again-button').style.visibility = 'visible';
    document.getElementById('player-info').innerHTML = `Your score is - ${isRightOrNot.playerScore}!
Want to play again?`;
}

export default function styleHTML() {
    quiz_container.style.visibility = 'visible';
    question_text.style.visibility = 'visible';
    input_container.style.visibility = 'hidden';
    document.getElementById('endgame-div').style.visibility = 'hidden';
    document.getElementById('play-again-button').style.visibility = 'hidden';
    document.getElementById('click').style.visibility = 'hidden';
    document.getElementById('hello_text').style.visibility = 'hidden';

    if(isRightOrNot.progress >= 10) {
        endGame();
    }
}
