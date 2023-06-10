import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function FormProduit({ onAdd, produitToEdit }) {
  const [nom, setNom] = useState('');
  const [description, setDescription] = useState('');
  const [prix, setPrix] = useState('');
  const [categorie, setCategorie] = useState('');
  const [alertMessage, setAlertMessage] = useState('');


  useEffect(() => {
    if (produitToEdit) {
      setNom(produitToEdit.nom);
      setDescription(produitToEdit.description);
      setPrix(isNaN(produitToEdit.prix) ? '' : produitToEdit.prix);
      setCategorie(produitToEdit.categorie);
    }
  }, [produitToEdit]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!nom || !description || !prix || !categorie) {
      alert('Veuillez remplir tous les champs!');
      return;
    }

    const updatedProduct = {
      ...produitToEdit,
      nom,
      description,
      prix: parseFloat(prix),
      categorie,
    };

    onAdd(updatedProduct);

    setNom('');
    setDescription('');
    setPrix('');
    setCategorie('');
    setAlertMessage('Le produit a été ajouté/modifié avec succès.');

  };

  return (
    <div className="container-produit align-center">
      {alertMessage && <div className="alert">{alertMessage}</div>}
      <div className="form-title">
        <h2>{produitToEdit ? 'Modifier un produit' : 'Ajouter un produit'}</h2>
      </div>
      <form className='container-form' onSubmit={onSubmit}>
        <div className='item-form'>
          <label>Nom</label>
          <input
            type="text"
            placeholder="Ajouter un nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div className='item-form'>
          <label>Prix</label>
          <input
            type="number"
            placeholder="Ajouter un prix"
            value={prix} min="1"
            onChange={(e) => setPrix(e.target.value)}
          />
        </div>
        <div className='item-form'>
          <label>Catégorie</label>
          <input
            type="text"
            placeholder="Ajouter une catégorie"
            value={categorie}
            onChange={(e) => setCategorie(e.target.value)}
          />
        </div>
        <div className='item-form'>
          <label>Description</label>
          <textarea rows="4"
            placeholder="Ajouter une description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='form-btn'>
          <button className='btn-sm' type="submit">
            {produitToEdit ? 'Modifier' : 'Ajouter'}
          </button>
        </div>
        
      </form>
      <Link className='lien' to="/produits">Retour à la liste des produits</Link>
    </div>
  );
}

export default FormProduit;
