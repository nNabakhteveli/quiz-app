import categories from './components/gettingData.js';

categories();

// This only works for 3 number array. I needed 4 number, so I made new function for that but I didn't deleted this, for just in case
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