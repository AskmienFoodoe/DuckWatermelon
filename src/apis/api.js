import axios from "axios";

// Instantiate an axios client
const api = axios.create({
    baseURL: `https://duckwatermelon-backend.herokuapp.com/`
});

exports.getAllEntries = function(successCallback, errorCallback) {
    api
        .get("entries")
        .then(response => {
        successCallback(response.data);
        })
        .catch(error => {
        errorCallback(error);
        });
};