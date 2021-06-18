
const buttonsArr = [
    document.getElementById('answer1'),
    document.getElementById('answer2'),
    document.getElementById('answer3'),
    document.getElementById('answer4')
];

for(let i = 0; i < buttonsArr.length; i++) {
    buttonsArr[i].onmouseover = () => {
        buttonsArr[i].style.opacity = '1'; 
    }

    buttonsArr[i].onmouseleave = () => {
        buttonsArr[i].style.opacity = '0.6'; 
    }
}

const enableButtons = () => buttonsArr.forEach(button => button.disabled = false);
const disableButtons = () => buttonsArr.forEach(button => button.disabled = true);


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

export function styleRightAnswer(button) {
    disableButtons();
    fullOpacity(button);
    rightAnswer(button);
}

export function styleWrongAnswer(button) {
    disableButtons();
    fullOpacity(button);
    wrongAnswer(button);
}

export function unstyleAnswer(button) {
    enableButtons();
    halfOpacity(button);
    unstyle(button);
}
