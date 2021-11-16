import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

const Category = () => {
    return (
        <div className="container categories my-5">
            <h3 className="sec-title mb-4">Course Category</h3>
            <div className="category">
                <div className="mid-text">
                    <img src="http://kodeforest.net/html/uoe/extra-images/intro-1.jpg" />
                    <span>
                        <Link className="btn btn-warning" to="/courses">Category Name</Link>
                    </span>
                </div>
                <div className="mid-text">
                    <img src="http://kodeforest.net/html/uoe/extra-images/intro-1.jpg" />
                    <span>
                        <Link className="btn btn-warning" to="/courses">Category Name</Link>
                    </span>
                </div>
                <div className="mid-text">
                    <img src="http://kodeforest.net/html/uoe/extra-images/intro-1.jpg" />
                    <span>
                        <Link className="btn btn-warning" to="/courses">Category Name</Link>
                    </span>
                </div>
                <div className="mid-text">
                    <img src="http://kodeforest.net/html/uoe/extra-images/intro-1.jpg" />
                    <span>
                        <Link className="btn btn-warning" to="/courses">Category Name</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Category;