import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

export const deletePrediction = (id) =>
  api.delete(`/prediction/${id}`);

export default api;