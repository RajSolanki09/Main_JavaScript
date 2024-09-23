let productsData = [];

const getData = async () => {
    let req = await fetch("https://dummyjson.com/products");
    let res = await req.json();
    productsData = res.products; 
    displayProducts(productsData); 
}

getData();

const getStars = (rating) => {
    let stars = '';
    if (rating > 5) {
        stars = '⭐⭐⭐⭐⭐';
    } else if (rating > 4) {
        stars = '⭐⭐⭐';
    } else if (rating > 3) {
        stars = '⭐⭐';
    } else if (rating > 2) {
        stars = '⭐';
    } else {
        stars = 'No stars';
    }
    return stars;
};

const displayProducts = (Data) => {
    const productsList = document.getElementById("productsList");
    productsList.innerHTML = ""; 

    Data.map((data) => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product");

        let id = document.createElement("h2");
        id.innerHTML = `ID: ${data.id}`;
        let title = document.createElement("h2");
        title.innerHTML = data.title;
        let price = document.createElement("h5");
        price.innerHTML = `Price: $${data.price}`;
        let category = document.createElement("h5");
        category.innerHTML = `Category: ${data.category}`;
        let stars = document.createElement("h5");
        stars.innerHTML = getStars(data.rating); 
        let image = document.createElement("img");
        image.src = data.thumbnail;

        productDiv.append(id, title, price, category, stars, image);
        productsList.appendChild(productDiv);
    });
};

document.getElementById("lth").addEventListener("click", () => {
    let sortedData = [...productsData].sort((a, b) => a.price - b.price);
    displayProducts(sortedData);
});

document.getElementById("htl").addEventListener("click", () => {
    let sortedData = [...productsData].sort((a, b) => b.price - a.price);
    displayProducts(sortedData);
});

document.getElementById("beauty").addEventListener("click", () => {
    let filteredData = productsData.filter(product => product.category === "beauty");
    displayProducts(filteredData);
});

document.getElementById("fragrances").addEventListener("click", () => {
    let filteredData = productsData.filter(product => product.category === "fragrances");
    displayProducts(filteredData);
});

document.getElementById("furniture").addEventListener("click", () => {
    let filteredData = productsData.filter(product => product.category === "furniture");
    displayProducts(filteredData);
});
