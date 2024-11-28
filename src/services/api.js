import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;


const api = axios.create({
    baseURL: `${apiUrl}` // ip e porta do servidor
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

export default api;
