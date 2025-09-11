import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const apiClient = axios.create({
  baseURL: apiUrl,
  timeout: 1000,
});

export const fetchProjects = async () => {
  try {
    const response = await apiClient.get("/projects");
    return response.data;
  } catch (error) {
    console.error("Fehler beim Abrufen der Daten:", error);
    throw error;
  }
};
