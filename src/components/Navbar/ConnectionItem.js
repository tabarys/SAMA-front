import styled from 'styled-components';
import StyledButton from '../StyledBouton';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

const connectionText = 'Se connecter';
const ConnectionButton = styled(StyledButton)`
  margin-left: auto;
    &::before{
    }
    `;
const ConnectionItemWrapper = styled.div`
  margin-left: auto;
`
function ConnectionItem() {
  return (
    
    <ConnectionItemWrapper className='connection-item0'>
      <nav>
        <NavLink to="/connexion">
          <ConnectionButton className="connection-item" icon ={<FaUserCircle />} text={connectionText}/>
        </NavLink> 

      </nav>
    </ConnectionItemWrapper>
    
  );
}
export default ConnectionItem;


