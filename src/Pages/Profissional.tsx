import {
  PageContainer,
  FirstContainer,
  Title,
  Subtitle,
  SecondContainer,
  ImgPage,
} from "./styled";
import ImgPessoaUsuaria from "./../assets/images/ImgProfissional.png";
import { useEffect } from "react";
interface ProfissionalContent {}

const Profissional: React.FC<ProfissionalContent> = () => {
  useEffect(() => {
    document.title = 'Profissional | Desafio Lacrei ';
  }, []);
  return (
    <PageContainer>
      <FirstContainer>
        <Title>Profissional</Title>
        <Subtitle border={true}>
        Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+
        </Subtitle>
      </FirstContainer>
      <SecondContainer>
        <ImgPage src={ImgPessoaUsuaria}></ImgPage>
      </SecondContainer>
    </PageContainer>
  );
};

export default Profissional;
