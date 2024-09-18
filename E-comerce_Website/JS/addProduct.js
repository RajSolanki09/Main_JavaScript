import getvalue from "../components/helper.js";
import Navbar from "../components/Navbar.js";

document.getElementById("navbar").innerHTML = Navbar();

let isLogin = localStorage.getItem('isLogin') || false;

if (!isLogin) {
    
    window.location.href = "/E-comerce_Website/Pages/loginPage.html";
}

let products = JSON.parse(localStorage.getItem('products')) || [];

const productSubmit = (e) => {
    e.preventDefault();

    let product = {
        title: getvalue(".title"),
        price: getvalue(".price"),
        category: getvalue(".category"),
        img: getvalue(".img"),
        productid:Date.now()
    };
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));

};
document.getElementById('productData').addEventListener('submit', productSubmit);