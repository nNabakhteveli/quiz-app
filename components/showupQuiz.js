
const quiz_container = document.getElementById('quiz-container');
const input_container = document.getElementById('input-container');
const question_text = document.getElementById('question-text');


export default function styleHTML() {
    quiz_container.style.visibility = 'visible';
    question_text.style.visibility = 'visible';
    input_container.style.visibility = 'hidden';
    document.getElementById('endgame-div').style.visibility = 'hidden';
    document.getElementById('play-again-button').style.visibility = 'hidden';
    document.getElementById('click').style.visibility = 'hidden';
    document.getElementById('hello_text').style.visibility = 'hidden';
}
