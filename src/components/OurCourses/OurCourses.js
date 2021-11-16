import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './OurCourses.css';

const OurCourses = () => {
    return (
        <div className="container our-courses my-5">
            <h3 className="sec-title mb-4">Our Courses</h3>
            <Row xs={1} md={3} className="g-4">
                {Array.from({ length: 3 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="http://kodeforest.net/html/uoe/extra-images/cur-wrap-2.jpg" />
                            <Card.Body>
                                <span className="c-price">$200</span>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-between align-items-center short-info">
                                <div className="d-flex align-items-center">
                                    <img src="http://kodeforest.net/html/uoe/extra-images/cur_ft-2.jpg" alt="" />
                                    <h6 className="mx-3">Sara Jonson</h6>
                                </div>
                                <div class="rating">
                                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>(12)</span>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default OurCourses;