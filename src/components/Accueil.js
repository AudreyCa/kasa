import '../styles/Accueil.scss';
import data from './../assets/bdd-projet6.json';
import Background2 from './../assets/Background2.png';
import { NavLink } from 'react-router-dom';


const Accueil = () => {

  const listLoc = data.map((location, index) => {
    return (
      <NavLink to={`/logement/${location.id}`} className="cardLoc" key={`${location}-${index}`}>
        <img src={location.cover} alt="cover de la location" />
        <p>{location.title}</p>
      </NavLink>
    )
  });

  return (
    <>
      <div className="containerAcc">
        <div className="headerAcc">
          <img src={Background2} alt="paysage de falaise" />
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <div className="listeLocation">
          {listLoc}
        </div>

      </div>
    </>
  );
}

export default Accueil;
