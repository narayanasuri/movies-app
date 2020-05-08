import React from 'react';
import Suggestions from './Suggestions';
import '../styling/components/input-nav.scss';

export default (props) => {

    return (
        <div className="main-nav">
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="/">Movies App</a>
                <form className="form-inline">
                    <input
                        className="form-control mr-sm-2"
                        type="text"
                        placeholder="Search Movie Title..."
                        aria-label="Search"
                        onKeyUp={(e) => { props.handleType(e.target.value) }}></input>
                </form>
            </nav>
            <Suggestions suggestions={props.suggestions} selectMovie={props.selectMovie} />
        </div>
    )
}