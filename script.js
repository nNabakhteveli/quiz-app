let questCategory = document.getElementById('question-category');
// Fetching categories from server to put in the <select /> tag
function categories() {
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
    
    // arr.push(3);



    if(arr.length == 4){
        arr.pop();
    }

    return arr;
}


do_not_repeat_number();

// GAME END <---------------------------------------------------------------------
function endGame() {
    console.log('Game ended!');
}


const quiz_container = document.getElementById('quiz-container');
const input_container = document.getElementById('input-container');
let question_text = document.getElementById('question-text');
let button1 = document.getElementById('answer1');
let button2 = document.getElementById('answer2');
let button3 = document.getElementById('answer3');
let button4 = document.getElementById('answer4');


let progress = 0;
let playerPoint = 0;
function styleHTML() {
    quiz_container.style.visibility = 'visible';
    question_text.style.visibility = 'visible';
    input_container.style.visibility = 'hidden';
    document.getElementById('click').style.visibility = 'hidden';
    document.getElementById('hello_text').style.visibility = 'hidden';

    document.getElementById('gameProgress').innerHTML = `${progress} / 10`;

    if(progress === 10) {
        endGame();
    }

    document.getElementById('points').innerHTML = `Your Points - ${playerPoint}`;
}
    
// Styling the button. This is the worst way I could do, but it's okay for now

// Button 1
function styleRightAnswerForButton1() {
    button1.disabled = true;
    button1.style.backgroundColor = '#1f913d';
    button1.style.color = 'black';
    button1.style.border = 'none';
    button1.style.padding = '10px';
    button1.style.borderRadius = '10px';
}

function styleWrongAnswerForButton1() {
    button1.disabled = true;
    button1.style.backgroundColor = '#b80f17';
    button1.style.color = 'white';
    button1.style.border = 'none';
    button1.style.padding = '10px';
    button1.style.borderRadius = '10px';
}

function unstyleRightAnswerForButton1() {
    button1.disabled = false;
    button1.style.backgroundColor = '#d7d9d7';
    button1.style.color = 'black';
    button1.style.border = 'white';
    button1.style.padding = '10px';
    button1.style.borderRadius = '10px';
}


// Button 2
function styleRightAnswerForButton2() {
    button2.disabled = true;
    button2.style.backgroundColor = '#1f913d';
    button2.style.color = 'black';
    button2.style.border = 'none';
    button2.style.padding = '10px';
    button2.style.borderRadius = '10px';
}

function styleWrongAnswerForButton2() {
    button2.disabled = true;
    button2.style.backgroundColor = '#b80f17';
    button1.style.color = 'white';
    button2.style.border = 'none';
    button2.style.padding = '10px';
    button2.style.borderRadius = '10px';
}

function unstyleRightAnswerForButton2() {
    button2.disabled = false;
    button2.style.backgroundColor = '#d7d9d7';
    button2.style.border = 'white';
    button2.style.padding = '10px';
    button2.style.borderRadius = '10px';
}


// Button 3
function styleRightAnswerForButton3() {
    button3.disabled = true;
    button3.style.backgroundColor = '#1f913d';
    button3.style.color = 'black';
    button3.style.border = 'none';
    button3.style.padding = '10px';
    button3.style.borderRadius = '10px';
}

function styleWrongAnswerForButton3() {
    button3.disabled = true;
    button3.style.backgroundColor = '#b80f17';
    button1.style.color = 'white';
    button3.style.border = 'none';
    button3.style.padding = '10px';
    button3.style.borderRadius = '10px';
}

function unstyleRightAnswerForButton3() {
    button3.disabled = false;
    button3.style.backgroundColor = '#d7d9d7';
    button3.style.border = 'white';
    button3.style.padding = '10px';
    button3.style.borderRadius = '10px';
}


// Button 4
function styleRightAnswerForButton4() {
    button4.disabled = true;
    button4.style.backgroundColor = '#1f913d';
    button4.style.color = 'black';
    button4.style.border = 'none';
    button4.style.padding = '10px';
    button4.style.borderRadius = '10px';
}

function styleWrongAnswerForButton4() {
    button4.disabled = true;
    button4.style.backgroundColor = '#b80f17';
    button1.style.color = 'white';
    button4.style.border = 'none';
    button4.style.padding = '10px';
    button4.style.borderRadius = '10px';
}

function unstyleRightAnswerForButton4() {
    button4.disabled = false;
    button4.style.backgroundColor = '#d7d9d7';
    button4.style.border = 'white';
    button4.style.padding = '10px';
    button4.style.borderRadius = '10px';
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

            let buttonsDIV = document.getElementById('answer-buttons-div');

            let isRightOrNot = () => {
                button1.onclick = () => {
                    if(button1.firstChild.data === random_question.correct_answer) {
                        playerPoint += 10;
                        styleRightAnswerForButton1();
                        console.log("That's right");
                    } else {
                        styleWrongAnswerForButton1();
                        console.log("Wrong answer buddy"); 
                    }
                    progress += 1;
                }

                button2.onclick = () => {
                    if(button2.firstChild.data === random_question.correct_answer) {
                        playerPoint += 10;
                        styleRightAnswerForButton2();
                        console.log("That's right");
                    } else {
                        styleWrongAnswerForButton2();
                        console.log("Wrong answer buddy"); 
                    }
                    progress += 1;
                }
            }

            isRightOrNot();
        }
        if(this.status == 200) {
           let response = JSON.parse(this.responseText).results;
           getRandomQuestion(response);
        }
        unstyleRightAnswerForButton1();
        unstyleRightAnswerForButton2();
        unstyleRightAnswerForButton3();
        unstyleRightAnswerForButton4();
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