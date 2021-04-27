import * as buttonStyling from './buttonStyle.js';
import categories from './gettingData.js';
import isRightOrNot from './handleAnswers.js';
import styleHTML from './showupQuestions.js';

categories();


// For random answers
let do_not_repeat_number = () => {
    // Putting all 3 numbers in the array
    let arr = [];    
    for(let i = 0; i < 3; i++) {
        let randomNumber = Math.floor(Math.random() * 3);
        arr.push(randomNumber);    
    }
    
    // If the first and second, or third element in an array are equal, that element will be removed 
    for(let j = 0; j < arr.length; j++) {
        if(arr[j] === arr[j + 1] || arr[j] === arr[j + 2]) {
            let repeatingNumber = arr.indexOf(arr[j]);
            arr.splice(repeatingNumber, 1);
        }
    }

    if (arr[0] + arr[1] == 1) {
        arr.push(2);
    } else if(arr[0] + arr[1] == 2) {
        arr.push(1);
    } else if(arr[0] + arr[1] == 3) {
        arr.push(0);
    }
    
    if (arr.length == 4){
        arr.pop();
    }

    return arr;

 // Calculating number that's missing in the array
    /* Logic behind this:
        Let's say, we have an array - [a, b];
        There are three possible ways that the number can be modified in the array,
        because latest for loop removes one amongst the number, if there are identical ones.
        
        if a = 0, b = 1
        [0 + 1] = 1, so it's missing the number 2

        if a = 1, b = 2
        [1 + 2] = 3, so it's missing the number 0

        if a = 2, b = 0
        [2 + 0] = 2, so it's missing the number 1
    
    */ 
}


do_not_repeat_number();


const quiz_container = document.getElementById('quiz-container');
let question_text = document.getElementById('question-text');
let button1 = document.getElementById('answer1');
let button2 = document.getElementById('answer2');
let button3 = document.getElementById('answer3');
let button4 = document.getElementById('answer4');


function endGame() {
    quiz_container.style.visibility = 'hidden';
    question_text.style.visibility = 'hidden';
    document.getElementById('endgame-div').style.visibility = 'visible';
    document.getElementById('play-again-button').style.visibility = 'visible';
    document.getElementById('player-info').innerHTML = `Your score is - ${playerScore}!
Want to play again?`;
}


// function playAgain()

function loadQuestions() {
    styleHTML();
    const xhr = new XMLHttpRequest();
    const URL = 'https://opentdb.com/api.php?amount=10&type=multiple';
    xhr.open('GET', URL, true);

    xhr.onload = function () {
        let getRandomQuestion = (responseArr) => {
            let randomNum = Math.floor(Math.random() * responseArr.length);
            let random_question = responseArr[randomNum];

            question_text.innerHTML = random_question.question;

            let randomPosForIncorrectAnswers = do_not_repeat_number();

            let answers = [
                random_question.correct_answer, 
                random_question.incorrect_answers[randomPosForIncorrectAnswers[0]],
                random_question.incorrect_answers[randomPosForIncorrectAnswers[1]],
                random_question.incorrect_answers[randomPosForIncorrectAnswers[2]]
            ];


            // let randomAnswer = do_not_repeat_number();
            button1.innerHTML = answers[randomPosForIncorrectAnswers[0]];
            button2.innerHTML = answers[randomPosForIncorrectAnswers[1]];
            button3.innerHTML = answers[randomPosForIncorrectAnswers[2]];
            button4.innerHTML = answers[randomPosForIncorrectAnswers[3]];
            
            console.log(randomPosForIncorrectAnswers[0]);
            console.log(randomPosForIncorrectAnswers[1]);
            console.log(randomPosForIncorrectAnswers[2]);
            console.log(random_question);


            isRightOrNot(random_question);
        }
        if(this.status == 200) {
           let response = JSON.parse(this.responseText).results;
           getRandomQuestion(response);
        }

        /* After user will click on the button, button will become green if the answer is right, 
        and red if the answer is wrong. Then, when the new question will be generated, buttons will need to
        return to normal colors, so this functions below will handle that */

        buttonStyling.unstyleRightAnswerForButton1();
        buttonStyling.unstyleRightAnswerForButton2();
        buttonStyling.unstyleRightAnswerForButton3();
        buttonStyling.unstyleRightAnswerForButton4();
    }
    xhr.send();
}

document.getElementById('click').addEventListener('click', loadQuestions);
document.getElementById('next_question').addEventListener('click', loadQuestions);

document.getElementById('play-again-button').addEventListener('click', () => {
    styleHTML();
    loadQuestions();
});



    // Modifying custom URL. Will finish later 
   // let get_number_of_questions = (categoryID) => {
    //     const URL = `https://opentdb.com/api_count.php?category=${categoryID}`;
    //     let xhr = new XMLHttpRequest();
    //     xhr.open('GET', URL, true);

    //     xhr.onload = function() {
    //         if(this.status == 200) {
    //             let response = JSON.parse(this.responseText);

    //             let searchID = () => {
    //                 let arr = [];
    //                 for(let i = 0; i < response.length; i++) {
    //                     arr.push(response[i]);
    //                 }
    //             }

    //             if(categoryID === searchID) {
    //                 return this.response.total_question_count;
    //             }
    //         }
    //     }
    //     xhr.send();
    // }