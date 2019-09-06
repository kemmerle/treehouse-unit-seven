import React from 'react';
import NotFound from './NotFound';
import Photo from './Photo';
import { withRouter } from "react-router-dom";

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

    let path = props.history.location.pathname
    let pageTitle = path.slice(8)

    return (
        <div className="photo-container">
            <h2>{pageTitle}</h2>
            <ul>{photoArray}</ul>
        </div>
    );
}

export default withRouter(PhotoContainer);
