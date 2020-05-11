import React from 'react';
import ListItem from './ListItem';
import '../styling/components/suggestions.scss';

export default (props) => {
    return (
        <div className="suggestions-box">
            <div className="list-group suggestions-list">
                {
                    props.suggestions.map((movie) => (
                        <ListItem
                            key={movie.title}
                            movie={movie}
                            selectMovie={props.selectMovie}
                        />
                    ))
                }
            </div>
        </div>
    )
}