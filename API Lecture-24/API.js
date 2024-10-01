const studentAPI = {
    post: async (student) => {
        let req = await fetch("https://json-server-7tp9.onrender.com/student", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)
        });

        return req.ok && req.json(); // Returns the response data if successful
    },

    get: async () => {
        let req = await fetch("https://json-server-7tp9.onrender.com/student");

        return req.ok && req.json(); // Returns the response data if successful
    },

    patch: async (id, student) => {
        let req = await fetch(`https://json-server-7tp9.onrender.com/student/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)
        });

        return req.ok && req.json(); // Returns the updated data if successful
    },

    delete: async (id) => {
        let req = await fetch(`https://json-server-7tp9.onrender.com/student/${id}`, {
            method: "DELETE"
        });

        return req.ok && true; // Returns true if the deletion was successful
    }
};

export default studentAPI