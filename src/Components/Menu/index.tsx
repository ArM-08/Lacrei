
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";


const MenuItems = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 64px;
  width: 320px;
  @media(max-width: 608px){
    padding-right: 0px;
  }
  
`;

interface Linkprops {
  
  color: string;
  selected: boolean;
  active: boolean;
  type: string
}
const StyledLink = styled(Link)<Linkprops>`
  text-decoration: none;
  color: ${({ active, color}) => active?  color : '#000'};
  font-family: "Nunito";
  font-size: 16px;
  
  font-weight: ${({ active, selected, type}) => active && selected ?  "bold" : type};
 &:hover{
  opacity: 0.6;
 }
`;

const MenuItem = styled.li`
list-style-type: none;
`;


interface MenuContent {
  color: string;
  selected: boolean;
  type: string

}
const Menu: React.FC<MenuContent> = (props) => {

  function getItem(label: JSX.Element, key: Number, ) {
    return {
      key: key.toString(),
      label,
    };
  }
  const location = useLocation() 
  const path = location.pathname;

  const items = [
    getItem(<StyledLink  type={props.type} selected={props.selected} color={props.color} active={path === '/'} to="/" >Home</StyledLink>, 1),
    getItem(<StyledLink type={props.type} selected={props.selected} color={props.color} active={path === '/pessoa-usuaria'} to="/pessoa-usuaria">Pessoa Usuaria</StyledLink>, 2),
    getItem(<StyledLink type={props.type} selected={props.selected} color={props.color} active={path === '/profissional' } to="/profissional">Profissional</StyledLink>, 3),
  ];

  
  return (
    <MenuItems>
      {items.map((item) => (
        <MenuItem  key={`menu-item-${item.key}`}>{item.label}</MenuItem>
      ))}
    </MenuItems>
    
  );
};
export default Menu;
