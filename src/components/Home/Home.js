import React from 'react';
import './Home.css';
import Slider from '../Slider/Slider';
import OurCourses from '../OurCourses/OurCourses';
import Category from '../Category/Category';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <OurCourses></OurCourses>
            <Category></Category>
        </div>
    );
};

export default Home;