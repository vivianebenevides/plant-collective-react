import { useState, useEffect} from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar'
import Accueil from './components/Accueil'
import ListeProduits from './components/ListeProduits';
import FormProduit from './components/FormProduit';
import Footer from './components/Footer';
import './/style/style.css';

function App() {

  //1 - Global

  const [produits, setProduits] = useState([])

  const [produitToEdit, setProduitToEdit] = useState(null);

  useEffect(()=> {
    const getProduits = async () => {
      const produitsFromServer = await fetchProduits()
      setProduits(produitsFromServer)
    }
    getProduits()
  }, [])

  const fetchProduits = async () => {
    const res = await fetch('http://localhost:5000/produits')
    const data = await res.json()
    //console.log(data)
    return data
  }

  // 2 - Supprimer

   const onDelete = async (id) => {
    await fetch(`http://localhost:5000/produits/${id}`, {
      method: 'DELETE',
    })
        setProduits(produits.filter((produit) => produit.id !== id))
    }

  // 3 - Modifier
  
  //fetch Task
  const fetchProduit = async (id) => {
    const res = await fetch(`http://localhost:5000/produits/${id}`)
    const data = await res.json()
    //console.log(data)
    return data
  }

  const onEdit = async (id) => { 
    const produitToEdit = await fetchProduit(id)
    //console.log(produitToEdit);
    const updatedProduct = { ...produitToEdit} 
    //console.log(updatedProduct);

    const res = await fetch(`http://localhost:5000/produits/${id}`,{
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updatedProduct)
  })
  const data = await res.json()
    setProduitToEdit(id);
  }
  
  // 4 - Ajouter

  const addProduit = async (produit) => {
    const res = await fetch('http://localhost:5000/produits',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(produit)
    })
    const newProduit = await res.json()

    setProduits([...produits, newProduit])
   }
  

  return (
    <BrowserRouter>
      <div id="root">
        <Navbar />
        <div className="container">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/produits" element={<ListeProduits produits={produits} onDelete={onDelete} onEdit={onEdit} />} />
          <Route path="/form-produit" element={<FormProduit onAdd={addProduit} />} />
          <Route path="/edit-produit" element={<FormProduit onAdd={addProduit} onEdit={onEdit} produitToEdit={produitToEdit} />} />
        </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;