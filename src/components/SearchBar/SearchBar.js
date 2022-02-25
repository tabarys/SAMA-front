import StyledButton from '../StyledBouton';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs'

const searchText = 'Rechercher';

const StyledInput = styled.input`
    margin: 15px;
    text-align: center;
    align-content: center;
    align-items: center;
    font-size: 1.3rem;
    width: 200px;
`
const SearchBarWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: solid;
    font-size: medium;
    margin: 5px;
`

export default function SearchBarAPI(props) {

    return (
        <SearchBarWrapper  className='d-flex'>
            <label>Départ</label>
            <StyledInput placeholder="Ville de départ" className='col-md-4' />
            <label>Arrivée</label>
            <StyledInput placeholder="Ville d'arrivée" className='col-md-4' />
            <label>Date aller</label>
            <StyledInput placeholder="Aller" className='col-md-4' />
            <label>Date retour</label>
            <StyledInput placeholder="Retour" className='col-md-4' />
            <StyledButton className='col-md-4' icon={<BsSearch />} text={searchText}></StyledButton>
        </SearchBarWrapper>
    )
}
