
import styled from "styled-components";
import Menu from "../Menu";

const NavBar = styled.header`
  width: 100%;
  min-height: 60px;
  background: #eeeeee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media(max-width: 608px){
    justify-content: center;
  }
  
`;

const Logo = styled.a`
  line-height: 44px;
  font-size: 32px;
  color: #018762;
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  text-decoration: none;
  padding: 8px 64px;
`;

interface HeaderContent {
}

const Header: React.FC<HeaderContent> = () => {
  return (
    <NavBar>
      <Logo href="/">Lacrei</Logo>
      <Menu type="bold" selected ={true} color="#018762"/>
    </NavBar>
  );
};

export default Header;
