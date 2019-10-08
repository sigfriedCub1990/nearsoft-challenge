import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favoritesActions";

export const favoritesReducer = (state = { favorites: [] }, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      const newFavsArray = [...state.favorites];
      newFavsArray.push({ url: action.payload.url, id: action.payload.id });
      return Object.assign(
        {},
        { favorites: state.favorites },
        { favorites: newFavsArray }
      );
    case REMOVE_FAVORITE:
      const newFavs = [...state.favorites];
      const index = newFavs.findIndex(fav => fav.id == action.payload.id);
      newFavs.splice(index, 1);

      return Object.assign(
        {},
        { favorites: state.favorites },
        { favorites: newFavs }
      );
    default:
      return state;
  }
};
