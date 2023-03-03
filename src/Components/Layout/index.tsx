import styled from "styled-components";
import ImgHome from "./../../assets/images/ImgHome.png"


const PageContainer = styled.div`
display: flex;
align-items: center;
width: 90%;
margin: 0 auto;

`

const FirstContainer = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const SecondContainer = styled.div`
width: 50%;
height: 720px;
display: flex;
align-items: center;
justify-content: center;
`



const Title = styled.h1`
width: 453px;
font-family: 'Nunito', sans-serif;
line-height: 65px;
font-size: 48px;
`
const Subtitle = styled.p`
width: 403px;
height: 66px;
font-family: 'Nunito';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 33px;
color: #515151;
margin-top: 48px;
margin-bottom: 32px;
`

const Buttons = styled.div`
display: flex;
gap: 60px;
`
const Button = styled.button`
cursor: pointer;
width: 192px;
height: 48px;
left: 325px;
top: 400px;
background: ${props => props.theme || '#FFF'};
border: 1px solid #018762;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;
font-family: 'Nunito';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;
color:  ${props => props.color || '#FFF'}
`

const ImgPage = styled.img``



interface LayoutPage{}

const Layout: React.FC<LayoutPage> = () => {
    return(
        <PageContainer>
        <FirstContainer>
        <Title>Boas vindas a Lacrei Saúde</Title>
        <Subtitle>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</Subtitle>
        <Buttons>
        <Button theme= "#018762"color="#FFF">Pessoa Usuária</Button>
        <Button color="#018762">Profissional</Button>
        </Buttons>
        </FirstContainer>
        <SecondContainer>
        <ImgPage src={ImgHome}></ImgPage>
        </SecondContainer>
        </PageContainer>
    )
}

export default Layout;