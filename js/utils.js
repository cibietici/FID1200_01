//console.log('utils');
export const value = 'utils';


//How initialize variables
/* var age;

console.log(age);

age = 23; */

let url;
console.log(url);
url = 'finn.no';
console.log(url);

const totalProducts = 23.989; 


calculateAge();

// functions declaration
function calculateAge() {
    let target = '_blank'; // lives only inside the function
    console.log('calculate function ' + url + ' ' + target);
    return true;
};

const calculateValue = (a, b) => console.log(a + b);

function calculateValue1(a, b) {
    console.log(a+b) ;
    return a+b;
}

calculateValue(2, 4);
calculateValue(23, 78);
calculateValue1(6, 9);
