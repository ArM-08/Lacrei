import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PessoaUsuaria from "./Pages/PessoaUsuaria";
import Profissional from "./Pages/Profissional";


interface RoutesContent {}


const MainRoute: React.FC<RoutesContent>= () =>{
    return(
        <BrowserRouter>
        <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/pessoa-usuaria" element={<PessoaUsuaria/>}/>
<Route path="/profissional" element={<Profissional/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default MainRoute;