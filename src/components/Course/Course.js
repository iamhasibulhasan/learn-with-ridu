import React from 'react';
import { Col, Card } from 'react-bootstrap';
import Rating from 'react-rating';
import './Course.css';
import solidStar from '../../media/star-solid.svg';
import regularStar from '../../media/star-regular.svg';

const Course = (props) => {


    const { course_img, course_title, description, price, teacher_img, course_teacher, rating } = props.course;
    // console.log(course_img);
    return (

        <Col>
            <Card>
                <Card.Img variant="top" src={course_img} />
                <Card.Body>
                    <span className="c-price">${price}</span>
                    <Card.Title>{course_title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="short-info">
                    <div className="d-flex align-items-center">
                        <img className="teacher-img" src={teacher_img} alt="" />
                        <h6 className="mx-3">{course_teacher}</h6>
                    </div>
                    <div class="rating">

                        <Rating
                            initialRating={rating}
                            emptySymbol={<img src={regularStar} className="icon" />}
                            fullSymbol={<img src={solidStar} className="icon" />}
                            fractions={2}
                        />
                    </div>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Course;