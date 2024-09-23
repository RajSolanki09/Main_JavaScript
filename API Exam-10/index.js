const getData = async () => {
    let req = await fetch("https://dummyjson.com/products");
    let res = await req.json();
    mapper(res)
}

getData();

const mapper = (Data) => {
    Data.products.map((data) => {

        let id = document.createElement("h2");
        id.innerHTML = data.id;
        let title = document.createElement("h2");
        title.innerHTML = data.title;
        let price = document.createElement("h5");
        price.innerHTML = data.price;
        let category = document.createElement("h5");
        category.innerHTML = data.category;
        let rate = document.createElement("h5");
        rate.innerHTML = data.rate;
        let image = document.createElement("img");
        image.src = data.image;

        document.getElementById("productsList").append(id, title, price, category, rate, image);
    });
}