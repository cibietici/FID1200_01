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

function handleMenu() {
    const hamburgerIcon = document.querySelector('.hamburger');
    const menuNavElement = document.querySelector('.menu-nav');
    const closeElement = document.querySelector('.close');
    menuNavElement.classList.add('hidden');
    hamburgerIcon.addEventListener('click', () => {
        menuNavElement.classList.remove('hidden');
    });
    closeElement.addEventListener('click', () => {
        menuNavElement.classList.add('hidden');
    });
};

handleMenu();

let newFirstName = 'Nico'; // string, numbers
//console.log(newFirstName)

const names = [
    'Frederikke', // index 0
    'Gina', // index 1
    'Nico', // index 2
    'Dino', // 3
    'Carlo' // 4
];
names[5]  = 'Max';
names[6]  = 'Ole';
names[7]  = 'Sofia';
names[8]  = 'Inger';
names[9]  = 'Aleksandra';
names[10] = 'Simen';

//console.log(names.length);

const things = ['Dino', 'Biden', 44, true, 'ny verdi'];

////console.log(things); // undefined

// objects
const person = {
    firstName: 'Dino',
    lastName: 'Biden',
    age: 44,
    male: true
};

person.female = false;

//console.log(person)

const persons = [
    {
        id: 252355562,
        firstName: 'Dino',
        lastName: 'Biden',
        age: 44,
        male: true,
        hobbies: ['movies', 'football']
    },
    {
        firstName: 'Nico',
        lastName: 'Diaz',
        age: 26,
        male: true
    },
    {
        firstName: 'Nico',
        lastName: 'Diaz',
        age: 26,
        male: true
    }
]

const cars = [
    {
        id: 142432434,
        pruductName: 'Volvo',
        version: 'X10',
        traction: 'Manual',
        year: 2012,
        fuel: ['Electric', 'Gas', 'Carbon']
    },
    {
        id: 142432434,
        pruductName: 'Fiat',
        version: 'BB2',
        traction: 'Manual',
        year: 2014,
        fuel: ['Electric']
    },
    {
        id: 142476434,
        pruductName: 'Ford',
        version: 'XFr trct',
        traction: 'Manual',
        year: 2022,
        fuel: ['Electric', 'Gas']
    },
    {
        id: 142423434,
        pruductName: 'Porche',
        version: 'XF4',
        traction: 'Automatic',
        year: 2021,
        fuel: ['Electric']
    },
    {
        id: 142906434,
        pruductName: 'Alfa Romeo',
        version: 'XF1',
        traction: 'Manual',
        year: 2018,
        fuel: ['Gas']
    },
    {
        id: 142906434,
        pruductName: 'Mercedes',
        version: 'XF1',
        traction: 'Manual',
        year: 2018,
        fuel: ['Gas'],
        image: 'http'
    }
];

const listBox = document.createElement('ul');
const container = document.querySelector('.app')

cars.forEach(car => {
    const listItem = document.createElement('li');
    listItem.textContent = `${car.pruductName} - ${car.year}`;
    listBox.append(listItem);
    container.append(listBox);
});
