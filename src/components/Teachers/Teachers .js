import React from 'react';
import './Teachers.css';
import useCourses from './../hooks/useCourses';
import Teacher from '../Teacher/Teacher';
import { Row } from 'react-bootstrap';


const Teachers = () => {
    const [courses] = useCourses();
    console.log(courses);
    return (
        <div className="container my-5">
            <Row xs={1} md={3} className="g-4">


                {
                    courses.map(course => <Teacher
                        key={course.key}
                        course={course}
                    ></Teacher>)
                }

            </Row>
        </div>
    );
};

export default Teachers;