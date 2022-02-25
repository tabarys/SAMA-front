import './Formulaire.css'
import FormulaireConnexion from './FormConnexion';
import { NavLink } from 'react-router-dom';


const FormulaireInscription = () => {
    return (
        <>
        <h1>S'incrire</h1> 
            <form className="form">
                <label htmlFor="nom">Nom:</label><br></br>
                <input id="nom" name="nom" placeholder='Entrez votre nom'/><br></br>

                <label htmlFor="prenom">Prénom:</label><br></br>
                <input id="prenom" name="prenom" placeholder='Entrez votre prénom'/><br></br>

                <label htmlFor="mail">Adresse mail :</label><br></br>
                <input id="mail" name="mail" placeholder='Entrez votre email'/><br></br>

                <label htmlFor="dateA">Date d'anniversaire :</label><br></br>
                <input id="dateA" name="dateA" placeholder='JJ/MM/AAAA'/><br></br>

                <label htmlFor="mpdm"><b>Adresse :</b></label><br></br>
                <input id="ad" name="ad" placeholder='Entrez votre adresse'/> 
                <label htmlFor="cp">Code postal :</label>
                <input id="cp" name="cp" placeholder='Code Postal'/>
                <label htmlFor="ville">Ville :</label>
                <input id="ville" name="ville" placeholder='Nom de la ville'/>
                <br></br>

                <label htmlFor="mdp">Mot de passe :</label><br></br>
                <input id="mdp" name="mdp" placeholder='Choisir un mot de passe '/><br></br>
            </form>

                <button className='submit' type='sumbit'> Créer le profil </button>
            <p className='p'>
            <h1>Vous avez déjà un compte SAMA Travel?
            
            <NavLink to="/connexion"><button className='submit' onClick={<FormulaireConnexion/>}>Cliquez ici</button></NavLink></h1> 
                
                
            </p>
        </>
    )
}

export default FormulaireInscription;