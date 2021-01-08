import React from 'react';
import LeftNav from "../components/LeftNav";
import ListeHabitation from "../components/ListeHabitation";

const Home = () => {
    return (
        <div className="home">
            <LeftNav/>
            <div className="main">
                <div class="row">
                    <p class="text-center">
                        Au sein de l'AgenceJS, vous pouvez retrouver tous les logements que nous proposons. Appartement, maison ou bien villa,
                        vous avez l'embaras du choix. N'hésitez pas : rentrez votre code postal, et naviguez sur notre site pour découvrir
                        les logements disponibles dans votre département. N'hésitez pas à nous contacter en cas de problèmes,
                        nous nous tenons à votre entière disposition.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
