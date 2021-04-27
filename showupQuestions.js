const quiz_container = document.getElementById('quiz-container');
const input_container = document.getElementById('input-container');
let question_text = document.getElementById('question-text');

let progress = 0;
let playerScore = 0;
export default function styleHTML() {
    quiz_container.style.visibility = 'visible';
    question_text.style.visibility = 'visible';
    input_container.style.visibility = 'hidden';
    document.getElementById('endgame-div').style.visibility = 'hidden';
    document.getElementById('play-again-button').style.visibility = 'hidden';
    document.getElementById('click').style.visibility = 'hidden';
    document.getElementById('hello_text').style.visibility = 'hidden';

    document.getElementById('gameProgress').innerHTML = `${progress} / 10`;
    document.getElementById('points').innerHTML = `Your Points - ${playerScore}`;

    if(progress >= 10) {
        endGame();
    }

}
