import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Jk3HtGMLN8Ip2LF7BrrM7KSKAsQA2L9i';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
    state = {
        reviews:[]
    }

    componentDidMount(){
        fetch(URL)
        .then(res=>res.json())
        .then( data => {
            this.setState({
                ...this.state,
                reviews: data.results
            }, () => console.log("reviews in latest", this.state.reviews))
        })
    }

    renderMovieReviews = () => {
        return this.state.reviews.map((review, idx) => {
            return <MovieReviews review={review} key={idx} />

        })
    }

    render(){
        return(
            <div className="latest-movie-reviews">
                <h1>Latest Reviews</h1>
                <div className="review-list">
                    {this.renderMovieReviews()}   
                </div>
            </div>
        )
    }
}