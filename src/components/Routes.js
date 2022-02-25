import { BrowserRouter, Route, Routes } from "react-router-dom"
import FormulaireConnexion from "../pages/Formulaires/FormConnexion";
import FormulaireInscription from "../pages/Formulaires/Formulaire";
import HomePage from "../pages/Home/home";

const Routage = () => {
    return (

        <>
<BrowserRouter>
        <Routes>
            <Route path="/connexion" element={<FormulaireConnexion/>}/>
            <Route path="/inscription" element={<FormulaireInscription/>} />
            <Route path="/accueil" element={<HomePage/>} />
        </Routes>
</BrowserRouter>
        </>

    )
}

export default Routage;