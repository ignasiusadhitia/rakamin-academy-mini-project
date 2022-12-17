import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen relative">
      <Header />
      <div className="px-2 sm:px-4 py-2.5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
