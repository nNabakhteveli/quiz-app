import * as styleButton from './buttonStyle.js';
import showupQuizContainer from './showupQuiz.js';
import isRightOrNot from './handleAnswers.js';

getCategories();

// Non repeating random numbers
const nonRepeatingRandomNumbers = (range, outputCount) => {
    let arr = [], result = [];
    for (let i = 0; i <= range; i++) {
        arr.push(i);
    }
    
    for (let i = 0; i <= outputCount; i++) {
      const random = Math.floor(Math.random() * (range - i));
      result.push(arr[random]);
      arr[random] = arr[range - i];
    }  
    return result;
}

const questCategory = document.getElementById('question-category'),
    button1 = document.getElementById('answer1'),
    button2 = document.getElementById('answer2'),
    button3 = document.getElementById('answer3'),
    button4 = document.getElementById('answer4'),
    question_text = document.getElementById('question-text');

const buttonsArr = [button1, button2, button3, button4];

// Fetching categories from the API to put in the <select /> tag
export default function getCategories() {
    fetch('https://opentdb.com/api_category.php')
    .then(response => response.json())
    .then(data => {
        const response = data.trivia_categories;
        let options;
    
        for(let i in response) {
            options += `<option class='categories' value=${response[i].id}>${response[i].name}</option>`;
            questCategory.value = options.value;
        }
        questCategory.innerHTML = options;
    });
}

// Fetching custom questions from the API based on user's input
export function generateQuestion() {
    let categoryID = questCategory.value;
    let difficulty = document.getElementById('selectDiff').value;

    fetch(`https://opentdb.com/api.php?amount=1&category=${categoryID}&difficulty=${difficulty}&type=multiple`)
    .then(response => response.json())
    .then(data => {
        showupQuizContainer();
        const response = data.results;

        const getRandomQuestion = (responseArr) => {
            let random_question = responseArr[Math.floor(Math.random() * responseArr.length)];

            console.log(random_question);
            question_text.innerHTML = random_question.question;

            /* Each question comes with 4 answer options to choose from the API call. 
               For now they're sorted one by one in an array but
               it will be generated randomly. */  
            let answers = [
                random_question.correct_answer, 
                random_question.incorrect_answers[0],
                random_question.incorrect_answers[1],
                random_question.incorrect_answers[2] ], randomAnswers = [];


            randomAnswers.push(nonRepeatingRandomNumbers(3, 3));
            let randomAnswersNumber = randomAnswers[0];

            // Assigning answers to the buttons
            for(let i = 0; i < buttonsArr.length; i++) { 
                buttonsArr[i].textContent = answers[randomAnswersNumber[i]]; 
            }

            isRightOrNot(random_question);
        }
        getRandomQuestion(response);  
        buttonsArr.forEach(button => styleButton.unstyleAnswer(button));
    })
};


document.getElementById('click').addEventListener('click', generateQuestion);
document.getElementById('next_question').addEventListener('click', generateQuestion);
