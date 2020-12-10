import React from 'react';
import '../styling/components/landing-page.scss';

export default (props) => {

    return (
        <div id="landingPage">

            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">
                    <a id="brandName" className="navbar-brand" href="#">Movies</a>
                </div>
            </nav>

            <div className="body-container bg-dark">
                <div className="container headline">
                    <h1>Find your moment!</h1>
                    <p className="lead text-muted">With our app, you'll find the movie you need for the moment!</p>
                    <p><a className="btn btn-primary" href="#" role="button">Get Started &raquo;</a></p>
                </div>
            </div>

        </div>
    )
}