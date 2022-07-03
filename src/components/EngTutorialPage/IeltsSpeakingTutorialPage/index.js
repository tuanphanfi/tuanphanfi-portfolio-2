import React from 'react';
import MyNavBar from '../../common/navBar';
import MyFooter from '../../common/footer';
// import Protect from 'react-app-protect'
// import 'react-app-protect/dist/index.css'

const index = () => {
    return (
        <div>
            <MyNavBar />
            {/* -------------------------------------- */}
            <div className="container">

                <h1>IELTS Speaking</h1>
                <p>Speaking part 1 - Descriptive</p>
                <p>Speaking part 2 - Narrative</p>
                <p>Speaking part 3 - Arguementative</p>

                <h2> Speaking P1 - Descriptive</h2 >
                <p>Topic: hobby, place you live</p>

                <h2> Speaking P2 - Descriptive</h2 >
                <p>Topic: hobby, place you live</p>

                <h2> Speaking P3 - Descriptive</h2 >
                <p>Topic: hobby, place you live</p>

                <h2>Strategy</h2>
                <p> Building your <strong>Language Skills</strong> or <strong>Testing Skills</strong></p>
            </div>

            <h1>Test protect</h1>
            {/* <Protect sha512='EE26B0DD4AF7E749AA1A8EE3C10AE9923F618980772E473F8819A5D4940E0DB27AC185F8A0E1D5F84F88BC887FD67B143732C304CC5FA9AD8E6F57F50028A8FF'>
                <div>Content</div>
            </Protect> */}
            {/* -------------------------------------- */}
            <MyFooter />


        </div >
    );
};

export default index; 