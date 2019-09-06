import React from 'react';
import NotFound from './NotFound';
import Photo from './Photo';

const PhotoContainer = props => {
    const photoData = props.photos;
    let photoArray;

    if (photoData.length > 0) {
        photoArray = photoData.map(photo =>
          <Photo
            key={photo.id}
            url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
            alt=""/>
          )
    } else {
        photoArray = <NotFound />
    }

    return (
        <div className="photo-container">
            <h2>{props.match.params.query}</h2>
            <ul>{photoArray}</ul>
        </div>
    );
}

export default PhotoContainer;
