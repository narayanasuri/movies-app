import React from 'react';
import ListItem from './ListItem';

export default (props) => {
    return (
        <div>
            {
                props.movies.map((movie) => (
                    <ListItem
                        key={movie.title}
                        movie={movie}
                    />
                ))
            }
        </div>
    )
}