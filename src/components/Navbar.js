import '../style/style.css';

const Navbar = () => {
    return (
    <nav className='nav-bar'>
        <div className="logo">
          <a href="/accueil">
            <img src="./img/Logo.jpg" alt="Logo" />
          </a>
        </div>
        <ul className="nav-links">
          <li><a href="/accueil">Accueil</a></li>
          <li><a href="/produits">Produits</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
    </nav>
    );
  };
  
  export default Navbar