import React from 'react';
import MyNavBar from '../../common/navBar';
import MyFooter from '../../common/footer';

const index = () => {
    return (
        <div className="">
            <MyNavBar />
            {/* -------------------------------------- */}
            <div className="container">
                <h1>IELTS Speaking</h1>
                <p>Speaking part 1 - Descriptive</p>
                <p>Speaking part 2 - Narrative</p>
                <p>Speaking part 3 - Arguementative</p>
                <h2>Vocabulary Builder</h2>
                <p>describe - description - descriptive</p>
                <p>For example: milestone. miles - stone</p>
                <h4>How to build a word</h4>
                <ul>
                    <li>To add a prefix</li>
                    <li>To combine 2 words</li>
                </ul>

                <h2> Speaking P1 - Descriptive</h2 >
                <p>Topic: hobby, place you live</p>

                <h2>Strategy</h2>
                <p> Building your <strong>Language Skills</strong> or <strong>Testing Skills</strong></p>
            </div>
            {/* -------------------------------------- */}
            <MyFooter />


        </div >
    );
};

export default index; 