//Import images
import image1 from "../img/TiendaOnline.png";
import image2 from "../img/Dashboard.png";
import image3 from "../img/Game.png";
import image4 from "../img/Tetris.png";
import image5 from "../img/Calculator.png";
import image6 from "../img/IconWebPage2.png";
import image7 from "../img/IconWebPage3.png";
import image8 from "../img/IconWebPage4.png";
//Import components
import Card from "./Card";


//Array with the info in every card
const cards = [
  {
    id: 1,
    title: "Tienda Online",
    image: image1,
    url: "https://real-client.vercel.app/home",
  },
  {
    id: 2,
    title: "Dashboard de criptomonedas",
    image: image2,
    url: "https://dashboard-criptos.vercel.app/",
  },
  {
    id: 3,
    title: "Juego online",
    image: image3,
    url: "https://mortal-dev-theta.vercel.app/",
  },
  {
    id: 4,
    title: "Tetris",
    image: image4,
    url: "https://jesusocampo1105.github.io/Tetris/",
  },
  {
    id: 5,
    title: "Calculadora funcional",
    image: image5,
    url: "https://jesusocampo1105.github.io/Calculadora/",
  },
  {
    id: 6,
    title: "Pagina web de compañia",
    image: image6,
    url: "https://sabujcha-jo.netlify.app/",
  },
  {
    id: 7,
    title: "restructuracion pagina web Zshop",
    image: image7,
    url: "https://real-client.vercel.app/home",
  },
  {
    id: 8,
    title: "Clonación pagina web Deezer",
    image: image8,
    url: "https://deezern8mt.vercel.app/",
  },
];

const Cards = () => { 
  console.log(cards)
  return (
    <div className="container">
      <div className="row">
        {
          cards.map(cards =>
            (<div className="col-md-3 card-1 "key={cards.id}>
            <Card title={cards.title} image={cards.image} url={cards.url}/>
          </div>))
        }
      </div>
    </div>
  );
};

export default Cards;
