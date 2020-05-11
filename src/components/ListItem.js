import React from 'react';
import '../styling/components/list-item.scss';

export default (props) => {

    function onChangeSearchQuery(movie) {
        console.log(movie)
        props.selectMovie(props.movie)
    }

    return (
        <button type="button" className="list-group-item list-group-item-action suggestions-list-item"
        onClick={(e) => { onChangeSearchQuery(e) }}>{props.movie.title}</button>
    )
}