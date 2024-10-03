const ProductAPI = {
    post: async (student) => {
        let req = await fetch("https://final-exam-2-json-server.onrender.com/Product_Data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)
        });

        return req.ok && req.json();
    },

    get: async () => {
        let req = await fetch("https://final-exam-2-json-server.onrender.com/Product_Data");

        return req.ok && req.json();
    },

    delete: async (id) => {
        let req = await fetch(`https://final-exam-2-json-server.onrender.com/Product_Data/${id}`, {
            method: "DELETE"
        });

        return req.ok && true;
    }
};

export default ProductAPI