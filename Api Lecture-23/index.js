const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/users");
    const data = await response.json();

    mapper(data);
}

getData();

const mapper = (data) => {
    const productsList = document.getElementById("productsList");

    data.map(user => {
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");

        userCard.innerHTML = `
            <h2>${user.name.firstname} ${user.name.lastname}</h2>
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}, ${user.address.zipcode}</p>
        `;

        productsList.append(userCard);
    });
};
