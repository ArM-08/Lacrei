import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import PessoaUsuaria from "./Pages/PessoaUsuaria";
import Profissional from "./Pages/Profissional";

interface RoutesContent {}

const MainRoute: React.FC<RoutesContent> = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pessoa-usuaria" element={<PessoaUsuaria />} />
        <Route path="/profissional" element={<Profissional />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default MainRoute;
