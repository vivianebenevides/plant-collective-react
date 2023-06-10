import PropTypes from 'prop-types'
import { useLocation }  from 'react-router-dom'
import { Link } from 'react-router-dom';

const Accueil = () => {
    return (
      <div className="header">
        <h1>Bienvenue chez Plant Collective !</h1>
        <p>Entrez dans un monde vivant et coloré !</p>
        <p>Venez faire partie de notre communauté, partager l'amour et les plantes ! Nous vous aidons à trouver la plante idéale et tout ce dont vous avez besoin pour en prendre soin, et vous pouvez aussi en faire partie.</p>
        <p>Découvrez-en plus sur notre blog et visitez notre boutique en ligne.</p>
        <Link className='btn-large' to="/produits">Voir les produits</Link>
      </div>
    );
  };
  
  export default Accueil