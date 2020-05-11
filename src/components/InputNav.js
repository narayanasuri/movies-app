import React from 'react';
import Suggestions from './Suggestions';
import '../styling/components/input-nav.scss';

export default (props) => {

    return (
        <div className="main-nav">
            <nav className="navbar navbar-dark bg-dark movie-navbar">
                <div id="navbarSearch">
                    <form className="form-inline">
                        <input
                            id="search-input"
                            className="form-control mr-sm-2 movie-navbar-form-input"
                            type="text"
                            placeholder="Search Movie Title..."
                            aria-label="Search"
                            onKeyUp={(e) => { props.handleType(e.target.value) }}></input>
                    </form>
                </div>
            </nav>
            <Suggestions suggestions={props.suggestions} selectMovie={props.selectMovie} />
        </div>
    )
}