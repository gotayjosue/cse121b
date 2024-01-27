/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2) {

    return number1 + number2;
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    return document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

function subtract(number1, number2) {

    return number1 - number2;
}

function subtractNumbers(){
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    return document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {

    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);

    return document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);

}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

const divideNumbers = () => {

    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);

    return document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);

}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */


document.querySelector('#getTotal').addEventListener('click', subtotal);

function subtotal() {
    let discount = 0;
    let total = 0;

    let subNumber = Number(document.querySelector('#subtotal').value);

    if (document.querySelector('#member').checked) {
        discount = subNumber * 0.20;
    }

    total = subNumber - discount;

    return document.querySelector('#total').innerHTML = `$ ${total.toFixed(2)}`;
}



/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let array1 = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerHTML = array1;

/* Output Odds Only Array */

const oddNumbers = array1.filter(function(number) {
    return number % 2 !==0;

})

document.querySelector('#odds').innerHTML = oddNumbers;

/* Output Evens Only Array */
const evenNumbers = array1.filter(function(number) {
    return number % 2 ==0;

})

document.querySelector('#evens').innerHTML = evenNumbers;

/* Output Sum of Org. Array */
function sumArray(total, number) {
    return total + number;
}
document.querySelector('#sumOfArray').innerHTML = array1.reduce(sumArray, 0);

/* Output Multiplied by 2 Array */
function multiplyArray(number) {
    return number * 2;
}
document.querySelector('#multiplied').innerHTML = array1.map(multiplyArray);
/* Output Sum of Multiplied by 2 Array */

let newArray = array1.map(multiplyArray);
document.querySelector('#sumOfMultiplied').innerHTML = newArray.reduce(sumArray, 0);
