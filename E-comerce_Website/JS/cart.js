import { createTag } from "../components/helper.js";
import Navbar from "../components/Navbar.js";

const renderNavbar = () => {
    document.getElementById("navbar").innerHTML = Navbar();
};
renderNavbar();

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const remove = (index) => {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
};

const handleQty = (opr, index) => {
    if (opr === "+") {
        cart[index].qty += 1;
    } else if (opr === "-" && cart[index].qty > 1) {
        cart[index].qty -= 1;
    } else if (opr === "-" && cart[index].qty === 1) {
        remove(index);
        return;
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
};

const renderCart = () => {
    document.getElementById("cartItem").innerHTML = "";
    let totalAmount = 0;

    cart.forEach((ele, i) => {
        let tr = createTag("tr", "");

        let td1 = createTag("td", "");
        let img = createTag("img", ele.img);
        img.setAttribute("class", "img");
        td1.append(img);

        let td2 = createTag("td", ele.title);

        let td3 = createTag("td", "");
        let btn1 = createTag("button", "-");
        let btn2 = createTag("button", ele.qty);
        let btn3 = createTag("button", "+");
        td3.append(btn1, btn2, btn3);

        btn1.addEventListener("click", () => handleQty("-", i));
        btn3.addEventListener("click", () => handleQty("+", i));

        let td4 = createTag("td", ele.price);
        let td5 = createTag("td", ele.qty * ele.price);
        let td6 = createTag("td", "Remove");
        td6.addEventListener("click", () => remove(i));

        tr.append(td1, td2, td3, td4, td5, td6);

        document.getElementById("cartItem").append(tr);

        totalAmount += ele.qty * ele.price;  // Add to total amount
    });

    // Display the total amount
    document.getElementById("totalAmount").textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
};

renderCart();

document.getElementById("checkoutBtn").addEventListener("click", () => {
    localStorage.removeItem("cart");
    localStorage.removeItem("username");
    localStorage.removeItem("isLogin");

    alert("Checkout completed! Visit again");
    renderCart();
    renderNavbar();
});
