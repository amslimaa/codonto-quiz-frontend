import axios from 'axios';

const api = axios.create({ baseURL: 'http://biosseguranca-ufpi.com.br:3333' });

export default api;
