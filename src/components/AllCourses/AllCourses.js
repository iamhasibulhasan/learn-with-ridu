import React from 'react';
import './AllCourses.css';
import { Col, Card, Button } from 'react-bootstrap';
import Rating from 'react-rating';
import solidStar from '../../media/star-solid.svg';
import regularStar from '../../media/star-regular.svg';
import { Link } from 'react-router-dom';


const AllCourses = (props) => {
    const { course_code, course_img, course_title, description, price, category, lesson, rating, published_date } = props.course;

    return (
        <Col>
            <Card className="courses-card">
                <div className="course-card">
                    <div>
                        <Card.Img variant="top" className="course-img" src={course_img} />
                    </div>
                    <div>
                        <Card.Body>
                            <Card.Title className="course-title">{course_title}</Card.Title>
                            <p>Course Price: <span className="title-color">${price}</span></p>
                            <p>Category: <span className="title-color">{category}</span></p>
                            <p>Lesson: <span className="title-color">{lesson}</span></p>
                            <p>Publish Date: <span className="title-color">{published_date}</span></p>
                            <div class="rating my-3">

                                Rating: <Rating
                                    initialRating={rating}
                                    emptySymbol={<img src={regularStar} className="icon" />}
                                    fullSymbol={<img src={solidStar} className="icon" />}
                                    fractions={2}
                                />
                            </div>
                            <Card.Text className="mb-4">{description}</Card.Text>
                            <Link to={`courses/${course_code}`}><Button variant="outline-warning">Read More</Button></Link>
                        </Card.Body>
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default AllCourses;