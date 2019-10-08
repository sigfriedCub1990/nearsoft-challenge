import React from "react";
import { connect } from "react-redux";

import "./FavComponent.css";
import { removeFavorite } from "../../redux/actions/favoritesActions";

const FavsComponent = props => {
  return (
    <div className="fav-component">
      {props.favorites.map((url, index) => (
        <div className="favorite" key={index}>
          <img src={url} alt="Soft kitty" />
          <div
            className="favorite__action"
            onClick={() => props.removeFav(url)}
          >
            x
          </div>
        </div>
      ))}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeFav: url => dispatch(removeFavorite({ url }))
});
const mapStateToProps = state => ({ favorites: state.favorites });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavsComponent);
