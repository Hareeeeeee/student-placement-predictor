import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import api from "../services/api";

export default function useHistory() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 5;

  useEffect(() => {
    async function fetchHistory() {
      try {
        const response = await api.get("/history");
        setHistory(response.data);
      } catch (error) {
        console.error(error);

        setHistory([]);

        toast.error(
          error.response?.data?.detail ||
            "Unable to load prediction history."
        );
      } finally {
        setLoading(false);
      }
    }

    fetchHistory();
  }, []);

  const filteredHistory = useMemo(() => {
    return history.filter((item) => {
      const matchesSearch =
        item.degree.toLowerCase().includes(search.toLowerCase()) ||
        item.branch.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" || item.prediction === filter;

      return matchesSearch && matchesFilter;
    });
  }, [history, search, filter]);

  const totalPages = Math.ceil(
    filteredHistory.length / recordsPerPage
  );

  const currentHistory = filteredHistory.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search, filter]);

  return {
    history,
    setHistory,
    currentHistory,
    loading,

    search,
    setSearch,

    filter,
    setFilter,

    currentPage,
    totalPages,
    setCurrentPage,
  };
}