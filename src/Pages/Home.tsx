
import { PageContainer, FirstContainer, Title, Subtitle, Buttons, Button, SecondContainer, ImgPage } from "./styled";
import ImgHome from "./../assets/images/ImgHome.png"

interface HomePage{}


const Home: React.FC<HomePage> = ()=> {
    return (
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

export default Home;