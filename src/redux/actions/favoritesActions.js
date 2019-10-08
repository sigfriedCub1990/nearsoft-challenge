import client from "../../httpClient";

export const GET_ALL_FAVORITES = "GET_ALL_FAVORITES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const addFavorite = payload => ({ type: ADD_FAVORITE, payload });
export const removeFavorite = payload => ({ type: REMOVE_FAVORITE, payload });

//* Thunk example
export const addFavoriteAsync = payload => {
  return async dispatch => {
    await client.post(`images/fav/${payload.id}`);
    dispatch(addFavorite(payload));
  };
};

export const removeFavoriteAsync = payload => {
  return async dispatch => {
    await client.delete(`images/fav/${payload.id}`);
    dispatch(removeFavorite(payload));
  };
};

export const getFavoritesAsync = () => {
  return async dispatch => {
    const { results } = await client.get(`images/fav/`);
    console.log(results.data.images);
  };
};
