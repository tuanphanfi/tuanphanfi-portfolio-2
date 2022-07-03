import React from 'react';
import MyNavBar from '../common/navBar';
import MyFooter from '../common/footer';
import { Link } from "react-router-dom";

const index = () => {
    return (
        <div>
            <MyNavBar />
            {/* -------------------------------------- */}
            <Link to="/eng-turotial/ielts-speaking"><h1>IELTS Speaking</h1></Link>
            
            
            <p>Speaking part 1 - Descriptive</p>
            <p>Speaking part 2 - Narrative</p>
            <p>Speaking part 3 - Arguementative</p>

            <Link to="/eng-turotial/vocab-builder"><h2>Vocabulary Builder</h2></Link>
           
            
            <p>describe - description - descriptive</p>
            <p>For example: milestone. miles - stone</p>
            <h4>How to build a word</h4>
            <ul>
                <li>To add a prefix</li>
                <li>To combine 2 words</li>
            </ul>

            <h2> Speaking P1 - Descriptive</h2 >
            <p>Topic: hobby, place you live</p>

            <Link to="/c"> <h2>Strategy</h2></Link>
           
            <p> Building your <strong>Language Skills</strong> or <strong>Testing Skills</strong></p>
            {/* -------------------------------------- */}
            <MyFooter />


        </div >
    );
};

export default index; 