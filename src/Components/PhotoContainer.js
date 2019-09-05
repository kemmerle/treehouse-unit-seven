import React, { Component } from 'react';
import axios from 'axios';

import Photo from './Photo';

class PhotoContainer extends Component {
  state = {
    photos: [],
    loading: true
  };

  performSearch = (apiKey, tag) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
         console.log('Error fetching and parsing data', error);
      });
  }

  componentDidMount() {
    this.performSearch(this.props.apiKey, this.props.tag);
  }

  render() {
    let photoArray = this.state.photos.map(photo => {
                   return <Photo  farm={photo.farm}
                            server={photo.server}
                            id={photo.id}
                            secret={photo.secret}
                            key={photo.id} />
        });
    return (
      <div className="photo-container">
        <ul>
          { photoArray }
        </ul>
      </div>
    )
  }
}

export default PhotoContainer;
