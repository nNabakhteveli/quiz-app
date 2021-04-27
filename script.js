import * as buttonStyling from './components/buttonStyle.js';
import categories from './components/gettingData.js';
import isRightOrNot from './components/handleAnswers.js';
import styleHTML from './components/showupQuiz.js';


categories();


// This only works for 3 number array. I needed 4 number, so I made new function for that but I didn't deleted this just in case
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
    
    // if (arr.length == 5){
    //     arr.pop();
    // }

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


const secondRandomNumbers = (range, outputCount) => {
    let arr = []
    for (let i = 0; i <= range; i++) {
      arr.push(i)
    }
  
    let result = [];
  
    for (let i = 0; i <= outputCount; i++) {
      const random = Math.floor(Math.random() * (range - i));
      result.push(arr[random]);
      arr[random] = arr[range - i];
    }  
    return result;
}


let question_text = document.getElementById('question-text');
let button1 = document.getElementById('answer1');
let button2 = document.getElementById('answer2');
let button3 = document.getElementById('answer3');
let button4 = document.getElementById('answer4');


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

            let answers = [
                random_question.correct_answer, 
                random_question.incorrect_answers[0],
                random_question.incorrect_answers[1],
                random_question.incorrect_answers[2]
            ];

            let randomAnswers = [];
            randomAnswers.push(secondRandomNumbers(3, 3));
            let randomAnswersNumber = randomAnswers[0];

            button1.textContent = answers[randomAnswersNumber[0]];
            button2.textContent = answers[randomAnswersNumber[1]];
            button3.textContent = answers[randomAnswersNumber[2]];
            button4.textContent = answers[randomAnswersNumber[3]];


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