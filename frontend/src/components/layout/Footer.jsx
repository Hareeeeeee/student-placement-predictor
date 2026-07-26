export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <div>
          <h3 className="font-semibold text-slate-800">
            Placement Predictor
          </h3>

          <p className="text-sm text-slate-500">
            AI-powered student placement prediction platform.
          </p>
        </div>

        <div className="text-right text-sm text-slate-500">
          © {new Date().getFullYear()} Placement Predictor
          <br />
          Built with React • FastAPI • Supabase
        </div>

      </div>
    </footer>
  );
}