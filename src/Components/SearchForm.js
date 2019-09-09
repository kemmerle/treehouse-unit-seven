//Here I import React and its component Component, so that my SearchForm can be
//stateful. I also import withRouter, a library that will allow me to change the
//url path in my search submit.

import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class SearchForm extends Component {
  //Here in state, I set the searchText property as an empty string.
    state = {
        searchText: ''
    }

    //The handleChange method tracks the user's query as he/she types it into
    //the search bar. It then sets the searchText property in state to the user's
    //query.
    handleChange = (event) => {
        this.setState({ searchText: event.target.value });
    }

    //In the handleSubmit function, I first call preventDefault(), so that the
    //the search doesn't submit or anything.

    //I then set the query variable to the searchText property for readability.
    //I then set the variable path to the search path I will use for all my searches.
    //Using withRouter's native 'push' method, I then change the url path
    //whenever a user submits a search.

    //Then I call the performSearch method with the searchText property as its
    //parameter. The performSearch method is carried out in the App container
    //and the results this method returns are rendered there.

    //Finally, I reset the search form by calling the event's native reset() method.
    handleSubmit = (event) => {
        event.preventDefault();
        let query = this.state.searchText;
        let path = `/search/${query}`;
        this.props.history.push(path);
        this.props.performSearch(this.state.searchText);

        event.currentTarget.reset();
    }

    render() {
      //Here, I set my form's onSubmit function as the handleSubmit method I
      //wrote above. I also set my input field's onChange function as the
      //handleChange method I wrote above, as well. 
        return (
            <form className="search-form" onSubmit={this.handleSubmit}>
                <input type="text"
                    onChange={this.handleChange}
                    name="searchText"
                    placeholder="Search..." />
                <button type="submit" className="search-button">
                    <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                        <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                </button>
            </form>
        )
    };
}

export default withRouter(SearchForm);
