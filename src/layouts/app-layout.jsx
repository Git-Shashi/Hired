import Header from "@/components/header";
import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
