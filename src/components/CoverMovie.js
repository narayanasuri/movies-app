import React from 'react';
import '../styling/components/cover-movie.scss';

export default (props) => {
    var containerStyle = {
        backgroundColor: '#222',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
    if(props.movie) {
        containerStyle = {
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("' +  props.movie.posterURL + '")',
            // backgroundImage: 'url("' + props.movie.posterURL + '"), linear-gradient(#eb01a5, #d13531)',
            // backgroundImage: 'url(' + props.movie.posterURL + ')',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }
    }
    return (
        <div className="movie-container" style={containerStyle}>
            {props.movie && 
                <div className="row movie-card">
                    <div className="col-4 poster-container">
                        <img className="poster-img" src={props.movie.posterURL} alt={props.movie.title}/>
                    </div>
                    <div className="col-8 ">
                        <h1 className="display-4">{props.movie.title}</h1>
                        <p className="lead">{props.movie.description}</p>
                        <hr className="my-4"></hr>
                        <p>Director : {props.movie.director}</p>
                        <p>Released : {props.movie.release}</p>
                        <p>Genre : {props.movie.genreTags}</p>
                        <p>Running Time : {props.movie.runningTime}</p>
                        <p>Rating : {props.movie.imdbRating}</p>
                    </div>
                </div>
            }
        </div>
    )
}