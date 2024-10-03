import Navbar from "../component/header.js";
import ProductAPI from "../method.js";

document.getElementById('navbar').innerHTML = Navbar();

const handleProduct = async (e) => {
    e.preventDefault();

    const data = {
        productName: document.getElementById('productName').value,
        productCatagory: document.getElementById('productCatagory').value,
        amount: document.getElementById('amount').value,
        image: document.getElementById('url').value,
    };

    const { productName, productCatagory, amount } = data;

    if (!(productName.length > 2)) {
        alert("Product name must be more than 2 characters.");
        return;
    } else {
    }

    if (!productCatagory) {
        alert("Product category is required.");
        return; 
    } else {
    }

    if (isNaN(amount) || amount <= 0) {
        alert("Amount must be a positive number.");
        return; 
    } else {
    }

    await ProductAPI.post(data); 
    alert("Product Added successful"); 
    window.location.href = "/Final_Exam_2/pages/home.html";
};

document.getElementById('productData').addEventListener('submit', handleProduct);
