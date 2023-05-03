import axios from 'axios';

export const setAuthToken = token => {
    if (token) {
        //axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        localStorage.setItem("Authorization", JSON.stringify(`Bearer ${token}`));
    }
    else
        //delete axios.defaults.headers.common["Authorization"];
        localStorage.removeItem("Authorization")
}
