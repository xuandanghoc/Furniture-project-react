import Banner from './Banner/Banner';
import React from 'react';
import Category from './Category/Category';
import ProductHome from './Product/ListProduct';
import RoomInspiration from './RoomInspiration/RoomInspiration';
import Share from './ShareSetup/Share';
const HomePage = () => {
    return (
        <div className="">
            <Banner />
            <Category />
            <ProductHome />
            <RoomInspiration />
            <Share />
        </div>
    )
}

export default HomePage;
