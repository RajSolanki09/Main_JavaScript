const DataAPI = {
    post: async (student) => {
        let req = await fetch("https://final-exam-json-server-1.onrender.com/Question", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)
        });
        return req.ok && req.json(); 
    },
    get: async () => {
        let req = await fetch("https://final-exam-json-server-1.onrender.com/Question");
        let response = await req.json();
        return response;
    },
};

export default DataAPI