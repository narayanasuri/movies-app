import React from 'react';
import ListItem from './ListItem';
import '../styling/components/suggestions.scss';

export default (props) => {
    return (
        <ul className="list-group suggestions-box">
            {
                props.suggestions.map((movie) => (
                    <ListItem
                        key={movie.title}
                        movie={movie}
                        selectMovie={props.selectMovie}
                    />
                ))
            }
        </ul>
    )
}