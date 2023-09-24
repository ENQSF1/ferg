import Footer from "@/components/Footer";
import Header from "../Nav";
export default function MainLayout({ children }) {
  return (
    <div className="min-h-full">
      <Header />

      <main>
        <div className="w-full  ">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
