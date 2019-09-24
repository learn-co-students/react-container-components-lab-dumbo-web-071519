import React, { Component, Fragment } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {

  state ={
    reviews:[],
    searchTerm:undefined
  }

  search = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  searchFor = (event) => {
    event.preventDefault()
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=p8jSAMmksGR6AJI2A0XvpnJqyAdRPfnU`)
    .then(resp=>resp.json())
    .then(data=>{this.setState({ reviews: data.results })})
  }

  render(){

    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.searchFor}>
        Search:<input onChange={this.search} value={this.state.searchTerm}/>
        <input input="submit" type="Submit"/>
        </form>
        {this.state.reviews.length!==0 ? <MovieReviews reviews={this.state.reviews}/> : null}
      </div>

    )
  }

}
