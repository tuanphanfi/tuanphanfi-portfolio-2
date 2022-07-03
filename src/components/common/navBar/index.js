import React, { useState } from 'react';

import { Link } from "react-router-dom";

const Index = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    let url = 'https://lh3.google.com/u/0/d/1LSo58oZZyBXnWTylmxArJKDdRSut8kXp=w957-h898'
    return (
        <>
            <nav className="navbar  navbar-expand-sm navbar-light bg-dark navbar-dark">
                <Link
                    className="navbar-brand mb-0 h1" to="#">
                    <img src={url} alt="" height="100" />
                </Link>

                <button
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    className="navbar-toggler"
                    aria-controls="navbarNav"
                    aria-expanded={!isNavCollapsed ? true : false}
                    aria-label="Toggle navigation"
                    onClick={handleNavCollapse}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item active ">
                            <Link className="nav-link text-warning" to="/">Home</Link>
                        </li>
                        <li className="nav-item active ">
                            <Link className="nav-link  text-warning" to="/it-turotial">It tutorial</Link>
                        </li>
                        <li className="nav-item active ">
                            <Link className="nav-link  text-warning" to="/eng-turotial">English tutorial</Link>
                        </li>
                        <li className="nav-item active ">
                            <Link className="nav-link disabled" to="/exercise">Exercise</Link>
                        </li>

                    </ul>
                </div>
            </nav>

        </>
    );
};

export default Index;