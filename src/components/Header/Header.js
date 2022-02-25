import ConnectionItem from '../Navbar/ConnectionItem';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import DropdownMenu from '../Navbar/NavbarItemDropdown';
import HomePage from '../../pages/Home/home';

const HeaderContainer = styled.header`
display: flex;
align-items: center;
background-color: #fe7968;
padding: .7rem .7rem;
`;
const Logo = styled.img`
margin-right: 1em;
`
function Header() {
    return (
        <HeaderContainer>
        <Logo src={logo} alt="Logo" />
        <DropdownMenu />
        <ConnectionItem />
        </HeaderContainer>
    )
}
export default Header;