import Footer from "../components/Footer";
import Navigation from "../components/Navigation";


function Page404 () {
    return (
      <div>
        <Navigation />
        <div className="error-img">
        <img src="./404.png" alt="erreur 404" />
        </div>
        <h1 class="error-title">Oups! La page que vous demandez n'existe pas. </h1>
        <div className="return-home">
        <a href="/">
        <p>Retourner sur la page d'accueil</p>
        </a>
        </div>
        <Footer />
      </div>
    );
  }

  export default Page404;
