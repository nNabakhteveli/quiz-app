const questCategory = document.getElementById('question-category');


// Fetching categories from the API to put in the <select /> tag
export default function categories() {
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