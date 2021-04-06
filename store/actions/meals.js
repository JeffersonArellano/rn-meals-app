import { TOGGLE_FAVORITE, SET_FILTERS } from './actionNamesConstants';

export const toggleFavorite = (mealId) => {
  return { type: TOGGLE_FAVORITE, mealId: mealId };
};

export const setFilters = (filterSettings) => {
  return { type: SET_FILTERS, filters: filterSettings };
};
