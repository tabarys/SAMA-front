import Dropdown from 'react-bootstrap/Dropdown';
import styled from 'styled-components';
import FormulaireInscription from '../../pages/FormulaireInscription/Formulaire';
import HomePage from '../../pages/Home/home';


const DropDown = styled.div`
  justify-self: flex-start;
  position: relative;
  display: inline-block;
  font-size: 1.2rem;
`
const DropdownMenu = () => {

  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic"> Menu </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/home" onClick={<HomePage/>}>Accueil</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Itinéraire</Dropdown.Item>
        <Dropdown.Item href="/inscription" onClick={<FormulaireInscription/>}>Mon profil</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownMenu;