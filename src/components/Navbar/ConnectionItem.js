import styled from 'styled-components';
import StyledButton from '../StyledBouton';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa'

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
      <ConnectionButton className="connection-item" icon ={<FaUserCircle />} text={connectionText}> </ConnectionButton>
    </ConnectionItemWrapper>
  );

}

export default ConnectionItem;


