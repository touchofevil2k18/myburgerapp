import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-app-sk.firebaseio.com/'
});


export default instance;