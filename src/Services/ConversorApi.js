import axios from  'axios';


const api = axios.create({
    baseURL: 'https://free.currconv.com/api/v7'

});

export default api;

// convert?q=USD_BRL&compact=ultra&apiKey=46ba56b120c419563070