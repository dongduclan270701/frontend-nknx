import axios from 'axios';

export default axios.create({
    baseURL: "https://nknx-amonit.herokuapp.com/",
    headers: {
        "Content-type": "application/json",
    },
});