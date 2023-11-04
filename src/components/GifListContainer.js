
import React, { Component } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

class GifListContainer extends Component {
  state = {
    gifs: [],
  };

  fetchGifs = (searchValue) => {
    const apiKey = 'qizDTpyy5trNl4NenfwzzChr91Rd8uD9';
    const url = `https://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=${apiKey}&rating=g`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ gifs: data.data.slice(0, 3) });
      })
      .catch((error) => console.error(error));
  };

  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
