import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburgerapp-sk.firebaseio.com/'
});


export default instance;