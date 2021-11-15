import React from 'react';
import './Slider.css';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <div>
            <Carousel variant="light">
                <Carousel.Item className="slider">
                    <img
                        className="d-block w-100"
                        src="http://kodeforest.net/html/uoe/extra-images/slider1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="slider-text">
                        <span>The Best Learning Institution</span>
                        <h2>welcome to our university</h2>
                        <p>We Belive there is nothing more important than Education.</p>
                        <Link className="btn btn-warning btn-lg mb-5" to="/courses">Read More</Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="slider">
                    <img
                        className="d-block w-100"
                        src="http://kodeforest.net/html/uoe/extra-images/slider2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption className="slider-text">
                        <span>Opening A New World Of Education</span>
                        <h2>largest Education Institute</h2>
                        <p>We are the largest education online institute.</p>
                        <Link className="btn btn-warning btn-lg mb-5" to="/courses">Read More</Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="slider">
                    <img
                        className="d-block w-100"
                        src="http://kodeforest.net/html/uoe/extra-images/slider3.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption className="slider-text">
                        <span>New Online Courses</span>
                        <h2>We bring new online courses</h2>
                        <p>Largest Online Courses available here.</p>
                        <Link className="btn btn-warning btn-lg mb-5" to="/courses">Read More</Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;