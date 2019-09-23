import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Jk3HtGMLN8Ip2LF7BrrM7KSKAsQA2L9i';

const BASE_URL =
    'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
    `api-key=${NYT_API_KEY}&query=`;
// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchResults: [],
        searchQuery: "",
        value:""
    }

    // componentDidMount() {
    //     fetch(`${URL}api-key=${NYT_API_KEY}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             this.setState({
    //                 ...this.state,
    //                 reviews: data.results
    //             })
    //         })
    // }

    renderSearchResults = () => {
        //console.log(this.state.reviews)
        return this.state.reviews.map((review, idx) => {
            return <MovieReviews review={review} key={idx} />
        })
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({ 
            value: event.target.value,
            searchQuery: event.target.value
         });
    }

    handleSubmit = (event) => {
        console.log('An search result was submitted: ' + this.state.value);
        //let searchWord = this.state.value.toLowerCase()
        event.preventDefault();
        let searchUrl = BASE_URL.concat(this.state.value)//`${BASE_URL}${this.state.value}`
        // let searchUrl = `${URL}query=${this.state.value}&api-key=${NYT_API_KEY}`
        fetch(searchUrl)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    ...this.state,
                    reviews: data.results
                })
            })
    }

    // fetchSearchResults = () => {
    //     let searchUrl = `${URL}query=${this.state.searchQuery}`
    //    return fetch(searchUrl)
    //     .then(res=>res.json())
    //     .then(data=> this.setState({
    //         ...this.state,
    //         searchResults: data.results
    //     }, () => console.log("search results in search", this.state.searchResults)))
    // }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Search:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div className="searchable-movie-reviews">
                    <h1>Search Results</h1>
                    <div className="review-list">
                        {this.renderSearchResults()}
                    </div>
                </div>
            </div>

        )
    }
}