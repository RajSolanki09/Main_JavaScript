import { createTag } from "../components/helper.js";
import Navbar from "../components/Navbar.js";

// Function to re-render the navbar
const renderNavbar = () => {
    document.getElementById("navbar").innerHTML = Navbar();
};
renderNavbar();

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to remove item from cart
const remove = (index) => {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    mapper(cart);
};

// Handle quantity changes
const handleQty = (opr, index) => {
    if (opr == "+") {
        cart[index].qty += 1
        localStorage.setItem("cart", JSON.stringify(cart))
    }
    else {

        if (cart[index].qty > 1) {
            cart[index].qty -= 1
            localStorage.setItem("cart", JSON.stringify(cart))
        }
        else {
            remove(index)
        }

    }
    mapper(cart)
};

// Function to map cart items to table
const mapper = (cart) => {
    document.getElementById("cartItem").innerHTML = "";

    cart.map((ele, i) => {
        let tr = createTag("tr", "");
        let td1 = createTag("td", "");
        let img = createTag("img", ele.img);
        img.setAttribute("class", "img");

        td1.append(img);

        let td2 = createTag("td", ele.title);

        // Quantity controls
        let td3 = createTag("td", "");
        let btn1 = createTag("button", "-");
        let btn2 = createTag("button", ele.qty);
        let btn3 = createTag("button", "+");
        td3.append(btn1, btn2, btn3);

        btn1.addEventListener("click", () => handleQty("-", i));
        btn3.addEventListener("click", () => handleQty("+", i));

        let td4 = createTag("td", ele.price);
        let td5 = createTag("td", ele.qty * ele.price);
        let td6 = createTag("td", "Delete");
        td6.addEventListener("click", () => remove(i));

        tr.append(td1, td2, td3, td4, td5, td6);

        document.getElementById("cartItem").append(tr);
    });
};

// Initial cart rendering
mapper(cart);

// Checkout button functionality
document.getElementById("checkoutBtn").addEventListener("click", () => {
    // Clear cart
    localStorage.removeItem("cart");

    // Remove the username and login status
    localStorage.removeItem("username");
    localStorage.removeItem("isLogin");

    alert("Checkout completed! ,Visit again");

    // Re-render the empty cart
    mapper([]);

    // Re-render the Navbar to update the header (remove username)
    renderNavbar();
});
