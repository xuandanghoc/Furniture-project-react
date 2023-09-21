import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/Home/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import "./styles/Header.scss";
import "./styles/Footer.scss";
import "./styles/Global.scss";
import "./styles/HomePage.scss";
import "./styles/ShopPage.scss";
import "./styles/SingleProductPage.scss";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Shop" element={<ShopPage />} />
          <Route path="/product" element={<SingleProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
