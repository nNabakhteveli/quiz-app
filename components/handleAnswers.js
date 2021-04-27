import * as buttonStyling from './buttonStyle.js';

const button1 = document.getElementById('answer1');
const button2 = document.getElementById('answer2');
const button3 = document.getElementById('answer3');
const button4 = document.getElementById('answer4');


export default function isRightOrNot(question) {
    let progress = 0;
    let playerScore = 0;

    button1.onclick = () => {
        if(button1.firstChild.data === question.correct_answer) {
            progress += 1;
            playerScore += 10;
            buttonStyling.styleRightAnswerForButton1();
            console.log("That's right!");
        } else {
            buttonStyling.styleWrongAnswerForButton1();
            console.log("Wrong answer buddy"); 
        }
    }

    button2.onclick = () => {
        if(button2.firstChild.data === question.correct_answer) {
            playerScore += 10;
            buttonStyling.styleRightAnswerForButton2();
            console.log("That's right!");
        } else {
            buttonStyling.styleWrongAnswerForButton2();
            console.log("Wrong answer buddy"); 
        }
        progress += 1;
    }

    button3.onclick = () => {
        if(button3.firstChild.data === question.correct_answer) {
            playerScore += 10;
            buttonStyling.styleRightAnswerForButton3();
            console.log("That's right!");
        } else {
            buttonStyling.styleWrongAnswerForButton3();
            console.log("Wrong answer buddy"); 
        }
        progress += 1;
    }

    button4.onclick = () => {
        if(button4.firstChild.data === question.correct_answer) {
            playerScore += 10;
            buttonStyling.styleRightAnswerForButton4();
            console.log("That's right!");
        } else {
            buttonStyling.styleWrongAnswerForButton4();
            console.log("Wrong answer buddy"); 
        }
        progress += 1;
    }

    document.getElementById('gameProgress').innerHTML = `${progress} / 10`;
    document.getElementById('points').innerHTML = `Your Points - ${playerScore}`;
}