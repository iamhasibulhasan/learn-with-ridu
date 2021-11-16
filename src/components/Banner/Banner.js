import React from 'react';
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faTrophy, faChalkboardTeacher, faUsers } from '@fortawesome/free-solid-svg-icons'

const Banner = () => {
    return (
        <div className="sec-banner my-5 text-white">
            <div className="container my-3 banner">
                <div className="single-banner">
                    <span className="icon"><FontAwesomeIcon icon={faUsers} /></span>
                    <h3 className="" counter>94,456</h3>
                    <h5>FOREIGN FOLLOWERS</h5>
                </div>
                <div className="single-banner">
                    <span className="icon"><FontAwesomeIcon icon={faBookOpen} /></span>
                    <h3 className="" counter>11,223</h3>
                    <h5>CLASSES COMPLETE</h5>
                </div>
                <div className="single-banner">
                    <span className="icon"><FontAwesomeIcon icon={faTrophy} /></span>
                    <h3 className="" counter>282,673</h3>
                    <h5>STUDENTS ENROLLED</h5>
                </div>
                <div className="single-banner">
                    <span className="icon"><FontAwesomeIcon icon={faChalkboardTeacher} /></span>
                    <h3 className="" counter>370</h3>
                    <h5>CERTIFIED TEACHERS</h5>
                </div>
            </div>
        </div>
    );
};

export default Banner;