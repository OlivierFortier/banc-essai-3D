import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
