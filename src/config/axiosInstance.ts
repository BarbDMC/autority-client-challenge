import axios from 'axios';

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

export const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
  timeout: 10000
});
