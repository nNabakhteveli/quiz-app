const quiz_container = document.getElementById('quiz-container'),
    input_container = document.getElementById('input-container'),
    question_text = document.getElementById('question-text');


export default function showupQuizContainer() {
    // Make quiz appear
    quiz_container.style.visibility = 'visible';
    question_text.style.visibility = 'visible';

    // Hide first page after starting the game
    document.getElementById('twitter-share').style.visibility = 'hidden';
    document.getElementById('credit').style.visibility = 'hidden';
    input_container.style.visibility = 'hidden';
    document.getElementById('endgame-div').style.visibility = 'hidden';
    document.getElementById('play-again-button').style.visibility = 'hidden';
    document.getElementById('click').style.visibility = 'hidden';
    document.getElementById('hello_text').style.visibility = 'hidden';
}
