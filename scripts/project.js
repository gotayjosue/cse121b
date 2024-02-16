let productsList = [];

const getTemples = async() => {

    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")

    templesList = await response.json();

    displayTemples(templesList);
}