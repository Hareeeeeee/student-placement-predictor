import Layout from "../components/layout/Layout";
import Hero from "../components/hero/Hero";
import StudentForm from "../components/form/StudentForm";

export default function Home() {
  return (
    <Layout>
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Hero />
        <StudentForm />
      </div>
    </Layout>
  );
}