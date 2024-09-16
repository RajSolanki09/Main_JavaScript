import getvalue, { createTag } from "../components/helper.js";
import Navbar from "../components/Navbar.js";

document.getElementById("navbar").innerHTML = Navbar();

let products = JSON.parse(localStorage.getItem("products")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const isExist = (id) => {
    return cart.findIndex(item => item.id === id);
};

const handleCart = (ele) => {
    const index = isExist(ele.id);
    if (index !== -1) {
        cart[index].qty += 1;
        alert("Quantity increased");
    } else {
        cart.push({ ...ele, qty: 1 });
        alert("Added to cart");
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
};

const mapper = (data) => {
    document.getElementById("productList").innerHTML = ""; 
    data.forEach((ele) => {
        let img = createTag("img", ele.img);
        let price = createTag("p", ele.price);
        let h2 = createTag("h2", ele.title);
        let category = createTag("p", ele.category);
        let div = document.createElement("div");
        let buyBtn = createTag("button", "Add to Cart");
        buyBtn.addEventListener("click", () => handleCart(ele));
        div.append(img, h2, price, category, buyBtn);
        document.getElementById("productList").append(div);
    });
};

mapper(products);

const handleSort = (orderBy) => {
    let sortedProducts = [...products].sort((a, b) => orderBy === "lth" ? a.price - b.price : b.price - a.price);
    mapper(sortedProducts);
};

const handleCategory = (category) => {
    let filteredProducts = products.filter((ele) => ele.category === category);
    mapper(filteredProducts);
};

document.getElementById("lth").addEventListener("click", () => handleSort("lth"));
document.getElementById("htl").addEventListener("click", () => handleSort("htl"));

document.getElementById("men").addEventListener("click", () => handleCategory("men"));
document.getElementById("women").addEventListener("click", () => handleCategory("women"));
document.getElementById("kids").addEventListener("click", () => handleCategory("kids"));

const search = (e) => {
    e.preventDefault();
    let searchValue = getvalue("#search");
    let filteredProducts = products.filter((ele) => ele.title.toLowerCase().includes(searchValue.toLowerCase()));
    mapper(filteredProducts);
};
document.getElementById("searching").addEventListener("submit", search);
