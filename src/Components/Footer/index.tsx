import styled from "styled-components";
import Menu from "../Menu";
import Face from "./../../assets/images/FacebookLogo.png";
import Insta from "./../../assets/images/InstagramLogo.png";
import Linkedin from "./../../assets/images/LinkedinLogo.png";

const FooterContainer = styled.footer`
  width: 93%;
  border-top: 1px solid #b0e0d3;
  margin: 0 auto;
  padding-top: 32px;
`;


const ButtonSocial = styled.img`
  width: 30px;
  height: 30px;
`;
const Buttons = styled.div`
  display: flex;
  gap: 40px;
  margin: 24px 0 24px 0;
`;
const Front = styled.p`
font-family: "Nunito", sans-serif;
font-size: 12px;
`

interface FooterContent {}

const Footer: React.FC<FooterContent> = () => {
  return (
    <FooterContainer>
      <Menu type="normal" selected={true} color="black"/>
      <Buttons>
        <ButtonSocial src={Face}></ButtonSocial>
        <ButtonSocial src={Insta}></ButtonSocial>
        <ButtonSocial src={Linkedin}></ButtonSocial>
      </Buttons>
      <Front>Desafio Front-end Lacrei</Front>
    </FooterContainer>
  );
};
export default Footer;
