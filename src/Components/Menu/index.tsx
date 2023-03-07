
import styled from "styled-components";


const MenuItems = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  width: 320px;
`;

interface Linkprops {
  active: boolean
}
const Link = styled.a<Linkprops>`
  text-decoration: none;
  color: ${({ active }) => active ?  '#018762' : 'black'};
  font-family: "Nunito";
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
`;

const MenuItem = styled.li`
list-style-type: none;
font-weight: bold;
  
`;


interface MenuContent {
}
const Menu: React.FC<MenuContent> = () => {

  function getItem(label: JSX.Element, key: Number, ) {
    return {
      key: key.toString(),
      label,
    };
  }
  const HomeActive = location.pathname === '/'
  const PessoaActive = location.pathname === '/pessoa-usuaria'
  const ProfissionalActive = location.pathname === '/profissional'

  const items = [
    getItem(<Link active={HomeActive} href="/" >Home</Link>, 1),
    getItem(<Link active={PessoaActive} href="/pessoa-usuaria">Pessoa Usuaria</Link>, 2),
    getItem(<Link active={ProfissionalActive} href="/profissional">Profissional</Link>, 3),
  ];

  
  return (
    <MenuItems>
      {items.map((item) => (
        <MenuItem key={`menu-item-${item.key}`}>{item.label}</MenuItem>
      ))}
    </MenuItems>
    
  );
};
export default Menu;
