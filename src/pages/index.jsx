import { Button } from '../components/Buttons/';
import { Cards } from '../components/Cards';
import TemplateHomePage from '../templates/HomePage/';
/* import CameraIcon from '../assets/icons/cameraIcon.png'; */
import MapIconG from '../assets/icons/localGreenIcon.png';
import Lar from '../assets/images/LarMocas.png';

const HomePage = () => {
  return (
    <>
      <TemplateHomePage />
      <Button text="Cadastrar" type="purple"></Button>
      <Cards
        img={Lar}
        title="Lar das Moças Cegas"
        icn={MapIconG}
        local="Gonzaga, Santos/SP"
        text="Ver Mais"
        type="pink"
      ></Cards>
    </>
  );
};

export default HomePage;
