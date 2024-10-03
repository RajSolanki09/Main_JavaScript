import Navbar from "../component/header.js";
import ProductAPI from "../method.js";

document.getElementById('navbar').innerHTML = Navbar();

let Product_Data = [];
let users = JSON.parse(localStorage.getItem('users')) || []; 

const uiMaker = async (products) => {
    const listElement = document.getElementById('list'); 
    listElement.innerHTML = '';

    products.map((ele) => {
        const div = document.createElement('div');
        div.classList.add('productItem'); 

        const productName = document.createElement('h4');
        productName.innerHTML = `Product Name: ${ele.productName}`;

        const productCategory = document.createElement('p');
        productCategory.innerHTML = `Category: ${ele.productCatagory}`;

        const amount = document.createElement('p');
        amount.innerHTML = `Amount: ${ele.amount}`;

        const img = document.createElement('img');
        img.src = ele.image;
        img.alt = ele.productName; // Adding alt text

        const btn = document.createElement('button');
        btn.innerHTML = "Delete";
        btn.classList.add('btn', 'btn-danger', 'mt-2');

        btn.addEventListener('click', async () => {
            await ProductAPI.delete(ele.id);
            getProduct(); 
        });

        div.append(productName, productCategory, amount, img, btn);
        listElement.append(div);
    });
};
const displayUserData = () => {
    const userDataContainer = document.getElementById("userData");
    userDataContainer.innerHTML = ""; 

    users.map(user => {

        const userDiv = document.createElement("div");
        userDiv.classList.add("user");

        const username = document.createElement("h5");
        username.textContent = user.username; 

        const img = document.createElement("img");
        img.src = user.img; 
        img.alt = user.username; 
        img.style.width = "200px"; 
        img.style.height = "200px";
        img.style.borderRadius = "50%";
        img.style.objectFit = "cover"; 

        userDiv.append(img,username); 
        userDataContainer.append(userDiv); 
    });
};

// Initialize product display
const getProduct = async () => {
    Product_Data = await ProductAPI.get(); 
    uiMaker(Product_Data); 
};

// Function for sorting by price
const sortProducts = (order) => {
    const sortedProducts = [...Product_Data];
    if (order === 'LTH') {
        sortedProducts.sort((a, b) => a.amount - b.amount);
    } else if (order === 'HTL') {
        sortedProducts.sort((a, b) => b.amount - a.amount); 
    }
    uiMaker(sortedProducts); 
};

const search = () => {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = Product_Data.filter((ele) => 
        ele.productName.toLowerCase().includes(searchValue)
    );
    uiMaker(filteredProducts); 
};

const filterProducts = (category) => {
    const filteredProducts = Product_Data.filter(product => 
        product.productCatagory.toLowerCase() === category.toLowerCase()
    );
    uiMaker(filteredProducts); 
};

document.getElementById('lth').addEventListener('click', () => sortProducts('LTH'));
document.getElementById('htl').addEventListener('click', () => sortProducts('HTL'));
document.getElementById('car').addEventListener('click', () => filterProducts('Car'));
document.getElementById('Mobile').addEventListener('click', () => filterProducts('Mobile'));
document.getElementById('Electric').addEventListener('click', () => filterProducts('Electric'));

document.getElementById('searchButton').addEventListener('click', search);

displayUserData(); 

getProduct();
