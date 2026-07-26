import { useEffect, useState } from "react";
import api from "../services/api";

export default function usePredictionTrend() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTrend() {
      try {
        const response = await api.get("/prediction-trend");
        setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchTrend();
  }, []);

  return { data, loading };
}