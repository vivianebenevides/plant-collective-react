import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ProduitItem = ({ produit, onDelete, onEdit }) => {
    const handleDelete = () => {
      const shouldDelete = window.confirm('Tem certeza que deseja apagar este produto?');
      if (shouldDelete) {
        onDelete(produit.id);
      }
    };

    return (
      <div className="carte">
        <h3>{produit.nom}</h3>
        <img src={produit.photo} alt="Photo du produit" />
        <p className='carte-p'>{produit.description}</p>
        <p className='carte-p'>Prix: $ {produit.prix}</p>
        <p className='carte-p'>Catégorie: {produit.categorie}</p>
        <div className='carte-btn'>
          <button className='btn-sm' onClick={handleDelete}>Effacer</button>
          <Link to="/edit-produit">
              <button className='btn-sm' onClick={() => onEdit(produit)}>Modifier</button>
          </Link>
        </div>
      </div>
    );
};

export default ProduitItem