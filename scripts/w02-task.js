/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Josué Gotay';

let currentYear = '2024';

let profilePicture = 'images/Me.jpeg';






/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');

const foodElement = document.getElementById('food');

const yearElement = document.querySelector('#year');

const imageElment = document.getElementsByTagName('img');




/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}<strong>`;


yearElement.textContent(currentYear);

imageElment.setAttribute('src', Me);

imageElment.setAttribute('alt', `Profile image of ${fullName}`);





/* Step 5 - Array */

const favFoods = ['Pizza','Fried chicken', 'Fish'];

foodElement.innerHTML = `<p>${favFoods}<p>`;

favFoods.push('Ice cream');

foodElement.innerHTML += `<strong>${favFoods}<strong>`;

favFoods.shift();

foodElement.innerHTML += `<strong>${favFoods}<strong>`;

favFoods.pop();

foodElement.innerHTML += `<strong>${favFoods}<strong>`;



    







