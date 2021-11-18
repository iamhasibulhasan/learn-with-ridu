import React from 'react';
import './Teacher.css';
import { Col, Card } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';


const Teacher = (props) => {
    const { teacher_img, course_teacher, rating } = props.course;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={teacher_img} />
                <Card.Body className="teacher-info">
                    <Card.Title>{course_teacher}</Card.Title>
                    <div className="social">
                        <FaFacebook className="mx-2" color="#e79800" size="20px" />
                        <FaInstagram className="mx-2" color="#e79800" size="20px" />
                        <FaPhone className="mx-2" color="#e79800" size="20px" />
                        <FaEnvelope className="mx-2" color="#e79800" size="20px" />
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Teacher;