import React from 'react';
import MyNavBar from '../common/navBar';
import MyFooter from '../common/footer';
import Project from '../Projects'

const index = () => {
    return (
        <div>
            <MyNavBar />
            <h1>This is IT turotial</h1>
            <Project/>
            <MyFooter />


        </div>
    );
};

export default index;