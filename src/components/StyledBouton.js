import React from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const Bouton = styled(Button)`
height: max-content;
width: auto;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;

&{font-size: 1.5em;
outline:none;
}
&:focus{
  box-shadow: none;
}`;


function StyledButton(props) {

  return (
    <Bouton variant="outline-dark">{props.icon}{props.text} </Bouton>
  )
}

export default StyledButton;