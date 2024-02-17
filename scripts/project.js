const menuList = document.getElementById('products-list');
const codeInput = document.getElementById('code');
const cartList = document.getElementById('cartList');
const add = document.getElementById('add');
const total = document.getElementById('total');
const changeInput = document.getElementById('cash');
const currentDate = new Date().toDateString();

let productsList = [];
let cart = [];

let found = false;
const displayProducts = (products) => {
    menuList.innerHTML = '';
    products.forEach(product => {

        if (product.code.includes(codeInput.value)) {

            let list = document.createElement('li');
            list.textContent = `${product.productName} - $${product.price}`;
            menuList.appendChild(list);
            found = true;
        }

    });
    if (found == false) {
        alert('Product not found');
    }
}


const getProducts = async() => {

    const response = await fetch("https://gotayjosue.github.io/cse121b/products.json");

    productsList = await response.json();

    displayProducts(productsList);
}



function addToCart(product) {
    cart.push(product);
    renderCart();
}

function removeFromCart(productToRemove) {
    cart = cart.filter(product => product !== productToRemove); // Remove the specific product from the cart
    renderCart(); // Re-render the cart without the removed product
}

function renderCart() {
    cartList.innerHTML = ''; // Clear previous cart items
    let totalSell = 0;
    cart.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.productName} - $${product.price}`;

        const button = document.createElement('button');
        button.textContent = 'Remove';
        button.addEventListener('click', () => removeFromCart(product));
        li.appendChild(button);
        cartList.appendChild(li);
        totalSell += parseFloat(product.price);
        
        function change() {
            moneyBack = changeInput.value - totalSell;
            const back = document.getElementById('back');
            back.textContent = moneyBack.toFixed(2);
        
        }
        document.querySelector('#change').addEventListener('click', change);
        
    });

    total.textContent = totalSell.toFixed(2);
    
}

function generateBill() {
    // Create a new window for the bill
    const billWindow = window.open('', '_blank');

    setTimeout(() => {
    
        // Start building the bill content
        let billContent = '<!DOCTYPE html>';
        billContent += '<html lang="en">';
        billContent += "<link rel=stylesheet href=styles/project.css>";
        billContent += '<head><meta charset="UTF-8"><title>Bill</title></head>';
        billContent += '<body>';
        billContent += '<section class="billcontent">';
        billContent += '<h2 class="billtitle">Bill</h2>';
        billContent += `<strong><p class="date">${currentDate}</p></strong>`;
        billContent += '<div class="themes">';
        billContent += '</div class="themes">';
        billContent += '<ul class="billproducts">';
        
        // Add each product in the cart to the bill
        cart.forEach(product => {
            billContent += `<li>${product.productName} - $${product.price}</li>`;
        });
        
        // Add total amount to the bill
    
        
        // Close the bill content
        billContent += '</ul>';
        billContent += `<h3 class="billtotal"><strong>Total: $${total.textContent}</strong></h3>`;
        billContent += '</section class="billcontent">';
        billContent += '</body>';
        billContent += '</html>';
        
        // Write the bill content to the new window
        billWindow.document.open();
        billWindow.document.write(billContent);
        billWindow.document.close();
    }, 100);
}


document.querySelector('#bill').addEventListener('click', generateBill);

document.querySelector('#find').addEventListener('click', getProducts);

document.querySelector('#add').addEventListener('click', () => {
    const product = productsList.find(product => product.code.includes(codeInput.value));
    if (product) {
        addToCart(product);
    } else {
        alert('The cart is empty');
    }
});


