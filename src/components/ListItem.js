import React from 'react';
import '../styling/components/list-item.scss';

export default (props) => {
    return (
        <li className="list-group-item"
        onClick={(e) => { props.selectMovie(props.movie) }}>{props.movie.title}</li>
    )
}