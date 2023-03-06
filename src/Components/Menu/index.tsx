import styled from "styled-components";

const MenuItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 40px;
  width: 327px;
  height: 22.37px;
  margin-right: 64px;
`;
const Link = styled.a`
  text-decoration: none;
  color: black;
`;

const MenuItem = styled.li`
list-style-type: none;
  cursor: pointer;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  
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
  const items = [
    getItem(<Link href="/" >Home</Link>, 1),
    getItem(<Link href="/pessoausuaria">Pessoa Usuaria</Link>, 2),
    getItem(<Link href="/profissional">Profissional</Link>, 3),
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
