import styled from "styled-components";


const NavBar = styled.nav`
position: absolute;
width: 100%;
height: 60px;
left: 0px;
top: 0px;
background: #EEEEEE;
display: flex;
justify-content: space-between;
align-items: center;
`

const Logo = styled.h1`
line-height: 44px;
font-size: 32px;
color: #018762;
font-family: 'Nunito', sans-serif;
font-weight: 700;
margin-left: 64px;
`
const Menu = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;
gap: 40px;
width: 327px;
height: 22.37px;
margin-right: 64px;
`
const MenuItem = styled.h3`
font-family: 'Nunito';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 22px;
color: ${props => props.color || '#000' };
`

interface HeaderProps{}

const Header: React.FC<HeaderProps> = () =>{
    return(
        <NavBar>
            <Logo>Lacrei</Logo>
            <Menu>
                <MenuItem color="#018762">Home</MenuItem>
                <MenuItem>Pessoa Usuária</MenuItem>
                <MenuItem>Profissional</MenuItem>
            </Menu>
        </NavBar>
    )
}

export default Header;