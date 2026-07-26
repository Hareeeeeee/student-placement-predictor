import Papa from "papaparse";
import { saveAs } from "file-saver";

export default function ExportButton({ history }) {
  const handleExport = () => {
    const csv = Papa.unparse(history);

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    saveAs(blob, "prediction_history.csv");
  };

  return (
    <button
      onClick={handleExport}
      className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
    >
      Export CSV
    </button>
  );
}