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


function categories() {

    let get_number_of_questions = (categoryID) => {
        const URL = `https://opentdb.com/api_count.php?category=${categoryID}`;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', URL, true);

        xhr.onload = function() {
            if(this.status == 200) {
                let response = JSON.parse(this.responseText);

                if(categoryID === response.category_id) {
                    return this.response.total_question_count;
                }
            }
        }
        xhr.send();
    }




    const URL = 'https://opentdb.com/api_category.php';
    let xhr = new XMLHttpRequest();

    xhr.open('GET', URL, true);

    let difficulty = document.getElementById('difficulty');
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
                    options += `<option>${itemsArray[i].name} - Total ${get_number_of_questions(itemsArray[i].id)} questions</option>`;
                }
                console.log(itemsArray);
            }
            difficulty.innerHTML = options;
        }
    }
    xhr.send();
}

categories();