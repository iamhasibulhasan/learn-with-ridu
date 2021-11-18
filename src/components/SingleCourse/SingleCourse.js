import React, { useEffect, useState } from 'react';
import './SingleCourse.css';
import { useParams } from 'react-router';
import { FormControl, InputGroup, Button, ListGroup, Badge } from 'react-bootstrap';


const SingleCourse = () => {

    const course_code = useParams().course_code;
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('../../courses.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [course_code]);
    console.log(courses, course_code);



    return (
        <div className="container my-5">
            {
                courses.filter(course => course.course_code === course_code).map(c =>

                    <div className="main-div">
                        <div className="left-div">
                            <h2 className="c-title">{c.course_title}</h2>
                            <div className="course-info">
                                <div className="c-image my-2">
                                    <img src={c.course_img} className="mb-3" alt="" />
                                    <p>{c.description}</p>
                                </div>
                                <div className="c-info">
                                    <ListGroup style={{ fontSize: 14 }} variant="flush">
                                        <ListGroup.Item> <span style={{ fontWeight: 800 }}>Course Code:</span> <span style={{ color: "#e79800" }}>{c.course_code}</span></ListGroup.Item>
                                        <ListGroup.Item> <span style={{ fontWeight: 800 }}>Duration: </span> <span style={{ color: "#e79800" }}>{c.duration}</span></ListGroup.Item>
                                        <ListGroup.Item> <span style={{ fontWeight: 800 }}>Category:</span> <span style={{ color: "#e79800" }}>{c.category}</span></ListGroup.Item>
                                        <ListGroup.Item> <span style={{ fontWeight: 800 }}>Price:</span> <span style={{ color: "#e79800" }}>{c.price}</span></ListGroup.Item>
                                        <ListGroup.Item> <span style={{ fontWeight: 800 }}>Lesson:</span> <span style={{ color: "#e79800" }}>{c.lesson}</span></ListGroup.Item>
                                    </ListGroup>
                                    <div className="d-grid gap-2 mt-5">
                                        <Button variant="outline-warning" size="lg">Buy Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-div">
                            <InputGroup className="my-2">
                                <FormControl
                                    placeholder="Search here..."
                                    aria-label="Search here..."
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-secondary" id="button-addon2">
                                    Search
                                </Button>
                            </InputGroup>
                            <div className="mt-3">
                                <div>
                                    <h3>Tags</h3>
                                </div>
                                <div className="tags-div mx-4" >
                                    <Button variant="outline-warning">
                                        english <Badge bg="primary">9</Badge>
                                        <span className="visually-hidden">unread messages</span>
                                    </Button>
                                    <Button variant="outline-primary">
                                        bangladesh <Badge bg="primary">8</Badge>
                                        <span className="visually-hidden">unread messages</span>
                                    </Button>
                                    <Button variant="outline-danger">
                                        lesson <Badge bg="primary">5</Badge>
                                        <span className="visually-hidden">unread messages</span>
                                    </Button>
                                    <Button variant="outline-success">
                                        life <Badge bg="primary">7</Badge>
                                        <span className="visually-hidden">unread messages</span>
                                    </Button>
                                    <Button variant="outline-primary">
                                        cultural <Badge bg="primary">9</Badge>
                                        <span className="visually-hidden">unread messages</span>
                                    </Button>
                                    <Button variant="outline-warning">
                                        games <Badge bg="primary">8</Badge>
                                        <span className="visually-hidden">unread messages</span>
                                    </Button>
                                    <Button variant="outline-danger">
                                        accounting <Badge bg="primary">1</Badge>
                                        <span className="visually-hidden">unread messages</span>
                                    </Button>
                                    <Button variant="outline-warning">
                                        photography <Badge bg="primary">9</Badge>
                                        <span className="visually-hidden">unread messages</span>
                                    </Button>
                                    <Button variant="outline-success">
                                        economic <Badge bg="primary">2</Badge>
                                        <span className="visually-hidden">unread messages</span>
                                    </Button>
                                    <Button variant="outline-danger">
                                        business <Badge bg="primary">3</Badge>
                                        <span className="visually-hidden">unread messages</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    );
};

export default SingleCourse;