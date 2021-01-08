import React from 'react';
import LeftNav from "../components/LeftNav";
import ListeHabitation from "../components/ListeHabitation";
import Footer from "../components/Footer";


const Habitation = () => {
    return (
        <div className="home">
            <LeftNav/>
            <div className="main">
                <ListeHabitation/>
            </div>
        </div>
    );
};

export default Habitation;
