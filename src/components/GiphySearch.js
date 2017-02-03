import React from 'react';

import { checkStatus, parseJSON } from '../utils';

import Searchbar from './Searchbar';
import Results from './Results';

class GiphySearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: undefined,
      results: undefined
    }
  }

  onChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  onSearch = (event) => {
    event.preventDefault();

    const query = this.state.value.replace(/\s+/g, '+');
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`)
      .then(checkStatus)
      .then(parseJSON)
      .then(response => {
        let urls = response.data.map((result) => {
          return {
            thumbnail: result.images.downsized.url,
            original: result.images.original.url
          };
        })
        this.setState({
          results: urls
        })
      }, console.error);
  }

  render () {
    return (
      <div>
        <h1>kitten-finder.js</h1>
        <Searchbar
          onChange={this.onChange}
          onSearch={this.onSearch}
          value={this.state.value}
        />
        <Results results={this.state.results} />
      </div>
    )
  }
}

export default GiphySearch;