const URL = 'https://opentdb.com/api.php?amount=10';


document.getElementById('button').addEventListener('click', loadQuestion);


function loadQuestion() {
    let xhr = new XMLHttpRequest();
    
    xhr.open('GET', URL, true);
    
    xhr.onload = function () {
        if(this.status == 200) {
            let response = JSON.parse(this.responseText);
            console.log(response);
        }
    }

    xhr.send();
}


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

                for(i in itemsArray) {
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


function loadQuestions() {
    const xhr = new XMLHttpRequest();
    const URL = 'https://opentdb.com/api.php?amount=10';
    xhr.open('GET', URL, true);

    xhr.onload = function () {
        let getRandomQuestion = (responseArr) => {
            let randomNum = Math.floor(Math.random() * responseArr.length - 1);
            console.log(responseArr[randomNum]);
        }

        if(this.status == 200) {
           let response = JSON.parse(this.responseText).results;
            getRandomQuestion(response);

           
        }
    }
    xhr.send();
}


loadQuestions();


// document.getElementById('getquestionsButton').addEventListener('click', loadQuestion);