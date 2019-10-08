import React, { useState } from "react";
import { useApiCall } from "../../hooks/useApiCall";

import { connect } from "react-redux";

//* Styles
import "./RandomImages.css";

//* Actions
import { addFavoriteAsync } from "../../redux/actions/favoritesActions";

const RandomImages = props => {
  const [retry, setRetry] = useState(false);
  const picture = useApiCall(retry);

  const getAnotherImage = () => {
    setRetry(!retry);
  };

  if (!picture) return <div>Loading...</div>;

  return (
    <div className="random-images">
      <div className="image-container">
        <div className="image-container__image">
          <img src={picture.image.url} alt="Soft kitty warm kitty" />
        </div>
      </div>
      <div className="image-container__actions">
        <div className="action" onClick={getAnotherImage}>
          x
        </div>
        <div
          className="action"
          onClick={() => {
            props.addFavoriteAsync(picture.image.url, picture.image.id);
            getAnotherImage();
          }}
        >
          ❤
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addFavoriteAsync: (url, id) => dispatch(addFavoriteAsync({ url, id }))
});

export default connect(
  null,
  mapDispatchToProps
)(RandomImages);
