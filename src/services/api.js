import axios from 'axios';

const api = axios.create({
    baseURL: 'https://isro.vercel.app/api/spacecrafts'
})

export default api;