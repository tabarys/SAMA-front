import './Formulaire.css';

const FormulaireConnexion = () => {
    return (
        <>
            <h1>Connectez-vous</h1>
            <form className="form">
                <label htmlFor="nom">Adresse mail:</label><br></br>
                <input id="Nom" name="Nom" placeholder='Entrez votre email' /><br></br>

                <label htmlFor="nom">Mot de passe:</label><br></br>
                <input id="Nom" name="Nom" placeholder='Entrez votre mot de passe'/><br></br>
            </form>
            <button className='submit' type='sumbit'> Se connecter</button>
        </>
    )
}
export default FormulaireConnexion;