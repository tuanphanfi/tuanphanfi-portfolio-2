import React from 'react';
import { Link } from "react-router-dom";

const index = () => {
    return (
        <footer className="bg-dark text-white pt-5 pb-4">
            <div className="row  text-left">
                <div className="col-md-2 col-lg-3 col-xl-3 mx-auto mt-3 ">
                    <h5>Tuan Phan Fi</h5>
                    <p>Web dev - Tutor for learning dev/English</p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-wieght-bold text-warning">Services</h5>
                    <p>
                        <Link className="text-decoration-none text-white" to="#">Making website</Link>
                    </p>
                    <p>
                        <Link className="text-decoration-none text-white" to="#">Tutoring Front End from Scratch</Link>
                    </p>
                    <p>
                        <Link className="text-decoration-none text-white" to="#">Tutoring speaking natural English</Link>
                    </p>
                    <p>
                        <Link className="text-decoration-none text-white" to="#">Tutoring IPA</Link>
                    </p>
                </div>

                <div className="col-md-3 col-xl-2 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Useful links</h5>
                    <p>
                        <Link className="text-decoration-none text-white" to="#">Tutorials</Link>
                    </p>
                    <p>
                        <Link className="text-decoration-none text-white" to="#">Portfolio</Link>
                    </p>
                    <p>
                        <Link className="text-decoration-none text-white" to="#">Hobbies</Link>
                    </p>
                    <p>
                        <Link className="text-decoration-none text-white" to="#">Contact</Link>
                    </p>
                </div>

                <div className="col-md-3 col-xl-2 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
                    <p>
                        <i className="fas fa-home me-3 "></i>
                        Go Vap, Ho Chi Minh City
                    </p>
                    <p>
                        <i className="fas fa-envelope me-3"></i>
                        tuanPhan.fi@gmail.com
                    </p>
                    <p>
                        <i className="fas fa-phone me-3"></i>
                        +84 393939 542
                    </p>

                </div>

                <hr className="mb-4 " />

                <div className="row d-flex justify-content-center align-items-center text-center">
                    <div className="col-md-7 col-lg-8">
                        <p>Copyright @2020 All rights reserved by:
                            <Link className="text-decoration-none text-warning" to="#"><strong> Tuan Phan Fi</strong></Link>
                        </p>
                    </div>

                    <div className="col-md-5 col-lg-4">
                        <div className="text-center text-md-right">
                            <ul className="list-inline-item">
                                <a className="text-decoration-none text-white btn-sm" style={{ "font-size": "23px" }} href="https://www.facebook.com/MRPDCT">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a className="text-decoration-none text-white btn-sm" style={{ "font-size": "23px" }} href="https://www.youtube.com/channel/UCeSSzowqVcwK6bze3LdTHQA">
                                    <i className="fab fa-youtube"></i>
                                </a>
                                <a className="text-decoration-none text-white btn-sm" style={{ "font-size": "23px" }} href="https://stackoverflow.com/users/10250632/tuan-phan">
                                    <i className="fab fa-stack-overflow"></i>
                                </a>
                                <a className="text-decoration-none text-white btn-sm" style={{ "font-size": "23px" }} href="https://github.com/tuanphanfi">
                                    <i className="fab fa-github"></i>
                                </a>

                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default index;