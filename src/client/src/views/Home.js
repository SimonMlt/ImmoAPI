import React from 'react';
import LeftNav from "../components/LeftNav";
import Footer from "../components/Footer";
import ListeHabitation from "../components/ListeHabitation";

const Home = () => {
    return (
        <div className="home">
            <LeftNav/>
            <div className="main">
                <div className="home-header">
                    <h1 className="home-title">Bienvenue chez AgenceJS !</h1>
                    <img src="./img/villa.jpg" className="home-img"/>
                    <p className="home-txt">
                        Au sein de l'AgenceJS, vous pouvez retrouver tous les logements que nous proposons. Appartement, maison ou bien villa,
                        vous avez l'embaras du choix. Trouvez le logement qui correspond à vos attendre et à vos besoin, au meilleur prix.
                        Notre tout nouveau site internet vous guidera dans votre recherche pour trouver le logement de vos rêves.
                        N'hésitez pas à nous contacter en cas de problèmes, nous nous tenons à votre entière disposition.
                    </p>
                </div>
                <Footer/>
            </div>

        </div>
    );
};

export default Home;
