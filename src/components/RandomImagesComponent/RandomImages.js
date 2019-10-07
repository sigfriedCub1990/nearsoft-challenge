import React, { useState } from "react";
import { useApiCall } from "../../hooks/useApiCall";

import { connect } from "react-redux";

//* Styles
import "./RandomImages.css";
import { addFavorite } from "../../redux/actions/favoritesActions";

const RandomImages = props => {
  const [retry, setRetry] = useState(false);
  const picture = useApiCall(retry);

  if (!picture) return <div>Loooading...</div>;

  const getAnotherImage = () => {
    setRetry(!retry);
  };

  return (
    <div className="random-images">
      <div className="image-container">
        <div className="image-container__image">
          <img src={picture.image.url} alt="Soft kitty warm kitty" />
        </div>
        <div className="image-container__actions">
          <div className="action" onClick={getAnotherImage}>
            x
          </div>
          <div
            className="action"
            onClick={() => {
              props.addFavorite(picture.image.url);
              getAnotherImage();
            }}
          >
            ❤
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addFavorite: url => dispatch(addFavorite({ url }))
});

export default connect(
  null,
  mapDispatchToProps
)(RandomImages);
