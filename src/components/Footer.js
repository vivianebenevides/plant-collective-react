import '../style/style.css';

const Footer = () => {
    return (
      <footer>
        <div className="logo">
          <a href="/accueil">
            <img src="./img/Logo2.jpg" alt="Logo" />
          </a>
        </div>
        <div className='footer-liens'>
            <a href="#">À propos</a>
            <a href="#">Livrasion</a>
            <a href="#">FAQ</a>
        </div>
        <div className='footer-infos'>
            <p>E-mail: info@plantcollective.ca</p>
            <p>Phone: +1 (523) 453-4533</p>
            <p>Adresse: 2050 Rue des Plantes Tropicales J2L1K3 Montréal</p>
        </div>
      </footer>
    );
  };
  
  export default Footer