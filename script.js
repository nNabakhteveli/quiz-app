let questCategory = document.getElementById('question-category');

function categories() {

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




    const URL = 'https://opentdb.com/api_category.php';
    let xhr = new XMLHttpRequest();

    xhr.open('GET', URL, true);


    xhr.onload = function() {
        if(this.status == 200) {
            let choose_difficulty = JSON.parse(this.responseText);
            let arr = [];
            arr.push(choose_difficulty);
            // console.log(arr);
            

            let options;
            for(let item = 0; item < arr.length; item++) {
                let itemsArray = arr[item].trivia_categories;

                options += '<option value="selected value" disabled default selected value>Choose Category</option>';
                for(let i in itemsArray) {
                    options += `<option value=${itemsArray[i].name} id_of_category='${itemsArray[i].id}'>${itemsArray[i].name}</option>`;
                }
                // console.log(itemsArray);
            }
            questCategory.innerHTML = options;
        }
    }
    xhr.send();
}

categories();



let do_not_repeat_number = () => {
    let arr = [];    
    for(let i = 0; i < 3; i++) {
        let randomNumber = Math.floor(Math.random() * 3);
        arr.push(randomNumber);    
    }
    
    for(let j = 0; j < arr.length; j++) {
        if(arr[j] === arr[j + 1] || arr[j] === arr[j + 2]) {
            let repeatingNumber = arr.indexOf(arr[j]);
            arr.splice(repeatingNumber, 1);
        }
    }
    
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


    if(arr[0] + arr[1] == 1) {
        arr.push(2);
    } else if(arr[0] + arr[1] == 2) {
        arr.push(1);
    } else if(arr[0] + arr[1] == 3) {
        arr.push(0);
    }

    if(arr.length == 4){
        arr.pop();
    }

    return arr;
}


do_not_repeat_number();


const quiz_container = document.getElementById('quiz-container');
const input_container = document.getElementById('input-container');
let question_text = document.getElementById('question-text');
let button1 = document.getElementById('answer1');
let button2 = document.getElementById('answer2');
let button3 = document.getElementById('answer3');
let button4 = document.getElementById('answer4');


let point = 0;
function styleHTML() {
    quiz_container.style.visibility = 'visible';
    question_text.style.visibility = 'visible';
    input_container.style.visibility = 'hidden';
    document.getElementById('click').style.visibility = 'hidden';
    document.getElementById('hello_text').style.visibility = 'hidden';

    let points = document.getElementById('points');
    points.innerHTML = `${point} / 10`;
}

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

            // Correct answer
            button1.innerHTML = random_question.correct_answer;

            // Incorrect answers
            let randomPosForIncorrectAnswers = do_not_repeat_number();
            button2.innerHTML = random_question.incorrect_answers[randomPosForIncorrectAnswers[0]];
            button3.innerHTML = random_question.incorrect_answers[randomPosForIncorrectAnswers[1]];
            button4.innerHTML = random_question.incorrect_answers[randomPosForIncorrectAnswers[2]];
            console.log(random_question);
        }

        if(this.status == 200) {
           let response = JSON.parse(this.responseText).results;
           getRandomQuestion(response);
        }
    }
    xhr.send();
}

document.getElementById('click').addEventListener('click', loadQuestions);