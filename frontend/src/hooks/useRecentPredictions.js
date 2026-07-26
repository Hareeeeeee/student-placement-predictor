import { useEffect, useState } from "react";
import api from "../services/api";

export default function useRecentPredictions() {
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPredictions() {
      try {
        const response = await api.get("/recent-predictions");
        setPredictions(response.data);
      } catch (error) {
        console.error("Error fetching recent predictions:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPredictions();
  }, []);

  return { predictions, loading };
}