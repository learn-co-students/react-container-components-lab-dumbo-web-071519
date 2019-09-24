import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {

  state = {
    reviews: []
  }

  fetchReviews = () => {
    fetch("https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=p8jSAMmksGR6AJI2A0XvpnJqyAdRPfnU")
    .then(resp=>resp.json())
    .then(data => {
      this.setState({
        reviews: data.results
      })
    })
  }

  componentDidMount(){
    this.fetchReviews()
  }

  render(){
    let i=0
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
