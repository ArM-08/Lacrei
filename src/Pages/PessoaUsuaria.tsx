import {
  PageContainer,
  FirstContainer,
  Title,
  Subtitle,
  SecondContainer,
  ImgPage,
} from "./styled";
import ImgPessoaUsuaria from "./../assets/images/ImgPessoaUsuaria.png";

interface PessoaUsuariaContent {}

const PessoaUsuaria: React.FC<PessoaUsuariaContent> = () => {
  return (
    <PageContainer>
      <FirstContainer>
        <Title>Pessoa Usuária</Title>
        <Subtitle>
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
export default PessoaUsuaria;
