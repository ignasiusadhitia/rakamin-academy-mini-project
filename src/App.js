import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="min-h-screen px-2 sm:px-4 py-2.5">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
