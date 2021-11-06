import React from 'react';
import Banner from '../Banner/Banner';
import Best from '../Best/Best';
import Cards from '../Cards/Cards';
import Offer from '../Offer/Offer';
import Comment from '../Comment/Comment';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Cards/>
            <Offer/>
            <Best/>
            <Comment/>
        </div>
    );
};

export default Home;