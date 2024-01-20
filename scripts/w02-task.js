/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Josué Gotay';

let currentYear = '';

let profilePicture = 'images/Me.jpeg';




/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');

const foodElement = document.getElementById('food');

const yearElement = document.querySelector('#year');

const imageElement = document.querySelectorAll('img').src;

const imageElement2 = document.querySelectorAll('img').alt = `Profile image of ${fullName}`; /*This second variable of the imageElement is here because my VS does not recognize setAttribute as a method */



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = '2024';


/* Step 5 - Array */

const favFoods = ['Pizza','Fried chicken', 'Fish'];

foodElement.innerHTML = `<li>${favFoods}</li>`;

favFoods.push('Ice cream');

foodElement.innerHTML += `<li>${favFoods}</li>`;

favFoods.shift();

foodElement.innerHTML += `<li>${favFoods}</li>`;

favFoods.pop();

foodElement.innerHTML += `<li>${favFoods}</li>`;



    







