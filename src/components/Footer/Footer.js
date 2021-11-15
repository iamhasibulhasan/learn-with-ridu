import React from 'react';
import './Footer.css';
import img1 from '../../media/instagram/instagram-1.jpg';
import img2 from '../../media/instagram/instagram-2.jpg';
import img3 from '../../media/instagram/instagram-3.jpg';
import img4 from '../../media/instagram/instagram-4.jpg';
import img5 from '../../media/instagram/instagram-5.jpg';
import img6 from '../../media/instagram/instagram-6.jpg';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="up-footer">
                <div className="container d-lg-flex justify-content-between">
                    <div className="footer-style">
                        <h2>INFORMATION</h2>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/courses">Courses</Link></li>
                            <li><Link to="/teachers">Teachers</Link></li>
                            <li><Link to="/contact-us">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="footer-style">
                        <h2>STUDENT HELP</h2>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/courses">Courses</Link></li>
                            <li><Link to="/teachers">Teachers</Link></li>
                            <li><Link to="/contact-us">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="instagram">
                        <h2>INSTAGRAM</h2>
                        <ul>
                            <li><a href="/"><img src={img1} alt="" /></a></li>
                            <li><a href="/"><img src={img2} alt="" /></a></li>
                            <li><a href="/"><img src={img3} alt="" /></a></li>
                            <li><a href="/"><img src={img4} alt="" /></a></li>
                            <li><a href="/"><img src={img5} alt="" /></a></li>
                            <li><a href="/"><img src={img6} alt="" /></a></li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h2>CONTACT</h2>
                        <ul>
                            <li>Nikunja-2, Khilkhet, Dhaka-1229</li>
                            <li>Phone : +8801 747979703</li>
                            <li>Fax : 5 (012) 4565 78</li>
                            <li>Email :  Info@info.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="down-footer">
                <div className="container d-lg-flex align-items-center justify-content-between">
                    <div>
                        <img src={logo} />
                    </div>
                    <div className="copyright">
                        <p>&copy; All Rights Reserved. Powered By <a target="_blank" href="https://relaxed-goldwasser-08852e.netlify.app/">Hasibul Hasam</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;