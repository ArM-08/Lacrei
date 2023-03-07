
import styled from "styled-components";
import Menu from "../Menu";

const NavBar = styled.header`
  width: 100vw;
  height: 60px;
  background: #eeeeee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 8px 64px;
`;

const Logo = styled.a`
  line-height: 44px;
  font-size: 32px;
  color: #018762;
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  text-decoration: none;
`;

interface HeaderContent {
}

const Header: React.FC<HeaderContent> = () => {
  return (
    <NavBar>
      <Logo href="/">Lacrei</Logo>
      <Menu/>
    </NavBar>
  );
};

export default Header;
