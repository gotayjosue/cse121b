/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile  = {
    name: 'Josue Gotay',
    photo: 'images/Me.jpeg',
    favoriteFoods: ['Pizza','Ice Cream', 'Chicken','Baleadas'],
    hobbies: ['Play the guitar','Go to the beach','Listening to music'],
    placesLived: []
};




/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({place: 'Trujillo, HN', length: '17 years'},
            {place: 'La Ceiba, HN', length: '2 years'},
            {place: 'Copan, HN', length: '3 years'},
            {place: 'Guatemala City, GT', length: '2 years'});

/* DOM Manipulation - Output */

/* Name */

document.getElementById('name').innerHTML = myProfile.name;

/* Photo with attributes */

const photo = document.querySelector('#photo');

photo.setAttribute("src","images/Me.jpeg");
photo.setAttribute("alt","My photo");


/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(foods => {
    let list = document.createElement('li');
    list.textContent = foods
    document.querySelector('#favorite-foods').appendChild(list)
});


/* Hobbies List */

myProfile.hobbies.forEach(hobbies => {

    let hobbie = document.createElement('li');
    hobbie.textContent = hobbies;
    document.querySelector('#hobbies').appendChild(hobbie)
});

/* Places Lived DataList */


myProfile.placesLived.forEach(element => {
    
    let dtElement = document.createElement('dt');
    dtElement.textContent = element.place;
    document.querySelector('#places-lived').appendChild(dtElement)

    let ddElement = document.createElement('dd');
    ddElement.textContent = element.length;
    document.querySelector('#places-lived').appendChild(ddElement);
});




