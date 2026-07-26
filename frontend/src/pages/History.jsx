import { useState } from "react";
import toast from "react-hot-toast";
import HistorySkeleton from "../components/history/HistorySkeleton";

import Layout from "../components/layout/Layout";
import HistoryStats from "../components/history/HistoryStats";
import HistoryFilters from "../components/history/HistoryFilters";
import HistoryTable from "../components/history/HistoryTable";
import Pagination from "../components/history/Pagination";
import ExportButton from "../components/history/ExportButton";
import DeleteModal from "../components/history/DeleteModal";

import useHistory from "../hooks/useHistory";
import { deletePrediction } from "../services/api";

export default function History() {
  const {
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
  } = useHistory();

  const [deleteId, setDeleteId] = useState(null);

  const handleDelete = async () => {
    try {
      await deletePrediction(deleteId);

      setHistory((prev) =>
        prev.filter((item) => item.id !== deleteId)
      );

      setDeleteId(null);

      toast.success("Prediction deleted successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete prediction.");
    }
  };

  if (loading) {
    return (
      <Layout>
        <HistorySkeleton />
      </Layout>
    );
}

  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">
            Prediction History
          </h1>

          <p className="mt-2 text-slate-500">
            View, search, filter, export and manage previous placement
            predictions.
          </p>
        </div>

        <HistoryStats history={history} />

        <HistoryFilters
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
        />

        <div className="mb-4 flex justify-end">
          <ExportButton history={currentHistory} />
        </div>

        <HistoryTable
          history={currentHistory}
          onDelete={setDeleteId}
        />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />

        <DeleteModal
          open={deleteId !== null}
          onClose={() => setDeleteId(null)}
          onConfirm={handleDelete}
        />
      </div>
    </Layout>
  );
}