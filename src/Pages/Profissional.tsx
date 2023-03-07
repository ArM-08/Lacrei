import {
  PageContainer,
  FirstContainer,
  Title,
  Subtitle,
  SecondContainer,
  ImgPage,
} from "./styled";
import ImgPessoaUsuaria from "./../assets/images/ImgProfissional.png";
interface ProfissionalContent {}

const Profissional: React.FC<ProfissionalContent> = () => {
  return (
    <PageContainer>
      <FirstContainer>
        <Title>Profissional</Title>
        <Subtitle border={true}>
          A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado
          por profissionais de qualidade e que atendam às suas necessidades de
          forma segura e acolhedora.
        </Subtitle>
      </FirstContainer>
      <SecondContainer>
        <ImgPage src={ImgPessoaUsuaria}></ImgPage>
      </SecondContainer>
    </PageContainer>
  );
};

export default Profissional;
