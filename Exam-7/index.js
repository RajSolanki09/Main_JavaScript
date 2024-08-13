let data = [];

const deleteBtn = (index) => {
    data.splice(index, 1);
    uimaker();
}

const uimaker = () => {
    const productContainer = document.getElementById('product');
    productContainer.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        let card = document.createElement('div');
        card.className = 'card';

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        let cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.innerHTML = data[i].name;

        let cardPrice = document.createElement('p');
        cardPrice.className = 'card-text';
        cardPrice.innerHTML = `Price: $${data[i].price}`;

        let cardColor = document.createElement('p');
        cardColor.className = 'card-text';
        cardColor.innerHTML = `Color: ${data[i].color}`;

        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.className = 'btn btn-danger';
        deleteButton.addEventListener('click', () => deleteBtn(i));

        cardBody.append(cardTitle, cardPrice, cardColor, deleteButton);
        card.append(cardBody);
        productContainer.append(card);
    }
}

const handleData = (event) => {
    event.preventDefault(); 
    let ProductData = {
        name: document.getElementById("name").value,
        price: Number(document.getElementById("price").value),
        color: document.getElementById("color").value
    }
    data.push(ProductData);
    uimaker();
}

document.getElementById("productData").addEventListener("submit", handleData);
