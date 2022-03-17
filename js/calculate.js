// function expression
export const calculateMath = () => {

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
}


