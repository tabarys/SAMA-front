import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiFacebook } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'


const FooterWrapper = styled.footer`
background-color: #fe7968;
margin-top: auto;
padding: 1.5rem 1.5rem;
display: flex;
justify-content:center;
align-items: center;
gap: 13rem;
font-size: 1.5rem;
border-radius: 10px 10px 0 0;
`




export default function Footer() {

    return(

        <FooterWrapper className="footer-wrapper"> <FiFacebook className="footer-icon"/> <FiTwitter className="footer-icon"/> <FiInstagram className="footer-icon"/></FooterWrapper>
    )
}