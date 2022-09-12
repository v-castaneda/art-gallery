import React from 'react';

function Gallery(props){
    return (
        <div style={{'width': '50%'}}>
            <img src={props.objectImg} alt={props.title} />
            <p>{props.artist}</p>
        </div>
    )
}

export default Gallery;