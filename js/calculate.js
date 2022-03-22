// function expression
/* export const calculateMath = () => {

    const a = prompt();
    const b = prompt();

    //console.log(`calculate ${a} and ${b}`);
    console.log(a - b);
    console.log(a === b);

    if(a > b) {
        console.log('a is bigger than b');
        alert('a is bigger than b');
    } else if (a === b) {
        console.log('a the same as b');
        alert('a the same as b');
    } else {
        console.log('sorry no match');
        alert('sorry no match');
    };

    return true;
} */

export function calculate() {
    const number1 = document.querySelector('#value1');
    const number2 = document.getElementById('value2');
    const operation = document.getElementsByName('operation');
    const startButton = document.getElementById('calculationButton');
    const resultBox = document.getElementById('result');

    startButton.addEventListener('click', () => {

        if(operation[0].checked === true) {
            resultBox.value = parseInt(number1.value) + parseInt(number2.value);
        };
        if(operation[1].checked === true) {
            resultBox.value = number1.value - number2.value;
        };
        if(operation[2].checked === true) {
            resultBox.value = number1.value * number2.value;
        };
        if(operation[3].checked === true) {
            resultBox.value = number1.value / number2.value;
        };
    });
}
