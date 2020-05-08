import React from 'react';

export default (props) => {
    return (
        <div>
            {props.movie && 
                <div className="jumbotron">
                    <h1 className="display-4">{props.movie.title}</h1>
                    <p className="lead">{props.movie.description}</p>
                    <hr className="my-4"></hr>
                    <p>Director : {props.movie.director}</p>
                    <p>Released : {props.movie.release}</p>
                    <p>Genre : {props.movie.genreTags}</p>
                    <p>Running Time : {props.movie.runningTime}</p>
                    <p>Rating : {props.movie.imdbRating}</p>
                </div>
            }
        </div>
    )
}