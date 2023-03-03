import styled from "styled-components";
import Face from "./../../assets/images/FacebookLogo.png"
import Insta from "./../../assets/images/InstagramLogo.png"
import Linkedin from "./../../assets/images/LinkedinLogo.png"
const FooterContainer = styled.footer`
width: 90%;
border-top: 1px solid #B0E0D3;
margin: 0 auto;
`

const MenuItem = styled.h3`
font-family: 'Nunito';
font-style:  ${props => props.theme|| ' normal' }
font-weight: 700;
font-size: 16px;
line-height: 22px;
color: ${props => props.color || ' #1F1F1F' };
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
margin-top: 32px;
`
const ButtonSocial = styled.img`
width: 30px;
height: 30px;
`
const Buttons = styled.div`
display: flex;
gap: 40px;
margin: 24px 0 24px 0;`


interface FooterContent{
}

const Footer: React.FC <FooterContent> =() => {
return(
    <FooterContainer>
        <Menu>
            <MenuItem theme="bold">Home</MenuItem>
            <MenuItem>Pessoa Usuária</MenuItem>
            <MenuItem>Profissional</MenuItem>
        </Menu>
        <Buttons>
    <ButtonSocial src={Face}></ButtonSocial>
    <ButtonSocial src={Insta}></ButtonSocial>
    <ButtonSocial src={Linkedin}></ButtonSocial>
    </Buttons>
    </FooterContainer>
)
}
export default Footer;