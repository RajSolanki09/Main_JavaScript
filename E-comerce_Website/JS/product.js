import getValue, { createTag } from "../components/helper.js";
import Navbar from "../components/Navbar.js";

document.getElementById("navbar").innerHTML = Navbar();

let products = JSON.parse(localStorage.getItem("products")) || [];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const isExist = (id) => {
    let flag = false;
    cart.map((ele, i) => {
        if (ele.id == id) {
            cart[i].qty = cart[i].qty + 1;
            flag = true;
            alert("Quantity increased");
        }
    });
    return flag;
}

const handleCart = (ele) => {
    if (!isExist(ele.id)) {
        cart.push({ ...ele, qty: 1 });
        alert("added to cart");
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    console.log(cart);
}

const mapper = (data) => {
    document.getElementById("productList").innerHTML = "";
    data.map((ele) => {
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
}
mapper(products);

const handleSort = (orderBy) => {
    if (orderBy == "lth") {
        let temp = products.sort((a, b) => a.price - b.price);
        mapper(temp);
    } else {
        let temp = products.sort((a, b) => b.price - a.price);
        mapper(temp);
    }
};

const handleCategory = (category) => {
    let temp = products.filter((ele) => ele.category == category);
    mapper(temp);
};

document.getElementById("lth").addEventListener("click", () => handleSort("lth"));
document.getElementById("htl").addEventListener("click", () => handleSort("htl"));

document.getElementById("men").addEventListener("click", () => handleCategory("men"));
document.getElementById("women").addEventListener("click", () => handleCategory("women"));
document.getElementById("kids").addEventListener("click", () => handleCategory("kids"));

const search = (e) => {
    e.preventDefault();
    let searchValue = getValue("#search");
    let temp = products.filter((ele) => ele.title.toLowerCase().includes(searchValue.toLowerCase()));
    mapper(temp);
};
document.getElementById("searching").addEventListener("submit", search);
document.getElementById("search").addEventListener("keypress", (e) => {
    if(e.key=="Enter"){
        
    }
    });