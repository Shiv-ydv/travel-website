import axios from "axios";

/*
|--------------------------------------------------------------------------
| Django API Configuration
|--------------------------------------------------------------------------
| All API requests from the public website will use this base URL.
|--------------------------------------------------------------------------
*/

const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
});

export default api;