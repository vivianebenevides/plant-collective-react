import ProduitItem from "./ProduitItem";
import { Link } from 'react-router-dom';

const ListeProduits = ({ produits, onDelete, onEdit }) => {
    return (
        <div className="container-produit">
            <div className="container-title">
                    <h2>Liste de Produits</h2>
                    <Link className='btn-large' to="/form-produit">Ajouter un produit</Link>
            </div>
            <div>
                <ul className="container-cartes">
                {produits.map((produit) => (
                    <li className="carte" key={produit.id}>
                        <ProduitItem produit={produit} onDelete={onDelete} onEdit={onEdit} />
                    </li>
                ))}
                </ul>
            </div>
        </div>
    );
  };
  
  export default ListeProduits