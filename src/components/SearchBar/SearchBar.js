import StyledButton from '../StyledBouton';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs'

const searchText = 'Rechercher';

const StyledInput = styled.input`
    text-align: center;
    font-size: 1.5rem;
`
const SearchBarWrapper = styled.div`
    displya:flex;
    justify-content:center;
    align-items: center;
    border: solid;
`

export default function SearchBarAPI(props) {

    return (
        <SearchBarWrapper  className='d-flex justify-content-around'>
            <label>Départ</label>
            <StyledInput placeholder="Ville de départ" className='col-md-4' />
            <label>Arrivée</label>
            <StyledInput placeholder="Ville d'arrivée" className='col-md-4' /><br></br>
            <label>Date aller</label>
            <StyledInput placeholder="Date aller" className='col-md-4' />
            <label>Date retour</label>
            <StyledInput placeholder="Date retour" className='col-md-4' />
            <StyledButton className='col-md-4' icon={<BsSearch />} text={searchText}></StyledButton>
        </SearchBarWrapper>
    )
}
