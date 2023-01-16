//Import image
import image1 from "../img/TiendaOnline.png"
//Import styles
import style from "../styles/card.css"

const Card = ({title, image, url}) => {
  return (
    <div className="card cards">
      <div className="card-body">
        <a className="text-decoration-none" href={url}>
          <h1 className="text-decoration-none card-title title-card">{title}</h1>
          <img src={image} />
        </a>
      </div>
    </div>
  );
};

export default Card;
