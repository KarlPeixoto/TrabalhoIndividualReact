import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/home/home";
import { Questão01 } from "../Pages/questao1/questao1";
import { Questão02 } from "../Pages/questao2/questao2";
import { Questão03 } from "../Pages/questao3/questao3";


export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/questao1" element={<Questão01 />} />
            <Route path="/questao2" element={<Questão02 />} />
            <Route path="/questao3" element={<Questão03 />} />
        </Routes>
    )
}