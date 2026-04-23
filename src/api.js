import axios from "axios";

const api = axios.create({
    baseURL: "https://portfolio-backend-1-0w1r.onrender.com",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;