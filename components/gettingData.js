import styleHTML from './showupQuiz.js';
import * as buttonStyling from './buttonStyle.js';
import isRightOrNot from './handleAnswers.js';
import incrementGameProgress from './handleAnswers.js';


const questCategory = document.getElementById('question-category'),
    button1 = document.getElementById('answer1'),
    button2 = document.getElementById('answer2'),
    button3 = document.getElementById('answer3'),
    button4 = document.getElementById('answer4'),
    question_text = document.getElementById('question-text');


// Fetching categories from the API to put in the <select /> tag
export default function categories() {
    const URL = 'https://opentdb.com/api_category.php';
    let xhr = new XMLHttpRequest();
    xhr.open('GET', URL, true);
    xhr.onload = function() {
        if(this.status == 200) {
            let response = JSON.parse(this.responseText).trivia_categories;
            console.log(response);

            let options;
            for(let i in response) {
                options += `<option class='categories' value=${response[i].id}>${response[i].name}</option>`;
                questCategory.value = options.value;
            }
            questCategory.innerHTML = options;
        }
    }
    xhr.send();

    
    let generateQuestion = () => {
        let categoryID = questCategory.value;
        let difficulty = document.getElementById('selectDiff').value;
        const URL = `https://opentdb.com/api.php?amount=1&category=${categoryID}&difficulty=${difficulty}&type=multiple`;
      
        let secondCall = new XMLHttpRequest();
        secondCall.open('GET', URL, true);
        
        secondCall.onload = function() {
            styleHTML();
            console.log(difficulty);

            let response = JSON.parse(this.responseText).results;
            console.log(response);
            let getRandomQuestion = (responseArr) => {
            let randomNum = Math.floor(Math.random() * responseArr.length);
            let random_question = responseArr[randomNum];

            console.log(random_question);
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
        secondCall.send();
    }
    document.getElementById('click').addEventListener('click', generateQuestion);
    
    document.getElementById('next_question').addEventListener('click', () => {
        incrementGameProgress();
        generateQuestion();
    });
}
    
// Non repeating random numbers
const secondRandomNumbers = (range, outputCount) => {
    let arr = []
    for (let i = 0; i <= range; i++) {
      arr.push(i);
    }
  
    let result = [];
  
    for (let i = 0; i <= outputCount; i++) {
      const random = Math.floor(Math.random() * (range - i));
      result.push(arr[random]);
      arr[random] = arr[range - i];
    }  
    return result;
}
