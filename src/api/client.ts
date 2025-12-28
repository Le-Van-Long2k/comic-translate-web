import axios from "axios";

export const apiClient = axios.create({
  baseURL: "/", // dev: MSW | prod: FastAPI local
  timeout: 60_000,
});
