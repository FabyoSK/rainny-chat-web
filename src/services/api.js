import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3333'
});

api.defaults.headers.common.Authorization = 'Bearer 04196e4c-daae-4fad-b835-4a9d5388fab0';

export { api };
