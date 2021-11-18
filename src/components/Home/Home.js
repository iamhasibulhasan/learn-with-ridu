import React from 'react';
import './Home.css';
import Slider from '../Slider/Slider';
import OurCourses from '../OurCourses/OurCourses';
import Category from '../Category/Category';
import useCourses from './../hooks/useCourses';


const Home = () => {
    const [courses, setCourses] = useCourses();

    // console.log(courses);
    // courses.length -= 2;
    courses.splice(3);
    return (
        <div>
            <Slider></Slider>
            <OurCourses
                courses={courses}
            ></OurCourses>
            <Category></Category>
        </div>
    );
};

export default Home;