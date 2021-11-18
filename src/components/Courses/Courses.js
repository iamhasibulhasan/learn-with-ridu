import React from 'react';
import './Courses.css';
import { Row } from 'react-bootstrap';
import useCourses from './../hooks/useCourses';
import AllCourses from './../AllCourses/AllCourses';


const Courses = () => {
    const [courses, setCourses] = useCourses();
    return (
        <div className="container our-courses my-5">
            <Row xs={1} md={1} className="g-4">


                {
                    courses.map(course => <AllCourses
                        key={course.key}
                        course={course}
                    ></AllCourses>)
                }

            </Row>
        </div>
    );
};

export default Courses;