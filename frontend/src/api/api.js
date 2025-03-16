import mockDatas from "../_mocks_/mockDatas.js";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA === "true";

// Fonction pour récupérer les données mockées
const getMockData = (url, userId) => {
  switch (url) {
    case "user":
      return mockDatas.USER_MAIN_DATA.find((data) => data.id === userId);
    case "activity":
      return mockDatas.USER_ACTIVITY.find((data) => data.userId === userId);
    case "average-sessions":
      return mockDatas.USER_AVERAGE_SESSIONS.find(
        (data) => data.userId === userId
      );
    case "performance":
      return mockDatas.USER_PERFORMANCE.find((data) => data.userId === userId);
    default:
      console.warn(
        `Données mockées introuvables pour '${url}' avec userId: ${userId}`
      );
      return null;
  }
};

// Fonction pour récupérer les données mockées ou API
const fetchData = async (url, userId) => {
  const SELECT_DATA_MOCKED =
    localStorage.getItem("SELECT_DATA_MOKED") === "true";

  if (USE_MOCK_DATA || SELECT_DATA_MOCKED) {
    const mockData = getMockData(url, userId);
    if (!mockData) {
      console.warn(
        `⚠️ Données mockées introuvables pour '${url}' avec userId: ${userId}`
      );
      return null; // Retourne `null` pour éviter une erreur plus tard
    }
    return mockData;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/user/${userId}/${url}`);

    if (!response.ok) {
      throw new Error(`❌ Erreur HTTP ! Statut: ${response.status}`);
    }

    const data = await response.json();
    return data?.data; // Assure un retour structuré et évite les erreurs
  } catch (error) {
    console.error("🚨 Erreur lors de la récupération des données :", error);
    throw error;
  }
};

// Fonctions d'accès aux différentes données
export const fetchUserInfo = (id) => fetchData("", id);
export const fetchUserActivity = (id) => fetchData("activity", id);
export const fetchUserAverageSessions = (id) =>
  fetchData("average-sessions", id);
export const fetchUserPerformance = (id) => fetchData("performance", id);
