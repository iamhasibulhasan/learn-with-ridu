import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faFileAlt, faCommentDots, faHome, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'



const ContactUs = () => {

    return (
        <div>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.764174157973!2d90.42804631448539!3d23.832227891563402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2d469292de58c739!2zMjPCsDQ5JzU2LjAiTiA5MMKwMjUnNDguOSJF!5e1!3m2!1sen!2sbd!4v1637067397525!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div className="container contact-us">
                <div>
                    <div>
                        <h3 className="con-title my-4">Send a Message</h3>
                        <Form className="row d-flex">
                            <div className="col-lg-6 user-info">
                                <Form.Group className="mb-3">
                                    <Form.Label className="little-title"><FontAwesomeIcon className="icon" icon={faUser} />Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label className="little-title"><FontAwesomeIcon className="icon" icon={faEnvelope} />Your Email</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label className="little-title"><FontAwesomeIcon className="icon" icon={faFileAlt} />Subject</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>

                                <div className="d-grid gap-2">
                                    <Button variant="warning" className="text-white" size="lg">
                                        Send Us
                                    </Button>
                                </div>
                            </div>
                            <div className="col-lg-6 message">
                                <Form.Group className="mb-3" >
                                    <Form.Label className="little-title"><FontAwesomeIcon className="icon" icon={faCommentDots} />Comments</Form.Label>
                                    <textarea cols="50" class="form-control"></textarea>
                                </Form.Group>

                            </div>
                        </Form>
                    </div>
                </div>
                <div>
                    <h3 className="con-title my-4">CONTACT INFO</h3>
                    <p className="little-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aspernatur consequuntur quis libero, magnam dolorem?</p>
                    <p className="little-title"><FontAwesomeIcon className="icon" icon={faHome} />Nikunja-2, Khilkhet, Dhaka-1229</p>
                    <p className="little-title"><FontAwesomeIcon className="icon" icon={faPhoneAlt} />+8801747979703</p>
                    <p className="little-title"><FontAwesomeIcon className="icon" icon={faEnvelope} />mdhasibulhasan.dev@gmail.com</p>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;