import React from "react";
import { connect } from "react-redux";

import "./FavComponent.css";
import { removeFavoriteAsync } from "../../redux/actions/favoritesActions";

const FavsComponent = props => {
  return (
    <div className="fav-component">
      {props.favorites.map(({ url, id }, index) => (
        <div className="favorite" key={index}>
          <img src={url} alt="Soft kitty" />
          <div
            className="favorite__action"
            onClick={() => props.removeFavAsync(id, url)}
          >
            x
          </div>
        </div>
      ))}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeFavAsync: (id, url) => dispatch(removeFavoriteAsync({ id, url }))
});

const mapStateToProps = state => ({ favorites: state.favorites });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavsComponent);
