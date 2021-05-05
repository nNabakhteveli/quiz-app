const button1 = document.getElementById('answer1'),
    button2 = document.getElementById('answer2'),
    button3 = document.getElementById('answer3'),
    button4 = document.getElementById('answer4');


const buttonsArr = [button1, button2, button3, button4];

for(let i = 0; i < buttonsArr.length; i++) {
    buttonsArr[i].onmouseover = function() {
        buttonsArr[i].style.opacity = '1'; 
    }
}

for(let i = 0; i < buttonsArr.length; i++) {
    buttonsArr[i].onmouseleave = function() {
        buttonsArr[i].style.opacity = '0.6'; 
    }
}


function disableButtons() {
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    button4.disabled = true;
}

function enableButtons() {
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;
}

function fullOpacity(button) {
    button.style.opacity = '1';
}

function halfOpacity(button) {
    button.style.opacity = '0.6';
}

function rightAnswer(button) {
    button.style.backgroundColor = '#1f913d';
    button.style.color = 'black';
    button.style.border = 'none';
    button.style.padding = '10px';
    button.style.borderRadius = '10px';
}

function wrongAnswer(button) {
    button.style.backgroundColor = '#b80f17';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.padding = '10px';
    button.style.borderRadius = '10px';
}

function unstyle(button) {
    button.style.backgroundColor = '#d7d9d7';
    button.style.color = 'black';
    button.style.border = 'white';
    button.style.padding = '10px';
    button.style.borderRadius = '10px';
}


export function styleRightAnswerForButton1() {
    disableButtons();
    fullOpacity(button1);
    rightAnswer(button1);
}

export function styleWrongAnswerForButton1() {
    disableButtons();
    fullOpacity(button1);
    wrongAnswer(button1);
}

export function unstyleRightAnswerForButton1() {
    enableButtons();
    halfOpacity(button1);
    unstyle(button1);
}


// Button 2
export function styleRightAnswerForButton2() {
    disableButtons();
    fullOpacity(button2);
    rightAnswer(button2);
}

export function styleWrongAnswerForButton2() {
    disableButtons();
    fullOpacity(button2);
    wrongAnswer(button2);
}

export function unstyleRightAnswerForButton2() {
    enableButtons();
    halfOpacity(button2);
    unstyle(button2);
}


// Button 3
export function styleRightAnswerForButton3() {
    disableButtons();
    fullOpacity(button3);
    rightAnswer(button3);
}

export function styleWrongAnswerForButton3() {
    disableButtons();
    fullOpacity(button3);
    wrongAnswer(button3);
}

export function unstyleRightAnswerForButton3() {
    enableButtons();
    halfOpacity(button3);
    unstyle(button3);
}


// Button 4
export function styleRightAnswerForButton4() {
    disableButtons();
    fullOpacity(button4);
    rightAnswer(button4);
}

export function styleWrongAnswerForButton4() {
    disableButtons();
    fullOpacity(button4);
    wrongAnswer(button4);
}

export function unstyleRightAnswerForButton4() {
    enableButtons();
    halfOpacity(button4);
    unstyle(button4);
}
