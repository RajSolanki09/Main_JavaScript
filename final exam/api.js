const DataAPI = {
    post: async (student) => {
        let req = await fetch("http://localhost:3000/Question", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)
        });

        return req.ok && req.json(); // Returns the response data if successful
    },

    get: async () => {
        let req = await fetch("http://localhost:3000/Question");

        return req.ok && req.json(); // Returns the response data if successful
    },
};

export default DataAPI