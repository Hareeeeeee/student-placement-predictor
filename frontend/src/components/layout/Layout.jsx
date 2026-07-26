import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      <Navbar />

      <main className="mx-auto w-full flex-1 max-w-7xl">
        {children}
      </main>

      <Footer />
    </div>
  );
}