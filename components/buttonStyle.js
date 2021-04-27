const button1 = document.getElementById('answer1');
const button2 = document.getElementById('answer2');
const button3 = document.getElementById('answer3');
const button4 = document.getElementById('answer4');


export function styleRightAnswerForButton1() {
    button1.disabled = true;
    button1.style.backgroundColor = '#1f913d';
    button1.style.color = 'black';
    button1.style.border = 'none';
    button1.style.padding = '10px';
    button1.style.borderRadius = '10px';
}

export function styleWrongAnswerForButton1() {
    button1.disabled = true;
    button1.style.backgroundColor = '#b80f17';
    button1.style.color = 'white';
    button1.style.border = 'none';
    button1.style.padding = '10px';
    button1.style.borderRadius = '10px';
}

export function unstyleRightAnswerForButton1() {
    button1.disabled = false;
    button1.style.backgroundColor = '#d7d9d7';
    button1.style.color = 'black';
    button1.style.border = 'white';
    button1.style.padding = '10px';
    button1.style.borderRadius = '10px';
}


// Button 2
export function styleRightAnswerForButton2() {
    button2.disabled = true;
    button2.style.backgroundColor = '#1f913d';
    button2.style.color = 'black';
    button2.style.border = 'none';
    button2.style.padding = '10px';
    button2.style.borderRadius = '10px';
}

export function styleWrongAnswerForButton2() {
    button2.disabled = true;
    button2.style.backgroundColor = '#b80f17';
    button1.style.color = 'white';
    button2.style.border = 'none';
    button2.style.padding = '10px';
    button2.style.borderRadius = '10px';
}

export function unstyleRightAnswerForButton2() {
    button2.disabled = false;
    button2.style.backgroundColor = '#d7d9d7';
    button2.style.border = 'white';
    button2.style.padding = '10px';
    button2.style.borderRadius = '10px';
}


// Button 3
export function styleRightAnswerForButton3() {
    button3.disabled = true;
    button3.style.backgroundColor = '#1f913d';
    button3.style.color = 'black';
    button3.style.border = 'none';
    button3.style.padding = '10px';
    button3.style.borderRadius = '10px';
}

export function styleWrongAnswerForButton3() {
    button3.disabled = true;
    button3.style.backgroundColor = '#b80f17';
    button1.style.color = 'white';
    button3.style.border = 'none';
    button3.style.padding = '10px';
    button3.style.borderRadius = '10px';
}

export function unstyleRightAnswerForButton3() {
    button3.disabled = false;
    button3.style.backgroundColor = '#d7d9d7';
    button3.style.border = 'white';
    button3.style.padding = '10px';
    button3.style.borderRadius = '10px';
}


// Button 4
export function styleRightAnswerForButton4() {
    button4.disabled = true;
    button4.style.backgroundColor = '#1f913d';
    button4.style.color = 'black';
    button4.style.border = 'none';
    button4.style.padding = '10px';
    button4.style.borderRadius = '10px';
}

export function styleWrongAnswerForButton4() {
    button4.disabled = true;
    button4.style.backgroundColor = '#b80f17';
    button1.style.color = 'white';
    button4.style.border = 'none';
    button4.style.padding = '10px';
    button4.style.borderRadius = '10px';
}

export function unstyleRightAnswerForButton4() {
    button4.disabled = false;
    button4.style.backgroundColor = '#d7d9d7';
    button4.style.border = 'white';
    button4.style.padding = '10px';
    button4.style.borderRadius = '10px';
}
