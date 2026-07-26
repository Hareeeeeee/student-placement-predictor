import { useEffect, useState } from "react";
import api from "../services/api";

export default function useBranchDistribution() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/branch-distribution");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching branch distribution:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading };
}