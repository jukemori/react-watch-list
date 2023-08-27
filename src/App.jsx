import "swiper/css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";

import { BrowserRouter } from "react-router-dom"; // Remove the import for Route

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Routes from "./config/Routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes /> {/* Render the Routes component directly */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
