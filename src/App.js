import './style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import BodyWrapper from './components/Containers/BodyWrapper'
import HomePage from './pages/Home/home';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import FormulaireInscription from './pages/Formulaires/Formulaire';
import FormulaireConnexion from './pages/Formulaires/FormConnexion';

function App() {
  return (
    <BodyWrapper>

    <Header />
    <HomePage/>
    <Routes >
          <Route path='/inscription' element={<FormulaireInscription/>}/>
          <Route path='/connexion' element={<FormulaireConnexion/>}/>

    </Routes>
    
    <Footer />
    </BodyWrapper>    
  );
}

export default App;
