import axios from 'axios';

export const API = axios.create({
  baseURL : 'https://localhost:44334',
  timeout: 20000,
})