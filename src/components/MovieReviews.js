// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {


    return (
        
    <div className="review">
        {props.review.multimedia !== null ?  <img src={props.review.multimedia.src} alt={props.review.multimedia.type}/> : <h1>no image</h1> }
        <h4>
                <a href={props.review.link.url} alt={props.review.link.suggested_link_text}>{props.review.headline}</a> 
        </h4>
        <p>{props.review.summary_short}</p>
    </div>
       
    )
}
export default MovieReviews;