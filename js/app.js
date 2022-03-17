//import { firstName } from './utils.js';

/* const firstName = 'Nicolas'; // data type: String

let age = 26; // data type: Number


//console.log(genderMale) // ikke hoisting for variabler

const genderMale = true; // data type: Boolean

console.log(firstName);
console.log(age);
console.log(genderMale); */

//myFunction('Nico'); // hoisting
//myFunction(); // hoisting

/* function myFunction(box) { // function declaration
    console.log('my function started ' + box);
    console.log('you are male? ' + genderMale)
};

function logFullName(firstName, surName, yourAge) {
    console.log('first name: ' + firstName + ' ' );
    console.log('your surname is: ' +surName);
    console.log('your age is: ' + yourAge)
} */

/* const firstName = 'Nico';

function details(age1, age2) {
    console.log('your name is: ' + firstName);
    console.log(age1 / age2);
};

details(22, 40); */

const firstName = 'Nicolas';
const lastName = 'Diaz';

function createCard(multiply, age) {
    const titleElement = document.createElement('h1');
    //titleElement.textContent = firstName + ' ' + lastName; // ES5 før 2015
    
    if(multiply) {
       titleElement.textContent = `${firstName} 
                                ${lastName} 
                                you are ${age * 2}`; // template literal foretrukket string ko,posisjon
    } else {
        titleElement.textContent = `${firstName} 
        ${lastName} 
        you are ${age}`; // template literal foretrukket string ko,posisjon
    }
    
    //('#app');
    const mainElement = document.querySelector('.app');

    mainElement.append(titleElement);

    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', 'https://images.unsplash.com/photo-1647289491458-2803fbc4499c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')
    mainElement.append(imgElement);

    const buttonElement = document.createElement('button');
    buttonElement.textContent = 'Change class';

    mainElement.append(buttonElement);
    
    buttonElement.addEventListener('click', () => {
        mainElement.classList.toggle('app-reverse');
    });
}

//invoke function
//createCard(true, 29);

