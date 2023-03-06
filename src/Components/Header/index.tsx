import styled from "styled-components";
import Menu from "../Menu";

const NavBar = styled.nav`
  width: 100%;
  height: 60px;
  left: 0px;
  top: 0px;
  background: #eeeeee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  line-height: 44px;
  font-size: 32px;
  color: #018762;
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  margin-left: 64px;
  text-decoration: none;
`;

interface HeaderContent {
}

const Header: React.FC<HeaderContent> = () => {
  
  return (
    <NavBar>
      <Logo href="/">Lacrei</Logo>
      <Menu></Menu>
    </NavBar>
  );
};

export default Header;
