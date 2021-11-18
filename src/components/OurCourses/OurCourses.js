import React from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './OurCourses.css';


const OurCourses = (props) => {
    // props.courses.length -= 8;
    const courses = props.courses;


    return (
        <div className="container our-courses my-5">
            <h3 className="sec-title mb-4">Our Courses</h3>
            <Row xs={1} md={3} className="g-4">


                {
                    courses.map(course => <Course
                        key={course.key}
                        course={course}
                    ></Course>)
                }

            </Row>
        </div>
    );
};

export default OurCourses;