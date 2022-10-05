import axios, { type AxiosInstance } from 'axios';

const apiClient: AxiosInstance = axios.create({
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
  }
});

export default apiClient;
