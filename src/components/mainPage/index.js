import React from 'react';
import { Link } from "react-router-dom";

const index = () => {
    return (
        <div>
            <h1>How to upload into a respository in GITHUB:</h1>

            <ul>
                <li>
                    <Link to="/">Home</Link>

                </li>
                <li>
                    <Link to="/turotialPage">Github tutorial</Link>
                </li>
            </ul>

        </div>
    );
};

export default index;