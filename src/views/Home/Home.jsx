import ProductContainer from "../../components/ProductContainer/ProductContainer"
import { useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import Unirse from "../../components/Unirse/Unirse";
// import GestionBotones from "../../components/GestionBotones/GestionBotones";
import Carousel from "../../components/Carrusel/Carrusel";
import image1 from '../../assets/barney.png';
import image2 from '../../assets/bsf.png';
import image3 from '../../assets/kannabia.png';
import image4 from '../../assets/rkiem.png';
// import PreguntasFrecuentes from "../../components/PreguntasF/PreguntasF";
import Footer from "../../components/Footer/Footer";
import Sheet  from "../../components/Sheet/Sheet";
const Home = () => {
  const dispatch = useDispatch();
useEffect(() => {
}, [])

const carouselImages = [image1, image2, image3, image4];

  return (
    <div>
      <Unirse/>
      {/* <GestionBotones/> */}
      <Carousel images={carouselImages} />
      <ProductContainer/>
      {/* <PreguntasFrecuentes/> */}
      <Sheet/>
      <Footer/>
    </div>
  ) 
}

export default Home