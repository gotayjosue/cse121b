/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');

let templesList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {

    temples.forEach(temple => {

        let article = document.createElement('article');
        let title = document.createElement('h3');
        title.textContent = temple.templeName;
        let image = document.createElement('img');
        image.src = temple.imageUrl;
        image.alt = temple.location;

        article.appendChild(title);
        article.appendChild(image);
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/

const getTemples = async() => {

    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")

    templesList = await response.json();

    displayTemples(templesList);
}

/* reset Function */

function reset() {

    templesElement.innerHTML= '';
}


/* filterTemples Function */

function filterTemples(temples) {
    reset();
    const filter = document.querySelector("#filtered").value;

    switch(filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;

        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;

        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;

        case 'all':
            displayTemples(temples);
            break;
    }
}




/* Event Listener */

document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templesList)});

getTemples();