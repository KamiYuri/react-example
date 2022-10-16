import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost/api',
  timeout: 3000,
});

instance.defaults.headers['content-type'] = 'application/json';
