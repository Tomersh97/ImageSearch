import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 20js1KKDkyNfqoyWbDC624M7DuzyvbWSsS2dO30kuvI'
    }
});