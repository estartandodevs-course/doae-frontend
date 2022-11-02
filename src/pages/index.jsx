import { Button } from '../components/Buttons/styles';
import TemplateHomePage from '../templates/HomePage/';

const HomePage = () => {
  return (
    <>
      <TemplateHomePage />
      <Button icon url={'./icons/cameraIcon.png'}>
        BOTÃO PRIMÁRIO
      </Button>
      <Button purple>Primário</Button>
      <Button pink>Primário</Button>
      <Button secondary>Secundário</Button>
      <Button disable>Desabilitado</Button>
    </>
  );
};

export default HomePage;
